import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return <ComingSoon kicker="About us" title="Our story, our people, our campus." />;
}
