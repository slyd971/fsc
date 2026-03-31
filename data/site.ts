import type {
  DestinationPageData,
  DestinationPreview,
  GalleryItem,
  Testimonial,
  NavItem,
  Highlight,
  ContactMethod,
} from "./types";

/* =========================
   SITE DATA (FR DEFAULT)
========================= */

export const siteData = {
  metadata: {
    title: "French Soca Crew",
    description:
      "Voyages carnaval premium, événements centrés sur la soca et expériences culturelles caribéennes imaginés par French Soca Crew.",
  },

  brand: {
    name: "French Soca Crew",
    mark: "FSC",
    tagline: "Voyage, carnaval et énergie caribéenne réunis dans une même expérience partagée.",
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
    eyebrow: "Association française dédiée aux voyages carnaval et aux expériences soca",
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
      "Une expérience pensée avec chaleur, précision et rythme.",
      "Chaque trip devient une atmosphère complète.",
    ],
    highlights: [
      {
        title: "Communauté",
        description: "Un crew basé sur la connexion et les souvenirs.",
      },
      {
        title: "Expériences carnaval",
        description: "Des trips centrés sur l’émotion et la musique.",
      },
      {
        title: "Vibes caribéennes",
        description: "Immersion diaspora et culture soca.",
      },
    ] satisfies Highlight[],
  },

  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Énergie de road estivale",
      description: "Un week-end carnaval à haute vibration.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "FSC Rotterdam",
      badge: "Week-end carnaval",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Énergie diaspora",
      description: "Une immersion dans la culture carnaval londonienne.",
      image: "/London/nhc3.jpg",
      imageAlt: "FSC London",
      badge: "Iconique",
    },
  ] satisfies DestinationPreview[],

  testimonials: [] satisfies Testimonial[],

  gallery: {
    heroTitle: "Des moments qui restent.",
    heroDescription: "Une archive visuelle de la road.",
    items: [] satisfies GalleryItem[],
  },

  contact: {
    title: "Prépare ta prochaine road.",
    description: "Contacte-nous pour réserver.",
    methods: [] satisfies ContactMethod[],
  },

  tripsPage: {
    eyebrow: "Destinations",
    title: "Choisis ta road.",
    description: "Un aperçu premium de nos destinations.",
  },
};

/* =========================
   DESTINATION PAGES (FIX BUILD)
========================= */

export const destinationPages: Record<
  DestinationPreview["slug"],
  DestinationPageData
> = {
  "rotterdam-carnival": {
    slug: "rotterdam-carnival",
    title: "Rotterdam Carnival",
    eyebrow: "Destination",
    heroDescription: "Une road vibrante à Rotterdam.",
    heroImage: "/Rotterdam/fsc-rotterdam-road.jpg",
    introTitle: "Un week-end en mouvement.",
    introParagraphs: [
      "Rotterdam est une destination dynamique.",
      "L'expérience FSC simplifie tout.",
    ],
    experiences: [],
    packs: [],
  },

  "london-carnival": {
    slug: "london-carnival",
    title: "London Carnival",
    eyebrow: "Destination",
    heroDescription: "Une expérience carnaval iconique.",
    heroImage: "/London/nhc3.jpg",
    introTitle: "Énergie big road.",
    introParagraphs: [
      "London Carnival est une référence mondiale.",
      "FSC structure ton expérience.",
    ],
    experiences: [],
    packs: [],
  },
};