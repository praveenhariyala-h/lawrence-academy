import type { Metadata } from "next";
import AboutBody from "@/components/about/AboutBody";
import { getAboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lawrence High School ICSE, HSR Layout — our journey, educational philosophy, leadership, dedicated teachers, and values."
};

export default async function AboutPage() {
  const about = await getAboutContent();
  return <AboutBody content={about} />;
}
