import { Schema } from "../types/schema";

type Flatten<T> = T extends any[] ? T[number] : T;
type IdOf<T> = T extends { id?: unknown } ? T["id"] : never;

export interface CreateEvent<K extends keyof Schema> {
  event: `${K}.items.create`;
  payload: Flatten<Schema[K]>;
  key: IdOf<Flatten<Schema[K]>>;
  collection: K;
}

export interface UpdateEvent<K extends keyof Schema> {
  event: `${K}.items.update`;
  payload: Flatten<Schema[K]>;
  key: string[];
  collection: K;
}

export interface DeleteEvent<K extends keyof Schema> {
  event: `${K}.items.delete`;
  payload: string[];
  key: string[];
  collection: K;
}

export type Event<K extends keyof Schema> =
  | CreateEvent<K>
  | UpdateEvent<K>
  | DeleteEvent<K>;

function test(e: CreateEvent<"artists">) {
  e.key;
  e.payload;

  foo(test)
}

function foo<K extends keyof Schema>(handler: (e: Event<K>) => void) {}
