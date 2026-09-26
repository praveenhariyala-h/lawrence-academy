import {
  beyondClassroom as defaultBeyondClassroom,
  campusSpotlight as defaultCampusSpotlight,
  featuredAchievementFallback,
  upcomingEvents as defaultUpcomingEvents
} from "@/lib/homeSections";
import { readContent } from "@/lib/readContent";

export type HomeImageFit = "cover" | "contain";

export type HomeHeroSlide = {
  title: string;
  text: string;
  image: string;
  alt: string;
  fit: HomeImageFit;
};

export type HomePathway = {
  title: string;
  detail: string;
  blurb: string;
  extra: string;
  image: string;
  position: string;
};

export type HomeBeyondItem = {
  title: string;
  image: string;
  alt: string;
};

export type HomeBeyond = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  items: HomeBeyondItem[];
};

export type HomeCampusSpotlight = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  alt: string;
};

export type HomeEvent = {
  day: string;
  month: string;
  title: string;
  text: string;
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

export type HomeFeaturedAchievement = {
  title: string;
  text: string;
  date: string;
  image: string;
  alt: string;
  href: string;
};

export type HomeContent = {
  metaTitle: string;
  metaDescription: string;
  heroLearnMoreLabel: string;
  heroLearnMoreHref: string;
  heroSlides: HomeHeroSlide[];
  pathwayItems: HomePathway[];
  whyTitle: string;
  whyQuote: string;
  whyBody: string;
  whyImage: string;
  whyImageAlt: string;
  curriculumTitle: string;
  curriculumKicker: string;
  curriculum: HomeCurriculum[];
  beyondClassroom: HomeBeyond;
  achievementsTitle: string;
  achievementsViewAllLabel: string;
  campusSpotlight: HomeCampusSpotlight;
  upcomingEventsTitle: string;
  upcomingEventsViewAllLabel: string;
  upcomingEvents: HomeEvent[];
  partnersKicker: string;
  partnersTitle: string;
  partners: HomePartner[];
  featuredAchievement: HomeFeaturedAchievement;
  chairmanKicker: string;
  chairmanName: string;
  chairmanRole: string;
  chairmanMessage: string;
  chairmanPhoto: string;
  chairmanPhotoAlt: string;
};

export const defaultHome: HomeContent = {
  metaTitle: "Lawrence High School | ICSE HSR Layout, Bengaluru",
  metaDescription:
    "Lawrence High School ICSE, HSR Layout, Bengaluru — 35 years of academic excellence, 100% student engagement, and the A.C.T. framework.",
  heroLearnMoreLabel: "Know more",
  heroLearnMoreHref: "/about",
  heroSlides: [
    {
      title: "Welcome to Lawrence",
      text: "Where learning is exciting, purposeful, and relevant.",
      image: "/images/home/hero/hero-building.png",
      alt: "Lawrence High ICSE campus building in HSR Layout",
      fit: "cover"
    },
    {
      title: "Joyful learners",
      text: "A campus filled with energy, curiosity, and belonging.",
      image: "/images/home/hero/hero-courtyard.png",
      alt: "Primary students walking together in the school courtyard",
      fit: "cover"
    },
    {
      title: "Curiosity begins here",
      text: "Warm classrooms where young children discover, play, and learn.",
      image: "/images/home/hero/hero-kindergarten.png",
      alt: "Kindergarten teacher and students exploring together in class",
      fit: "cover"
    },
    {
      title: "Learning by doing",
      text: "Laboratories and studios where ideas become experiments and skills.",
      image: "/images/home/hero/hero-lab.png",
      alt: "Students working in the chemistry laboratory",
      fit: "cover"
    },
    {
      title: "One school, one spirit",
      text: "A community that gathers, celebrates, and grows together.",
      image: "/images/home/hero/hero-assembly.png",
      alt: "School assembly in the Lawrence High School auditorium",
      fit: "cover"
    }
  ],
  pathwayItems: [
    {
      title: "Learn",
      detail: "Academics",
      blurb: "A strong academic core for every child.",
      extra: "",
      image: "/images/home/pathway/learn.png",
      position: "center 30%"
    },
    {
      title: "Innovate",
      detail: "Robotics",
      blurb: "Robotics and STEM in action.",
      extra: "",
      image: "/images/home/pathway/innovate.png",
      position: "72% 40%"
    },
    {
      title: "Explore",
      detail: "Competition",
      blurb: "Competitions that stretch potential.",
      extra: "",
      image: "/images/home/pathway/explore.png",
      position: "center 35%"
    },
    {
      title: "Create",
      detail: "Art",
      blurb: "Art that gives ideas a voice.",
      extra: "",
      image: "/images/home/pathway/create.png",
      position: "58% 38%"
    },
    {
      title: "Lead",
      detail: "Leadership",
      blurb: "Leadership rooted in character.",
      extra: "",
      image: "/images/home/pathway/lead.png",
      position: "center 22%"
    },
    {
      title: "Perform",
      detail: "Sports",
      blurb: "Sports that build grit and joy.",
      extra: "",
      image: "/images/home/pathway/perform.png",
      position: "center 30%"
    },
    {
      title: "Grow",
      detail: "Lifeskills",
      blurb: "Life skills for a bigger world.",
      extra: "Interact Club",
      image: "/images/home/pathway/grow.png",
      position: "center 25%"
    }
  ],
  whyTitle: "What Makes the School Special?",
  whyQuote: "“FROM CURIOUS MINDS TO CONFIDENT FUTURES.”",
  whyBody:
    "At Lawrence High, every experience is an opportunity to discover, create, lead and grow. We help students transform their potential into purpose and their dreams into achievement.",
  whyImage: "/images/home/why/why-lawrence.png",
  whyImageAlt:
    "Why choose Lawrence High School: academic excellence, future ready learning, beyond academics, character and values, confidence and leadership, holistic growth, and a safe caring campus",
  curriculumTitle: "Every Stage. Every Possibility.",
  curriculumKicker: "A learning journey for life",
  curriculum: [
    {
      title: "Kindergarten",
      grades: "Curiosity begins here.",
      href: "/academics/kindergarten",
      photo: "/images/home/curriculum/little-learners.png",
      photoAlt: "Kindergarten children playing with blocks and toys"
    },
    {
      title: "Primary School",
      grades: "Building strong foundations.",
      href: "/academics/primary",
      photo: "/images/home/curriculum/young-explorers.png",
      photoAlt: "Primary students exploring shapes, letters, and numbers"
    },
    {
      title: "Middle School",
      grades: "Exploring. Questioning. Creating.",
      href: "/academics/middle-school",
      photo: "/images/home/curriculum/creators.png",
      photoAlt: "Middle school students collaborating on a classroom project"
    },
    {
      title: "High School",
      grades: "Preparing for tomorrow.",
      href: "/academics/high-school",
      photo: "/images/home/curriculum/future-leaders.png",
      photoAlt: "High school students working together in class"
    }
  ],
  beyondClassroom: defaultBeyondClassroom,
  achievementsTitle: "Recent Achievements",
  achievementsViewAllLabel: "View all",
  campusSpotlight: defaultCampusSpotlight,
  upcomingEventsTitle: "Upcoming Events",
  upcomingEventsViewAllLabel: "View all",
  upcomingEvents: defaultUpcomingEvents,
  partnersKicker: "Working together to create richer learning experiences for our students.",
  partnersTitle: "Our Partners & Collaborators",
  partners: [
    { name: "LEGO Education", category: "STEM", logo: "/images/home/partners/lego-education.png" },
    { name: "Find Your Voice", category: "Enrichment", logo: "/images/home/partners/find-your-voice.png" },
    { name: "Nayi Taleem", category: "Enrichment", logo: "/images/home/partners/nayi-taleem.png" },
    { name: "Collins", category: "Curriculum", logo: "/images/home/partners/collins.png" },
    { name: "Karadi Path", category: "Curriculum", logo: "/images/home/partners/karadi-path.png" },
    { name: "IQ Academy", category: "Enrichment", logo: "/images/home/partners/iq-academy.png" },
    { name: "Taekwon-Do Association of Karnataka", category: "Sports", logo: "/images/home/partners/taekwondo-tak.png" }
  ],
  featuredAchievement: featuredAchievementFallback,
  chairmanKicker: "Chairman’s message",
  chairmanName: "P.M. Subbaiah",
  chairmanRole: "Chairman, Lawrence High School",
  chairmanMessage: `Dear Parents, over the past 35 years, Lawrence School HSR and Koramangala have grown into schools that nurture champions. Education for us isn’t just about books but about life itself — building character, shaping mindsets, and preparing children for a meaningful future.

Long-serving, dedicated teachers work with every child, enabling them to discover strengths, face challenges, and grow into confident individuals who will be the future leaders and changemakers of our society. We look forward to walking this journey with you — hand in hand.`,
  chairmanPhoto: "/images/home/chairman/chairman.png",
  chairmanPhotoAlt: "P.M. Subbaiah, Chairman, Lawrence High School"
};

export async function getHomeContent(): Promise<HomeContent> {
  return readContent("content/home/home.json", defaultHome);
}
