"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function GalleryPreviewSection() {
  const previewImages = siteData.gallery.items.filter((item) =>
    ["carnival-1", "rotterdam-1", "crew-1", "party-1"].includes(item.id)
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % previewImages.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [previewImages.length]);

  const activeImage = previewImages[activeIndex];
  const sideImages = previewImages.filter((_, index) => index !== activeIndex).slice(0, 3);

  return (
    <section id="gallery-preview" className="theme-border relative overflow-hidden border-t px-4 py-14 sm:px-8 sm:py-22 lg:px-12 lg:py-28">
      <div className="theme-section-gallery-bg absolute inset-0" />
      <div className="theme-section-gallery-overlay absolute inset-0" />
      <div className="grain-overlay" />
      <div className="paper-texture opacity-70" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="editorial-kicker">Gallery</div>
              <h2 className="section-title mt-4 max-w-[10ch] text-[clamp(1.85rem,7.2vw,4.5rem)] leading-[0.88]">
                <span className="block whitespace-nowrap">Memory in</span>
                <span className="block whitespace-nowrap">motion.</span>
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="text-muted max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                The archive should feel curated, not simply shown. Fragments of road energy, city warmth, costume rhythm and late-night proof that the crew experience lives beyond the trip itself.
              </p>
              <Link href="/gallery" className="button-editorial button-editorial-secondary premium-sheen">
                Explore full gallery
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:gap-5">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="editorial-panel overflow-hidden p-4 sm:p-6">
                <div className="text-[9px] uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.3em]">
                  Living archive
                </div>
                <p className="text-muted mt-3 max-w-sm text-xs leading-6 sm:mt-4 sm:text-sm sm:leading-7">
                  Some frames carry the city. Some carry the people. Some hold the exact feeling that makes a crew want to run it back.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {sideImages.slice(0, 2).map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setActiveIndex(previewImages.findIndex((item) => item.id === image.id))}
                    className={`group overflow-hidden rounded-[1.45rem] border text-left transition sm:rounded-[1.8rem] ${
                      activeImage.id === image.id
                        ? "border-[var(--accent)]/30 bg-white/[0.06]"
                        : "theme-border theme-panel-soft"
                    } ${index === 1 ? "translate-y-2 sm:translate-y-6" : ""}`}
                  >
                    <img
                      src={image.image}
                      alt={image.alt}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="p-2.5 sm:p-3">
                      <div className="text-[8px] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[9px] sm:tracking-[0.24em]">
                        {image.category}
                      </div>
                      <div className="display-font theme-text-strong mt-1.5 text-[0.9rem] uppercase leading-none sm:mt-2 sm:text-[1rem]">
                        {image.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {sideImages[2] ? (
                <button
                  type="button"
                  onClick={() => setActiveIndex(previewImages.findIndex((item) => item.id === sideImages[2].id))}
                  className="theme-border theme-panel-soft group overflow-hidden rounded-[1.7rem] border text-left sm:rounded-[2rem]"
                >
                  <div className="grid grid-cols-[0.9fr_1.1fr] items-stretch">
                    <img
                      src={sideImages[2].image}
                      alt={sideImages[2].alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="flex flex-col justify-between p-3.5 sm:p-4">
                      <div>
                        <div className="text-[8px] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[9px] sm:tracking-[0.24em]">
                          {sideImages[2].category}
                        </div>
                        <div className="display-font theme-text-strong mt-1.5 text-[0.98rem] uppercase leading-none sm:mt-2 sm:text-[1.1rem]">
                          {sideImages[2].title}
                        </div>
                      </div>
                      <div className="text-muted-soft text-[9px] uppercase tracking-[0.18em] sm:text-[10px] sm:tracking-[0.22em]">
                        Crew fragment
                      </div>
                    </div>
                  </div>
                </button>
              ) : null}
            </div>

            <div className="theme-border theme-panel-soft relative overflow-hidden rounded-[2rem] border p-2.5 sm:rounded-[2.6rem] sm:p-4">
              <div className="theme-border theme-panel-dark text-muted absolute left-4 top-4 z-20 rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.24em] backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.28em]">
                Featured frame
              </div>

              <div className="media-cut relative min-h-[24rem] overflow-hidden rounded-[1.7rem] sm:min-h-[38rem] sm:rounded-[2.1rem] lg:min-h-[46rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeImage.image}
                      alt={activeImage.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.86))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(255,255,255,0.14),transparent_20%)]" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-4 bottom-4 z-20 sm:inset-x-7 sm:bottom-7">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.3em]">
                        {activeImage.category}
                      </div>
                    <div className="h-px w-8 bg-[var(--line-strong)] sm:w-12" />
                    <div className="text-muted-soft text-[9px] uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.28em]">
                        0{activeIndex + 1} / 0{previewImages.length}
                      </div>
                    </div>
                    <div className="display-font theme-text-strong mt-3 max-w-[8ch] text-[clamp(2rem,8.5vw,5rem)] uppercase leading-[0.88] sm:mt-4 sm:max-w-[9ch]">
                      {activeImage.title}
                    </div>
                    <p className="text-muted mt-3 max-w-[30ch] text-xs leading-5 sm:mt-4 sm:max-w-xl sm:text-base sm:leading-7">
                      A living memory from the road, held with enough atmosphere to make the destination feel desirable all over again.
                    </p>
                  </div>
                </div>

                <div className="theme-border theme-panel-dark absolute right-5 top-20 z-20 hidden w-44 rounded-[1.5rem] border p-4 backdrop-blur-md lg:block">
                  <div className="text-muted-soft text-[9px] uppercase tracking-[0.24em]">
                    Atmosphere
                  </div>
                  <div className="display-font theme-text-strong mt-3 text-[1.2rem] uppercase leading-none">
                    Warm cities. Night pull. Shared recall.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
