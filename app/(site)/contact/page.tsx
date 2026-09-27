import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";
import { EditablePage } from "@/components/tina/EditablePage";
import { getContactContent } from "@/lib/contact";
import { getSchool } from "@/lib/siteContent";
import { ContactDocument } from "@/tina/__generated__/types";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContactContent();
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default async function ContactPage() {
  const content = await getContactContent();
  const school = getSchool();

  return (
    <EditablePage
      query={ContactDocument}
      variables={{ relativePath: "contact.json" }}
      data={{ contact: content }}
      documentPath="content/contact/contact.json"
    >
      <ContactView
        content={content}
        schoolName={school.name}
        address={school.address}
        phone={school.phones[0] ?? ""}
        email={school.emails[0] ?? ""}
        whatsapp={school.whatsapp}
        mapUrl={school.mapUrl}
        socials={school.socials}
      />
    </EditablePage>
  );
}
