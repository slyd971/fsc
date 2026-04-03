import { defineField, defineType } from "sanity";
import BilingualInput from "@/sanity/components/BilingualInput";

export default defineType({
  name: "localizedString",
  title: "Texte FR / EN",
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
      title: "Francais",
      description: "Version francaise.",
      type: "string",
    }),
    defineField({
      name: "en",
      title: "English",
      description: "English version.",
      type: "string",
    }),
  ],
});
