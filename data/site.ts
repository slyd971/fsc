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
    ],
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
    imageBadge: "Crew ensemble",
    imageCaption: "Voyager ensemble. Fêter ensemble.",
  },

  about: {
    eyebrow: "À propos",
    title: "Pensé pour la road.",
    intro:
      "French Soca Crew réunit logistique de voyage, direction culturelle et vraie énergie de communauté.",
    paragraphs: [
      "Du premier message à la fin du trip, tout est pensé avec précision.",
      "Chaque expérience devient une atmosphère complète.",
    ],
  },

  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Énergie de road estivale",
      description:
        "Un city break à haute vibration construit autour du carnaval.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "Photo FSC Rotterdam",
      badge: "Week-end carnaval",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Énergie diaspora",
      description:
        "Une immersion complète dans le carnaval londonien.",
      image: "/London/nhc3.jpg",
      imageAlt: "Photo FSC London",
      badge: "Iconique",
    },
  ],

  video: {
    eyebrow: "Atmosphère du crew",
    title: "Voir la vibe.",
    description:
      "Arrivées sur la road, couleurs, souvenirs et énergie collective.",
    videos: [
      {
        title: "Arrivée à Rotterdam",
        poster: "/Rotterdam/fsc-rotterdam-road.jpg",
      },
      {
        title: "Road Londres",
        poster: "/London/nhc2.jpg",
      },
      {
        title: "Crew moment",
        poster: "/fsc-crew-1.jpg",
      },
    ],
    cta: {
      label: "Voir l'énergie",
      href: "https://www.instagram.com/frenchsocacrew/",
    },
  },

  testimonials: [
    {
      name: "Camille R.",
      role: "Voyageuse Rotterdam",
      quote:
        "Tout était fluide, chaleureux et organisé.",
      city: "Rotterdam",
      moment: "Première road FSC",
      accent: "Fluide et chaleureux.",
    },
  ],

  gallery: {
    heroTitle: "Des moments qui restent.",
    heroDescription:
      "Une archive visuelle de la road et du crew.",
    items: [
      {
        id: "carnival-1",
        title: "Road Londres",
        tag: { title: "London", slug: "london" },
        image: "/London/nhc3.jpg",
        alt: "FSC London",
        size: "landscape",
      },
      {
        id: "rotterdam-1",
        title: "Crew Rotterdam",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        alt: "FSC Rotterdam",
        size: "portrait",
      },
    ],
  },

  contact: {
    title: "Prépare ta prochaine road.",
    description:
      "Contacte-nous pour réserver ou poser tes questions.",
    methods: [
      {
        label: "Instagram",
        value: "@frenchsocacrew",
        detail: "Moments et annonces",
        href: "https://instagram.com/frenchsocacrew",
        icon: "instagram",
      },
      {
        label: "WhatsApp",
        value: "Réservation rapide",
        detail: "Le meilleur canal",
        href: "https://wa.me/33612345678",
        icon: "message-circle",
      },
    ],
    formInterests: [
      "Rotterdam Carnival",
      "London Carnival",
      "Information générale",
      "Partenariat",
    ],
  },

  tripsPage: {
    eyebrow: "Destinations",
    title: "Choisis ta road.",
    description:
      "Un aperçu premium des destinations FSC.",
  },
};