"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) < 8) return;

      setVisible(currentY < 20 || delta < 0);
      setCompact(currentY > 40);
      if (delta > 0) setMenuOpen(false);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-0 lg:-translate-y-full"
      }`}
    >
      <div className="section-shell pt-4">
        <div
          className={`premium-stroke relative border border-white/8 bg-black/[0.64] shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-300 ${
            !visible
              ? "ml-auto w-fit px-2 py-2 md:px-6"
              : compact
                ? "px-4 py-3 md:px-6"
                : "px-4 py-4 md:px-6"
          }`}
          style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(214,185,139,0.14),transparent_28%)]" />
          <div className="relative flex items-center justify-between gap-4">
            <Link
              href="/"
              className={`flex items-center gap-3 transition-all duration-300 ${
                !visible ? "pointer-events-none w-0 overflow-hidden opacity-0 lg:pointer-events-auto lg:w-auto lg:overflow-visible lg:opacity-100" : "opacity-100"
              }`}
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
                <div className="hidden text-[10px] uppercase tracking-[0.34em] text-white/42 md:block">
                  Cultural travel association
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/72 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className={`flex items-center gap-3 ${!visible ? "justify-end" : ""}`}>
              <Link
                href="/#contact"
                className={`button-editorial button-editorial-primary hidden lg:inline-flex ${
                  !visible ? "lg:hidden" : ""
                }`}
              >
                Join the crew
              </Link>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((current) => !current)}
                className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 lg:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
