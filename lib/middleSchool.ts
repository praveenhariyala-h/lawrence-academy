import { imageSrc, mapPhotos, textSrc } from "@/lib/cms";
import { reader } from "@/lib/keystatic";

export const middleSchool = {
  hero: {
    kicker: "Middle School",
    grades: "Grades 5 – 7",
    title: "Growing *Minds*.\nBuilding *Futures*.",
    image: "/images/home/hero/hero-class.png",
    imageAlt: "Middle school students collaborating in a classroom at Lawrence High School"
  },
  approach: {
    kicker: "Our Approach",
    title: "The NEWS Philosophy",
    body: "At the Middle School level, we follow the motivational philosophy of NEWS: Navigate, Explore, Work hard, Succeed. We create a learning environment that encourages curiosity, builds resilience and develops independent thinkers who are ready for the opportunities of high school and beyond.",
    photos: [
      {
        src: "/images/home/hero/hero-robotics.png",
        alt: "Middle school students collaborating on robotics and design at Lawrence High School"
      },
      {
        src: "/images/home/curriculum/creators.png",
        alt: "Middle school students working together on a classroom project"
      },
      {
        src: "/images/home/pathway/learn.png",
        alt: "Middle school students reading in the Lawrence High School library"
      }
    ],
    values: [
      {
        icon: "navigate",
        title: "Navigate",
        text: "Discover possibilities and find your direction."
      },
      {
        icon: "explore",
        title: "Explore",
        text: "Be curious, ask questions and think beyond."
      },
      {
        icon: "work",
        title: "Work Hard",
        text: "Build skills, practise with purpose and stay committed."
      },
      {
        icon: "succeed",
        title: "Succeed",
        text: "Achieve your goals and create a brighter future."
      }
    ]
  },
  curriculum: {
    kicker: "Our Curriculum",
    title: "A Strong Foundation for a Changing World",
    body: "Our curriculum prepares students for the real world, with board-based question papers from Grade 6 to build academic strength. Each subject incorporates aspects of the United Nations Sustainable Development Goals (SDGs) to instill strong values and a sense of global responsibility.",
    grade5: {
      title: "Grade 5",
      subjects: [
        { icon: "english", title: "English" },
        { icon: "social", title: "Social Studies" },
        { icon: "maths", title: "Mathematics" },
        { icon: "computer", title: "Computers" },
        { icon: "science", title: "Science" },
        { icon: "coding", title: "Coding" }
      ]
    },
    grade67: {
      title: "Grades 6 & 7",
      subjects: [
        { icon: "english", title: "English" },
        { icon: "geography", title: "Geography" },
        { icon: "maths", title: "Mathematics" },
        { icon: "civics", title: "History & Civics" },
        { icon: "biology", title: "Biology" },
        { icon: "computer", title: "Computers" },
        { icon: "physics", title: "Physics" },
        { icon: "coding", title: "Coding" },
        { icon: "chemistry", title: "Chemistry" }
      ]
    }
  },
  beyond: {
    kicker: "Beyond Academics",
    title: "Enriching Experiences, Lifelong Skills",
    body: "Beyond academics, students engage in enrichment programs like Vedic Math, Financial Literacy, Robotics, Taekwondo, Dance, Music, Pottery, Theatre, Public Speaking, Yoga and Life Skills. We offer specialised coaching in various sports that fosters physical fitness and teamwork. To strengthen English skills, we offer Public Speaking and Reading Classes that build confidence and communication. Current affairs discussions enhance awareness and analytical thinking.",
    items: [
      { icon: "vedic", title: "Vedic Math" },
      { icon: "finance", title: "Financial Literacy" },
      { icon: "robotics", title: "Robotics" },
      { icon: "run", title: "Sports" },
      { icon: "performing", title: "Performing Arts", text: "Dance | Music | Theatre" },
      { icon: "pottery", title: "Pottery & Crafts" },
      { icon: "speaking", title: "Public Speaking" },
      { icon: "yoga", title: "Yoga" },
      { icon: "life", title: "Life Skills" }
    ]
  },
  moments: {
    kicker: "Middle School Moments",
    title: "A Glimpse into Our Learning Journey",
    lede: "Exploring. Experiencing. Growing.",
    photos: [
      {
        src: "/images/about/ms-moments-1.png",
        alt: "Middle school students performing an army-themed stage play at Lawrence High School"
      },
      {
        src: "/images/about/ms-moments-2.png",
        alt: "Middle school students performing a patriotic dance on stage"
      },
      {
        src: "/images/about/ms-moments-3.png",
        alt: "Middle school students performing a folk dance with masks on stage"
      },
      {
        src: "/images/about/ms-moments-4.png",
        alt: "Middle school students in costume during a stage play at Lawrence High School"
      },
      {
        src: "/images/about/ms-moments-5.png",
        alt: "A middle school student performing in a butterfly costume on stage"
      },
      {
        src: "/images/about/ms-moments-6.png",
        alt: "Middle school students performing a historical play at Lawrence High School"
      },
      {
        src: "/images/about/ms-moments-7.png",
        alt: "Middle school students performing a family scene on stage"
      },
      {
        src: "/images/about/ms-moments-8.png",
        alt: "Middle school students performing a bakery scene on stage"
      }
    ]
  }
};

export type MiddleSchoolContent = typeof middleSchool & {
  metaTitle: string;
  metaDescription: string;
};

export const defaultMiddleSchool: MiddleSchoolContent = {
  ...middleSchool,
  metaTitle: "Middle School",
  metaDescription:
    "Middle School at Lawrence High School ICSE — Grades 5 to 7. NEWS: Navigate, Explore, Work Hard, Succeed."
};

export async function getMiddleSchoolContent(): Promise<MiddleSchoolContent> {
  let entry;
  try {
    entry = await reader.singletons.middleSchool.read();
  } catch (error) {
    console.error("Failed to read Keystatic middle school content", error);
    return defaultMiddleSchool;
  }
  if (!entry) return defaultMiddleSchool;

  return {
    metaTitle: textSrc(entry.metaTitle, defaultMiddleSchool.metaTitle),
    metaDescription: textSrc(entry.metaDescription, defaultMiddleSchool.metaDescription),
    hero: {
      kicker: textSrc(entry.hero.kicker, middleSchool.hero.kicker),
      grades: textSrc(entry.hero.grades, middleSchool.hero.grades),
      title: textSrc(entry.hero.title, middleSchool.hero.title),
      image: imageSrc(entry.hero.image, middleSchool.hero.image, "/images/home/hero/"),
      imageAlt: textSrc(entry.hero.imageAlt, middleSchool.hero.imageAlt)
    },
    approach: {
      kicker: textSrc(entry.approach.kicker, middleSchool.approach.kicker),
      title: textSrc(entry.approach.title, middleSchool.approach.title),
      body: textSrc(entry.approach.body, middleSchool.approach.body),
      photos: mapPhotos(entry.approach.photos, middleSchool.approach.photos, "/images/"),
      values: entry.approach.values.length
        ? entry.approach.values.map((value, index) => {
            const fallback = middleSchool.approach.values[index] ?? middleSchool.approach.values[0];
            return {
              icon: textSrc(value.icon, fallback.icon),
              title: textSrc(value.title, fallback.title),
              text: textSrc(value.text, fallback.text)
            };
          })
        : middleSchool.approach.values
    },
    curriculum: {
      kicker: textSrc(entry.curriculum.kicker, middleSchool.curriculum.kicker),
      title: textSrc(entry.curriculum.title, middleSchool.curriculum.title),
      body: textSrc(entry.curriculum.body, middleSchool.curriculum.body),
      grade5: {
        title: textSrc(entry.curriculum.grade5Title, middleSchool.curriculum.grade5.title),
        subjects: entry.curriculum.grade5Subjects.length
          ? entry.curriculum.grade5Subjects.map((subject, index) => {
              const fallback = middleSchool.curriculum.grade5.subjects[index] ?? middleSchool.curriculum.grade5.subjects[0];
              return {
                icon: textSrc(subject.icon, fallback.icon),
                title: textSrc(subject.title, fallback.title)
              };
            })
          : middleSchool.curriculum.grade5.subjects
      },
      grade67: {
        title: textSrc(entry.curriculum.grade67Title, middleSchool.curriculum.grade67.title),
        subjects: entry.curriculum.grade67Subjects.length
          ? entry.curriculum.grade67Subjects.map((subject, index) => {
              const fallback = middleSchool.curriculum.grade67.subjects[index] ?? middleSchool.curriculum.grade67.subjects[0];
              return {
                icon: textSrc(subject.icon, fallback.icon),
                title: textSrc(subject.title, fallback.title)
              };
            })
          : middleSchool.curriculum.grade67.subjects
      }
    },
    beyond: {
      kicker: textSrc(entry.beyond.kicker, middleSchool.beyond.kicker),
      title: textSrc(entry.beyond.title, middleSchool.beyond.title),
      body: textSrc(entry.beyond.body, middleSchool.beyond.body),
      items: entry.beyond.items.length
        ? entry.beyond.items.map((item, index) => {
            const fallback = middleSchool.beyond.items[index] ?? middleSchool.beyond.items[0];
            return {
              icon: textSrc(item.icon, fallback.icon),
              title: textSrc(item.title, fallback.title),
              ...(textSrc(item.text, "text" in fallback ? fallback.text ?? "" : "")
                ? { text: textSrc(item.text, "text" in fallback ? fallback.text ?? "" : "") }
                : {})
            };
          })
        : middleSchool.beyond.items
    },
    moments: {
      kicker: textSrc(entry.moments.kicker, middleSchool.moments.kicker),
      title: textSrc(entry.moments.title, middleSchool.moments.title),
      lede: textSrc(entry.moments.lede, middleSchool.moments.lede),
      photos: mapPhotos(entry.moments.photos, middleSchool.moments.photos, "/images/about/")
    }
  };
}
