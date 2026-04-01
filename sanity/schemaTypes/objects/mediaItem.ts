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
      description: "Ajoute ici la photo affichée sur le site.",
      type: "image",
      fieldset: "media",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { imageUrl?: string } | undefined;

          // ✅ OK si image OU imageUrl
          if (value || parent?.imageUrl) {
            return true;
          }

          return "Ajoute une photo ou une URL image externe.";
        }),
    }),

    defineField({
      name: "alt",
      title: "Texte alternatif",
      description: "Décris brièvement la photo pour l’accessibilité (FR + EN).",
      type: "localizedString",
      fieldset: "content",
      validation: (Rule) => Rule.required().error("Ajoute un texte alternatif."),
    }),

    defineField({
      name: "caption",
      title: "Légende optionnelle",
      description: "Utilisée si besoin d’un titre ou caption.",
      type: "localizedString",
      fieldset: "content",
    }),

    defineField({
      name: "imageUrl",
      title: "URL image externe (legacy)",
      type: "string",
      fieldset: "internal",
      hidden: hideForContributors,
      description: "Fallback temporaire pour anciens contenus (à supprimer plus tard).",
    }),
  ],
});