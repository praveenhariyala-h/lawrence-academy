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
      name: "Mrs. Supriya Johnson",
      role: "Principal",
      photo: null,
      photoAlt: "Mrs. Supriya Johnson, Principal of Lawrence High School",
      initials: "SJ",
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
