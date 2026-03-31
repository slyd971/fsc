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
   SITE DATA (EN)
============================= */

export const siteDataEnSeed = {
  metadata: {
    title: "French Soca Crew",
    description:
      "Premium carnival trips, soca-driven events and Caribbean cultural experiences curated by French Soca Crew.",
  },

  brand: {
    name: "French Soca Crew",
    mark: "FSC",
    tagline:
      "Travel, carnival and Caribbean energy brought together in one shared experience.",
  },

  navigation: {
    items: [
      { label: "Home", href: "/" },
      { label: "Trips", href: "/#trips" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/#contact" },
    ] satisfies NavItem[],
  },

  hero: {
    eyebrow:
      "French collective dedicated to carnival travel and soca experiences",
    title: "French Soca Crew",
    subtitle:
      "We design premium group trips, event experiences and cultural moments driven by soca, carnival spirit and Caribbean community energy.",
    primaryCta: { label: "Discover our trips", href: "/#trips" },
    secondaryCta: { label: "Contact us", href: "/#contact" },
    stats: [
      { value: "10+", label: "Years of experience", icon: "sparkles" },
      { value: "25+", label: "Roads", icon: "map" },
      { value: "12+", label: "Jouvert", icon: "sunrise" },
      { value: "500L+", label: "Rum shared", icon: "glass" },
    ],
    image: "/fsc-crew-1.jpg",
    imageAlt: "French Soca Crew group visual",
  },

  about: {
    eyebrow: "About",
    title: "Built for the road.",
    intro:
      "French Soca Crew blends travel logistics, cultural direction and real community energy.",
    paragraphs: [
      "We organize carnival trips, group escapes and music-driven experiences.",
      "Each trip is designed as a full atmosphere: energy, events and crew connection.",
    ],
    highlights: [
      {
        title: "Community",
        description:
          "A travel crew built around connection, trust and shared memories.",
      },
      {
        title: "Carnival experiences",
        description:
          "Trips designed around emotion, music and movement.",
      },
      {
        title: "Caribbean vibes",
        description:
          "Soca, diaspora spirit and cultural immersion in every detail.",
      },
    ] satisfies Highlight[],
  },

  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Summer road energy",
      description:
        "A high-vibration city break built around parade moments and crew energy.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "FSC group in Rotterdam",
      badge: "Carnival weekend",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Diaspora capital energy",
      description:
        "A dense urban experience mixing big road, soundsystems and crew moments.",
      image: "/London/nhc3.jpg",
      imageAlt: "FSC road moment in London",
      badge: "Iconic destination",
    },
  ] satisfies DestinationPreview[],

  gallery: {
    heroTitle: "Moments that stay.",
    heroDescription:
      "A visual archive of road moments, crew energy and destination vibes.",
    items: [] satisfies GalleryItem[],
  },

  testimonials: [] satisfies Testimonial[],

  contact: {
    title: "Plan your next road.",
    description:
      "Reach out for bookings, destination info or crew questions.",
    methods: [
      {
        label: "Instagram",
        value: "@frenchsocacrew",
        detail: "Daily moments and announcements",
        href: "https://instagram.com/frenchsocacrew",
        icon: "instagram",
      },
    ] satisfies ContactMethod[],

    formInterests: [
      "Rotterdam Carnival",
      "London Carnival",
      "General information",
    ],
  },

  tripsPage: {
    eyebrow: "Destinations",
    title: "Choose your road.",
    description: "Explore our current premium trips.",
  },
};

/* =============================
   DESTINATION PAGES (EN)
============================= */

export const destinationPagesEnSeed: Record<
  DestinationPreview["slug"],
  DestinationPageData
> = {
  "rotterdam-carnival": {
    slug: "rotterdam-carnival",
    title: "Rotterdam Carnival",
    eyebrow: "Destination",
    heroDescription: "A vibrant road experience in Rotterdam.",
    heroImage: "/Rotterdam/fsc-rotterdam-road.jpg",
    introTitle: "A weekend in motion.",
    introParagraphs: [
      "Rotterdam is a dynamic destination.",
      "FSC makes the experience smooth and immersive.",
    ],
    experiences: [],
    packs: [],
  },

  "london-carnival": {
    slug: "london-carnival",
    title: "London Carnival",
    eyebrow: "Destination",
    heroDescription: "An iconic carnival experience in London.",
    heroImage: "/London/nhc3.jpg",
    introTitle: "Big road energy.",
    introParagraphs: [
      "London Carnival is a global reference.",
      "FSC structures the experience for the crew.",
    ],
    experiences: [],
    packs: [],
  },
};