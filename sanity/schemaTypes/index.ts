import type { SchemaTypeDefinition } from "sanity";

import page from "./documents/page";
import destination from "./documents/destination";
import trip from "./documents/trip";
import event from "./documents/event";
import testimonial from "./documents/testimonial";
import galleryItem from "./documents/galleryItem";
import galleryTag from "./documents/galleryTag";
import siteSettings from "./documents/siteSettings";
import cta from "./objects/cta";
import localizedSlug from "./objects/localizedSlug";
import localizedString from "./objects/localizedString";
import localizedText from "./objects/localizedText";
import mediaItem from "./objects/mediaItem";
import pricingOption from "./objects/pricingOption";
import seo from "./objects/seo";
import socialLink from "./objects/socialLink";
import statItem from "./objects/statItem";
import contactBlock from "./blocks/contactBlock";
import destinationsBlock from "./blocks/destinationsBlock";
import galleryBlock from "./blocks/galleryBlock";
import heroBlock from "./blocks/heroBlock";
import introBlock from "./blocks/introBlock";
import pricingBlock from "./blocks/pricingBlock";
import testimonialsBlock from "./blocks/testimonialsBlock";
import videoBlock from "./blocks/videoBlock";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    destination,
    trip,
    event,
    testimonial,
    galleryTag,
    galleryItem,
    siteSettings,
    cta,
    localizedSlug,
    localizedString,
    localizedText,
    mediaItem,
    pricingOption,
    seo,
    socialLink,
    statItem,
    heroBlock,
    introBlock,
    destinationsBlock,
    galleryBlock,
    videoBlock,
    testimonialsBlock,
    pricingBlock,
    contactBlock,
  ],
};
