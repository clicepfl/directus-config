import { createServer } from "http";
import { Directus, flows, Mailer } from "./registry.js";
import { readdirSync } from "fs";
import { join } from "path";
import {
  createDirectus,
  readItems,
  readSingleton,
  rest,
  staticToken,
  updateItem,
  updateItems,
  updateSingleton,
} from "@directus/sdk";
import {
  DirectusEvent,
  DirectusMessage,
  RawCreateEvent,
  RawUpdateEvent,
} from "./events.js";
import { createTransport } from "nodemailer";

function getEnvNullable(name: string): string | null {
  return typeof process.env[name] === "string" ? process.env[name] : null;
}
function getEnv(name: string): string {
  if (!(name in process.env)) {
    throw Error(`Missing env ${name}`);
  }

  return getEnvNullable(name)!;
}
const ENVS = {
  port: parseInt(getEnvNullable("PORT") || "3000"),

  directusUrl: getEnv("DIRECTUS_URL")!,
  directusToken: getEnvNullable("DIRECTUS_TOKEN"),
  directus_agent_base:
    getEnvNullable(" DIRECTUS_AGENT_BASE") || "directus-flows-",
  directus_agent_ttl: parseInt(getEnvNullable(" DIRECTUS_AGENT_TTL") || "5"),

  smtp: {
    host: getEnv("SMTP_HOST"),
    port: parseInt(getEnv("SMTP_PORT")),
    secure: getEnv("SMTP_SECURE") !== "false",
    user: getEnv("SMTP_USER"),
    password: getEnv("SMTP_PASSWORD"),
    from: getEnv("SMTP_FROM"),
  },
};

// Import all files from the `dist` directory to run all `registerFlows` calls.
const files = readdirSync("./dist", { recursive: true }).filter((f) =>
  f.toString().endsWith(".js"),
);
for (const file of files) {
  import(join(process.cwd(), "dist", file.toString()));
}

const DIRECTUS_AGENT_BASE = "directus-flows-";
const DIRECTUS_AGENT_TTL = 5;
function makeDirectus(incomingAgent: string): Directus | null {
  let agent = `${DIRECTUS_AGENT_BASE}${DIRECTUS_AGENT_TTL}`;

  let m = incomingAgent.match(`${DIRECTUS_AGENT_BASE}(\\d+)`);
  if (m) {
    const ttl = parseInt(m[1]);
    if (ttl <= 0) {
      return null;
    }
    agent = `${DIRECTUS_AGENT_BASE}${ttl - 1}`;
  }

  let directus = createDirectus(ENVS.directusUrl).with(
    rest({
      onRequest: (r) => {
        r.headers = { ...(r.headers || {}), "User-Agent": agent };
        return r;
      },
    }),
  );
  if (ENVS.directusToken) {
    directus = directus.with(staticToken(ENVS.directusToken));
  }

  return directus;
}

const nodemailer = createTransport({
  host: ENVS.smtp.host,
  port: ENVS.smtp.port,
  secure: ENVS.smtp.secure, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: ENVS.smtp.user,
    pass: ENVS.smtp.password,
  },
});
if (!(await nodemailer.verify())) {
  throw new Error("Unable to connect to mail server");
}

const mailer: Mailer = {
  sendMail: async (opts) => {
    let o = { from: ENVS.smtp.from, ...opts };
    return nodemailer.sendMail(o);
  },
};

// Server entry point.
const server = createServer(async (req, res) => {
  let endWith = (code: number, message: string) => {
    console.log(`[${req.method} ${req.url}] ${code} ${message}`);
    res.writeHead(code, message);
    res.end();
  };
  const parsedURL = new URL(req.url ?? "", `http://${req.headers.host}`);

  // Healthcheck route.
  if (req.method === "GET" && parsedURL.pathname === "/alive") {
    endWith(200, "OK");
    return;
  }

  // Request must be a POST on / with json data.
  if (req.method !== "POST") {
    endWith(405, "Method not allowed");
    return;
  }
  if (parsedURL.pathname !== "/") {
    endWith(404, "Not Found");
    return;
  }
  if (req.headers["content-type"] !== "application/json") {
    endWith(415, "Unsupported Media Type");
    return;
  }

  // Read data into body.
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    try {
      const message: DirectusMessage = JSON.parse(body);
      const directus = makeDirectus(message.accountability.userAgent);
      if (!directus) {
        endWith(429, "Too Many Requests");
        return;
      }

      const statuses = [];
      let methods;

      if (message.payload.event.endsWith(".create")) {
        let create = message.payload as RawCreateEvent<any, any>;
        methods = {
          async update(payload: any) {
            return await directus.request(
              updateItem(message.payload.collection, create.key, payload),
            );
          },
        };
      } else if (message.payload.event.endsWith(".update")) {
        let update = message.payload as RawUpdateEvent<any>;
        if ("keys" in update) {
          methods = {
            ...message,
            async fetch() {
              return await directus.request(
                readItems(update.collection, {
                  filter: { id: { _in: update.keys } },
                }),
              );
            },
            async update(payload: any) {
              return await directus.request(
                updateItems(update.collection, update.keys, payload),
              );
            },
          };
        } else {
          methods = {
            ...message,
            async fetch() {
              return await directus.request(readSingleton(update.collection));
            },
            async update(payload: any) {
              return await directus.request(
                updateSingleton(update.collection, payload),
              );
            },
          };
        }
      }

      const event: DirectusEvent<any, any> = {
        ...message.payload,
        ...methods,
      } as DirectusEvent<any, any>;

      if (event.event in flows) {
        for (const flow of flows[event.event]) {
          try {
            await flow.handler(event, { directus, mailer });
            statuses.push(`${flow.name}: OK`);
          } catch (e) {
            statuses.push(`${flow.name}: ERR ${e}`);
          }
        }
      }

      console.log(
        `[EVENT ${event.event}] ${statuses.length > 0 ? `\n${statuses.map((s) => "  " + s).join("\n")}` : "No registered handler"}`,
      );
      res.writeHead(200, "OK");
      res.end();
    } catch (error) {
      console.error(error);
      endWith(422, "Unprocessable Content");
    }
  });
});

server.listen(ENVS.port, () => {
  console.log(`Server listening on port ${ENVS.port}`);
  console.log("Registered handlers:");

  for (const event of Object.keys(flows)) {
    console.log(`  ${event}: ${flows[event].map((f) => f.name).join(", ")}`);
  }
});
