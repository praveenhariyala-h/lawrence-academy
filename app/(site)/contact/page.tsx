import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { school } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Lawrence High School ICSE in HSR Layout, Bengaluru, or write to the school office and transport desk."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Office, transport, and a map to campus."
        lede="Reach the school office for admissions, campus visits, and day-to-day questions. Transport routes are handled by a dedicated desk."
      />

      <section className="band band--white">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <div>
              <h2>School office</h2>
              <p>{school.address}</p>
              <p>
                {school.phones.map((phone, index) => (
                  <span key={phone}>
                    {index > 0 ? " · " : null}
                    <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                  </span>
                ))}
              </p>
              <p>
                <a href={`mailto:${school.emails[0]}`}>{school.emails[0]}</a>
              </p>
            </div>
            <div>
              <h2>Transport</h2>
              <p>For bus routes, pickup points, and changes to the run, call the transport desk.</p>
              <p>
                <a href={`tel:${school.transportPhone.replace(/\s/g, "")}`}>{school.transportPhone}</a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap">
          <h2 className="section-title">Find the campus</h2>
          <p className="lede">{school.address}</p>
          <iframe
            className="map"
            title="Lawrence High School campus map"
            src={school.mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
