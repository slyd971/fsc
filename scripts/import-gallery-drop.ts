import fs from "node:fs";
import path from "node:path";
import {
  IMAGE_EXTENSIONS,
  getGalleryClient,
  slugify,
  syncGalleryAssets,
  syncGalleryFolders,
} from "./lib/gallerySync";

type ImportSummary = {
  copied: number;
  renamed: number;
  createdFolders: number;
};

function ensureDirectory(directory: string) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

function uniqueTargetPath(directory: string, baseName: string, extension: string) {
  let attempt = 0;

  while (true) {
    const suffix = attempt === 0 ? "" : `-${attempt + 1}`;
    const candidate = path.join(directory, `${baseName}${suffix}${extension}`);

    if (!fs.existsSync(candidate)) {
      return candidate;
    }

    attempt += 1;
  }
}

function collectImportFolders(importRoot: string) {
  if (!fs.existsSync(importRoot)) {
    return [];
  }

  return fs
    .readdirSync(importRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function importFolder(folderName: string, importRoot: string, galleryRoot: string): ImportSummary {
  const sourceDirectory = path.join(importRoot, folderName);
  const targetDirectory = path.join(galleryRoot, folderName);
  const hadTargetDirectory = fs.existsSync(targetDirectory);

  ensureDirectory(targetDirectory);

  const files = fs
    .readdirSync(sourceDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((filename) => IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  let copied = 0;
  let renamed = 0;

  files.forEach((filename) => {
    const extension = path.extname(filename).toLowerCase();
    const normalizedBaseName = slugify(path.basename(filename, path.extname(filename))) || "photo";
    const preferredTargetPath = path.join(targetDirectory, `${normalizedBaseName}${extension}`);
    const targetPath = uniqueTargetPath(targetDirectory, normalizedBaseName, extension);
    const sourcePath = path.join(sourceDirectory, filename);

    if (targetPath !== preferredTargetPath) {
      renamed += 1;
    }

    fs.copyFileSync(sourcePath, targetPath);
    copied += 1;
  });

  return {
    copied,
    renamed,
    createdFolders: hadTargetDirectory ? 0 : 1,
  };
}

async function run() {
  const importRoot = path.join(process.cwd(), "gallery-import");
  const galleryRoot = path.join(process.cwd(), "public", "Gallery");

  ensureDirectory(importRoot);
  ensureDirectory(galleryRoot);

  const folderNames = collectImportFolders(importRoot);

  if (!folderNames.length) {
    console.log("No import folders found in gallery-import.");
    console.log("Create folders like gallery-import/London or gallery-import/Rotterdam, then add photos inside.");
    return;
  }

  let copied = 0;
  let renamed = 0;
  let createdFolders = 0;

  folderNames.forEach((folderName) => {
    const summary = importFolder(folderName, importRoot, galleryRoot);
    copied += summary.copied;
    renamed += summary.renamed;
    createdFolders += summary.createdFolders;
  });

  const client = getGalleryClient();
  const folderSync = await syncGalleryFolders(client);
  const assetSync = await syncGalleryAssets(client);

  console.log(`Gallery import complete. Copied ${copied} photo(s), renamed ${renamed} conflicting file(s), created ${createdFolders} folder(s) in public/Gallery.`);
  console.log(folderSync.message);
  console.log(assetSync.message);
  console.log("Review the new gallery items in Sanity to adjust titles, alt text, captions, and display formats if needed.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
