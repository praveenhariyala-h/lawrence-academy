import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="We’d like to meet you."
        lede="Ask about a tour, an application, or a specific grade. Admissions replies within two school days."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="info-list">
            <div>
              <h2>Campus</h2>
              <p>
                18 River Road
                <br />
                Hartwell, MA 02478
                <br />
                (555) 012-4800
              </p>
            </div>
            <div>
              <h3>Admissions</h3>
              <p>
                hello@lawrence.academy
                <br />
                Weekdays 8:00 AM – 4:30 PM
              </p>
            </div>
            <div>
              <h3>Getting here</h3>
              <p>
                Visitor parking is beside the chapel. Check in at the Welcome
                Desk in Founders Hall.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
