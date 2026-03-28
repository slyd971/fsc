import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { Pack } from "@/data/site";

type PricingComparisonProps = {
  packs: Pack[];
};

export function PricingComparison({ packs }: PricingComparisonProps) {
  return (
    <section className="relative py-16 md:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-3xl">
            <div className="editorial-kicker">
              Book now
            </div>
            <h2 className="section-title mt-4">
              Choose your pack.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 xl:grid-cols-4">
          {packs.map((pack, index) => (
            <Reveal key={pack.name} delay={0.06 * index}>
              <div
                className={`editorial-panel h-full p-6 ${
                  pack.featured
                    ? "border-[var(--accent)]/45 bg-[linear-gradient(180deg,rgba(216,194,163,0.14),rgba(255,255,255,0.04))]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/46">
                  {pack.featured ? "Most balanced" : "Pack option"}
                </div>
                <div className="display-font mt-3 text-4xl uppercase">{pack.name}</div>
                <div className="mt-3 text-2xl font-semibold text-[var(--accent)]">{pack.price}</div>
                <p className="mt-4 text-sm leading-7 text-white/66">{pack.pitch}</p>
                <div className="mt-6 space-y-3">
                  {pack.included.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-white/74">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-white/10 pt-5">
                  {pack.notIncluded.map((item) => (
                    <div key={item} className="mb-3 flex items-start gap-3 text-sm text-white/44 last:mb-0">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/#contact"
                  className={`button-editorial mt-8 ${
                    pack.featured
                      ? "button-editorial-primary"
                      : "button-editorial-secondary"
                  }`}
                >
                  Choose this pack
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
