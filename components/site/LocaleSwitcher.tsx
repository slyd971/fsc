"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, withLocalePath, stripLocaleFromPathname } from "@/lib/i18n";

const localeOptions: Array<{
  locale: Locale;
  label: string;
  flag: string;
}> = [
  { locale: "fr", label: "FR", flag: "🇫🇷" },
  { locale: "en", label: "EN", flag: "🇬🇧" },
];

function buildHref(pathname: string, targetLocale: Locale) {
  const basePath = stripLocaleFromPathname(pathname);
  const localizedPath = withLocalePath(basePath, targetLocale);
  return localizedPath;
}

export function LocaleSwitcher({
  locale,
  compact = false,
  onNavigate,
}: {
  locale: Locale;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`theme-border theme-panel-soft inline-flex items-center rounded-full border ${
        compact ? "px-1 py-1" : "px-1.5 py-1.5"
      }`}
      aria-label="Language switcher"
    >
      {localeOptions.map((option) => {
        const isActive = option.locale === locale;

        return (
          <Link
            key={option.locale}
            href={buildHref(pathname, option.locale)}
            onClick={onNavigate}
            className={`inline-flex items-center gap-1 rounded-full transition ${
              compact
                ? "px-2 py-1 text-[10px] uppercase tracking-[0.18em]"
                : "px-2.5 py-1.5 text-[10px] uppercase tracking-[0.22em]"
            } ${
              isActive
                ? "bg-[var(--accent)] text-[var(--background)]"
                : "text-white/72 hover:text-[var(--foreground-strong)]"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="text-[0.85rem] leading-none">{option.flag}</span>
            <span>{option.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
