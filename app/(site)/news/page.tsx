import type { Metadata } from "next";
import NewsBody from "@/components/news/NewsBody";
import { EditablePage } from "@/components/tina/EditablePage";
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
  const [{ tab }, content] = await Promise.all([searchParams, getNewsContent()]);

  return (
    <EditablePage
      query={NewsDocument}
      variables={{ relativePath: "news.json" }}
      data={{ news: content }}
      documentPath="content/news/news.json"
    >
      <NewsBody content={content} initialTab={tab} />
    </EditablePage>
  );
}
