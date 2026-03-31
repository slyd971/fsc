import fs from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-03-30" });

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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

async function run() {
  const galleryRoot = path.join(process.cwd(), "public", "Gallery");

  if (!fs.existsSync(galleryRoot)) {
    console.log("No public/Gallery folder found. Nothing to sync.");
    return;
  }

  const folderNames = fs
    .readdirSync(galleryRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  if (!folderNames.length) {
    console.log("No gallery subfolders found in public/Gallery.");
    return;
  }

  const existingTags = await client.fetch<Array<{ _id: string; title?: { fr?: string; en?: string } }>>(
    `*[_type == "galleryTag"]{_id, title}`,
  );

  const existingKeys = new Set(
    existingTags.flatMap((tag) =>
      [tag._id, tag.title?.fr, tag.title?.en]
        .filter(Boolean)
        .map((value) => String(value).toLowerCase()),
    ),
  );

  let transaction = client.transaction();
  let created = 0;

  folderNames.forEach((folderName) => {
    const slug = slugify(folderName);
    const id = `galleryTag.${slug}`;

    if (
      existingKeys.has(id.toLowerCase()) ||
      existingKeys.has(folderName.toLowerCase()) ||
      existingKeys.has(slug.toLowerCase())
    ) {
      return;
    }

    transaction = transaction.createIfNotExists({
      _id: id,
      _type: "galleryTag",
      title: localizedString(folderName),
      slug: localizedSlug(slug),
      description: {
        _type: "localizedText",
        fr: `Sous-dossier galerie synchronisé depuis public/Gallery/${folderName}.`,
        en: `Gallery subfolder synced from public/Gallery/${folderName}.`,
      },
    });
    created += 1;
  });

  if (!created) {
    console.log("Gallery folder sync: no new subfolders to create in Sanity.");
    return;
  }

  await transaction.commit();
  console.log(`Gallery folder sync complete. Created ${created} new gallery subfolder(s) in Sanity.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
