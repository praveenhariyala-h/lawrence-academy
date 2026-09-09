import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Beyond Books" };

const items = [
  {
    title: "Sports",
    text: "Football, cricket, volleyball, badminton, skating, chess, kabaddi, taekwondo and kho-kho, with dedicated coaches and inter-school tournaments."
  },
  {
    title: "Music",
    text: "Western vocal from foundational play to performance technique — strong habits, artistic expression and stage presence."
  },
  {
    title: "Dance",
    text: "Bharatanatyam: adavus, mudras, nritta, nritya and natya — culture, concentration and posture."
  },
  {
    title: "Art",
    text: "Drawing, painting, folk art, design, craft and art appreciation from Grades 1 to 10, aligned with NEP 2020 and ICSE."
  },
  {
    title: "Drama",
    text: "Theatre and puppetry with Nayi Taleem, building drama-enabled classrooms and integrating art into the mainstream curriculum."
  },
  {
    title: "Pottery",
    text: "Levelled classes that enhance creativity, fine motor skills and well-being."
  },
  {
    title: "Storytelling & Karadi Path",
    text: "Sessions that nurture listening, reading habits, emotional and language development, and ethical awareness."
  },
  {
    title: "MUN",
    text: "Model United Nations from Grade 4 to 10: research, debate and drafting resolutions as confident public speakers."
  },
  {
    title: "Assembly & Show and Tell",
    text: "Theme-based morning assemblies and Show and Tell that ignite curiosity and stage confidence."
  },
  {
    title: "Field trips",
    text: "Three educational field trips a year plus a fun resort outing — real-world learning and joyful bonding."
  }
];

export default function BeyondBooksPage() {
  return (
    <>
      <PageHero
        kicker="Beyond books"
        title="Skills that last a lifetime."
        lede="Learning doesn’t stop at the classroom door. Sports, creative expression, public speaking and trips build champions in mind and body."
      />
      <section className="band band--white">
        <div className="wrap cards">
          {items.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
