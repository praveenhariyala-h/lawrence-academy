import Image from "next/image";
import Link from "next/link";
import AchievementsCarousel from "@/components/home/AchievementsCarousel";
import PartnersGrid from "@/components/home/PartnersGrid";
import type { HomeContent } from "@/lib/home";

export default function HomeBelowFold({
  home
}: {
  home: HomeContent;
}) {
  const beyond = home.beyondClassroom;
  const campus = home.campusSpotlight;
  const achievements = [home.featuredAchievement];

  return (
    <>
      <section className="beyond">
        <div className="wrap beyond-inner">
          <div className="beyond-copy">
            <h2>{beyond.title}</h2>
            <p>{beyond.body}</p>
            <Link className="btn btn--gold" href={beyond.ctaHref}>
              {beyond.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="beyond-tiles">
            {beyond.items.map((item) => (
              <Link
                key={item.title}
                className="beyond-tile"
                href={beyond.ctaHref}
                aria-label={item.title}
              >
                <Image src={item.image} alt={item.alt} fill sizes="180px" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--white home-highlights-band">
        <div className="wrap home-highlights">
          <article className="home-panel home-panel--main">
            <header className="home-panel-head">
              <h2>{home.achievementsTitle}</h2>
              <Link href="/news?tab=achievement">{home.achievementsViewAllLabel}</Link>
            </header>
            <AchievementsCarousel items={achievements} />
          </article>

          <article className="home-panel home-panel--compact">
            <header className="home-panel-head">
              <h2>{campus.title}</h2>
              <Link href={campus.ctaHref}>{campus.ctaLabel}</Link>
            </header>
            <Link className="home-campus" href={campus.ctaHref}>
              <div className="home-campus-photo">
                <Image
                  src={campus.image}
                  alt={campus.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 14vw"
                />
              </div>
              <p>{campus.body}</p>
            </Link>
          </article>

          <article className="home-panel home-panel--compact">
            <header className="home-panel-head">
              <h2>{home.upcomingEventsTitle}</h2>
              <Link href="/news?tab=event">{home.upcomingEventsViewAllLabel}</Link>
            </header>
            <ul className="home-events">
              {home.upcomingEvents.map((event) => (
                <li key={`${event.day}-${event.title}`}>
                  <span className="home-event-date">
                    <b>{event.day}</b>
                    {event.month}
                  </span>
                  <div>
                    <strong>{event.title}</strong>
                    <p>{event.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="band band--white partners-band">
        <div className="wrap">
          <div className="partners-head">
            <h2 className="section-title">{home.partnersTitle}</h2>
            <p>{home.partnersKicker}</p>
          </div>
          <PartnersGrid items={home.partners} />
        </div>
      </section>
    </>
  );
}
