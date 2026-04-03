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

      <div className="section-shell relative flex min-h-[70vh] items-end pb-12 md:pb-16">
        <Reveal>
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/16 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/82 backdrop-blur-md">
              {eyebrow}
            </div>

            <h1 className="section-title mt-5 text-[clamp(3.8rem,9vw,8rem)]">
              {title}
            </h1>

            {description ? (
              <div className="mt-5 max-w-xl rounded-[1.35rem] border border-white/12 bg-black/28 p-5 backdrop-blur-md md:p-6">
                <p className="text-sm leading-6 text-white/78 md:text-[1.05rem] md:leading-7">
                  {description}
                </p>
              </div>
            ) : null}

            <a
              href="#book-now"
              className="button-editorial button-editorial-primary premium-sheen mt-8 inline-flex"
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
