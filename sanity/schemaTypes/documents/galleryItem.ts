import { defineField, defineType } from "sanity";
import { documentGroups } from "@/sanity/lib/editorial";

export default defineType({
  name: "galleryItem",
  title: "Photo de galerie",
  type: "document",
  groups: documentGroups,
  preview: {
  select: {
    title: "title.fr",
    subtitle: "tag.title.fr",
    media: "image.image",
  },
  prepare({ title, subtitle, media }) {
    return {
      title: title || "Photo sans titre",
      subtitle: subtitle || "Tag non renseigné",
      media,
    };
  },
},
  fields: [
    defineField({
      name: "title",
      title: "Titre visible",
      description: "Petit titre affiche dans la galerie. Renseigne FR et EN.",
      type: "localizedString",
      group: "content",
      validation: (Rule) => Rule.required().error("Ajoute un titre pour cette photo."),
    }),
    defineField({
      name: "tag",
      title: "Dossier / tag",
      description: "Choisis le dossier de la photo. Il sert aussi de filtre sur le site.",
      type: "reference",
      to: [{ type: "galleryTag" }],
      group: "content",
      validation: (Rule) => Rule.required().error("Sélectionne un tag de galerie."),
    }),
    defineField({
      name: "category",
      title: "Catégorie héritée",
      description: "Ancien champ conservé pour compatibilité. Le tag galerie devient la source principale.",
      type: "localizedString",
      group: "internal",
      hidden: true,
    }),
    defineField({
      name: "image",
      title: "Visuel de galerie",
      description: "1. Ouvre ce bloc. 2. Importe la photo. 3. Ajoute le texte alternatif. 4. Ajoute une legende si besoin.",
      type: "mediaItem",
      group: "media",
      validation: (Rule) => Rule.required().error("Ajoute le visuel de galerie."),
      options: {
        collapsible: false,
        collapsed: false,
      },
    }),
    defineField({
      name: "size",
      title: "Format d’affichage",
      description: "Choisis la forme principale de la photo dans la galerie.",
      type: "string",
      options: {
        list: [
          { title: "Portrait", value: "portrait" },
          { title: "Paysage", value: "landscape" },
          { title: "Carré", value: "square" },
        ],
        layout: "radio",
      },
      initialValue: "landscape",
      group: "settings",
    }),
  ],
});
