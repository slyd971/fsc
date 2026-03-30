import { defineField, defineType } from "sanity";
import { documentGroups, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  groups: documentGroups,
  fields: [
    defineField({ name: "name", type: "localizedString", group: "content" }),
    defineField({ name: "role", type: "localizedString", group: "content" }),
    defineField({ name: "quote", type: "localizedText", group: "content" }),
    defineField({ name: "city", type: "localizedString", group: "content" }),
    defineField({ name: "moment", type: "localizedString", group: "content" }),
    defineField({ name: "accent", type: "localizedString", group: "content" }),
    defineField({ name: "featured", type: "boolean", initialValue: false, group: "settings", readOnly: readOnlyForContributors }),
  ],
});
