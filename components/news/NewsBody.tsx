"use client";

import AboutReveal from "@/components/about/AboutReveal";
import PageBanner from "@/components/PageBanner";
import NewsTabs from "@/components/news/NewsTabs";
import { useEditable } from "@/components/tina/EditablePage";
import type { NewsContent } from "@/lib/news";

export default function NewsBody({
  content: initial,
  initialTab
}: {
  content: NewsContent;
  initialTab?: string;
}) {
  const content = useEditable("news", initial);
  const { hero, events } = content;

  return (
    <AboutReveal>
      <PageBanner
        src={hero.image}
        alt={hero.imageAlt}
        kicker={hero.kicker}
        title={hero.title}
        lede={hero.lede}
        fit={hero.fit}
        className="page-banner-title"
      />

      <section className="band band--white news-band">
        <div className="wrap">
          <NewsTabs
            events={events}
            results={content.results}
            achievements={content.achievements}
            copy={content.tabs}
            initialTab={initialTab}
          />
        </div>
      </section>
    </AboutReveal>
  );
}
