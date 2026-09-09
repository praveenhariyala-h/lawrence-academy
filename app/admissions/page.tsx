import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Admissions"
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="Begin with a conversation, not a form."
        lede="We look for families who want a thoughtful school — and students who are ready to join a community."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <span className="kicker">How to apply</span>
            <h2 className="section-title">Four clear steps</h2>
            <div className="timeline">
              <div className="step">
                <span className="step-num">1</span>
                <div>
                  <h3>Inquire</h3>
                  <p>
                    Tell us about your child. We’ll send dates, tuition
                    overview, and a suggested visit.
                  </p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <div>
                  <h3>Visit campus</h3>
                  <p>
                    Tour, sit in on a class if timing allows, and meet an
                    admissions officer.
                  </p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <div>
                  <h3>Apply</h3>
                  <p>
                    Online application, teacher recommendation, and records.
                    Financial aid is available.
                  </p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">4</span>
                <div>
                  <h3>Decision</h3>
                  <p>
                    Most families hear by March 10. Enrollment contracts follow
                    shortly after.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="panel">
              <h2>Key dates</h2>
              <div className="event">
                <time>Oct 15</time> Application opens
              </div>
              <div className="event">
                <time>Jan 15</time> Application due
              </div>
              <div className="event">
                <time>Feb</time> Student visits
              </div>
              <div className="event">
                <time>Mar 10</time> Decisions released
              </div>
              <Link className="btn btn--gold" href="/contact" style={{ marginTop: "1.2rem" }}>
                Talk with admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
