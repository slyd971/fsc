import { groq } from "next-sanity";

const localizedField = (field: string) => `coalesce(${field}[$locale], ${field}.fr, ${field}.en)`;
const localizedSlug = (field: string) =>
  `coalesce(${field}[$locale].current, ${field}.fr.current, ${field}.en.current)`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    _id,
    siteTitle,
    siteDescription,
    brandName,
    brandTagline,
    brandMark,
    navigation[]{
      label,
      href
    },
    contactMethods[]{
      label,
      value,
      detail,
      href,
      icon
    }
  }
`;

export const tripsQuery = groq`
  *[_type == "trip"] | order(orderRank asc, _createdAt desc){
    _id,
    title,
    slug,
    city,
    eyebrow,
    description,
    heroDescription,
    heroImage{
      alt,
      imageUrl
    },
    image{
      alt,
      imageUrl
    },
    badge
  }
`;

export const tripBySlugQuery = groq`
  *[_type == "trip" && ${localizedSlug("slug")} == $slug][0]{
    _id,
    title,
    slug,
    city,
    eyebrow,
    description,
    heroDescription,
    heroImage{
      alt,
      imageUrl
    },
    image{
      alt,
      imageUrl
    },
    badge,
    introTitle,
    introParagraphs,
    experiences[]{
      title,
      dateLabel,
      description,
      image{
        alt,
        imageUrl
      },
      includes
    },
    pricingOptions[]{
      name,
      priceLabel,
      pitch,
      included,
      excluded,
      featured
    }
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(featured desc, _createdAt desc){
    _id,
    name,
    role,
    quote,
    city,
    moment,
    accent
  }
`;

export const galleryItemsQuery = groq`
  *[_type == "galleryItem"] | order(_createdAt desc){
    _id,
    title,
    category,
    image{
      alt,
      imageUrl
    },
    alt,
    size
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && ${localizedSlug("slug")} == $slug][0]{
    _id,
    title,
    slug,
    seo,
    blocks[]{
      ...,
      cta{
        label,
        href,
        variant
      },
      primaryCta{
        label,
        href,
        variant
      },
      secondaryCta{
        label,
        href,
        variant
      },
      items[]{
        ...,
        destination->{
          _id,
          title,
          slug,
          city,
          eyebrow,
          description,
          badge,
          image{
            alt,
            imageUrl
          }
        },
        testimonial->{
          _id,
          name,
          role,
          quote,
          city,
          moment,
          accent
        },
        trip->{
          _id,
          title,
          slug,
          city,
          eyebrow,
          description,
          badge,
          image{
            alt,
            imageUrl
          }
        }
      }
    }
  }
`;

export const localizedStringExpr = localizedField;
