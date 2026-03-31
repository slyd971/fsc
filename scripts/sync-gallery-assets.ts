import fs from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-03-30" });

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

type GalleryTagDoc = {
  _id: string;
  title?: { fr?: string; en?: string };
  slug?: { fr?: { current?: string }; en?: { current?: string } };
};

type GalleryItemDoc = {
  _id: string;
  tag?: { _ref?: string };
  image?: { imageUrl?: string };
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toTitleFromFilename(filename: string) {
  return filename
    .replace(path.extname(filename), "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function localizedString(value: string) {
  return {
    _type: "localizedString",
    fr: value,
    en: value,
  };
}

function localizedSlug(value: string) {
  return {
    _type: "localizedSlug",
    fr: { _type: "slug", current: value },
    en: { _type: "slug", current: value },
  };
}

function createTagDoc(folderName: string) {
  const slug = slugify(folderName);
  return {
    _id: `galleryTag.${slug}`,
    _type: "galleryTag",
    title: localizedString(folderName),
    slug: localizedSlug(slug),
    description: {
      _type: "localizedText",
      fr: `Sous-dossier galerie synchronisé depuis public/Gallery/${folderName}.`,
      en: `Gallery subfolder synced from public/Gallery/${folderName}.`,
    },
  };
}

function createGalleryItemDoc(folderName: string, filename: string, imageUrl: string) {
  const tagSlug = slugify(folderName);
  const fileSlug = slugify(filename.replace(path.extname(filename), ""));
  const title = toTitleFromFilename(filename);

  return {
    _id: `galleryItem.${tagSlug}-${fileSlug}`,
    _type: "galleryItem",
    title: localizedString(title),
    tag: {
      _type: "reference",
      _ref: `galleryTag.${tagSlug}`,
    },
    category: localizedString(folderName),
    image: {
      _type: "mediaItem",
      imageUrl,
      alt: localizedString(title),
      caption: localizedString(title),
    },
    size: "landscape",
  };
}

async function run() {
  const galleryRoot = path.join(process.cwd(), "public", "Gallery");

  if (!fs.existsSync(galleryRoot)) {
    console.log("No public/Gallery folder found. Nothing to sync.");
    return;
  }

  const folders = fs
    .readdirSync(galleryRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  if (!folders.length) {
    console.log("No gallery folders found in public/Gallery.");
    return;
  }

  const [existingTags, existingItems] = await Promise.all([
    client.fetch<GalleryTagDoc[]>(`*[_type == "galleryTag"]{_id,title,slug}`),
    client.fetch<GalleryItemDoc[]>(`*[_type == "galleryItem"]{_id,tag,image}`),
  ]);

  const tagIds = new Set(existingTags.map((tag) => tag._id));
  const itemById = new Map(existingItems.map((item) => [item._id, item]));
  const itemByImageUrl = new Map(
    existingItems
      .filter((item) => item.image?.imageUrl)
      .map((item) => [String(item.image?.imageUrl), item]),
  );

  let transaction = client.transaction();
  let createdTags = 0;
  let createdItems = 0;
  let linkedItems = 0;

  folders.forEach((folderName) => {
    const tagId = `galleryTag.${slugify(folderName)}`;

    if (!tagIds.has(tagId)) {
      transaction = transaction.createIfNotExists(createTagDoc(folderName));
      tagIds.add(tagId);
      createdTags += 1;
    }

    const folderPath = path.join(galleryRoot, folderName);
    const files = fs
      .readdirSync(folderPath, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((filename) => IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));

    files.forEach((filename) => {
      const imageUrl = `/Gallery/${folderName}/${filename}`;
      const fileSlug = slugify(filename.replace(path.extname(filename), ""));
      const itemId = `galleryItem.${slugify(folderName)}-${fileSlug}`;
      const existingById = itemById.get(itemId);
      const existingByImage = itemByImageUrl.get(imageUrl);
      const existing = existingById ?? existingByImage;

      if (!existing) {
        transaction = transaction.createIfNotExists(createGalleryItemDoc(folderName, filename, imageUrl));
        createdItems += 1;
        return;
      }

      if (!existing.tag?._ref) {
        transaction = transaction.patch(existing._id, {
          set: {
            tag: {
              _type: "reference",
              _ref: tagId,
            },
            category: localizedString(folderName),
          },
        });
        linkedItems += 1;
      }
    });
  });

  if (!createdTags && !createdItems && !linkedItems) {
    console.log("Gallery asset sync: nothing to create or update.");
    return;
  }

  await transaction.commit();
  console.log(
    `Gallery asset sync complete. Created ${createdTags} tag(s), created ${createdItems} gallery item(s), linked ${linkedItems} existing item(s).`,
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
