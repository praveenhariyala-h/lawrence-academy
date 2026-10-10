import { readContent } from "@/lib/readContent";

export type ContactHour = {
  days: string;
  time: string;
};

export type ContactFaq = {
  question: string;
  answer: string;
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
  messageEmail: string;
  successMessage: string;
  recruitTitle: string;
  recruitBody: string;
  recruitLabel: string;
  recruitHref: string;
  mapTitle: string;
  connectTitle: string;
  motto: string[];
  faqHeading: string;
  faqs: ContactFaq[];
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
  messageEmail: "lawrence.school.icse@gmail.com",
  successMessage: "Thank you. Your message has been sent, and we will be in touch shortly.",
  recruitTitle: "Be part of our\n*Lawrence Family*",
  recruitBody:
    "Join our dedicated team of educators and staff committed to nurturing young minds and building future leaders.",
  recruitLabel: "Staff Recruitment",
  recruitHref: "/recruitment",
  mapTitle: "Find Us",
  connectTitle: "Connect With Us",
  motto: ["LEARN", "GROW", "BELONG"],
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      question: "Which curriculum does Lawrence High School follow?",
      answer:
        "Lawrence High School follows the ICSE curriculum, providing students with a strong academic foundation along with opportunities for creativity, sports, technology, and holistic development."
    },
    {
      question: "Which classes are offered at the school?",
      answer: "The school offers education from Kindergarten to Grade 10."
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply for admission by visiting the school office or by submitting the application online through our website. Our admissions team will be happy to assist you with the admission process and the required documents."
    },
    {
      question: "What documents are required for admission?",
      answer:
        "The required documents may include the child's birth certificate, previous academic records, transfer certificate where applicable, photographs, and other documents specified by the school during the admission process."
    },
    {
      question: "Does the school provide transportation facilities?",
      answer:
        "Yes. The school provides transportation facilities covering selected routes. Parents can contact the school for route availability and other transport-related details."
    },
    {
      question: "Does the school have CCTV security?",
      answer:
        "Yes. The school has CCTV surveillance and appropriate safety measures across key areas of the campus to help maintain a secure environment for students."
    },
    {
      question: "What facilities are available on campus?",
      answer:
        "The campus provides facilities that support both academics and co-curricular learning, including computer, robotics, physics, chemistry, and biology laboratories, along with spaces for sports and other activities."
    },
    {
      question: "Does the school offer activities beyond academics?",
      answer:
        "Yes. The school believes in holistic development and provides enriching experiences through sports, performing arts, creative arts, technology, clubs, competitions, and leadership opportunities."
    },
    {
      question: "How can parents contact the school?",
      answer:
        "Parents can contact the school through the details provided in the Contact Us / Let's Connect section of the website."
    }
  ]
};

export async function getContactContent(): Promise<ContactContent> {
  return readContent("content/contact/contact.json", defaultContact);
}
