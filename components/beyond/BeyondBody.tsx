import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutReveal from "@/components/about/AboutReveal";
import BeyondIcon from "@/components/beyond/BeyondIcon";
import { beyond } from "@/lib/beyond";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

function CaptionPhoto({
  src,
  alt,
  caption,
  sizes,
  className = ""
}: {
  src: string;
  alt: string;
  caption: string;
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`bb-shot ${className}`.trim()}>
      <div className="bb-shot-photo">
        <Image src={src} alt={alt} fill sizes={sizes} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function BeyondBody() {
  const { hero, sports, creative, communication, stem, programmes, trips, cta } = beyond;

  return (
    <AboutReveal>
      <section className="pr-hero">
        <div className="wrap pr-hero-grid">
          <div className="pr-hero-copy about-reveal">
            <span className="kicker">{hero.kicker}</span>
            <h1>{hero.title}</h1>
            <p className="lede">{hero.lede}</p>
          </div>
          <div className="pr-hero-photo about-reveal" style={delay(1)}>
            <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 54vw" />
            <p className="ms-hero-badge">{hero.badge}</p>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap bb-split">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title">{sports.title}</h2>
            <p className="kg-lede">{sports.lede}</p>
            {sports.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="bb-shots bb-shots--4 about-reveal" style={delay(1)}>
            {sports.photos.map((photo) => (
              <CaptionPhoto key={photo.caption} {...photo} sizes="(max-width: 900px) 50vw, 18vw" />
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{creative.title}</h2>
            <p>{creative.lede}</p>
          </header>
          <div className="bb-split">
            <div className="bb-shots bb-shots--3 about-reveal">
              {creative.photos.map((photo) => (
                <CaptionPhoto key={photo.caption} {...photo} sizes="(max-width: 900px) 50vw, 22vw" />
              ))}
            </div>
            <div className="bb-articles about-reveal" style={delay(1)}>
              {creative.items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{communication.title}</h2>
            <p>{communication.lede}</p>
          </header>
          <div className="bb-comms">
            <div className="bb-shots bb-shots--3 about-reveal">
              {communication.photos.map((photo) => (
                <CaptionPhoto
                  key={photo.caption}
                  {...photo}
                  sizes="(max-width: 900px) 50vw, 22vw"
                  className="bb-shot--portrait"
                />
              ))}
            </div>
            <div className="bb-comms-items about-reveal" style={delay(1)}>
              {communication.items.map((item) => (
                <article className="bb-comms-item" key={item.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <BeyondIcon name={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{stem.title}</h2>
            <p className="kg-lede">{stem.lede}</p>
            <p>{stem.kicker}</p>
            <p>{stem.body}</p>
          </header>
          <div className="bb-tracks">
            {stem.tracks.map((track, index) => (
              <article className="bb-track about-reveal" style={delay(index)} key={track.title}>
                <h3>{track.title}</h3>
                <ul>
                  {track.steps.map((step) => (
                    <li key={step.grades}>
                      <strong>{step.grades}:</strong> {step.text}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="bb-shots bb-shots--3 about-reveal">
            {stem.photos.map((photo) => (
              <CaptionPhoto key={photo.caption} {...photo} sizes="(max-width: 900px) 50vw, 30vw" />
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap bb-programmes">
          {programmes.map((item, index) => (
            <article className="bb-programme about-reveal" style={delay(index)} key={item.title}>
              <h2 className="kg-title">{item.title}</h2>
              {"lede" in item && item.lede ? <p className="kg-lede">{item.lede}</p> : null}
              <p>{item.body}</p>
              <div className="kg-photo bb-programme-photo">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 900px) 100vw, 46vw" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap bb-split">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title">{trips.title}</h2>
            <p className="kg-lede">{trips.lede}</p>
            <p>{trips.body}</p>
          </div>
          <div className="bb-shots bb-shots--3 about-reveal" style={delay(1)}>
            {trips.photos.map((photo) => (
              <CaptionPhoto key={photo.caption} {...photo} sizes="(max-width: 900px) 50vw, 22vw" />
            ))}
          </div>
        </div>
      </section>

      <section className="campus-cta kg-cta pr-cta bb-cta">
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
