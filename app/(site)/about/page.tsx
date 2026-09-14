import type { Metadata } from "next";
import AboutBody from "@/components/about/AboutBody";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lawrence High School ICSE, HSR Layout — our journey, educational philosophy, leadership, dedicated teachers, and values."
};

export default function AboutPage() {
  return <AboutBody />;
}
