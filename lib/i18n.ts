export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeLocale(value?: string | null): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function getLocalePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function withLocalePath(path: string, locale: Locale): string {
  if (!path.startsWith("/")) {
    return path;
  }

  if (path === "/") {
    return getLocalePrefix(locale) || "/";
  }

  return `${getLocalePrefix(locale)}${path}`;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");

  if (segments[1] && isLocale(segments[1])) {
    const nextPath = `/${segments.slice(2).join("/")}`;
    return nextPath === "/" ? "/" : nextPath.replace(/\/+$/, "") || "/";
  }

  return pathname;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split("/");
  return normalizeLocale(maybeLocale);
}
