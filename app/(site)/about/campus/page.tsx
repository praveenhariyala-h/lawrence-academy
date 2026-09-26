import type { Metadata } from "next";
import CampusBody from "@/components/campus/CampusBody";
import { EditablePage } from "@/components/tina/EditablePage";
import { getCampusContent } from "@/lib/campus";
import { CampusDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const campus = await getCampusContent();
  return {
    title: campus.metaTitle,
    description: campus.metaDescription
  };
}

export default async function CampusPage() {
  const campus = await getCampusContent();
  return (
    <EditablePage
      query={CampusDocument}
      variables={{ relativePath: "campus.json" }}
      data={{ campus }}
      documentPath="content/campus/campus.json"
    >
      <CampusBody content={campus} />
    </EditablePage>
  );
}
