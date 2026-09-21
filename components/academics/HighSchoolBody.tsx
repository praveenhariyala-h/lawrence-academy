import type { CSSProperties } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import FacilitySlider from "@/components/about/FacilitySlider";
import PhotoCarousel from "@/components/about/PhotoCarousel";
import HighSchoolIcon from "@/components/academics/HighSchoolIcon";
import PageBanner from "@/components/PageBanner";
import type { HighSchoolContent } from "@/lib/highSchool";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function HighSchoolBody({ content }: { content: HighSchoolContent }) {
  const { hero, approach, curriculum, beyond, moments } = content;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        title={hero.title}
        lede={hero.lede}
        ledeItalic
        className="page-banner-title hs-hero"
      />

      <section className="about-band">
        <div className="wrap pr-approach">
          <div className="hs-approach-media about-reveal">
            <FacilitySlider
              photos={approach.photos}
              className="kg-slider"
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="pr-approach-copy hs-approach-copy about-reveal" style={delay(1)}>
            <p className="about-kicker hs-kicker">{approach.kicker}</p>
            <h2 className="kg-title">{approach.title}</h2>
            <p>{approach.body}</p>
            <div className="hs-approach-values">
              {approach.values.map((value) => (
                <article className="hs-approach-value" key={value.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <HighSchoolIcon name={value.icon} />
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
        <div className="wrap">
          <header className="hs-curriculum-head about-reveal">
            <p className="about-kicker hs-kicker">{curriculum.kicker}</p>
            <h2 className="kg-title">{curriculum.title}</h2>
          </header>
          <div className="hs-curriculum-layout">
            <article className="hs-grade8 about-reveal">
              <h3>
                {curriculum.grade8.title}
                <span>{curriculum.grade8.subtitle}</span>
              </h3>
              <ul className="hs-grade8-subjects">
                {curriculum.grade8.subjects.map((subject) => (
                  <li key={subject.title}>
                    <span className="kg-icon kg-icon--sm" aria-hidden="true">
                      <HighSchoolIcon name={subject.icon} />
                    </span>
                    <span>{subject.title}</span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="hs-grade910 about-reveal" style={delay(1)}>
              <header className="hs-grade910-head">
                <h3>
                  {curriculum.grade910.title}
                  <span>{curriculum.grade910.subtitle}</span>
                </h3>
                <p className="hs-grade910-lede">{curriculum.grade910.lede}</p>
              </header>
              <div className="hs-groups">
                {curriculum.grade910.groups.map((group) => (
                  <article className={`hs-group hs-group--${group.tone}`} key={group.title}>
                    <h4>{group.title}</h4>
                    <p>
                      {group.subtitle}
                      {"note" in group && group.note ? <span>{group.note}</span> : null}
                    </p>
                    <ul>
                      {group.subjects.map((subject) => (
                        <li key={subject.title}>
                          <span className="kg-icon kg-icon--sm" aria-hidden="true">
                            <HighSchoolIcon name={subject.icon} />
                          </span>
                          <span>
                            {subject.title}
                            {"detail" in subject && subject.detail ? <small>{subject.detail}</small> : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap hs-beyond-split">
          <div className="hs-beyond-media about-reveal">
            <FacilitySlider
              photos={beyond.photos}
              className="kg-slider"
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="hs-beyond-copy about-reveal" style={delay(1)}>
            <p className="about-kicker hs-kicker">{beyond.kicker}</p>
            <h2 className="kg-title">{beyond.title}</h2>
            <p>{beyond.body}</p>
            <div className="hs-beyond-values">
              {beyond.values.map((value) => (
                <article className="hs-beyond-value" key={value.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <HighSchoolIcon name={value.icon} />
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
        <div className="wrap">
          <header className="kg-head hs-moments-head about-reveal">
            <p className="about-kicker hs-kicker">{moments.kicker}</p>
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
