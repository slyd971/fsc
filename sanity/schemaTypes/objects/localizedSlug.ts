import { defineField, defineType } from "sanity";
import { objectFieldsets, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "localizedSlug",
  title: "Slug multilingue",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "fr", title: "Slug français", type: "slug", options: { source: "title.fr" }, fieldset: "settings", readOnly: readOnlyForContributors }),
    defineField({ name: "en", title: "Slug anglais", type: "slug", options: { source: "title.en" }, fieldset: "settings", readOnly: readOnlyForContributors }),
  ],
});
