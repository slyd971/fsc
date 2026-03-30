import { defineField, defineType } from "sanity";
import { documentGroups, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: documentGroups,
  fields: [
    defineField({ name: "title", title: "Titre de la page", type: "localizedString", group: "content" }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "URL publique de la page. Champ réservé aux admins pour éviter les changements involontaires.",
      type: "localizedSlug",
      group: "settings",
      readOnly: readOnlyForContributors,
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
    defineField({
      name: "blocks",
      title: "Blocs de page",
      description: "Ajoute et réorganise les sections visibles de la page.",
      type: "array",
      group: "content",
      of: [
        { type: "heroBlock" },
        { type: "introBlock" },
        { type: "destinationsBlock" },
        { type: "galleryBlock" },
        { type: "videoBlock" },
        { type: "testimonialsBlock" },
        { type: "pricingBlock" },
        { type: "contactBlock" },
      ],
    }),
  ],
});
