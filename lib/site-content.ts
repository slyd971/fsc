import {
  siteData,
  destinationPages,
  type DestinationPageData,
  type DestinationPreview,
  type GalleryItem,
  type Testimonial,
} from "@/data/site";
import { siteDataEnSeed, destinationPagesEnSeed } from "@/data/site-en-seed";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { client, getSanityFetchOptions } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import {
  mapGallery,
  mapSiteSettings,
  mapTestimonials,
  mapTripPage,
  mapTripPreview,
} from "@/sanity/lib/mappers";
import {
  galleryItemsQuery,
  pageByIdQuery,
  siteSettingsQuery,
  testimonialsQuery,
  tripBySlugQuery,
  tripsQuery,
} from "@/sanity/lib/queries";
import type {
  CmsGalleryItem,
  CmsSiteSettings,
  CmsTestimonial,
  CmsTrip,
} from "@/sanity/lib/types";

type HomePageContent = {
  hero: typeof siteData.hero & {
    microLabel?: string;
    backgroundWord?: string;
    chorusItems?: string[];
  };
  about: typeof siteData.about & {
    mediaNote?: string;
    sideKicker?: string;
    sideTitle?: string;
    image?: string;
    imageAlt?: string;
  };
  video: typeof siteData.video;
  destinations: {
    eyebrow: string;
    title: string;
    description: string;
    cta: typeof siteData.hero.primaryCta;
    items?: DestinationPreview[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    cta: typeof siteData.hero.primaryCta;
    items?: GalleryItem[];
  };
  contact: typeof siteData.contact & {
    eyebrow?: string;
    backgroundWord?: string;
    primaryCta?: typeof siteData.hero.primaryCta;
    secondaryCta?: typeof siteData.hero.primaryCta;
  };
  testimonials: {
    eyebrow?: string;
    title?: string;
    description?: string;
    backgroundWord?: string;
    items?: Testimonial[];
  };
};

type CmsPageBlock = {
  _type?: string;
  microLabel?: Partial<Record<Locale, string>>;
  backgroundWord?: Partial<Record<Locale, string>>;
  eyebrow?: Partial<Record<Locale, string>>;
  title?: Partial<Record<Locale, string>>;
  body?: Partial<Record<Locale, string>>;
  mediaNote?: Partial<Record<Locale, string>>;
  sideKicker?: Partial<Record<Locale, string>>;
  sideTitle?: Partial<Record<Locale, string>>;
  media?: {
    imageUrl?: string;
    alt?: Partial<Record<Locale, string>>;
    image?: {
      asset?: { _ref: string; _type: "reference" };
      imageUrl?: string;
    };
  };
  primaryCta?: {
    label?: Partial<Record<Locale, string>>;
    href?: string;
  };
  secondaryCta?: {
    label?: Partial<Record<Locale, string>>;
    href?: string;
  };
  cta?: {
    label?: Partial<Record<Locale, string>>;
    href?: string;
  };
  stats?: Array<{
    value?: string;
    label?: Partial<Record<Locale, string>>;
    icon?: string;
  }>;
  chorusItems?: Partial<Record<Locale, string>>[];
  items?: Array<{
    _id?: string;
    _type?: string;
    name?: Partial<Record<Locale, string>>;
    title?: Partial<Record<Locale, string>>;
    slug?: Partial<Record<Locale, { current: string }>>;
    city?: Partial<Record<Locale, string>>;
    eyebrow?: Partial<Record<Locale, string>>;
    description?: Partial<Record<Locale, string>>;
    badge?: Partial<Record<Locale, string>>;
    role?: Partial<Record<Locale, string>>;
    quote?: Partial<Record<Locale, string>>;
    moment?: Partial<Record<Locale, string>>;
    accent?: Partial<Record<Locale, string>>;
    tag?: {
      _id?: string;
      title?: Partial<Record<Locale, string>>;
      slug?: Partial<Record<Locale, { current: string }>>;
    };
    size?: "portrait" | "landscape" | "square";
    imageUrl?: string;
    alt?: Partial<Record<Locale, string>>;
    caption?: Partial<Record<Locale, string>>;
    image?: {
      imageUrl?: string;
      alt?: Partial<Record<Locale, string>>;
      asset?: { _ref: string; _type: "reference" };
    };
  }>;
};

type CmsPage = {
  _id: string;
  blocks?: CmsPageBlock[];
};

type ListingPageContent = {
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  destinations?: {
    eyebrow: string;
    title: string;
    description: string;
    items: DestinationPreview[];
  };
  gallery?: {
    eyebrow: string;
    title: string;
    description: string;
    items: GalleryItem[];
  };
};

function localize(
  value: Partial<Record<Locale, string>> | undefined,
  locale: Locale,
  fallback: string,
) {
  return value?.[locale] ?? value?.fr ?? value?.en ?? fallback;
}

function normalizeSlug(slug: string) {
  return slug.trim().toLowerCase().replace(/^\/+|\/+$/g, "");
}

function resolveTripSlugAlias(slug: string) {
  const cleanSlug = normalizeSlug(slug);

  if (cleanSlug === "london") {
    return "london-carnival";
  }

  if (cleanSlug === "rotterdam") {
    return "rotterdam-carnival";
  }

  return cleanSlug;
}

function fallbackShell(locale: Locale) {
  if (locale === "en") {
    return {
      metadata: siteDataEnSeed.metadata,
      brand: siteDataEnSeed.brand,
      navigation: {
        items: siteDataEnSeed.navigation.items.map((item) => ({ ...item })),
      },
      contact: {
        methods: siteDataEnSeed.contact.methods,
      },
    };
  }

  return {
    metadata: siteData.metadata,
    brand: siteData.brand,
    navigation: {
      items: siteData.navigation.items.map((item) => ({ ...item })),
    },
    contact: {
      methods: siteData.contact.methods,
    },
  };
}

function fallbackTrips(locale: Locale): DestinationPreview[] {
  return locale === "en"
    ? (siteDataEnSeed.destinations.map((item) => ({ ...item })) as DestinationPreview[])
    : siteData.destinations.map((item) => ({ ...item }));
}

function fallbackTestimonials(locale: Locale): Testimonial[] {
  return locale === "en"
    ? (siteDataEnSeed.testimonials.map((item) => ({ ...item })) as Testimonial[])
    : siteData.testimonials.map((item) => ({ ...item }));
}

function fallbackGallery(locale: Locale): GalleryItem[] {
  return locale === "en"
    ? (siteDataEnSeed.gallery.items.map((item) => ({ ...item })) as GalleryItem[])
    : siteData.gallery.items.map((item) => ({ ...item }));
}

function fallbackHome(locale: Locale): HomePageContent {
  if (locale === "en") {
    return {
      hero: {
        ...siteDataEnSeed.hero,
        stats: siteDataEnSeed.hero.stats.map((stat) => ({ ...stat })),
        primaryCta: { ...siteDataEnSeed.hero.primaryCta },
        secondaryCta: { ...siteDataEnSeed.hero.secondaryCta },
        imageBadge: siteData.hero.imageBadge,
        imageCaption: siteData.hero.imageCaption,
        backgroundWord: "ROAD",
        chorusItems: ["Soca movement", "Carnival emotion", "Diaspora energy", "Premium roads"],
      },
      about: {
        ...siteData.about,
        ...siteDataEnSeed.about,
        paragraphs: [...siteDataEnSeed.about.paragraphs],
        mediaNote:
          "Carnival logistics, warmth, music, community and road energy held together as one atmosphere.",
        sideKicker: "Not just a booking",
        sideTitle: "A crew-first way to move.",
        image: "/London/nhc1.jpg",
        imageAlt: "French Soca Crew group moment",
        highlights: [
          {
            title: "Community",
            description: "A travel crew shaped around connection, trust and shared recall.",
          },
          {
            title: "Carnival experiences",
            description: "Trips built around emotion, music and the movement of carnival culture.",
          },
          {
            title: "Caribbean vibes",
            description: "Soca, diaspora spirit and cultural immersion woven into every detail.",
          },
        ],
      },
      video: {
        ...siteDataEnSeed.video,
        videos: siteDataEnSeed.video.videos.map((video) => ({ ...video })),
        cta: { ...siteDataEnSeed.video.cta },
      },
      destinations: {
        eyebrow: "Featured trips",
        title: "Choose your road.",
        description:
          "Each destination should feel like stepping into a full mood: the city, the crew, the soundtrack, the parade pressure, the after-dark pull and the feeling that the whole road is waiting.",
        cta: { label: "Enter this world", href: "/trips" },
        items: siteDataEnSeed.destinations.map((item) => ({ ...item })) as DestinationPreview[],
      },
      gallery: {
        eyebrow: "Gallery",
        title: "Memory in motion.",
        description: siteDataEnSeed.gallery.heroDescription,
        cta: { label: "Explore full gallery", href: "/gallery" },
        items: siteDataEnSeed.gallery.items.map((item) => ({ ...item })) as GalleryItem[],
      },
      contact: {
        ...siteData.contact,
        ...siteDataEnSeed.contact,
        methods: siteDataEnSeed.contact.methods,
        formInterests: [...siteDataEnSeed.contact.formInterests],
        eyebrow: "Final call",
        backgroundWord: "Join",
        primaryCta: { label: "Book on WhatsApp", href: "https://wa.me/33612345678" },
        secondaryCta: { label: "See the roads", href: "/trips" },
      },
      testimonials: {
        eyebrow: "Crew voices",
        title: "Echoes from the road.",
        description:
          "Trust lands best when it feels lived in. These are not polished reviews, but fragments of what the road actually feels like once people have moved with the crew.",
        backgroundWord: "FSC",
        items: siteDataEnSeed.testimonials.map((item) => ({ ...item })) as Testimonial[],
      },
    };
  }

  return {
    hero: {
      ...siteData.hero,
      backgroundWord: "ROAD",
      chorusItems: ["Mouvement soca", "Émotion carnaval", "Énergie diaspora", "Roads premium"],
    },
    about: {
      ...siteData.about,
      mediaNote:
        "Logistique carnaval, chaleur, musique, communauté et énergie de road tenues ensemble dans une seule atmosphère.",
      sideKicker: "Pas juste une réservation",
      sideTitle: "Une façon crew-first d'avancer.",
      image: "/London/nhc1.jpg",
      imageAlt: "Moment de groupe French Soca Crew",
    },
    video: siteData.video,
    destinations: {
      eyebrow: "Trips à la une",
      title: "Choisis ta road.",
      description:
        "Chaque destination doit donner l'impression d'entrer dans une ambiance complète : la ville, le crew, la bande-son, la pression de la parade, l'appel de l'après-nuit et cette sensation que toute la road t'attend.",
      cta: { label: "Entrer dans cet univers", href: "/trips" },
      items: siteData.destinations.map((item) => ({ ...item })),
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Mémoire en mouvement.",
      description: siteData.gallery.heroDescription,
      cta: { label: "Explorer la galerie complète", href: "/gallery" },
      items: siteData.gallery.items.map((item) => ({ ...item })),
    },
    contact: {
      ...siteData.contact,
      methods: siteData.contact.methods,
      eyebrow: "Dernier appel",
      backgroundWord: "Join",
      primaryCta: {
        label: "Réserver sur WhatsApp",
        href:
          siteData.contact.methods.find((method) => method.label === "WhatsApp")?.href ?? "/#contact",
      },
      secondaryCta: { label: "Voir les roads", href: "/trips" },
    },
    testimonials: {
      eyebrow: "Voix du crew",
      title: "Échos de la road.",
      description:
        "La confiance fonctionne mieux quand elle paraît vécue. Ce ne sont pas des avis trop polis, mais des fragments de ce que l'on ressent vraiment sur la road quand on a bougé avec le crew.",
      backgroundWord: "FSC",
      items: siteData.testimonials.map((item) => ({ ...item })),
    },
  };
}

function splitParagraphs(body: string | undefined, fallbackParagraphs: string[]) {
  if (!body?.trim()) {
    return fallbackParagraphs;
  }

  return body
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function getBlock(page: CmsPage | null, type: string) {
  return page?.blocks?.find((block) => block._type === type);
}

function resolveMediaUrl(
  media:
    | {
        imageUrl?: string;
        image?: {
          asset?: { _ref: string; _type: "reference" };
          imageUrl?: string;
        };
      }
    | undefined,
  fallback: string,
) {
  if (media?.image?.asset) {
    try {
      return urlFor(media.image).width(1800).auto("format").url();
    } catch {
      // Fall through to legacy URLs before using the final fallback.
    }
  }

  if (media?.imageUrl) {
    return media.imageUrl;
  }

  if (media?.image?.imageUrl) {
    return media.image.imageUrl;
  }

  return fallback;
}

function mapBlockTrips(
  items: CmsPageBlock["items"] | undefined,
  locale: Locale,
  fallback: DestinationPreview[],
): DestinationPreview[] {
  const mapped =
    items
      ?.filter((item) => item?._type === "trip")
      .map((item) => {
        const slug = item.slug?.[locale]?.current ?? item.slug?.fr?.current ?? item.slug?.en?.current;

        if (!slug) {
          return null;
        }

        return {
          slug: slug as DestinationPreview["slug"],
          city: localize(item.city, locale, "Destination"),
          title: localize(item.title, locale, "Destination"),
          eyebrow: localize(item.eyebrow, locale, ""),
          description: localize(item.description, locale, ""),
          image: resolveMediaUrl(
            item.image,
            fallback.find((entry) => entry.slug === slug)?.image ?? "/fsc-crew-1.jpg",
          ),
          imageAlt: localize(item.image?.alt, locale, "Trip image"),
          badge: localize(item.badge, locale, ""),
        };
      })
      .filter(Boolean) as DestinationPreview[] | undefined;

  return mapped?.length ? mapped : fallback;
}

function mapBlockGallery(
  items: CmsPageBlock["items"] | undefined,
  locale: Locale,
  fallback: GalleryItem[],
): GalleryItem[] {
  const mapped =
    items
      ?.filter((item) => item?._type === "galleryItem")
      .map((item, index) => ({
        id: item._id ?? `gallery-${index}`,
        title: localize(item.title, locale, "Gallery item"),
        tag: item.tag
          ? {
              title: localize(item.tag.title, locale, "Parties"),
              slug:
                item.tag.slug?.[locale]?.current ??
                item.tag.slug?.fr?.current ??
                item.tag.slug?.en?.current ??
                "parties",
            }
          : undefined,
        image: resolveMediaUrl(
          item.image,
          fallback[index]?.image ?? fallback[0]?.image ?? "/fsc-crew-1.jpg",
        ),
        alt: localize(item.alt ?? item.image?.alt, locale, "Gallery image"),
        size: item.size ?? "landscape",
      })) as GalleryItem[] | undefined;

  return mapped?.length ? mapped : fallback;
}

function mapBlockTestimonials(
  items: CmsPageBlock["items"] | undefined,
  locale: Locale,
  fallback: Testimonial[],
): Testimonial[] {
  const mapped =
    items
      ?.filter((item) => item?._type === "testimonial")
      .map((item) => ({
        name: localize(item.name, locale, "Crew member"),
        role: localize(item.role, locale, ""),
        quote: localize(item.quote, locale, ""),
        city: localize(item.city, locale, ""),
        moment: localize(item.moment, locale, ""),
        accent: localize(item.accent, locale, ""),
      })) as Testimonial[] | undefined;

  return mapped?.length ? mapped : fallback;
}

async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  if (!client) {
    return null;
  }

  try {
    if (sanityFetch) {
      const { data } = await sanityFetch({
        query,
        params,
        tags: ["sanity", ...tags],
      });

      return data as T;
    }

    return await client.fetch<T>(query, params, getSanityFetchOptions(tags));
  } catch {
    return null;
  }
}

export async function getSiteShell(locale: Locale = defaultLocale) {
  const settings = await safeFetch<CmsSiteSettings>(
    siteSettingsQuery,
    { locale },
    ["siteSettings", `siteSettings:${locale}`],
  );

  return mapSiteSettings(settings, locale) ?? fallbackShell(locale);
}

export async function getTrips(locale: Locale = defaultLocale): Promise<DestinationPreview[]> {
  const trips = await safeFetch<CmsTrip[]>(
    tripsQuery,
    { locale },
    ["trips", `trips:${locale}`],
  );

  if (!trips?.length) {
    return fallbackTrips(locale);
  }

  const mapped = trips.map((trip) => mapTripPreview(trip, locale)).filter(Boolean) as DestinationPreview[];
  return mapped.length ? mapped : fallbackTrips(locale);
}
export async function getTripPage(
  slug: string,
  locale: Locale = defaultLocale,
): Promise<DestinationPageData | null> {
  const cleanSlug = resolveTripSlugAlias(slug) as DestinationPreview["slug"];

  const trip = await safeFetch<CmsTrip>(
    tripBySlugQuery,
    { slug: cleanSlug, locale },
    ["trip", "trips", `trip:${cleanSlug}`, `trip:${locale}`, `trip:${locale}:${cleanSlug}`],
  );

  const mapped = trip ? mapTripPage(trip, locale) : null;
  if (mapped) {
    return mapped;
  }

  return locale === "en"
    ? destinationPagesEnSeed[cleanSlug] ?? null
    : destinationPages[cleanSlug] ?? null;
}

export async function getTestimonials(locale: Locale = defaultLocale): Promise<Testimonial[]> {
  const testimonials = await safeFetch<CmsTestimonial[]>(
    testimonialsQuery,
    { locale },
    ["testimonials", `testimonials:${locale}`],
  );

  return testimonials?.length ? mapTestimonials(testimonials, locale) : fallbackTestimonials(locale);
}

export async function getGalleryItems(locale: Locale = defaultLocale): Promise<GalleryItem[]> {
  const items = await safeFetch<CmsGalleryItem[]>(
    galleryItemsQuery,
    { locale },
    ["gallery", `gallery:${locale}`],
  );

  return items?.length ? mapGallery(items, locale) : fallbackGallery(locale);
}

export async function getHomePageContent(locale: Locale = defaultLocale): Promise<HomePageContent> {
  const fallback = fallbackHome(locale);
  const page = await safeFetch<CmsPage>(
    pageByIdQuery,
    { id: "page.home", locale },
    ["page", "page:home", `page:home:${locale}`],
  );

  if (!page?.blocks?.length) {
    return fallback;
  }

  const heroBlock = getBlock(page, "heroBlock");
  const aboutBlock = getBlock(page, "introBlock");
  const videoBlock = getBlock(page, "videoBlock");
  const destinationsBlock = getBlock(page, "destinationsBlock");
  const galleryBlock = getBlock(page, "galleryBlock");
  const testimonialsBlock = getBlock(page, "testimonialsBlock");
  const contactBlock = getBlock(page, "contactBlock");

  const aboutParagraphs = splitParagraphs(
    localize(
      aboutBlock?.body,
      locale,
      [fallback.about.intro, ...fallback.about.paragraphs].join("\n\n"),
    ),
    fallback.about.paragraphs,
  );

  const [aboutIntro, ...aboutRest] = aboutParagraphs;

  return {
    hero: {
      ...fallback.hero,
      eyebrow: localize(heroBlock?.eyebrow, locale, fallback.hero.eyebrow),
      title: localize(heroBlock?.title, locale, fallback.hero.title),
      subtitle: localize(heroBlock?.body, locale, fallback.hero.subtitle),
      microLabel: localize(
        heroBlock?.microLabel,
        locale,
        fallback.hero.microLabel ?? "",
      ),
      backgroundWord: localize(
        heroBlock?.backgroundWord,
        locale,
        fallback.hero.backgroundWord ?? "ROAD",
      ),
      image: resolveMediaUrl(heroBlock?.media, fallback.hero.image),
      imageAlt: localize(heroBlock?.media?.alt, locale, fallback.hero.imageAlt),
      primaryCta: {
        label: localize(heroBlock?.primaryCta?.label, locale, fallback.hero.primaryCta.label),
        href: heroBlock?.primaryCta?.href ?? fallback.hero.primaryCta.href,
      },
      secondaryCta: {
        label: localize(heroBlock?.secondaryCta?.label, locale, fallback.hero.secondaryCta.label),
        href: heroBlock?.secondaryCta?.href ?? fallback.hero.secondaryCta.href,
      },
      stats:
        heroBlock?.stats?.length
          ? heroBlock.stats.map((stat, index) => ({
              value: stat.value ?? fallback.hero.stats[index]?.value ?? "",
              label: localize(stat.label, locale, fallback.hero.stats[index]?.label ?? ""),
              icon: (stat.icon ??
                fallback.hero.stats[index]?.icon ??
                "sparkles") as typeof fallback.hero.stats[number]["icon"],
            }))
          : fallback.hero.stats,
      chorusItems:
        heroBlock?.chorusItems?.length
          ? heroBlock.chorusItems.map((item, index) =>
              localize(item, locale, fallback.hero.chorusItems?.[index] ?? `Item ${index + 1}`),
            )
          : fallback.hero.chorusItems,
    },

    about: {
      ...fallback.about,
      eyebrow: localize(aboutBlock?.eyebrow, locale, fallback.about.eyebrow),
      title: localize(aboutBlock?.title, locale, fallback.about.title),
      intro: aboutIntro ?? fallback.about.intro,
      paragraphs: aboutRest.length ? aboutRest : fallback.about.paragraphs,
      mediaNote: localize(aboutBlock?.mediaNote, locale, fallback.about.mediaNote ?? ""),
      sideKicker: localize(aboutBlock?.sideKicker, locale, fallback.about.sideKicker ?? ""),
      sideTitle: localize(aboutBlock?.sideTitle, locale, fallback.about.sideTitle ?? ""),
      image: resolveMediaUrl(aboutBlock?.media, fallback.about.image ?? "/London/nhc1.jpg"),
      imageAlt: localize(
        aboutBlock?.media?.alt,
        locale,
        fallback.about.imageAlt ??
          (locale === "en" ? "French Soca Crew group moment" : "Moment de groupe French Soca Crew"),
      ),
    },

    video: {
      ...fallback.video,
      eyebrow: localize(videoBlock?.eyebrow, locale, fallback.video.eyebrow),
      title: localize(videoBlock?.title, locale, fallback.video.title),
      description: localize(videoBlock?.body, locale, fallback.video.description),
      cta: {
        label: localize(videoBlock?.cta?.label, locale, fallback.video.cta.label),
        href: videoBlock?.cta?.href ?? fallback.video.cta.href,
      },
      videos:
        videoBlock?.items?.length
          ? videoBlock.items.map((item, index) => ({
              title: localize(
                item.caption ?? item.alt,
                locale,
                fallback.video.videos[index]?.title ?? `Reel ${index + 1}`,
              ),
              poster: resolveMediaUrl(
                item,
                fallback.video.videos[index]?.poster ??
                  fallback.video.videos[0]?.poster ??
                  "/fsc-crew-1.jpg",
              ),
            }))
          : fallback.video.videos,
    },

    destinations: {
      eyebrow: localize(destinationsBlock?.eyebrow, locale, fallback.destinations.eyebrow),
      title: localize(destinationsBlock?.title, locale, fallback.destinations.title),
      description: localize(destinationsBlock?.body, locale, fallback.destinations.description),
      cta: {
        label: localize(destinationsBlock?.cta?.label, locale, fallback.destinations.cta.label),
        href: destinationsBlock?.cta?.href ?? fallback.destinations.cta.href,
      },
      items: mapBlockTrips(destinationsBlock?.items, locale, fallback.destinations.items ?? []),
    },

    gallery: {
      eyebrow: localize(galleryBlock?.eyebrow, locale, fallback.gallery.eyebrow),
      title: localize(galleryBlock?.title, locale, fallback.gallery.title),
      description: localize(galleryBlock?.body, locale, fallback.gallery.description),
      cta: {
        label: localize(galleryBlock?.cta?.label, locale, fallback.gallery.cta.label),
        href: galleryBlock?.cta?.href ?? fallback.gallery.cta.href,
      },
      items: mapBlockGallery(galleryBlock?.items, locale, fallback.gallery.items ?? []),
    },

    contact: {
      ...fallback.contact,
      eyebrow: localize(contactBlock?.eyebrow, locale, fallback.contact.eyebrow ?? ""),
      title: localize(contactBlock?.title, locale, fallback.contact.title),
      description: localize(contactBlock?.body, locale, fallback.contact.description),
      backgroundWord: localize(
        contactBlock?.backgroundWord,
        locale,
        fallback.contact.backgroundWord ?? "Join",
      ),
      primaryCta: {
        label: localize(contactBlock?.primaryCta?.label, locale, fallback.contact.primaryCta?.label ?? ""),
        href: contactBlock?.primaryCta?.href ?? fallback.contact.primaryCta?.href ?? "/#contact",
      },
      secondaryCta: {
        label: localize(contactBlock?.secondaryCta?.label, locale, fallback.contact.secondaryCta?.label ?? ""),
        href: contactBlock?.secondaryCta?.href ?? fallback.contact.secondaryCta?.href ?? "/trips",
      },
    },

    testimonials: {
      eyebrow: localize(testimonialsBlock?.eyebrow, locale, fallback.testimonials.eyebrow ?? ""),
      title: localize(testimonialsBlock?.title, locale, fallback.testimonials.title ?? ""),
      description: localize(
        testimonialsBlock?.body,
        locale,
        fallback.testimonials.description ?? "",
      ),
      backgroundWord: localize(
        testimonialsBlock?.backgroundWord,
        locale,
        fallback.testimonials.backgroundWord ?? "FSC",
      ),
      items: mapBlockTestimonials(
        testimonialsBlock?.items,
        locale,
        fallback.testimonials.items ?? [],
      ),
    },
  };
}

export async function getListingPageContent(
  slug: "trips" | "gallery",
  locale: Locale = defaultLocale,
): Promise<ListingPageContent | null> {
  const pageId = slug === "trips" ? "page.trips" : "page.gallery";
  const page = await safeFetch<CmsPage>(
    pageByIdQuery,
    { id: pageId, locale },
    ["page", `page:${slug}`, `page:${slug}:${locale}`],
  );

  if (!page?.blocks?.length) {
    return null;
  }

  const introBlock = getBlock(page, "introBlock");
  const destinationsBlock = getBlock(page, "destinationsBlock");
  const galleryBlock = getBlock(page, "galleryBlock");

  const fallbackIntro =
    slug === "trips"
      ? {
          eyebrow: locale === "en" ? siteDataEnSeed.tripsPage.eyebrow : siteData.tripsPage.eyebrow,
          title: locale === "en" ? siteDataEnSeed.tripsPage.title : siteData.tripsPage.title,
          description:
            locale === "en"
              ? siteDataEnSeed.tripsPage.description
              : siteData.tripsPage.description,
        }
      : {
          eyebrow: locale === "en" ? "Gallery" : "Galerie",
          title: locale === "en" ? siteDataEnSeed.gallery.heroTitle : siteData.gallery.heroTitle,
          description:
            locale === "en"
              ? siteDataEnSeed.gallery.heroDescription
              : siteData.gallery.heroDescription,
        };

  return {
    intro: {
      eyebrow: localize(introBlock?.eyebrow, locale, fallbackIntro.eyebrow),
      title: localize(introBlock?.title, locale, fallbackIntro.title),
      description: localize(introBlock?.body, locale, fallbackIntro.description),
    },
    destinations: destinationsBlock
      ? {
          eyebrow: localize(destinationsBlock.eyebrow, locale, fallbackIntro.eyebrow),
          title: localize(destinationsBlock.title, locale, fallbackIntro.title),
          description: localize(destinationsBlock.body, locale, fallbackIntro.description),
          items: mapBlockTrips(destinationsBlock.items, locale, fallbackTrips(locale)),
        }
      : undefined,
    gallery: galleryBlock
      ? {
          eyebrow: localize(galleryBlock.eyebrow, locale, fallbackIntro.eyebrow),
          title: localize(galleryBlock.title, locale, fallbackIntro.title),
          description: localize(galleryBlock.body, locale, fallbackIntro.description),
          items: mapBlockGallery(galleryBlock.items, locale, fallbackGallery(locale)),
        }
      : undefined,
  };
}
