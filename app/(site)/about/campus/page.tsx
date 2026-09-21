import type { Metadata } from "next";
import CampusBody from "@/components/campus/CampusBody";
import { getCampusContent } from "@/lib/campus";

export async function generateMetadata(): Promise<Metadata> {
  const campus = await getCampusContent();
  return {
    title: campus.metaTitle,
    description: campus.metaDescription
  };
}

export default async function CampusPage() {
  const campus = await getCampusContent();
  return <CampusBody content={campus} />;
}
