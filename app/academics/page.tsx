import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Academics"
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        kicker="Academics"
        title="A curriculum that grows with the child."
        lede="From phonics to research seminars, teachers design work that is demanding and humane."
      />
      <section className="section">
        <div className="wrap cards">
          <article className="card">
            <div
              className="card-media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1588072432836-e10032774343?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div className="card-body">
              <h3>Lower School · JK–5</h3>
              <p>
                Literacy, mathematics, science, studio art, and daily outdoor
                time. Specialists in music, library, and languages join homeroom
                teachers.
              </p>
            </div>
          </article>
          <article className="card">
            <div
              className="card-media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div className="card-body">
              <h3>Middle School · 6–8</h3>
              <p>
                Advisory, interdisciplinary projects, and a rotating arts
                wheel. Students begin to choose, present, and take
                responsibility.
              </p>
            </div>
          </article>
          <article className="card">
            <div
              className="card-media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div className="card-body">
              <h3>Upper School · 9–12</h3>
              <p>
                College-preparatory courses, labs, world languages, and signature
                senior projects. Counseling starts in Grade 10.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
