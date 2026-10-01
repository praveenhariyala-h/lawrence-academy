import Image from "next/image";
import type { CSSProperties } from "react";
import FacilityIcon from "@/components/FacilityIcon";
import FacilitySlider from "@/components/about/FacilitySlider";
import { tinaMark } from "@/components/tina/EditablePage";
import type { SpaceFeature, SpacePhoto } from "@/lib/campus";

export default function FacilityRow({
  title,
  tagline,
  body,
  reverse,
  image,
  gallery,
  features,
  leadIcon,
  delay,
  source
}: {
  title: string;
  tagline: string;
  body: string;
  reverse?: boolean;
  image?: SpacePhoto;
  gallery?: SpacePhoto[];
  features: SpaceFeature[];
  leadIcon?: string;
  delay?: CSSProperties;
  source?: object;
}) {
  return (
    <div className={reverse ? "facility-row is-reverse" : "facility-row"}>
      <div className="facility-media about-reveal" style={delay}>
        {gallery?.length ? (
          <FacilitySlider photos={gallery} />
        ) : image ? (
          <div className="facility-photo">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
              data-tina-field={tinaMark(image, "src")}
            />
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
          <span data-tina-field={tinaMark(source, "title")}>{title}</span>
        </h2>
        <p className="facility-tagline" data-tina-field={tinaMark(source, "tagline")}>
          {tagline}
        </p>
        <p data-tina-field={tinaMark(source, "body")}>{body}</p>
        <ul className="facility-features">
          {features.map((feature, index) => (
            <li key={`${feature.label}-${index}`}>
              <span className="facility-feature-icon" aria-hidden="true">
                <FacilityIcon name={feature.icon} />
              </span>
              <span data-tina-field={tinaMark(feature, "label")}>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
