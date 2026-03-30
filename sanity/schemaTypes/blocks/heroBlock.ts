import { defineField, defineType } from "sanity";
import { objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "heroBlock",
  title: "Hero block",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "microLabel", title: "Micro-label", type: "localizedString", fieldset: "content" }),
    defineField({ name: "eyebrow", type: "localizedString", fieldset: "content" }),
    defineField({ name: "title", type: "localizedString", fieldset: "content" }),
    defineField({ name: "body", type: "localizedText", fieldset: "content" }),
    defineField({ name: "backgroundWord", title: "Mot décoratif de fond", type: "localizedString", fieldset: "content" }),
    defineField({ name: "media", type: "mediaItem", fieldset: "media" }),
    defineField({ name: "primaryCta", type: "cta", fieldset: "content" }),
    defineField({ name: "secondaryCta", type: "cta", fieldset: "content" }),
    defineField({ name: "stats", type: "array", of: [{ type: "statItem" }], fieldset: "content" }),
    defineField({ name: "chorusItems", title: "Mots du bandeau animé", type: "array", of: [{ type: "localizedString" }], fieldset: "content" }),
  ],
});
