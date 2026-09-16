import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import {
  admissionDocuments,
  admissionFees,
  admissionHero,
  admissionStages,
  admissionSteps
} from "@/lib/admissions";
import { school } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Enquire, visit campus, and join Lawrence High School ICSE, HSR Layout — from Kindergarten to Grade 10."
};

export default function AdmissionsPage() {
  const helpline = school.phones[0];

  return (
    <>
      <PageHero kicker={admissionHero.kicker} title={admissionHero.title} lede={admissionHero.lede} />

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Openings</span>
          <h2 className="section-title">Where your child can begin.</h2>
          <div className="cards cards--4">
            {admissionStages.map((stage) => (
              <article key={stage.title} className="card">
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="band band--pearl section-anchor">
        <div className="wrap">
          <span className="kicker">Admission process</span>
          <h2 className="section-title">Five clear steps.</h2>
          <div className="timeline">
            {admissionSteps.map((step, index) => (
              <div key={step.title} className="step">
                <span className="step-num">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fees" className="band band--white section-anchor">
        <div className="wrap">
          <span className="kicker">Fee structure</span>
          <h2 className="section-title">What fees cover.</h2>
          <p className="lede">
            Figures for the current academic year are shared by the admissions office during your campus visit, or on
            the helpline. We do not publish last year’s numbers here so families always receive the latest schedule.
          </p>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>What it covers</th>
                  <th>When</th>
                </tr>
              </thead>
              <tbody>
                {admissionFees.map((fee) => (
                  <tr key={fee.name}>
                    <td>{fee.name}</td>
                    <td>{fee.covers}</td>
                    <td>{fee.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Call{" "}
            <a href={`tel:${helpline.replace(/\s/g, "")}`}>{helpline}</a> or write to{" "}
            <a href={`mailto:${school.emails[0]}`}>{school.emails[0]}</a> for this year’s schedule.
          </p>
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap split">
          <div>
            <span className="kicker">Documents</span>
            <h2 className="section-title">What to keep ready.</h2>
            <p>
              Bring originals for verification. Photocopies can be submitted after a place is offered.
            </p>
          </div>
          <ul className="offer-list">
            {admissionDocuments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="band band--white section-anchor">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <div>
              <span className="kicker">Apply now</span>
              <h2>Start an enquiry.</h2>
              <p>
                Tell us about your child. The admissions team will reply with next dates for campus visits and
                interactions.
              </p>
            </div>
            <div>
              <h2>Admission helpline</h2>
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
              <p>
                Prefer to visit first? See the map on the{" "}
                <Link href="/contact">contact page</Link>.
              </p>
            </div>
          </div>
          <ContactForm submitLabel="Start an enquiry" />
        </div>
      </section>
    </>
  );
}
