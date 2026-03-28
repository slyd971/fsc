import { Reveal } from "@/components/site/Reveal";
import type { ExperienceBlock } from "@/data/site";

type EventBlockProps = {
  event: ExperienceBlock;
  index: number;
};

export function EventBlock({ event, index }: EventBlockProps) {
  return (
    <Reveal delay={0.08 * index}>
      <article className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="media-cut overflow-hidden border border-white/10">
          <img src={event.image} alt={event.title} className="h-full min-h-[280px] w-full object-cover" />
        </div>
        <div className="editorial-panel flex flex-col justify-center px-5 py-6 md:px-7 md:py-8">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">{event.date}</div>
          <h3 className="display-font mt-3 text-4xl uppercase leading-[0.92] md:text-5xl">
            {event.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">{event.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {event.includes.map((item) => (
              <span key={item} className="border border-white/10 bg-black/[0.2] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/58">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
