import { CarnivalIntroSection } from "@/components/site/CarnivalIntroSection";
import { DestinationHero } from "@/components/site/DestinationHero";
import { EventBlock } from "@/components/site/EventBlock";
import { PricingComparison } from "@/components/site/PricingComparison";
import { Reveal } from "@/components/site/Reveal";
import type { DestinationPageData, GalleryItem } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

type DestinationPageTemplateProps = {
  page: DestinationPageData;
  galleryItems?: GalleryItem[];
  locale?: Locale;
};

export function DestinationPageTemplate({
  page,
  galleryItems = [],
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

      {galleryItems.length > 0 ? (
        <section className="section-divider relative py-14 md:py-20 xl:py-24">
          <div className="section-shell">
            <Reveal>
              <div className="flex max-w-4xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                    {copy.galleryKicker}
                  </div>
                  <h2 className="display-font mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl xl:text-[5.25rem]">
                    {copy.galleryTitle}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[var(--foreground-soft)] md:text-base">
                  {copy.galleryDescription}
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 xl:gap-6">
              {galleryItems.map((item, index) => (
                <Reveal key={item.id} delay={0.04 * index}>
                  <figure className="theme-border theme-panel-soft overflow-hidden rounded-[1.7rem] border">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className={`w-full object-cover ${
                        item.size === "portrait"
                          ? "h-[420px] sm:h-[460px]"
                          : item.size === "square"
                            ? "h-[320px] sm:h-[360px]"
                            : "h-[260px] sm:h-[300px]"
                      }`}
                    />
                    <figcaption className="p-4 md:p-5">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
                        {item.tag?.title ?? page.title}
                      </div>
                      <div className="display-font mt-2 text-[1.65rem] uppercase leading-[0.95]">
                        {item.title}
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
