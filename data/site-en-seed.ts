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
      "French Soca Crew brings together travel logistics, cultural curation and real community energy. We organize carnival journeys, group escapes and music-centered experiences that make every destination feel welcoming, elevated and unforgettable.",
    paragraphs: [
      "From the first planning message to the last post-party recap, the experience is shaped with warmth, detail and rhythm. We do not just move people from one city to another. We move as a crew.",
      "Each trip is imagined as a full atmosphere: destination energy, key events, social moments, support on the ground and the feeling of being part of something bigger than a simple booking.",
    ],
  },
  destinations: [
    {
      slug: "rotterdam-carnival",
      city: "Rotterdam",
      title: "Rotterdam Carnival",
      eyebrow: "Summer road energy",
      description:
        "A high-vibration city break built around parade moments, after-dark parties and a crew-first travel flow.",
      image: "/Rotterdam/fsc-rotterdam-road.jpg",
      imageAlt: "French Soca Crew group photo in Rotterdam",
      badge: "Carnival weekend",
    },
    {
      slug: "london-carnival",
      city: "London",
      title: "London Carnival",
      eyebrow: "Diaspora capital energy",
      description:
        "A layered city experience mixing big-road emotion, iconic soundsystems, crew moments and premium group coordination.",
      image: "/London/nhc3.jpg",
      imageAlt: "French Soca Crew road moment in London",
      badge: "Iconic destination",
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
  testimonials: [
    {
      name: "Camille R.",
      role: "Rotterdam traveler",
      quote:
        "Everything felt smooth, stylish and genuinely friendly. It was not just a trip. It felt like joining a real crew.",
      city: "Rotterdam",
      moment: "First road with FSC",
      accent: "Smooth, stylish and genuinely friendly.",
    },
    {
      name: "Jordan M.",
      role: "London carnival attendee",
      quote:
        "The organization gave me peace of mind and the atmosphere never dropped. You feel supported from planning to the final event.",
      city: "London",
      moment: "Carnival weekend",
      accent: "The atmosphere never dropped.",
    },
    {
      name: "Nadia T.",
      role: "Community member",
      quote:
        "French Soca Crew creates the kind of energy where people arrive as strangers and leave with stories, photos and new people in their circle.",
      city: "Paris",
      moment: "Crew linkup",
      accent: "People leave with stories and new people in their circle.",
    },
  ],
  gallery: {
    heroTitle: "Moments that stay.",
    heroDescription:
      "A visual archive of road moments, crew warmth and destination energy, curated with the rhythm and atmosphere the brand deserves.",
    items: [
      {
        id: "trip-1",
        title: "Departure mood",
        tag: { title: "Paris", slug: "paris" },
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
        alt: "Travelers arriving together with luggage in a bright terminal",
        size: "landscape",
      },
      {
        id: "carnival-1",
        title: "West road",
        tag: { title: "London", slug: "london" },
        image: "/London/nhc3.jpg",
        alt: "French Soca Crew road moment in London",
        size: "landscape",
      },
      {
        id: "party-1",
        title: "Night session",
        tag: { title: "Parties", slug: "parties" },
        image:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1000&q=80",
        alt: "Party crowd with haze and lights",
        size: "square",
      },
      {
        id: "crew-1",
        title: "Lake side linkup",
        tag: { title: "Geneva", slug: "geneva" },
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
        alt: "Group smiling together at an event",
        size: "portrait",
      },
      {
        id: "trip-2",
        title: "City touch-down",
        tag: { title: "Paris", slug: "paris" },
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
        alt: "Travelers overlooking a cityscape",
        size: "landscape",
      },
      {
        id: "carnival-2",
        title: "Mas energy",
        tag: { title: "London", slug: "london" },
        image: "/London/nhc1.jpg",
        alt: "French Soca Crew carnival energy in London",
        size: "portrait",
      },
      {
        id: "party-2",
        title: "Late energy",
        tag: { title: "Parties", slug: "parties" },
        image:
          "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1000&q=80",
        alt: "DJ and party lights in an intimate venue",
        size: "landscape",
      },
      {
        id: "crew-2",
        title: "Crew escape",
        tag: { title: "Geneva", slug: "geneva" },
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
        alt: "Friends laughing together outdoors",
        size: "square",
      },
      {
        id: "rotterdam-1",
        title: "Rotterdam crew",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/20250726_183436.jpg",
        alt: "French Soca Crew group moment in Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-2",
        title: "Yellow energy",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        alt: "French Soca Crew smiling together in Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-3",
        title: "Road side",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/20250727_162600(0).jpg",
        alt: "French Soca Crew carnival day in Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-4",
        title: "Carnival stop",
        tag: { title: "Rotterdam", slug: "rotterdam" },
        image: "/Rotterdam/20250727_162632.jpg",
        alt: "French Soca Crew road moment in Rotterdam",
        size: "portrait",
      },
    ],
  },
  contact: {
    title: "Plan your next road.",
    description:
      "Reach out for bookings, destination details, crew questions or the next road you want to secure with us.",
    methods: [
      {
        label: "Instagram",
        value: "@frenchsocacrew",
        detail: "Daily road moments and event drops",
        href: "https://instagram.com/frenchsocacrew",
        icon: "instagram",
      },
      {
        label: "WhatsApp",
        value: "Bookings and fast trip questions",
        detail: "Best channel to reserve your spot",
        href: "https://wa.me/33612345678",
        icon: "message-circle",
      },
      {
        label: "Email",
        value: "hello@frenchsocacrew.com",
        detail: "Partnerships, media and detailed requests",
        href: "mailto:hello@frenchsocacrew.com",
        icon: "mail",
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
      "A premium overview of our current featured destinations, designed to scale as more roads, islands and event formats join the calendar.",
  },
} as const;