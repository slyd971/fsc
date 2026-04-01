import { groq } from "next-sanity";

const localizedField = (field: string) =>
  `coalesce(select($locale == "en" => ${field}.en, ${field}.fr), ${field}.fr, ${field}.en)`;

const localizedSlug = (field: string) =>
  `coalesce(select($locale == "en" => ${field}.en.current, ${field}.fr.current), ${field}.fr.current, ${field}.en.current)`;

// --------------------
// SITE SETTINGS
// --------------------
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

// --------------------
// TRIPS
// --------------------
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
      imageUrl,
      image{
        asset
      }
    },
    image{
      alt,
      imageUrl,
      image{
        asset
      }
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
      imageUrl,
      image{
        asset
      }
    },
    image{
      alt,
      imageUrl,
      image{
        asset
      }
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
        imageUrl,
        image{
          asset
        }
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

// --------------------
// TESTIMONIALS
// --------------------
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

// --------------------
// GALLERY
// --------------------
export const galleryItemsQuery = groq`
  *[_type == "galleryItem"] | order(_createdAt desc){
    _id,
    title,
    size,
    tag->{
      _id,
      title,
      slug
    },
    image{
      alt,
      imageUrl,
      image{
        asset
      }
    },
    alt
  }
`;

// --------------------
// PAGES
// --------------------
export const pageBySlugQuery = groq`
  *[_type == "page" && ${localizedSlug("slug")} == $slug][0]{
    _id,
    title,
    slug,
    seo,
    blocks[]{
      _type,
      _key,
      microLabel,
      backgroundWord,
      eyebrow,
      title,
      body,
      mediaNote,
      sideKicker,
      sideTitle,
      media{
        alt,
        imageUrl,
        image{
          asset
        }
      },
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
      stats[]{
        value,
        label,
        icon
      },
      chorusItems,
      items[]{
        _type == "reference" => @->{
          _id,
          _type,
          title,
          slug,
          city,
          eyebrow,
          description,
          badge,
          name,
          role,
          quote,
          moment,
          accent,
          tag->{
            _id,
            title,
            slug
          },
          alt,
          size,
          image{
            alt,
            imageUrl,
            image{
              asset
            }
          }
        },
        _type != "reference" => {
          ...,
          alt,
          imageUrl,
          caption,
          image{
            asset
          }
        }
      }
    }
  }
`;

export const pageByIdQuery = groq`
  *[_type == "page" && _id == $id][0]{
    _id,
    title,
    slug,
    seo,
    blocks[]{
      _type,
      _key,
      microLabel,
      backgroundWord,
      eyebrow,
      title,
      body,
      mediaNote,
      sideKicker,
      sideTitle,
      media{
        alt,
        imageUrl,
        image{
          asset
        }
      },
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
      stats[]{
        value,
        label,
        icon
      },
      chorusItems,
      items[]{
        _type == "reference" => @->{
          _id,
          _type,
          title,
          slug,
          city,
          eyebrow,
          description,
          badge,
          name,
          role,
          quote,
          moment,
          accent,
          tag->{
            _id,
            title,
            slug
          },
          alt,
          size,
          image{
            alt,
            imageUrl,
            image{
              asset
            }
          }
        },
        _type != "reference" => {
          ...,
          alt,
          imageUrl,
          caption,
          image{
            asset
          }
        }
      }
    }
  }
`;

export const localizedStringExpr = localizedField;