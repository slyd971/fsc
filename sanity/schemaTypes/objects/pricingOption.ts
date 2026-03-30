import { defineField, defineType } from "sanity";
import { objectFieldsets, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "pricingOption",
  title: "Pack / offre",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "name", title: "Nom du pack", type: "localizedString", fieldset: "content" }),
    defineField({ name: "priceLabel", title: "Prix / libellé tarifaire", type: "localizedString", fieldset: "content" }),
    defineField({ name: "pitch", title: "Argumentaire", type: "localizedText", fieldset: "content" }),
    defineField({ name: "included", title: "Inclus", type: "array", of: [{ type: "localizedString" }], fieldset: "content" }),
    defineField({ name: "excluded", title: "Non inclus", type: "array", of: [{ type: "localizedString" }], fieldset: "content" }),
    defineField({ name: "featured", title: "Mettre en avant", type: "boolean", initialValue: false, fieldset: "settings", readOnly: readOnlyForContributors }),
  ],
});
