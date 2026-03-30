import { defineField, defineType } from "sanity";
import { objectFieldsets, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "label", type: "localizedString", fieldset: "content" }),
    defineField({ name: "href", type: "url", fieldset: "content" }),
    defineField({ name: "icon", type: "string", fieldset: "internal", readOnly: readOnlyForContributors }),
  ],
});
