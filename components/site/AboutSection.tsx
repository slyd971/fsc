import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function AboutSection() {
  const { about } = siteData;

  return (
    <section className="section-divider relative overflow-hidden py-12 md:py-18" id="about">
      <div className="absolute left-0 top-10 h-px w-1/3 bg-[linear-gradient(90deg,var(--accent),transparent)]" />
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <div className="lg:pt-14">
              <div className="editorial-kicker">{about.eyebrow}</div>
              <h2 className="section-title mt-4 max-w-[8ch]">{about.title}</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/68 md:text-lg md:leading-8">
                {about.intro}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -left-10 top-10 hidden h-[72%] w-px bg-[linear-gradient(180deg,var(--accent),transparent)] lg:block" />
              <div className="editorial-panel px-6 py-8 md:px-10 md:py-12">
                <div className="hidden space-y-5 text-sm leading-7 text-white/70 md:block md:text-lg md:leading-8">
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="grid gap-8 md:mt-10 md:grid-cols-3">
                  {about.highlights.map((item) => (
                    <div key={item.title} className="border-l border-white/12 pl-4">
                      <div className="display-font text-2xl uppercase text-[var(--accent)]">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/62">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
