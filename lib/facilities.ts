import type { SpaceFeature, SpacePhoto } from "@/lib/campus";

export type CareSpace = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  tone?: "default" | "pink";
  reverse?: boolean;
  leadIcon: string;
  image: SpacePhoto;
  features: SpaceFeature[];
};

export const facilitiesHero = {
  kicker: "Facilities",
  title: "Care Beyond\nClassrooms",
  lede: "Thoughtfully designed to ensure the safety, well-being and happiness of every student.",
  script: "A Safer\nHappier\nBrighter\nTomorrow",
  image: "/images/home/hero/hero-courtyard.png",
  imageAlt: "Students and families in the Lawrence High School courtyard"
};

export const careSpaces: CareSpace[] = [
  {
    id: "transport",
    title: "Transport",
    tagline: "Safe Journeys. Brighter Tomorrows.",
    body: "We provide a well-organized transport system with a fleet of buses ensuring safe and reliable travel for students. The service is designed to prioritize safety, punctuality and convenience for parents and students.",
    leadIcon: "transport",
    image: {
      src: "/images/about/campus.png",
      alt: "Lawrence High School campus approach and outdoor spaces"
    },
    features: [
      { icon: "bus", label: "Fleet of Buses" },
      { icon: "gps", label: "GPS Tracking" },
      { icon: "driver", label: "Trained Drivers" },
      { icon: "shield", label: "Supervised Transport" }
    ]
  },
  {
    id: "day-care",
    title: "Day Care",
    tagline: "A Safe Haven for Our Youngest Learners.",
    body: "Our Day Care facility offers a warm, safe and nurturing space for young children. With trained caregivers and age-appropriate activities, we ensure that our little ones feel comfortable, happy and cared for.",
    tone: "pink",
    reverse: true,
    leadIcon: "daycare",
    image: {
      src: "/images/home/hero/hero-kindergarten.png",
      alt: "A bright early-years space at Lawrence High School"
    },
    features: [
      { icon: "secure", label: "Safe & Secure Environment" },
      { icon: "caregivers", label: "Trained Caregivers" },
      { icon: "activities", label: "Age-Appropriate Activities" },
      { icon: "play", label: "Play & Learn Spaces" }
    ]
  },
  {
    id: "infirmary",
    title: "Infirmary",
    tagline: "Health. Care. Always.",
    body: "Our infirmary is managed by a qualified nurse and equipped to provide first aid and basic medical care. The well-being and safety of our students are always a priority.",
    leadIcon: "infirmary",
    image: {
      src: "/images/home/pathway/grow.png",
      alt: "A calm care space supporting student well-being at Lawrence High School"
    },
    features: [
      { icon: "nurse", label: "Qualified Nurse" },
      { icon: "firstaid", label: "First Aid Care" },
      { icon: "emergency", label: "Emergency Support" },
      { icon: "wellbeing", label: "Student Well-being" }
    ]
  }
];
