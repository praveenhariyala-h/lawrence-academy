import { readContent } from "@/lib/readContent";

export const highSchool = {
  hero: {
    kicker: "High School",
    title: "Grades 8 – 10\nPreparing Today for a *Brighter Tomorrow*",
    lede: "Knowledge. Character. Confidence.",
    image: "/images/about/hs-hero.png",
    imageAlt: "High school students writing in class at Lawrence High School"
  },
  approach: {
    kicker: "Our Approach",
    title: "Building Confident, Future-Ready Individuals",
    body: "At Lawrence, we create a stimulating learning environment that helps students build strong concepts, think critically and apply their learning in the real world. With personalised mentorship, we guide each learner through academic and personal growth, empowering them to face the future with confidence.",
    photos: [
      {
        src: "/images/about/hs-approach.png",
        alt: "High school students working in the science lab at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-1.png",
        alt: "A teacher using a smart classroom to explain a science lesson at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-2.png",
        alt: "High school students working at their desks in class at Lawrence High School"
      }
    ],
    values: [
      {
        icon: "cap",
        title: "In-depth Learning",
        text: "Conceptual clarity beyond textbooks"
      },
      {
        icon: "mentorship",
        title: "Personalised Mentorship",
        text: "One-to-one guidance for academic and personal growth"
      },
      {
        icon: "trophy",
        title: "Future-Ready Mindset",
        text: "Confident, responsible and compassionate young adults"
      }
    ]
  },
  curriculum: {
    kicker: "Our Curriculum",
    title: "A Strong Academic Foundation",
    grade8: {
      title: "Grade 8",
      subtitle: "Building Core Competencies",
      subjects: [
        { icon: "language", title: "English" },
        { icon: "geography", title: "Geography" },
        { icon: "maths", title: "Mathematics" },
        { icon: "civics", title: "History & Civics" },
        { icon: "biology", title: "Biology" },
        { icon: "computer", title: "Computers" },
        { icon: "physics", title: "Physics" },
        { icon: "chemistry", title: "Chemistry" }
      ]
    },
    grade910: {
      title: "Grades 9 & 10",
      subtitle: "ICSE Curriculum",
      lede: "A Balanced Choice for a Brighter Future",
      groups: [
        {
          title: "Group 1",
          subtitle: "Compulsory Subjects",
          tone: "peach",
          subjects: [
            { icon: "language", title: "English Language" },
            { icon: "literature", title: "English Literature" },
            { icon: "secondLanguage", title: "Second Language", detail: "(Hindi / Kannada / French)" },
            { icon: "civics", title: "History & Civics" },
            { icon: "geography", title: "Geography" }
          ]
        },
        {
          title: "Group 2",
          subtitle: "Elective Subjects",
          tone: "blue",
          subjects: [
            { icon: "science", title: "Mathematics and Science" },
            { icon: "environment", title: "Mathematics and Environmental Science" },
            { icon: "economics", title: "Economics and Commerce" },
            { icon: "commerce", title: "Commerce and Mathematics" }
          ]
        },
        {
          title: "Group 3",
          subtitle: "Other Elective Subjects",
          tone: "gold",
          subjects: [
            { icon: "computer", title: "Computer Applications" },
            { icon: "art", title: "Art" },
            { icon: "pe", title: "Physical Education" },
            { icon: "robotics", title: "AI and Robotics" },
            { icon: "economics", title: "Economics Applications" },
            { icon: "environment", title: "Environmental Applications" }
          ]
        }
      ]
    }
  },
  beyond: {
    kicker: "Beyond Academics",
    title: "Growing in Mind, Body & Character",
    body: "High school at Lawrence goes beyond academic preparation. We nurture strength of mind and body, resilience and values, with our teachers guiding and supporting students through every step of their journey.",
    photos: [
      {
        src: "/images/about/hs-beyond-1.png",
        alt: "High school students sprinting on sports day at Lawrence High School"
      },
      {
        src: "/images/about/hs-beyond-2.png",
        alt: "High school students performing a group dance on stage at Lawrence High School"
      },
      {
        src: "/images/about/hs-beyond-3.png",
        alt: "Cadets forming a human pyramid at Lawrence High School"
      },
      {
        src: "/images/about/hs-beyond-4.png",
        alt: "High school students speaking on stage at Lawrence High School"
      },
      {
        src: "/images/about/hs-beyond-5.png",
        alt: "High school students cycling on sports day at Lawrence High School"
      },
      {
        src: "/images/about/hs-beyond-6.png",
        alt: "High school students cycling during an athletics event at Lawrence High School"
      },
      {
        src: "/images/about/hs-beyond-7.png",
        alt: "High school students running a track race at Lawrence High School"
      }
    ],
    values: [
      {
        icon: "brain",
        title: "Think with Clarity",
        text: "Develop critical thinking, confidence and a positive mindset."
      },
      {
        icon: "heart",
        title: "Stay Active & Balanced",
        text: "Build a healthy and disciplined lifestyle for a stronger tomorrow."
      },
      {
        icon: "guided",
        title: "Guided, Not Alone",
        text: "Support through academic and socio-emotional challenges."
      }
    ]
  },
  moments: {
    kicker: "A Glimpse into Our Learning Journey",
    title: "Moments that Inspire",
    photos: [
      {
        src: "/images/about/hs-moments-3.png",
        alt: "High school students performing a science-themed stage act at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-4.png",
        alt: "High school students performing a traditional group dance at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-5.png",
        alt: "High school students performing with a chariot prop on stage at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-6.png",
        alt: "High school students performing a drama on stage at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-7.png",
        alt: "High school students performing a civic-themed play at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-8.png",
        alt: "High school students acting in a cultural play at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-9.png",
        alt: "High school students performing a family drama on stage at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-10.png",
        alt: "High school students performing a contemporary dance at Lawrence High School"
      },
      {
        src: "/images/about/hs-moments-11.png",
        alt: "A high school student performing a classical dance at Lawrence High School"
      }
    ]
  }
};

export type HighSchoolContent = typeof highSchool & {
  metaTitle: string;
  metaDescription: string;
};

export const defaultHighSchool: HighSchoolContent = {
  ...highSchool,
  metaTitle: "High School",
  metaDescription:
    "High School at Lawrence High School ICSE — Grades 8 to 10. ICSE curriculum, mentorship, and holistic development for board success."
};

export async function getHighSchoolContent(): Promise<HighSchoolContent> {
  return readContent("content/high-school/high-school.json", defaultHighSchool);
}
