import type { CSSProperties } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import FacilityRow from "@/components/about/FacilityRow";
import PageBanner from "@/components/PageBanner";
import { campusHero, campusSpaces } from "@/lib/campus";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function CampusBody() {
  return (
    <AboutReveal>
      <PageBanner src={campusHero.image} alt={campusHero.imageAlt} title={campusHero.title} showTitle className="page-banner-title" />

      {campusSpaces.map((space, index) => (
        <section className="facility-band" key={space.id} id={space.id}>
          <div className="wrap">
            <FacilityRow
              title={space.title}
              tagline={space.tagline}
              body={space.body}
              reverse={space.reverse}
              image={space.image}
              gallery={space.gallery}
              features={space.features}
              delay={delay(index % 2)}
            />
          </div>
        </section>
      ))}
    </AboutReveal>
  );
}
