"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";
import { siteDataEnSeed } from "@/data/site-en-seed";
import type { Locale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

function getSectionTitleLines(title: string) {
  const words = title.trim().split(/\s+/).filter(Boolean);

  if (words.length <= 1) {
    return [title];
  }

  return [words.slice(0, -1).join(" "), words.slice(-1)[0]];
}

export function VideoSection({
  locale = "fr",
  content,
}: {
  locale?: Locale;
  content?: typeof siteData.video;
}) {
  const video = content ?? (locale === "en" ? siteDataEnSeed.video : siteData.video);
  const copy = getUiCopy(locale).video;
  const titleLines = getSectionTitleLines(video.title);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % video.videos.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [video.videos.length]);

  const activeVideo = video.videos[activeIndex];

  return (
    <section className="theme-border press-section section-video relative overflow-hidden border-t px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="theme-section-video-bg absolute inset-0" />
      <div className="theme-section-video-overlay absolute inset-0" />
      <div className="grain-overlay" />
      <div className="paper-texture opacity-60" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="max-w-md">
              <div className="editorial-kicker">{video.eyebrow}</div>
              <h2 className="section-title mt-4 max-w-[9ch] text-[clamp(1.85rem,7.2vw,4.8rem)] leading-[0.88]">
                {titleLines.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="text-muted max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                {video.description}
              </p>
              <Link
                href={video.cta.href}
                className="button-editorial button-editorial-primary premium-sheen premium-hover-lift"
              >
                {video.cta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.18fr_0.82fr] lg:gap-5">
            <div className="theme-border theme-panel-soft relative overflow-hidden rounded-[2.1rem] border p-2.5 sm:rounded-[2.6rem] sm:p-4">
              <div className="theme-border theme-panel-dark text-muted absolute left-4 top-4 z-20 rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.24em] backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.28em]">
                {copy.featured}
              </div>

              <div className="media-cut relative min-h-[22rem] overflow-hidden rounded-[1.7rem] sm:min-h-[36rem] sm:rounded-[2.1rem] lg:min-h-[42rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVideo.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeVideo.poster}
                      alt={activeVideo.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.75))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(255,255,255,0.14),transparent_22%)]" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-4 bottom-4 z-20 sm:inset-x-7 sm:bottom-7">
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="max-w-2xl">
                      <div className="text-[9px] uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.32em]">
                        Reel 0{activeIndex + 1}
                      </div>
                      <div className="display-font theme-text-strong mt-2.5 max-w-[9ch] text-[clamp(1.9rem,8vw,4.8rem)] uppercase leading-[0.88]">
                        {activeVideo.title}
                      </div>
                      <p className="text-muted mt-3 max-w-[32ch] text-xs leading-5 sm:text-base sm:leading-7">
                        {copy.activeDescription}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveIndex((current) => (current + 1) % video.videos.length)}
                      className="premium-chip flex h-14 w-14 items-center justify-center rounded-full text-[var(--accent)] sm:h-20 sm:w-20"
                      aria-label={copy.playNext}
                    >
                      <Play className="ml-0.5 h-5 w-5 sm:ml-1 sm:h-8 sm:w-8" fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
              {video.videos.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative overflow-hidden rounded-[1.6rem] border p-2.5 text-left transition sm:rounded-[2rem] sm:p-3 ${
                      isActive
                        ? "border-[var(--accent)]/30 bg-white/[0.06]"
                        : "theme-border theme-panel-soft"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-[1.5rem]">
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="h-32 w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-40 lg:h-48"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.76))]" />
                      <div className="text-muted-soft absolute left-3 top-3 text-[9px] uppercase tracking-[0.22em] sm:left-4 sm:top-4 sm:text-[10px] sm:tracking-[0.28em]">
                        0{index + 1}
                      </div>
                      <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-black/35 text-white/80 backdrop-blur-sm sm:bottom-4 sm:right-4 sm:h-10 sm:w-10">
                        <Play className="ml-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" />
                      </div>
                    </div>
                    <div className="px-1 pb-1 pt-3 sm:pt-4">
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.24em]">
                        {copy.reel}
                      </div>
                      <div className="display-font theme-text-strong mt-1.5 text-[0.98rem] uppercase leading-none sm:mt-2 sm:text-[1.15rem]">
                        {item.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
