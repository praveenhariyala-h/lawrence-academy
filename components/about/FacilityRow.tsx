import Image from "next/image";
import type { CSSProperties } from "react";
import FacilityIcon from "@/components/FacilityIcon";
import type { SpaceFeature, SpacePhoto } from "@/lib/campus";

export default function FacilityRow({
  title,
  tagline,
  body,
  reverse,
  overlay,
  image,
  gallery,
  features,
  leadIcon,
  delay
}: {
  title: string;
  tagline: string;
  body: string;
  reverse?: boolean;
  overlay?: string;
  image?: SpacePhoto;
  gallery?: SpacePhoto[];
  features: SpaceFeature[];
  leadIcon?: string;
  delay?: CSSProperties;
}) {
  return (
    <div className={reverse ? "facility-row is-reverse" : "facility-row"}>
      <div className="facility-media about-reveal" style={delay}>
        {gallery?.length ? (
          <div className="facility-gallery">
            {gallery.map((photo) => (
              <figure key={photo.caption || photo.src}>
                <div className="facility-gallery-photo">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 45vw, 220px" />
                </div>
                {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : image ? (
          <div className="facility-photo">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 52vw" />
            {overlay ? <p className="facility-overlay">{overlay}</p> : null}
          </div>
        ) : null}
      </div>
      <div className="facility-copy about-reveal" style={delay}>
        <h2>
          {leadIcon ? (
            <span className="facility-lead-icon" aria-hidden="true">
              <FacilityIcon name={leadIcon} />
            </span>
          ) : null}
          {title}
        </h2>
        <p className="facility-tagline">{tagline}</p>
        <p>{body}</p>
        <ul className="facility-features">
          {features.map((feature) => (
            <li key={feature.label}>
              <span className="facility-feature-icon" aria-hidden="true">
                <FacilityIcon name={feature.icon} />
              </span>
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
