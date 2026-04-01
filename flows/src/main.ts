import { createServer } from "http";
import { flows, Mailer } from "./registry.js";
import { readdirSync } from "fs";
import { join } from "path";
import {
  createDirectus,
  rest,
  staticToken,
  updateItem,
  updateItems,
} from "@directus/sdk";
import { DirectusEvent } from "./events.js";
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

let directus = createDirectus(ENVS.directusUrl).with(rest());
if (ENVS.directusToken) {
  directus = directus.with(staticToken(ENVS.directusToken));
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
    console.log(o);
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
      const event: any = JSON.parse(body);
      const statuses = [];

      let devent;

      if (event.event.endsWith(".create")) {
        devent = {
          ...event,
          async update(payload: any) {
            return await directus.request(
              updateItem(event.collection, event.key, payload),
            );
          },
        };
      } else if (event.event.endsWith(".update")) {
        devent = {
          ...event,
          async update(payload: any) {
            return await directus.request(
              updateItems(event.collection, event.keys, payload),
            );
          },
        };
      }

      if (devent.event in flows) {
        for (const flow of flows[devent.event]) {
          try {
            await flow.handler(devent, { directus, mailer });
            statuses.push(`${flow.name}: OK`);
          } catch (e) {
            statuses.push(`${flow.name}: ERR ${e}`);
          }
        }
      }

      console.log(
        `[EVENT ${devent.event}] ${statuses.length > 0 ? `\n${statuses.map((s) => "  " + s).join("\n")}` : "No registered handler"}`,
      );
      res.writeHead(200, "OK");
      res.end();
    } catch (error) {
      endWith(415, "Unsupported Media Type");
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
