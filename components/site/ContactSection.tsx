import {
  Instagram,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { siteData, type ContactMethod } from "@/data/site";

const iconMap: Record<ContactMethod["icon"], typeof Instagram> = {
  instagram: Instagram,
  "message-circle": MessageCircle,
  phone: Phone,
  mail: Mail,
};

export function ContactSection() {
  const { contact } = siteData;

  return (
    <section className="relative overflow-hidden py-10 md:py-16" id="contact">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.76fr_1.24fr] lg:gap-8">
          <Reveal>
            <div className="lg:pt-6">
              <div className="editorial-kicker">Contact</div>
              <h2 className="display-font mt-3 max-w-[14ch] text-[clamp(1.95rem,5.4vw,4rem)] uppercase leading-[0.94]">
                <span className="block">Plan your</span>
                <span className="block">next road.</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/68 md:text-base">
                {contact.description}
              </p>

              <div className="mt-6 grid gap-3">
                {contact.methods.map((method) => {
                  const Icon = iconMap[method.icon];

                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="premium-hover-lift flex items-center gap-3 border-b border-white/10 pb-3 transition hover:border-[var(--accent)]/28"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/5">
                        <Icon className="h-4 w-4 text-[var(--accent)]" />
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] uppercase tracking-[0.26em] text-white/44">
                            {method.label}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-white/90">{method.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
