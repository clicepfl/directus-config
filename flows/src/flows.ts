import { readItem, readItems } from "@directus/sdk";
import { DirectusEvent } from "./events.js";
import { HandlerOpts, registerFlow } from "./registry.js";

const myFlow = {
  name: "My flow",
  handler: async (
    e: DirectusEvent<"artists", "create" | "update">,
    { directus, mailer }: HandlerOpts,
  ) => {
    if (e.event === "artists.items.create") {
      console.log(await directus.request(readItem("artists", e.key)));
      mailer.sendMail({
        to: "lucie.mermod@epfl.ch",
        subject: "New artist",
        text: `New artist just dropped: ${e.payload.name} :OOO`,
      });
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
