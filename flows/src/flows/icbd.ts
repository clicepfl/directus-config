import { readItem, readItems, updateItem } from "@directus/sdk";
import { DirectusEvent } from "../directus.js";
import { HandlerUtils, registerFlow } from "../registry.js";
import { ICBDActivity, ICBDActivityTimeslot } from "../types/aliases.js";

const updateActivityStatus = {
  name: "Update ICBD activity status",
  handler: async (
    e: DirectusEvent<
      "icbd_activities_registrations",
      "create" | "update" | "delete"
    >,
    { directus, logger }: HandlerUtils,
  ) => {
    let activities: ICBDActivity[] = [];
    switch (e.event) {
      case "icbd_activities_registrations.items.create":
        activities =
          typeof e.payload.icbd_activity === "number"
            ? [
                await directus.request(
                  readItem("icbd_activities", e.payload.icbd_activity),
                ),
              ]
            : [];
        break;
      case "icbd_activities_registrations.items.update":
        const toFetch = [
          ...new Set((await e.fetch()).map((e) => e.icbd_activity!)),
        ];
        activities = await directus.request(
          readItems("icbd_activities", { filter: { id: { _in: toFetch } } }),
        );
      case "icbd_activities_registrations.items.delete":
        activities = await directus.request(readItems("icbd_activities"));
    }
    activities = activities.filter((a) => a.timeslots !== null);

    logger.info(
      "Updating activities",
      activities.map((a) => a.id),
    );

    for (const activity of activities) {
      const other_registrations = await directus.request(
        readItems("icbd_activities_registrations", {
          filter: { icbd_activity: { _eq: activity.id } },
        }),
      );

      const timeslots = activity.timeslots as ICBDActivityTimeslot[];
      const new_timeslots = timeslots.map((t) => {
        const assigned = other_registrations.filter(
          (r) => r.start === t.start_time,
        ).length;
        const full = t.max_attendees <= assigned;

        if (full !== t.full) {
          logger.info(
            `Updating fullness of ${activity.id} (${t.start_time}) to ${full}`,
          );
        }

        return { ...t, full };
      });

      await directus.request(
        updateItem("icbd_activities", activity.id!, {
          timeslots: new_timeslots,
        }),
      );
    }
  },
};

registerFlow(
  "icbd_activities_registrations.items.create",
  updateActivityStatus,
);
registerFlow(
  "icbd_activities_registrations.items.update",
  updateActivityStatus,
);
registerFlow(
  "icbd_activities_registrations.items.delete",
  updateActivityStatus,
);
