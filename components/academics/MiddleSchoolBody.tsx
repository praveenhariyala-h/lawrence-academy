import type { CSSProperties } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import FacilitySlider from "@/components/about/FacilitySlider";
import PhotoCarousel from "@/components/about/PhotoCarousel";
import MiddleSchoolIcon from "@/components/academics/MiddleSchoolIcon";
import PageBanner from "@/components/PageBanner";
import { middleSchool } from "@/lib/middleSchool";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function MiddleSchoolBody() {
  const { hero, approach, curriculum, beyond, moments } = middleSchool;

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
          <div className="ms-approach-media about-reveal">
            <FacilitySlider
              photos={approach.photos}
              className="kg-slider"
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="pr-approach-copy about-reveal" style={delay(1)}>
            <p className="about-kicker">{approach.kicker}</p>
            <h2 className="kg-title">{approach.title}</h2>
            <p>{approach.body}</p>
            <div className="pr-approach-values ms-news-grid">
              {approach.values.map((value) => (
                <article className="pr-value-card ms-news-card" key={value.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <MiddleSchoolIcon name={value.icon} />
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
          <header className="ms-curriculum-head about-reveal">
            <p className="about-kicker ms-curriculum-kicker">{curriculum.kicker}</p>
            <h2 className="kg-title">{curriculum.title}</h2>
            <p>{curriculum.body}</p>
          </header>
          <div className="ms-grade-groups">
            <article className="ms-grade-panel ms-grade-panel--blue about-reveal">
              <h3>{curriculum.grade5.title}</h3>
              <ul className="ms-subjects">
                {curriculum.grade5.subjects.map((subject) => (
                  <li key={subject.title}>
                    <span className="kg-icon kg-icon--sm" aria-hidden="true">
                      <MiddleSchoolIcon name={subject.icon} />
                    </span>
                    <span>{subject.title}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="ms-grade-panel ms-grade-panel--gold about-reveal" style={delay(1)}>
              <h3>{curriculum.grade67.title}</h3>
              <ul className="ms-subjects">
                {curriculum.grade67.subjects.map((subject) => (
                  <li key={subject.title}>
                    <span className="kg-icon kg-icon--sm" aria-hidden="true">
                      <MiddleSchoolIcon name={subject.icon} />
                    </span>
                    <span>{subject.title}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head ms-beyond-head about-reveal">
            <p className="about-kicker ms-curriculum-kicker">{beyond.kicker}</p>
            <h2 className="kg-title">{beyond.title}</h2>
            <p>{beyond.body}</p>
          </header>
          <div className="ms-beyond-grid">
            {beyond.items.map((item, index) => (
              <article className="ms-beyond-item about-reveal" style={delay(index)} key={item.title}>
                <span className="kg-icon" aria-hidden="true">
                  <MiddleSchoolIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                {item.text ? <p>{item.text}</p> : null}
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
            <p>{moments.lede}</p>
          </header>
          <div className="about-reveal">
            <PhotoCarousel photos={moments.photos} perView={4} />
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}
