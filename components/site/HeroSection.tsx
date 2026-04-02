"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  GlassWater,
  Map,
  Sparkles,
  Sunrise,
} from "lucide-react";
import { siteData } from "@/data/site";
import { siteDataEnSeed } from "@/data/site-en-seed";
import type { Locale } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n";

const iconMap = {
  sparkles: Sparkles,
  map: Map,
  sunrise: Sunrise,
  glass: GlassWater,
} as const;

const heroChorusByLocale = {
  fr: [
    "Mouvement soca",
    "Émotion carnaval",
    "Énergie diaspora",
    "Roads premium",
  ],
  en: [
    "Soca movement",
    "Carnival emotion",
    "Diaspora energy",
    "Premium roads",
  ],
} as const;

function getHeroTitleLines(title: string) {
  const words = title.trim().split(/\s+/).filter(Boolean);

  if (words.length <= 1) {
    return [title];
  }

  return words;
}

export function HeroSection({
  locale = "fr",
  content,
}: {
  locale?: Locale;
  content?: typeof siteData.hero & { microLabel?: string; backgroundWord?: string; chorusItems?: string[] };
}) {
  const fallbackHero = (locale === "en" ? siteDataEnSeed.hero : siteData.hero) as typeof siteData.hero & {
    microLabel?: string;
    backgroundWord?: string;
    chorusItems?: string[];
  };
  const hero = content ?? fallbackHero;
  const reduceMotion = useReducedMotion();
  const heroChorus = hero.chorusItems?.length ? hero.chorusItems : heroChorusByLocale[locale];
  const associationLabel =
  typeof hero.microLabel === "string" ? hero.microLabel.trim() : "";
  const heroTitleLines = getHeroTitleLines(hero.title);
  const backgroundWord = hero.backgroundWord ?? "ROAD";

  return (
    <section className="hero-shell hero-luxury relative min-h-screen overflow-hidden bg-[var(--background)]">
      <div
        className="hero-image-drift absolute inset-0"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,214,167,0.26),transparent_22%),radial-gradient(circle_at_78%_18%,rgba(122,68,41,0.24),transparent_25%),linear-gradient(180deg,rgba(15,10,8,0.12),rgba(12,8,8,0.88)_88%)]" />
      <div className="hero-overlay-secondary absolute inset-0 bg-[linear-gradient(110deg,rgba(8,6,6,0.76)_0%,rgba(23,15,13,0.18)_42%,rgba(8,6,6,0.82)_100%)]" />
      <div className="ambient-shift absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,193,136,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(160,86,53,0.22),transparent_30%),linear-gradient(135deg,rgba(91,51,35,0.12),transparent_58%)]" />
      <div className="hero-bottom-fade absolute inset-x-0 bottom-0 h-[48vh] bg-gradient-to-t from-[var(--background)] via-black/72 to-transparent" />
      <div className="grain-overlay" />
      <div className="film-vignette" />
      <div className="paper-texture" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-between px-5 pt-28 pb-8 sm:px-8 sm:pt-30 lg:px-12 lg:pt-34 lg:pb-10">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.35 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="min-w-0">
            <div className="editorial-kicker text-white/72">{hero.eyebrow}</div>

            <motion.div
              className="relative mt-5"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-muted-soft pointer-events-none absolute -top-7 left-0 text-[0.62rem] uppercase tracking-[0.42em] sm:text-[0.7rem]">
                {associationLabel}
              </div>
              <h1 className="hero-artist-title theme-text-strong relative z-10 max-w-[10ch] text-[clamp(2.9rem,10.2vw,8.2rem)]">
                {heroTitleLines.map((line, index) => (
                  <span key={`${line}-${index}`} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <div className="pointer-events-none absolute -right-[3vw] top-[12%] hidden text-[clamp(4.5rem,11vw,9rem)] font-black uppercase tracking-[-0.08em] text-white/[0.08] xl:block">
                {backgroundWord}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative self-end lg:pb-6"
            initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-xl border-t border-[var(--line-strong)] pt-5">
              <p className="text-muted max-w-[28rem] text-[1.02rem] leading-7 md:text-[1.15rem] md:leading-8 lg:text-[1.3rem]">
                {hero.subtitle}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={withLocalePath(hero.primaryCta.href, locale)}
                className="button-editorial button-editorial-primary premium-sheen premium-hover-lift"
              >
                {hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={withLocalePath(hero.secondaryCta.href, locale)}
                className="button-editorial button-editorial-secondary premium-sheen"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="theme-border theme-panel-dark overflow-hidden rounded-full border px-4 py-3 backdrop-blur-sm">
            <motion.div
              className="text-muted-soft flex min-w-max gap-8 whitespace-nowrap text-[10px] uppercase tracking-[0.32em] sm:text-[11px]"
              initial={reduceMotion ? undefined : { x: 0 }}
              animate={reduceMotion ? undefined : { x: ["0%", "-20%"] }}
              transition={{ duration: 16, ease: "linear", repeat: Infinity }}
            >
              {[...heroChorus, ...heroChorus].map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-8">
                  <span>{item}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]/80" />
                </span>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-4">
            {hero.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={stat.label}
                  className="theme-border theme-surface-elevated rounded-[1rem] border px-3 py-3 backdrop-blur-md sm:rounded-[1.15rem] sm:px-3.5 sm:py-3.5"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, delay: 0.12 + index * 0.06 }}
                >
                  <div className="theme-border theme-panel-dark mb-2.5 flex h-7 w-7 items-center justify-center rounded-full border text-[var(--accent)] sm:mb-3 sm:h-8 sm:w-8">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div className="theme-text-strong text-[1.45rem] font-black tracking-[-0.08em] sm:text-[1.65rem]">
                    {stat.value}
                  </div>
                  <div className="text-muted-soft mt-1 text-[9px] uppercase tracking-[0.16em] sm:text-[10px] sm:tracking-[0.2em]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
