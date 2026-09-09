import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Learning at Lawrence" };

export default function LearningPage() {
  return (
    <>
      <PageHero
        kicker="Learning at Lawrence"
        title="ICSE academics with future-ready skills."
        lede="We follow the ICSE curriculum and Collins publications from K to 5, with STEM, Vedic Math, financial literacy, and 100% participation beyond the textbook."
      />

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Kindergarten</span>
          <h2 className="section-title">A curriculum aligned with NEP 2020</h2>
          <p className="lede">
            Play-based, activity-driven learning through the Collins Kindergarten Series. Literacy,
            numeracy, communication and reading grow alongside dance, music, art, indoor and
            outdoor sports.
          </p>
          <div className="cards">
            <article className="card">
              <h3>Nursery · 3–4 years</h3>
              <p>
                Rhymes, music, art, storytelling, pre-math, phonics, EVS skill themes, indoor and
                outdoor games, dance, and sandpit fun.
              </p>
            </article>
            <article className="card">
              <h3>LKG · 4–5 years</h3>
              <p>
                Phonics and reading readiness, three-letter words, numeracy, theme-based EVS,
                storytelling, games, dance and sandpit.
              </p>
            </article>
            <article className="card">
              <h3>UKG · 5–6 years</h3>
              <p>
                Advanced phonics and reading, communication, numeracy with critical thinking, and a
                joyful balance of learning and play.
              </p>
            </article>
          </div>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            Class libraries, art corners, puppet theatre, sandpit, school ground, music with
            professional instructors, storytelling with Priya Muttukumar, and a dance zone.
            Daycare runs till 6:00 PM with snack, play and homework support.
          </p>
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap cards">
          <article className="card">
            <h3>Primary · Grades 1–4</h3>
            <p>
              Strong foundations in English, Mathematics, Science, Social Studies, Kannada, Hindi,
              Computers and Coding, with yoga, music, dance, theatre, taekwondo, robotics and chess.
              Karadi Path builds English through immersive storytelling.
            </p>
          </article>
          <article className="card">
            <h3>Middle · Grades 5–7</h3>
            <p>
              NEWS: Navigate, Explore, Work hard, Succeed. NEP-aligned methods, board-style papers
              from Grade 6, Vedic Math, Financial Literacy, public speaking, reading classes, and SDGs
              in every subject.
            </p>
          </article>
          <article className="card">
            <h3>High School · Grades 8–10</h3>
            <p>
              In-depth ICSE understanding beyond textbooks, with one-on-one mentorship for board
              exams and socio-emotional challenges. Outstanding results are our testimony.
            </p>
          </article>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">STEM</span>
          <h2 className="section-title">Coding, robotics & AI</h2>
          <div className="two">
            <div>
              <h3>Coding journey</h3>
              <ul className="offer-list">
                <li>Grades 1–3: Scratch Junior and Scratch</li>
                <li>Grades 4–5: Visual Python with EduBlocks</li>
                <li>Grades 6–7: Text-based Python</li>
              </ul>
            </div>
            <div>
              <h3>Robotics</h3>
              <ul className="offer-list">
                <li>Grades 1–5: LEGO WeDo and Mindstorms</li>
                <li>Grades 6–7: Arduino with Tinkercad</li>
                <li>Grades 9–10: ICSE Robotics and AI elective</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--yellow">
        <div className="wrap two">
          <div>
            <h2>Vedic Math</h2>
            <p>
              Enrichment that builds speed, number sense and confidence — part of our middle-school
              learning paradigm alongside robotics and coding.
            </p>
          </div>
          <div>
            <h2>Financial literacy</h2>
            <p>
              Grades 6 to 8 learn budgeting, saving, banking and digital payments through interactive
              lessons and industrial visits — lifelong financial wisdom aligned with NEP 2020.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
