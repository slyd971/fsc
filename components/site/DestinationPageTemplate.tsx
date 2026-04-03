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

  const introParagraphs = page.introParagraphs ?? [];
  const experiences = page.experiences ?? [];
  const packs = page.packs ?? [];

  return (
    <main className="pt-28 md:pt-36">
      <DestinationHero
        title={page.title}
        eyebrow={page.eyebrow}
        description={page.heroDescription}
        image={page.heroImage}
        locale={locale}
      />

      <CarnivalIntroSection
        title={page.introTitle}
        paragraphs={introParagraphs}
      />

      {experiences.length > 0 ? (
        <section className="section-divider relative py-14 md:py-20 xl:py-24">
          <div className="section-shell">
            <Reveal>
              <div className="max-w-3xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                  {copy.kicker}
                </div>
                <h2 className="display-font mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl xl:text-[5.25rem]">
                  {copy.title}
                </h2>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-5 md:mt-10 xl:gap-7">
              {experiences.map((event, index) => (
                <EventBlock
                  key={`${event.title}-${index}`}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {packs.length > 0 ? <PricingComparison packs={packs} locale={locale} /> : null}
    </main>
  );
}
