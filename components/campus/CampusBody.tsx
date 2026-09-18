import type { CSSProperties } from "react";
import Link from "next/link";
import AboutReveal from "@/components/about/AboutReveal";
import FacilityRow from "@/components/about/FacilityRow";
import PageBanner from "@/components/PageBanner";
import { campusCta, campusHero, campusSpaces } from "@/lib/campus";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function CampusBody() {
  return (
    <AboutReveal>
      <PageBanner src={campusHero.image} alt={campusHero.imageAlt} kicker={campusHero.kicker} title={campusHero.title} lede={campusHero.lede} />

      {campusSpaces.map((space, index) => (
        <section className="facility-band" key={space.id} id={space.id}>
          <div className="wrap">
            <FacilityRow
              title={space.title}
              tagline={space.tagline}
              body={space.body}
              reverse={space.reverse}
              overlay={space.overlay}
              image={space.image}
              gallery={space.gallery}
              features={space.features}
              delay={delay(index % 2)}
            />
          </div>
        </section>
      ))}

      <section className="campus-cta">
        <div className="wrap campus-cta-row about-reveal">
          <h2>{campusCta.title}</h2>
          <Link className="btn btn--gold" href={campusCta.href}>
            {campusCta.label}
          </Link>
        </div>
      </section>
    </AboutReveal>
  );
}
