import { defineField, defineType } from "sanity";
import { documentGroups, readOnlyForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "galleryTag",
  title: "Sous-dossier galerie",
  type: "document",
  groups: documentGroups,
  preview: {
    select: {
      title: "title.fr",
      subtitle: "slug.fr.current",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Tag sans titre",
        subtitle: subtitle ? `/${subtitle}` : "Slug non renseigné",
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Nom du sous-dossier / tag",
      description: "Exemples : London, Rotterdam, Geneva, Paris, Parties. Ce nom sert aussi de tag / filtre côté front.",
      type: "localizedString",
      group: "content",
      validation: (Rule) => Rule.required().error("Ajoute un nom de tag."),
    }),
    defineField({
      name: "slug",
      title: "Slug technique",
      description: "Utilisé pour organiser les sous-dossiers de galerie. Réservé aux admins.",
      type: "localizedSlug",
      group: "settings",
      readOnly: readOnlyForContributors,
    }),
    defineField({
      name: "description",
      title: "Description optionnelle",
      description: "Petit repère éditorial pour expliquer l’usage de ce tag.",
      type: "localizedText",
      group: "content",
    }),
  ],
});
