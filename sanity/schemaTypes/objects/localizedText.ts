import { defineField, defineType } from "sanity";
import { objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "localizedText",
  title: "Texte long multilingue",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "fr", title: "French", type: "text", rows: 4, fieldset: "content" }),
    defineField({ name: "en", title: "English", type: "text", rows: 4, fieldset: "content" }),
  ],
});
