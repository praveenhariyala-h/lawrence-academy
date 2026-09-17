import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutReveal from "@/components/about/AboutReveal";
import HighSchoolIcon from "@/components/academics/HighSchoolIcon";
import { highSchool } from "@/lib/highSchool";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function HighSchoolBody() {
  const { hero, foundation, curriculum, beyond, cta } = highSchool;

  return (
    <AboutReveal>
      <section className="pr-hero">
        <div className="wrap pr-hero-grid">
          <div className="pr-hero-copy about-reveal">
            <span className="kicker">{hero.kicker}</span>
            <h1>{hero.title}</h1>
            <p className="pr-hero-grades">{hero.grades}</p>
            <ul className="pr-hero-path">
              {hero.path.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pr-hero-photo about-reveal" style={delay(1)}>
            <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 54vw" />
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap pr-foundation">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title">{foundation.title}</h2>
            {foundation.body.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
          <div className="hs-books about-reveal" style={delay(1)} aria-hidden="true">
            <p className="hs-books-script">{foundation.script}</p>
            <ol className="hs-book-stack">
              {foundation.books.map((label, index) => (
                <li key={label} className={`hs-book hs-book--${index + 1}`}>
                  {label}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="hs-curriculum-head about-reveal">
            <div>
              <h2 className="kg-title">{curriculum.title}</h2>
              <p>{curriculum.lede}</p>
            </div>
            <p className="hs-curriculum-kicker">{curriculum.kicker}</p>
          </header>
          <div className="hs-groups">
            {curriculum.groups.map((group, index) => (
              <article
                className={`hs-group hs-group--${group.tone} about-reveal`}
                style={delay(index)}
                key={group.title}
              >
                <h3>{group.title}</h3>
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
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{beyond.title}</h2>
            <p>{beyond.lede}</p>
          </header>
          <div className="hs-beyond">
            {beyond.items.map((item, index) => (
              <div className="pr-activity about-reveal" style={delay(index)} key={item.title}>
                <span className="kg-icon kg-icon--sm" aria-hidden="true">
                  <HighSchoolIcon name={item.icon} />
                </span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-cta">
        <div className="hs-cta-photo about-reveal">
          <Image src={cta.image} alt={cta.imageAlt} fill sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="hs-cta-copy about-reveal" style={delay(1)}>
          <h2>{cta.title}</h2>
          <p>{cta.lede}</p>
          <div className="hs-cta-values">
            {cta.values.map((item) => (
              <div className="hs-cta-value" key={item.title}>
                <span className="kg-icon kg-icon--sm" aria-hidden="true">
                  <HighSchoolIcon name={item.icon} />
                </span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
          <Link className="btn btn--gold" href={cta.href}>
            {cta.label}
          </Link>
        </div>
      </section>
    </AboutReveal>
  );
}
