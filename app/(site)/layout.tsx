import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { EditablePage } from "@/components/tina/EditablePage";
import { getSchool } from "@/lib/siteContent";
import { SiteDocument } from "@/tina/__generated__/types";

export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const school = getSchool();

  return (
    <EditablePage
      query={SiteDocument}
      variables={{ relativePath: "site.json" }}
      data={{ site: school }}
      documentPath="content/settings/site.json"
      selectForm={false}
    >
      <Header />
      <main id="main">{children}</main>
      <Footer school={school} />
    </EditablePage>
  );
}
