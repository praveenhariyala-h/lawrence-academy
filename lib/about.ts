import { imageSrc, mapPhotos, paragraphs, textSrc } from "@/lib/cms";
import { reader } from "@/lib/keystatic";

export const aboutHero = {
  title: "About Us",
  image: "/images/about/hero.png",
  imageAlt: "Students learning together in a Lawrence High School classroom"
};

export type AboutStat = {
  value: string;
  unit?: string;
  label: string;
  icon: "years" | "results" | "campus" | "faculty";
};

export const aboutStats: AboutStat[] = [
  { value: "36", label: "Years of excellence", icon: "years" },
  {
    value: "100%",
    label: "Average pass rate/average highest score in board achieved by students",
    icon: "results"
  },
  { value: "8400", unit: "sqft", label: "Campus size", icon: "campus" },
  { value: "103", label: "Faculty strength", icon: "faculty" }
];

export const aboutJourney = {
  title: "Our Journey",
  body: [
    "Our journey began in 1991 with the establishment of our first school in Koramangala. Over the past 35 years, Lawrence High School ICSE, HSR has grown into a trusted name in ICSE education, rooted in academic excellence, holistic development, and strong values.",
    "As the world evolves, our purpose remains constant—to nurture confident, compassionate, and capable young minds who are prepared not just for the future, but to shape it."
  ],
  photos: [
    {
      src: "/images/about/journey.png",
      alt: "Lawrence High School leadership lighting a ceremonial lamp at a school event"
    },
    {
      src: "/images/home/hero/hero-campus.png",
      alt: "Lawrence High School campus in HSR Layout, Bengaluru"
    }
  ],
  vision: {
    title: "Our Vision",
    text: "To create an environment that inspires and guides a child through exploration to discovery, learning and action, so they grow into a confident, capable citizen of the future."
  },
  mission: {
    title: "Our Mission",
    text: "To provide education with a value that develops knowledge, skills, character and a lifelong love for learning."
  }
};

export const aboutPhilosophy = {
  title: "Our Educational Philosophy",
  body: "We believe that every child is unique and has the potential to achieve great things. Our approach is student-centric, focusing on academic rigour, character building and experiential learning. We strive to create a supportive environment where curiosity is encouraged, creativity is celebrated and values are lived every day.",
  image: "/images/about/philosophy.png",
  imageAlt: "Lawrence High School leaders collaborating on teaching and learning"
};

export const aboutMessages = {
  title: "Messages from Our Leadership",
  kicker: "Guided by vision, grounded in values, committed to every child.",
  people: [
    {
      name: "Mr. P.M. Subbaiah",
      role: "Chairman",
      photo: "/images/about/chairman.png",
      photoAlt: "Mr. P.M. Subbaiah, Chairman of Lawrence High School",
      initials: "PMS",
      position: "78% 12%",
      message:
        "Education for us isn’t just about books, but about life itself — building character, shaping mindsets, and preparing children for a meaningful future. Long-serving, dedicated teachers work with every child, enabling them to discover strengths, face challenges, and grow into confident individuals who will be the changemakers of our society."
    },
    {
      name: "Mrs. Pushpa Subbaiah",
      role: "Managing Trustee",
      photo: "/images/about/managing-trustee.png",
      photoAlt: "Mrs. Pushpa Subbaiah, Managing Trustee of Lawrence High School",
      initials: "PS",
      position: "38% 18%",
      message:
        "We work to create a school where every learner is known, supported and stretched. Education at Lawrence is not only academic excellence; it is the partnership between students, teachers and families. Our role is to make sure that partnership stays strong, so every child can grow with dignity, curiosity and joy."
    },
    {
      name: "Mrs. Devi",
      role: "Principal",
      photo: null,
      photoAlt: "Mrs. Devi, Principal of Lawrence High School",
      initials: "D",
      position: "center center",
      message:
        "At Lawrence High School, we believe every child is unique and has the potential to achieve great things. Our goal is to provide a nurturing and stimulating environment where students discover their strengths, develop character, and grow into confident, capable citizens. We work closely with parents to make school a second home."
    }
  ]
};

export const aboutLeadershipTeam = {
  title: "Our Leadership Team",
  kicker: "Committed to accomplishing each student’s well-being",
  quote: "Leadership is not a position but a shared responsibility to empower every learner.",
  people: [
    {
      name: "Mrs. Manjula Ramachandran",
      role: "Vice Principal",
      photo: "/images/about/vice-principal.png",
      photoAlt: "Mrs. Manjula Ramachandran, Vice Principal",
      position: "22% 28%"
    },
    {
      name: "Mrs. Malini Raghu",
      role: "Headmistress",
      photo: "/images/about/headmistress.png",
      photoAlt: "Mrs. Malini Raghu, Headmistress",
      position: "72% 18%"
    },
    {
      name: "Mrs. Roopa De",
      role: "KG Coordinator",
      photo: "/images/about/kg-coordinator.png",
      photoAlt: "Mrs. Roopa De, Kindergarten Coordinator",
      position: "42% 20%"
    }
  ]
};

export const aboutLegacy = {
  title: "Our Legacy of Dedicated Teachers",
  intro:
    "Each member of our faculty brings knowledge, teaching expertise, and a deep commitment to student growth, creating a positive learning environment where every child feels seen, supported, and challenged to become the best version of themselves.",
  teachers: [
    {
      name: "Ms. Roopa Pandey",
      year: "2008",
      profile: "High School Biology",
      photo: "/images/about/roopa-pandey.png",
      photoAlt: "Ms. Roopa Pandey, High School Biology"
    },
    {
      name: "Ms. Irene Manoj",
      year: "2007",
      profile: "Primary School Science",
      photo: "/images/about/irene.png",
      photoAlt: "Ms. Irene Manoj, Primary School Science"
    },
    {
      name: "Ms. Thulasi",
      year: "2006",
      profile: "Middle School Kannada",
      photo: "/images/about/thulasi.png",
      photoAlt: "Ms. Thulasi, Middle School Kannada"
    },
    {
      name: "Ms. Kanchan",
      year: "2007",
      profile: "High School Hindi",
      photo: "/images/about/kanchan.png",
      photoAlt: "Ms. Kanchan, High School Hindi"
    }
  ]
};

export type AboutTeamGroup = {
  name: string;
  photo: string;
  photoAlt: string;
};

export const aboutTeams = {
  title: "Our Teams",
  kicker: "A collaborative community working for every learner",
  groups: [
    {
      name: "Kindergarten Team",
      photo: "/images/about/kindergarten-team.png",
      photoAlt: "Kindergarten faculty of Lawrence High School"
    },
    {
      name: "Primary School Team",
      photo: "/images/about/primary-team.png",
      photoAlt: "Primary School faculty of Lawrence High School"
    },
    {
      name: "Middle School Team",
      photo: "/images/about/middle-school-team.png",
      photoAlt: "Middle School faculty of Lawrence High School"
    },
    {
      name: "High School Team",
      photo: "/images/about/high-school-team.png",
      photoAlt: "High School faculty of Lawrence High School"
    }
  ]
};

export const aboutValues = {
  title: "Our Values",
  items: [
    {
      key: "excellence",
      title: "Excellence",
      text: "Striving to be our best, every day."
    },
    {
      key: "integrity",
      title: "Integrity",
      text: "Doing the right thing, always."
    },
    {
      key: "respect",
      title: "Respect",
      text: "For ourselves, others and our world."
    },
    {
      key: "curiosity",
      title: "Curiosity",
      text: "Asking questions, seeking answers."
    },
    {
      key: "compassion",
      title: "Compassion",
      text: "Caring for others, creating a more inclusive world."
    },
    {
      key: "responsibility",
      title: "Responsibility",
      text: "Taking ownership, being citizens for the future."
    }
  ]
};

export const aboutMotto = "Dream and Believe\nLearn and Achieve";

export type AboutContent = {
  hero: typeof aboutHero;
  stats: AboutStat[];
  journey: typeof aboutJourney;
  philosophy: typeof aboutPhilosophy;
  messages: typeof aboutMessages;
  leadershipTeam: typeof aboutLeadershipTeam;
  legacy: typeof aboutLegacy;
  teams: typeof aboutTeams;
  values: typeof aboutValues;
  motto: string;
};

export const defaultAbout: AboutContent = {
  hero: aboutHero,
  stats: aboutStats,
  journey: aboutJourney,
  philosophy: aboutPhilosophy,
  messages: aboutMessages,
  leadershipTeam: aboutLeadershipTeam,
  legacy: aboutLegacy,
  teams: aboutTeams,
  values: aboutValues,
  motto: aboutMotto
};

const ABOUT_IMAGES = "/images/about/";

export async function getAboutContent(): Promise<AboutContent> {
  let entry;
  try {
    entry = await reader.singletons.about.read();
  } catch (error) {
    console.error("Failed to read Keystatic about content", error);
    return defaultAbout;
  }
  if (!entry) return defaultAbout;

  const stats: AboutStat[] = entry.stats.length
    ? entry.stats.map((stat, index) => {
        const fallback = defaultAbout.stats[index] ?? defaultAbout.stats[0];
        const icon = (stat.icon || fallback.icon) as AboutStat["icon"];
        return {
          value: textSrc(stat.value, fallback.value),
          ...(textSrc(stat.unit, fallback.unit ?? "") ? { unit: textSrc(stat.unit, fallback.unit ?? "") } : {}),
          label: textSrc(stat.label, fallback.label),
          icon
        };
      })
    : defaultAbout.stats;

  const journeyPhotos = mapPhotos(entry.journey.photos, defaultAbout.journey.photos, "/images/");

  const messagesPeople = entry.messages.people.length
    ? entry.messages.people.map((person, index) => {
        const fallback = defaultAbout.messages.people[index] ?? defaultAbout.messages.people[0];
        const photo = person.photo
          ? imageSrc(person.photo, fallback.photo ?? "", ABOUT_IMAGES)
          : fallback.photo;
        return {
          name: textSrc(person.name, fallback.name),
          role: textSrc(person.role, fallback.role),
          photo: photo || null,
          photoAlt: textSrc(person.photoAlt, fallback.photoAlt),
          initials: textSrc(person.initials, fallback.initials),
          position: textSrc(person.position, fallback.position),
          message: textSrc(person.message, fallback.message)
        };
      })
    : defaultAbout.messages.people;

  const leadershipPeople = entry.leadershipTeam.people.length
    ? entry.leadershipTeam.people.map((person, index) => {
        const fallback = defaultAbout.leadershipTeam.people[index] ?? defaultAbout.leadershipTeam.people[0];
        return {
          name: textSrc(person.name, fallback.name),
          role: textSrc(person.role, fallback.role),
          photo: imageSrc(person.photo, fallback.photo, ABOUT_IMAGES),
          photoAlt: textSrc(person.photoAlt, fallback.photoAlt),
          position: textSrc(person.position, fallback.position)
        };
      })
    : defaultAbout.leadershipTeam.people;

  const teachers = entry.legacy.teachers.length
    ? entry.legacy.teachers.map((teacher, index) => {
        const fallback = defaultAbout.legacy.teachers[index] ?? defaultAbout.legacy.teachers[0];
        return {
          name: textSrc(teacher.name, fallback.name),
          year: textSrc(teacher.year, fallback.year),
          profile: textSrc(teacher.profile, fallback.profile),
          photo: imageSrc(teacher.photo, fallback.photo, ABOUT_IMAGES),
          photoAlt: textSrc(teacher.photoAlt, fallback.photoAlt)
        };
      })
    : defaultAbout.legacy.teachers;

  const groups = entry.teams.groups.length
    ? entry.teams.groups.map((group, index) => {
        const fallback = defaultAbout.teams.groups[index] ?? defaultAbout.teams.groups[0];
        return {
          name: textSrc(group.name, fallback.name),
          photo: imageSrc(group.photo, fallback.photo, ABOUT_IMAGES),
          photoAlt: textSrc(group.photoAlt, fallback.photoAlt)
        };
      })
    : defaultAbout.teams.groups;

  const valueItems = entry.values.items.length
    ? entry.values.items.map((item, index) => {
        const fallback = defaultAbout.values.items[index] ?? defaultAbout.values.items[0];
        return {
          key: textSrc(item.key, fallback.key),
          title: textSrc(item.title, fallback.title),
          text: textSrc(item.text, fallback.text)
        };
      })
    : defaultAbout.values.items;

  return {
    hero: {
      title: textSrc(entry.hero.title, defaultAbout.hero.title),
      image: imageSrc(entry.hero.image, defaultAbout.hero.image, ABOUT_IMAGES),
      imageAlt: textSrc(entry.hero.imageAlt, defaultAbout.hero.imageAlt)
    },
    stats,
    journey: {
      title: textSrc(entry.journey.title, defaultAbout.journey.title),
      body: paragraphs(entry.journey.body, defaultAbout.journey.body),
      photos: journeyPhotos,
      vision: {
        title: textSrc(entry.journey.visionTitle, defaultAbout.journey.vision.title),
        text: textSrc(entry.journey.visionText, defaultAbout.journey.vision.text)
      },
      mission: {
        title: textSrc(entry.journey.missionTitle, defaultAbout.journey.mission.title),
        text: textSrc(entry.journey.missionText, defaultAbout.journey.mission.text)
      }
    },
    philosophy: {
      title: textSrc(entry.philosophy.title, defaultAbout.philosophy.title),
      body: textSrc(entry.philosophy.body, defaultAbout.philosophy.body),
      image: imageSrc(entry.philosophy.image, defaultAbout.philosophy.image, ABOUT_IMAGES),
      imageAlt: textSrc(entry.philosophy.imageAlt, defaultAbout.philosophy.imageAlt)
    },
    messages: {
      title: textSrc(entry.messages.title, defaultAbout.messages.title),
      kicker: textSrc(entry.messages.kicker, defaultAbout.messages.kicker),
      people: messagesPeople
    },
    leadershipTeam: {
      title: textSrc(entry.leadershipTeam.title, defaultAbout.leadershipTeam.title),
      kicker: textSrc(entry.leadershipTeam.kicker, defaultAbout.leadershipTeam.kicker),
      quote: textSrc(entry.leadershipTeam.quote, defaultAbout.leadershipTeam.quote),
      people: leadershipPeople
    },
    legacy: {
      title: textSrc(entry.legacy.title, defaultAbout.legacy.title),
      intro: textSrc(entry.legacy.intro, defaultAbout.legacy.intro),
      teachers
    },
    teams: {
      title: textSrc(entry.teams.title, defaultAbout.teams.title),
      kicker: textSrc(entry.teams.kicker, defaultAbout.teams.kicker),
      groups
    },
    values: {
      title: textSrc(entry.values.title, defaultAbout.values.title),
      items: valueItems
    },
    motto: textSrc(entry.values.motto, defaultAbout.motto)
  };
}
