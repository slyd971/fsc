import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";
import { withLocalePath } from "@/lib/i18n";
import { getTrips } from "@/lib/site-content";
import { getUiCopy } from "@/lib/ui-copy";

export default async function TripsPageEn() {
  const destinations = await getTrips("en");
  const copy = getUiCopy("en").tripsPage;

  return (
    <main className="pt-28 md:pt-36">
      <section className="section-divider relative overflow-hidden py-16 md:py-24">
        <div className="theme-page-glow-top absolute inset-0" />
        <div className="section-shell relative">
          <Reveal>
            <div className="max-w-4xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                {siteData.tripsPage.eyebrow}
              </div>
              <h1 className="display-font mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl md:text-8xl">
                {siteData.tripsPage.title}
              </h1>
              <p className="text-muted mt-5 max-w-2xl text-sm leading-7 md:text-base">
                {siteData.tripsPage.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="theme-section-trips-bg absolute inset-0" />
        <div className="theme-section-trips-overlay absolute inset-0 opacity-80" />
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          {destinations.map((destination, index) => (
            <Reveal key={destination.slug} delay={0.08 * index}>
              <article className="theme-border theme-panel-soft relative z-10 overflow-hidden rounded-[2rem] border">
                <img
                  src={destination.image}
                  alt={destination.imageAlt}
                  className="h-[360px] w-full object-cover"
                />
                <div className="p-6 md:p-8">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                    {destination.eyebrow}
                  </div>
                  <h2 className="display-font mt-3 text-4xl uppercase md:text-5xl">
                    {destination.title}
                  </h2>
                  <p className="text-muted mt-4 text-sm leading-7 md:text-base">
                    {destination.description}
                  </p>
                  <Link
                    href={withLocalePath(`/${destination.slug}`, "en")}
                    className="theme-cta-solid mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition"
                  >
                    {copy.detailCta}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
