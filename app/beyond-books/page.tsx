import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Beyond Books" };

export default function BeyondBooksPage() {
  return <ComingSoon kicker="Beyond books" title="Skills that last a lifetime." />;
}
