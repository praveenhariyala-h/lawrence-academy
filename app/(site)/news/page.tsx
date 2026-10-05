import type { Metadata } from "next";
import NewsBody from "@/components/news/NewsBody";
import { EditablePage } from "@/components/tina/EditablePage";
import { getAchievements } from "@/lib/achievements";
import { getEvents } from "@/lib/events";
import { getNewsContent } from "@/lib/news";
import { NewsDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getNewsContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function NewsPage({
  searchParams
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const [{ tab }, content, achievements, events] = await Promise.all([
    searchParams,
    getNewsContent(),
    getAchievements(),
    getEvents()
  ]);

  return (
    <EditablePage
      query={NewsDocument}
      variables={{ relativePath: "news.json" }}
      data={{ news: content }}
      documentPath="content/news/news.json"
    >
      <NewsBody content={content} achievements={achievements} events={events} initialTab={tab} />
    </EditablePage>
  );
}
