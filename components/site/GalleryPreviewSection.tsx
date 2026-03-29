"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
    }, 3600);

    return () => window.clearInterval(interval);
  }, [previewImages.length]);

  const activeImage = previewImages[activeIndex];

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

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]">
            <div className="grid lg:grid-cols-[1.28fr_0.72fr]">
              <div className="relative min-h-[28rem] sm:min-h-[38rem] lg:min-h-[46rem]">
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
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84))]" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-5 top-5 flex items-start justify-between sm:inset-x-7 sm:top-7">
                  <div className="rounded-full border border-white/10 bg-black/28 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/54 backdrop-blur-sm">
                    Archive select
                  </div>
                  <div className="hidden text-[10px] uppercase tracking-[0.34em] text-white/34 sm:block">
                    0{activeIndex + 1}
                  </div>
                </div>

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <div className="max-w-3xl">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] sm:text-[11px]">
                      {activeImage.category}
                    </div>
                    <div className="display-font mt-3 max-w-[10ch] text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[0.88] text-white">
                      {activeImage.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 p-5 sm:p-6 lg:border-t-0 lg:border-l">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/46">
                    Mood note
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/72">
                    The archive should feel like afterglow, movement and proof that every trip becomes a shared cultural memory.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {previewImages.map((image, index) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group overflow-hidden rounded-[1.4rem] border text-left transition ${
                        activeIndex === index
                          ? "border-[var(--accent)]/35 bg-white/[0.04]"
                          : "border-white/10 bg-white/[0.02]"
                      }`}
                    >
                      <img
                        src={image.image}
                        alt={image.alt}
                        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="p-3">
                        <div className="text-[9px] uppercase tracking-[0.24em] text-[var(--accent)]">
                          {image.category}
                        </div>
                        <div className="display-font mt-2 text-[1.05rem] uppercase leading-none text-white">
                          {image.title}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {previewImages.map((image, index) => (
                      <button
                        key={image.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-[2px] transition-all ${
                          activeIndex === index ? "w-10 bg-[var(--accent)]" : "w-4 bg-white/24"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveIndex((current) => (current - 1 + previewImages.length) % previewImages.length)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/72 transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                      aria-label="Previous gallery image"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveIndex((current) => (current + 1) % previewImages.length)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/72 transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                      aria-label="Next gallery image"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
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
