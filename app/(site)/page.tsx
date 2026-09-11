import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import HomeBelowFold from "@/components/home/HomeBelowFold";
import PathwayStrip from "@/components/home/PathwayStrip";
import CurriculumMosaic from "@/components/home/CurriculumMosaic";
import RichText from "@/components/RichText";
import { getHomeContent } from "@/lib/home";

export default async function HomePage() {
  const home = await getHomeContent();

  return (
    <>
      <HeroSection
        slides={home.heroSlides}
        learnMoreHref={home.heroLearnMoreHref}
        learnMoreLabel={home.heroLearnMoreLabel}
      />

      <PathwayStrip items={home.pathwayItems} />

      <section className="band band--white">
        <div className="wrap legacy">
          <div className="legacy-photo">
            <Image
              src={home.legacyPhoto}
              alt={home.legacyPhotoAlt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="section-title">{home.legacyTitle}</h2>
            <RichText text={home.legacyBody} />
            <p className="legacy-tagline">{home.legacyTagline}</p>
          </div>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap why-choose-wrap">
          <h2 className="why-choose-title">{home.whyTitle}</h2>
          <div className="why-choose">
            <div className="why-choose-visual">
              <Image
                src={home.whyImage}
                alt={home.whyImageAlt}
                width={1024}
                height={642}
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

      <CurriculumMosaic title={home.curriculumTitle} stages={home.curriculum} />

      <HomeBelowFold home={home} />
    </>
  );
}
