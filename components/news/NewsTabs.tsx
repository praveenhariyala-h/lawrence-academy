"use client";

import { useMemo, useState } from "react";
import AchievementCards from "@/components/news/AchievementCards";
import ResultCards from "@/components/news/ResultCards";
import { tinaMark } from "@/components/tina/EditablePage";
import type {
  NewsAchievement,
  NewsCategory,
  NewsEvent,
  NewsResult,
  NewsTabsCopy
} from "@/lib/news";

const tabIds: NewsCategory[] = ["result", "achievement", "event"];

function resolveTab(value: string | undefined): NewsCategory {
  if (value === "achievement" || value === "achievements") return "achievement";
  if (value === "event" || value === "events") return "event";
  return "result";
}

export default function NewsTabs({
  events,
  results,
  achievements,
  copy,
  initialTab
}: {
  events: NewsEvent[];
  results: NewsResult[];
  achievements: NewsAchievement[];
  copy: NewsTabsCopy;
  initialTab?: string;
}) {
  const [tab, setTab] = useState<NewsCategory>(resolveTab(initialTab));
  const resultsList = results ?? [];
  const achievementsList = achievements ?? [];
  const eventsList = (events ?? []).filter((event) => event && typeof event === "object");
  const tabs = useMemo(
    () => [
      { id: "result" as const, label: copy.resultLabel },
      { id: "achievement" as const, label: copy.achievementLabel },
      { id: "event" as const, label: copy.eventLabel }
    ],
    [copy]
  );
  function selectTab(id: NewsCategory) {
    setTab(id);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", id);
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  }

  const emptyCopy: Record<NewsCategory, string> = {
    result: copy.resultEmpty,
    achievement: copy.achievementEmpty,
    event: copy.eventEmpty
  };
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
            onPointerDown={(event) => {
              if (event.button !== 0) return;
              selectTab(item.id);
            }}
            onClick={() => selectTab(item.id)}
          >
            <span data-tina-field={tinaMark(copy, `${item.id}Label`)}>{item.label}</span>
          </button>
        ))}
      </div>

      {tabIds.map((id) => {
        if (id !== tab) return null;

        return (
          <div
            key={id}
            className="news-tabpanel"
            role="tabpanel"
            id={`news-panel-${id}`}
            aria-labelledby={`news-tab-${id}`}
          >
            {id === "achievement" && achievementsList.length ? (
              <AchievementCards items={achievementsList} />
            ) : null}

            {id === "result" && resultsList.length ? (
              <>
                <h2 className="news-result-title" data-tina-field={tinaMark(copy, "resultHeading")}>
                  {copy.resultHeading}
                </h2>
                <ResultCards items={resultsList} />
              </>
            ) : null}

            {id === "event" && eventsList.length ? (
              <div className="news-events">
                <AchievementCards
                  items={eventsList.map((event) => ({
                    kicker: "",
                    title: event.title ?? "",
                    body: event.body || event.text || "",
                    preview: event.text || "",
                    photos: event.photos ?? [],
                    dateDay: event.day ?? "",
                    dateMonth: event.month ?? "",
                    marks: {
                      day: tinaMark(event, "day"),
                      month: tinaMark(event, "month"),
                      title: tinaMark(event, "title"),
                      body: tinaMark(event, "body"),
                      preview: tinaMark(event, "text")
                    }
                  }))}
                  empty={emptyCopy.event}
                />
              </div>
            ) : null}

            {id === "result" && !resultsList.length ? (
              <p className="lede news-empty" data-tina-field={tinaMark(copy, "resultEmpty")}>
                {emptyCopy.result}
              </p>
            ) : null}

            {id === "event" && !eventsList.length ? (
              <p className="lede news-empty" data-tina-field={tinaMark(copy, "eventEmpty")}>
                {emptyCopy.event}
              </p>
            ) : null}

            {id === "achievement" && !achievementsList.length ? (
              <p className="lede news-empty" data-tina-field={tinaMark(copy, "achievementEmpty")}>
                {emptyCopy.achievement}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
