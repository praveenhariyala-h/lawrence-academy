import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { leadership, legacyTeachers } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Our story, our people, our campus."
        lede="Established by the Cauvery Education Trust, Lawrence ICSE focuses on real-world learning so children grow into responsible adults who can face a changing world."
      />

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Our story</span>
          <h2 className="section-title">From Koramangala to HSR</h2>
          <p className="lede">
            We began with a state board school in Koramangala over 30 years ago and continue to
            make a difference in the lives of students entrusted to us. Lawrence follows the ICSE
            curriculum, with internationally designed Collins publications from K to 5.
          </p>
        </div>
      </section>

      <section className="band band--yellow">
        <div className="wrap two">
          <div>
            <span className="kicker">Mission</span>
            <h2>To help every child grow into a confident, compassionate individual, equipped with the skills to succeed in an ever-changing world.</h2>
          </div>
          <div>
            <span className="kicker">Vision</span>
            <h2>To come together to create masterpieces that can make an impactful change in society through innovation and creativity.</h2>
            <p>
              Together, we nurture students to pave their own path, discover the self even if it is
              to walk the path less trodden, foster curiosity, gather knowledge and transform it into
              action.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Senior leadership</span>
          <h2 className="section-title">Heads of school</h2>
          <div className="cards">
            {leadership.map((person) => (
              <article key={person.name} className="card">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
          <p className="lede" style={{ marginTop: "1.5rem" }}>
            Each member of our faculty brings knowledge, teaching expertise, and a deep
            commitment to student growth, creating a positive learning environment where every child
            feels seen, supported, and challenged.
          </p>
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap">
          <span className="kicker">Our legacy</span>
          <h2 className="section-title">Dedicated teachers and staff</h2>
          <div className="cards">
            {legacyTeachers.map((teacher) => (
              <article key={teacher.name} className="card">
                <h3>{teacher.name}</h3>
                <p>
                  Joined {teacher.year}
                  <br />
                  {teacher.profile}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Campus</span>
          <h2 className="section-title">Infrastructure & facilities</h2>
          <p className="lede">
            A 4-storey campus in the heart of HSR Layout, adjacent to the children’s park. Classrooms,
            physics, chemistry, geography and maths labs, library, auditorium, playground, cricket
            pitch and skating rink.
          </p>
          <div className="photos photos-3">
            <div
              className="media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div
              className="media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div
              className="media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80')"
              }}
            />
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <strong>Transport:</strong> School buses serve neighbourhoods across Bengaluru. Call{" "}
            98457 60764 for routes and timings.
          </p>
        </div>
      </section>
    </>
  );
}
