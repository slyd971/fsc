import { getGalleryClient, syncGalleryAssets } from "./lib/gallerySync";

async function run() {
  const result = await syncGalleryAssets(getGalleryClient());
  console.log(result.message);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
