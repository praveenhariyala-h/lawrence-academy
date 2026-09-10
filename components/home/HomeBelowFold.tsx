import Image from "next/image";
import PartnersGrid from "@/components/home/PartnersGrid";

export default function HomeBelowFold() {
  return (
    <>
      <section className="band band--pearl">
        <div className="wrap">
          <span className="kicker">In association with</span>
          <h2 className="section-title">Partners in learning</h2>
          <PartnersGrid />
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
    </>
  );
}
