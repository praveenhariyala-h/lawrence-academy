import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Learning at Lawrence" };

export default function LearningPage() {
  return <ComingSoon kicker="Learning" title="ICSE academics with future-ready skills." />;
}
