import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="wrap hero-content">
          <span className="kicker">Independent school · Hartwell</span>
          <h1>A place to belong. A place to grow.</h1>
          <p>
            Lawrence Academy is a JK–12 community where rigorous learning, kind
            people, and a beautiful campus help every student find their voice.
          </p>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/admissions">
              Start an application
            </Link>
            <Link className="btn btn--ghost" href="/contact">
              Plan a visit
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap stats">
        <div className="stat">
          <b>1,120</b>
          <span>Students JK–12</span>
        </div>
        <div className="stat">
          <b>8:1</b>
          <span>Student–teacher ratio</span>
        </div>
        <div className="stat">
          <b>42</b>
          <span>Sports & arts programs</span>
        </div>
        <div className="stat">
          <b>98%</b>
          <span>College-bound seniors</span>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <span className="kicker">Programs</span>
          <h2 className="section-title">Three divisions. One community.</h2>
          <p className="lede">
            Students move through Lower, Middle, and Upper School with
            continuity, care, and teachers who know them well.
          </p>
          <div className="cards">
            <article className="card">
              <div
                className="card-media"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80')"
                }}
              />
              <div className="card-body">
                <h3>Lower School</h3>
                <p>
                  JK–Grade 5. Play, wonder, and the foundations of reading,
                  writing, and number sense.
                </p>
                <Link href="/academics">Explore Lower School</Link>
              </div>
            </article>
            <article className="card">
              <div
                className="card-media"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80')"
                }}
              />
              <div className="card-body">
                <h3>Middle School</h3>
                <p>
                  Grades 6–8. Advisory, exploratory arts, and the first real
                  taste of independence.
                </p>
                <Link href="/academics">Explore Middle School</Link>
              </div>
            </article>
            <article className="card">
              <div
                className="card-media"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80')"
                }}
              />
              <div className="card-body">
                <h3>Upper School</h3>
                <p>
                  Grades 9–12. Seminars, labs, athletics, and college counseling
                  that treats each student as a person.
                </p>
                <Link href="/academics">Explore Upper School</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap split">
          <div>
            <span className="kicker">Why Lawrence</span>
            <h2 className="section-title">Known, challenged, and cared for.</h2>
            <p className="lede">
              Small classes, outdoor learning, and a campus that feels like a
              neighborhood. Families choose Lawrence because students are seen —
              in the classroom, on the field, and in the quiet moments in
              between.
            </p>
            <div className="btn-row">
              <Link className="btn btn--dark" href="/about">
                Our story
              </Link>
              <Link className="btn btn--ghost-dark" href="/campus">
                Campus life
              </Link>
            </div>
          </div>
          <div
            className="media"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80')"
            }}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="kicker">News</span>
            <h2 className="section-title">What’s happening</h2>
            <article className="news-item">
              <span className="meta">Sept 4, 2026</span>
              <h3>Opening Day welcomes 86 new families</h3>
              <p>
                Lower School courtyards, Upper School assemblies, and a campus
                full of first-day energy.
              </p>
            </article>
            <article className="news-item">
              <span className="meta">Aug 22, 2026</span>
              <h3>Robotics team heads to regional finals</h3>
              <p>
                The Hawks built a new drive system over the summer and are ready
                for Hartwell Invitational.
              </p>
            </article>
            <article className="news-item">
              <span className="meta">Aug 12, 2026</span>
              <h3>Fall arts season tickets now open</h3>
              <p>
                Choir, theater, and gallery nights return to the Performing Arts
                Center.
              </p>
            </article>
          </div>
          <aside className="panel">
            <span className="kicker">Calendar</span>
            <h2>Upcoming events</h2>
            <div className="event">
              <time dateTime="2026-09-18">Sep 18</time> Open House · 9:00 AM
            </div>
            <div className="event">
              <time dateTime="2026-10-03">Oct 03</time> Lower School picnic
            </div>
            <div className="event">
              <time dateTime="2026-10-16">Oct 16</time> Admissions coffee
            </div>
            <div className="event">
              <time dateTime="2026-11-07">Nov 07</time> Fall play: Our Town
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap quote">
          <span className="kicker">From families</span>
          <p>
            “Lawrence feels rigorous without being hurried. Our daughter is
            stretched, known, and genuinely happy to go to school.”
          </p>
          <span>Priya & James M. · Upper School parents</span>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Come see the campus for yourself.</h2>
              <p>
                Tours run most weekday mornings. We’ll show you classrooms, the
                library, and the river path.
              </p>
            </div>
            <Link className="btn btn--gold" href="/contact">
              Schedule a visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
