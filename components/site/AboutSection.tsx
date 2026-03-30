import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";
import { siteDataEnSeed } from "@/data/site-en-seed";
import type { Locale } from "@/lib/i18n";

const imageNoteByLocale = {
  fr: "Logistique carnaval, chaleur, musique, communauté et énergie de road tenues ensemble dans une seule atmosphère.",
  en: "Carnival logistics, warmth, music, community and road energy held together as one atmosphere.",
} as const;

const imageAltByLocale = {
  fr: "Moment de groupe French Soca Crew",
  en: "French Soca Crew group moment",
} as const;

const sideNoteByLocale = {
  fr: {
    kicker: "Pas juste une réservation",
    title: "Une façon crew-first d'avancer.",
  },
  en: {
    kicker: "Not just a booking",
    title: "A crew-first way to move.",
  },
} as const;

export function AboutSection({
  locale = "fr",
  content,
}: {
  locale?: Locale;
  content?: typeof siteData.about;
}) {
  const fallbackAbout = locale === "en"
    ? {
        ...siteData.about,
        ...siteDataEnSeed.about,
        highlights: [
          {
            title: "Community",
            description: "A travel crew shaped around connection, trust and shared recall.",
          },
          {
            title: "Carnival experiences",
            description: "Trips built around emotion, music and the movement of carnival culture.",
          },
          {
            title: "Caribbean vibes",
            description: "Soca, diaspora spirit and cultural immersion woven into every detail.",
          },
        ],
      }
    : siteData.about;
  const about = content ?? fallbackAbout;
  const sideNote = sideNoteByLocale[locale];

  return (
    <section className="theme-border section-about relative overflow-hidden border-t px-4 py-16 sm:px-8 sm:py-22 lg:px-12 lg:py-28" id="about">
      <div className="theme-section-about-bg absolute inset-0" />
      <div className="theme-section-about-overlay absolute inset-0" />
      <div className="grain-overlay" />
      <div className="paper-texture opacity-70" />

      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <Reveal>
            <div className="relative">
              <div className="theme-border theme-panel-dark overflow-hidden rounded-[2.2rem] border">
                <img
                  src="/London/nhc1.jpg"
                  alt={imageAltByLocale[locale]}
                  className="h-[28rem] w-full object-cover sm:h-[36rem] lg:h-[48rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.76))]" />
                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <div className="text-muted max-w-[15rem] border-t border-[var(--line-strong)] pt-3 text-[11px] uppercase tracking-[0.28em]">
                    {imageNoteByLocale[locale]}
                  </div>
                </div>
              </div>

              <div className="theme-border theme-surface-elevated absolute -right-2 -bottom-8 hidden max-w-[16rem] rounded-[1.6rem] border p-5 backdrop-blur-md lg:block">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  {sideNote.kicker}
                </div>
                <div className="display-font theme-text-strong mt-3 text-[1.75rem] uppercase leading-[0.9]">
                  {sideNote.title}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative lg:pt-10">
              <div className="editorial-kicker">{about.eyebrow}</div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h2 className="section-title max-w-[10ch] text-[clamp(2rem,6.8vw,4.6rem)] leading-[0.9]">
                  {about.title.split(" ").length > 2 ? (
                    <>
                      <span className="block whitespace-nowrap">{about.title.split(" ").slice(0, -1).join(" ")}</span>
                      <span className="block whitespace-nowrap">{about.title.split(" ").slice(-1)[0]}</span>
                    </>
                  ) : (
                    <span className="block">{about.title}</span>
                  )}
                </h2>
                <div className="text-muted-soft hidden text-[10px] uppercase tracking-[0.34em] lg:block">
                  01
                </div>
              </div>

              <div className="mt-8 max-w-2xl">
                <p className="display-font theme-text-strong text-[clamp(1.2rem,2.15vw,1.8rem)] leading-[1.06]">
                  {about.intro}
                </p>
              </div>

              <div className="theme-border mt-9 grid gap-7 border-t pt-8 md:grid-cols-2 md:gap-8">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-muted text-[1rem] leading-7 md:text-[1.03rem] md:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {about.highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="theme-border border-t pt-4"
                  >
                    <div className="text-muted-soft text-[10px] uppercase tracking-[0.3em]">
                      0{index + 1}
                    </div>
                    <div className="display-font mt-3 text-[1.5rem] uppercase leading-none text-[var(--accent)]">
                      {item.title}
                    </div>
                    <p className="text-muted-soft mt-3 max-w-[15rem] text-sm leading-6">
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
