import { EventHandler, EventType, SchemaKey } from "./events.js";

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
