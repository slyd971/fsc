import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { Locale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

type DestinationHeroProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  image?: string;
  locale?: Locale;
};

export function DestinationHero({
  title = "",
  eyebrow = "",
  description = "",
  image = "",
  locale = "fr",
}: DestinationHeroProps) {
  const copy = getUiCopy(locale).destinationHero;
  const safeImage = image || "/fsc-crew-1.jpg";
  const isRotterdamRoad = safeImage.includes("/Rotterdam/fsc-rotterdam-road.jpg");

  return (
    <section className="relative min-h-[86vh] overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0">
        <img
          src={safeImage}
          alt={title || "Destination hero"}
          className={`h-full w-full object-cover object-center ${
            isRotterdamRoad
              ? "brightness-[0.92] contrast-[1.12] saturate-[1.08] sepia-[0.08]"
              : ""
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.8))]" />
      </div>

      <div className="section-shell relative flex min-h-[66vh] items-end pb-10 md:pb-12">
        <Reveal>
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/16 bg-black/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/82 backdrop-blur-md md:px-4 md:py-2 md:text-[10px]">
              {eyebrow}
            </div>

            <h1 className="section-title mt-4 max-w-4xl text-[clamp(3.4rem,8vw,7rem)]">
              {title}
            </h1>

            {description ? (
              <div className="mt-3 max-w-[22rem] rounded-[0.95rem] border border-white/10 bg-black/24 px-4 py-3.5 backdrop-blur-md md:max-w-[24rem] md:px-4.5 md:py-4 xl:max-w-[25rem]">
                <p className="text-[0.85rem] leading-5 text-white/76 md:text-[0.9rem] md:leading-[1.45]">
                  {description}
                </p>
              </div>
            ) : null}

            <a
              href="#book-now"
              className="button-editorial button-editorial-primary premium-sheen mt-6 inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              {copy.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
