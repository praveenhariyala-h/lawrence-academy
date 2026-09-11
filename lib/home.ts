import { reader } from "@/lib/keystatic";

export type HomeHeroSlide = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type HomePathway = {
  title: string;
  detail: string;
  extra: string;
  image: string;
  position: string;
};

export type HomeCurriculum = {
  title: string;
  grades: string;
  href: string;
  photo: string;
  photoAlt: string;
};

export type HomePartner = {
  name: string;
  category: string;
  logo: string | null;
};

export type HomeContent = {
  heroLearnMoreLabel: string;
  heroLearnMoreHref: string;
  heroSlides: HomeHeroSlide[];
  pathwayItems: HomePathway[];
  legacyTitle: string;
  legacyBody: string;
  legacyTagline: string;
  legacyPhoto: string;
  legacyPhotoAlt: string;
  whyTitle: string;
  whyQuote: string;
  whyBody: string;
  whyImage: string;
  whyImageAlt: string;
  curriculumTitle: string;
  curriculum: HomeCurriculum[];
  partnersKicker: string;
  partnersTitle: string;
  partners: HomePartner[];
  chairmanKicker: string;
  chairmanName: string;
  chairmanRole: string;
  chairmanMessage: string;
  chairmanPhoto: string;
  chairmanPhotoAlt: string;
};

export const defaultHome: HomeContent = {
  heroLearnMoreLabel: "Learn more",
  heroLearnMoreHref: "/about",
  heroSlides: [
    {
      title: "Welcome to Lawrence",
      text: "Where learning is exciting, purposeful, and relevant.",
      image: "/images/home/hero/hero-campus.png",
      alt: "Lawrence High ICSE campus building in HSR Layout"
    },
    {
      title: "Every child a champion",
      text: "At Lawrence, we blend tradition, innovation and encouragement to make every child a champion.",
      image: "/images/home/hero/hero-classroom.png",
      alt: "Technology-enabled classroom at Lawrence High School"
    },
    {
      title: "A vibrant campus",
      text: "Visit our campus to discover a wide variety of extracurricular programs.",
      image: "/images/home/hero/hero-robotics.png",
      alt: "Students in the robotics lab at Lawrence High School"
    }
  ],
  pathwayItems: [
    { title: "Learn", detail: "Academics", extra: "", image: "/images/home/pathway/learn.png", position: "center 30%" },
    { title: "Innovate", detail: "Robotics", extra: "", image: "/images/home/pathway/innovate.png", position: "72% 40%" },
    { title: "Explore", detail: "Competition", extra: "", image: "/images/home/pathway/explore.png", position: "center 35%" },
    { title: "Create", detail: "Art", extra: "", image: "/images/home/pathway/create.png", position: "58% 38%" },
    { title: "Lead", detail: "Leadership", extra: "", image: "/images/home/pathway/lead.png", position: "center 22%" },
    { title: "Perform", detail: "Sports", extra: "", image: "/images/home/pathway/perform.png", position: "center 30%" },
    { title: "Grow", detail: "Lifeskills", extra: "Interact Club", image: "/images/home/pathway/grow.png", position: "center 25%" }
  ],
  legacyTitle: "Lawrence Legacy",
  legacyBody: `**Lawrence High School** carries a legacy of educational excellence that began in **1991 with our Koramangala branch** and grew with the establishment of our **HSR ICSE branch in 2002**.

Today, Lawrence is a vibrant learning community of **over 2,500 students and 103+ dedicated teachers**, committed to providing an education that nurtures **knowledge, character and confidence**.

With a strong foundation built on **values and holistic development**, we continue to prepare young minds to learn, grow and contribute meaningfully to the world.`,
  legacyTagline: "Our Legacy. Our Values. Their Future.",
  legacyPhoto: "/images/home/legacy/legacy-photo.png",
  legacyPhotoAlt: "Lawrence High School campus, HSR Layout",
  whyTitle: "What Makes the School Special?",
  whyQuote: "“FROM CURIOUS MINDS TO CONFIDENT FUTURES.”",
  whyBody:
    "At Lawrence High, every experience is an opportunity to discover, create, lead and grow. We help students transform their potential into purpose and their dreams into achievement.",
  whyImage: "/images/home/why/why-lawrence.png",
  whyImageAlt:
    "Why choose Lawrence High School: academic excellence, future ready learning, beyond academics, character and values, confidence and leadership, holistic growth, and a safe caring campus",
  curriculumTitle: "Our Curriculum",
  curriculum: [
    {
      title: "Little Learners",
      grades: "Nursery – UKG",
      href: "/learning",
      photo: "/images/home/curriculum/little-learners.png",
      photoAlt: "Little learners discovering with a teacher at Lawrence High School"
    },
    {
      title: "Young Explorers",
      grades: "Grades I – IV",
      href: "/learning",
      photo: "/images/home/curriculum/young-explorers.png",
      photoAlt: "Young explorers in martial arts at Lawrence High School"
    },
    {
      title: "Creators",
      grades: "Grades V – VII",
      href: "/learning",
      photo: "/images/home/curriculum/creators.png",
      photoAlt: "Creators performing music at Lawrence High School"
    },
    {
      title: "Future Leaders",
      grades: "Grades VIII – X",
      href: "/learning",
      photo: "/images/home/curriculum/future-leaders.png",
      photoAlt: "Future leaders working on robotics at Lawrence High School"
    }
  ],
  partnersKicker: "In association with",
  partnersTitle: "Partners in learning",
  partners: [
    { name: "CISCE", category: "Curriculum", logo: null },
    { name: "HarperCollins", category: "Curriculum", logo: null },
    { name: "Karadi Path", category: "Curriculum", logo: null },
    { name: "Vedic Math", category: "Curriculum", logo: null },
    { name: "Theatre", category: "Enrichment", logo: null },
    { name: "Taekwondo", category: "Enrichment", logo: null },
    { name: "Public Speaking", category: "Enrichment", logo: null },
    { name: "Pottery", category: "Enrichment", logo: null }
  ],
  chairmanKicker: "Chairman’s message",
  chairmanName: "P.M. Subbaiah",
  chairmanRole: "Chairman, Lawrence High School",
  chairmanMessage: `Dear Parents, over the past 35 years, Lawrence School HSR and Koramangala have grown into schools that nurture champions. Education for us isn’t just about books but about life itself — building character, shaping mindsets, and preparing children for a meaningful future.

Long-serving, dedicated teachers work with every child, enabling them to discover strengths, face challenges, and grow into confident individuals who will be the future leaders and changemakers of our society. We look forward to walking this journey with you — hand in hand.`,
  chairmanPhoto: "/images/home/chairman/chairman.png",
  chairmanPhotoAlt: "P.M. Subbaiah, Chairman, Lawrence High School"
};

function imageSrc(
  value: string | null | undefined,
  fallback: string,
  basePath: string
) {
  if (!value) return fallback;
  if (value.startsWith("/") || value.startsWith("http")) return value;
  return `${basePath}${value}`;
}

async function readText(value: unknown, fallback: string) {
  if (typeof value === "string" && value.trim()) return value;
  if (typeof value === "function") {
    try {
      const result = await value();
      if (typeof result === "string" && result.trim()) return result;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

function textSrc(value: string | null | undefined, fallback: string) {
  return value?.trim() ? value : fallback;
}

export async function getHomeContent(): Promise<HomeContent> {
  let entry;
  try {
    entry = await reader.singletons.home.read();
  } catch (error) {
    console.error("Failed to read Keystatic home content", error);
    return defaultHome;
  }
  if (!entry) return defaultHome;

  const heroSlides = entry.heroSlides.length
    ? entry.heroSlides.map((slide, index) => {
        const fallback = defaultHome.heroSlides[index] ?? defaultHome.heroSlides[0];
        return {
          title: textSrc(slide.title, fallback.title),
          text: textSrc(slide.text, fallback.text),
          image: imageSrc(slide.image, fallback.image, "/images/home/hero/"),
          alt: textSrc(slide.alt, fallback.alt)
        };
      })
    : defaultHome.heroSlides;

  const pathwayItems = entry.pathwayItems.length
    ? entry.pathwayItems.map((item, index) => {
        const fallback = defaultHome.pathwayItems[index] ?? defaultHome.pathwayItems[0];
        return {
          title: textSrc(item.title, fallback.title),
          detail: textSrc(item.detail, fallback.detail),
          extra: item.extra?.trim() ?? "",
          image: imageSrc(item.image, fallback.image, "/images/home/pathway/"),
          position: textSrc(item.position, fallback.position)
        };
      })
    : defaultHome.pathwayItems;

  const curriculum = entry.curriculum.length
    ? entry.curriculum.map((item, index) => {
        const fallback = defaultHome.curriculum[index] ?? defaultHome.curriculum[0];
        return {
          title: textSrc(item.title, fallback.title),
          grades: textSrc(item.grades, fallback.grades),
          href: textSrc(item.href, fallback.href),
          photo: imageSrc(item.photo, fallback.photo, "/images/home/curriculum/"),
          photoAlt: textSrc(item.photoAlt, fallback.photoAlt)
        };
      })
    : defaultHome.curriculum;

  const partners = entry.partners.length
    ? entry.partners.map((item, index) => {
        const fallback = defaultHome.partners[index];
        return {
          name: textSrc(item.name, fallback?.name ?? "Partner"),
          category: textSrc(item.category, fallback?.category ?? ""),
          logo: item.logo ? imageSrc(item.logo, item.logo, "/images/home/partners/") : null
        };
      })
    : defaultHome.partners;

  return {
    heroLearnMoreLabel: textSrc(entry.heroLearnMoreLabel, defaultHome.heroLearnMoreLabel),
    heroLearnMoreHref: textSrc(entry.heroLearnMoreHref, defaultHome.heroLearnMoreHref),
    heroSlides,
    pathwayItems,
    legacyTitle: textSrc(entry.legacyTitle, defaultHome.legacyTitle),
    legacyBody: await readText(entry.legacyBody, defaultHome.legacyBody),
    legacyTagline: textSrc(entry.legacyTagline, defaultHome.legacyTagline),
    legacyPhoto: imageSrc(entry.legacyPhoto, defaultHome.legacyPhoto, "/images/home/legacy/"),
    legacyPhotoAlt: textSrc(entry.legacyPhotoAlt, defaultHome.legacyPhotoAlt),
    whyTitle: textSrc(entry.whyTitle, defaultHome.whyTitle),
    whyQuote: textSrc(entry.whyQuote, defaultHome.whyQuote),
    whyBody: textSrc(entry.whyBody, defaultHome.whyBody),
    whyImage: imageSrc(entry.whyImage, defaultHome.whyImage, "/images/home/why/"),
    whyImageAlt: textSrc(entry.whyImageAlt, defaultHome.whyImageAlt),
    curriculumTitle: textSrc(entry.curriculumTitle, defaultHome.curriculumTitle),
    curriculum,
    partnersKicker: textSrc(entry.partnersKicker, defaultHome.partnersKicker),
    partnersTitle: textSrc(entry.partnersTitle, defaultHome.partnersTitle),
    partners,
    chairmanKicker: textSrc(entry.chairmanKicker, defaultHome.chairmanKicker),
    chairmanName: textSrc(entry.chairmanName, defaultHome.chairmanName),
    chairmanRole: textSrc(entry.chairmanRole, defaultHome.chairmanRole),
    chairmanMessage: await readText(entry.chairmanMessage, defaultHome.chairmanMessage),
    chairmanPhoto: imageSrc(entry.chairmanPhoto, defaultHome.chairmanPhoto, "/images/home/chairman/"),
    chairmanPhotoAlt: textSrc(entry.chairmanPhotoAlt, defaultHome.chairmanPhotoAlt)
  };
}
