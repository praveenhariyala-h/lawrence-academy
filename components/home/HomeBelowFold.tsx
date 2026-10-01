import Image from "next/image";
import Link from "next/link";
import AchievementsCarousel from "@/components/home/AchievementsCarousel";
import PartnersGrid from "@/components/home/PartnersGrid";
import { tinaMark } from "@/components/tina/EditablePage";
import type { HomeContent } from "@/lib/home";
import type { RecentAchievementSlide } from "@/lib/news";

export default function HomeBelowFold({
  home,
  achievements
}: {
  home: HomeContent;
  achievements: RecentAchievementSlide[];
}) {
  const beyond = home.beyondClassroom;
  const campus = home.campusSpotlight;

  return (
    <>
      <section className="beyond">
        <div className="wrap beyond-inner">
          <div className="beyond-copy">
            <h2 data-tina-field={tinaMark(beyond, "title")}>{beyond.title}</h2>
            <p data-tina-field={tinaMark(beyond, "body")}>{beyond.body}</p>
            <Link className="btn btn--gold" href={beyond.ctaHref} data-tina-field={tinaMark(beyond, "ctaLabel")}>
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
                <Image src={item.image} alt={item.alt} fill sizes="180px" data-tina-field={tinaMark(item, "image")} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--white home-highlights-band">
        <div className="wrap home-highlights">
          <article className="home-panel home-panel--main">
            <header className="home-panel-head">
              <h2 data-tina-field={tinaMark(home, "achievementsTitle")}>{home.achievementsTitle}</h2>
              <Link href="/news?tab=achievement" data-tina-field={tinaMark(home, "achievementsViewAllLabel")}>
                {home.achievementsViewAllLabel}
              </Link>
            </header>
            <AchievementsCarousel items={achievements} />
          </article>

          <article className="home-panel home-panel--compact">
            <header className="home-panel-head">
              <h2 data-tina-field={tinaMark(campus, "title")}>{campus.title}</h2>
              <Link href={campus.ctaHref} data-tina-field={tinaMark(campus, "ctaLabel")}>
                {campus.ctaLabel}
              </Link>
            </header>
            <Link className="home-campus" href={campus.ctaHref}>
              <div className="home-campus-photo">
                <Image
                  src={campus.image}
                  alt={campus.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 14vw"
                  data-tina-field={tinaMark(campus, "image")}
                />
              </div>
              <p data-tina-field={tinaMark(campus, "body")}>{campus.body}</p>
            </Link>
          </article>

          <article className="home-panel home-panel--compact">
            <header className="home-panel-head">
              <h2 data-tina-field={tinaMark(home, "upcomingEventsTitle")}>{home.upcomingEventsTitle}</h2>
              <Link href="/news?tab=event" data-tina-field={tinaMark(home, "upcomingEventsViewAllLabel")}>
                {home.upcomingEventsViewAllLabel}
              </Link>
            </header>
            <ul className="home-events">
              {home.upcomingEvents.map((event) => (
                <li key={`${event.day}-${event.title}`}>
                  <span className="home-event-date">
                    <b data-tina-field={tinaMark(event, "day")}>{event.day}</b>
                    <span data-tina-field={tinaMark(event, "month")}>{event.month}</span>
                  </span>
                  <div>
                    <strong data-tina-field={tinaMark(event, "title")}>{event.title}</strong>
                    <p data-tina-field={tinaMark(event, "text")}>{event.text}</p>
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
            <h2 className="section-title" data-tina-field={tinaMark(home, "partnersTitle")}>
              {home.partnersTitle}
            </h2>
            <p data-tina-field={tinaMark(home, "partnersKicker")}>{home.partnersKicker}</p>
          </div>
          <PartnersGrid items={home.partners} />
        </div>
      </section>
    </>
  );
}
