import { defineField, defineType } from "sanity";
import { objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "videoBlock",
  title: "Video block",
  type: "object",
  fieldsets: objectFieldsets,
  fields: [
    defineField({ name: "eyebrow", type: "localizedString", fieldset: "content" }),
    defineField({ name: "title", type: "localizedString", fieldset: "content" }),
    defineField({ name: "body", type: "localizedText", fieldset: "content" }),
    defineField({ name: "items", type: "array", of: [{ type: "mediaItem" }], fieldset: "media" }),
    defineField({ name: "cta", type: "cta", fieldset: "content" }),
  ],
});
