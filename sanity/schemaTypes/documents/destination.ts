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
    defineField({
      name: "image",
      title: "Image de carte",
      description: "Image utilisee dans les listes et apercus.",
      type: "mediaItem",
      group: "media",
    }),
    defineField({
      name: "heroImage",
      title: "Image hero",
      description: "Grande image d'ouverture de la page destination.",
      type: "mediaItem",
      group: "media",
    }),
    defineField({ name: "badge", type: "localizedString", group: "content" }),
    defineField({ name: "seo", type: "seo", group: "seo" }),
  ],
});
