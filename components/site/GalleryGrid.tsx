"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { GalleryItem } from "@/data/site";

type GalleryGridProps = {
  items: GalleryItem[];
};

const filters = ["All", "Trips", "Carnival Moments", "Parties", "Crew Moments"] as const;

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition ${
              activeFilter === filter
                ? "bg-[var(--accent)] text-black"
                : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 md:columns-2 xl:columns-3">
        {filteredItems.map((item, index) => (
          <Reveal key={item.id} delay={0.03 * index} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="group w-full overflow-hidden rounded-[1.7rem] border border-white/10 text-left"
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
                  item.size === "portrait"
                    ? "h-[480px]"
                    : item.size === "landscape"
                      ? "h-[280px]"
                      : "h-[360px]"
                }`}
              />
              <div className="bg-white/[0.03] p-4">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  {item.category}
                </div>
                <div className="display-font mt-2 text-2xl uppercase">{item.title}</div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.06]"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.28 }}
              className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]"
            >
              <img src={activeItem.image} alt={activeItem.alt} className="max-h-[72vh] w-full object-cover" />
              <div className="p-5 md:p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  {activeItem.category}
                </div>
                <div className="display-font mt-2 text-3xl uppercase md:text-4xl">
                  {activeItem.title}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
