import type { CSSProperties } from "react";
import Image from "next/image";
import AboutReveal from "@/components/about/AboutReveal";
import PhotoCarousel from "@/components/about/PhotoCarousel";
import PrimaryIcon from "@/components/academics/PrimaryIcon";
import PageBanner from "@/components/PageBanner";
import { primary } from "@/lib/primary";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function PrimaryBody() {
  const { hero, approach, curriculum, beyond, moments } = primary;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        title={hero.title}
        grades={hero.grades}
        className="page-banner-title"
      />

      <section className="about-band">
        <div className="wrap pr-approach">
          <div className="about-reveal">
            <div className="kg-photo">
              <Image
                src={approach.image}
                alt={approach.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
          </div>
          <div className="pr-approach-copy about-reveal" style={delay(1)}>
            <p className="about-kicker">{approach.kicker}</p>
            <h2 className="kg-title">{approach.title}</h2>
            <p>{approach.body}</p>
            <div className="pr-approach-values">
              {approach.values.map((value) => (
                <article className="pr-value-card" key={value.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <PrimaryIcon name={value.icon} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap pr-curriculum-layout">
          <div className="pr-curriculum-copy about-reveal">
            <p className="about-kicker">{curriculum.kicker}</p>
            <h2 className="kg-title">{curriculum.title}</h2>
            <p>{curriculum.body}</p>
          </div>
          <div className="pr-curriculum-panel about-reveal" style={delay(1)}>
            <div className="pr-subject-grid">
              {curriculum.subjects.map((subject) => (
                <article className="pr-subject-card" key={subject.title}>
                  <h3>{subject.title}</h3>
                  <p>{subject.text}</p>
                </article>
              ))}
            </div>
            <article className="pr-karadi">
              <div className="pr-karadi-logo">
                <Image
                  src={curriculum.karadi.logo}
                  alt={curriculum.karadi.logoAlt}
                  width={240}
                  height={140}
                  sizes="140px"
                />
              </div>
              <div>
                <h3>{curriculum.karadi.title}</h3>
                <p>{curriculum.karadi.body}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <p className="about-kicker">{beyond.kicker}</p>
            <h2 className="kg-title">{beyond.title}</h2>
            <p>{beyond.body}</p>
          </header>
          <div className="pr-beyond-grid">
            {beyond.items.map((item, index) => (
              <article className="pr-beyond-item about-reveal" style={delay(index)} key={item.title}>
                <span className="kg-icon kg-icon--sm" aria-hidden="true">
                  <PrimaryIcon name={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <p className="about-kicker">{moments.kicker}</p>
            <h2 className="kg-title">{moments.title}</h2>
          </header>
          <div className="about-reveal">
            <PhotoCarousel photos={moments.photos} perView={4} />
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}
