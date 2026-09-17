import type { CSSProperties } from "react";
import Image from "next/image";
import AboutReveal from "@/components/about/AboutReveal";
import FacilityRow from "@/components/about/FacilityRow";
import { careSpaces, facilitiesHero } from "@/lib/facilities";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

export default function FacilitiesBody() {
  return (
    <AboutReveal>
      <section className="care-hero">
        <div className="care-hero-copy about-reveal">
          <span className="kicker">{facilitiesHero.kicker}</span>
          <h1>{facilitiesHero.title}</h1>
          <p>{facilitiesHero.lede}</p>
        </div>
        <div className="care-hero-photo about-reveal" style={delay(1)}>
          <Image
            src={facilitiesHero.image}
            alt={facilitiesHero.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <p className="care-hero-script">{facilitiesHero.script}</p>
        </div>
      </section>

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
