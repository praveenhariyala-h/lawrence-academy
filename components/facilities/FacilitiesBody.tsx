"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import AboutReveal from "@/components/about/AboutReveal";
import FacilityIcon from "@/components/FacilityIcon";
import FacilityRow from "@/components/about/FacilityRow";
import PageBanner from "@/components/PageBanner";
import { useEditable } from "@/components/tina/EditablePage";
import type { FacilitiesContent } from "@/lib/facilities";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function FacilitiesBody({ content: initial }: { content: FacilitiesContent }) {
  const content = useEditable("facilities", initial);
  const { hero: facilitiesHero, spaces: careSpaces, transportTeam } = content;
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

      <section className="facility-band" id="transport-team">
        <div className="wrap facility-team">
          <h2 className="about-reveal">
            <span className="facility-lead-icon" aria-hidden="true">
              <FacilityIcon name="transport" />
            </span>
            {transportTeam.title}
          </h2>
          <div className="facility-team-photos about-reveal" style={delay(1)}>
            {transportTeam.photos.map((photo) => (
              <div className="facility-team-photo" key={photo.src}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 30vw, 22vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}
