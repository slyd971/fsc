import { defineField, defineType } from "sanity";
import { objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "localizedString",
  title: "Texte multilingue",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "fr", title: "French", type: "string", fieldset: "content" }),
    defineField({ name: "en", title: "English", type: "string", fieldset: "content" }),
  ],
});
