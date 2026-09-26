import type { Metadata } from "next";
import AdmissionsView from "@/components/admissions/AdmissionsView";
import { getAdmissionsContent } from "@/lib/admissions";
import { getSchool } from "@/lib/siteContent";
import { AdmissionsDocument } from "@/tina/__generated__/types";

const relativePath = "admissions.json";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAdmissionsContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function AdmissionsPage() {
  const content = await getAdmissionsContent();
  const school = getSchool();

  return (
    <AdmissionsView
      query={AdmissionsDocument}
      variables={{ relativePath }}
      data={{ admissions: content }}
      phones={school.phones}
      email={school.emails[0] ?? ""}
    />
  );
}
