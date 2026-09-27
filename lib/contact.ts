import { readContent } from "@/lib/readContent";

export type ContactHour = {
  days: string;
  time: string;
};

export type ContactContent = {
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  title: string;
  subtitle: string;
  lede: string;
  touchHeading: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  hoursHeading: string;
  hours: ContactHour[];
  formHeading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailFieldLabel: string;
  emailPlaceholder: string;
  phoneFieldLabel: string;
  phonePlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjects: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successMessage: string;
  recruitTitle: string;
  recruitBody: string;
  recruitLabel: string;
  recruitHref: string;
  mapTitle: string;
  connectTitle: string;
  motto: string[];
};

export const defaultContact: ContactContent = {
  metaTitle: "Contact",
  metaDescription:
    "Contact Lawrence High School ICSE in HSR Layout, Bengaluru. Visit the campus, call the office, or send a message.",
  heroImage: "/images/home/hero/hero-building.png",
  heroImageAlt: "Lawrence High School campus entrance in HSR Layout, Bengaluru",
  title: "Contact *Us*",
  subtitle: "We're Here to Connect",
  lede: "We would love to hear from you. Whether you have a question, need more information, or would like to visit our campus, our team is here to help.",
  touchHeading: "Get in Touch",
  addressLabel: "Address",
  phoneLabel: "Phone",
  emailLabel: "Email",
  hoursHeading: "Working Hours",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 4:00 PM" },
    { days: "Saturday", time: "9:00 AM – 12:30 PM" },
    { days: "Sunday", time: "Closed" }
  ],
  formHeading: "Send Us a Message",
  nameLabel: "Name",
  namePlaceholder: "Enter your name",
  emailFieldLabel: "Email ID",
  emailPlaceholder: "Enter your email",
  phoneFieldLabel: "Contact No",
  phonePlaceholder: "Enter your contact number",
  subjectLabel: "Subject",
  subjectPlaceholder: "Select Subject",
  subjects: ["Admissions", "Campus Visit", "Academics", "Transport", "General Enquiry"],
  messageLabel: "Message",
  messagePlaceholder: "Type your message here...",
  submitLabel: "Submit",
  successMessage: "Your message is ready. Email and WhatsApp should open so you can send it to the school.",
  recruitTitle: "Be part of our\n*Lawrence Family*",
  recruitBody:
    "Join our dedicated team of educators and staff committed to nurturing young minds and building future leaders.",
  recruitLabel: "Staff Recruitment",
  recruitHref: "/recruitment",
  mapTitle: "Find Us",
  connectTitle: "Connect With Us",
  motto: ["LEARN", "GROW", "BELONG"]
};

export async function getContactContent(): Promise<ContactContent> {
  return readContent("content/contact/contact.json", defaultContact);
}
