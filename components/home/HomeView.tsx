"use client";

import Image from "next/image";
import CurriculumMosaic from "@/components/home/CurriculumMosaic";
import HeroSection from "@/components/home/HeroSection";
import HomeBelowFold from "@/components/home/HomeBelowFold";
import PathwayStrip from "@/components/home/PathwayStrip";
import { useEditable } from "@/components/tina/EditablePage";
import type { HomeContent } from "@/lib/home";

export default function HomeView({ content: initial }: { content: HomeContent }) {
  const home = useEditable("home", initial);

  return (
    <>
      <HeroSection
        slides={home.heroSlides}
        learnMoreHref={home.heroLearnMoreHref}
        learnMoreLabel={home.heroLearnMoreLabel}
      />

      <PathwayStrip items={home.pathwayItems} />

      <section className="band band--white">
        <div className="wrap why-choose-wrap">
          <h2 className="why-choose-title">{home.whyTitle}</h2>
          <div className="why-choose">
            <div className="why-choose-visual">
              <Image
                src={home.whyImage}
                alt={home.whyImageAlt}
                width={1024}
                height={641}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
            <div className="why-choose-copy">
              <h3 className="why-choose-quote">{home.whyQuote}</h3>
              <p>{home.whyBody}</p>
            </div>
          </div>
        </div>
      </section>

      <CurriculumMosaic
        title={home.curriculumTitle}
        kicker={home.curriculumKicker}
        stages={home.curriculum}
      />

      <HomeBelowFold home={home} />
    </>
  );
}
