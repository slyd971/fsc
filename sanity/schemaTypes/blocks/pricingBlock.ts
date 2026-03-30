import { defineField, defineType } from "sanity";
import { objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "pricingBlock",
  title: "Pricing block",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "eyebrow", type: "localizedString", fieldset: "content" }),
    defineField({ name: "title", type: "localizedString", fieldset: "content" }),
    defineField({ name: "body", type: "localizedText", fieldset: "content" }),
    defineField({ name: "items", type: "array", of: [{ type: "pricingOption" }], fieldset: "content" }),
    defineField({ name: "cta", type: "cta", fieldset: "content" }),
  ],
});
