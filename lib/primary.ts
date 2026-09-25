import { imageSrc, mapPhotos, textSrc } from "@/lib/cms";
import { reader } from "@/lib/keystatic";

export const primary = {
  hero: {
    kicker: "Primary School",
    grades: "Grades 1 – 4",
    title: "Nurturing Foundations, Inspiring Futures",
    image: "/images/home/hero/primary-hero.png",
    imageAlt: "Primary students presenting a vertical farming project at Lawrence High School"
  },
  approach: {
    kicker: "Our Approach",
    title: "Joyful Learning for Lifelong Skills",
    body: "We provide a safe, nurturing and stimulating environment where children learn through meaningful experiences, question, explore, collaborate and grow at their own pace.",
    image: "/images/about/pr-approach.png",
    imageAlt: "Primary students exploring soluble substances in a science activity at Lawrence High School",
    values: [
      { icon: "child", title: "Child-Centred", text: "Every child is unique and valued" },
      { icon: "experiential", title: "Experiential", text: "Learning by doing" },
      { icon: "holistic", title: "Holistic Development", text: "Academic, social and emotional growth" },
      { icon: "values", title: "Values for Life", text: "Character and responsibility" }
    ]
  },
  curriculum: {
    kicker: "Our Curriculum",
    title: "A Balanced Curriculum for a Brighter Tomorrow",
    body: "Our Primary School curriculum lays strong foundations in English, Mathematics, Science, Social Studies, Kannada, Hindi, Computers and Coding, while promoting 21st-century skills through experiential and inquiry-based learning.",
    subjects: [
      { icon: "english", title: "English", text: "Language skills & joyful reading" },
      { icon: "maths", title: "Mathematics", text: "Logical thinking & problem solving" },
      { icon: "science", title: "Science", text: "Curiosity & experimentation" },
      { icon: "social", title: "Social Studies", text: "Understanding the world" },
      { icon: "kannada", title: "Kannada", text: "Language & cultural roots" },
      { icon: "hindi", title: "Hindi", text: "Communication & expression" },
      { icon: "computer", title: "Computers", text: "Digital skills for the future" },
      { icon: "coding", title: "Coding", text: "Creativity through technology" }
    ],
    karadi: {
      title: "Karadi Path Programme",
      body: "Our English language learning is enriched through Karadi Path — a proven, research-based programme that develops listening, speaking, reading and writing skills through stories, songs and meaningful experiences.",
      logo: "/images/home/partners/karadi-path.png",
      logoAlt: "Karadi Path"
    }
  },
  beyond: {
    kicker: "Learning Beyond the Classroom",
    title: "Explore. Create. Participate.",
    body: "At Lawrence, learning goes beyond textbooks. We offer a wide range of experiences that encourage creativity, teamwork, discipline and self-expression.",
    items: [
      { icon: "arts", title: "Creative Arts", text: "Art & Craft" },
      { icon: "theatre", title: "Performing Arts", text: "Music | Dance | Theatre & Drama" },
      { icon: "pe", title: "Physical Education & Sports", text: "Yoga | Taekwondo | Skating | Sports" },
      { icon: "robotics", title: "Innovation & Technology", text: "Robotics & STEM | Coding | Chess" },
      { icon: "experiential", title: "Experiential Learning", text: "Field Trips | Nature Walks | Educational Excursions" },
      { icon: "values", title: "Values & Life Skills", text: "Teamwork | Leadership | Confidence | Life Skills" }
    ]
  },
  moments: {
    kicker: "Primary Moments",
    title: "A Glimpse into Our Learning Journey",
    photos: [
      {
        src: "/images/about/pr-moments-1.png",
        alt: "Primary students performing yoga on the sports ground at Lawrence High School"
      },
      {
        src: "/images/about/pr-moments-2.png",
        alt: "Primary students in costume on stage at Lawrence High School"
      },
      {
        src: "/images/about/pr-moments-3.png",
        alt: "Primary students performing a group dance on the sports ground"
      },
      {
        src: "/images/about/pr-moments-4.png",
        alt: "Primary students measuring and weighing in a classroom at Lawrence High School"
      },
      {
        src: "/images/about/pr-moments-5.png",
        alt: "Primary students presenting Bengaluru on stage at Lawrence High School"
      },
      {
        src: "/images/about/pr-moments-6.png",
        alt: "Primary students performing an animal-themed play on stage"
      }
    ]
  }
};

export type PrimaryContent = typeof primary & {
  metaTitle: string;
  metaDescription: string;
};

export const defaultPrimary: PrimaryContent = {
  ...primary,
  metaTitle: "Primary",
  metaDescription:
    "Primary School at Lawrence High School ICSE — Grades 1 to 4. Strong foundations in knowledge, curiosity, confidence and character."
};

export async function getPrimaryContent(): Promise<PrimaryContent> {
  let entry;
  try {
    entry = await reader.singletons.primary.read();
  } catch (error) {
    console.error("Failed to read Keystatic primary content", error);
    return defaultPrimary;
  }
  if (!entry) return defaultPrimary;

  return {
    metaTitle: textSrc(entry.metaTitle, defaultPrimary.metaTitle),
    metaDescription: textSrc(entry.metaDescription, defaultPrimary.metaDescription),
    hero: {
      kicker: textSrc(entry.hero.kicker, primary.hero.kicker),
      grades: textSrc(entry.hero.grades, primary.hero.grades),
      title: textSrc(entry.hero.title, primary.hero.title),
      image: imageSrc(entry.hero.image, primary.hero.image, "/images/home/hero/"),
      imageAlt: textSrc(entry.hero.imageAlt, primary.hero.imageAlt)
    },
    approach: {
      kicker: textSrc(entry.approach.kicker, primary.approach.kicker),
      title: textSrc(entry.approach.title, primary.approach.title),
      body: textSrc(entry.approach.body, primary.approach.body),
      image: imageSrc(entry.approach.image, primary.approach.image, "/images/about/"),
      imageAlt: textSrc(entry.approach.imageAlt, primary.approach.imageAlt),
      values: entry.approach.values.length
        ? entry.approach.values.map((value, index) => {
            const fallback = primary.approach.values[index] ?? primary.approach.values[0];
            return {
              icon: textSrc(value.icon, fallback.icon),
              title: textSrc(value.title, fallback.title),
              text: textSrc(value.text, fallback.text)
            };
          })
        : primary.approach.values
    },
    curriculum: {
      kicker: textSrc(entry.curriculum.kicker, primary.curriculum.kicker),
      title: textSrc(entry.curriculum.title, primary.curriculum.title),
      body: textSrc(entry.curriculum.body, primary.curriculum.body),
      subjects: entry.curriculum.subjects.length
        ? entry.curriculum.subjects.map((subject, index) => {
            const fallback = primary.curriculum.subjects[index] ?? primary.curriculum.subjects[0];
            return {
              icon: textSrc(subject.icon, fallback.icon),
              title: textSrc(subject.title, fallback.title),
              text: textSrc(subject.text, fallback.text)
            };
          })
        : primary.curriculum.subjects,
      karadi: {
        title: textSrc(entry.curriculum.karadiTitle, primary.curriculum.karadi.title),
        body: textSrc(entry.curriculum.karadiBody, primary.curriculum.karadi.body),
        logo: imageSrc(entry.curriculum.karadiLogo, primary.curriculum.karadi.logo, "/images/home/partners/"),
        logoAlt: textSrc(entry.curriculum.karadiLogoAlt, primary.curriculum.karadi.logoAlt)
      }
    },
    beyond: {
      kicker: textSrc(entry.beyond.kicker, primary.beyond.kicker),
      title: textSrc(entry.beyond.title, primary.beyond.title),
      body: textSrc(entry.beyond.body, primary.beyond.body),
      items: entry.beyond.items.length
        ? entry.beyond.items.map((item, index) => {
            const fallback = primary.beyond.items[index] ?? primary.beyond.items[0];
            return {
              icon: textSrc(item.icon, fallback.icon),
              title: textSrc(item.title, fallback.title),
              text: textSrc(item.text, fallback.text)
            };
          })
        : primary.beyond.items
    },
    moments: {
      kicker: textSrc(entry.moments.kicker, primary.moments.kicker),
      title: textSrc(entry.moments.title, primary.moments.title),
      photos: mapPhotos(entry.moments.photos, primary.moments.photos, "/images/about/")
    }
  };
}
