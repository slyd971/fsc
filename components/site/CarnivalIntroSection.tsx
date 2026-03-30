import { Reveal } from "@/components/site/Reveal";

type CarnivalIntroSectionProps = {
  title: string;
  paragraphs: string[];
};

export function CarnivalIntroSection({
  title,
  paragraphs,
}: CarnivalIntroSectionProps) {
  return (
    <section className="section-divider relative py-16 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="display-font text-5xl uppercase leading-[0.9] sm:text-6xl md:text-8xl">
              {title}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 md:p-10">
              <div className="text-muted space-y-5 text-sm leading-7 md:text-lg md:leading-8">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
