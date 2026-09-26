import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { getContactContent } from "@/lib/contact";
import { getSchool } from "@/lib/siteContent";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContactContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function ContactPage() {
  const content = await getContactContent();
  const school = getSchool();
  const email = school.emails[0] ?? "";

  return (
    <>
      <PageHero kicker={content.kicker} title={content.title} lede={content.lede} />

      <section className="band band--white">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <div>
              <h2>{content.officeHeading}</h2>
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
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div>
              <h2>{content.transportHeading}</h2>
              <p>{content.transportBody}</p>
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
          <h2 className="section-title">{content.mapTitle}</h2>
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
