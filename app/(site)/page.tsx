import type { Metadata } from "next";
import HomeView from "@/components/home/HomeView";
import { EditablePage } from "@/components/tina/EditablePage";
import { getHomeContent } from "@/lib/home";
import { HomeDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHomeContent();
  return {
    title: { absolute: home.metaTitle },
    description: home.metaDescription
  };
}

export default async function HomePage() {
  const home = await getHomeContent();

  return (
    <EditablePage
      query={HomeDocument}
      variables={{ relativePath: "home.json" }}
      data={{ home }}
      documentPath="content/home/home.json"
    >
      <HomeView content={home} />
    </EditablePage>
  );
}
