import type { Metadata } from "next";
import NewsBody from "@/components/news/NewsBody";
import { getNewsContent, getNewsPosts } from "@/lib/news";

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
  const [{ tab }, content, posts] = await Promise.all([
    searchParams,
    getNewsContent(),
    getNewsPosts()
  ]);

  return <NewsBody content={content} posts={posts} initialTab={tab} />;
}
