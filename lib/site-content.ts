import { siteData, destinationPages, type DestinationPageData, type DestinationPreview, type GalleryItem, type Testimonial } from "@/data/site";
import { siteDataEnSeed } from "@/data/site-en-seed";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { client, getSanityFetchOptions } from "@/sanity/lib/client";
import { mapGallery, mapSiteSettings, mapTestimonials, mapTripPage, mapTripPreview } from "@/sanity/lib/mappers";
import { galleryItemsQuery, pageBySlugQuery, siteSettingsQuery, testimonialsQuery, tripBySlugQuery, tripsQuery } from "@/sanity/lib/queries";
import type { CmsGalleryItem, CmsSiteSettings, CmsTestimonial, CmsTrip } from "@/sanity/lib/types";

type HomePageContent = {
  hero: typeof siteData.hero;
  about: typeof siteData.about;
  video: typeof siteData.video;
  contact: typeof siteData.contact;
};

type CmsPageBlock = {
  _type?: string;
  eyebrow?: Partial<Record<Locale, string>>;
  title?: Partial<Record<Locale, string>>;
  body?: Partial<Record<Locale, string>>;
  media?: {
    imageUrl?: string;
    alt?: Partial<Record<Locale, string>>;
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
  items?: Array<{
    imageUrl?: string;
    alt?: Partial<Record<Locale, string>>;
    caption?: Partial<Record<Locale, string>>;
  }>;
};

type CmsPage = {
  _id: string;
  blocks?: CmsPageBlock[];
};

function localize(value: Partial<Record<Locale, string>> | undefined, locale: Locale, fallback: string) {
  return value?.[locale] ?? value?.fr ?? value?.en ?? fallback;
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
        methods: siteDataEnSeed.contact.methods.map((method) => ({ ...method })),
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
      methods: siteData.contact.methods.map((method) => ({ ...method })),
    },
  };
}

function fallbackTrips(locale: Locale): DestinationPreview[] {
  if (locale === "en") {
    return siteDataEnSeed.destinations.map((item) => ({ ...item })) as DestinationPreview[];
  }

  return siteData.destinations.map((item) => ({ ...item }));
}

function fallbackTestimonials(locale: Locale): Testimonial[] {
  if (locale === "en") {
    return siteDataEnSeed.testimonials.map((item) => ({ ...item })) as Testimonial[];
  }

  return siteData.testimonials.map((item) => ({ ...item }));
}

function fallbackGallery(locale: Locale): GalleryItem[] {
  if (locale === "en") {
    return siteDataEnSeed.gallery.items.map((item) => ({ ...item })) as GalleryItem[];
  }

  return siteData.gallery.items.map((item) => ({ ...item }));
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
      },
      about: {
        ...siteData.about,
        ...siteDataEnSeed.about,
        paragraphs: [...siteDataEnSeed.about.paragraphs],
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
      contact: {
        ...siteData.contact,
        ...siteDataEnSeed.contact,
        methods: siteDataEnSeed.contact.methods.map((method) => ({ ...method })),
        formInterests: [...siteDataEnSeed.contact.formInterests],
      },
    };
  }

  return {
    hero: siteData.hero,
    about: siteData.about,
    video: siteData.video,
    contact: siteData.contact,
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

async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params, getSanityFetchOptions(tags));
  } catch {
    return null;
  }
}

export async function getSiteShell(locale: Locale = defaultLocale) {
  const settings = await safeFetch<CmsSiteSettings>(siteSettingsQuery, { locale }, ["siteSettings", `siteSettings:${locale}`]);
  return mapSiteSettings(settings, locale) ?? fallbackShell(locale);
}

export async function getTrips(locale: Locale = defaultLocale): Promise<DestinationPreview[]> {
  const trips = await safeFetch<CmsTrip[]>(tripsQuery, { locale }, ["trips", `trips:${locale}`]);
  if (!trips?.length) {
    return fallbackTrips(locale);
  }

  const mapped = trips.map((trip) => mapTripPreview(trip, locale)).filter(Boolean) as DestinationPreview[];
  return mapped.length ? mapped : fallbackTrips(locale);
}

export async function getTripPage(slug: string, locale: Locale = defaultLocale): Promise<DestinationPageData | null> {
  const trip = await safeFetch<CmsTrip>(tripBySlugQuery, { slug, locale }, ["trip", `trip:${slug}`, `trip:${locale}:${slug}`]);
  return (trip && mapTripPage(trip, locale)) || destinationPages[slug as keyof typeof destinationPages] || null;
}

export async function getTestimonials(locale: Locale = defaultLocale): Promise<Testimonial[]> {
  const testimonials = await safeFetch<CmsTestimonial[]>(testimonialsQuery, { locale }, ["testimonials", `testimonials:${locale}`]);
  return testimonials?.length ? mapTestimonials(testimonials, locale) : fallbackTestimonials(locale);
}

export async function getGalleryItems(locale: Locale = defaultLocale): Promise<GalleryItem[]> {
  const items = await safeFetch<CmsGalleryItem[]>(galleryItemsQuery, { locale }, ["gallery", `gallery:${locale}`]);
  return items?.length ? mapGallery(items, locale) : fallbackGallery(locale);
}

export async function getHomePageContent(locale: Locale = defaultLocale): Promise<HomePageContent> {
  const fallback = fallbackHome(locale);
  const page = await safeFetch<CmsPage>(pageBySlugQuery, { slug: "home", locale }, ["page", "page:home", `page:home:${locale}`]);

  if (!page?.blocks?.length) {
    return fallback;
  }

  const heroBlock = getBlock(page, "heroBlock");
  const aboutBlock = getBlock(page, "introBlock");
  const videoBlock = getBlock(page, "videoBlock");
  const contactBlock = getBlock(page, "contactBlock");

  const aboutParagraphs = splitParagraphs(
    localize(aboutBlock?.body, locale, [fallback.about.intro, ...fallback.about.paragraphs].join("\n\n")),
    fallback.about.paragraphs,
  );

  const [aboutIntro, ...aboutRest] = aboutParagraphs;

  return {
    hero: {
      ...fallback.hero,
      eyebrow: localize(heroBlock?.eyebrow, locale, fallback.hero.eyebrow),
      title: localize(heroBlock?.title, locale, fallback.hero.title),
      subtitle: localize(heroBlock?.body, locale, fallback.hero.subtitle),
      image: heroBlock?.media?.imageUrl ?? fallback.hero.image,
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
              icon: (stat.icon ?? fallback.hero.stats[index]?.icon ?? "sparkles") as typeof fallback.hero.stats[number]["icon"],
            }))
          : fallback.hero.stats,
    },
    about: {
      ...fallback.about,
      eyebrow: localize(aboutBlock?.eyebrow, locale, fallback.about.eyebrow),
      title: localize(aboutBlock?.title, locale, fallback.about.title),
      intro: aboutIntro ?? fallback.about.intro,
      paragraphs: aboutRest.length ? aboutRest : fallback.about.paragraphs,
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
              title: localize(item.caption ?? item.alt, locale, fallback.video.videos[index]?.title ?? `Reel ${index + 1}`),
              poster: item.imageUrl ?? fallback.video.videos[index]?.poster ?? fallback.video.videos[0]?.poster ?? "/fsc-crew-1.jpg",
            }))
          : fallback.video.videos,
    },
    contact: {
      ...fallback.contact,
      title: localize(contactBlock?.title, locale, fallback.contact.title),
      description: localize(contactBlock?.body, locale, fallback.contact.description),
    },
  };
}
