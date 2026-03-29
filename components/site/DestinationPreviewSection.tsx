import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function DestinationPreviewSection() {
  return (
    <section className="press-section section-music relative overflow-hidden border-t border-white/12 px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24" id="trips">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.96),rgba(10,9,9,0.38))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,180,138,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(120,78,52,0.16),transparent_28%)]" />
      <div className="grain-overlay" />
      <div className="section-shell">
        <Reveal>
          <div className="relative z-10 max-w-2xl">
            <div className="editorial-kicker">Featured trips</div>
            <h2 className="section-title mt-4 max-w-[8ch] text-[clamp(1.8rem,4vw,3.2rem)]">
              Upcoming roads
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10">
          {siteData.destinations.map((destination, index) => (
            <Reveal key={destination.slug} delay={0.08 * index}>
              <article
                className={`group relative z-10 grid gap-6 lg:grid-cols-12 lg:items-end ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="theme-panel premium-hover-lift premium-sheen surface-glow relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] lg:col-span-7 lg:min-h-[640px] lg:aspect-auto">
                  <img
                    src={destination.image}
                    alt={destination.imageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.76))]" />
                </div>

                <div className={`relative lg:col-span-5 ${index % 2 === 0 ? "lg:-ml-14 xl:-ml-20" : "lg:-mr-14 xl:-mr-20"}`}>
                  <div className="theme-overlay-panel premium-hover-lift premium-float rounded-[1.75rem] border border-white/12 bg-black/30 px-6 py-8 backdrop-blur-md md:px-8 md:py-10">
                    <div className="editorial-kicker mb-4">{destination.badge}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
                      {destination.eyebrow}
                    </div>
                    <h3 className="display-font mt-3 max-w-[9ch] text-[clamp(2.1rem,4.2vw,3.7rem)] uppercase leading-[0.92]">
                      {destination.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/72 md:text-base">
                      {destination.description}
                    </p>
                    <div className="mt-6">
                      <Link href={`/${destination.slug}`} className="button-editorial button-editorial-secondary premium-sheen">
                        Open destination
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
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
