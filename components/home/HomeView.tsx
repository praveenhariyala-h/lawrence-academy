"use client";

import Image from "next/image";
import CurriculumMosaic from "@/components/home/CurriculumMosaic";
import HeroSection from "@/components/home/HeroSection";
import HomeBelowFold from "@/components/home/HomeBelowFold";
import PathwayStrip from "@/components/home/PathwayStrip";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";
import type { HomeContent } from "@/lib/home";
import type { RecentAchievementSlide } from "@/lib/news";

export default function HomeView({
  content: initial,
  achievements
}: {
  content: HomeContent;
  achievements: RecentAchievementSlide[];
}) {
  const home = useEditable("home", initial);

  return (
    <>
      <HeroSection
        slides={home.heroSlides}
        learnMoreHref={home.heroLearnMoreHref}
        learnMoreLabel={home.heroLearnMoreLabel}
        learnMoreField={tinaMark(home, "heroLearnMoreLabel")}
      />

      <PathwayStrip items={home.pathwayItems} />

      <section className="band band--white">
        <div className="wrap why-choose-wrap">
          <h2 className="why-choose-title" data-tina-field={tinaMark(home, "whyTitle")}>
            {home.whyTitle}
          </h2>
          <div className="why-choose">
            <div className="why-choose-visual">
              <Image
                src={home.whyImage}
                alt={home.whyImageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
                data-tina-field={tinaMark(home, "whyImage")}
              />
            </div>
            <div className="why-choose-copy">
              <h3 className="why-choose-quote" data-tina-field={tinaMark(home, "whyQuote")}>
                {home.whyQuote}
              </h3>
              <p data-tina-field={tinaMark(home, "whyBody")}>{home.whyBody}</p>
            </div>
          </div>
        </div>
      </section>

      <CurriculumMosaic
        title={home.curriculumTitle}
        kicker={home.curriculumKicker}
        stages={home.curriculum}
        titleField={tinaMark(home, "curriculumTitle")}
        kickerField={tinaMark(home, "curriculumKicker")}
      />

      <HomeBelowFold home={home} achievements={achievements} />
    </>
  );
}
