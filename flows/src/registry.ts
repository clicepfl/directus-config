import { Directus, EventType, Event, SchemaKey } from "./events.js";

export type EventHandler<K extends SchemaKey, T extends EventType> = (
  event: Event<K, T>,
  directus: Directus,
) => Promise<void>;
interface Flow<K extends SchemaKey, T extends EventType> {
  name: String;
  handler: EventHandler<K, T>;
}

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
