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
    <section className="press-section section-about relative overflow-hidden border-t border-white/12 px-4 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24" id="about">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,15,0.96),rgba(10,9,9,0.5))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(170,120,87,0.12),transparent_26%),radial-gradient(circle_at_top_left,rgba(232,198,154,0.1),transparent_24%)]" />
      <div className="grain-overlay" />
      <div className="paper-texture" />
      <div className="section-shell">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-10">
          <Reveal>
            <div className="relative z-10 min-w-0 lg:pt-10">
              <div className="editorial-kicker">{about.eyebrow}</div>
              <h2 className="section-title mt-4 max-w-[14ch] text-[clamp(2.3rem,11vw,4rem)] md:max-w-[11ch]">
                {about.title}
              </h2>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-white/74 sm:text-base md:text-lg md:leading-8">
                {about.intro}
              </p>

              <div className="mt-8 grid gap-4 sm:gap-5 md:mt-10 md:grid-cols-3 md:gap-6">
                {about.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="premium-hover-lift rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:rounded-none md:border-0 md:border-l md:border-white/12 md:bg-transparent md:p-0 md:pl-4"
                  >
                    <div className="display-font text-[1.55rem] uppercase leading-none text-[var(--accent)] sm:text-2xl">
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

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                  {hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="premium-hover-lift min-w-0 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:rounded-none lg:border-0 lg:border-t lg:border-white/12 lg:bg-transparent lg:px-0 lg:pt-3.5 lg:pb-0"
                    >
                      <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[var(--accent)] sm:h-9 sm:w-9">
                        {(() => {
                          const Icon = iconMap[stat.icon as keyof typeof iconMap];
                          return <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />;
                        })()}
                      </div>
                      <p className="text-[1.8rem] font-black tracking-[-0.07em] text-white sm:text-[2.2rem] lg:text-[2.3rem]">
                        {stat.value}
                      </p>
                      <p className="mt-1.5 max-w-[12ch] text-[10px] uppercase tracking-[0.18em] text-white/82 sm:text-[11px] sm:tracking-[0.22em]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative z-10 min-w-0">
              <div className="absolute -left-10 top-10 hidden h-[72%] w-px bg-[linear-gradient(180deg,var(--accent),transparent)] lg:block" />
              <div className="theme-panel premium-hover-lift premium-sheen surface-glow mx-auto w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-3 sm:p-4 md:max-w-[40rem] md:p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20 sm:aspect-[5/6] md:aspect-[6/5] lg:aspect-square">
                  <img
                    src="/fsc-crew2.jpg"
                    alt="French Soca Crew group moment"
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
