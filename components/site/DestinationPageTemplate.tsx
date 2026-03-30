import { CarnivalIntroSection } from "@/components/site/CarnivalIntroSection";
import { DestinationHero } from "@/components/site/DestinationHero";
import { EventBlock } from "@/components/site/EventBlock";
import { PricingComparison } from "@/components/site/PricingComparison";
import { Reveal } from "@/components/site/Reveal";
import type { DestinationPageData } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

type DestinationPageTemplateProps = {
  page: DestinationPageData;
  locale?: Locale;
};

export function DestinationPageTemplate({
  page,
  locale = "fr",
}: DestinationPageTemplateProps) {
  const copy = getUiCopy(locale).destinationPage;
  return (
    <main>
      <DestinationHero
        title={page.title}
        eyebrow={page.eyebrow}
        description={page.heroDescription}
        image={page.heroImage}
        locale={locale}
      />
      <CarnivalIntroSection title={page.introTitle} paragraphs={page.introParagraphs} />
      <section className="section-divider relative py-16 md:py-28">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                {copy.kicker}
              </div>
              <h2 className="display-font mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl md:text-8xl">
                {copy.title}
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6">
            {page.experiences.map((event, index) => (
              <EventBlock key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
      <PricingComparison packs={page.packs} locale={locale} />
    </main>
  );
}
