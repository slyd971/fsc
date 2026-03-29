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
    <section className="relative overflow-hidden border-t border-white/10 px-4 py-16 sm:px-8 sm:py-22 lg:px-12 lg:py-28" id="contact">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#120d0d_0%,#060606_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(241,193,136,0.18),transparent_22%),radial-gradient(circle_at_82%_72%,rgba(133,73,46,0.18),transparent_22%)]" />
      <div className="grain-overlay" />
      <div className="paper-texture opacity-60" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute right-4 top-2 text-[clamp(3.4rem,9vw,7rem)] font-black uppercase tracking-[-0.08em] text-white/[0.05]">
              Join
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
              <div>
                <div className="editorial-kicker">Final call</div>
                <h2 className="display-font mt-4 max-w-[11ch] text-[clamp(2.3rem,5.5vw,4.6rem)] uppercase leading-[0.9] text-white">
                  Join the road, not just the form.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/66 md:text-lg md:leading-8">
                  {contact.description} This should feel like the start of a crew move, a destination plan and a real shared departure.
                </p>

                <div className="mt-8 grid gap-3">
                  {contact.methods.map((method) => {
                    const Icon = iconMap[method.icon];

                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        className="group flex items-center justify-between gap-4 border-t border-white/10 py-4 transition hover:border-[var(--accent)]/30"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/22 text-[var(--accent)]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                              {method.label}
                            </div>
                            <div className="mt-1 text-base text-white/92">
                              {method.value}
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.28em] text-white/30 transition group-hover:text-[var(--accent)]">
                          Open
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <Reveal delay={0.08}>
                <div className="relative lg:pt-6">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
