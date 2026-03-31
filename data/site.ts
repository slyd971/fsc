import type {
  DestinationPreview,
  DestinationPageData,
  GalleryItem,
  Testimonial,
  NavItem,
  Highlight,
  ContactMethod,
} from "@/types";

/* =============================
   SITE DATA (FR)
============================= */

export const siteData = {
  metadata: {
    title: "French Soca Crew",
    description:
      "Voyages carnaval premium, événements centrés sur la soca et expériences culturelles caribéennes imaginés par French Soca Crew.",
  },

  brand: {
    name: "French Soca Crew",
    mark: "FSC",
    tagline:
      "Voyage, carnaval et énergie caribéenne réunis dans une même expérience partagée.",
  },

  navigation: {
    items: [
      { label: "Accueil", href: "/" },
      { label: "Trips", href: "/#trips" },
      { label: "Galerie", href: "/gallery" },
      { label: "Contact", href: "/#contact" },
    ] satisfies NavItem[],
  },

  hero: {
    eyebrow:
      "Association française dédiée aux voyages carnaval et aux expériences soca",
    title: "French Soca Crew",
    subtitle:
      "Nous imaginons des voyages de groupe premium, des expériences événementielles et des moments culturels portés par la soca, l’esprit carnaval et l’énergie de la communauté caribéenne.",
    primaryCta: { label: "Découvrir nos trips", href: "/#trips" },
    secondaryCta: { label: "Nous contacter", href: "/#contact" },
    stats: [
      { value: "10+", label: "Années d'expérience", icon: "sparkles" },
      { value: "25+", label: "Roads", icon: "map" },
      { value: "12+", label: "Jouvert", icon: "sunrise" },
      { value: "500L+", label: "De rhum partagé", icon: "glass" },
    ],
    image: "/fsc-crew-1.jpg",
    imageAlt: "Visuel de groupe French Soca Crew",
  },

  about: {
    eyebrow: "À propos",
    title: "Pensé pour la road.",
    intro:
      "French Soca Crew réunit logistique de voyage, direction culturelle et vraie énergie de communauté.",
    paragraphs: [
      "Nous organisons des voyages carnaval, des escapades de groupe et des expériences centrées sur la musique.",
      "Chaque trip est imaginé comme une atmosphère complète : énergie, événements et crew.",
    ],
    highlights: [
      {
        title: "Communauté",
        description:
          "Un crew de voyage pensé autour du lien et des souvenirs partagés.",
      },
      {
        title: "Expériences carnaval",
        description:
          "Des trips construits autour de l’émotion et de la musique.",
      },
      {
        title: "Vibes caribéennes",
        description:
          "Soca, diaspora et immersion culturelle dans chaque détail.",
      },
    ] satisfies Highlight[],
  },

  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Énergie de road estivale",
      description:
        "Un city break à haute vibration construit autour des moments de parade.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "Photo de groupe FSC à Rotterdam",
      badge: "Week-end carnaval",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Énergie de capitale diaspora",
      description:
        "Une expérience urbaine dense mêlant big road et moments crew.",
      image: "/London/nhc3.jpg",
      imageAlt: "Moment de road FSC à Londres",
      badge: "Destination iconique",
    },
  ] satisfies DestinationPreview[],

  gallery: {
    heroTitle: "Des moments qui restent.",
    heroDescription:
      "Une archive visuelle des moments de road et de l’énergie du crew.",
    items: [] satisfies GalleryItem[],
  },

  testimonials: [] satisfies Testimonial[],

  contact: {
    title: "Prépare ta prochaine road.",
    description:
      "Contacte-nous pour une réservation ou des infos sur les trips.",
    methods: [
      {
        label: "Instagram",
        value: "@frenchsocacrew",
        detail: "Moments et annonces",
        href: "https://instagram.com/frenchsocacrew",
        icon: "instagram",
      },
    ] satisfies ContactMethod[],

    formInterests: [
      "Rotterdam Carnival",
      "London Carnival",
      "Information générale",
    ],
  },

  tripsPage: {
    eyebrow: "Destinations",
    title: "Choisis ta road.",
    description: "Découvre nos trips du moment.",
  },
};

/* =============================
   DESTINATION PAGES (FIX BUILD)
============================= */

export const destinationPages: Record<
  DestinationPreview["slug"],
  DestinationPageData
> = {
  "rotterdam-carnival": {
    slug: "rotterdam-carnival",
    title: "Rotterdam Carnival",
    eyebrow: "Destination",
    heroDescription: "Une expérience road vibrante à Rotterdam.",
    heroImage: "/Rotterdam/fsc-rotterdam-road.jpg",
    introTitle: "Un week-end en mouvement.",
    introParagraphs: [
      "Rotterdam est une destination dynamique.",
      "FSC rend l’expérience fluide et immersive.",
    ],
    experiences: [],
    packs: [],
  },

  "london-carnival": {
    slug: "london-carnival",
    title: "London Carnival",
    eyebrow: "Destination",
    heroDescription: "Une expérience carnaval iconique à Londres.",
    heroImage: "/London/nhc3.jpg",
    introTitle: "Énergie big road.",
    introParagraphs: [
      "London Carnival est une référence mondiale.",
      "FSC structure toute l’expérience pour le crew.",
    ],
    experiences: [],
    packs: [],
  },
};