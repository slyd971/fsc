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
  {
    id: "island-daylight",
    label: "Island Daylight",
    blurb: "Sunlit sand tones with bright Caribbean warmth",
    swatches: ["#32251d", "#5c4638", "#ffb866"],
  },
];

export function FontSwitcher() {
  const [open, setOpen] = useState(false);
  const [fontPreset, setFontPreset] = useState<FontPreset>("default");
  const [themePreset, setThemePreset] = useState<ThemePreset>("default");

  useEffect(() => {
    const savedFont = window.localStorage.getItem(FONT_STORAGE_KEY) as FontPreset | null;
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemePreset | null;

    const nextFont = savedFont && fontPresets.some((option) => option.id === savedFont) ? savedFont : "default";
    const nextTheme = savedTheme && themePresets.some((option) => option.id === savedTheme) ? savedTheme : "default";

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
    <div className="fixed bottom-3 right-3 z-[80] sm:bottom-4 sm:right-4">
      <div
        className={`font-switcher-shell rounded-[1rem] border border-white/8 p-1.5 backdrop-blur-md ${
          open ? "w-[min(82vw,18rem)]" : "w-auto"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Hide style options" : "Show style options"}
          className={`flex items-center rounded-[0.85rem] text-left transition hover:bg-white/5 ${
            open ? "w-full justify-between px-2.5 py-2" : "h-9 w-9 justify-center"
          }`}
        >
          <div className={`flex items-center ${open ? "gap-2.5" : ""}`}>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/8 bg-white/5 text-[var(--accent)]">
              <Palette className="h-3.5 w-3.5" />
            </div>
            {open ? (
              <div>
                <div className="display-font text-[0.9rem] uppercase leading-none text-white/84">
                  {themePresets.find((option) => option.id === themePreset)?.label}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/34">
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
          <div className="mt-2 grid gap-3">
            <div className="rounded-[0.95rem] border border-white/8 bg-white/[0.02] p-2.5">
              <div className="mb-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/38">
                <Palette className="h-3 w-3" />
                Color theme
              </div>
              <div className="grid gap-2">
                {themePresets.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setThemePreset(option.id)}
                    className={`rounded-[0.95rem] border px-3 py-2 text-left transition ${
                      themePreset === option.id
                        ? "border-[var(--accent)]/40 bg-[linear-gradient(180deg,var(--accent-soft),rgba(255,255,255,0.04))]"
                        : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="display-font text-[0.95rem] uppercase leading-none text-white">
                          {option.label}
                        </div>
                        <div className="mt-1 text-[11px] leading-4.5 text-white/52">
                          {option.blurb}
                        </div>
                      </div>
                      <div className="flex gap-1.5 pt-0.5">
                        {option.swatches.map((swatch) => (
                          <span
                            key={swatch}
                            className="h-3.5 w-3.5 rounded-full border border-white/12"
                            style={{ backgroundColor: swatch }}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[0.95rem] border border-white/8 bg-white/[0.02] p-2.5">
              <div className="mb-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/38">
                <Type className="h-3 w-3" />
                Font direction
              </div>
              <div className="grid gap-2">
                {fontPresets.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFontPreset(option.id)}
                    className={`rounded-[0.95rem] border px-3 py-2 text-left transition ${
                      fontPreset === option.id
                        ? "border-[var(--accent)]/40 bg-[linear-gradient(180deg,var(--accent-soft),rgba(255,255,255,0.04))]"
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
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
