import Image from "next/image";
import Link from "next/link";
import AchievementsCarousel from "@/components/home/AchievementsCarousel";
import PartnersGrid from "@/components/home/PartnersGrid";
import {
  achievementImageForSlug,
  beyondClassroom,
  campusSpotlight,
  featuredAchievementFallback,
  upcomingEvents
} from "@/lib/homeSections";
import type { HomeContent } from "@/lib/home";
import { formatNewsDate, reader } from "@/lib/keystatic";

export default async function HomeBelowFold({
  home
}: {
  home: HomeContent;
}) {
  let achievements = [featuredAchievementFallback];
  try {
    const posts = await reader.collections.posts.all();
    const sorted = [...posts].sort((a, b) =>
      (b.entry.date ?? "").localeCompare(a.entry.date ?? "")
    );
    if (sorted.length) {
      achievements = sorted.map((post) => ({
        title: post.entry.title,
        text: post.entry.summary || "",
        date: formatNewsDate(post.entry.date),
        image: achievementImageForSlug(post.slug),
        alt: post.entry.title,
        href: `/news/${post.slug}`
      }));
    }
  } catch {
    achievements = [featuredAchievementFallback];
  }

  return (
    <>
      <section className="beyond">
        <div className="wrap beyond-inner">
          <div className="beyond-copy">
            <h2>{beyondClassroom.title}</h2>
            <p>{beyondClassroom.body}</p>
            <Link className="btn btn--gold" href={beyondClassroom.ctaHref}>
              {beyondClassroom.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="beyond-tiles">
            {beyondClassroom.items.map((item) => (
              <Link
                key={item.title}
                className="beyond-tile"
                href={beyondClassroom.ctaHref}
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
              <h2>Recent Achievements</h2>
              <Link href="/news">View all</Link>
            </header>
            <AchievementsCarousel items={achievements} />
          </article>

          <article className="home-panel home-panel--compact">
            <header className="home-panel-head">
              <h2>{campusSpotlight.title}</h2>
              <Link href={campusSpotlight.ctaHref}>{campusSpotlight.ctaLabel}</Link>
            </header>
            <Link className="home-campus" href={campusSpotlight.ctaHref}>
              <div className="home-campus-photo">
                <Image
                  src={campusSpotlight.image}
                  alt={campusSpotlight.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 14vw"
                />
              </div>
              <p>{campusSpotlight.body}</p>
            </Link>
          </article>

          <article className="home-panel home-panel--compact">
            <header className="home-panel-head">
              <h2>Upcoming Events</h2>
              <Link href="/news">View all</Link>
            </header>
            <ul className="home-events">
              {upcomingEvents.map((event) => (
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
