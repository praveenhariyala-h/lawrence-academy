import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { school } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Office, transport, and a map to campus."
        lede="Community Relations replies quickly. Visit us beside the children’s park in Sector 6, HSR Layout."
      />
      <section className="band band--white">
        <div className="wrap contact-grid">
          <div>
            <h2>Campus</h2>
            <p>{school.address}</p>
            <h3>Office</h3>
            <p>{school.phones.join(" · ")}</p>
            <h3>Transport</h3>
            <p>{school.transportPhone}</p>
            <h3>Email</h3>
            <p>{school.emails[0]}</p>
            <iframe
              className="map"
              title="Lawrence High School map"
              src={school.mapUrl}
              loading="lazy"
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
