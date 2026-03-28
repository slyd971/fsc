import {
  GlassWater,
  Map,
  Sparkles,
  Sunrise,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

const iconMap = {
  sparkles: Sparkles,
  map: Map,
  sunrise: Sunrise,
  glass: GlassWater,
} as const;

export function AboutSection() {
  const { about, hero } = siteData;

  return (
    <section className="press-section section-about relative overflow-hidden border-t border-white/12 px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24" id="about">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,15,0.96),rgba(10,9,9,0.5))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(170,120,87,0.12),transparent_26%),radial-gradient(circle_at_top_left,rgba(232,198,154,0.1),transparent_24%)]" />
      <div className="grain-overlay" />
      <div className="paper-texture" />
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal>
            <div className="relative z-10 lg:pt-10">
              <div className="editorial-kicker">{about.eyebrow}</div>
              <h2 className="section-title mt-4 max-w-[12ch] md:max-w-[11ch]">{about.title}</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/74 md:text-lg md:leading-8">
                {about.intro}
              </p>

              <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
                {about.highlights.map((item) => (
                  <div key={item.title} className="border-l border-white/12 pl-4">
                    <div className="display-font text-2xl uppercase text-[var(--accent)]">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/62">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/12 pt-6 md:mt-12 md:pt-7">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.42em] text-white">
                  Crew figures
                </p>

                <div className="hide-scrollbar mt-5 overflow-x-auto">
                  <div className="flex min-w-max gap-4 sm:gap-6">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="w-[10rem] shrink-0 border-t border-white/12 pt-3.5 sm:w-[11rem]">
                      <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[var(--accent)] sm:h-9 sm:w-9">
                        {(() => {
                          const Icon = iconMap[stat.icon as keyof typeof iconMap];
                          return <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />;
                        })()}
                      </div>
                      <p className="text-[1.9rem] font-black tracking-[-0.07em] text-white sm:text-[2.3rem]">
                        {stat.value}
                      </p>
                      <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-white sm:text-[11px] sm:tracking-[0.26em]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative z-10">
              <div className="absolute -left-10 top-10 hidden h-[72%] w-px bg-[linear-gradient(180deg,var(--accent),transparent)] lg:block" />
              <div className="theme-panel rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 md:p-5">
                <div className="grid gap-4 md:grid-cols-[1fr_0.78fr] md:gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                    <img
                      src="/fsc-crew2.jpg"
                      alt="French Soca Crew group moment"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                    <img
                      src="/fsc-crew-1.jpg"
                      alt="French Soca Crew travel moment"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
