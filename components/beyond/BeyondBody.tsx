"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import AboutReveal from "@/components/about/AboutReveal";
import FacilityIcon from "@/components/FacilityIcon";
import FacilitySlider from "@/components/about/FacilitySlider";
import BeyondIcon from "@/components/beyond/BeyondIcon";
import PageBanner from "@/components/PageBanner";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";
import type { BeyondContent } from "@/lib/beyond";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

function CaptionPhoto({
  src,
  alt,
  caption,
  sizes,
  className = "",
  source
}: {
  src: string;
  alt: string;
  caption: string;
  sizes: string;
  className?: string;
  source?: object;
}) {
  return (
    <figure className={`bb-shot ${className}`.trim()}>
      <div className="bb-shot-photo">
        <Image src={src} alt={alt} fill sizes={sizes} data-tina-field={tinaMark(source, "src")} />
      </div>
      <figcaption data-tina-field={tinaMark(source, "caption")}>{caption}</figcaption>
    </figure>
  );
}

export default function BeyondBody({ content: initial }: { content: BeyondContent }) {
  const content = useEditable("beyondBooks", initial);
  const { hero, sports, creative, communication, stem, programmes, trips, transportTeam } = content;

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
        fields={{
          image: tinaMark(hero, "image"),
          kicker: tinaMark(hero, "kicker"),
          title: tinaMark(hero, "title"),
          lede: tinaMark(hero, "lede")
        }}
      />

      <section className="about-band">
        <div className="wrap bb-split bb-split--sports">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title" data-tina-field={tinaMark(sports, "title")}>
              {sports.title}
            </h2>
            <p className="kg-lede" data-tina-field={tinaMark(sports, "lede")}>
              {sports.lede}
            </p>
            {sports.body.map((paragraph, index) => (
              <p key={paragraph.slice(0, 24)} data-tina-field={tinaMark(sports, "body", index)}>
                {paragraph}
              </p>
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
            <h2 className="kg-title" data-tina-field={tinaMark(creative, "title")}>
              {creative.title}
            </h2>
            <p data-tina-field={tinaMark(creative, "lede")}>{creative.lede}</p>
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
                    <h3 data-tina-field={tinaMark(item, "title")}>{item.title}</h3>
                    <p data-tina-field={tinaMark(item, "body")}>{item.body}</p>
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
                    <h3 data-tina-field={tinaMark(item, "title")}>{item.title}</h3>
                    <p data-tina-field={tinaMark(item, "body")}>{item.body}</p>
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
            <h2 className="kg-title" data-tina-field={tinaMark(communication, "title")}>
              {communication.title}
            </h2>
            <p data-tina-field={tinaMark(communication, "lede")}>{communication.lede}</p>
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
                    <h3 data-tina-field={tinaMark(item, "title")}>{item.title}</h3>
                    <p data-tina-field={tinaMark(item, "body")}>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft bb-stem">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <h2 className="kg-title" data-tina-field={tinaMark(stem, "title")}>
              {stem.title}
            </h2>
            <p className="kg-lede" data-tina-field={tinaMark(stem, "lede")}>
              {stem.lede}
            </p>
            <p data-tina-field={tinaMark(stem, "kicker")}>{stem.kicker}</p>
            <p data-tina-field={tinaMark(stem, "body")}>{stem.body}</p>
          </header>
          <div className="bb-tracks">
            {stem.tracks.map((track, index) => (
              <article className="bb-track about-reveal" style={delay(index)} key={track.title}>
                <h3 data-tina-field={tinaMark(track, "title")}>{track.title}</h3>
                <ul>
                  {track.steps.map((step) => (
                    <li key={step.grades}>
                      <strong data-tina-field={tinaMark(step, "grades")}>{step.grades}:</strong>{" "}
                      <span data-tina-field={tinaMark(step, "text")}>{step.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="bb-shots bb-shots--3 about-reveal">
            {stem.photos.map((photo) => (
              <CaptionPhoto key={photo.caption} {...photo} sizes="(max-width: 900px) 50vw, 30vw" source={photo} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-band bb-programmes-band">
        <div className="wrap">
          <div className="bb-programmes">
            {programmes.map((item, index) => (
              <article
                className={`bb-programme bb-programme--${item.tone} about-reveal`}
                style={delay(index)}
                key={item.title}
              >
                <div className="bb-programme-copy">
                  <h2 className="kg-title" data-tina-field={tinaMark(item, "title")}>
                    {item.title}
                  </h2>
                  {"lede" in item && item.lede ? (
                    <p className="kg-lede" data-tina-field={tinaMark(item, "lede")}>
                      {item.lede}
                    </p>
                  ) : null}
                  <p data-tina-field={tinaMark(item, "body")}>{item.body}</p>
                </div>
                <div className="kg-photo bb-programme-photo">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 52vw"
                    data-tina-field={tinaMark(item, "image")}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft bb-trips">
        <div className="wrap bb-split bb-split--trips">
          <div className="kg-copy about-reveal">
            <h2 className="kg-title" data-tina-field={tinaMark(trips, "title")}>
              {trips.title}
            </h2>
            <p className="kg-lede" data-tina-field={tinaMark(trips, "lede")}>
              {trips.lede}
            </p>
            <p data-tina-field={tinaMark(trips, "body")}>{trips.body}</p>
          </div>
          <div className="bb-shots bb-shots--3 about-reveal" style={delay(1)}>
            {trips.photos.map((photo) => (
              <CaptionPhoto key={photo.caption} {...photo} sizes="(max-width: 900px) 50vw, 22vw" source={photo} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap facility-team">
          <h2 className="about-reveal">
            <span className="facility-lead-icon" aria-hidden="true">
              <FacilityIcon name="transport" />
            </span>
            <span data-tina-field={tinaMark(transportTeam, "title")}>{transportTeam.title}</span>
          </h2>
          <div className="facility-team-photos facility-team-photos--2 facility-team-photos--fit about-reveal" style={delay(1)}>
            {transportTeam.photos.map((photo) => (
              <div className="facility-team-photo" key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 700px) 46vw, 34vw"
                  data-tina-field={tinaMark(photo, "src")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}
