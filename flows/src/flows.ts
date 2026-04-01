import { readItem, readItems } from "@directus/sdk";
import { DirectusEvent } from "./events.js";
import { HandlerOpts, registerFlow } from "./registry.js";

const myFlow = {
  name: "My flow",
  handler: async (
    e: DirectusEvent<"artists", "create" | "update">,
    { directus }: HandlerOpts,
  ) => {
    if (e.event === "artists.items.create") {
      console.log(await directus.request(readItem("artists", e.key)));
    } else {
      console.log(
        await directus.request(
          readItems("artists", {
            filter: { id: { _in: e.keys.map(parseInt) } },
          }),
        ),
      );
    }
  },
};
registerFlow("artists.items.create", myFlow);
registerFlow("artists.items.update", myFlow);
