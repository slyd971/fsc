import { getGalleryClient, syncGalleryFolders } from "./lib/gallerySync";

async function run() {
  const result = await syncGalleryFolders(getGalleryClient());
  console.log(result.message);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
