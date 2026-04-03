export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type DestinationPreview = {
  slug: "rotterdam-carnival" | "london-carnival";
  city: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: string;
};

export type ExperienceBlock = {
  title: string;
  date: string;
  description: string;
  image: string;
  includes: string[];
};

export type Pack = {
  name: string;
  price: string;
  pitch: string;
  included: string[];
  notIncluded: string[];
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  city: string;
  moment: string;
  accent: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  tag?: {
    title: string;
    slug: string;
  };
  image: string;
  alt: string;
  size: "portrait" | "landscape" | "square";
};

export type ContactMethod = {
  label: string;
  value: string;
  detail: string;
  href: string;
  icon: "instagram" | "message-circle" | "phone" | "mail";
};

export type DestinationPageData = {
  slug: DestinationPreview["slug"];
  title: string;
  eyebrow: string;
  heroDescription: string;
  heroImage: string;
  introTitle: string;
  introParagraphs: string[];
  experiences: ExperienceBlock[];
  packs: Pack[];
};

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
      { label: "Trips", href: "/trips" },
      { label: "Galerie", href: "/gallery" },
      { label: "Contact", href: "/#contact" },
    ] satisfies NavItem[],
  },

  hero: {
    eyebrow: "Association française dédiée aux voyages carnaval et aux expériences soca",
    title: "French Soca Crew",
    subtitle:
      "Nous imaginons des voyages de groupe premium, des expériences événementielles et des moments culturels portés par la soca, l’esprit carnaval et l’énergie de la communauté caribéenne.",
    primaryCta: { label: "Découvrir nos trips", href: "/trips" },
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
      "French Soca Crew réunit logistique de voyage, direction culturelle et vraie énergie de communauté. Nous organisons des voyages carnaval, des escapades de groupe et des expériences centrées sur la musique qui rendent chaque destination accueillante, premium et inoubliable.",
    paragraphs: [
      "Du premier message de préparation au dernier recap après la fête, l’expérience est pensée avec chaleur, précision et rythme. Nous ne faisons pas que déplacer des voyageurs d’une ville à une autre. Nous avançons en crew.",
      "Chaque trip est imaginé comme une atmosphère complète : l’énergie de la destination, les événements clés, les moments sociaux, l’accompagnement sur place et la sensation de faire partie de quelque chose de plus grand qu’une simple réservation.",
    ],
    highlights: [
      {
        title: "Communauté",
        description: "Un crew de voyage pensé autour du lien, de la confiance et des souvenirs partagés.",
      },
      {
        title: "Expériences carnaval",
        description: "Des trips construits autour de l’émotion, de la musique et du mouvement de la culture carnaval.",
      },
      {
        title: "Vibes caribéennes",
        description: "Soca, esprit diaspora et immersion culturelle tissés dans chaque détail.",
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
        "Un city break à haute vibration construit autour des moments de parade, des fêtes après la tombée de la nuit et d’une organisation pensée d’abord pour le crew.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "Photo de groupe French Soca Crew à Rotterdam",
      badge: "Week-end carnaval",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Énergie de capitale diaspora",
      description:
        "Une expérience urbaine dense qui mêle émotion du big road, soundsystems iconiques, moments de crew et coordination premium du groupe.",
      image: "/London/nhc3.jpg",
      imageAlt: "Moment de road French Soca Crew à Londres",
      badge: "Destination iconique",
    },
  ] satisfies DestinationPreview[],

  video: {
    eyebrow: "Atmosphère du crew",
    title: "Voir la vibe.",
    description:
      "Arrivées sur la road, couleurs des costumes, souvenirs de fin de nuit et cette énergie partagée qui fait qu’un trip continue à vivre bien après le week-end.",
    videos: [
      {
        title: "Arrivée à Rotterdam",
        poster: "/Rotterdam/fsc-rotterdam-road.jpg",
      },
      {
        title: "Appel de la road à Londres",
        poster: "/London/nhc2.jpg",
      },
      {
        title: "Afterglow du crew",
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
        "Tout était fluide, soigné et sincèrement chaleureux. Ce n’était pas juste un trip. On avait vraiment l’impression de rejoindre un vrai crew.",
      city: "Rotterdam",
      moment: "Première road avec FSC",
      accent: "Fluide, soigné et sincèrement chaleureux.",
    },
    {
      name: "Jordan M.",
      role: "Participant au carnaval de Londres",
      quote:
        "L’organisation m’a vraiment rassuré et l’ambiance n’est jamais retombée. On se sent accompagné depuis la préparation jusqu’au dernier événement.",
      city: "London",
      moment: "Week-end carnaval",
      accent: "L’ambiance n’est jamais retombée.",
    },
    {
      name: "Nadia T.",
      role: "Membre de la communauté",
      quote:
        "French Soca Crew crée ce type d’énergie où les gens arrivent sans se connaître et repartent avec des histoires, des photos et de nouvelles personnes dans leur cercle.",
      city: "Paris",
      moment: "Linkup du crew",
      accent: "Les gens repartent avec des histoires et de nouvelles personnes dans leur cercle.",
    },
  ] satisfies Testimonial[],

  gallery: {
    heroTitle: "Des moments qui restent.",
    heroDescription:
      "Une archive visuelle des moments de road, de la chaleur du crew et de l’énergie des destinations, pensée avec le rythme et l’atmosphère que la marque mérite.",
    items: [
      {
        id: "trip-1",
        title: "Mood du départ",
        tag: { title: "Paris", slug: "paris" },
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
        alt: "Voyageurs arrivant ensemble avec leurs bagages dans un terminal lumineux",
        size: "landscape",
      },
      {
        id: "carnival-1",
        title: "Road de l'ouest",
        tag: { title: "London", slug: "london" },
        image: "/London/nhc3.jpg",
        alt: "Moment de road French Soca Crew à Londres",
        size: "landscape",
      },
      {
        id: "party-1",
        title: "Session de nuit",
        tag: { title: "Parties", slug: "parties" },
        image:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1000&q=80",
        alt: "Foule en fête dans la brume et les lumières",
        size: "square",
      },
      {
        id: "crew-1",
        title: "Linkup au bord du lac",
        tag: { title: "Geneva", slug: "geneva" },
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
        alt: "Groupe souriant ensemble pendant un événement",
        size: "portrait",
      },
      {
        id: "trip-2",
        title: "Arrivée en ville",
        tag: { title: "Paris", slug: "paris" },
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
        alt: "Voyageurs admirant une vue urbaine",
        size: "landscape",
      },
      {
        id: "carnival-2",
        title: "Énergie du mas",
        tag: { title: "London", slug: "london" },
        image: "/London/nhc1.jpg",
        alt: "Énergie carnaval French Soca Crew à Londres",
        size: "portrait",
      },
      {
        id: "party-2",
        title: "Énergie tardive",
        tag: { title: "Parties", slug: "parties" },
        image:
          "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1000&q=80",
        alt: "DJ et lumières de fête dans un lieu intimiste",
        size: "landscape",
      },
      {
        id: "crew-2",
        title: "Escapade du crew",
        tag: { title: "Geneva", slug: "geneva" },
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
        alt: "Amis riant ensemble à l'extérieur",
        size: "square",
      },
      {
        id: "rotterdam-1",
        title: "Crew Rotterdam",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/20250726_183436.jpg",
        alt: "Moment de groupe French Soca Crew à Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-2",
        title: "Énergie jaune",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        alt: "French Soca Crew souriant ensemble à Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-3",
        title: "Bord de road",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/20250727_162600(0).jpg",
        alt: "Journée carnaval French Soca Crew à Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-4",
        title: "Pause carnaval",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/20250727_162632.jpg",
        alt: "Moment de road French Soca Crew à Rotterdam",
        size: "portrait",
      },
    ] satisfies GalleryItem[],
  },

  contact: {
    title: "Prépare ta prochaine road.",
    description:
      "Contacte-nous pour une réservation, des détails sur une destination, des questions sur le crew ou la prochaine road que tu veux sécuriser avec nous.",
    methods: [
      {
        label: "Instagram",
        value: "@frenchsocacrew",
        detail: "Moments de road au quotidien et annonces d'événements",
        href: "https://instagram.com/frenchsocacrew",
        icon: "instagram",
      },
      {
        label: "WhatsApp",
        value: "Réservations et questions rapides sur les trips",
        detail: "Le meilleur canal pour réserver ta place",
        href: "https://wa.me/33612345678",
        icon: "message-circle",
      },
      {
        label: "Email",
        value: "hello@frenchsocacrew.com",
        detail: "Partenariats, médias et demandes détaillées",
        href: "mailto:hello@frenchsocacrew.com",
        icon: "mail",
      },
    ] satisfies ContactMethod[],
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
      "Un aperçu premium de nos destinations phares du moment, pensé pour évoluer à mesure que de nouvelles roads, îles et formats d'événements rejoignent le calendrier.",
  },
};

export const destinationPages: Record<
  DestinationPreview["slug"],
  DestinationPageData
> = {
  "rotterdam-carnival": {
    slug: "rotterdam-carnival",
    title: "Rotterdam Carnival",
    eyebrow: "Destination à l'honneur",
    heroDescription:
      "Une escapade urbaine vibrante où l'énergie de la parade, la logistique du crew et l'atmosphère after-hours se rejoignent dans une expérience fluide.",
    heroImage: "/Rotterdam/fsc-rotterdam-road.jpg",
    introTitle: "Un week-end en mouvement.",
    introParagraphs: [
      "Rotterdam Carnival est le genre de destination qui semble vivante dès les premiers instants. La ville offre du mouvement, de la diversité et une énergie de rue à la hauteur de l'excitation d'un week-end carnaval.",
      "Avec French Soca Crew, le trip devient plus simple à vivre. Nous pensons au rythme, à l'atmosphère sociale et aux détails pratiques pour que tu puisses te concentrer sur la musique, les souvenirs et les personnes autour de toi.",
      "Le vrai tempo du week-end est partagé directement avec le crew. Les horaires finaux, points de rendez-vous et détails d'accès sont confirmés à l'approche de la road pour que ton trip reste clair et facile à suivre.",
    ],
    experiences: [
      {
        title: "Arrivée",
        date: "Vendredi · Jour d'arrivée",
        description:
          "Une séquence d'arrivée fluide pour les check-in, la coordination et le premier rendez-vous partagé avant que la ville ne s'anime la nuit.",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
        includes: ["Meetup d'accueil", "Coordination du crew", "Brief du trip"],
      },
      {
        title: "Jour de carnaval",
        date: "Samedi · Grand jour de road",
        description:
          "Le cœur du week-end : atmosphère de parade, mouvement dans la ville et points de rassemblement pensés pour garder le crew connecté toute la journée.",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        includes: ["Guidance du groupe", "Points de rendez-vous clés", "Support du crew sur place"],
      },
      {
        title: "After party",
        date: "Samedi soir · Session de nuit",
        description:
          "Une extension nocturne de la road avec des liens sélectionnés, l'énergie du crew et des options premium construites autour des temps forts du week-end.",
        image:
          "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
        includes: ["Sélection de soirées", "Options additionnelles", "Atmosphère partagée du crew"],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "Détails sur demande",
        pitch: "Une formule simple et accessible pour rejoindre la road avec l'accompagnement du crew.",
        included: [
          "Guidance du trip",
          "Accès aux meetups principaux",
          "Groupe de communication",
        ],
        notIncluded: ["Hébergement premium", "Transferts privés"],
      },
      {
        name: "Experience Pack",
        price: "Détails sur demande",
        pitch: "L'option la plus équilibrée pour les voyageurs qui veulent du confort et de l'ambiance.",
        included: [
          "Coordination renforcée",
          "Accès à une sélection d'événements",
          "Extras crew",
        ],
        notIncluded: ["Surclassements luxe complets"],
        featured: true,
      },
      {
        name: "Premium Pack",
        price: "Détails sur demande",
        pitch: "Plus de confort, plus d'accompagnement et une expérience destination encore plus premium.",
        included: [
          "Planification prioritaire",
          "Option d'hébergement premium",
          "Moments curated",
        ],
        notIncluded: ["Vols"],
      },
      {
        name: "Di Road Pack",
        price: "Détails sur demande",
        pitch: "Pensé autour de l'énergie de la road pour les voyageurs qui veulent vivre pleinement l'esprit carnaval.",
        included: [
          "Planification orientée road",
          "Accompagnement dans les déplacements du crew",
          "Rythme centré événement",
        ],
        notIncluded: ["Upgrades de chambre luxe"],
      },
    ],
  },

  "london-carnival": {
    slug: "london-carnival",
    title: "London Carnival",
    eyebrow: "Destination à l'honneur",
    heroDescription:
      "Une destination carnaval iconique où soundsystems, culture diaspora et émotion du big road donnent au trip une vraie ampleur et une vraie profondeur.",
    heroImage: "/London/nhc3.jpg",
    introTitle: "Énergie big road.",
    introParagraphs: [
      "London Carnival n'est pas juste un événement. C'est un battement culturel. Le son, les rues et les personnes donnent à l'expérience une densité et une émotion qui rendent chaque moment marquant.",
      "French Soca Crew transforme cette ampleur en quelque chose de plus fluide. Nous façonnons une expérience de voyage excitante sans qu'elle devienne chaotique, en gardant à la fois liberté et accompagnement.",
      "Le programme est construit autour du vrai pouls de la road. Les horaires finaux, temps forts et détails des packs sont partagés directement avec le crew pour que chacun arrive avec le bon rythme et les bonnes attentes.",
    ],
    experiences: [
      {
        title: "Warm-up",
        date: "Samedi · Jour de warm-up",
        description:
          "Une séquence d'arrivée pour explorer la ville, retrouver le crew et sentir l'énergie pré-carnaval avant les grands moments de la road.",
        image: "/London/nhc1.jpg",
        includes: [
          "Guidance d'arrivée",
          "Repères sur place",
          "Meetup communauté",
        ],
      },
      {
        title: "Jour de road",
        date: "Dimanche / Lundi · Grands jours de road",
        description:
          "Le grand temps du carnaval, pensé autour du parcours, des points de rendez-vous et d'une coordination en direct qui permet au crew de rester ensemble sans perdre la liberté de la road.",
        image: "/London/nhc2.jpg",
        includes: [
          "Stratégie de road",
          "Points de rendez-vous",
          "Coordination en direct",
        ],
      },
      {
        title: "Session de nuit",
        date: "Soirs · Rythme after-hours",
        description:
          "Des soirées sélectionnées, des sessions tardives et des liens en plus qui prolongent l'expérience au-delà de la road de jour et gardent l'élan vivant après la tombée de la nuit.",
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
        includes: [
          "Recommandations d'événements",
          "Accès optionnels aux soirées",
          "Suivi du crew",
        ],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "Détails sur demande",
        pitch: "Une porte d'entrée accessible pour rejoindre la road de Londres avec guidance.",
        included: [
          "Communication principale du trip",
          "Accès aux meetups",
          "Notes de préparation",
        ],
        notIncluded: ["Options de confort renforcé"],
      },
      {
        name: "Experience Pack",
        price: "Détails sur demande",
        pitch: "Une formule complète qui équilibre logistique, vibe et accès clés.",
        included: [
          "Extras sélectionnés",
          "Coordination structurée",
          "Assistance du crew",
        ],
        notIncluded: ["Transport premium"],
        featured: true,
      },
      {
        name: "Premium Pack",
        price: "Détails sur demande",
        pitch: "Pour les voyageurs qui veulent vivre la destination avec plus de confort, de fluidité et de style.",
        included: [
          "Accompagnement premium",
          "Options centrées confort",
          "Guidance prioritaire",
        ],
        notIncluded: ["Vols"],
      },
      {
        name: "Di Road Pack",
        price: "Détails sur demande",
        pitch: "Une option orientée road, pensée pour maximiser l'immersion carnaval.",
        included: [
          "Planification road-first",
          "Programme à haute énergie",
          "Flow guidé par le crew",
        ],
        notIncluded: ["Upgrades hôtel"],
      },
    ],
  },
};
