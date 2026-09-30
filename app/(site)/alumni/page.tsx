import type { Metadata } from "next";
import AlumniView from "@/components/alumni/AlumniView";
import { getSchool } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Lawrence School Alumni networking and engagement form. Reconnect with Lawrence High School and share how you would like to be involved."
};

export default function AlumniPage() {
  const school = getSchool();
  return <AlumniView email={school.emails[0] ?? ""} whatsapp={school.whatsapp} />;
}
