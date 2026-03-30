import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n";

type Block = {
  _key?: string;
  _type: string;
  eyebrow?: { fr?: string; en?: string };
  title?: { fr?: string; en?: string };
  body?: { fr?: string; en?: string };
  primaryCta?: { label?: { fr?: string; en?: string }; href?: string };
  cta?: { label?: { fr?: string; en?: string }; href?: string };
};

function localize(value: { fr?: string; en?: string } | undefined, locale: Locale, fallback = "") {
  return value?.[locale] ?? value?.fr ?? value?.en ?? fallback;
}

export function PageBlocksRenderer({
  blocks,
  locale,
}: {
  blocks: Block[];
  locale: Locale;
}) {
  return (
    <>
      {blocks.map((block) => {
        const title = localize(block.title, locale);
        const body = localize(block.body, locale);
        const kicker = localize(block.eyebrow, locale);
        const cta = block.primaryCta ?? block.cta;
        const ctaLabel = localize(cta?.label, locale);
        const href = cta?.href ? withLocalePath(cta.href, locale) : null;

        return (
          <section key={block._key ?? block._type} className="section-divider relative py-16 md:py-24">
            <div className="section-shell">
              <div className="max-w-4xl">
                {kicker ? (
                  <div className="editorial-kicker">{kicker}</div>
                ) : null}
                {title ? (
                  <h2 className="section-title mt-4">{title}</h2>
                ) : null}
                {body ? (
                  <p className="text-muted mt-5 max-w-2xl text-sm leading-7 md:text-base">
                    {body}
                  </p>
                ) : null}
                {href && ctaLabel ? (
                  <Link href={href} className="button-editorial button-editorial-primary mt-6 inline-flex">
                    {ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
