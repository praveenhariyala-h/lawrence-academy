import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A school with a long memory and a lively present."
        lede="Founded in 1894 on the Hartwell riverbank, Lawrence Academy is an independent JK–12 school committed to curiosity, character, and community."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <span className="kicker">Mission</span>
            <h2 className="section-title">
              We teach students to think clearly and care deeply.
            </h2>
            <p className="lede">
              Our mission is to educate young people who are intellectually
              alive, ethically grounded, and ready to contribute. We believe
              childhood is not a race, and excellence is never separate from
              kindness.
            </p>
          </div>
          <div
            className="media"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80')"
            }}
          />
        </div>
      </section>
      <section className="section section--cream">
        <div className="wrap">
          <span className="kicker">Values</span>
          <h2 className="section-title">What we practice every day</h2>
          <div className="values">
            <article className="value">
              <h3>Curiosity</h3>
              <p>
                We ask better questions. Students learn by making, discussing,
                and revising — not by rushing to the answer.
              </p>
            </article>
            <article className="value">
              <h3>Character</h3>
              <p>
                Integrity shows up in small choices: how we speak in advisory,
                how we compete, how we include people.
              </p>
            </article>
            <article className="value">
              <h3>Community</h3>
              <p>
                The campus is a neighborhood. Older students mentor younger ones.
                Families are partners, not spectators.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
