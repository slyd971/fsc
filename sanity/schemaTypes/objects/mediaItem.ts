import { defineField, defineType } from "sanity";
import { hideForContributors, objectFieldsets } from "@/sanity/lib/editorial";

export default defineType({
  name: "mediaItem",
  title: "Visuel",
  type: "object",
  fieldsets: objectFieldsets,
  preview: {
    select: {
      title: "caption.fr",
      subtitle: "alt.fr",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Visuel de galerie",
        subtitle: subtitle || "Ajoute une image et un texte alternatif",
        media,
      };
    },
  },
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      description: "Ajoute ici la photo affichée sur le site. C'est le champ principal à remplir.",
      type: "image",
      fieldset: "media",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Ajoute une photo pour ce visuel."),
    }),
    defineField({
      name: "alt",
      title: "Texte alternatif",
      description: "Décris brièvement la photo pour l’accessibilité. Renseigne FR et EN.",
      type: "localizedString",
      fieldset: "content",
      validation: (Rule) => Rule.required().error("Ajoute un texte alternatif."),
    }),
    defineField({
      name: "caption",
      title: "Légende optionnelle",
      description: "Optionnelle. Utilisée seulement si une section a besoin d’un titre ou d’une légende image.",
      type: "localizedString",
      fieldset: "content",
    }),
    defineField({
      name: "imageUrl",
      title: "URL image externe",
      type: "string",
      fieldset: "internal",
      hidden: hideForContributors,
      description: "URL de secours utilisée pendant les migrations ou le seed.",
    }),
  ],
});
