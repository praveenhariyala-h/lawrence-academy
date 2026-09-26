import type { Metadata } from "next";
import AboutBody from "@/components/about/AboutBody";
import { EditablePage } from "@/components/tina/EditablePage";
import { getAboutContent } from "@/lib/about";
import { AboutDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutContent();
  return {
    title: about.metaTitle,
    description: about.metaDescription
  };
}

export default async function AboutPage() {
  const about = await getAboutContent();
  return (
    <EditablePage
      query={AboutDocument}
      variables={{ relativePath: "about.json" }}
      data={{ about }}
      documentPath="content/about/about.json"
    >
      <AboutBody content={about} />
    </EditablePage>
  );
}
