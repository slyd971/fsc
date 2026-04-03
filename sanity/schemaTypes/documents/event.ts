import { defineField, defineType } from "sanity";
import { documentGroups, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  groups: documentGroups,
  fields: [
    defineField({ name: "title", type: "localizedString", group: "content" }),
    defineField({ name: "slug", type: "localizedSlug", group: "settings", readOnly: readOnlyForContributors }),
    defineField({ name: "eyebrow", type: "localizedString", group: "content" }),
    defineField({ name: "description", type: "localizedText", group: "content" }),
    defineField({ name: "dateLabel", type: "localizedString", group: "content" }),
    defineField({ name: "destination", type: "reference", to: [{ type: "destination" }, { type: "trip" }], group: "settings" }),
    defineField({
      name: "media",
      title: "Image de l'evenement",
      description: "Photo principale utilisee pour presenter l'evenement.",
      type: "mediaItem",
      group: "media",
    }),
    defineField({ name: "cta", type: "cta", group: "content" }),
  ],
});
