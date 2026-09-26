import type { Metadata } from "next";
import NewsBody from "@/components/news/NewsBody";
import { getNewsContent } from "@/lib/news";

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
  const [{ tab }, content] = await Promise.all([searchParams, getNewsContent()]);

  return <NewsBody content={content} initialTab={tab} />;
}
