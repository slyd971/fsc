import type { Locale } from "@/lib/i18n";

export type LocalizedValue<T> = Partial<Record<Locale, T>>;

export type LocalizedString = LocalizedValue<string>;

export type LocalizedSlug = LocalizedValue<{ current: string }>;

export type CmsReference = {
  _ref: string;
  _type: "reference";
};

export type CmsImage = {
  asset?: CmsReference;
  image?: {
    asset?: CmsReference;
  };
  imageUrl?: string;
  alt?: LocalizedString;
};

export type CmsCta = {
  label?: LocalizedString;
  href?: string;
  variant?: "primary" | "secondary";
};

export type CmsPricingOption = {
  name?: LocalizedString;
  priceLabel?: LocalizedString;
  pitch?: LocalizedString;
  included?: LocalizedString[];
  excluded?: LocalizedString[];
  featured?: boolean;
};

export type CmsTestimonial = {
  _id: string;
  name?: LocalizedString;
  role?: LocalizedString;
  quote?: LocalizedString;
  city?: LocalizedString;
  moment?: LocalizedString;
  accent?: LocalizedString;
};

export type CmsGalleryItem = {
  _id: string;
  title?: LocalizedString;
  tag?: {
    _id?: string;
    title?: LocalizedString;
    slug?: LocalizedSlug;
  };
  image?: CmsImage;
  alt?: LocalizedString;
  size?: "portrait" | "landscape" | "square";
};

export type CmsTrip = {
  _id: string;
  title?: LocalizedString;
  slug?: LocalizedSlug;
  city?: LocalizedString;
  eyebrow?: LocalizedString;
  description?: LocalizedString;
  heroDescription?: LocalizedString;
  heroImage?: CmsImage;
  image?: CmsImage;
  badge?: LocalizedString;
  introTitle?: LocalizedString;
  introParagraphs?: LocalizedString[];
  experiences?: Array<{
    title?: LocalizedString;
    dateLabel?: LocalizedString;
    description?: LocalizedString;
    image?: CmsImage;
    includes?: LocalizedString[];
  }>;
  pricingOptions?: CmsPricingOption[];
};

export type CmsSiteSettings = {
  _id: string;
  siteTitle?: LocalizedString;
  siteDescription?: LocalizedString;
  brandName?: LocalizedString;
  brandTagline?: LocalizedString;
  brandMark?: string;
  navigation?: Array<{
    label?: LocalizedString;
    href?: string;
  }>;
  contactMethods?: Array<{
    label?: LocalizedString;
    value?: LocalizedString;
    detail?: LocalizedString;
    href?: string;
    icon?: "instagram" | "message-circle" | "phone" | "mail";
  }>;
};