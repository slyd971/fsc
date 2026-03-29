"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavItem } from "@/data/site";

type MobileMenuProps = {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
};

export function MobileMenu({ open, items, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-full z-[100] border-t border-white/10 bg-black/96 lg:hidden"
        >
          <nav className="flex flex-col items-end gap-2.5 px-4 py-3 text-right">
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
                  className="text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
