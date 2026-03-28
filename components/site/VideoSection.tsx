import Link from "next/link";
import { Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteData } from "@/data/site";

export function VideoSection() {
  const { video } = siteData;

  return (
    <section className="press-section section-video relative overflow-hidden border-t border-white/12 bg-[#090909] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(216,194,163,0.10),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(216,194,163,0.05),transparent_30%)]" />
      <div className="grain-overlay" />
      <div className="section-shell">
        <Reveal>
          <div className="relative z-10 max-w-3xl">
            <div className="editorial-kicker">{video.eyebrow}</div>
            <h2 className="section-title mt-3">{video.title}</h2>
            <p className="mt-5 text-sm leading-6 text-white/65 md:mt-7 md:text-base md:leading-7">
              {video.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 md:mt-10">
              <Link href={video.cta.href} className="button-editorial button-editorial-primary">
                {video.cta.label}
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="relative z-10 mt-7 grid gap-4 md:grid-cols-3 md:gap-5">
          {video.videos.map((item, index) => (
            <Reveal key={item.title} delay={0.05 * index}>
              <div className="theme-panel rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 md:p-4">
                <div className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-black">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[340px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="theme-chip flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/18 bg-black/[0.45] backdrop-blur-md transition group-hover:scale-105 md:h-20 md:w-20">
                      <Play className="ml-1 h-7 w-7 text-[var(--accent)] md:h-8 md:w-8" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 md:inset-x-5 md:bottom-5">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 md:text-sm md:tracking-[0.24em]">
                      {item.title}
                    </div>
                    <div className="theme-overlay-panel rounded-full border border-white/15 bg-black/35 p-2.5 backdrop-blur-sm md:p-3">
                      <Play className="ml-0.5 h-3.5 w-3.5 text-white/85 md:h-4 md:w-4" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
