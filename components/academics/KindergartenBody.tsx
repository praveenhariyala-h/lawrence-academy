import type { CSSProperties } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import FacilitySlider from "@/components/about/FacilitySlider";
import PhotoCarousel from "@/components/about/PhotoCarousel";
import KindergartenIcon from "@/components/academics/KindergartenIcon";
import PageBanner from "@/components/PageBanner";
import { kindergarten } from "@/lib/kindergarten";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function KindergartenBody() {
  const { hero, programme, curriculum, development, visible, families, moments } =
    kindergarten;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        title={hero.title}
        pills={hero.pills}
        className="page-banner-title"
      />

      <section className="about-band">
        <div className="wrap kg-split">
          <div className="kg-copy about-reveal">
            <p className="about-kicker">{programme.kicker}</p>
            <h2 className="kg-title">{programme.title}</h2>
            <p>{programme.body}</p>
          </div>
          <div className="about-reveal" style={delay(1)}>
            <FacilitySlider photos={programme.photos} className="kg-slider" />
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap kg-curriculum-layout">
          <div className="kg-curriculum-copy about-reveal">
            <p className="about-kicker">{curriculum.kicker}</p>
            <h2 className="kg-title">{curriculum.title}</h2>
          </div>
          <div className="kg-curriculum">
            {curriculum.stages.map((stage, index) => (
              <article className="kg-curriculum-card about-reveal" style={delay(index)} key={stage.title}>
                <h3>{stage.title}</h3>
                <span className="kg-age">{stage.age}</span>
                <p>{stage.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="kg-head about-reveal">
            <p className="about-kicker">{development.kicker}</p>
            <h2 className="kg-title">{development.title}</h2>
          </header>
          <div className="kg-develop">
            {development.items.map((item, index) => (
              <div className="kg-develop-item about-reveal" style={delay(index)} key={item.title}>
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
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap kg-split">
          <div className="kg-copy about-reveal">
            <p className="about-kicker">{visible.kicker}</p>
            <h2 className="kg-title">{visible.title}</h2>
            <p>{visible.body}</p>
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
            <p className="about-kicker">{families.kicker}</p>
            <h2 className="kg-title">{families.title}</h2>
            <p>{families.body}</p>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft" id="moments">
        <div className="wrap">
          <header className="kg-moments-head about-reveal">
            <h2 className="kg-title">{moments.title}</h2>
          </header>
          <div className="about-reveal">
            <PhotoCarousel photos={moments.photos} />
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}
