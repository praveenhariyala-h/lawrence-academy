import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Alumni" };

export default function AlumniPage() {
  return <ComingSoon kicker="Alumni" title="Once a Lawrencian, always a Lawrencian." />;
}
