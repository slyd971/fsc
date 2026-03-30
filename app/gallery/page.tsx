import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";
import { getGalleryItems } from "@/lib/site-content";
import { getUiCopy } from "@/lib/ui-copy";

export default async function GalleryPage() {
  const items = await getGalleryItems("fr");
  const copy = getUiCopy("fr").galleryPage;

  return (
    <main className="pt-28 md:pt-36">
      <section className="section-divider relative overflow-hidden py-16 md:py-24">
        <div className="theme-page-glow absolute inset-0" />
        <div className="section-shell relative">
          <Reveal>
            <div className="max-w-4xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                {copy.kicker}
              </div>
              <h1 className="display-font mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl md:text-8xl">
                {siteData.gallery.heroTitle}
              </h1>
              <p className="text-muted mt-5 max-w-2xl text-sm leading-7 md:text-base">
                {siteData.gallery.heroDescription}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="section-shell">
          <GalleryGrid items={items} />
        </div>
      </section>
    </main>
  );
}
