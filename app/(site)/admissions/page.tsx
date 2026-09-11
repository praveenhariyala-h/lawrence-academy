import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Admissions" };

export default function AdmissionsPage() {
  return <ComingSoon kicker="Admissions" title="Begin with a conversation." />;
}
