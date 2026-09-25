"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import AchievementCards from "@/components/news/AchievementCards";
import type {
  NewsAchievement,
  NewsCategory,
  NewsEvent,
  NewsPost,
  NewsTabsCopy
} from "@/lib/news";

const tabIds: NewsCategory[] = ["result", "achievement", "event"];

function resolveTab(value: string | undefined): NewsCategory {
  if (value === "achievement" || value === "achievements") return "achievement";
  if (value === "event" || value === "events") return "event";
  return "result";
}

function NewsCard({
  href,
  kicker,
  title,
  text
}: {
  href?: string;
  kicker: string;
  title: string;
  text?: string;
}) {
  const className = "news-achieve-card news-achieve-card--plain";
  const body = (
    <>
      <span className="news-achieve-copy">
        <span className="news-achieve-kicker">{kicker}</span>
        <strong>{title}</strong>
        {text ? <span className="news-achieve-text">{text}</span> : null}
      </span>
      <span className="news-achieve-arrow" aria-hidden="true">
        ↗
      </span>
    </>
  );

  if (href) {
    return (
      <Link className={className} href={href}>
        {body}
      </Link>
    );
  }

  return <article className={className}>{body}</article>;
}

export default function NewsTabs({
  posts,
  events,
  results,
  achievements,
  copy,
  initialTab
}: {
  posts: NewsPost[];
  events: NewsEvent[];
  results: NewsResult[];
  achievements: NewsAchievement[];
  copy: NewsTabsCopy;
  initialTab?: string;
}) {
  const [tab, setTab] = useState<NewsCategory>(resolveTab(initialTab));
  const tabs = useMemo(
    () => [
      { id: "result" as const, label: copy.resultLabel },
      { id: "achievement" as const, label: copy.achievementLabel },
      { id: "event" as const, label: copy.eventLabel }
    ],
    [copy]
  );
  const emptyCopy: Record<NewsCategory, string> = {
    result: copy.resultEmpty,
    achievement: copy.achievementEmpty,
    event: copy.eventEmpty
  };
  const items = useMemo(
    () => posts.filter((post) => post.category === tab),
    [posts, tab]
  );

  return (
    <div className="news-tabs">
      <div className="news-tablist" role="tablist" aria-label="News categories">
        {tabs.map((item) => (
          <button
            key={item.id}
            className={tab === item.id ? "news-tab is-on" : "news-tab"}
            type="button"
            role="tab"
            id={`news-tab-${item.id}`}
            aria-selected={tab === item.id}
            aria-controls={`news-panel-${item.id}`}
            tabIndex={tab === item.id ? 0 : -1}
            onClick={() => {
              setTab(item.id);
              const url = new URL(window.location.href);
              url.searchParams.set("tab", item.id);
              window.history.replaceState(null, "", `${url.pathname}${url.search}`);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tabIds.map((id) => {
        if (id !== tab) return null;
        const panelItems = items;
        const showEvents = id === "event";

        return (
          <div
            key={id}
            className="news-tabpanel"
            role="tabpanel"
            id={`news-panel-${id}`}
            aria-labelledby={`news-tab-${id}`}
          >
            {id === "achievement" && achievements.length ? (
              <AchievementCards items={achievements} />
            ) : null}

            {id === "result" && results.length ? (
              <AchievementCards items={results} empty="Results will appear here as they are published." imageFit="contain" />
            ) : null}

            {showEvents && (events.length || panelItems.length) ? (
              <div className="news-events">
                {events.length ? (
                  <AchievementCards
                    items={events.map((event) => ({
                      kicker: event.day && event.month ? `${event.day} ${event.month}` : "Event",
                      title: event.title,
                      body: event.body || event.text,
                      photos: event.photos
                    }))}
                    empty={emptyCopy.event}
                  />
                ) : null}
                {panelItems.length ? (
                  <div className="news-achieve-grid">
                    {panelItems.map((post) => (
                      <NewsCard
                        key={post.slug}
                        href={`/news/${post.slug}`}
                        kicker={post.dateLabel || "Event"}
                        title={post.title}
                        text={post.summary}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            {id === "result" && !results.length ? (
              <p className="lede news-empty">{emptyCopy.result}</p>
            ) : null}

            {id === "event" && !events.length && !panelItems.length ? (
              <p className="lede news-empty">{emptyCopy.event}</p>
            ) : null}

            {id === "achievement" && !achievements.length ? (
              <p className="lede news-empty">{emptyCopy.achievement}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
