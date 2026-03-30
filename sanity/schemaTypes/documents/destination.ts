import { defineField, defineType } from "sanity";
import { documentGroups, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  groups: documentGroups,
  fields: [
    defineField({ name: "title", type: "localizedString", group: "content" }),
    defineField({ name: "slug", type: "localizedSlug", group: "settings", readOnly: readOnlyForContributors }),
    defineField({ name: "city", type: "localizedString", group: "content" }),
    defineField({ name: "eyebrow", type: "localizedString", group: "content" }),
    defineField({ name: "description", type: "localizedText", group: "content" }),
    defineField({ name: "heroDescription", type: "localizedText", group: "content" }),
    defineField({ name: "image", type: "mediaItem", group: "media" }),
    defineField({ name: "heroImage", type: "mediaItem", group: "media" }),
    defineField({ name: "badge", type: "localizedString", group: "content" }),
    defineField({ name: "seo", type: "seo", group: "seo" }),
  ],
});
