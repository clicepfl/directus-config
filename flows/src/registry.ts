import { DirectusClient, RestClient } from "@directus/sdk";
import { EventType, DirectusEvent, SchemaKey, Directus } from "./directus.js";
import { Schema } from "./types/schema.js";
import { SendMailOptions, SentMessageInfo, Transporter } from "nodemailer";

type EventHandler<K extends SchemaKey, T extends EventType> = (
  event: DirectusEvent<K, T>,
  opts: HandlerOpts,
) => Promise<void>;
interface Flow<K extends SchemaKey, T extends EventType> {
  name: String;
  handler: EventHandler<K, T>;
}

export type HandlerOpts = {
  directus: Directus;
  mailer: Mailer;
};

export type Mailer = {
  sendMail: (opts: SendMailOptions) => Promise<SentMessageInfo>;
};

export const flows: { [name: string]: Flow<any, any>[] } = {};

export function registerFlow<K extends SchemaKey, T extends EventType>(
  name: `${K}.items.${T}`,
  handler: Flow<K, T>,
) {
  if (name in flows) {
    flows[name].push(handler);
  } else {
    flows[name] = [handler];
  }
}
