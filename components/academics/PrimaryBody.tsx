import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutReveal from "@/components/about/AboutReveal";
import PrimaryIcon from "@/components/academics/PrimaryIcon";
import { primary } from "@/lib/primary";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

function Photo({
  src,
  alt,
  sizes,
  className = ""
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`kg-photo ${className}`.trim()}>
      <Image src={src} alt={alt} fill sizes={sizes} />
    </div>
  );
}

export default function PrimaryBody() {
  const { hero, foundation, curriculum, explore, world, growth, moments, cta } = primary;

  return (
    <AboutReveal>
      <section className="pr-hero">
        <div className="wrap pr-hero-grid">
          <div className="pr-hero-copy about-reveal">
            <span className="kicker">{hero.kicker}</span>
            <p className="pr-hero-grades">{hero.grades}</p>
            <h1>{hero.title}</h1>
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
            <p>{foundation.body}</p>
            <Photo
              src={foundation.image}
              alt={foundation.imageAlt}
              sizes="(max-width: 900px) 100vw, 48vw"
              className="pr-foundation-photo"
            />
          </div>
          <div className="pr-curriculum about-reveal" style={delay(1)}>
            <h2 className="kg-title">{curriculum.title}</h2>
            <p className="kg-lede">{curriculum.lede}</p>
            <p>{curriculum.body}</p>
            <ul className="ms-subjects pr-curriculum-subjects">
              {curriculum.subjects.map((subject) => (
                <li key={subject.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <PrimaryIcon name={subject.icon} />
                  </span>
                  <span>{subject.title}</span>
                </li>
              ))}
            </ul>
            <p className="pr-note">{curriculum.note}</p>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap kg-split">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title">{explore.title}</h2>
            <p className="kg-lede">{explore.lede}</p>
            <div className="pr-activities">
              {explore.activities.map((item) => (
                <div className="pr-activity" key={item.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <PrimaryIcon name={item.icon} />
                  </span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-reveal" style={delay(1)}>
            <Photo src={explore.image} alt={explore.imageAlt} sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap kg-split is-reverse">
          <div className="about-reveal">
            <Photo src={world.image} alt={world.imageAlt} sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <div className="kg-copy about-reveal" style={delay(1)}>
            <h2 className="kg-title">{world.title}</h2>
            <p className="kg-lede">{world.body}</p>
            <div className="pr-world">
              {world.items.map((item) => (
                <div className="kg-develop-item" key={item.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <PrimaryIcon name={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{growth.title}</h2>
            <p>{growth.lede}</p>
          </header>
          <div className="ms-skills">
            {growth.values.map((value, index) => (
              <div className="ms-skill about-reveal" style={delay(index)} key={value.title}>
                <span className="kg-icon" aria-hidden="true">
                  <PrimaryIcon name={value.icon} />
                </span>
                <span>{value.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{moments.title}</h2>
          </header>
          <div className="kg-moments">
            {moments.photos.map((photo, index) => (
              <div className="kg-moment about-reveal" style={delay(index)} key={photo.src}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="campus-cta kg-cta pr-cta">
        <div className="wrap campus-cta-row about-reveal">
          <div className="kg-cta-copy">
            <h2>{cta.title}</h2>
            <p>{cta.lede}</p>
            <Link className="btn btn--gold" href={cta.href}>
              {cta.label}
            </Link>
          </div>
          <p className="pr-cta-script">{cta.script}</p>
        </div>
      </section>
    </AboutReveal>
  );
}
