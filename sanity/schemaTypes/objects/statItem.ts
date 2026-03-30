import { defineField, defineType } from "sanity";
import { objectFieldsets, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "statItem",
  title: "Stat item",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "value", type: "string", fieldset: "content" }),
    defineField({ name: "label", type: "localizedString", fieldset: "content" }),
    defineField({ name: "icon", type: "string", fieldset: "internal", readOnly: readOnlyForContributors }),
  ],
});
