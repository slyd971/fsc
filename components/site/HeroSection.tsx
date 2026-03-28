import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "@/data/site";

export function HeroSection() {
  const { hero } = siteData;

  return (
    <>
      <section className="relative overflow-hidden pt-24 md:min-h-[100svh] md:pt-28">
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.34)), url(${hero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_50%_20%,rgba(216,194,163,0.10),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.1),transparent_22%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 top-[36%] hidden md:block bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.32))]" />
        <div className="absolute inset-0 hidden md:block opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />

        <div className="section-shell relative flex min-h-[calc(100svh-6rem)] items-center justify-center pb-8 md:pb-16">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <div className="mb-6 w-full md:hidden">
              <div className="media-cut aspect-square overflow-hidden border border-white/10 bg-[#0b0b0d] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="editorial-panel w-full max-w-3xl px-5 py-8 md:px-10 md:py-12">
              <div className="editorial-kicker mx-auto mb-4 w-fit md:mb-5">
                Carnival travel and culture
              </div>
              <h1 className="section-title hero-display max-w-3xl text-white">
                {hero.title}
              </h1>

              <p className="hero-copy mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/88 md:mt-6 md:text-lg md:leading-7">
                {hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:mt-8 md:gap-3">
                <Link
                  href={hero.primaryCta.href}
                  className="button-editorial button-editorial-primary"
                >
                  {hero.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="button-editorial button-editorial-secondary"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="editorial-panel mt-8 px-4 py-3 md:mt-10 md:px-6 md:py-4">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--accent)] md:text-[11px] md:tracking-[0.28em]">
                {hero.imageBadge}
              </div>
              <div className="display-font hero-copy mt-2 text-[1.3rem] uppercase leading-[0.92] md:text-[2rem]">
                {hero.imageCaption}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-8 pt-3 md:px-6 md:pb-12 md:pt-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-center md:mb-6">
            <div className="h-px w-10 bg-[linear-gradient(90deg,transparent,var(--accent))] md:w-16" />
            <div className="px-4 text-[10px] uppercase tracking-[0.34em] text-white/36 md:text-[11px]">
              Crew figures
            </div>
            <div className="h-px w-10 bg-[linear-gradient(90deg,var(--accent),transparent)] md:w-16" />
          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            {hero.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="editorial-panel relative overflow-hidden px-4 py-4 text-center md:px-8 md:py-7"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,139,0.1),transparent_42%)]" />
                <div className="absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
                <div className="relative">
                  <div className="mb-2 text-[9px] uppercase tracking-[0.24em] text-white/26 md:mb-4 md:text-[10px] md:tracking-[0.3em]">
                    0{index + 1}
                  </div>
                  <div className="display-font text-[1.7rem] uppercase leading-none text-[var(--accent)] md:text-[2.95rem]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/54 md:mt-3 md:text-[11px] md:tracking-[0.28em]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
