"use client";

import { useEffect, useState } from "react";
import { Palette, Type } from "lucide-react";

type FontPreset = "default" | "salon" | "coast";
type ThemePreset = "default" | "sunset-carnival" | "tropical-night" | "island-daylight";

const FONT_STORAGE_KEY = "fsc-font-preset";
const THEME_STORAGE_KEY = "fsc-theme-preset";

const fontPresets: Array<{
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

const themePresets: Array<{
  id: ThemePreset;
  label: string;
  blurb: string;
  swatches: [string, string, string];
}> = [
  {
    id: "island-daylight",
    label: "Island Daylight",
    blurb: "Sunlit sand tones with bright Caribbean warmth",
    swatches: ["#32251d", "#5c4638", "#ffb866"],
  },
  {
    id: "default",
    label: "Signature Night",
    blurb: "Warm noir, editorial gold, premium road energy",
    swatches: ["#050608", "#0b0c10", "#d6b98b"],
  },
  {
    id: "sunset-carnival",
    label: "Sunset Carnival",
    blurb: "Amber heat, coral glow and festive dusk warmth",
    swatches: ["#140706", "#311510", "#ff9d63"],
  },
  {
    id: "tropical-night",
    label: "Tropical Night",
    blurb: "Deep teal nightlife with cool neon lift",
    swatches: ["#071018", "#15222c", "#4dd5c1"],
  },
];

export function FontSwitcher() {
  const [open, setOpen] = useState(false);
  const [fontPreset, setFontPreset] = useState<FontPreset>("default");
  const [themePreset, setThemePreset] = useState<ThemePreset>("island-daylight");

  useEffect(() => {
    const savedFont = window.localStorage.getItem(FONT_STORAGE_KEY) as FontPreset | null;
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemePreset | null;

    const nextFont = savedFont && fontPresets.some((option) => option.id === savedFont) ? savedFont : "default";
    const nextTheme =
      savedTheme && themePresets.some((option) => option.id === savedTheme)
        ? savedTheme
        : "island-daylight";

    setFontPreset(nextFont);
    setThemePreset(nextTheme);
    document.documentElement.dataset.fontPreset = nextFont;
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.fontPreset = fontPreset;
    window.localStorage.setItem(FONT_STORAGE_KEY, fontPreset);
  }, [fontPreset]);

  useEffect(() => {
    document.documentElement.dataset.theme = themePreset;
    window.localStorage.setItem(THEME_STORAGE_KEY, themePreset);
  }, [themePreset]);

  return (
    <div className="fixed bottom-2.5 right-2.5 z-[80] sm:bottom-4 sm:right-4">
      <div
        className={`font-switcher-shell rounded-[0.9rem] border border-white/8 p-1 backdrop-blur-md sm:rounded-[1rem] sm:p-1.5 ${
          open ? "w-[min(78vw,16.5rem)] sm:w-[min(82vw,18rem)]" : "w-auto"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Hide style options" : "Show style options"}
          className={`flex items-center rounded-[0.78rem] text-left transition hover:bg-white/5 sm:rounded-[0.85rem] ${
            open ? "w-full justify-between px-2 py-1.5 sm:px-2.5 sm:py-2" : "h-8 w-8 justify-center sm:h-9 sm:w-9"
          }`}
        >
          <div className={`flex items-center ${open ? "gap-2.5" : ""}`}>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/8 bg-white/5 text-[var(--accent)] sm:h-7 sm:w-7">
              <Palette className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </div>
            {open ? (
              <div>
                <div className="display-font text-[0.82rem] uppercase leading-none text-white/84 sm:text-[0.9rem]">
                  {themePresets.find((option) => option.id === themePreset)?.label}
                </div>
                <div className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-white/34 sm:mt-1 sm:text-[10px] sm:tracking-[0.18em]">
                  Style lab
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
          <div className="mt-1.5 grid gap-2.5 sm:mt-2 sm:gap-3">
            <div className="rounded-[0.85rem] border border-white/8 bg-white/[0.02] p-2 sm:rounded-[0.95rem] sm:p-2.5">
              <div className="mb-1.5 flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] text-white/38 sm:mb-2 sm:text-[9px] sm:tracking-[0.18em]">
                <Palette className="h-3 w-3" />
                Color theme
              </div>
              <div className="grid gap-1.5 sm:gap-2">
                {themePresets.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setThemePreset(option.id)}
                    className={`rounded-[0.85rem] border px-2.5 py-1.5 text-left transition sm:rounded-[0.95rem] sm:px-3 sm:py-2 ${
                      themePreset === option.id
                        ? "border-[var(--accent)]/40 bg-[linear-gradient(180deg,var(--accent-soft),rgba(255,255,255,0.04))]"
                        : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="display-font text-[0.88rem] uppercase leading-none text-white sm:text-[0.95rem]">
                          {option.label}
                        </div>
                        <div className="mt-0.5 text-[10px] leading-4 text-white/52 sm:mt-1 sm:text-[11px] sm:leading-4.5">
                          {option.blurb}
                        </div>
                      </div>
                      <div className="flex gap-1 pt-0.5 sm:gap-1.5">
                        {option.swatches.map((swatch) => (
                          <span
                            key={swatch}
                            className="h-3 w-3 rounded-full border border-white/12 sm:h-3.5 sm:w-3.5"
                            style={{ backgroundColor: swatch }}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[0.85rem] border border-white/8 bg-white/[0.02] p-2 sm:rounded-[0.95rem] sm:p-2.5">
              <div className="mb-1.5 flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] text-white/38 sm:mb-2 sm:text-[9px] sm:tracking-[0.18em]">
                <Type className="h-3 w-3" />
                Font direction
              </div>
              <div className="grid gap-1.5 sm:gap-2">
                {fontPresets.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFontPreset(option.id)}
                    className={`rounded-[0.85rem] border px-2.5 py-1.5 text-left transition sm:rounded-[0.95rem] sm:px-3 sm:py-2 ${
                      fontPreset === option.id
                        ? "border-[var(--accent)]/40 bg-[linear-gradient(180deg,var(--accent-soft),rgba(255,255,255,0.04))]"
                        : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="display-font text-[0.95rem] uppercase leading-none text-white sm:text-base">
                      {option.label}
                    </div>
                    <div className="mt-0.5 text-[10px] leading-4 text-white/52 sm:mt-1 sm:text-[11px] sm:leading-4.5">
                      {option.blurb}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
