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
  alt?: LocalizedString | string;
};

export type CmsCta = {
  label?: LocalizedString;
  href?: string;
  variant?: "primary" | "secondary";
};

export type CmsPricingOption = {
  name?: LocalizedString | string;
  priceLabel?: LocalizedString | string;
  pitch?: LocalizedString | string;
  included?: Array<LocalizedString | string>;
  excluded?: Array<LocalizedString | string>;
  featured?: boolean;
};

export type CmsTestimonial = {
  _id: string;
  name?: LocalizedString | string;
  role?: LocalizedString | string;
  quote?: LocalizedString | string;
  city?: LocalizedString | string;
  moment?: LocalizedString | string;
  accent?: LocalizedString | string;
};

export type CmsGalleryItem = {
  _id: string;
  title?: LocalizedString | string;
  tag?: {
    _id?: string;
    title?: LocalizedString | string;
    slug?: LocalizedSlug | string;
  };
  image?: CmsImage;
  alt?: LocalizedString | string;
  size?: "portrait" | "landscape" | "square";
};

export type CmsTrip = {
  _id: string;
  title?: LocalizedString | string;
  slug?: LocalizedSlug | string;
  city?: LocalizedString | string;
  eyebrow?: LocalizedString | string;
  description?: LocalizedString | string;
  heroDescription?: LocalizedString | string;
  heroImage?: CmsImage;
  image?: CmsImage;
  badge?: LocalizedString | string;
  introTitle?: LocalizedString | string;
  introParagraphs?: Array<LocalizedString | string>;
  experiences?: Array<{
    title?: LocalizedString | string;
    dateLabel?: LocalizedString | string;
    description?: LocalizedString | string;
    image?: CmsImage;
    includes?: Array<LocalizedString | string>;
  }>;
  pricingOptions?: CmsPricingOption[];
};

export type CmsSiteSettings = {
  _id: string;
  siteTitle?: LocalizedString | string;
  siteDescription?: LocalizedString | string;
  brandName?: LocalizedString | string;
  brandTagline?: LocalizedString | string;
  brandMark?: string;
  navigation?: Array<{
    label?: LocalizedString | string;
    href?: string;
  }>;
  contactMethods?: Array<{
    label?: LocalizedString | string;
    value?: LocalizedString | string;
    detail?: LocalizedString | string;
    href?: string;
    icon?: "instagram" | "message-circle" | "phone" | "mail";
  }>;
};