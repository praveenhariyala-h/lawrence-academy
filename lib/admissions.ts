import { readContent } from "@/lib/readContent";

export const admissionHero = {
  kicker: "Admissions",
  title: "Begin with a conversation.",
  lede: "Lawrence High School ICSE, HSR Layout welcomes families from Kindergarten to Grade 10. Start with an enquiry, visit campus, and we will walk you through the rest."
};

export const admissionStages = [
  {
    title: "Kindergarten",
    text: "Curiosity begins here — a gentle first year of play, language, and belonging."
  },
  {
    title: "Primary School",
    text: "Strong foundations in reading, writing, number sense, and classroom confidence."
  },
  {
    title: "Middle School",
    text: "Exploring, questioning, and creating — with growing independence."
  },
  {
    title: "High School",
    text: "ICSE preparation for tomorrow, with character and leadership alongside academics."
  }
];

export const admissionSteps = [
  {
    icon: "enquire",
    title: "Make an Enquiry",
    text: "Fill the enquiry form or get in touch. Our team will reach out to schedule a visit or interaction."
  },
  {
    icon: "visit",
    title: "Visit Us",
    text: "Tour our campus and meet us, in person or online."
  },
  {
    icon: "apply",
    title: "Apply for Admission",
    text: "Fill and submit the application form along with the required documents."
  },
  {
    icon: "interaction",
    title: "Admission Interaction",
    text: "Once the paperwork is submitted, we will schedule face to face meetings and/or placement tests to check grade readiness. Details may vary by grade level."
  },
  {
    icon: "offer",
    title: "Admission Offer",
    text: "Once approved, you will receive an offer via email. Confirm your acceptance and pay the required fee within the stipulated time."
  }
];

export const admissionFees = [
  {
    name: "Admission fee",
    covers: "One-time joining fee for a new student.",
    when: "On confirmation of a place"
  },
  {
    name: "Tuition",
    covers: "Teaching, campus facilities, and the school-day programme.",
    when: "Term-wise"
  },
  {
    name: "Transport",
    covers: "Optional school bus on available routes.",
    when: "If opted, with the transport desk"
  },
  {
    name: "Books & uniform",
    covers: "Issued through school vendors at the start of the year.",
    when: "At joining / year start"
  }
];

export const admissionDocuments = [
  "One photograph of your child",
  "Co-/extra-curricular records / achievement certificates, if any",
  "A copy of your child's Birth Certificate",
  "Transfer Certificate from his/her previous school",
  "Academic records / transcripts for the last 3 years (if applicable)",
  "If your child is not an Indian citizen, a copy of his/her visa / permit"
];

export type AdmissionStage = (typeof admissionStages)[number];
export type AdmissionStep = (typeof admissionSteps)[number];
export type AdmissionFee = (typeof admissionFees)[number];

export type AdmissionsContent = {
  metaTitle: string;
  metaDescription: string;
  hero: typeof admissionHero;
  openingsKicker: string;
  openingsTitle: string;
  stages: AdmissionStage[];
  processKicker: string;
  processTitle: string;
  steps: AdmissionStep[];
  feesKicker: string;
  feesTitle: string;
  feesNote: string;
  fees: AdmissionFee[];
  documentsKicker: string;
  documentsTitle: string;
  documentsBody: string;
  documents: string[];
  applyKicker: string;
  applyTitle: string;
  applyBody: string;
  helplineTitle: string;
  visitNote: string;
  visitLinkLabel: string;
  submitLabel: string;
  administrationTeam: {
    title: string;
    image: string;
    imageAlt: string;
  };
};

export const defaultAdmissions: AdmissionsContent = {
  metaTitle: "Admissions",
  metaDescription:
    "Enquire, visit campus, and join Lawrence High School ICSE, HSR Layout — from Kindergarten to Grade 10.",
  hero: admissionHero,
  openingsKicker: "Openings",
  openingsTitle: "Where your child can begin.",
  stages: admissionStages,
  processKicker: "Admission process",
  processTitle: "Admission Process",
  steps: admissionSteps,
  feesKicker: "Fee structure",
  feesTitle: "What fees cover.",
  feesNote:
    "Figures for the current academic year are shared by the admissions office during your campus visit, or on the helpline. We do not publish last year’s numbers here so families always receive the latest schedule.",
  fees: admissionFees,
  documentsKicker: "Documents",
  documentsTitle: "Documents Required",
  documentsBody: "Please keep the following documents ready when you apply for admission.",
  documents: admissionDocuments,
  applyKicker: "Apply now",
  applyTitle: "Admission Enquiry",
  applyBody:
    "Let's begin your child's journey. Share a few details and our Admissions Team will get in touch with you shortly.",
  helplineTitle: "Admission helpline",
  visitNote: "Prefer to visit first? See the map on the",
  visitLinkLabel: "contact page",
  submitLabel: "Submit Enquiry",
  administrationTeam: {
    title: "Administration Team",
    image: "/images/about/principal-devi.jpg",
    imageAlt: "The Principal of Lawrence High School"
  }
};

export async function getAdmissionsContent(): Promise<AdmissionsContent> {
  return readContent("content/admissions/admissions.json", defaultAdmissions);
}
