import Image from "next/image";
import PartnersGrid from "@/components/home/PartnersGrid";
import RichText from "@/components/RichText";
import type { HomeContent } from "@/lib/home";

export default function HomeBelowFold({
  home
}: {
  home: HomeContent;
}) {
  return (
    <>
      <section className="band band--pearl">
        <div className="wrap">
          <span className="kicker">{home.partnersKicker}</span>
          <h2 className="section-title">{home.partnersTitle}</h2>
          <PartnersGrid items={home.partners} />
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap chair">
          <div className="portrait">
            <Image
              src={home.chairmanPhoto}
              alt={home.chairmanPhotoAlt}
              width={640}
              height={800}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 220px"
            />
          </div>
          <div>
            <span className="kicker">{home.chairmanKicker}</span>
            <span className="quote-mark">“</span>
            <RichText text={home.chairmanMessage} />
            <p>
              <strong>{home.chairmanName}</strong>
              <br />
              {home.chairmanRole}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
