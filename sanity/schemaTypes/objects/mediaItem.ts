import { defineField, defineType } from "sanity";
import { hideForContributors } from "@/sanity/lib/editorial";

export default defineType({
  name: "mediaItem",
  title: "Visuel",
  type: "object",
  options: {
    collapsible: false,
    collapsed: false,
  },

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
      title: "Photo a importer",
      description:
        "Glisse une image ici ou clique pour importer la photo. Formats conseilles: JPG, PNG, WebP. Poids recommande: 3 Mo max. Largeur recommandee: 2000 px minimum.",
      type: "image",
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
      description: "Decris simplement ce que montre la photo. Renseigne FR et EN.",
      type: "localizedString",
      validation: (Rule) => Rule.required().error("Ajoute un texte alternatif."),
    }),

    defineField({
      name: "caption",
      title: "Légende optionnelle",
      description: "Petit texte visible sous l'image si besoin. Facultatif.",
      type: "localizedString",
    }),

    defineField({
      name: "imageUrl",
      title: "URL image externe (legacy)",
      type: "string",
      hidden: hideForContributors,
      description: "Fallback temporaire pour anciens contenus. Utiliser si possible une image JPG, PNG ou WebP.",
    }),
  ],
});
