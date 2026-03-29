"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "@/data/site";

export function HeroSection() {
  const { hero } = siteData;
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="hero-shell hero-luxury relative min-h-screen overflow-hidden bg-[#0d0907]">
        <div
          className="hero-image-drift absolute inset-0"
          style={{
            backgroundImage: `url(${hero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="hero-overlay-primary absolute inset-0 bg-[linear-gradient(180deg,rgba(22,14,10,0.18)_0%,rgba(20,14,12,0.28)_32%,rgba(10,8,8,0.8)_100%)]" />
        <div className="hero-overlay-secondary absolute inset-0 bg-[linear-gradient(90deg,rgba(16,10,8,0.5)_0%,rgba(30,22,18,0.08)_42%,rgba(14,10,10,0.42)_100%)]" />
        <div className="ambient-shift absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,199,153,0.24),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(167,104,72,0.2),transparent_30%),linear-gradient(135deg,rgba(95,63,40,0.16),transparent_55%)]" />
        <div className="hero-bottom-fade absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-t from-black via-black/55 to-transparent" />
        <div className="grain-overlay" />
        <div className="film-vignette" />
        <div className="paper-texture" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-18 sm:px-8 sm:pt-24 lg:px-16">
          <div className="flex min-h-[100svh] items-end pb-[4.5rem] sm:min-h-screen sm:items-end sm:pt-0 sm:pb-20 lg:pb-24">
            <div className="w-full max-w-5xl">
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.35 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative max-w-5xl"
                initial={reduceMotion ? undefined : { opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="hero-artist-title relative z-10 max-w-5xl text-white">
                  FRENCH
                  <br />
                  SOCA CREW
                </h1>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-8">
                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.82, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="hero-copy max-w-xl text-base leading-relaxed font-light text-white md:text-xl lg:text-2xl">
                    {hero.subtitle}
                  </p>
                  <motion.div
                    className="mt-6 flex flex-wrap gap-2.5 md:mt-8 md:gap-3"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.78, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  >
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
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
