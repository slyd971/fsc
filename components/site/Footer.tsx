import Link from "next/link";
import {
  Instagram,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { ContactMethod, NavItem } from "@/data/site";

type FooterProps = {
  brand: {
    name: string;
    tagline: string;
  };
  navigation: {
    items: NavItem[];
  };
  contact: {
    methods: ContactMethod[];
  };
};

const iconMap: Record<ContactMethod["icon"], typeof Instagram> = {
  instagram: Instagram,
  "message-circle": MessageCircle,
  phone: Phone,
  mail: Mail,
};

export function Footer({ brand, navigation, contact }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(216,194,163,0.12),transparent_20%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]" />
      <div className="section-shell relative">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="section-title text-[clamp(2.8rem,6vw,4.8rem)]">{brand.name}</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60 md:text-base">
              {brand.tagline}
            </p>
          </div>

          <div>
            <div className="editorial-kicker">Quick links</div>
            <div className="mt-5 flex flex-col gap-3">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="editorial-kicker">Contact</div>
            <div className="mt-5 flex flex-col gap-3">
              {contact.methods.map((method) => {
                const Icon = iconMap[method.icon];

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-start gap-3 text-sm leading-6 text-white/72 transition hover:text-white"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--accent)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block uppercase tracking-[0.18em] text-white">{method.label}</span>
                      <span>{method.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
