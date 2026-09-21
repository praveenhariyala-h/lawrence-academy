import type { Metadata } from "next";
import FacilitiesBody from "@/components/facilities/FacilitiesBody";
import { getFacilitiesContent } from "@/lib/facilities";

export async function generateMetadata(): Promise<Metadata> {
  const facilities = await getFacilitiesContent();
  return {
    title: facilities.metaTitle,
    description: facilities.metaDescription
  };
}

export default async function FacilitiesPage() {
  const facilities = await getFacilitiesContent();
  return <FacilitiesBody content={facilities} />;
}
