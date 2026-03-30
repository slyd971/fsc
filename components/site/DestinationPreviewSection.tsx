import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function DestinationPreviewSection() {
  return (
    <section className="theme-border section-music relative overflow-hidden border-t px-4 py-16 sm:px-8 sm:py-22 lg:px-12 lg:py-28" id="trips">
      <div className="theme-section-trips-bg absolute inset-0" />
      <div className="theme-section-trips-overlay absolute inset-0" />
      <div className="grain-overlay" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="editorial-kicker">Featured trips</div>
              <h2 className="section-title mt-4 max-w-[10ch] text-[clamp(1.9rem,6.4vw,4rem)] leading-[0.9]">
                <span className="block whitespace-nowrap">Choose your</span>
                <span className="block whitespace-nowrap">road.</span>
              </h2>
            </div>
            <p className="text-muted max-w-2xl text-base leading-7 md:text-lg md:leading-8">
              Each destination should feel like stepping into a full mood: the city, the crew, the soundtrack, the parade pressure, the after-dark pull and the feeling that the whole road is waiting.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-14">
          {siteData.destinations.map((destination, index) => (
            <Reveal key={destination.slug} delay={0.06 * index}>
              <article className="theme-border theme-panel-dark group relative min-h-[34rem] overflow-hidden rounded-[2.4rem] border lg:min-h-[44rem]">
                <img
                  src={destination.image}
                  alt={destination.imageAlt}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                    destination.slug === "rotterdam-carnival"
                      ? "brightness-[0.92] contrast-[1.12] saturate-[1.08] sepia-[0.08]"
                      : ""
                  }`}
                />
                <div className="theme-media-overlay-wide absolute inset-0" />
                <div className="theme-media-overlay-deep absolute inset-0" />

                <div className="relative z-10 flex min-h-[34rem] flex-col justify-between p-5 sm:p-7 lg:min-h-[44rem] lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent)] sm:text-[11px]">
                      {destination.badge}
                    </div>
                    <div className="text-muted-soft hidden text-[11px] uppercase tracking-[0.34em] lg:block">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                    <div className="min-w-0">
                      <div className="text-muted-soft text-[11px] uppercase tracking-[0.3em]">
                        {destination.city}
                      </div>
                      <h3 className="display-font theme-text-strong mt-4 max-w-[8ch] text-[clamp(2.5rem,7vw,5.6rem)] uppercase leading-[0.88]">
                        {destination.title}
                      </h3>
                    </div>

                    <div className="theme-border theme-surface-elevated justify-self-end rounded-[1.7rem] border p-5 backdrop-blur-md sm:p-6 lg:max-w-[24rem]">
                      <div className="text-muted-soft text-[10px] uppercase tracking-[0.28em]">
                        {destination.eyebrow}
                      </div>
                      <p className="text-muted mt-4 text-sm leading-7 md:text-base">
                        {destination.description}
                      </p>
                      <div className="mt-6">
                        <Link
                          href={`/${destination.slug}`}
                          className="button-editorial button-editorial-secondary premium-sheen"
                        >
                          Enter this world
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
