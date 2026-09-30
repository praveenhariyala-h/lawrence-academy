import type { Metadata } from "next";
import AlumniView from "@/components/alumni/AlumniView";
import { EditablePage } from "@/components/tina/EditablePage";
import { getAlumniContent } from "@/lib/alumni";
import { getSchool } from "@/lib/siteContent";
import { AlumniDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAlumniContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function AlumniPage() {
  const content = await getAlumniContent();
  const school = getSchool();
  return (
    <EditablePage
      query={AlumniDocument}
      variables={{ relativePath: "alumni.json" }}
      data={{ alumni: content }}
      documentPath="content/alumni/alumni.json"
    >
      <AlumniView content={content} email={school.emails[0] ?? ""} whatsapp={school.whatsapp} />
    </EditablePage>
  );
}
