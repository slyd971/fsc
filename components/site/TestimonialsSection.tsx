"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % siteData.testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-white/10 px-4 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-22">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#090909_0%,#120d0c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(232,186,133,0.12),transparent_21%),radial-gradient(circle_at_80%_84%,rgba(144,80,50,0.16),transparent_22%)]" />
      <div className="grain-overlay" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="editorial-kicker">Testimonials</div>
              <h2 className="section-title mt-4 max-w-[8ch] text-[clamp(1.9rem,4.2vw,3.3rem)]">
                Voices from the road.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-white/60 md:text-base md:leading-7">
              Social proof should feel like lived experience. These quotes are here to amplify the atmosphere, the trust and the feeling of moving with a real crew.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.68fr_1.32fr] lg:gap-10">
            <div className="flex flex-col gap-2">
              {siteData.testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`text-left transition ${
                    activeIndex === index ? "opacity-100" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <div className="border-t border-white/10 py-3.5">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/36">
                      0{index + 1}
                    </div>
                    <div className="display-font mt-2.5 text-[1.35rem] uppercase leading-none text-white md:text-[1.5rem]">
                      {testimonial.name}
                    </div>
                    <div className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] md:text-[11px]">
                      {testimonial.role}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 sm:p-6 lg:p-7">
              <div className="pointer-events-none absolute -top-1 right-4 text-[clamp(3.2rem,8vw,5.5rem)] font-black tracking-[-0.08em] text-white/[0.05]">
                FSC
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={siteData.testimonials[activeIndex].name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.38 }}
                  className="relative z-10"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Featured voice
                  </div>
                  <p className="display-font mt-4 max-w-[28ch] text-[clamp(1.2rem,2.2vw,2.1rem)] uppercase leading-[0.96] text-white">
                    {siteData.testimonials[activeIndex].quote}
                  </p>
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <div>
                      <div className="display-font text-[1.5rem] uppercase leading-none text-[var(--accent)] md:text-[1.7rem]">
                        {siteData.testimonials[activeIndex].name}
                      </div>
                      <div className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-white/46 md:text-[11px]">
                        {siteData.testimonials[activeIndex].role}
                      </div>
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
