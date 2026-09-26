import type { Metadata } from "next";
import BeyondBody from "@/components/beyond/BeyondBody";
import { getBeyondContent } from "@/lib/beyond";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getBeyondContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function BeyondBooksPage() {
  const content = await getBeyondContent();
  return <BeyondBody content={content} />;
}
