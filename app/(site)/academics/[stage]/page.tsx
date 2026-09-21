import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HighSchoolBody from "@/components/academics/HighSchoolBody";
import KindergartenBody from "@/components/academics/KindergartenBody";
import MiddleSchoolBody from "@/components/academics/MiddleSchoolBody";
import PrimaryBody from "@/components/academics/PrimaryBody";
import { academicsStages, getAcademicsStage } from "@/lib/academics";
import { getHighSchoolContent } from "@/lib/highSchool";
import { getKindergartenContent } from "@/lib/kindergarten";
import { getMiddleSchoolContent } from "@/lib/middleSchool";
import { getPrimaryContent } from "@/lib/primary";

type AcademicsStagePageProps = {
  params: Promise<{ stage: string }>;
};

export function generateStaticParams() {
  return academicsStages.map((stage) => ({ stage: stage.slug }));
}

export async function generateMetadata({ params }: AcademicsStagePageProps): Promise<Metadata> {
  const { stage: slug } = await params;
  const stage = getAcademicsStage(slug);
  if (!stage) return { title: "Academics" };

  if (slug === "kindergarten") {
    const content = await getKindergartenContent();
    return { title: content.metaTitle, description: content.metaDescription };
  }
  if (slug === "primary") {
    const content = await getPrimaryContent();
    return { title: content.metaTitle, description: content.metaDescription };
  }
  if (slug === "middle-school") {
    const content = await getMiddleSchoolContent();
    return { title: content.metaTitle, description: content.metaDescription };
  }
  if (slug === "high-school") {
    const content = await getHighSchoolContent();
    return { title: content.metaTitle, description: content.metaDescription };
  }

  return {
    title: stage.label,
    description: stage.description
  };
}

export default async function AcademicsStagePage({ params }: AcademicsStagePageProps) {
  const { stage: slug } = await params;
  const stage = getAcademicsStage(slug);
  if (!stage) notFound();
  if (slug === "kindergarten") {
    return <KindergartenBody content={await getKindergartenContent()} />;
  }
  if (slug === "primary") {
    return <PrimaryBody content={await getPrimaryContent()} />;
  }
  if (slug === "middle-school") {
    return <MiddleSchoolBody content={await getMiddleSchoolContent()} />;
  }
  if (slug === "high-school") {
    return <HighSchoolBody content={await getHighSchoolContent()} />;
  }
  notFound();
}
