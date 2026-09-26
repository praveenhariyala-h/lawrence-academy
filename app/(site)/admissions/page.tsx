import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { getAdmissionsContent } from "@/lib/admissions";
import { getSchool } from "@/lib/siteContent";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAdmissionsContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function AdmissionsPage() {
  const content = await getAdmissionsContent();
  const school = getSchool();
  const helpline = school.phones[0] ?? "";
  const email = school.emails[0] ?? "";

  return (
    <>
      <PageHero kicker={content.hero.kicker} title={content.hero.title} lede={content.hero.lede} />

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">{content.openingsKicker}</span>
          <h2 className="section-title">{content.openingsTitle}</h2>
          <div className="cards cards--4">
            {content.stages.map((stage) => (
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
          <span className="kicker">{content.processKicker}</span>
          <h2 className="section-title">{content.processTitle}</h2>
          <div className="timeline">
            {content.steps.map((step, index) => (
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
          <span className="kicker">{content.feesKicker}</span>
          <h2 className="section-title">{content.feesTitle}</h2>
          <p className="lede">{content.feesNote}</p>
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
                {content.fees.map((fee) => (
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
            Call <a href={`tel:${helpline.replace(/\s/g, "")}`}>{helpline}</a> or write to{" "}
            <a href={`mailto:${email}`}>{email}</a> for this year’s schedule.
          </p>
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap split">
          <div>
            <span className="kicker">{content.documentsKicker}</span>
            <h2 className="section-title">{content.documentsTitle}</h2>
            <p>{content.documentsBody}</p>
          </div>
          <ul className="offer-list">
            {content.documents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="band band--white section-anchor">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <div>
              <span className="kicker">{content.applyKicker}</span>
              <h2>{content.applyTitle}</h2>
              <p>{content.applyBody}</p>
            </div>
            <div>
              <h2>{content.helplineTitle}</h2>
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
              <p>
                {content.visitNote} <Link href="/contact">{content.visitLinkLabel}</Link>.
              </p>
            </div>
          </div>
          <ContactForm submitLabel={content.submitLabel} />
        </div>
      </section>
    </>
  );
}
