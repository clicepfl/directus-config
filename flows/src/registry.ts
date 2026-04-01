import { DirectusClient, RestClient } from "@directus/sdk";
import { EventType, DirectusEvent, SchemaKey } from "./events.js";
import { Schema } from "./types/schema.js";

type EventHandler<K extends SchemaKey, T extends EventType> = (
  event: DirectusEvent<K, T>,
  opts: HandlerOpts,
) => Promise<void>;
interface Flow<K extends SchemaKey, T extends EventType> {
  name: String;
  handler: EventHandler<K, T>;
}

export type Directus = DirectusClient<Schema> & RestClient<Schema>;
export type HandlerOpts = { directus: Directus };

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
