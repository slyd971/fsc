"use client";

import { useEffect, useState } from "react";
import { Type } from "lucide-react";

type FontPreset = "default" | "salon" | "coast";

const STORAGE_KEY = "fsc-font-preset";

const presets: Array<{
  id: FontPreset;
  label: string;
  blurb: string;
}> = [
  {
    id: "default",
    label: "Signature",
    blurb: "Editorial serif + clean sans",
  },
  {
    id: "salon",
    label: "Atelier",
    blurb: "Classic editorial, softer and more romantic",
  },
  {
    id: "coast",
    label: "Runway",
    blurb: "Sharper, modern, more fashion-forward",
  },
];

export function FontSwitcher() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<FontPreset>("default");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as FontPreset | null;
    if (saved && presets.some((option) => option.id === saved)) {
      setPreset(saved);
      document.documentElement.dataset.fontPreset = saved;
      return;
    }

    document.documentElement.dataset.fontPreset = "default";
  }, []);

  useEffect(() => {
    document.documentElement.dataset.fontPreset = preset;
    window.localStorage.setItem(STORAGE_KEY, preset);
  }, [preset]);

  return (
    <div className="fixed right-3 bottom-3 z-[80] sm:right-4 sm:bottom-4">
      <div className={`font-switcher-shell rounded-[1rem] border border-white/8 bg-black/42 p-1.5 backdrop-blur-md ${open ? "w-[min(74vw,14rem)]" : "w-auto"}`}>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Hide font options" : "Show font options"}
          className={`flex items-center rounded-[0.85rem] text-left transition hover:bg-white/5 ${open ? "w-full justify-between px-2.5 py-2" : "h-9 w-9 justify-center"}`}
        >
          <div className={`flex items-center ${open ? "gap-2.5" : ""}`}>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/8 bg-white/5 text-[var(--accent)]">
              <Type className="h-3.5 w-3.5" />
            </div>
            {open ? (
              <div>
                <div className="display-font text-[0.9rem] uppercase leading-none text-white/84">
                  {presets.find((option) => option.id === preset)?.label}
                </div>
              </div>
            ) : null}
          </div>
          {open ? (
            <div className="text-[9px] uppercase tracking-[0.18em] text-white/32">
              Close
            </div>
          ) : null}
        </button>

        {open ? (
          <div className="mt-2 grid gap-2">
            {presets.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setPreset(option.id)}
                className={`rounded-[0.95rem] border px-3 py-2 text-left transition ${
                  preset === option.id
                    ? "border-[var(--accent)]/40 bg-[linear-gradient(180deg,rgba(214,185,139,0.16),rgba(255,255,255,0.04))]"
                    : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                <div className="display-font text-base uppercase leading-none text-white">
                  {option.label}
                </div>
                <div className="mt-1 text-[11px] leading-4.5 text-white/52">
                  {option.blurb}
                </div>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
