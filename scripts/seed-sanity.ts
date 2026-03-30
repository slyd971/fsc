import { getCliClient } from "sanity/cli";
import { siteData, destinationPages } from "../data/site";
import { siteDataEnSeed, destinationPagesEnSeed } from "../data/site-en-seed";

type LocalizedString = { _type?: string; fr: string; en: string };

const client = getCliClient({ apiVersion: "2026-03-30" });

const ls = (fr: string, en: string): LocalizedString => ({ _type: "localizedString", fr, en });
const lt = (fr: string, en: string) => ({ _type: "localizedText", fr, en });
const lslug = (fr: string, en: string) => ({
  _type: "localizedSlug",
  fr: { _type: "slug", current: fr },
  en: { _type: "slug", current: en },
});
const media = (frAlt: string, enAlt: string, imageUrl: string) => ({
  _type: "mediaItem",
  imageUrl,
  alt: ls(frAlt, enAlt),
});
const ref = (_ref: string) => ({ _type: "reference", _ref });

async function seed() {
  const docs: any[] = [];

  docs.push({
    _id: "siteSettings.main",
    _type: "siteSettings",
    siteTitle: ls(siteData.metadata.title, siteDataEnSeed.metadata.title),
    siteDescription: lt(siteData.metadata.description, siteDataEnSeed.metadata.description),
    brandName: ls(siteData.brand.name, siteDataEnSeed.brand.name),
    brandTagline: lt(siteData.brand.tagline, siteDataEnSeed.brand.tagline),
    brandMark: siteData.brand.mark,
    navigation: siteData.navigation.items.map((item, index) => ({
      _key: `nav-${index}`,
      _type: "object",
      label: ls(item.label, siteDataEnSeed.navigation.items[index]?.label ?? item.label),
      href: item.href,
    })),
    contactMethods: siteData.contact.methods.map((method, index) => ({
      _key: `contact-${index}`,
      _type: "object",
      label: ls(method.label, siteDataEnSeed.contact.methods[index]?.label ?? method.label),
      value: ls(method.value, siteDataEnSeed.contact.methods[index]?.value ?? method.value),
      detail: ls(method.detail, siteDataEnSeed.contact.methods[index]?.detail ?? method.detail),
      href: method.href,
      icon: method.icon,
    })),
  });

  siteData.testimonials.forEach((item, index) => {
    const en = siteDataEnSeed.testimonials[index];
    docs.push({
      _id: `testimonial.${index + 1}`,
      _type: "testimonial",
      featured: index === 0,
      name: ls(item.name, en.name),
      role: ls(item.role, en.role),
      quote: lt(item.quote, en.quote),
      city: ls(item.city, en.city),
      moment: ls(item.moment, en.moment),
      accent: ls(item.accent, en.accent),
    });
  });

  siteData.gallery.items.forEach((item, index) => {
    const en = siteDataEnSeed.gallery.items[index];
    docs.push({
      _id: `galleryItem.${item.id}`,
      _type: "galleryItem",
      title: ls(item.title, en.title),
      category: ls(item.category, en.category),
      image: media(item.alt, en.alt, item.image),
      size: item.size,
    });
  });

  siteData.destinations.forEach((item, index) => {
    const en = siteDataEnSeed.destinations[index];
    const frPage = destinationPages[item.slug];
    const enPage = destinationPagesEnSeed[item.slug as keyof typeof destinationPagesEnSeed];

    docs.push({
      _id: `trip.${item.slug}`,
      _type: "trip",
      title: ls(item.title, en.title),
      slug: lslug(item.slug, item.slug),
      city: ls(item.city, en.city),
      eyebrow: ls(item.eyebrow, en.eyebrow),
      description: lt(item.description, en.description),
      heroDescription: lt(frPage.heroDescription, enPage.heroDescription),
      image: media(item.imageAlt, en.imageAlt, item.image),
      heroImage: media(frPage.title, enPage.title, frPage.heroImage),
      badge: ls(item.badge, en.badge),
      introTitle: ls(frPage.introTitle, enPage.introTitle),
      introParagraphs: frPage.introParagraphs.map((paragraph, paragraphIndex) =>
        lt(paragraph, enPage.introParagraphs[paragraphIndex] ?? paragraph),
      ),
      experiences: frPage.experiences.map((experience, experienceIndex) => {
        const enExperience = enPage.experiences[experienceIndex];
        return {
          _key: `${item.slug}-experience-${experienceIndex}`,
          _type: "object",
          title: ls(experience.title, enExperience.title),
          dateLabel: ls(experience.date, enExperience.date),
          description: lt(experience.description, enExperience.description),
          image: media(experience.title, enExperience.title, experience.image),
          includes: experience.includes.map((entry, includeIndex) =>
            ls(entry, enExperience.includes[includeIndex] ?? entry),
          ),
        };
      }),
      pricingOptions: frPage.packs.map((pack, packIndex) => {
        const enPack = enPage.packs[packIndex];
        return {
          _key: `${item.slug}-pack-${packIndex}`,
          _type: "pricingOption",
          name: ls(pack.name, enPack.name),
          priceLabel: ls(pack.price, enPack.price),
          pitch: lt(pack.pitch, enPack.pitch),
          included: pack.included.map((entry, includeIndex) =>
            ls(entry, enPack.included[includeIndex] ?? entry),
          ),
          excluded: pack.notIncluded.map((entry, excludeIndex) =>
            ls(entry, enPack.notIncluded[excludeIndex] ?? entry),
          ),
          featured: pack.featured ?? false,
        };
      }),
    });
  });

  docs.push({
    _id: "page.home",
    _type: "page",
    title: ls("Accueil", "Home"),
    slug: lslug("home", "home"),
    blocks: [
      {
        _key: "hero",
        _type: "heroBlock",
        eyebrow: ls(siteData.hero.eyebrow, siteDataEnSeed.hero.eyebrow),
        title: ls(siteData.hero.title, siteDataEnSeed.hero.title),
        body: lt(siteData.hero.subtitle, siteDataEnSeed.hero.subtitle),
        media: media(siteData.hero.imageAlt, siteDataEnSeed.hero.imageAlt, siteData.hero.image),
        primaryCta: {
          _type: "cta",
          label: ls(siteData.hero.primaryCta.label, siteDataEnSeed.hero.primaryCta.label),
          href: siteData.hero.primaryCta.href,
          variant: "primary",
        },
        secondaryCta: {
          _type: "cta",
          label: ls(siteData.hero.secondaryCta.label, siteDataEnSeed.hero.secondaryCta.label),
          href: siteData.hero.secondaryCta.href,
          variant: "secondary",
        },
        stats: siteData.hero.stats.map((stat, index) => ({
          _key: `hero-stat-${index}`,
          _type: "statItem",
          value: stat.value,
          label: ls(stat.label, siteDataEnSeed.hero.stats[index]?.label ?? stat.label),
          icon: stat.icon,
        })),
      },
      {
        _key: "about",
        _type: "introBlock",
        eyebrow: ls(siteData.about.eyebrow, siteDataEnSeed.about.eyebrow),
        title: ls(siteData.about.title, siteDataEnSeed.about.title),
        body: lt([siteData.about.intro, ...siteData.about.paragraphs].join("\n\n"), [siteDataEnSeed.about.intro, ...siteDataEnSeed.about.paragraphs].join("\n\n")),
      },
      {
        _key: "video",
        _type: "videoBlock",
        eyebrow: ls(siteData.video.eyebrow, siteDataEnSeed.video.eyebrow),
        title: ls(siteData.video.title, siteDataEnSeed.video.title),
        body: lt(siteData.video.description, siteDataEnSeed.video.description),
        items: siteData.video.videos.map((video, index) => ({
          _key: `video-${index}`,
          _type: "mediaItem",
          imageUrl: video.poster,
          alt: ls(video.title, siteDataEnSeed.video.videos[index]?.title ?? video.title),
          caption: ls(video.title, siteDataEnSeed.video.videos[index]?.title ?? video.title),
        })),
        cta: {
          _type: "cta",
          label: ls(siteData.video.cta.label, siteDataEnSeed.video.cta.label),
          href: siteData.video.cta.href,
          variant: "primary",
        },
      },
      {
        _key: "destinations",
        _type: "destinationsBlock",
        eyebrow: ls("Trips à la une", "Featured trips"),
        title: ls("Choisis ta road.", "Choose your road."),
        body: lt(
          "Chaque destination doit donner l'impression d'entrer dans une ambiance complète : la ville, le crew, la bande-son, la pression de la parade, l'appel de l'après-nuit et cette sensation que toute la road t'attend.",
          "Each destination should feel like stepping into a full mood: the city, the crew, the soundtrack, the parade pressure, the after-dark pull and the feeling that the whole road is waiting.",
        ),
        items: siteData.destinations.map((item) => ref(`trip.${item.slug}`)),
        cta: {
          _type: "cta",
          label: ls("Entrer dans cet univers", "Enter this world"),
          href: "/trips",
          variant: "secondary",
        },
      },
      {
        _key: "gallery",
        _type: "galleryBlock",
        eyebrow: ls("Galerie", "Gallery"),
        title: ls("Mémoire en mouvement.", "Memory in motion."),
        body: lt(siteData.gallery.heroDescription, siteDataEnSeed.gallery.heroDescription),
        items: siteData.gallery.items.slice(0, 6).map((item) => ref(`galleryItem.${item.id}`)),
        cta: {
          _type: "cta",
          label: ls("Explorer la galerie complète", "Explore full gallery"),
          href: "/gallery",
          variant: "secondary",
        },
      },
      {
        _key: "testimonials",
        _type: "testimonialsBlock",
        eyebrow: ls("Voix du crew", "Crew voices"),
        title: ls("Échos de la road.", "Echoes from the road."),
        body: lt(
          "La confiance fonctionne mieux quand elle paraît vécue. Ce ne sont pas des avis trop polis, mais des fragments de ce que l'on ressent vraiment sur la road quand on a bougé avec le crew.",
          "Trust lands best when it feels lived in. These are not polished reviews, but fragments of what the road actually feels like once people have moved with the crew.",
        ),
        items: siteData.testimonials.map((_, index) => ref(`testimonial.${index + 1}`)),
      },
      {
        _key: "contact",
        _type: "contactBlock",
        eyebrow: ls("Dernier appel", "Final call"),
        title: ls(siteData.contact.title, siteDataEnSeed.contact.title),
        body: lt(siteData.contact.description, siteDataEnSeed.contact.description),
        primaryCta: {
          _type: "cta",
          label: ls("Réserver sur WhatsApp", "Book on WhatsApp"),
          href: siteData.contact.methods.find((method) => method.label === "WhatsApp")?.href ?? "/#contact",
          variant: "primary",
        },
        secondaryCta: {
          _type: "cta",
          label: ls("Voir les roads", "See the roads"),
          href: "/trips",
          variant: "secondary",
        },
      },
    ],
  });

  docs.push({
    _id: "page.gallery",
    _type: "page",
    title: ls("Galerie", "Gallery"),
    slug: lslug("gallery", "gallery"),
    blocks: [
      {
        _key: "gallery-intro",
        _type: "introBlock",
        eyebrow: ls("Galerie", "Gallery"),
        title: ls(siteData.gallery.heroTitle, siteDataEnSeed.gallery.heroTitle),
        body: lt(siteData.gallery.heroDescription, siteDataEnSeed.gallery.heroDescription),
      },
      {
        _key: "gallery-grid",
        _type: "galleryBlock",
        eyebrow: ls("Archive", "Archive"),
        title: ls("Moments choisis", "Selected moments"),
        body: lt(siteData.gallery.heroDescription, siteDataEnSeed.gallery.heroDescription),
        items: siteData.gallery.items.map((item) => ref(`galleryItem.${item.id}`)),
      },
    ],
  });

  docs.push({
    _id: "page.trips",
    _type: "page",
    title: ls("Trips", "Trips"),
    slug: lslug("trips", "trips"),
    blocks: [
      {
        _key: "trips-intro",
        _type: "introBlock",
        eyebrow: ls(siteData.tripsPage.eyebrow, siteDataEnSeed.tripsPage.eyebrow),
        title: ls(siteData.tripsPage.title, siteDataEnSeed.tripsPage.title),
        body: lt(siteData.tripsPage.description, siteDataEnSeed.tripsPage.description),
      },
      {
        _key: "trips-list",
        _type: "destinationsBlock",
        eyebrow: ls("Destinations", "Destinations"),
        title: ls(siteData.tripsPage.title, siteDataEnSeed.tripsPage.title),
        body: lt(siteData.tripsPage.description, siteDataEnSeed.tripsPage.description),
        items: siteData.destinations.map((item) => ref(`trip.${item.slug}`)),
      },
    ],
  });

  let tx = client.transaction();
  docs.forEach((doc) => {
    tx = tx.createOrReplace(doc);
  });

  await tx.commit();
  console.log(`Seeded ${docs.length} documents into Sanity.`);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
