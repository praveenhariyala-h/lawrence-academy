"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import AboutReveal from "@/components/about/AboutReveal";
import FacilitySlider from "@/components/about/FacilitySlider";
import BeyondIcon from "@/components/beyond/BeyondIcon";
import PageBanner from "@/components/PageBanner";
import { useEditable } from "@/components/tina/EditablePage";
import type { BeyondContent } from "@/lib/beyond";

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

export default function BeyondBody({ content: initial }: { content: BeyondContent }) {
  const content = useEditable("beyondBooks", initial);
  const { hero, sports, creative, communication, stem, programmes, trips } = content;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        title={hero.title}
        lede={hero.lede}
        fit="cover"
        className="page-banner-title"
      />

      <section className="about-band">
        <div className="wrap bb-split bb-split--sports">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title">{sports.title}</h2>
            <p className="kg-lede">{sports.lede}</p>
            {sports.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="bb-sports-media about-reveal" style={delay(1)}>
            <FacilitySlider
              photos={sports.photos}
              className="kg-slider"
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title">{creative.title}</h2>
            <p>{creative.lede}</p>
          </header>
          <div className="bb-creative-rows">
            <div className="bb-split bb-split--creative">
              <div className="bb-creative-media about-reveal">
                <FacilitySlider
                  photos={creative.photos.slice(0, 4)}
                  className="kg-slider"
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>
              <div className="bb-articles about-reveal" style={delay(1)}>
                {creative.items.slice(0, 2).map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="bb-split bb-split--creative">
              <div className="bb-creative-media about-reveal">
                <FacilitySlider
                  photos={creative.photos.slice(4)}
                  className="kg-slider"
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>
              <div className="bb-articles about-reveal" style={delay(1)}>
                {creative.items.slice(2).map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
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
            <div className="bb-comms-media about-reveal">
              <FacilitySlider
                photos={communication.photos}
                className="kg-slider"
                sizes="(max-width: 900px) 100vw, 52vw"
              />
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

      <section className="about-band about-band--soft">
        <div className="wrap">
          <div className="bb-programmes">
            {programmes.map((item, index) => (
              <article
                className={`bb-programme bb-programme--${item.tone} about-reveal`}
                style={delay(index)}
                key={item.title}
              >
                <h2 className="kg-title">{item.title}</h2>
                {"lede" in item && item.lede ? <p className="kg-lede">{item.lede}</p> : null}
                <p>{item.body}</p>
                <div className="kg-photo bb-programme-photo">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 900px) 100vw, 46vw" />
                </div>
              </article>
            ))}
          </div>
          <div className="bb-split bb-split--trips">
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
        </div>
      </section>
    </AboutReveal>
  );
}
