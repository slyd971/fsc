import { Check, MessageCircle, Minus } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData, type Pack } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

type PricingComparisonProps = {
  packs?: Pack[];
  locale?: Locale;
};

export function PricingComparison({
  packs = [],
  locale = "fr",
}: PricingComparisonProps) {
  const copy = getUiCopy(locale).pricing;
  const whatsappHref =
    siteData.contact.methods.find((method) => method.label === "WhatsApp")?.href ?? "/#contact";

  if (!packs.length) {
    return null;
  }

  return (
    <section className="relative py-16 md:py-28" id="book-now">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-3xl">
            <div className="editorial-kicker">{copy.kicker}</div>
            <h2 className="section-title mt-4">{copy.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="editorial-panel mt-8 flex flex-col gap-5 border-[var(--accent)]/25 bg-[linear-gradient(180deg,var(--accent-soft),rgba(255,255,255,0.03))] p-6 md:flex-row md:items-end md:justify-between md:p-7">
            <div className="max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                {copy.reservation}
              </div>
              <p className="text-muted mt-3 text-sm leading-7 md:text-base md:leading-8">
                {copy.description}
              </p>
            </div>

            <a href={whatsappHref} className="button-editorial button-editorial-primary shrink-0">
              <MessageCircle className="h-4 w-4" />
              {copy.whatsapp}
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-4">
          {packs.map((pack, index) => {
            const included = pack.included ?? [];
            const notIncluded = pack.notIncluded ?? [];

            return (
              <Reveal key={`${pack.name}-${index}`} delay={0.06 * index}>
                <div
                  className={`editorial-panel h-full p-6 ${
                    pack.featured
                      ? "border-[var(--accent)]/45 bg-[linear-gradient(180deg,rgba(216,194,163,0.14),rgba(255,255,255,0.04))]"
                      : "theme-border theme-panel-soft"
                  }`}
                >
                  <div className="text-muted-soft text-[10px] uppercase tracking-[0.28em]">
                    {pack.featured ? copy.featured : copy.option}
                  </div>

                  <div className="display-font mt-3 text-4xl uppercase">{pack.name}</div>
                  <div className="mt-3 text-2xl font-semibold text-[var(--accent)]">{pack.price}</div>
                  <p className="text-muted mt-4 text-sm leading-7">{pack.pitch}</p>

                  <div className="mt-6 space-y-3">
                    {included.map((item) => (
                      <div key={item} className="text-muted flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="theme-border mt-6 border-t pt-5">
                    {notIncluded.map((item) => (
                      <div
                        key={item}
                        className="text-muted-soft mb-3 flex items-start gap-3 text-sm last:mb-0"
                      >
                        <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappHref}
                    className={`button-editorial mt-8 ${
                      pack.featured
                        ? "button-editorial-primary"
                        : "button-editorial-secondary"
                    }`}
                  >
                    {copy.whatsapp}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}