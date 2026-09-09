import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "News & Events" };

export default function NewsPage() {
  return <ComingSoon kicker="News & events" title="Bulletin board, results and big wins." />;
}
