import { DirectusClient, RestClient } from "@directus/sdk";
import { EventType, DirectusEvent, SchemaKey, Directus } from "./directus.js";
import { Schema } from "./types/schema.js";
import { SendMailOptions, SentMessageInfo, Transporter } from "nodemailer";
import { Logger } from "./logger.js";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

// This seed is random per server run and ensures that all flows registered went through the
// `makeFlow` function, which ensures typechecking.
const SEED = Math.floor(Math.random() * 1e12);

type EventHandler<K extends SchemaKey, T extends EventType> = (
  event: DirectusEvent<K, T>,
  utils: HandlerUtils,
) => Promise<void>;
interface Flow<K extends SchemaKey, T extends EventType> {
  name: string;
  handler: EventHandler<K, T>;
}

export type HandlerUtils = {
  directus: Directus;
  mailer: Mailer;
  logger: Logger;
};

export type Mailer = {
  sendMail: (opts: SendMailOptions) => Promise<SentMessageInfo>;
};

interface FlowEntry<K extends SchemaKey, T extends EventType> {
  id: `${K}.items.${T}`;
  handler: Flow<K, T>;
  seed: number;
}

export function makeFlow<K extends SchemaKey, T extends EventType>(
  name: `${K}.items.${T}`,
  handler: Flow<K, T>,
): FlowEntry<K, T> {
  return { id: name, handler, seed: SEED };
}

export async function buildFlowRegistry(): Promise<{
  [name: string]: Flow<any, any>[];
}> {
  const flows: {
    [name: string]: Flow<any, any>[];
  } = {};

  // Import all files from the `dist/flows/` directory to run all `registerFlows` calls.
  const files = (await readdir("./dist/flows/", { recursive: true }))
    .filter((f) => f.toString().endsWith(".js"))
    .map((f) => join(process.cwd(), "./dist/flows/", f.toString()));

  for (const file of files) {
    // Get the default export fo the file, which should be a `Flow<any, any>[]`.
    const entries: FlowEntry<any, any>[] = (await import(file)).default;

    for (const entry of entries) {
      if (entry.seed !== SEED) {
        throw new Error(
          "Don't try to cheat the typechecker and use `makeFlow` :3",
        );
      }

      if (!(entry.id in flows)) {
        flows[entry.id] = [];
      }
      flows[entry.id].push(entry.handler);
    }
  }

  return flows;
}
