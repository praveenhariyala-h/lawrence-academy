import type { Metadata } from "next";
import BeyondBody from "@/components/beyond/BeyondBody";
import { EditablePage } from "@/components/tina/EditablePage";
import { getBeyondContent } from "@/lib/beyond";
import { BeyondBooksDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getBeyondContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function BeyondBooksPage() {
  const content = await getBeyondContent();
  return (
    <EditablePage
      query={BeyondBooksDocument}
      variables={{ relativePath: "beyond-books.json" }}
      data={{ beyondBooks: content }}
      documentPath="content/beyond-books/beyond-books.json"
    >
      <BeyondBody content={content} />
    </EditablePage>
  );
}
