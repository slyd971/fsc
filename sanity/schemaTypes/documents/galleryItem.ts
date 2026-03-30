import { defineField, defineType } from "sanity";
import { documentGroups } from "@/sanity/lib/editorial";

export default defineType({
  name: "galleryItem",
  title: "Gallery item",
  type: "document",
  groups: documentGroups,
  fields: [
    defineField({ name: "title", type: "localizedString", group: "content" }),
    defineField({ name: "category", type: "localizedString", group: "content" }),
    defineField({ name: "image", type: "mediaItem", group: "media" }),
    defineField({
      name: "size",
      type: "string",
      options: { list: ["portrait", "landscape", "square"] },
      initialValue: "landscape",
      group: "settings",
    }),
  ],
});
