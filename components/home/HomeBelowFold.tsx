import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import PairCarousel from "@/components/PairCarousel";
import ContactForm from "@/components/ContactForm";
import { alumni, parentVoices, partners, wins } from "@/lib/content";
import { school } from "@/lib/site";

export default function HomeBelowFold() {
  return (
    <>
      <section className="band band--blue">
        <div className="wrap">
          <span className="kicker">Our approach</span>
          <h2 className="section-title">The A.C.T. Framework</h2>
          <p className="lede">
            Our signature A.C.T. framework is designed to give every learner the skills and
            confidence to thrive in a changing world.
          </p>
          <div className="cards">
            <article className="card">
              <h3>A — Academic Excellence</h3>
              <p>
                We lay a strong academic foundation rooted in conceptual clarity, inquiry-based
                learning, and a commitment to excellence. Students are taught how to think — not
                just what to think.
              </p>
              <ul className="offer-list">
                <li>Rigorous ICSE age-appropriate curriculum</li>
                <li>Focus on critical thinking, comprehension & results</li>
                <li>Personalised support so every child can succeed</li>
              </ul>
            </article>
            <article className="card">
              <h3>C — Competency Development</h3>
              <p>
                Beyond marks and textbooks, we mandate 100% participation in extracurricular
                activities. Children develop communication, collaboration, leadership, empathy
                and problem-solving.
              </p>
              <ul className="offer-list">
                <li>Confidence-building and public speaking</li>
                <li>Collaboration and interpersonal development</li>
                <li>Life skills integrated into everyday learning</li>
              </ul>
            </article>
            <article className="card">
              <h3>T — Technology Training</h3>
              <p>
                From coding basics to AI, robotics and responsible digital citizenship, we
                empower students to use technology creatively and meaningfully.
              </p>
              <ul className="offer-list">
                <li>Age-appropriate tech fluency and coding</li>
                <li>Smart classrooms and digital learning tools</li>
                <li>Real-world applications using tech</li>
              </ul>
            </article>
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            Together, these pillars grow a vibrant cohort of future-ready learners.
          </p>
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap">
          <span className="kicker">In association with</span>
          <h2 className="section-title">Partners in learning</h2>
          <div className="partners">
            {partners.map((name) => (
              <div key={name} className="partner">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap chair">
          <div className="portrait">
            <Image
              src="/images/chairman.png"
              alt="P.M. Subbaiah, Chairman, Lawrence High School"
              width={640}
              height={800}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 220px"
            />
          </div>
          <div>
            <span className="kicker">Chairman’s message</span>
            <span className="quote-mark">“</span>
            <p>
              Dear Parents, over the past 35 years, Lawrence School HSR and Koramangala have
              grown into schools that nurture champions. Education for us isn’t just about books
              but about life itself — building character, shaping mindsets, and preparing children
              for a meaningful future.
            </p>
            <p>
              Long-serving, dedicated teachers work with every child, enabling them to discover
              strengths, face challenges, and grow into confident individuals who will be the
              future leaders and changemakers of our society. We look forward to walking this
              journey with you — hand in hand.
            </p>
            <p>
              <strong>P.M. Subbaiah</strong>
              <br />
              Chairman, Lawrence High School
            </p>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="wrap">
          <span className="kicker">Alumni spotlight</span>
          <h2 className="section-title">Stories that began here</h2>
          <PairCarousel
            pairs={[
              [
                <article key="sisna" className="spot">
                  <h3>{alumni[0].name}</h3>
                  <p>
                    {alumni[0].role}
                    <br />
                    {alumni[0].tag}
                  </p>
                  <p>{alumni[0].quote}</p>
                </article>,
                <article key="shambavi" className="spot">
                  <h3>{alumni[1].name}</h3>
                  <p>
                    {alumni[1].role}
                    <br />
                    {alumni[1].tag}
                  </p>
                  <p>{alumni[1].quote}</p>
                </article>
              ],
              [
                <article key="akash" className="spot">
                  <h3>{alumni[2].name}</h3>
                  <p>
                    {alumni[2].role}
                    <br />
                    {alumni[2].tag}
                  </p>
                  <p>{alumni[2].quote}</p>
                </article>,
                <article key="parent" className="spot">
                  <h3>{parentVoices[0].name}</h3>
                  <p>{parentVoices[0].role}</p>
                  <p>{parentVoices[0].quote}</p>
                </article>
              ]
            ]}
          />
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Our big wins</span>
          <h2 className="section-title">Achievements</h2>
          <Carousel
            slides={wins.map((win) => (
              <article key={win.title} className="win">
                <span className="kicker">{win.date}</span>
                <h3>{win.title}</h3>
                <p>{win.text}</p>
              </article>
            ))}
          />
          <p>
            <Link className="btn btn--ghost-dark" href="/news">
              See all news & events
            </Link>
          </p>
        </div>
      </section>

      <section className="band band--blue">
        <div className="wrap contact-grid">
          <div>
            <span className="kicker">Contact</span>
            <h2 className="section-title">We’d like to meet you.</h2>
            <p className="lede">
              {school.address}
              <br />
              Office: {school.phones.join(" · ")}
              <br />
              Transport: {school.transportPhone}
              <br />
              {school.emails[0]}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
