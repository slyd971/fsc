import { defineField, defineType } from "sanity";
import { objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "title", type: "localizedString", fieldset: "content" }),
    defineField({ name: "description", type: "localizedText", fieldset: "content" }),
    defineField({ name: "image", type: "image", fieldset: "media" }),
  ],
});
