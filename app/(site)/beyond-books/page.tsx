import type { Metadata } from "next";
import BeyondBody from "@/components/beyond/BeyondBody";
import { getBeyondContent } from "@/lib/beyond";

export const metadata: Metadata = {
  title: "Beyond Books",
  description:
    "Sports, creative expression, communication, STEM, Vedic Maths, financial literacy and field trips at Lawrence High School ICSE, HSR Layout."
};

export default async function BeyondBooksPage() {
  const content = await getBeyondContent();
  return <BeyondBody content={content} />;
}
