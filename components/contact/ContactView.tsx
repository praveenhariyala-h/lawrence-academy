"use client";

import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";
import type { ContactContent } from "@/lib/contact";

export default function ContactView({
  content: initial,
  address,
  phones,
  email,
  transportPhone,
  mapUrl
}: {
  content: ContactContent;
  address: string;
  phones: string[];
  email: string;
  transportPhone: string;
  mapUrl: string;
}) {
  const content = useEditable("contact", initial);

  return (
    <>
      <PageHero
        kicker={content.kicker}
        title={content.title}
        lede={content.lede}
        fields={{
          kicker: tinaMark(content, "kicker"),
          title: tinaMark(content, "title"),
          lede: tinaMark(content, "lede")
        }}
      />

      <section className="band band--white">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <div>
              <h2 data-tina-field={tinaMark(content, "officeHeading")}>{content.officeHeading}</h2>
              <p>{address}</p>
              <p>
                {phones.map((phone, index) => (
                  <span key={phone}>
                    {index > 0 ? " · " : null}
                    <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                  </span>
                ))}
              </p>
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div>
              <h2 data-tina-field={tinaMark(content, "transportHeading")}>{content.transportHeading}</h2>
              <p data-tina-field={tinaMark(content, "transportBody")}>{content.transportBody}</p>
              <p>
                <a href={`tel:${transportPhone.replace(/\s/g, "")}`}>{transportPhone}</a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap">
          <h2 className="section-title" data-tina-field={tinaMark(content, "mapTitle")}>
            {content.mapTitle}
          </h2>
          <p className="lede">{address}</p>
          <iframe
            className="map"
            title="Lawrence High School campus map"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
