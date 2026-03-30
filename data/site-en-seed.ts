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
        category: "Paris",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
        alt: "Travelers arriving together with luggage in a bright terminal",
        size: "landscape",
      },
      {
        id: "carnival-1",
        title: "West road",
        category: "London",
        image: "/London/nhc3.jpg",
        alt: "French Soca Crew road moment in London",
        size: "landscape",
      },
      {
        id: "party-1",
        title: "Night session",
        category: "Parties",
        image:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1000&q=80",
        alt: "Party crowd with haze and lights",
        size: "square",
      },
      {
        id: "crew-1",
        title: "Lake side linkup",
        category: "Geneva",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
        alt: "Group smiling together at an event",
        size: "portrait",
      },
      {
        id: "trip-2",
        title: "City touch-down",
        category: "Paris",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
        alt: "Travelers overlooking a cityscape",
        size: "landscape",
      },
      {
        id: "carnival-2",
        title: "Mas energy",
        category: "London",
        image: "/London/nhc1.jpg",
        alt: "French Soca Crew carnival energy in London",
        size: "portrait",
      },
      {
        id: "party-2",
        title: "Late energy",
        category: "Parties",
        image:
          "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1000&q=80",
        alt: "DJ and party lights in an intimate venue",
        size: "landscape",
      },
      {
        id: "crew-2",
        title: "Crew escape",
        category: "Geneva",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
        alt: "Friends laughing together outdoors",
        size: "square",
      },
      {
        id: "rotterdam-1",
        title: "Rotterdam crew",
        category: "Rotterdam",
        image: "/Rotterdam/20250726_183436.jpg",
        alt: "French Soca Crew group moment in Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-2",
        title: "Yellow energy",
        category: "Rotterdam",
        image: "/Rotterdam/fsc-rotterdam-road.jpg",
        alt: "French Soca Crew smiling together in Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-3",
        title: "Road side",
        category: "Rotterdam",
        image: "/Rotterdam/20250727_162600(0).jpg",
        alt: "French Soca Crew carnival day in Rotterdam",
        size: "portrait",
      },
      {
        id: "rotterdam-4",
        title: "Carnival stop",
        category: "Rotterdam",
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

export const destinationPagesEnSeed = {
  "rotterdam-carnival": {
    title: "Rotterdam Carnival",
    eyebrow: "Destination feature",
    heroDescription:
      "A vibrant city escape where parade energy, crew logistics and after-hours atmosphere come together in one smooth experience.",
    introTitle: "A weekend in motion.",
    introParagraphs: [
      "Rotterdam Carnival is the kind of destination that feels instantly alive. The city offers movement, diversity and a street energy that matches the excitement of a carnival weekend.",
      "With French Soca Crew, the trip becomes easier to enjoy. We think through the pacing, the social atmosphere and the practical details so you can focus on the music, the memories and the people around you.",
      "The full rhythm of the weekend is shared directly with the crew. Final timing, meeting points and access details are confirmed as the road approaches so your trip stays clear and easy to follow.",
    ],
    experiences: [
      {
        title: "Arrival",
        date: "Friday · Arrival day",
        description:
          "A smooth touch-down block for arrivals, check-in flow and the first shared meet-up before the city starts moving at night.",
        includes: ["Welcome meetup", "Crew coordination", "Trip briefing"],
      },
      {
        title: "Carnival Day",
        date: "Saturday · Main road day",
        description:
          "The heart of the weekend: parade atmosphere, city motion and curated gathering points that keep the crew connected through the day.",
        includes: ["Group guidance", "Key meetup points", "On-site crew support"],
      },
      {
        title: "After Party",
        date: "Saturday night · Night session",
        description:
          "A late-night extension of the road with selected links, crew momentum and premium options shaped around the strongest energy of the weekend.",
        includes: ["Party curation", "Optional add-ons", "Shared crew atmosphere"],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "Details on request",
        pitch: "A clean, accessible way to join the road with crew support.",
        included: ["Trip guidance", "Core meetup access", "Communication group"],
        notIncluded: ["Premium lodging", "Private transfers"],
      },
      {
        name: "Experience Pack",
        price: "Details on request",
        pitch: "The balanced option for travelers who want comfort and atmosphere.",
        included: ["Enhanced coordination", "Selected event access", "Crew extras"],
        notIncluded: ["Full luxury upgrades"],
      },
      {
        name: "Premium Pack",
        price: "Details on request",
        pitch: "More comfort, more support and a more elevated destination flow.",
        included: ["Priority planning", "Premium stay option", "Curated moments"],
        notIncluded: ["Flights"],
      },
      {
        name: "Di Road Pack",
        price: "Details on request",
        pitch: "Built around the road energy for travelers who want the full carnival feeling.",
        included: ["Road-focused planning", "Crew movement support", "Event-driven pacing"],
        notIncluded: ["Luxury room upgrades"],
      },
    ],
  },
  "london-carnival": {
    title: "London Carnival",
    eyebrow: "Destination feature",
    heroDescription:
      "An iconic carnival destination where soundsystems, diaspora culture and big-road emotion create a trip with real depth and scale.",
    introTitle: "Big road energy.",
    introParagraphs: [
      "London Carnival is not just an event. It is a cultural heartbeat. The sound, the streets and the people give the experience a density and emotion that makes every moment feel significant.",
      "French Soca Crew turns that scale into something more fluid. We help shape a travel experience that feels exciting without feeling chaotic, preserving both freedom and support.",
      "The program is shaped around the real pulse of the road. Final timing, featured moments and pack details are shared directly with the crew so everyone arrives with the right rhythm and expectations.",
    ],
    experiences: [
      {
        title: "Warm-Up",
        date: "Saturday · Warm-up day",
        description:
          "An arrival sequence for early city exploration, crew meetups and pre-carnival energy before the main road moments begin.",
        includes: ["Arrival guidance", "Local orientation", "Community meetup"],
      },
      {
        title: "Road Day",
        date: "Sunday / Monday · Main road days",
        description:
          "The main carnival stretch, built around route flow, meetup points and the kind of live coordination that lets the crew stay together without losing the freedom of the road.",
        includes: ["Road strategy", "Meeting points", "Live coordination"],
      },
      {
        title: "Night Session",
        date: "Evenings · After-hours rhythm",
        description:
          "Selected parties, late sessions and extra links that extend the experience beyond the daytime road and keep the momentum alive after dark.",
        includes: ["Event recommendations", "Optional party access", "Crew follow-through"],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "Details on request",
        pitch: "An accessible entry point for joining the London road with guidance.",
        included: ["Core trip communication", "Meetup access", "Planning notes"],
        notIncluded: ["Enhanced comfort options"],
      },
      {
        name: "Experience Pack",
        price: "Details on request",
        pitch: "A strong all-round format balancing logistics, vibe and key access.",
        included: ["Selected extras", "Structured coordination", "Crew assistance"],
        notIncluded: ["Premium transport"],
      },
      {
        name: "Premium Pack",
        price: "Details on request",
        pitch: "For travelers who want the destination handled with more ease and style.",
        included: ["Elevated support", "Comfort-first options", "Priority guidance"],
        notIncluded: ["Flights"],
      },
      {
        name: "Di Road Pack",
        price: "Details on request",
        pitch: "A road-centric option focused on maximizing carnival immersion.",
        included: ["Road-first planning", "High-energy schedule", "Crew lead flow"],
        notIncluded: ["Hotel upgrades"],
      },
    ],
  },
} as const;
