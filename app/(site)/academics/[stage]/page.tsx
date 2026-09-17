import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HighSchoolBody from "@/components/academics/HighSchoolBody";
import KindergartenBody from "@/components/academics/KindergartenBody";
import MiddleSchoolBody from "@/components/academics/MiddleSchoolBody";
import PrimaryBody from "@/components/academics/PrimaryBody";
import { academicsStages, getAcademicsStage } from "@/lib/academics";

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
  return {
    title: stage.label,
    description: stage.description
  };
}

export default async function AcademicsStagePage({ params }: AcademicsStagePageProps) {
  const { stage: slug } = await params;
  const stage = getAcademicsStage(slug);
  if (!stage) notFound();
  if (slug === "kindergarten") return <KindergartenBody />;
  if (slug === "primary") return <PrimaryBody />;
  if (slug === "middle-school") return <MiddleSchoolBody />;
  if (slug === "high-school") return <HighSchoolBody />;
  notFound();
}
