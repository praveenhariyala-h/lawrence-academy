"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import AboutReveal from "@/components/about/AboutReveal";
import PhotoCarousel from "@/components/about/PhotoCarousel";
import PrimaryIcon from "@/components/academics/PrimaryIcon";
import PageBanner from "@/components/PageBanner";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";
import type { PrimaryContent } from "@/lib/primary";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function PrimaryBody({ content: initial }: { content: PrimaryContent }) {
  const content = useEditable("primary", initial);
  const { hero, approach, curriculum, beyond, moments } = content;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        title={hero.title}
        grades={hero.grades}
        className="page-banner-title"
        fields={{
          image: tinaMark(hero, "image"),
          kicker: tinaMark(hero, "kicker"),
          title: tinaMark(hero, "title"),
          grades: tinaMark(hero, "grades")
        }}
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
                data-tina-field={tinaMark(approach, "image")}
              />
            </div>
          </div>
          <div className="pr-approach-copy about-reveal" style={delay(1)}>
            <p className="about-kicker" data-tina-field={tinaMark(approach, "kicker")}>
              {approach.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(approach, "title")}>
              {approach.title}
            </h2>
            <p data-tina-field={tinaMark(approach, "body")}>{approach.body}</p>
            <div className="pr-approach-values">
              {approach.values.map((value) => (
                <article className="pr-value-card" key={value.title}>
                  <span className="kg-icon kg-icon--sm" aria-hidden="true">
                    <PrimaryIcon name={value.icon} />
                  </span>
                  <h3 data-tina-field={tinaMark(value, "title")}>{value.title}</h3>
                  <p data-tina-field={tinaMark(value, "text")}>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap pr-curriculum-layout">
          <div className="pr-curriculum-copy about-reveal">
            <p className="about-kicker" data-tina-field={tinaMark(curriculum, "kicker")}>
              {curriculum.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(curriculum, "title")}>
              {curriculum.title}
            </h2>
            <p data-tina-field={tinaMark(curriculum, "body")}>{curriculum.body}</p>
          </div>
          <div className="pr-curriculum-panel about-reveal" style={delay(1)}>
            <div className="pr-subject-grid">
              {curriculum.subjects.map((subject) => (
                <article className="pr-subject-card" key={subject.title}>
                  <h3 data-tina-field={tinaMark(subject, "title")}>{subject.title}</h3>
                  <p data-tina-field={tinaMark(subject, "text")}>{subject.text}</p>
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
                  data-tina-field={tinaMark(curriculum.karadi, "logo")}
                />
              </div>
              <div>
                <h3 data-tina-field={tinaMark(curriculum.karadi, "title")}>{curriculum.karadi.title}</h3>
                <p data-tina-field={tinaMark(curriculum.karadi, "body")}>{curriculum.karadi.body}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <p className="about-kicker" data-tina-field={tinaMark(beyond, "kicker")}>
              {beyond.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(beyond, "title")}>
              {beyond.title}
            </h2>
            <p data-tina-field={tinaMark(beyond, "body")}>{beyond.body}</p>
          </header>
          <div className="pr-beyond-grid">
            {beyond.items.map((item, index) => (
              <article className="pr-beyond-item about-reveal" style={delay(index)} key={item.title}>
                <span className="kg-icon kg-icon--sm" aria-hidden="true">
                  <PrimaryIcon name={item.icon} />
                </span>
                <div>
                  <h3 data-tina-field={tinaMark(item, "title")}>{item.title}</h3>
                  <p data-tina-field={tinaMark(item, "text")}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <p className="about-kicker" data-tina-field={tinaMark(moments, "kicker")}>
              {moments.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(moments, "title")}>
              {moments.title}
            </h2>
          </header>
          <div className="about-reveal">
            <PhotoCarousel photos={moments.photos} perView={4} />
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}
