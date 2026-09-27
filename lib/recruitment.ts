import { readContent } from "@/lib/readContent";

export type RecruitmentContent = {
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  title: string;
  lede: string;
  formHeading: string;
  nameLabel: string;
  namePlaceholder: string;
  dobLabel: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  addressLabel: string;
  addressPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  positionLabel: string;
  positionPlaceholder: string;
  positions: string[];
  educationLabel: string;
  educationPlaceholder: string;
  experienceLabel: string;
  experiencePlaceholder: string;
  photoLabel: string;
  payslipLabel: string;
  resumeLabel: string;
  submitLabel: string;
  resetLabel: string;
  successMessage: string;
};

export const defaultRecruitment: RecruitmentContent = {
  metaTitle: "Staff Recruitment",
  metaDescription:
    "Apply to join the teaching and staff team at Lawrence High School ICSE, HSR Layout, Bengaluru.",
  heroImage: "/images/home/hero/hero-building.png",
  heroImageAlt: "Lawrence High School campus entrance in HSR Layout, Bengaluru",
  title: "Staff *Recruitment*",
  lede: "Join our dedicated team of educators and staff committed to nurturing young minds and building future leaders.",
  formHeading: "Staff Recruitment Application",
  nameLabel: "Name",
  namePlaceholder: "Enter your name",
  dobLabel: "Date of Birth",
  emailLabel: "Email",
  emailPlaceholder: "Enter your email",
  phoneLabel: "Phone Number",
  phonePlaceholder: "Enter your phone number",
  addressLabel: "Address",
  addressPlaceholder: "Enter your address",
  subjectLabel: "Subject Preferred",
  subjectPlaceholder: "Enter subject preferred",
  positionLabel: "Position Applied",
  positionPlaceholder: "Teacher, Research, Counseling, Clerical, etc.",
  positions: ["Teacher", "Researcher", "Counselor", "Clerical", "Administrative", "Support Staff"],
  educationLabel: "Education Details",
  educationPlaceholder: "Enter your education details",
  experienceLabel: "Experience Details",
  experiencePlaceholder: "Enter your experience details",
  photoLabel: "Profile Photo",
  payslipLabel: "Last Pay Slip",
  resumeLabel: "Updated Resume",
  submitLabel: "Submit",
  resetLabel: "Reset",
  successMessage: "Your application is ready. Email and WhatsApp should open so you can send it to the school. Attach your photo, pay slip, and resume in WhatsApp before you send."
};

export async function getRecruitmentContent(): Promise<RecruitmentContent> {
  return readContent("content/recruitment/recruitment.json", defaultRecruitment);
}
