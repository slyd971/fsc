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
    <footer className="theme-border relative overflow-hidden border-t py-16 md:py-24">
      <div className="theme-page-glow-top absolute inset-0" />
      <div className="section-shell relative">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="section-title text-[clamp(2.8rem,6vw,4.8rem)]">{brand.name}</div>
            <p className="text-muted mt-4 max-w-md text-sm leading-7 md:text-base">
              {brand.tagline}
            </p>
          </div>

          <div className="min-w-0">
            <div className="editorial-kicker">Quick links</div>
            <div className="mt-5 flex flex-col gap-3">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.18em] text-white/72 transition hover:text-[var(--foreground-strong)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="editorial-kicker">Contact</div>
            <div className="mt-5 flex flex-col gap-3">
              {contact.methods.map((method) => {
                const Icon = iconMap[method.icon];

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-start gap-3 text-sm leading-6 text-white/72 transition hover:text-[var(--foreground-strong)]"
                  >
                    <div className="theme-border theme-panel-soft mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[var(--accent)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block uppercase tracking-[0.18em] text-[var(--foreground-strong)]">{method.label}</span>
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
