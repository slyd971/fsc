"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { siteData, type Testimonial } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

export function TestimonialsSection({
  items = siteData.testimonials,
  locale = "fr",
}: {
  items?: Testimonial[];
  locale?: Locale;
}) {
  const copy = getUiCopy(locale).testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items.length) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, [items]);

  const activeTestimonial = items[activeIndex] ?? items[0];

  if (!activeTestimonial) {
    return null;
  }

  return (
    <section className="theme-border relative overflow-hidden border-t px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="theme-section-testimonials-bg absolute inset-0" />
      <div className="theme-section-testimonials-overlay absolute inset-0" />
      <div className="grain-overlay" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <div>
              <div className="editorial-kicker">{copy.kicker}</div>
              <h2 className="section-title mt-4 max-w-[11ch] text-[clamp(1.7rem,6.6vw,4rem)] leading-[0.88]">
                <span className="block whitespace-nowrap">{copy.titleLine1}</span>
                <span className="block whitespace-nowrap">{copy.titleLine2}</span>
              </h2>
            </div>
            <p className="text-muted max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
              {copy.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.62fr_1.38fr] lg:gap-8">
            <div className="grid gap-3">
              {items.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group overflow-hidden rounded-[1.5rem] border p-3.5 text-left transition sm:rounded-[1.8rem] sm:p-5 ${
                    activeIndex === index
                      ? "border-[var(--accent)]/28 bg-white/[0.07]"
                      : "theme-border theme-panel-soft"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-muted-soft text-[10px] uppercase tracking-[0.28em]">
                        0{index + 1}
                      </div>
                      <div className="display-font theme-text-strong mt-2 text-[1.05rem] uppercase leading-none sm:text-[1.4rem]">
                        {testimonial.name}
                      </div>
                    </div>
                    <div className="text-right text-[8px] uppercase tracking-[0.18em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.24em]">
                      {testimonial.city}
                    </div>
                  </div>
                  <div className="text-muted-soft mt-3 flex flex-wrap items-center gap-2.5 text-[9px] uppercase tracking-[0.18em] sm:mt-4 sm:gap-3 sm:text-[10px] sm:tracking-[0.24em]">
                    <span>{testimonial.role}</span>
                    <span className="h-px w-6 bg-[var(--line-strong)]" />
                    <span>{testimonial.moment}</span>
                  </div>
                  <p className="text-muted mt-3 max-w-[34ch] text-xs leading-5 sm:mt-4 sm:text-sm sm:leading-6">
                    {testimonial.accent}
                  </p>
                </button>
              ))}
            </div>

            <div className="theme-border theme-surface-elevated relative overflow-hidden rounded-[2rem] border p-4 sm:rounded-[2.4rem] sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute right-4 top-0 text-[clamp(4rem,10vw,8rem)] font-black uppercase tracking-[-0.08em] text-white/[0.05]">
                FSC
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(214,185,139,0.16),transparent_68%)] blur-2xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.38 }}
                  className="relative z-10"
                >
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.3em]">
                      {copy.voice}
                    </div>
                    <div className="h-px w-8 bg-[var(--line-strong)] sm:w-12" />
                    <div className="text-muted-soft text-[9px] uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.26em]">
                      {activeTestimonial.city}
                    </div>
                  </div>

                  <p className="display-font theme-text-strong mt-5 max-w-[18ch] text-[clamp(1.2rem,5.8vw,3rem)] uppercase leading-[0.94] sm:mt-6 sm:max-w-[21ch]">
                    “{activeTestimonial.quote}”
                  </p>

                  <div className="theme-border mt-6 grid gap-3 border-t pt-5 sm:mt-8 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-4 sm:pt-6">
                    <div>
                      <div className="display-font text-[1.15rem] uppercase leading-none text-[var(--accent)] sm:text-[1.8rem]">
                        {activeTestimonial.name}
                      </div>
                      <div className="text-muted-soft mt-1.5 text-[9px] uppercase tracking-[0.18em] sm:mt-2 sm:text-[11px] sm:tracking-[0.22em]">
                        {activeTestimonial.role}
                      </div>
                    </div>
                    <div className="theme-border theme-panel-dark text-muted rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.24em]">
                      {activeTestimonial.moment}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
