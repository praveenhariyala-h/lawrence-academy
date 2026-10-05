import { readContent } from "@/lib/readContent";

export type NewsCategory = "result" | "achievement" | "event";
export type NewsImageFit = "cover" | "contain";

export type NewsHero = {
  kicker: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  fit: NewsImageFit;
};

export type NewsTabsCopy = {
  resultLabel: string;
  achievementLabel: string;
  eventLabel: string;
  resultHeading: string;
  resultEmpty: string;
  achievementEmpty: string;
  eventEmpty: string;
};

export type NewsResult = NewsAchievement & {
  launch?: boolean;
};

export type NewsEvent = {
  day: string;
  month: string;
  title: string;
  text: string;
  body: string;
  photos: NewsAchievementPhoto[];
};

export type NewsAchievementPhoto = {
  src: string;
  alt: string;
  applyLabel?: string;
  applyHref?: string;
};

export type NewsAchievement = {
  kicker: string;
  title: string;
  body: string;
  photos: NewsAchievementPhoto[];
};

export type NewsContent = {
  metaTitle: string;
  metaDescription: string;
  hero: NewsHero;
  tabs: NewsTabsCopy;
  results: NewsResult[];
};

const RESULTS = "/images/news/results/";
function resultShot(file: string, alt: string): NewsAchievementPhoto {
  return { src: `${RESULTS}${file}`, alt };
}


export const defaultNews: NewsContent = {
  metaTitle: "News",
  metaDescription:
    "Results, achievements and events from Lawrence High School ICSE, HSR Layout, Bengaluru.",
  hero: {
    kicker: "News",
    title: "Results. Recognition.\n*Moments that matter.*",
    lede: "Board results, student achievements and events from life at Lawrence High School.",
    image: "/images/news/hero-sports.png",
    imageAlt: "Lawrence High School football team with a trophy beside the school trophy cabinet",
    fit: "cover"
  },
  tabs: {
    resultLabel: "Result",
    achievementLabel: "Achievements",
    eventLabel: "Events",
    resultHeading: "ICSE CLASS X RESULTS 2025–26",
    resultEmpty: "Results will appear here as they are published.",
    achievementEmpty: "Achievements will appear here as they are published.",
    eventEmpty: "Upcoming events will appear here soon."
  },
  results: [
    {
      kicker: "ICSE 2025-26",
      title: "Batch of 2025-26 Results",
      body: "Lawrence High School ICSE congratulates the Batch of 2025-26 on a 100% result.\n\nDistinctions (85% and above): 85 students.\n58 students scored above 90, 27 students scored 85–89%, 15 students scored 80–84%, and 29 students scored 60–80%.",
      launch: true,
      photos: [
        resultShot("batch-2025-26.jpg", "ICSE Batch of 2025-26 results poster for Lawrence High School"),
        {
          ...resultShot(
            "admissions-2027-28.jpg",
            "Lawrence High School admissions open for 2027-28, with ICSE 2026 toppers"
          ),
          applyLabel: "Apply",
          applyHref: "/admissions"
        }
      ]
    },
    {
      kicker: "ICSE 2025-26",
      title: "Atul Kumar Mishra — 99%",
      body: "Atul Kumar Mishra scored 99% in the ICSE Batch of 2025-26.",
      photos: [resultShot("atul-kumar-mishra.jpg", "Atul Kumar Mishra, ICSE Batch of 2025-26")]
    },
    {
      kicker: "ICSE 2025-26",
      title: "Annareddy Himaja — 97.8%",
      body: "Annareddy Himaja scored 97.8% in the ICSE Batch of 2025-26.",
      photos: [resultShot("annareddy-himaja.jpg", "Annareddy Himaja, ICSE Batch of 2025-26")]
    },
    {
      kicker: "ICSE 2025-26",
      title: "Ashima Agarwal — 97.8%",
      body: "Ashima Agarwal scored 97.8% in the ICSE Batch of 2025-26.",
      photos: [resultShot("ashima-agarwal.jpg", "Ashima Agarwal, ICSE Batch of 2025-26")]
    },
    {
      kicker: "ICSE 2025-26",
      title: "R Aditi — 97.8%",
      body: "R Aditi scored 97.8% in the ICSE Batch of 2025-26.",
      photos: [resultShot("r-aditi.jpg", "R Aditi, ICSE Batch of 2025-26")]
    },
    {
      kicker: "ICSE 2025-26",
      title: "Naman Teertha Subash — 97.4%",
      body: "Naman Teertha Subash scored 97.4% in the ICSE Batch of 2025-26.",
      photos: [resultShot("naman-teertha-subash.jpg", "Naman Teertha Subash, ICSE Batch of 2025-26")]
    }
  ]
};

const studentResultTitle = /^(.*?)\s*[—–-]\s*(\d+(?:\.\d+)?%)\s*$/;

export function launchHighlight(results: NewsResult[] | null | undefined): NewsResult | null {
  const records = (results ?? []).filter((item) => item && typeof item === "object" && item.title);
  return (
    records.find((item) => item.launch) ??
    records.find((item) => !studentResultTitle.test(item.title)) ??
    null
  );
}

export async function getNewsContent(): Promise<NewsContent> {
  return readContent("content/news/news.json", defaultNews);
}
