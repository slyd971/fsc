"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function GalleryPreviewSection() {
  const previewImages = siteData.gallery.items.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % previewImages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [previewImages.length]);

  return (
    <section id="gallery-preview" className="gallery-section relative scroll-mt-24 overflow-hidden border-t border-white/12 px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,12,0.96),rgba(10,9,9,0.4))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,186,142,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(118,82,58,0.14),transparent_24%)]" />
      <div className="grain-overlay" />
      <div className="paper-texture" />
      <div className="section-shell">
        <Reveal>
          <div className="relative z-10 mb-7 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-end">
            <div>
              <div className="editorial-kicker mb-3 md:mb-4">Gallery</div>
              <h2 className="section-title">Crew moments</h2>
            </div>

            <Link href="/gallery" className="button-editorial button-editorial-secondary">
              Explore full gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="relative z-10 grid gap-5 lg:grid-cols-[1.28fr_0.72fr] lg:items-start">
          <Reveal>
            <div className="theme-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={previewImages[activeIndex].id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <img
                    src={previewImages[activeIndex].image}
                    alt={previewImages[activeIndex].alt}
                    className="h-[440px] w-full object-cover md:h-[620px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 md:inset-x-8 md:bottom-8">
                    <div>
                      <div className="editorial-kicker text-[10px] md:text-[11px]">
                        {previewImages[activeIndex].category}
                      </div>
                      <div className="mt-2 display-font text-3xl uppercase text-white md:text-5xl">
                        {previewImages[activeIndex].title}
                      </div>
                    </div>
                    <Link href="/gallery" className="button-editorial button-editorial-secondary !px-4 !py-3">
                      <ArrowUpRight className="h-4 w-4 text-white/85" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <div className="grid gap-3 pt-6 lg:-ml-8">
            {previewImages.map((image, index) => (
              <Reveal key={image.id} delay={0.04 * index}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center gap-3 border p-3 text-left transition md:p-4 ${
                    activeIndex === index
                      ? "theme-panel rounded-[1.5rem] border-[var(--accent)]/30 bg-[linear-gradient(180deg,rgba(214,185,139,0.16),rgba(255,255,255,0.03))]"
                      : "theme-panel rounded-[1.5rem] border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <img src={image.image} alt={image.alt} className="h-20 w-20 shrink-0 object-cover md:h-24 md:w-24" />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
                      {image.category}
                    </div>
                    <div className="mt-2 display-font text-xl uppercase leading-none md:text-2xl">
                      {image.title}
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-6 flex justify-center gap-2">
            {previewImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-[2px] transition-all ${
                  activeIndex === index ? "w-12 bg-[var(--accent)]" : "w-4 bg-white/28"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
