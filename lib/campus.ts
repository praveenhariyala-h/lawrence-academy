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
  overlay?: string;
  image?: SpacePhoto;
  gallery?: SpacePhoto[];
  features: SpaceFeature[];
};

export const campusHero = {
  kicker: "Campus",
  title: "Our Facilities",
  lede: "Spaces that inspire learning, creativity and confident futures. Our campus offers a safe, vibrant and thoughtfully designed environment with world-class facilities to support academic excellence and holistic development.",
  image: "/images/home/hero/hero-building.png",
  imageAlt: "Lawrence High School campus building in HSR Layout, Bengaluru"
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
      { icon: "ac", label: "AC Classrooms" },
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
    overlay: "Think\nCode\nCreate",
    image: {
      src: "/images/home/hero/hero-class.png",
      alt: "Students working in a Lawrence High School learning space"
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
        src: "/images/home/hero/hero-lab.png",
        alt: "Science laboratory at Lawrence High School",
        caption: "Physics Lab"
      },
      {
        src: "/images/home/pathway/innovate.png",
        alt: "Students exploring scientific ideas at Lawrence High School",
        caption: "Chemistry Lab"
      },
      {
        src: "/images/home/pathway/explore.png",
        alt: "Hands-on discovery at Lawrence High School",
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
    overlay: "Build\nProgram\nInnovate",
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
      src: "/images/home/pathway/learn.png",
      alt: "Students reading and learning at Lawrence High School"
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
    overlay: "ideas\nexpress\ninspire",
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
    id: "sanipit",
    title: "Sanipit Area",
    tagline: "Healthy Meals. Happy Minds.",
    body: "Our spacious and hygienic canteen provides freshly prepared nutritious meals in a clean and comfortable environment. It is a place where students can unwind in a safe, supervised and friendly atmosphere.",
    overlay: "Good Food\nBetter Mood",
    image: {
      src: "/images/home/hero/hero-kindergarten.png",
      alt: "A bright shared space for students at Lawrence High School"
    },
    features: [
      { icon: "hygiene", label: "Hygienic Facility" },
      { icon: "meals", label: "Nutritious Meals" },
      { icon: "dining", label: "Spacious Seating" },
      { icon: "supervised", label: "Safe & Supervised" }
    ]
  }
];

export const campusCta = {
  title: "More Than A Campus\nA Community For Life",
  href: "/contact",
  label: "Enquire Now"
};
