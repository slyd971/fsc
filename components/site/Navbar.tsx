"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/data/site";
import { MobileMenu } from "@/components/site/MobileMenu";

type NavbarProps = {
  navigation: {
    items: NavItem[];
  };
  brand: {
    name: string;
    mark: string;
  };
};

export function Navbar({ navigation, brand }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 32);
      setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div
          className={`navbar-shell relative ml-auto overflow-visible transition-all duration-300 lg:premium-stroke lg:theme-border lg:border lg:bg-[color-mix(in_srgb,var(--background)_72%,transparent)] lg:shadow-[0_18px_60px_rgba(0,0,0,0.24)] lg:backdrop-blur-2xl ${
            compact
              ? "px-0 py-0 lg:px-4 lg:py-3 md:px-6"
              : "px-0 py-0 lg:px-4 lg:py-4 md:px-6"
          }`}
        >
          <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_left,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_28%)] lg:block" />
          <div className="relative flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center lg:hidden"
              aria-label="Go to home"
            >
              <div className="premium-chip flex h-10 w-10 items-center justify-center">
                <span className="display-font text-lg leading-none text-[var(--accent)]">
                  {brand.mark}
                </span>
              </div>
            </Link>

            <Link
              href="/"
              className="hidden items-center gap-3 transition-all duration-300 lg:flex"
            >
              <div className="premium-chip flex h-11 w-11 items-center justify-center">
                <span className="display-font text-xl leading-none text-[var(--accent)]">
                  {brand.mark}
                </span>
              </div>
              <div>
                <div className="display-font text-xl uppercase leading-none tracking-[0.2em] md:text-2xl">
                  {brand.name}
                </div>
                <div className="text-muted-soft hidden text-[10px] uppercase tracking-[0.34em] md:block">
                  Cultural travel association
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/72 transition hover:text-[var(--foreground-strong)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="button-editorial button-editorial-primary hidden lg:inline-flex"
              >
                Join the crew
              </Link>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((current) => !current)}
                className="flex h-11 w-11 items-center justify-center lg:hidden"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-px w-5 bg-[var(--foreground-strong)] transition-all duration-300 ${
                      menuOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-px w-5 bg-[var(--foreground-strong)] transition-all duration-300 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-px w-5 bg-[var(--foreground-strong)] transition-all duration-300 ${
                      menuOpen ? "top-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <MobileMenu
            open={menuOpen}
            items={navigation.items}
            onClose={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
