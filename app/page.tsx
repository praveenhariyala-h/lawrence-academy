import Link from "next/link";
import Carousel from "@/components/Carousel";
import HeroSection from "@/components/home/HeroSection";
import HomeBelowFold from "@/components/home/HomeBelowFold";

const apartSlides = [
  {
    title: "Vibrant extra-curricular programs",
    text: "Learning doesn’t stop at the classroom door. Our programmes inspire students to dream and believe, learn and achieve, and build skills that last a lifetime — from the arts to public speaking, STEM and beyond.",
    extra: (
      <p>
        We offer Sports (Football, Cricket, Skating, Table Tennis, Chess), Technology training
        (Robotics, Coding, AI), Creativity (Pottery, Theatre, Storytelling, Dance, Music, Art),
        and Public Speaking (MUN, Verbattle, Show and Tell).
      </p>
    )
  },
  {
    title: "Academic choices",
    text: "The school offers Science with Mathematics as well as Commerce, giving an edge to students who want to pursue alternative careers. Financial Literacy, Robotics and Coding, and Vedic Math also boost the learning paradigm."
  },
  {
    title: "A fabulous team of long-serving teachers",
    text: "At the heart of Lawrence is a team of teachers who go the extra mile. They don’t just teach — they inspire, nurture, and empower. High school teachers are all ICSE examiners who bring out the best in academic performance."
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="band band--white">
        <div className="wrap split">
          <div>
            <span className="kicker">Facts</span>
            <div className="stats">
              <div className="stat">
                <b>35 years</b>
                <span>of academic excellence</span>
              </div>
              <div className="stat">
                <b>ICSE</b>
                <span>and the HarperCollins Kindergarten Curriculum</span>
              </div>
              <div className="stat">
                <b>100%</b>
                <span>student engagement in activities and programs</span>
              </div>
            </div>
            <p className="lede" style={{ marginTop: "1.4rem" }}>
              At Lawrence HSR, quality of education, extracurricular programs and outstanding
              academic results come together. Students balance academic excellence with multiple
              co-curricular activities to develop into thinkers, achievers and lifelong learners.
            </p>
          </div>
          <div className="photos">
            <div
              className="media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80')"
              }}
            />
            <div
              className="media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1588072432836-e10032774343?auto=format&fit=crop&w=900&q=80')"
              }}
            />
          </div>
        </div>
      </section>

      <section className="band band--yellow">
        <div className="wrap">
          <h2 className="section-title">
            At Lawrence, we nurture champions who drive change through innovation and creativity.
          </h2>
          <p>
            Our teachers work with every child to inspire and encourage 100% participation in
            school activities.
          </p>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">What sets us apart</span>
          <h2 className="section-title">Dive into our campus experience</h2>
          <Carousel
            slides={apartSlides.map((slide) => (
              <article key={slide.title} className="apart-slide">
                <h3>{slide.title}</h3>
                <p className="lede">{slide.text}</p>
                {slide.extra}
              </article>
            ))}
          />
        </div>
      </section>

      <HomeBelowFold />
    </>
  );
}
