"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";
import { siteData, type NavItem } from "@/data/site";

type MobileMenuProps = {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
};

export function MobileMenu({ open, items, onClose }: MobileMenuProps) {
  const quickContacts = siteData.contact.methods.filter((method) =>
    ["instagram", "message-circle", "mail"].includes(method.icon)
  );

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="theme-border absolute left-0 right-0 top-full z-[100] border-t bg-[color-mix(in_srgb,var(--background)_92%,transparent)] lg:hidden"
        >
          <nav className="grid grid-cols-2 gap-2.5 px-4 py-3 text-left">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * index, duration: 0.22 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="theme-border theme-panel-soft block rounded-[0.9rem] border px-3 py-3 text-sm font-bold uppercase tracking-[0.05em] text-[var(--foreground-strong)] transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="theme-border flex items-center justify-center gap-3 border-t px-4 pb-4 pt-1">
            {quickContacts.map((method, index) => {
              const Icon =
                method.icon === "instagram"
                  ? Instagram
                  : method.icon === "message-circle"
                    ? MessageCircle
                    : Mail;

              return (
                <motion.a
                  key={method.href}
                  href={method.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.05, duration: 0.22 }}
                  className="theme-border theme-panel-soft flex h-11 w-11 items-center justify-center rounded-full border text-white/82 transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                  aria-label={method.label}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
