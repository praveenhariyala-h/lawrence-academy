"use client";

import type { CSSProperties } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import FacilitySlider from "@/components/about/FacilitySlider";
import PhotoCarousel from "@/components/about/PhotoCarousel";
import KindergartenIcon from "@/components/academics/KindergartenIcon";
import PageBanner from "@/components/PageBanner";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";
import type { KindergartenContent } from "@/lib/kindergarten";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function KindergartenBody({ content: initial }: { content: KindergartenContent }) {
  const content = useEditable("kindergarten", initial);
  const { hero, programme, curriculum, development, visible, families, moments } = content;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        grades={hero.grades}
        title={hero.title}
        lede={hero.lede}
        ledeItalic
        className="page-banner-title kg-hero"
        fields={{
          image: tinaMark(hero, "image"),
          kicker: tinaMark(hero, "kicker"),
          grades: tinaMark(hero, "grades"),
          title: tinaMark(hero, "title"),
          lede: tinaMark(hero, "lede")
        }}
      />

      <section className="about-band">
        <div className="wrap kg-split">
          <div className="kg-copy about-reveal">
            <p className="about-kicker" data-tina-field={tinaMark(programme, "kicker")}>
              {programme.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(programme, "title")}>
              {programme.title}
            </h2>
            <p data-tina-field={tinaMark(programme, "body")}>{programme.body}</p>
          </div>
          <div className="about-reveal" style={delay(1)}>
            <FacilitySlider photos={programme.photos} className="kg-slider" />
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap kg-curriculum-layout">
          <div className="kg-curriculum-copy about-reveal">
            <p className="about-kicker" data-tina-field={tinaMark(curriculum, "kicker")}>
              {curriculum.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(curriculum, "title")}>
              {curriculum.title}
            </h2>
          </div>
          <div className="kg-curriculum">
            {curriculum.stages.map((stage, index) => (
              <article className="kg-curriculum-card about-reveal" style={delay(index)} key={stage.title}>
                <h3 data-tina-field={tinaMark(stage, "title")}>{stage.title}</h3>
                <span className="kg-age" data-tina-field={tinaMark(stage, "age")}>
                  {stage.age}
                </span>
                <p data-tina-field={tinaMark(stage, "body")}>{stage.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <p className="about-kicker" data-tina-field={tinaMark(development, "kicker")}>
              {development.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(development, "title")}>
              {development.title}
            </h2>
          </header>
          <div className="kg-develop">
            {development.items.map((item, index) => (
              <div className="kg-develop-item about-reveal" style={delay(index)} key={item.title}>
                <span className="kg-icon kg-icon--sm" aria-hidden="true">
                  <KindergartenIcon name={item.icon} />
                </span>
                <div>
                  <h3 data-tina-field={tinaMark(item, "title")}>{item.title}</h3>
                  <p data-tina-field={tinaMark(item, "text")}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap kg-split">
          <div className="kg-copy about-reveal">
            <p className="about-kicker" data-tina-field={tinaMark(visible, "kicker")}>
              {visible.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(visible, "title")}>
              {visible.title}
            </h2>
            <p data-tina-field={tinaMark(visible, "body")}>{visible.body}</p>
          </div>
          <div className="about-reveal" style={delay(1)}>
            <FacilitySlider photos={visible.photos} className="kg-slider" />
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap kg-split is-reverse">
          <div className="about-reveal">
            <FacilitySlider photos={families.photos} className="kg-slider" />
          </div>
          <div className="kg-copy about-reveal" style={delay(1)}>
            <p className="about-kicker" data-tina-field={tinaMark(families, "kicker")}>
              {families.kicker}
            </p>
            <h2 className="kg-title" data-tina-field={tinaMark(families, "title")}>
              {families.title}
            </h2>
            <p data-tina-field={tinaMark(families, "body")}>{families.body}</p>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft" id="moments">
        <div className="wrap">
          <header className="kg-moments-head about-reveal">
            <h2 className="kg-title" data-tina-field={tinaMark(moments, "title")}>
              {moments.title}
            </h2>
          </header>
          <div className="about-reveal">
            <PhotoCarousel photos={moments.photos} />
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}
