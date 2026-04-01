import { Schema } from "./types/schema.js";

type Flatten<T> = T extends any[] ? T[number] : T;
type IdOf<T> = T extends { id?: number }
  ? number
  : T extends { id?: string }
    ? string
    : never;
export type SchemaKey = keyof Schema;
export type EventType = "create" | "update" | "delete";

export type CreateEvent<K extends SchemaKey> = {
  event: `${K}.items.create`;
  payload: Flatten<Schema[K]>;
  key: IdOf<Flatten<Schema[K]>>;
  collection: K;
};

export type UpdateEvent<K extends SchemaKey> = {
  event: `${K}.items.update`;
  payload: Flatten<Schema[K]>;
  keys: string[];
  collection: K;
};

export type DeleteEvent<K extends SchemaKey> = {
  event: `${K}.items.delete`;
  payload: string[];
  keys: string[];
  collection: K;
};

export type DirectusEvent<
  K extends SchemaKey,
  T extends EventType,
> = T extends "create"
  ? CreateEvent<K>
  : T extends "update"
    ? UpdateEvent<K>
    : DeleteEvent<K>;
