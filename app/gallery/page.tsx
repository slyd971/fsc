import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export default function GalleryPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="section-divider relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(216,194,163,0.12),transparent_18%)]" />
        <div className="section-shell relative">
          <Reveal>
            <div className="max-w-4xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                Gallery
              </div>
              <h1 className="display-font mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl md:text-8xl">
                {siteData.gallery.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                {siteData.gallery.heroDescription}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="section-shell">
          <GalleryGrid items={siteData.gallery.items} />
        </div>
      </section>
    </main>
  );
}
