import type { Metadata } from "next";
import AboutBody from "@/components/about/AboutBody";
import { getAboutContent } from "@/lib/about";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutContent();
  return {
    title: about.metaTitle,
    description: about.metaDescription
  };
}

export default async function AboutPage() {
  const about = await getAboutContent();
  return <AboutBody content={about} />;
}
