export const siteDataEnSeed = {
  metadata: {
    title: "French Soca Crew",
    description:
      "Premium carnival trips, soca-centered events, and Caribbean cultural experiences crafted by French Soca Crew.",
  },
  brand: {
    name: "French Soca Crew",
    mark: "FSC",
    tagline: "Travel, carnival, and Caribbean energy curated as one shared experience.",
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
      { value: "500L+", label: "Rum drunk", icon: "glass" },
    ],
    image: "/fsc-crew-1.jpg",
    imageAlt: "French Soca Crew group visual",
  },
  about: {
    eyebrow: "About us",
    title: "Built for the road.",
    intro:
      "French Soca Crew brings together travel logistics, cultural curation and real community energy.",
    paragraphs: [
      "An experience shaped with warmth, detail and rhythm.",
      "Each trip is imagined as a full atmosphere.",
    ],
  },
  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Summer road energy",
      description: "A high-vibration carnival weekend.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "FSC Rotterdam",
      badge: "Carnival weekend",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Diaspora energy",
      description: "A deep dive into London's carnival culture.",
      image: "/London/nhc3.jpg",
      imageAlt: "FSC London",
      badge: "Iconic",
    },
  ],
  video: {
    eyebrow: "Crew atmosphere",
    title: "See the vibe.",
    description:
      "Road arrivals, costume colour, late-night recall and the kind of shared energy that turns a trip into something people talk about long after the weekend ends.",
    videos: [
      { title: "Rotterdam arrival", poster: "/Rotterdam/fsc-rotterdam-road.jpg" },
      { title: "London road call", poster: "/London/nhc2.jpg" },
      { title: "Crew afterglow", poster: "/fsc-crew-1.jpg" },
    ],
    cta: { label: "Watch the energy", href: "https://www.instagram.com/frenchsocacrew/" },
  },
  testimonials: [],
  gallery: {
    heroTitle: "Moments that stay.",
    heroDescription: "A visual archive of the road.",
    items: [],
  },
  contact: {
    title: "Plan your next road.",
    description: "Reach out to book with us.",
    methods: [],
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
    description: "A premium overview of our destinations.",
  },
} as const;

export const destinationPagesEnSeed = {
  "rotterdam-carnival": {
    title: "Rotterdam Carnival",
    eyebrow: "Destination",
    heroDescription: "A vibrant road experience in Rotterdam.",
    introTitle: "A weekend in motion.",
    introParagraphs: [
      "Rotterdam is a dynamic destination.",
      "FSC makes the experience easier to enjoy.",
    ],
    experiences: [],
    packs: [],
  },
  "london-carnival": {
    title: "London Carnival",
    eyebrow: "Destination",
    heroDescription: "An iconic carnival experience.",
    introTitle: "Big road energy.",
    introParagraphs: [
      "London Carnival is a global reference.",
      "FSC helps structure the whole experience.",
    ],
    experiences: [],
    packs: [],
  },
} as const;