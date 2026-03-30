import { defineField, defineType } from "sanity";
import { objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "destinationsBlock",
  title: "Destinations block",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "eyebrow", type: "localizedString", fieldset: "content" }),
    defineField({ name: "title", type: "localizedString", fieldset: "content" }),
    defineField({ name: "body", type: "localizedText", fieldset: "content" }),
    defineField({ name: "items", type: "array", of: [{ type: "reference", to: [{ type: "destination" }, { type: "trip" }] }], fieldset: "content" }),
    defineField({ name: "cta", type: "cta", fieldset: "content" }),
  ],
});
