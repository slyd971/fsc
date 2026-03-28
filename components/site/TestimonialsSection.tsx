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
    <section className="section-divider relative overflow-hidden py-12 md:py-18">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-3xl">
            <div className="editorial-kicker">Testimonials</div>
            <h2 className="section-title mt-4">Trusted by the crew.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="editorial-panel mt-8 p-6 md:mt-10 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] md:text-[11px]">
                Featured voice
              </div>
              <div className="flex gap-2">
                {siteData.testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-[2px] transition-all ${
                      activeIndex === index ? "w-10 bg-[var(--accent)]" : "w-3 bg-white/24"
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={siteData.testimonials[activeIndex].name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
              >
                <div>
                  <p className="text-[1.28rem] leading-[1.36] text-white md:text-[2.9rem]">
                    “{siteData.testimonials[activeIndex].quote}”
                  </p>
                </div>

                <div className="border-l border-white/14 pl-5 md:pl-7">
                  <div className="display-font text-3xl uppercase md:text-4xl">
                    {siteData.testimonials[activeIndex].name}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/48">
                    {siteData.testimonials[activeIndex].role}
                  </div>
                  <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
                  <p className="mt-6 max-w-sm text-sm leading-7 text-white/62 md:text-base">
                    Premium organization, warm community, and a smoother way to experience the road.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
