import { Schema } from "../types/schema";

type Flatten<T> = T extends any[] ? T[number] : T;
type IdOf<T> = T extends { id?: unknown } ? T["id"] : never;
type EventType = "create" | "update" | "delete";

export type CreateEvent<K extends keyof Schema> = {
  event: `${K}.items.create`;
  payload: Flatten<Schema[K]>;
  key: IdOf<Flatten<Schema[K]>>;
  collection: K;
};

export type UpdateEvent<K extends keyof Schema> = {
  event: `${K}.items.update`;
  payload: Flatten<Schema[K]>;
  key: string[];
  collection: K;
};

export type DeleteEvent<K extends keyof Schema> = {
  event: `${K}.items.delete`;
  payload: string[];
  key: string[];
  collection: K;
};

export type Event<
  K extends keyof Schema,
  T extends EventType,
> = T extends "create"
  ? CreateEvent<K>
  : T extends "update"
    ? UpdateEvent<K>
    : DeleteEvent<K>;

export type EventHandler<K extends keyof Schema, T extends EventType> = (
  event: Event<K, T>,
) => void;

function registerFlow<K extends keyof Schema, T extends EventType>(
  name: `${K}.items.${T}`,
  handler: EventHandler<K, T>,
) {
  // smth
}

function myHandler(e: Event<"artists" | "association", "create" | "update">) {
  console.log("smth happened");
}

registerFlow("artists.items.create", myHandler);
registerFlow("artists.items.update", myHandler);
registerFlow("association.items.create", myHandler);
registerFlow("association.items.update", myHandler);
