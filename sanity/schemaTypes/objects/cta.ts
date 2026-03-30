import { defineField, defineType } from "sanity";
import { objectFieldsets, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "label", title: "Libellé du bouton", type: "localizedString", fieldset: "content" }),
    defineField({ name: "href", title: "Lien", type: "string", fieldset: "content" }),
    defineField({
      name: "variant",
      title: "Variante",
      type: "string",
      options: { list: ["primary", "secondary"] },
      initialValue: "primary",
      fieldset: "internal",
      readOnly: readOnlyForContributors,
    }),
  ],
});
