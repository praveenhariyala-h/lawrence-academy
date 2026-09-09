import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { alumni, parentVoices } from "@/lib/content";

export const metadata: Metadata = { title: "Alumni" };

export default function AlumniPage() {
  return (
    <>
      <PageHero
        kicker="Alumni"
        title="Once a Lawrencian, always a Lawrencian."
        lede="Advocates, doctors, analysts and proud parents — the journey that started in HSR continues."
      />
      <section className="band band--white">
        <div className="wrap cards">
          {alumni.map((person) => (
            <article key={person.name} className="card">
              <h3>{person.name}</h3>
              <p>
                {person.role}
                <br />
                {person.tag}
              </p>
              <p>{person.quote}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="band band--purple">
        <div className="wrap">
          <span className="kicker">Parents</span>
          <h2 className="section-title">Family voices</h2>
          {parentVoices.map((voice) => (
            <article key={voice.name}>
              <h3>{voice.name}</h3>
              <p>{voice.role}</p>
              <p>{voice.quote}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="band band--pearl">
        <div className="wrap contact-grid">
          <div>
            <h2>Get in touch / join the community</h2>
            <p className="lede">
              Share your story, mentor a student, or simply stay connected. We would love to hear
              from you.
            </p>
          </div>
          <ContactForm submitLabel="Join the community" />
        </div>
      </section>
    </>
  );
}
