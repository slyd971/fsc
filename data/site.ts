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
   SITE DATA (FR)
========================= */

export const siteData = {
  metadata: {
    title: "French Soca Crew",
    description:
      "Voyages carnaval premium, événements soca et expériences culturelles caribéennes.",
  },

  brand: {
    name: "French Soca Crew",
    mark: "FSC",
    tagline: "Voyage, carnaval et énergie caribéenne réunis.",
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
    eyebrow: "Association française dédiée aux expériences carnaval",
    title: "French Soca Crew",
    subtitle:
      "Voyages de groupe premium et expériences culturelles autour de la soca et du carnaval.",
    primaryCta: { label: "Voir les trips", href: "/#trips" },
    secondaryCta: { label: "Contact", href: "/#contact" },
    stats: [
      { value: "10+", label: "Années d'expérience", icon: "sparkles" },
      { value: "25+", label: "Roads", icon: "map" },
      { value: "12+", label: "Jouvert", icon: "sunrise" },
      { value: "500L+", label: "Rhum partagé", icon: "glass" },
    ],
    image: "/fsc-crew-1.jpg",
    imageAlt: "French Soca Crew",
  },

  about: {
    eyebrow: "À propos",
    title: "Pensé pour la road.",
    intro:
      "Une organisation de voyages et d’expériences centrée sur la communauté et la culture.",
    paragraphs: [
      "Chaque détail est pensé pour fluidifier l’expérience.",
      "Une énergie collective du début à la fin.",
    ],
    highlights: [
      {
        title: "Communauté",
        description: "Un crew basé sur la connexion.",
      },
      {
        title: "Carnaval",
        description: "Des expériences immersives.",
      },
      {
        title: "Culture",
        description: "Soca et diaspora.",
      },
    ] satisfies Highlight[],
  },

  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Road estivale",
      description: "Week-end carnaval intense.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "Rotterdam FSC",
      badge: "Carnaval",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Énergie diaspora",
      description: "Carnaval iconique.",
      image: "/London/nhc3.jpg",
      imageAlt: "London FSC",
      badge: "Iconique",
    },
  ] satisfies DestinationPreview[],

  testimonials: [] satisfies Testimonial[],

  gallery: {
    heroTitle: "Des moments qui restent.",
    heroDescription: "Archive visuelle de la road.",
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
    description: "Aperçu de nos destinations.",
  },
};

/* =========================
   DESTINATION PAGES (FR)
========================= */

export const destinationPages: Record<
  DestinationPreview["slug"],
  DestinationPageData
> = {
  "rotterdam-carnival": {
    slug: "rotterdam-carnival",
    title: "Rotterdam Carnival",
    eyebrow: "Destination",
    heroDescription:
      "Une road vibrante entre parade, fête et énergie collective.",
    heroImage: "/Rotterdam/fsc-rotterdam-road.jpg",

    introTitle: "Un week-end en mouvement.",
    introParagraphs: [
      "Rotterdam offre une vibe unique.",
      "Le crew FSC rend tout plus simple.",
    ],

    experiences: [
      {
        title: "Parade principale",
        date: "Samedi",
        description: "Défilé carnaval au cœur de la ville.",
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        includes: ["Accès crew", "Coordination"],
      },
    ],

    packs: [
      {
        name: "Pack Standard",
        price: "À partir de 250€",
        pitch: "Essentiel pour vivre la road.",
        included: ["Accès événements"],
        notIncluded: ["Transport"],
        featured: false,
      },
    ],
  },

  "london-carnival": {
    slug: "london-carnival",
    title: "London Carnival",
    eyebrow: "Destination",
    heroDescription:
      "Une immersion dans l’un des plus grands carnavals du monde.",
    heroImage: "/London/nhc3.jpg",

    introTitle: "Énergie big road.",
    introParagraphs: [
      "London Carnival est une référence mondiale.",
      "FSC structure ton expérience.",
    ],

    experiences: [
      {
        title: "Parade Notting Hill",
        date: "Week-end",
        description: "Big road et soundsystems.",
        image: "/London/nhc3.jpg",
        includes: ["Crew", "Accès"],
      },
    ],

    packs: [
      {
        name: "Pack Crew",
        price: "À partir de 300€",
        pitch: "Expérience complète.",
        included: ["Events", "Support"],
        notIncluded: ["Vol"],
        featured: true,
      },
    ],
  },
};