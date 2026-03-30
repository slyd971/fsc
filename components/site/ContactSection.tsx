import {
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { siteData, type ContactMethod } from "@/data/site";
import { siteDataEnSeed } from "@/data/site-en-seed";
import type { Locale } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

const iconMap: Record<ContactMethod["icon"], typeof Instagram> = {
  instagram: Instagram,
  "message-circle": MessageCircle,
  phone: Phone,
  mail: Mail,
};

export function ContactSection({
  locale = "fr",
  content,
}: {
  locale?: Locale;
  content?: typeof siteData.contact & {
    eyebrow?: string;
    backgroundWord?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
}) {
  const contact = content ?? (locale === "en" ? { ...siteData.contact, ...siteDataEnSeed.contact } : siteData.contact);
  const copy = getUiCopy(locale).contact;
  const whatsappMethod = contact.methods.find((method) => method.label === "WhatsApp");
  const backgroundWord = content?.backgroundWord ?? "Join";
  const eyebrow = content?.eyebrow ?? copy.kicker;
  const primaryCta = content?.primaryCta ?? { label: copy.whatsapp, href: whatsappMethod?.href ?? "/#contact" };
  const secondaryCta = content?.secondaryCta ?? { label: copy.seeRoads, href: "/trips" };

  return (
    <section className="theme-border relative overflow-hidden border-t px-4 py-14 sm:px-8 sm:py-22 lg:px-12 lg:py-28" id="contact">
      <div className="theme-section-contact-bg absolute inset-0" />
      <div className="theme-section-contact-overlay absolute inset-0" />
      <div className="grain-overlay" />
      <div className="paper-texture opacity-60" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="theme-border theme-surface-elevated relative overflow-hidden rounded-[2.2rem] border px-4 py-5 sm:rounded-[2.8rem] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute right-4 top-2 text-[clamp(3.2rem,9vw,7.4rem)] font-black uppercase tracking-[-0.08em] text-white/[0.08]">
              {backgroundWord}
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
              <div>
                <div className="editorial-kicker">{eyebrow}</div>
                <h2 className="display-font theme-text-strong mt-4 max-w-[8ch] text-[clamp(1.65rem,6.5vw,5rem)] uppercase leading-[0.9] sm:max-w-[9ch] sm:text-[clamp(1.8rem,7vw,5rem)] sm:leading-[0.88] lg:max-w-[7ch] lg:text-[clamp(2.2rem,4.2vw,4.1rem)]">
                  {contact.title}
                </h2>
                <p className="text-muted mt-4 max-w-xl text-sm leading-6 sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                  {contact.description} {copy.descriptionSuffix}
                </p>
                <div className="theme-border theme-panel-dark text-muted mt-5 inline-flex rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] backdrop-blur-sm">
                  {copy.directReply}
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  {primaryCta ? (
                    <a
                      href={primaryCta.href}
                      className="button-editorial button-editorial-primary premium-sheen premium-hover-lift"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {primaryCta.label}
                    </a>
                  ) : null}
                  <a href={withLocalePath(secondaryCta.href, locale)} className="button-editorial button-editorial-secondary premium-sheen">
                    {secondaryCta.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                  {contact.methods.map((method) => {
                    const Icon = iconMap[method.icon];

                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        className="theme-border theme-panel-dark group overflow-hidden rounded-[1.45rem] border p-3.5 transition hover:border-[var(--accent)]/28 hover:bg-white/[0.03] sm:rounded-[1.7rem] sm:p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="theme-border theme-panel-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[var(--accent)] sm:h-11 sm:w-11">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="text-muted-soft text-[8px] uppercase tracking-[0.18em] transition group-hover:text-[var(--accent)] sm:text-[9px] sm:tracking-[0.24em]">
                            {copy.open}
                          </div>
                        </div>
                        <div className="text-muted-soft mt-4 text-[9px] uppercase tracking-[0.2em] sm:mt-5 sm:text-[10px] sm:tracking-[0.28em]">
                          {method.label}
                        </div>
                        <div className="theme-text-strong mt-2 text-sm leading-5 sm:text-base sm:leading-6">
                          {method.value}
                        </div>
                        <div className="text-muted-soft mt-1.5 text-[11px] leading-4 sm:mt-2 sm:text-sm sm:leading-5">
                          {method.detail}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <Reveal delay={0.08}>
                <div className="relative lg:pt-6">
                  <div className="pointer-events-none absolute -left-4 top-3 hidden h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(214,185,139,0.18),transparent_68%)] blur-2xl lg:block" />
                  <ContactForm locale={locale} interests={contact.formInterests} />
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
