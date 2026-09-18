import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutReveal from "@/components/about/AboutReveal";
import KindergartenIcon from "@/components/academics/KindergartenIcon";
import PageBanner from "@/components/PageBanner";
import { kindergarten } from "@/lib/kindergarten";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

function Photo({
  src,
  alt,
  sizes,
  priority,
  className = ""
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`kg-photo ${className}`.trim()}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}

export default function KindergartenBody() {
  const { hero, programme, curriculum, development, visible, families, moments, cta } =
    kindergarten;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        title={hero.title}
        grades={hero.levels}
      />

      <section className="about-band">
        <div className="wrap kg-split">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title">{programme.title}</h2>
            <p>{programme.body}</p>
          </div>
          <div className="about-reveal" style={delay(1)}>
            <Photo src={programme.image} alt={programme.imageAlt} sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{curriculum.title}</h2>
            <p>{curriculum.lede}</p>
          </header>
          <div className="kg-curriculum">
            {curriculum.stages.map((stage, index) => (
              <article className="kg-curriculum-card about-reveal" style={delay(index)} key={stage.title}>
                <span className="kg-icon" aria-hidden="true">
                  <KindergartenIcon name={stage.icon} />
                </span>
                <h3>{stage.title}</h3>
                <span className="kg-age">{stage.age}</span>
                <p>{stage.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap kg-split">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title">{development.title}</h2>
            <p className="kg-lede">{development.lede}</p>
            <div className="kg-develop">
              {development.items.map((item) => (
                <div className="kg-develop-item" key={item.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <KindergartenIcon name={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-reveal" style={delay(1)}>
            <Photo
              src={development.image}
              alt={development.imageAlt}
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap kg-split is-reverse">
          <div className="about-reveal">
            <Photo src={visible.image} alt={visible.imageAlt} sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <div className="kg-copy about-reveal" style={delay(1)}>
            <h2 className="kg-title">{visible.title}</h2>
            {visible.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{families.title}</h2>
            <p>{families.lede}</p>
          </header>
          <div className="kg-families">
            {families.events.map((event, index) => (
              <article className="kg-family about-reveal" style={delay(index)} key={event.title}>
                <Photo src={event.image} alt={event.imageAlt} sizes="(max-width: 900px) 100vw, 30vw" />
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
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

      <section className="campus-cta kg-cta">
        <div className="wrap campus-cta-row about-reveal">
          <div className="kg-cta-copy">
            <h2>{cta.title}</h2>
            <p>{cta.lede}</p>
          </div>
          <Link className="btn btn--gold" href={cta.href}>
            {cta.label}
          </Link>
        </div>
      </section>
    </AboutReveal>
  );
}
