import type { Metadata } from "next";
import RecruitmentView from "@/components/recruitment/RecruitmentView";
import { EditablePage } from "@/components/tina/EditablePage";
import { getRecruitmentContent } from "@/lib/recruitment";
import { getSchool } from "@/lib/siteContent";
import { RecruitmentDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getRecruitmentContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function RecruitmentPage() {
  const content = await getRecruitmentContent();
  const school = getSchool();
  return (
    <EditablePage
      query={RecruitmentDocument}
      variables={{ relativePath: "recruitment.json" }}
      data={{ recruitment: content }}
      documentPath="content/recruitment/recruitment.json"
    >
      <RecruitmentView
        content={content}
        email={school.emails[0] ?? ""}
        whatsapp={school.whatsapp}
      />
    </EditablePage>
  );
}
