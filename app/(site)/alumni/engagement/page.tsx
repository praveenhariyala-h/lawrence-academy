import type { Metadata } from "next";
import AlumniFormView from "@/components/alumni/AlumniFormView";
import { EditablePage } from "@/components/tina/EditablePage";
import { getAlumniContent } from "@/lib/alumni";
import { getSchool } from "@/lib/siteContent";
import { AlumniDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAlumniContent();
  return {
    title: content.form.heading,
    description: content.form.intro || content.metaDescription
  };
}

export default async function AlumniEngagementPage() {
  const content = await getAlumniContent();
  const school = getSchool();
  return (
    <EditablePage
      query={AlumniDocument}
      variables={{ relativePath: "alumni.json" }}
      data={{ alumni: content }}
      documentPath="content/alumni/alumni.json"
    >
      <AlumniFormView content={content} email="alumnilawrence26@gmail.com" whatsapp={school.whatsapp} />
    </EditablePage>
  );
}
