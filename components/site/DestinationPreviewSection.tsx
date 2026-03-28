import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function DestinationPreviewSection() {
  return (
    <section className="section-divider relative overflow-hidden py-12 md:py-18" id="trips">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <div className="editorial-kicker">Featured trips</div>
            <h2 className="display-font mt-4 max-w-[8ch] text-[clamp(2.6rem,5vw,4.8rem)] uppercase leading-[0.92]">
              Featured roads
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10">
          {siteData.destinations.map((destination, index) => (
            <Reveal key={destination.slug} delay={0.08 * index}>
              <article
                className={`group relative grid gap-6 lg:grid-cols-12 lg:items-end ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-square overflow-hidden lg:col-span-7 lg:min-h-[640px] lg:aspect-auto">
                  <img
                    src={destination.image}
                    alt={destination.imageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.82))]" />
                  <div className="absolute left-0 top-0 h-16 w-16 border-l border-t border-white/20" />
                </div>

                <div className={`relative lg:col-span-5 ${index % 2 === 0 ? "lg:-ml-14 xl:-ml-20" : "lg:-mr-14 xl:-mr-20"}`}>
                  <div className="editorial-panel px-6 py-8 md:px-8 md:py-10">
                    <div className="editorial-kicker mb-4">{destination.badge}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
                      {destination.eyebrow}
                    </div>
                    <h3 className="display-font mt-3 max-w-[9ch] text-[clamp(2.3rem,4.6vw,4rem)] uppercase leading-[0.92]">
                      {destination.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/72 md:text-base">
                      {destination.description}
                    </p>
                    <div className="mt-6">
                      <Link href={`/${destination.slug}`} className="button-editorial button-editorial-secondary">
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
