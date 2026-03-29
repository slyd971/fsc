import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function AboutSection() {
  const { about } = siteData;

  return (
    <section className="section-about relative overflow-hidden border-t border-white/10 px-4 py-16 sm:px-8 sm:py-22 lg:px-12 lg:py-28" id="about">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#130f0d_0%,#0a0a0a_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(223,183,129,0.13),transparent_23%),radial-gradient(circle_at_84%_74%,rgba(130,76,45,0.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_45%)]" />
      <div className="grain-overlay" />
      <div className="paper-texture opacity-70" />

      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/30">
                <img
                  src="/London/nhc1.jpg"
                  alt="French Soca Crew group moment"
                  className="h-[28rem] w-full object-cover sm:h-[36rem] lg:h-[48rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.76))]" />
                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <div className="max-w-[15rem] border-t border-white/18 pt-3 text-[11px] uppercase tracking-[0.28em] text-white/62">
                    Carnival logistics, warmth, music, community and road energy held together as one atmosphere.
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 -bottom-8 hidden max-w-[16rem] rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 backdrop-blur-md lg:block">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  Not just a booking
                </div>
                <div className="display-font mt-3 text-[1.75rem] uppercase leading-[0.9] text-white">
                  A crew-first way to move.
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative lg:pt-10">
              <div className="editorial-kicker">{about.eyebrow}</div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h2 className="section-title max-w-[10ch] text-[clamp(2.3rem,6vw,4.6rem)]">
                  {about.title}
                </h2>
                <div className="hidden text-[10px] uppercase tracking-[0.34em] text-white/28 lg:block">
                  01
                </div>
              </div>

              <div className="mt-8 max-w-2xl">
                <p className="display-font text-[clamp(1.2rem,2.15vw,1.8rem)] leading-[1.06] text-white/96">
                  {about.intro}
                </p>
              </div>

              <div className="mt-9 grid gap-7 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-8">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[1rem] leading-7 text-white/68 md:text-[1.03rem] md:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {about.highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="border-t border-white/10 pt-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/34">
                      0{index + 1}
                    </div>
                    <div className="display-font mt-3 text-[1.5rem] uppercase leading-none text-[var(--accent)]">
                      {item.title}
                    </div>
                    <p className="mt-3 max-w-[15rem] text-sm leading-6 text-white/58">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
