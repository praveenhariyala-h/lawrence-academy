import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  {
    title: "Make an enquiry",
    text: "Fill the enquiry form or get in touch. Community Relations will set a visit, online or phone interaction."
  },
  {
    title: "Visit us",
    text: "Tour our campuses and meet us, in person or online."
  },
  {
    title: "Apply",
    text: "Submit the application with a photograph, birth certificate, academic records, co-curricular records, transfer certificate, and visa/permit if applicable."
  },
  {
    title: "Admission interaction",
    text: "Pre-K to Grade 5: meeting with a teacher and Head of Kindergarten & Primary. Grades 6–9: placement tests in English, Mathematics, Science and Second Language, then an interaction with the Head / Principal."
  },
  {
    title: "Offer",
    text: "An email offer follows approval. Confirm acceptance and pay fees within the stipulated time."
  }
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="Begin with a conversation."
        lede="Enquire, visit, apply, interact, and receive an offer. Community Relations walks with you at every step."
      />
      <section className="band band--white">
        <div className="wrap">
          <h2 className="section-title">Admission process</h2>
          <div className="timeline">
            {steps.map((step, i) => (
              <div className="step" key={step.title}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band band--pearl">
        <div className="wrap two">
          <div>
            <h2>Download the admission form</h2>
            <p className="lede">
              Print and complete the form, or start a digital enquiry and we will share the
              application pack by email.
            </p>
            <Link className="btn btn--blue" href="/contact">
              Request the form
            </Link>
          </div>
          <div>
            <h2>Digital application</h2>
            <p>Submit an enquiry. After review, you will receive application and payment instructions.</p>
            <ContactForm submitLabel="Submit enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
