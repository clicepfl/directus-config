import { createServer } from "http";
import { flows, Mailer } from "./registry.js";
import { readdirSync } from "fs";
import { join } from "path";
import {
  readItems,
  readSingleton,
  updateItem,
  updateItems,
  updateSingleton,
} from "@directus/sdk";
import {
  DirectusEvent,
  DirectusMessage,
  makeDirectus,
  RawCreateEvent,
  RawUpdateEvent,
} from "./directus.js";
import { createTransport } from "nodemailer";
import { ENVS } from "./env.js";
import createLogger from "./logger.js";

const logger = createLogger("global");

// Import all files from the `dist/flows/` directory to run all `registerFlows` calls.
const files = readdirSync("./dist/flows/", { recursive: true }).filter((f) =>
  f.toString().endsWith(".js"),
);
for (const file of files) {
  import(join(process.cwd(), "./dist/flows/", file.toString()));
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

// Construct the `Mailer` instance used by the flow. Using a wrapper allows to globally control some options of the mailer.
const mailer: Mailer = {
  sendMail: async (opts) => {
    // Use `env.STMP_FROM` as default.
    return nodemailer.sendMail({ from: ENVS.smtp.from, ...opts });
  },
};

// Server entry point.
const server = createServer(async (req, res) => {
  let endWith = (code: number, message: string) => {
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

      // Creates the directus handler, and returns an error if null (i.e. TTL is 0).
      const directus = makeDirectus(message.accountability.userAgent);
      if (!directus) {
        endWith(429, "Too Many Requests");
        return;
      }

      // Status of the different flows for this event.
      const statuses = [];

      // Creates the functions to fetch/update the entries affected by the event.
      let methods: any;
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
            await flow.handler(event, {
              directus,
              mailer,
              logger: createLogger(flow.name),
            });
            statuses.push(`${flow.name}: OK`);
          } catch (e) {
            statuses.push(`${flow.name}: ERR ${e}`);
          }
        }
      }

      logger.info(
        `[EVENT ${event.event}] ${statuses.length > 0 ? `\n${statuses.map((s) => "  " + s).join("\n")}` : "No registered handler"}`,
      );
      res.writeHead(200, "OK");
      res.end();
    } catch (error) {
      logger.error(error);
      endWith(422, "Unprocessable Content");
    }
  });
});

server.listen(ENVS.port, () => {
  logger.info(`Server listening on port ${ENVS.port}`);

  logger.info("Registered handlers:");
  for (const event of Object.keys(flows)) {
    logger.info(`  ${event}: ${flows[event].map((f) => f.name).join(", ")}`);
  }
});
