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
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "Trips" | "Carnival Moments" | "Parties" | "Crew Moments" | "Rotterdam";
  image: string;
  alt: string;
  size: "portrait" | "landscape" | "square";
};

export type ContactMethod = {
  label: string;
  value: string;
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
    ] satisfies NavItem[],
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
    imageBadge: "Crew together",
    imageCaption: "Travel together. Fete together.",
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
    highlights: [
      {
        title: "Community",
        description: "A travel crew designed around connection, trust and shared memories.",
      },
      {
        title: "Carnival Experiences",
        description: "Trips structured around the emotion, music and movement of carnival culture.",
      },
      {
        title: "Caribbean Vibes",
        description: "Soca, diaspora spirit and cultural immersion woven into every detail.",
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
        "A high-vibration city break built around parade moments, after-dark parties and a crew-first travel flow.",
      image: "/fsc-crew-rotterdam-enhanced.jpg",
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
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Festival crowd with raised hands and warm lighting",
      badge: "Iconic destination",
    },
  ] satisfies DestinationPreview[],
  video: {
    eyebrow: "Crew atmosphere",
    title: "See the vibe.",
    description:
      "A placeholder feature film block ready for your future recap edits, teasers or destination announcements.",
    videos: [
      {
        title: "Rotterdam teaser",
        poster:
          "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "London teaser",
        poster:
          "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Crew recap",
        poster:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    cta: {
      label: "See on Instagram",
      href: "https://www.instagram.com/frenchsocacrew/",
    },
  },
  testimonials: [
    {
      name: "Camille R.",
      role: "Rotterdam traveler",
      quote:
        "Everything felt smooth, stylish and genuinely friendly. It was not just a trip. It felt like joining a real crew.",
    },
    {
      name: "Jordan M.",
      role: "London carnival attendee",
      quote:
        "The organization gave me peace of mind and the atmosphere never dropped. You feel supported from planning to the final event.",
    },
    {
      name: "Nadia T.",
      role: "Community member",
      quote:
        "French Soca Crew creates the kind of energy where people arrive as strangers and leave with stories, photos and new people in their circle.",
    },
  ] satisfies Testimonial[],
  gallery: {
    heroTitle: "Moments that stay.",
    heroDescription:
      "A modular visual archive for future real content, built to showcase road moments, crew warmth and destination energy with editorial rhythm.",
    items: [
      {
        id: "trip-1",
        title: "Departure mood",
        category: "Trips",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
        alt: "Travelers arriving together with luggage in a bright terminal",
        size: "landscape",
      },
      {
        id: "carnival-1",
        title: "Road glow",
        category: "Carnival Moments",
        image:
          "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
        alt: "Festival crowd in warm sunset light",
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
        title: "Crew afterglow",
        category: "Crew Moments",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
        alt: "Group smiling together at an event",
        size: "portrait",
      },
      {
        id: "trip-2",
        title: "City touch-down",
        category: "Trips",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
        alt: "Travelers overlooking a cityscape",
        size: "landscape",
      },
      {
        id: "carnival-2",
        title: "Color and motion",
        category: "Carnival Moments",
        image:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80",
        alt: "Carnival performer in bright costume",
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
        title: "Shared moment",
        category: "Crew Moments",
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
        image: "/Rotterdam/20250726_183459.jpg",
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
    ] satisfies GalleryItem[],
  },
  contact: {
    title: "Plan your next road.",
    description:
      "Reach out for bookings, questions, partnerships or your next carnival departure.",
    methods: [
      {
        label: "Instagram",
        value: "@frenchsocacrew",
        href: "https://instagram.com/frenchsocacrew",
        icon: "instagram",
      },
      {
        label: "WhatsApp",
        value: "+33 6 12 34 56 78",
        href: "https://wa.me/33612345678",
        icon: "message-circle",
      },
      {
        label: "Email",
        value: "hello@frenchsocacrew.com",
        href: "mailto:hello@frenchsocacrew.com",
        icon: "mail",
      },
    ] satisfies ContactMethod[],
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
};

export const destinationPages: Record<DestinationPreview["slug"], DestinationPageData> = {
  "rotterdam-carnival": {
    slug: "rotterdam-carnival",
    title: "Rotterdam Carnival",
    eyebrow: "Destination feature",
    heroDescription:
      "A vibrant city escape where parade energy, crew logistics and after-hours atmosphere come together in one smooth experience.",
    heroImage: "/fsc-crew-rotterdam-enhanced.jpg",
    introTitle: "A weekend in motion.",
    introParagraphs: [
      "Rotterdam Carnival is the kind of destination that feels instantly alive. The city offers movement, diversity and a street energy that matches the excitement of a carnival weekend.",
      "With French Soca Crew, the trip becomes easier to enjoy. We think through the pacing, the social atmosphere and the practical details so you can focus on the music, the memories and the people around you.",
      "This page is structured as a premium placeholder architecture, ready to receive final event timings, official venue names and travel inclusions when the campaign assets are locked.",
    ],
    experiences: [
      {
        title: "Arrival",
        date: "Friday · Date coming soon",
        description:
          "A smooth touch-down block for arrivals, check-in flow and the first shared meet-up before the city starts moving at night.",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
        includes: ["Welcome meetup", "Crew coordination", "Trip briefing"],
      },
      {
        title: "Carnival Day",
        date: "Saturday · Date coming soon",
        description:
          "The heart of the weekend: parade atmosphere, city motion and curated gathering points that keep the crew connected through the day.",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        includes: ["Group guidance", "Key meetup points", "On-site crew support"],
      },
      {
        title: "After Party",
        date: "Saturday night · Date coming soon",
        description:
          "A placeholder block for featured event access, late-night links and premium options once the official party calendar is released.",
        image:
          "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
        includes: ["Party curation", "Optional add-ons", "Shared crew atmosphere"],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "From €XXX",
        pitch: "A clean, accessible way to join the road with crew support.",
        included: ["Trip guidance", "Core meetup access", "Communication group"],
        notIncluded: ["Premium lodging", "Private transfers"],
      },
      {
        name: "Experience Pack",
        price: "From €XXX",
        pitch: "The balanced option for travelers who want comfort and atmosphere.",
        included: ["Enhanced coordination", "Selected event access", "Crew extras"],
        notIncluded: ["Full luxury upgrades"],
        featured: true,
      },
      {
        name: "Premium Pack",
        price: "From €XXX",
        pitch: "More comfort, more support and a more elevated destination flow.",
        included: ["Priority planning", "Premium stay option", "Curated moments"],
        notIncluded: ["Flights"],
      },
      {
        name: "Di Road Pack",
        price: "From €XXX",
        pitch: "Built around the road energy for travelers who want the full carnival feeling.",
        included: ["Road-focused planning", "Crew movement support", "Event-driven pacing"],
        notIncluded: ["Luxury room upgrades"],
      },
    ],
  },
  "london-carnival": {
    slug: "london-carnival",
    title: "London Carnival",
    eyebrow: "Destination feature",
    heroDescription:
      "An iconic carnival destination where soundsystems, diaspora culture and big-road emotion create a trip with real depth and scale.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    introTitle: "Big road energy.",
    introParagraphs: [
      "London Carnival is not just an event. It is a cultural heartbeat. The sound, the streets and the people give the experience a density and emotion that makes every moment feel significant.",
      "French Soca Crew turns that scale into something more fluid. We help shape a travel experience that feels exciting without feeling chaotic, preserving both freedom and support.",
      "For now, this destination uses polished placeholder storytelling and modular blocks so the final campaign can be updated quickly when the official program, visuals and pack details are available.",
    ],
    experiences: [
      {
        title: "Warm-Up",
        date: "Saturday · Date coming soon",
        description:
          "An arrival sequence for early city exploration, crew meetups and pre-carnival energy before the main road moments begin.",
        image:
          "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80",
        includes: ["Arrival guidance", "Local orientation", "Community meetup"],
      },
      {
        title: "Road Day",
        date: "Sunday / Monday · Dates coming soon",
        description:
          "A reusable block for the main carnival days, designed for final route details, meetup points and curated participation guidance.",
        image:
          "https://images.unsplash.com/photo-1508979828023-2ab1d1f5f3d8?auto=format&fit=crop&w=1200&q=80",
        includes: ["Road strategy", "Meeting points", "Live coordination"],
      },
      {
        title: "Night Session",
        date: "Evenings · Dates coming soon",
        description:
          "A premium placeholder for selected parties, late sessions and extra experiences around the core carnival schedule.",
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
        includes: ["Event recommendations", "Optional party access", "Crew follow-through"],
      },
    ],
    packs: [
      {
        name: "Basic Pack",
        price: "From €XXX",
        pitch: "An accessible entry point for joining the London road with guidance.",
        included: ["Core trip communication", "Meetup access", "Planning notes"],
        notIncluded: ["Enhanced comfort options"],
      },
      {
        name: "Experience Pack",
        price: "From €XXX",
        pitch: "A strong all-round format balancing logistics, vibe and key access.",
        included: ["Selected extras", "Structured coordination", "Crew assistance"],
        notIncluded: ["Premium transport"],
        featured: true,
      },
      {
        name: "Premium Pack",
        price: "From €XXX",
        pitch: "For travelers who want the destination handled with more ease and style.",
        included: ["Elevated support", "Comfort-first options", "Priority guidance"],
        notIncluded: ["Flights"],
      },
      {
        name: "Di Road Pack",
        price: "From €XXX",
        pitch: "A road-centric option focused on maximizing carnival immersion.",
        included: ["Road-first planning", "High-energy schedule", "Crew lead flow"],
        notIncluded: ["Hotel upgrades"],
      },
    ],
  },
};
