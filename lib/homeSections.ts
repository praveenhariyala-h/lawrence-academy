export const beyondClassroom = {
  title: "More Than\na Classroom",
  body: "Sports, arts, clubs, competitions, field trips and leadership experiences that shape confident individuals.",
  ctaLabel: "Explore Beyond Books",
  ctaHref: "/beyond-books",
  items: [
    {
      title: "Sports",
      image: "/images/home/beyond/sports.png",
      alt: "Student batting in the cricket nets at Lawrence High School"
    },
    {
      title: "Arts & Culture",
      image: "/images/home/beyond/art.png",
      alt: "Students painting decorative vases in art class at Lawrence High School"
    },
    {
      title: "Clubs & Activities",
      image: "/images/home/beyond/mun.png",
      alt: "Students representing countries at a Model United Nations session"
    },
    {
      title: "Competitions",
      image: "/images/home/pathway/explore.png",
      alt: "Students at competitions from Lawrence High School"
    }
  ]
};

export const campusSpotlight = {
  title: "Our Campus",
  ctaLabel: "Explore Campus",
  ctaHref: "/about",
  body: "Modern facilities, inspiring spaces, and a safe, well-planned environment for learning and growth.",
  image: "/images/home/hero/hero-building.png",
  alt: "Lawrence High School campus, HSR Layout"
};

export const upcomingEvents = [
  {
    day: "12",
    month: "Jan",
    title: "Annual Sports Meet",
    text: "A celebration of spirit and teamwork."
  },
  {
    day: "26",
    month: "Jan",
    title: "Republic Day Celebrations",
    text: "A proud day marked with pride."
  },
  {
    day: "10",
    month: "Feb",
    title: "School Carnival",
    text: "Fun, creativity, community."
  }
];

export const journeyCta = {
  title: "Begin Your Lawrence Journey",
  body: "Discover an environment where children learn, grow and achieve.",
  image: "/images/home/pathway/grow.png",
  alt: "Students at Lawrence High School",
  enquireHref: "/contact",
  applyHref: "/admissions"
};

export const featuredAchievementFallback = {
  title: "Champions at International Robotics Competition",
  text: "Our students brought home top honours, showcasing innovation and teamwork on a global stage.",
  date: "",
  image: "/images/home/hero/hero-robotics.png",
  alt: "Lawrence High School students with a robotics award",
  href: "/news"
};

export function achievementImageForSlug(slug: string) {
  if (slug.includes("football") || slug.includes("kabaddi")) {
    return "/images/home/pathway/perform.png";
  }
  if (slug.includes("chess") || slug.includes("iimun") || slug.includes("compet")) {
    return "/images/home/pathway/explore.png";
  }
  if (slug.includes("principal") || slug.includes("award")) {
    return "/images/home/hero/hero-classroom.png";
  }
  return "/images/home/hero/hero-robotics.png";
}
