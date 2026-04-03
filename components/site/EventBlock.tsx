import { Reveal } from "@/components/site/Reveal";
import type { ExperienceBlock } from "@/data/site";

type EventBlockProps = {
  event: ExperienceBlock;
  index: number;
};

export function EventBlock({ event, index }: EventBlockProps) {
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={0.08 * index}>
      <article className="mx-auto grid max-w-6xl items-start gap-4 lg:gap-5 xl:grid-cols-[minmax(0,0.84fr)_minmax(20rem,0.9fr)]">
        <div
          className={`media-cut theme-border overflow-hidden border ${
            isEven ? "" : "lg:order-2"
          }`}
        >
          <img
            src={event.image}
            alt={event.title}
            className="h-[240px] w-full object-cover sm:h-[290px] lg:h-[320px] xl:h-[340px]"
          />
        </div>
        <div
          className={`editorial-panel flex h-fit flex-col justify-start px-5 py-5 md:px-6 md:py-5 ${
            isEven ? "" : "lg:order-1"
          }`}
        >
          <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">{event.date}</div>
          <h3 className="display-font mt-3 text-[2rem] uppercase leading-[0.92] md:text-[2.6rem] xl:text-[3rem]">
            {event.title}
          </h3>
          <p className="text-muted mt-3.5 max-w-[34rem] text-sm leading-6 md:text-[0.98rem] md:leading-6">
            {event.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {event.includes.map((item) => (
              <span key={item} className="theme-border theme-panel-dark text-muted-soft border px-3 py-2 text-[10px] uppercase tracking-[0.22em]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
