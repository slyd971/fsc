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