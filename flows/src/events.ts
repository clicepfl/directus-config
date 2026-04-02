import {
  ReadItemOutput,
  ReadSingletonOutput,
  RegularCollections,
  SingletonCollections,
  UnpackList,
  UpdateItemOutput,
} from "@directus/sdk";
import { Schema } from "./types/schema.js";

type Flatten<T> = T extends any[] ? T[number] : T;
type IdOf<T> = T extends { id?: number }
  ? number
  : T extends { id?: string }
    ? string
    : never;
export type SchemaKey = keyof Schema;
export type EventType = "create" | "update" | "delete";

export type RawCreateEvent<
  K extends SchemaKey,
  Item = UnpackList<Schema[K]>,
> = {
  event: `${K}.items.create`;
  payload: Flatten<Schema[K]>;
  key: IdOf<Flatten<Schema[K]>>;
  collection: K;
};

export type RawUpdateEventRegular<
  K extends RegularCollections<Schema>,
  Item = UnpackList<Schema[K]>,
> = {
  event: `${K}.items.update`;
  payload: Flatten<Schema[K]>;
  keys: string[];
  collection: K;
};
export type RawUpdateEventSingleton<
  K extends SingletonCollections<Schema>,
  Item = UnpackList<Schema[K]>,
> = {
  event: `${K}.items.update`;
  payload: Flatten<Schema[K]>;
  key: IdOf<Schema[K]>;
  collection: K;
};
export type RawUpdateEvent<K extends SchemaKey> =
  K extends RegularCollections<Schema>
    ? RawUpdateEventRegular<K>
    : K extends SingletonCollections<Schema>
      ? RawUpdateEventSingleton<K>
      : never;

export type CreateEvent<K extends SchemaKey, Item = UnpackList<Schema[K]>> = {
  update: (payload: Item) => Promise<UpdateItemOutput<Schema, K, {}>>;
} & RawCreateEvent<K>;

export type UpdateEventRegular<
  K extends RegularCollections<Schema>,
  Item = UnpackList<Schema[K]>,
> = {
  fetch: () => Promise<ReadItemOutput<Schema, K, {}>[]>;
  update: (payload: Item) => Promise<UpdateItemOutput<Schema, K, {}>[]>;
} & RawUpdateEventRegular<K>;
export type UpdateEventSingleton<
  K extends SingletonCollections<Schema>,
  Item = UnpackList<Schema[K]>,
> = {
  fetch: () => Promise<ReadSingletonOutput<Schema, K, {}>>;
  update: (payload: Item) => Promise<UpdateItemOutput<Schema, K, {}>[]>;
} & RawUpdateEventSingleton<K>;
export type UpdateEvent<K extends SchemaKey> =
  K extends RegularCollections<Schema>
    ? UpdateEventRegular<K>
    : K extends SingletonCollections<Schema>
      ? UpdateEventSingleton<K>
      : never;

export type RawDeleteEvent<K extends SchemaKey> = {
  event: `${K}.items.delete`;
  payload: string[];
  keys: string[];
  collection: K;
};
export type DeleteEvent<K extends SchemaKey> = RawDeleteEvent<K>;

export type DirectusEvent<
  K extends SchemaKey,
  T extends EventType,
> = T extends "create"
  ? CreateEvent<K>
  : T extends "update"
    ? UpdateEvent<K>
    : DeleteEvent<K>;
export type RawDirectusEvent<
  K extends SchemaKey,
  T extends EventType,
> = T extends "create"
  ? RawCreateEvent<K>
  : T extends "update"
    ? RawUpdateEvent<K>
    : RawDeleteEvent<K>;

export type DirectusMessage = {
  payload: RawDirectusEvent<any, any>;
  accountability: {
    role: string;
    user: string;
    roles: string[];
    admin: boolean;
    app: boolean;
    ip: string;
    userAgent: string;
    origin: string;
    session: string;
  };
};
