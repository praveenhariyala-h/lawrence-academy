import { imageSrc, mapPhotos, textSrc } from "@/lib/cms";
import { reader } from "@/lib/keystatic";

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
          note: "(Choose any two)",
          tone: "blue",
          subjects: [
            { icon: "maths", title: "Mathematics" },
            { icon: "science", title: "Science", detail: "(Physics, Chemistry, Biology)" },
            { icon: "computer", title: "Computer Applications" },
            { icon: "economics", title: "Economic Applications" },
            { icon: "commerce", title: "Commercial Applications" }
          ]
        },
        {
          title: "Group 3",
          subtitle: "Other Elective Subjects",
          note: "(Choose any one)",
          tone: "gold",
          subjects: [
            { icon: "computer", title: "Computer Applications" },
            { icon: "pe", title: "Physical Education" },
            { icon: "robotics", title: "Robotics and AI" },
            { icon: "economics", title: "Economics" },
            { icon: "art", title: "Art" },
            { icon: "environment", title: "Environmental Science" }
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
  let entry;
  try {
    entry = await reader.singletons.highSchool.read();
  } catch (error) {
    console.error("Failed to read Keystatic high school content", error);
    return defaultHighSchool;
  }
  if (!entry) return defaultHighSchool;

  return {
    metaTitle: textSrc(entry.metaTitle, defaultHighSchool.metaTitle),
    metaDescription: textSrc(entry.metaDescription, defaultHighSchool.metaDescription),
    hero: {
      kicker: textSrc(entry.hero.kicker, highSchool.hero.kicker),
      title: textSrc(entry.hero.title, highSchool.hero.title),
      lede: textSrc(entry.hero.lede, highSchool.hero.lede),
      image: imageSrc(entry.hero.image, highSchool.hero.image, "/images/about/"),
      imageAlt: textSrc(entry.hero.imageAlt, highSchool.hero.imageAlt)
    },
    approach: {
      kicker: textSrc(entry.approach.kicker, highSchool.approach.kicker),
      title: textSrc(entry.approach.title, highSchool.approach.title),
      body: textSrc(entry.approach.body, highSchool.approach.body),
      photos: mapPhotos(entry.approach.photos, highSchool.approach.photos, "/images/about/"),
      values: entry.approach.values.length
        ? entry.approach.values.map((value, index) => {
            const fallback = highSchool.approach.values[index] ?? highSchool.approach.values[0];
            return {
              icon: textSrc(value.icon, fallback.icon),
              title: textSrc(value.title, fallback.title),
              text: textSrc(value.text, fallback.text)
            };
          })
        : highSchool.approach.values
    },
    curriculum: {
      kicker: textSrc(entry.curriculum.kicker, highSchool.curriculum.kicker),
      title: textSrc(entry.curriculum.title, highSchool.curriculum.title),
      grade8: {
        title: textSrc(entry.curriculum.grade8Title, highSchool.curriculum.grade8.title),
        subtitle: textSrc(entry.curriculum.grade8Subtitle, highSchool.curriculum.grade8.subtitle),
        subjects: entry.curriculum.grade8Subjects.length
          ? entry.curriculum.grade8Subjects.map((subject, index) => {
              const fallback = highSchool.curriculum.grade8.subjects[index] ?? highSchool.curriculum.grade8.subjects[0];
              return {
                icon: textSrc(subject.icon, fallback.icon),
                title: textSrc(subject.title, fallback.title)
              };
            })
          : highSchool.curriculum.grade8.subjects
      },
      grade910: {
        title: textSrc(entry.curriculum.grade910Title, highSchool.curriculum.grade910.title),
        subtitle: textSrc(entry.curriculum.grade910Subtitle, highSchool.curriculum.grade910.subtitle),
        lede: textSrc(entry.curriculum.grade910Lede, highSchool.curriculum.grade910.lede),
        groups: entry.curriculum.grade910Groups.length
          ? entry.curriculum.grade910Groups.map((group, index) => {
              const fallback = highSchool.curriculum.grade910.groups[index] ?? highSchool.curriculum.grade910.groups[0];
              return {
                title: textSrc(group.title, fallback.title),
                subtitle: textSrc(group.subtitle, fallback.subtitle),
                ...(textSrc(group.note, "note" in fallback ? fallback.note ?? "" : "")
                  ? { note: textSrc(group.note, "note" in fallback ? fallback.note ?? "" : "") }
                  : {}),
                tone: (textSrc(group.tone, fallback.tone) || fallback.tone) as "peach" | "blue" | "gold",
                subjects: group.subjects.length
                  ? group.subjects.map((subject, subjectIndex) => {
                      const subjectFallback = fallback.subjects[subjectIndex] ?? fallback.subjects[0];
                      return {
                        icon: textSrc(subject.icon, subjectFallback.icon),
                        title: textSrc(subject.title, subjectFallback.title),
                        ...("detail" in subjectFallback && subjectFallback.detail
                          ? { detail: textSrc(subject.detail, subjectFallback.detail) }
                          : textSrc(subject.detail) ? { detail: subject.detail } : {})
                      };
                    })
                  : fallback.subjects
              };
            })
          : highSchool.curriculum.grade910.groups
      }
    },
    beyond: {
      kicker: textSrc(entry.beyond.kicker, highSchool.beyond.kicker),
      title: textSrc(entry.beyond.title, highSchool.beyond.title),
      body: textSrc(entry.beyond.body, highSchool.beyond.body),
      photos: mapPhotos(entry.beyond.photos, highSchool.beyond.photos, "/images/about/"),
      values: entry.beyond.values.length
        ? entry.beyond.values.map((value, index) => {
            const fallback = highSchool.beyond.values[index] ?? highSchool.beyond.values[0];
            return {
              icon: textSrc(value.icon, fallback.icon),
              title: textSrc(value.title, fallback.title),
              text: textSrc(value.text, fallback.text)
            };
          })
        : highSchool.beyond.values
    },
    moments: {
      kicker: textSrc(entry.moments.kicker, highSchool.moments.kicker),
      title: textSrc(entry.moments.title, highSchool.moments.title),
      photos: mapPhotos(entry.moments.photos, highSchool.moments.photos, "/images/about/")
    }
  };
}
