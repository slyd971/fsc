import { defineField, defineType } from "sanity";
import { documentGroups, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "trip",
  title: "Trip",
  type: "document",
  groups: documentGroups,
  fields: [
    defineField({ name: "title", title: "Titre du trip", type: "localizedString", group: "content" }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "URL publique du trip. Réservé aux admins.",
      type: "localizedSlug",
      group: "settings",
      readOnly: readOnlyForContributors,
    }),
    defineField({ name: "city", title: "Ville", type: "localizedString", group: "content" }),
    defineField({ name: "eyebrow", title: "Sur-titre", type: "localizedString", group: "content" }),
    defineField({ name: "description", title: "Description courte", type: "localizedText", group: "content" }),
    defineField({ name: "heroDescription", title: "Texte du hero", type: "localizedText", group: "content" }),
    defineField({
      name: "image",
      title: "Image de carte",
      description: "Image utilisee dans les listes et cartes du site.",
      type: "mediaItem",
      group: "media",
    }),
    defineField({
      name: "heroImage",
      title: "Image hero",
      description: "Grande image d'ouverture de la page trip.",
      type: "mediaItem",
      group: "media",
    }),
    defineField({ name: "badge", title: "Badge", type: "localizedString", group: "content" }),
    defineField({ name: "introTitle", title: "Titre d'introduction", type: "localizedString", group: "content" }),
    defineField({ name: "introParagraphs", title: "Paragraphes d'introduction", type: "array", of: [{ type: "localizedText" }], group: "content" }),
    defineField({
      name: "experiences",
      title: "Moments / expériences",
      description: "Les grandes séquences du trip visibles sur la page détail.",
      type: "array",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "localizedString" }),
            defineField({ name: "dateLabel", title: "Repère date / moment", type: "localizedString" }),
            defineField({ name: "description", title: "Description", type: "localizedText" }),
            defineField({
              name: "image",
              title: "Image",
              description: "Photo liee a ce moment du trip.",
              type: "mediaItem",
            }),
            defineField({ name: "includes", title: "Inclus / points clés", type: "array", of: [{ type: "localizedString" }] }),
          ],
        },
      ],
    }),
    defineField({ name: "pricingOptions", title: "Offres / packs", type: "array", of: [{ type: "pricingOption" }], group: "content" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
});
