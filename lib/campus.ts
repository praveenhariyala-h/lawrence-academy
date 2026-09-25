import { imageSrc, mapPhotos, textSrc } from "@/lib/cms";
import { reader } from "@/lib/keystatic";

export type SpaceFeature = {
  icon: string;
  label: string;
};

export type SpacePhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type CampusSpace = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  reverse?: boolean;
  image?: SpacePhoto;
  gallery?: SpacePhoto[];
  features: SpaceFeature[];
};

export const campusHero = {
  title: "Our *Campus*",
  lede: "A safe and inspiring space for every learner to grow, explore and belong.",
  image: "/images/home/hero/hero-campus.png",
  imageAlt: "Lawrence High School campus in HSR Layout, Bengaluru"
};

export const campusSpaces: CampusSpace[] = [
  {
    id: "classrooms",
    title: "Classrooms",
    tagline: "Spacious. Comfortable. Conducive to Learning.",
    body: "Our well-ventilated and technology-enabled classrooms provide a bright, safe and engaging learning environment. Designed to be spacious, child-friendly and equipped with modern teaching aids, the classrooms encourage collaboration, creativity and active participation.",
    image: {
      src: "/images/home/hero/hero-classroom.png",
      alt: "A bright classroom at Lawrence High School"
    },
    features: [
      { icon: "board", label: "Smart Boards" },
      { icon: "furniture", label: "Child-Friendly Furniture" },
      { icon: "bright", label: "Well-Ventilated & Bright" }
    ]
  },
  {
    id: "computer-labs",
    title: "Computer Labs",
    tagline: "Explore. Create. Innovate.",
    body: "We have 2 fully equipped computer laboratories with 40 computers each. High-speed internet, updated software and trained instructors help students develop digital skills, coding knowledge and practical expertise.",
    reverse: true,
    image: {
      src: "/images/about/computer-lab.png",
      alt: "Students working at computers in the Lawrence High School computer lab"
    },
    features: [
      { icon: "computers", label: "40 computers each" },
      { icon: "internet", label: "High-Speed Internet" },
      { icon: "software", label: "Updated Software" },
      { icon: "handsOn", label: "Hands-on Learning" }
    ]
  },
  {
    id: "science-labs",
    title: "Science Laboratories",
    tagline: "Experiment. Discover. Innovate.",
    body: "Our well-equipped Physics, Chemistry and Biology laboratories provide students with practical exposure and inquiry-based learning experiences. The labs are designed to meet ICSE standards and encourage scientific temper, curiosity and innovation.",
    gallery: [
      {
        src: "/images/about/science-physics.png",
        alt: "Students working with physics apparatus in the Lawrence High School laboratory",
        caption: "Physics Lab"
      },
      {
        src: "/images/about/science-chemistry.png",
        alt: "Students conducting chemistry experiments in the Lawrence High School laboratory",
        caption: "Chemistry Lab"
      },
      {
        src: "/images/about/science-biology.png",
        alt: "Students using a microscope in the Lawrence High School biology laboratory",
        caption: "Biology Lab"
      }
    ],
    features: [
      { icon: "equipment", label: "Modern Equipment" },
      { icon: "experiment", label: "Hands-on Experiments" },
      { icon: "safety", label: "Safety Standards" },
      { icon: "curriculum", label: "Curriculum-Friendly" }
    ]
  },
  {
    id: "robotics",
    title: "Robotics Lab",
    tagline: "Build. Program. Innovate.",
    body: "Our Robotics Lab nurtures innovation and problem-solving through LEGO, Arduino kits, sensors and modern tools. It provides a space for students to design, build and test real-world solutions, fostering creativity and 21st century skills.",
    reverse: true,
    image: {
      src: "/images/home/hero/hero-robotics.png",
      alt: "Robotics work and student projects at Lawrence High School"
    },
    features: [
      { icon: "lego", label: "LEGO & Arduino Kits" },
      { icon: "sensors", label: "Sensors & Electronics" },
      { icon: "project", label: "Project-Based Learning" },
      { icon: "innovation", label: "Innovation Mindset" }
    ]
  },
  {
    id: "library",
    title: "Library",
    tagline: "Read. Learn. Grow.",
    body: "Our well-stocked library provides a peaceful and enriching environment for students to explore a wide range of books, reference materials, magazines and digital resources. It nurtures a love for reading, critical thinking and lifelong learning.",
    image: {
      src: "/images/campus/library.png",
      alt: "Students browsing books in the Lawrence High School library"
    },
    features: [
      { icon: "books", label: "Wide Range of Books" },
      { icon: "digital", label: "Digital Resources" },
      { icon: "reading", label: "Quiet & Comfortable Reading Space" },
      { icon: "research", label: "Research & Learning" }
    ]
  },
  {
    id: "auditoriums",
    title: "Auditoriums",
    tagline: "A Stage for Every Talent.",
    body: "Our spacious and well-equipped auditoriums host assemblies, cultural programs, seminars, workshops and inter-school events. With modern audio-visual facilities and comfortable seating, they provide the perfect stage for students to showcase their talent and build confidence.",
    reverse: true,
    image: {
      src: "/images/home/hero/hero-assembly.png",
      alt: "School assembly and performance space at Lawrence High School"
    },
    features: [
      { icon: "seating", label: "Spacious Seating" },
      { icon: "av", label: "Modern Audio-Visual Systems" },
      { icon: "stage", label: "Stage for Performances" },
      { icon: "events", label: "Events & Competitions" }
    ]
  },
  {
    id: "sandpit",
    title: "Sandpit Area",
    tagline: "Play. Explore. Imagine. Grow.",
    body: "Our sandpit area offers a safe and engaging outdoor space where children can explore, create and learn through play. It encourages sensory development, fine motor skills, creativity and social interaction in a natural and joyful setting.",
    image: {
      src: "/images/campus/sandpit.png",
      alt: "Children playing in the sandpit at Lawrence High School"
    },
    features: [
      { icon: "safety", label: "Safe & Clean Play Area" },
      { icon: "handsOn", label: "Sensory Development" },
      { icon: "innovation", label: "Encourages Creativity" },
      { icon: "daycare", label: "Builds Social Skills" }
    ]
  }
];

export const campusCta = {
  title: "Begin your Journey with Us",
  lede: "Give your child the opportunity to learn, grow and shine at Lawrence.",
  href: "/contact",
  label: "Enquire Now"
};

export type CampusContent = {
  metaTitle: string;
  metaDescription: string;
  hero: typeof campusHero;
  spaces: CampusSpace[];
};

export const defaultCampus: CampusContent = {
  metaTitle: "Campus",
  metaDescription:
    "Explore classrooms, labs, the library, auditoriums and campus spaces at Lawrence High School ICSE, HSR Layout.",
  hero: campusHero,
  spaces: campusSpaces
};

function mapSpaceImage(
  entry: { src: string | null; alt: string | null } | undefined,
  fallback?: SpacePhoto
): SpacePhoto | undefined {
  if (entry?.src) {
    return {
      src: imageSrc(entry.src, fallback?.src ?? "", "/images/"),
      alt: textSrc(entry.alt, fallback?.alt ?? "")
    };
  }
  return fallback;
}

export async function getCampusContent(): Promise<CampusContent> {
  let entry;
  try {
    entry = await reader.singletons.campus.read();
  } catch (error) {
    console.error("Failed to read Keystatic campus content", error);
    return defaultCampus;
  }
  if (!entry) return defaultCampus;

  const spaces: CampusSpace[] = entry.spaces.length
    ? entry.spaces.map((space, index) => {
        const fallback = defaultCampus.spaces[index] ?? defaultCampus.spaces[0];
        const gallery = space.gallery.length
          ? mapPhotos(space.gallery, fallback.gallery ?? [], "/images/")
          : fallback.gallery;
        return {
          id: textSrc(space.id, fallback.id),
          title: textSrc(space.title, fallback.title),
          tagline: textSrc(space.tagline, fallback.tagline),
          body: textSrc(space.body, fallback.body),
          reverse: space.reverse ?? fallback.reverse,
          image: mapSpaceImage(space.image, fallback.image),
          gallery,
          features: space.features.length
            ? space.features.map((feature, featureIndex) => {
                const featureFallback = fallback.features[featureIndex] ?? fallback.features[0];
                return {
                  icon: textSrc(feature.icon, featureFallback.icon),
                  label: textSrc(feature.label, featureFallback.label)
                };
              })
            : fallback.features
        };
      })
    : defaultCampus.spaces;

  return {
    metaTitle: textSrc(entry.metaTitle, defaultCampus.metaTitle),
    metaDescription: textSrc(entry.metaDescription, defaultCampus.metaDescription),
    hero: {
      title: textSrc(entry.hero.title, campusHero.title),
      lede: textSrc(entry.hero.lede, campusHero.lede),
      image: imageSrc(entry.hero.image, campusHero.image, "/images/"),
      imageAlt: textSrc(entry.hero.imageAlt, campusHero.imageAlt)
    },
    spaces
  };
}
