import type { Metadata } from "next";
import FacilitiesBody from "@/components/facilities/FacilitiesBody";
import { EditablePage } from "@/components/tina/EditablePage";
import { getFacilitiesContent } from "@/lib/facilities";
import { FacilitiesDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const facilities = await getFacilitiesContent();
  return {
    title: facilities.metaTitle,
    description: facilities.metaDescription
  };
}

export default async function FacilitiesPage() {
  const facilities = await getFacilitiesContent();
  return (
    <EditablePage
      query={FacilitiesDocument}
      variables={{ relativePath: "facilities.json" }}
      data={{ facilities }}
      documentPath="content/facilities/facilities.json"
    >
      <FacilitiesBody content={facilities} />
    </EditablePage>
  );
}
