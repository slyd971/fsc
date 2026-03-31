import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-03-30" });

type LocalizedString = {
  _type?: string;
  fr?: string;
  en?: string;
};

type LocalizedSlug = {
  fr?: { current?: string };
  en?: { current?: string };
};

type GalleryTagDoc = {
  _id: string;
  title?: LocalizedString;
  slug?: LocalizedSlug;
};

type GalleryItemDoc = {
  _id: string;
  title?: LocalizedString;
  category?: LocalizedString;
  tag?: {
    _ref?: string;
  };
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function localizedString(fr: string, en: string) {
  return {
    _type: "localizedString",
    fr,
    en,
  };
}

function localizedSlug(fr: string, en: string) {
  return {
    _type: "localizedSlug",
    fr: { _type: "slug", current: fr },
    en: { _type: "slug", current: en },
  };
}

function normalizeCategory(category: LocalizedString | undefined) {
  const fr = category?.fr?.trim();
  const en = category?.en?.trim();

  if (!fr && !en) {
    return null;
  }

  return {
    fr: fr || en || "Galerie",
    en: en || fr || "Gallery",
  };
}

function buildTagLookup(tags: GalleryTagDoc[]) {
  const lookup = new Map<string, string>();

  tags.forEach((tag) => {
    const keys = [
      tag._id,
      tag.title?.fr,
      tag.title?.en,
      tag.slug?.fr?.current,
      tag.slug?.en?.current,
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());

    keys.forEach((key) => lookup.set(key, tag._id));
  });

  return lookup;
}

async function run() {
  const [galleryItems, galleryTags] = await Promise.all([
    client.fetch<GalleryItemDoc[]>(`*[_type == "galleryItem"]{_id, title, category, tag}`),
    client.fetch<GalleryTagDoc[]>(`*[_type == "galleryTag"]{_id, title, slug}`),
  ]);

  const tagLookup = buildTagLookup(galleryTags);
  const categories = new Map<string, { fr: string; en: string }>();

  galleryItems.forEach((item) => {
    const normalized = normalizeCategory(item.category);
    if (!normalized) return;

    const key = slugify(normalized.fr);
    categories.set(key, normalized);
  });

  let transaction = client.transaction();
  let createdCount = 0;
  let linkedCount = 0;

  categories.forEach((category, key) => {
    const existingId =
      tagLookup.get(category.fr.toLowerCase()) ||
      tagLookup.get(category.en.toLowerCase()) ||
      tagLookup.get(key);

    if (existingId) {
      tagLookup.set(key, existingId);
      return;
    }

    const tagId = `galleryTag.${key}`;
    transaction = transaction.createIfNotExists({
      _id: tagId,
      _type: "galleryTag",
      title: localizedString(category.fr, category.en),
      slug: localizedSlug(slugify(category.fr), slugify(category.en)),
      description: {
        _type: "localizedText",
        fr: `Dossier galerie pour les contenus liés à ${category.fr}.`,
        en: `Gallery folder for content related to ${category.en}.`,
      },
    });

    tagLookup.set(key, tagId);
    tagLookup.set(category.fr.toLowerCase(), tagId);
    tagLookup.set(category.en.toLowerCase(), tagId);
    createdCount += 1;
  });

  galleryItems.forEach((item) => {
    if (item.tag?._ref) {
      return;
    }

    const normalized = normalizeCategory(item.category);
    if (!normalized) {
      return;
    }

    const tagId =
      tagLookup.get(normalized.fr.toLowerCase()) ||
      tagLookup.get(normalized.en.toLowerCase()) ||
      tagLookup.get(slugify(normalized.fr));

    if (!tagId) {
      return;
    }

    transaction = transaction.patch(item._id, {
      set: {
        tag: {
          _type: "reference",
          _ref: tagId,
        },
      },
    });
    linkedCount += 1;
  });

  if (createdCount === 0 && linkedCount === 0) {
    console.log("Gallery tag migration: nothing to do.");
    return;
  }

  await transaction.commit();
  console.log(`Gallery tag migration complete. Created ${createdCount} tag(s), linked ${linkedCount} gallery item(s).`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
