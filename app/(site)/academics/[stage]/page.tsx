import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HighSchoolBody from "@/components/academics/HighSchoolBody";
import KindergartenBody from "@/components/academics/KindergartenBody";
import MiddleSchoolBody from "@/components/academics/MiddleSchoolBody";
import PrimaryBody from "@/components/academics/PrimaryBody";
import { EditablePage } from "@/components/tina/EditablePage";
import { academicsStages, getAcademicsStage } from "@/lib/academics";
import { getHighSchoolContent } from "@/lib/highSchool";
import { getKindergartenContent } from "@/lib/kindergarten";
import { getMiddleSchoolContent } from "@/lib/middleSchool";
import { getPrimaryContent } from "@/lib/primary";
import {
  HighSchoolDocument,
  KindergartenDocument,
  MiddleSchoolDocument,
  PrimaryDocument
} from "@/tina/__generated__/types";

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
    const content = await getKindergartenContent();
    return (
      <EditablePage
        query={KindergartenDocument}
        variables={{ relativePath: "kindergarten.json" }}
        data={{ kindergarten: content }}
        documentPath="content/kindergarten/kindergarten.json"
      >
        <KindergartenBody content={content} />
      </EditablePage>
    );
  }
  if (slug === "primary") {
    const content = await getPrimaryContent();
    return (
      <EditablePage
        query={PrimaryDocument}
        variables={{ relativePath: "primary.json" }}
        data={{ primary: content }}
        documentPath="content/primary/primary.json"
      >
        <PrimaryBody content={content} />
      </EditablePage>
    );
  }
  if (slug === "middle-school") {
    const content = await getMiddleSchoolContent();
    return (
      <EditablePage
        query={MiddleSchoolDocument}
        variables={{ relativePath: "middle-school.json" }}
        data={{ middleSchool: content }}
        documentPath="content/middle-school/middle-school.json"
      >
        <MiddleSchoolBody content={content} />
      </EditablePage>
    );
  }
  if (slug === "high-school") {
    const content = await getHighSchoolContent();
    return (
      <EditablePage
        query={HighSchoolDocument}
        variables={{ relativePath: "high-school.json" }}
        data={{ highSchool: content }}
        documentPath="content/high-school/high-school.json"
      >
        <HighSchoolBody content={content} />
      </EditablePage>
    );
  }

  notFound();
}
