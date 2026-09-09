import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { wins } from "@/lib/content";

export const metadata: Metadata = { title: "News & Events" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="News & events"
        title="Bulletin board, results and big wins."
        lede="From LIT Fest to ICSE results, from zonal sports to classroom celebrations — this is Lawrence in motion."
      />

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Bulletin board</span>
          <h2 className="section-title">Current events</h2>
          <div className="cards">
            <article className="card">
              <h3>LIT Fest 2024 & 2025</h3>
              <p>Our literary festival celebrating writing, speaking and stories across grades.</p>
            </article>
            <article className="card">
              <h3>Sugar Board Initiative 2025</h3>
              <p>
                Sweet Choices, Healthy Lives: fruit tasting, healthy snacks, storytelling and talks
                on added sugar.
              </p>
            </article>
            <article className="card">
              <h3>Teachers’ Orientation 2025</h3>
              <p>
                Team building with Director Ms Athmica Subbaiah, leadership with Coacharya, and
                yoga with Mr Susantha. Happy teachers, happy kids.
              </p>
            </article>
            <article className="card">
              <h3>Investiture 2025</h3>
              <p>
                Head Boy Drushan S, Head Girl Madhura VS, Sports Captain Manav R, Sports Vice Captain
                Rachna V.
              </p>
            </article>
            <article className="card">
              <h3>LHS MUN 2025</h3>
              <p>
                Intra-LHS MUN for Grade VIII. Best Delegates: Dhruthi S. & Reanna E. Outstanding:
                Ayesha.
              </p>
            </article>
            <article className="card">
              <h3>Pet care & adoption</h3>
              <p>
                21 June 2025 with Oh My Dawg and Ms Sneha Paul — awareness, cuddle zone, and ramp
                walk for pets.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--pearl">
        <div className="wrap">
          <span className="kicker">ICSE results</span>
          <h2 className="section-title">Three years of board excellence</h2>
          <div className="cards">
            <article className="card">
              <h3>2025</h3>
              <p>
                Suhani Agrawal 98.2, Rasshmi S Rai 97.6, Tanmay S Tadooru 97.6. 66 distinctions (85+),
                131 of 133 above 60%.
              </p>
            </article>
            <article className="card">
              <h3>2024</h3>
              <p>
                53 distinctions and 34 centums from 119 students. Suryanshu Mishra 99%, with
                several at 98%.
              </p>
            </article>
            <article className="card">
              <h3>2023</h3>
              <p>
                42 distinctions and 28 centums from 122 students. Rageshree Banerjee 98, Nisarg
                Amit Gandhi 97, Shruti Patnaik 96.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker">Achievements</span>
          <h2 className="section-title">Our big wins</h2>
          <div className="cards">
            {wins.map((win) => (
              <article key={win.title} className="card">
                <span className="kicker">{win.date}</span>
                <h3>{win.title}</h3>
                <p>{win.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
