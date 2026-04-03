import { defineField, defineType } from "sanity";
import { readOnlyForContributors } from "@/sanity/lib/editorial";
import BilingualInput from "@/sanity/components/BilingualInput";

export default defineType({
  name: "localizedSlug",
  title: "Slug FR / EN",
  type: "object",
  options: {
    collapsible: false,
    collapsed: false,
  },
  components: {
    input: BilingualInput,
  },
  fields: [
    defineField({
      name: "fr",
      title: "Slug francais",
      description: "Genere depuis le titre francais. Reserve aux admins.",
      type: "slug",
      options: { source: "title.fr" },
      readOnly: readOnlyForContributors,
    }),
    defineField({
      name: "en",
      title: "Slug anglais",
      description: "Genere depuis le titre anglais. Reserve aux admins.",
      type: "slug",
      options: { source: "title.en" },
      readOnly: readOnlyForContributors,
    }),
  ],
});
