import { readContent } from "@/lib/readContent";

export type ContactContent = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lede: string;
  officeHeading: string;
  transportHeading: string;
  transportBody: string;
  mapTitle: string;
};

export const defaultContact: ContactContent = {
  metaTitle: "Contact",
  metaDescription:
    "Visit Lawrence High School ICSE in HSR Layout, Bengaluru, or write to the school office and transport desk.",
  kicker: "Contact",
  title: "Office, transport, and a map to campus.",
  lede: "Reach the school office for admissions, campus visits, and day-to-day questions. Transport routes are handled by a dedicated desk.",
  officeHeading: "School office",
  transportHeading: "Transport",
  transportBody: "For bus routes, pickup points, and changes to the run, call the transport desk.",
  mapTitle: "Find the campus"
};

export async function getContactContent(): Promise<ContactContent> {
  return readContent("content/contact/contact.json", defaultContact);
}
