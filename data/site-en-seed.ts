export const siteDataEnSeed = {
  metadata: {
    title: "French Soca Crew",
    description:
      "Premium carnival trips, soca-centered events, and Caribbean cultural experiences crafted by French Soca Crew.",
  },

  brand: {
    name: "French Soca Crew",
    mark: "FSC",
    tagline:
      "Travel, carnival, and Caribbean energy curated as one shared experience.",
  },

  navigation: {
    items: [
      { label: "Home", href: "/" },
      { label: "Trips", href: "/#trips" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/#contact" },
    ],
  },

  hero: {
    eyebrow: "French association for carnival travel and Soca experiences",
    title: "French Soca Crew",
    subtitle:
      "We design premium group trips, event experiences and cultural moments around Soca, carnival spirit and Caribbean community energy.",
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
    imageBadge: "Crew together",
    imageCaption: "Travel together. Celebrate together.",
  },

  about: {
    eyebrow: "About",
    title: "Built for the road.",
    intro:
      "French Soca Crew brings together travel logistics, cultural direction and real community energy.",
    paragraphs: [
      "From the first message to the end of the trip, everything is designed with precision.",
      "Each experience becomes a full atmosphere.",
    ],
  },

  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Summer road energy",
      description:
        "A high-vibration city break built around carnival moments.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "FSC Rotterdam",
      badge: "Carnival weekend",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Diaspora energy",
      description:
        "A full immersion into London carnival culture.",
      image: "/London/nhc3.jpg",
      imageAlt: "FSC London",
      badge: "Iconic",
    },
  ],

  video: {
    eyebrow: "Crew atmosphere",
    title: "See the vibe.",
    description:
      "Road arrivals, colors, memories and shared energy.",
    videos: [
      {
        title: "Arrival in Rotterdam",
        poster: "/Rotterdam/fsc-rotterdam-road.jpg",
      },
      {
        title: "London road",
        poster: "/London/nhc2.jpg",
      },
      {
        title: "Crew moment",
        poster: "/fsc-crew-1.jpg",
      },
    ],
    cta: {
      label: "See the energy",
      href: "https://www.instagram.com/frenchsocacrew/",
    },
  },

  testimonials: [
    {
      name: "Camille R.",
      role: "Rotterdam traveler",
      quote:
        "Everything felt smooth, warm and well organized.",
      city: "Rotterdam",
      moment: "First FSC road",
      accent: "Smooth and warm.",
    },
  ],

  gallery: {
    heroTitle: "Moments that stay.",
    heroDescription:
      "A visual archive of the road and the crew.",
    items: [
      {
        id: "carnival-1",
        title: "London road",
        tag: { title: "London", slug: "london" },
        image: "/London/nhc3.jpg",
        alt: "FSC London",
        size: "landscape",
      },
      {
        id: "rotterdam-1",
        title: "Rotterdam crew",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        alt: "FSC Rotterdam",
        size: "portrait",
      },
    ],
  },

  contact: {
    title: "Plan your next road.",
    description:
      "Contact us to book or ask your questions.",
    methods: [
      {
        label: "Instagram",
        value: "@frenchsocacrew",
        detail: "Moments and announcements",
        href: "https://instagram.com/frenchsocacrew",
        icon: "instagram",
      },
      {
        label: "WhatsApp",
        value: "Quick booking",
        detail: "The best channel",
        href: "https://wa.me/33612345678",
        icon: "message-circle",
      },
    ],
    formInterests: [
      "Rotterdam Carnival",
      "London Carnival",
      "General Information",
      "Partnership",
    ],
  },

  tripsPage: {
    eyebrow: "Destinations",
    title: "Choose your road.",
    description:
      "A premium overview of FSC destinations.",
  },
} as const;

export const destinationPagesEnSeed = {
  "rotterdam-carnival": {
    title: "Rotterdam Carnival",
    eyebrow: "Featured destination",
    heroDescription:
      "A vibrant urban escape where parade energy, crew logistics and after-hours atmosphere come together in one fluid experience.",
    introTitle: "A weekend in motion.",
    introParagraphs: [
      "Rotterdam Carnival is the kind of destination that feels alive from the first moment.",
      "With FSC, the trip becomes smoother and easier to enjoy.",
    ],
    experiences: [
      {
        title: "Arrival",
        date: "Friday · Arrival day",
        description:
          "A smooth arrival sequence for check-in, coordination and first meetup.",
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        includes: ["Welcome meetup", "Crew coordination", "Trip briefing"],
      },
      {
        title: "Carnival day",
        date: "Saturday · Main road day",
        description:
          "The core of the weekend: parade atmosphere, movement and gathering points.",
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        includes: ["Group guidance", "Meetup points", "On-site crew support"],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "Details on request",
        pitch: "A simple and accessible way to join the road.",
        included: ["Trip guidance", "Main meetup access", "Communication group"],
        notIncluded: ["Premium lodging", "Private transfers"],
      },
      {
        name: "Experience Pack",
        price: "Details on request",
        pitch: "The balanced option for comfort and atmosphere.",
        included: ["Enhanced coordination", "Selected event access", "Crew extras"],
        notIncluded: ["Full luxury upgrades"],
        featured: true,
      },
    ],
  },

  "london-carnival": {
    title: "London Carnival",
    eyebrow: "Featured destination",
    heroDescription:
      "An iconic carnival destination where soundsystems, diaspora culture and big-road emotion create real scale.",
    introTitle: "Big road energy.",
    introParagraphs: [
      "London Carnival is not just an event. It is a cultural heartbeat.",
      "FSC helps turn that scale into a smoother and more exciting trip.",
    ],
    experiences: [
      {
        title: "Warm-up",
        date: "Saturday · Warm-up day",
        description:
          "Arrival sequence, crew meetup and pre-carnival atmosphere.",
        image: "/London/nhc3.jpg",
        includes: ["Arrival guidance", "Local orientation", "Community meetup"],
      },
      {
        title: "Road day",
        date: "Sunday / Monday · Main road days",
        description:
          "The main carnival stretch built around route flow and live coordination.",
        image: "/London/nhc3.jpg",
        includes: ["Road strategy", "Meeting points", "Live coordination"],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "Details on request",
        pitch: "An accessible entry point for joining the London road.",
        included: ["Core communication", "Meetup access", "Planning notes"],
        notIncluded: ["Enhanced comfort options"],
      },
      {
        name: "Experience Pack",
        price: "Details on request",
        pitch: "A strong all-round option balancing logistics and vibe.",
        included: ["Selected extras", "Structured coordination", "Crew assistance"],
        notIncluded: ["Premium transport"],
        featured: true,
      },
    ],
  },
} as const;