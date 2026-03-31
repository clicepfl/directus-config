import { createServer } from "http";
import { Event } from "./types.js";
import { flows } from "./registry.js";
import { readdirSync, stat } from "fs";
import { join } from "path";

// Import all files from the `dist` directory to run all `registerFlows` calls.
const files = readdirSync("./dist", { recursive: true }).filter((f) =>
  f.toString().endsWith(".js"),
);
for (const file of files) {
  import(join(process.cwd(), "dist", file.toString()));
}

// Server entry point.
const server = createServer((req, res) => {
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
      const event: Event<any, any> = JSON.parse(body);
      const statuses = [];

      if (event.event in flows) {
        for (const flow of flows[event.event]) {
          try {
            await flow.handler(event);
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
      endWith(415, "Unsupported Media Type");
    }
  });
});

const port = process.env["PORT"] || 3000;
server.listen(process.env["PORT"] || 3000, () => {
  console.log(`Server listening on port ${port}`);
  console.log("Registered handlers:");

  for (const event of Object.keys(flows)) {
    console.log(`  ${event}: ${flows[event].map((f) => f.name).join(", ")}`);
  }
});
