import type { CSSProperties } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import FacilityRow from "@/components/about/FacilityRow";
import PageBanner from "@/components/PageBanner";
import type { FacilitiesContent } from "@/lib/facilities";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function FacilitiesBody({ content }: { content: FacilitiesContent }) {
  const { hero: facilitiesHero, spaces: careSpaces } = content;
  return (
    <AboutReveal>
      <PageBanner src={facilitiesHero.image} alt={facilitiesHero.imageAlt} title={facilitiesHero.title} lede={facilitiesHero.lede} showTitle className="page-banner-title" />

      {careSpaces.map((space, index) => (
        <section
          className={space.tone === "pink" ? "facility-band facility-band--pink" : "facility-band"}
          key={space.id}
          id={space.id}
        >
          <div className="wrap">
            <FacilityRow
              title={space.title}
              tagline={space.tagline}
              body={space.body}
              reverse={space.reverse}
              image={space.image}
              features={space.features}
              leadIcon={space.leadIcon}
              delay={delay(index % 2)}
            />
          </div>
        </section>
      ))}
    </AboutReveal>
  );
}
