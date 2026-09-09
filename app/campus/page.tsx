import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Campus Life"
};

export default function CampusPage() {
  return (
    <>
      <PageHero
        kicker="Campus life"
        title="After class, the campus keeps going."
        lede="Athletics, arts, clubs, and the river path. Students practice belonging as much as skill."
      />
      <section className="section">
        <div className="wrap cards">
          <article className="card">
            <div
              className="card-media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1461896836934-ffe607ba6851?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div className="card-body">
              <h3>Athletics</h3>
              <p>
                Hawks teams in soccer, swimming, basketball, tennis, and track.
                Every Upper School student can play — we field both competitive
                and developmental squads.
              </p>
            </div>
          </article>
          <article className="card">
            <div
              className="card-media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div className="card-body">
              <h3>Arts</h3>
              <p>
                Choir, orchestra, studio, ceramics, and a full theater season
                in the Performing Arts Center.
              </p>
            </div>
          </article>
          <article className="card">
            <div
              className="card-media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div className="card-body">
              <h3>Clubs & service</h3>
              <p>
                Debate, robotics, outdoor club, and weekly service partnerships in
                Hartwell. Middle School exploratory blocks help students try
                before they commit.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
