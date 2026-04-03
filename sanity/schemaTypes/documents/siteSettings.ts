import { defineField, defineType } from "sanity";
import { documentGroups, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  groups: documentGroups,
  fields: [
    defineField({ name: "siteTitle", title: "Titre du site", type: "localizedString", group: "seo" }),
    defineField({ name: "siteDescription", title: "Description du site", type: "localizedText", group: "seo" }),
    defineField({ name: "brandName", title: "Nom de la marque", type: "localizedString", group: "content" }),
    defineField({ name: "brandTagline", title: "Signature de marque", type: "localizedText", group: "content" }),
    defineField({
      name: "brandMark",
      title: "Sigle / marque courte",
      type: "string",
      group: "internal",
      readOnly: readOnlyForContributors,
    }),
    defineField({
      name: "navigation",
      title: "Navigation principale",
      description: "Liens du header et du footer.",
      type: "array",
      group: "settings",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Libellé", type: "localizedString" }),
            defineField({ name: "href", title: "Lien", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "contactMethods",
      title: "Méthodes de contact",
      description: "Coordonnées affichées dans le footer, la section contact et certains CTA.",
      type: "array",
      group: "settings",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Libellé", type: "localizedString" }),
            defineField({ name: "value", title: "Valeur visible", type: "localizedString" }),
            defineField({ name: "detail", title: "Précision", type: "localizedString" }),
            defineField({ name: "href", title: "Lien d'action", type: "string" }),
            defineField({ name: "icon", title: "Icône", type: "string", readOnly: readOnlyForContributors }),
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Liens sociaux",
      type: "array",
      group: "settings",
      of: [{ type: "socialLink" }],
    }),
  ],
});
