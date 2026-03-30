import { defineField, defineType } from "sanity";
import { hideForContributors, objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "mediaItem",
  title: "Média",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "image", title: "Image", type: "image", fieldset: "media" }),
    defineField({ name: "alt", title: "Texte alternatif", type: "localizedString", fieldset: "content" }),
    defineField({ name: "caption", title: "Légende", type: "localizedString", fieldset: "content" }),
    defineField({
      name: "imageUrl",
      title: "URL image externe",
      type: "string",
      fieldset: "internal",
      hidden: hideForContributors,
      description: "URL de secours utilisée pendant les migrations ou le seed.",
    }),
  ],
});
