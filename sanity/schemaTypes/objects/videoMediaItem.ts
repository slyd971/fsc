import { defineField, defineType } from "sanity";

export default defineType({
  name: "videoMediaItem",
  title: "Video item",
  type: "object",
  options: {
    collapsible: false,
    collapsed: false,
  },
  preview: {
    select: {
      title: "caption.fr",
      subtitle: "videoUrl",
      media: "image",
      fileName: "videoFile.asset.originalFilename",
    },
    prepare({ title, subtitle, media, fileName }) {
      return {
        title: title || "Élément vidéo",
        subtitle: fileName || subtitle || "Ajoute une vidéo ou une URL vidéo",
        media,
      };
    },
  },
  fields: [
    defineField({
      name: "image",
      title: "Image de couverture",
      description:
        "Image affichée avant lecture ou si aucune vidéo n'est fournie. Formats conseilles: JPG, PNG, WebP. Poids recommande: 3 Mo max. Largeur recommandee: 2000 px minimum.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Texte alternatif",
      description: "Décris simplement ce que montre l'image de couverture. Renseigne FR et EN.",
      type: "localizedString",
      validation: (Rule) => Rule.required().error("Ajoute un texte alternatif."),
    }),
    defineField({
      name: "caption",
      title: "Titre / légende",
      description: "Texte visible dans le bloc vidéo. Renseigne FR et EN si besoin.",
      type: "localizedString",
    }),
    defineField({
      name: "videoFile",
      title: "Fichier vidéo",
      description:
        "Importe ici un fichier MP4, MOV ou WebM. Format recommande: MP4. Poids recommande: 50 Mo max, 100 Mo grand maximum. Resolution conseillee: 1080p maximum.",
      type: "file",
      options: {
        accept: "video/mp4,video/quicktime,video/webm",
      },
    }),
    defineField({
      name: "videoUrl",
      title: "URL vidéo externe",
      description:
        "Optionnel. Colle ici un lien direct vers un fichier video (.mp4, .mov, .webm) si tu n'importes pas de fichier. Les pages Instagram, TikTok et YouTube ne sont pas des fichiers directs.",
      type: "url",
    }),
  ],
});
