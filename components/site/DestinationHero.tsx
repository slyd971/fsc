import { Reveal } from "@/components/site/Reveal";

type DestinationHeroProps = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
};

export function DestinationHero({ title, eyebrow, description, image }: DestinationHeroProps) {
  return (
    <section className="relative min-h-[86vh] overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.8))]" />
      </div>
      <div className="section-shell relative flex min-h-[70vh] items-end pb-12 md:pb-16">
        <Reveal>
          <div className="max-w-4xl">
            <div className="editorial-kicker">
              {eyebrow}
            </div>
            <h1 className="section-title mt-5 text-[clamp(3.8rem,9vw,8rem)]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/74 md:text-xl md:leading-8">
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
