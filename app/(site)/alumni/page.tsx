import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Alumni",
  description: "This page is under development."
};

export default function AlumniPage() {
  return (
    <PageHero
      kicker="Alumni"
      title="Page under development"
      lede="This page is being updated. Please check back soon."
    />
  );
}
