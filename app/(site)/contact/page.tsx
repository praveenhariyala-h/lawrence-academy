import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <ComingSoon kicker="Contact" title="Office, transport, and a map to campus." />;
}
