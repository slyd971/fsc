import { siteData, destinationPages, type DestinationPageData, type DestinationPreview, type GalleryItem, type Testimonial } from "@/data/site";
import { siteDataEnSeed } from "@/data/site-en-seed";
import type { Locale } from "@/lib/i18n";
import type { CmsGalleryItem, CmsSiteSettings, CmsTestimonial, CmsTrip, LocalizedString } from "@/sanity/lib/types";

function localize(value: LocalizedString | undefined, locale: Locale, fallback = ""): string {
  return value?.[locale] ?? value?.fr ?? value?.en ?? fallback;
}

function imageUrl(
  value: { imageUrl?: string; alt?: LocalizedString } | undefined,
  locale: Locale,
  fallbackImage: string,
  fallbackAlt: string,
) {
  return {
    image: value?.imageUrl ?? fallbackImage,
    alt: localize(value?.alt, locale, fallbackAlt),
  };
}

export function mapTripPreview(
  trip: CmsTrip,
  locale: Locale,
): DestinationPreview | null {
  const slug = trip.slug?.[locale]?.current ?? trip.slug?.fr?.current ?? trip.slug?.en?.current;

  if (!slug) {
    return null;
  }

  const media = imageUrl(trip.image, locale, "/fsc-crew-1.jpg", "Trip image");

  return {
    slug: slug as DestinationPreview["slug"],
    city: localize(trip.city, locale, "Destination"),
    title: localize(trip.title, locale, "Destination"),
    eyebrow: localize(trip.eyebrow, locale, ""),
    description: localize(trip.description, locale, ""),
    image: media.image,
    imageAlt: media.alt,
    badge: localize(trip.badge, locale, ""),
  };
}

export function mapTripPage(
  trip: CmsTrip,
  locale: Locale,
): DestinationPageData | null {
  const slug = trip.slug?.[locale]?.current ?? trip.slug?.fr?.current ?? trip.slug?.en?.current;
  if (!slug) {
    return null;
  }

  const hero = imageUrl(trip.heroImage ?? trip.image, locale, "/fsc-crew-1.jpg", "Trip hero image");

  return {
    slug: slug as DestinationPageData["slug"],
    title: localize(trip.title, locale, "Trip"),
    eyebrow: localize(trip.eyebrow, locale, ""),
    heroDescription: localize(trip.heroDescription ?? trip.description, locale, ""),
    heroImage: hero.image,
    introTitle: localize(trip.introTitle, locale, ""),
    introParagraphs: (trip.introParagraphs ?? []).map((item) => localize(item, locale)).filter(Boolean),
    experiences: (trip.experiences ?? []).map((item) => {
      const media = imageUrl(item.image, locale, "/fsc-crew-1.jpg", "Experience image");
      return {
        title: localize(item.title, locale, ""),
        date: localize(item.dateLabel, locale, ""),
        description: localize(item.description, locale, ""),
        image: media.image,
        includes: (item.includes ?? []).map((entry) => localize(entry, locale)).filter(Boolean),
      };
    }),
    packs: (trip.pricingOptions ?? []).map((option) => ({
      name: localize(option.name, locale, ""),
      price: localize(option.priceLabel, locale, ""),
      pitch: localize(option.pitch, locale, ""),
      included: (option.included ?? []).map((item) => localize(item, locale)).filter(Boolean),
      notIncluded: (option.excluded ?? []).map((item) => localize(item, locale)).filter(Boolean),
      featured: option.featured,
    })),
  };
}

export function mapTestimonials(items: CmsTestimonial[], locale: Locale): Testimonial[] {
  return items.map((item) => ({
    name: localize(item.name, locale, "Crew member"),
    role: localize(item.role, locale, ""),
    quote: localize(item.quote, locale, ""),
    city: localize(item.city, locale, ""),
    moment: localize(item.moment, locale, ""),
    accent: localize(item.accent, locale, ""),
  }));
}

export function mapGallery(items: CmsGalleryItem[], locale: Locale): GalleryItem[] {
  return items.map((item) => ({
    id: item._id,
    title: localize(item.title, locale, "Gallery item"),
    category: (localize(item.category, locale, "Parties") as GalleryItem["category"]),
    image: item.image?.imageUrl ?? "/fsc-crew-1.jpg",
    alt: localize(item.alt ?? item.image?.alt, locale, "Gallery image"),
    size: item.size ?? "landscape",
  }));
}

export function mapSiteSettings(
  settings: CmsSiteSettings | null,
  locale: Locale,
) {
  if (!settings) {
    return null;
  }

  const fallbackShell = locale === "en"
    ? {
        metadata: siteDataEnSeed.metadata,
        brand: siteDataEnSeed.brand,
      }
    : {
        metadata: siteData.metadata,
        brand: siteData.brand,
      };

  return {
    metadata: {
      title: localize(settings.siteTitle, locale, fallbackShell.metadata.title),
      description: localize(settings.siteDescription, locale, fallbackShell.metadata.description),
    },
    brand: {
      name: localize(settings.brandName, locale, fallbackShell.brand.name),
      tagline: localize(settings.brandTagline, locale, fallbackShell.brand.tagline),
      mark: settings.brandMark ?? fallbackShell.brand.mark,
    },
    navigation: {
      items: (settings.navigation ?? [])
        .map((item) => ({
          label: localize(item.label, locale),
          href: item.href ?? "/",
        }))
        .filter((item) => item.label),
    },
    contact: {
      methods: (settings.contactMethods ?? []).map((method) => ({
        label: localize(method.label, locale),
        value: localize(method.value, locale),
        detail: localize(method.detail, locale),
        href: method.href ?? "#",
        icon: method.icon ?? "mail",
      })),
    },
  };
}

export function getFallbackTripPage(slug: string): DestinationPageData | null {
  return destinationPages[slug as keyof typeof destinationPages] ?? null;
}

export function getFallbackTripPreview(slug: string): DestinationPreview | null {
  return siteData.destinations.find((item) => item.slug === slug) ?? null;
}
