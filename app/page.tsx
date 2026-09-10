import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import HomeBelowFold from "@/components/home/HomeBelowFold";
import PathwayStrip from "@/components/home/PathwayStrip";
import CurriculumMosaic from "@/components/home/CurriculumMosaic";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <PathwayStrip />

      <section className="band band--white">
        <div className="wrap legacy">
          <div className="legacy-photo">
            <Image
              src="/images/hero-campus.png"
              alt="Lawrence High School campus, HSR Layout"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="section-title">Lawrence Legacy</h2>
            <p>
              <strong>Lawrence High School</strong> carries a legacy of educational excellence that
              began in <strong>1991 with our Koramangala branch</strong> and grew with the
              establishment of our <strong>HSR ICSE branch in 2002</strong>.
            </p>
            <p>
              Today, Lawrence is a vibrant learning community of{" "}
              <strong>over 2,500 students and 103+ dedicated teachers</strong>, committed to
              providing an education that nurtures{" "}
              <strong>knowledge, character and confidence</strong>.
            </p>
            <p>
              With a strong foundation built on <strong>values and holistic development</strong>,
              we continue to prepare young minds to learn, grow and contribute meaningfully to
              the world.
            </p>
            <p className="legacy-tagline">Our Legacy. Our Values. Their Future.</p>
          </div>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap why-choose-wrap">
          <h2 className="why-choose-title">What Makes the School Special?</h2>
          <div className="why-choose">
            <div className="why-choose-visual">
              <Image
                src="/images/why-lawrence-v2.png"
                alt="Why choose Lawrence High School: academic excellence, future ready learning, beyond academics, character and values, confidence and leadership, holistic growth, and a safe caring campus"
                width={1024}
                height={642}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
            <div className="why-choose-copy">
              <h3 className="why-choose-quote">
                “FROM CURIOUS MINDS TO CONFIDENT FUTURES.”
              </h3>
              <p>
                At Lawrence High, every experience is an opportunity to discover, create, lead and
                grow. We help students transform their potential into purpose and their dreams into
                achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurriculumMosaic />

      <HomeBelowFold />
    </>
  );
}
