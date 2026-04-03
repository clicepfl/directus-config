import { readItem, updateSingleton } from "@directus/sdk";
import { DirectusEvent } from "./directus.js";
import { HandlerUtils, registerFlow } from "./registry.js";

const myFlow = {
  name: "My flow",
  handler: async (
    e: DirectusEvent<"artists", "create" | "update">,
    { directus, mailer }: HandlerUtils,
  ) => {
    if (e.event === "artists.items.create") {
      console.log(await directus.request(readItem("artists", e.key)));
      const res = await e.update({ link: "https://yay.org" });
      console.log(res);
    } else {
      let artists = await e.fetch();
      console.log(artists);
    }
  },
};

const myFlow3 = {
  name: "My flow3",
  handler: async (
    e: DirectusEvent<"association", "update">,
    { directus, mailer }: HandlerUtils,
  ) => {
    if (e.payload.name !== "clic") {
      await directus.request(updateSingleton("association", { name: "clic" }));
      console.log(await e.fetch());
    }
  },
};
registerFlow("artists.items.create", myFlow);
registerFlow("artists.items.update", myFlow);
registerFlow("association.items.update", myFlow3);
