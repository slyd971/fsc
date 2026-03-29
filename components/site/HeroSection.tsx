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

const iconMap = {
  sparkles: Sparkles,
  map: Map,
  sunrise: Sunrise,
  glass: GlassWater,
} as const;

const heroChorus = [
  "Soca movement",
  "Carnival emotion",
  "Diaspora energy",
  "Premium roads",
] as const;

export function HeroSection() {
  const { hero } = siteData;
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-shell hero-luxury relative min-h-screen overflow-hidden bg-[#0d0907]">
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
      <div className="hero-bottom-fade absolute inset-x-0 bottom-0 h-[48vh] bg-gradient-to-t from-[#070707] via-black/72 to-transparent" />
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
              <div className="pointer-events-none absolute -top-7 left-0 text-[0.62rem] uppercase tracking-[0.42em] text-white/34 sm:text-[0.7rem]">
                French association
              </div>
              <h1 className="hero-artist-title relative z-10 max-w-[10ch] text-[clamp(2.9rem,10.2vw,8.2rem)] text-white">
                FRENCH
                <br />
                SOCA
                <br />
                CREW
              </h1>
              <div className="pointer-events-none absolute -right-[3vw] top-[12%] hidden text-[clamp(4.5rem,11vw,9rem)] font-black uppercase tracking-[-0.08em] text-white/[0.06] xl:block">
                ROAD
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative self-end lg:pb-6"
            initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-xl border-t border-white/18 pt-5">
              <p className="max-w-[28rem] text-[1.02rem] leading-7 text-white/78 md:text-[1.15rem] md:leading-8 lg:text-[1.3rem]">
                {hero.subtitle}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={hero.primaryCta.href}
                className="button-editorial button-editorial-primary premium-sheen premium-hover-lift"
              >
                {hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="button-editorial button-editorial-secondary premium-sheen"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="overflow-hidden rounded-full border border-white/10 bg-black/24 px-4 py-3 backdrop-blur-sm">
            <motion.div
              className="flex min-w-max gap-8 whitespace-nowrap text-[10px] uppercase tracking-[0.32em] text-white/58 sm:text-[11px]"
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

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-4">
            {hero.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-3 py-4 backdrop-blur-md"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, delay: 0.12 + index * 0.06 }}
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-black/25 text-[var(--accent)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-[1.8rem] font-black tracking-[-0.08em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/58">
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
