"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function GalleryPreviewSection() {
  const previewImages = siteData.gallery.items.filter((item) =>
    ["trip-1", "carnival-1", "rotterdam-1", "party-1"].includes(item.id)
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % previewImages.length);
    }, 3400);

    return () => window.clearInterval(interval);
  }, [previewImages.length]);

  return (
    <section id="gallery-preview" className="relative overflow-hidden border-t border-white/10 px-4 py-16 sm:px-8 sm:py-22 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#120d0d_0%,#090909_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(232,186,133,0.14),transparent_22%),radial-gradient(circle_at_16%_78%,rgba(124,73,49,0.16),transparent_22%)]" />
      <div className="grain-overlay" />
      <div className="paper-texture" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="editorial-kicker">Gallery</div>
              <h2 className="section-title mt-4 max-w-[8ch] text-[clamp(2.1rem,5vw,4rem)]">
                Living memories.
              </h2>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-7 text-white/62 md:text-lg md:leading-8">
                This is not just documentation. It is proof of pace, warmth, late energy, city arrivals, costume color and the kind of group feeling people want to come back for.
              </p>
              <Link href="/gallery" className="button-editorial button-editorial-secondary premium-sheen">
                Explore full gallery
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {previewImages.map((image, index) => (
              <Reveal key={image.id} delay={0.04 * index}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-[1.7rem] border text-left transition ${
                    activeIndex === index
                      ? "border-[var(--accent)]/30"
                      : "border-white/10"
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.alt}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.76))]" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-[var(--accent)]">
                      {image.category}
                    </div>
                    <div className="display-font mt-2 text-2xl uppercase leading-none text-white">
                      {image.title}
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={previewImages[activeIndex].id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative min-h-[32rem] sm:min-h-[40rem] lg:min-h-[46rem]"
                >
                  <img
                    src={previewImages[activeIndex].image}
                    alt={previewImages[activeIndex].alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.86))]" />
                  <div className="absolute inset-x-5 top-5 flex items-start justify-between sm:inset-x-7 sm:top-7">
                    <div className="rounded-full border border-white/10 bg-black/28 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/54 backdrop-blur-sm">
                      Archive select
                    </div>
                    <div className="hidden text-[10px] uppercase tracking-[0.34em] text-white/34 sm:block">
                      0{activeIndex + 1}
                    </div>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                    <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] sm:text-[11px]">
                          {previewImages[activeIndex].category}
                        </div>
                        <div className="display-font mt-3 max-w-[8ch] text-[clamp(2.4rem,5.8vw,4.8rem)] uppercase leading-[0.88] text-white">
                          {previewImages[activeIndex].title}
                        </div>
                      </div>

                      <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-5 backdrop-blur-md">
                        <div className="text-[10px] uppercase tracking-[0.28em] text-white/46">
                          Mood note
                        </div>
                        <p className="mt-3 text-sm leading-7 text-white/72">
                          The archive should feel like afterglow, movement and proof that every trip becomes a shared cultural memory.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
