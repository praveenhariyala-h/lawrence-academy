import { imageSrc, mapPhotos, textSrc } from "@/lib/cms";
import { formatNewsDate, reader } from "@/lib/keystatic";

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
  resultEmpty: string;
  achievementEmpty: string;
  eventEmpty: string;
};

export type NewsResult = {
  dateLabel: string;
  title: string;
  summary: string;
  href: string;
};

export type NewsEvent = {
  day: string;
  month: string;
  title: string;
  text: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  summary: string;
  category: NewsCategory;
};

export type NewsAchievementPhoto = {
  src: string;
  alt: string;
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
  events: NewsEvent[];
  achievements: NewsAchievement[];
};

const ACHIEVE = "/images/news/achievements/";
const categories: NewsCategory[] = ["result", "achievement", "event"];

function newsFit(value: string | null | undefined): NewsImageFit {
  return value === "contain" ? "contain" : "cover";
}

function shot(file: string, alt: string): NewsAchievementPhoto {
  return { src: `${ACHIEVE}${file}`, alt };
}

function newsCategory(value: string | null | undefined, slug: string): NewsCategory {
  if (value && categories.includes(value as NewsCategory)) {
    return value as NewsCategory;
  }
  if (slug.includes("award") || slug.includes("principal") || slug.includes("iimun")) {
    return "achievement";
  }
  if (slug.includes("sports-meet") || slug.includes("carnival") || slug.includes("republic")) {
    return "event";
  }
  return "result";
}

export const defaultNews: NewsContent = {
  metaTitle: "News",
  metaDescription:
    "Results, achievements and events from Lawrence High School ICSE, HSR Layout, Bengaluru.",
  hero: {
    kicker: "News",
    title: "Results. Recognition.\n*Moments that matter.*",
    lede: "Board results, student achievements and events from life at Lawrence High School.",
    image: "/images/news/hero.png",
    imageAlt: "Lawrence High School kabaddi team with medals at the CISCE Regional Kabaddi Tournament 2026",
    fit: "cover"
  },
  tabs: {
    resultLabel: "Result",
    achievementLabel: "Achievements",
    eventLabel: "Events",
    resultEmpty: "Results will appear here as they are published.",
    achievementEmpty: "Achievements will appear here as they are published.",
    eventEmpty: "Upcoming events will appear here soon."
  },
  results: [
    {
      dateLabel: formatNewsDate("2025-02-01"),
      title: "Kabaddi",
      summary: "The girls Kabaddi team won first place at Bharathi Public School, Yelahanka.",
      href: "/news/kabaddi"
    },
    {
      dateLabel: formatNewsDate("2024-11-01"),
      title: "Football",
      summary: "Under 15 boys won the Pro Club Inter-school Football Competition at Begur Turf.",
      href: "/news/football"
    },
    {
      dateLabel: formatNewsDate("2024-06-01"),
      title: "CISCE Zonal Chess",
      summary: "Lawrence hosted CISCE Zone 6 Chess and brought home multiple team titles.",
      href: "/news/cisce-zonal-chess"
    }
  ],
  events: [
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
  ],
  achievements: [
    {
      kicker: "Student Achievements",
      title: "Hannah Maria Johnson Wins Cash Prize at State Computer Olympiad",
      body: "Hannah Maria Johnson of grade II E secured the sixth rank and a cash prize of ₹700 in the state Level Computer Olympiad conducted by the Indian Talent Olympiad.",
      photos: [shot("01.png", "Hannah Maria Johnson receiving her Computer Olympiad certificate")]
    },
    {
      kicker: "Student Achievements",
      title: "Aditi Dash Selected Among Top 100 Science Talents in India",
      body: "Aditi Dash of Grade VI has secured 2nd Rank and has been selected among the Top 100 Science Talents in India through the National Science Promotion Orient Test (SPOT) 2025–2026, conducted by the Vikram Sarabhai Science Foundation (VSSF), Kochi.\n\nShe has been invited to attend the VSSF Internship Programme in Bengaluru from 17th to 19th July 2026 where she will have the unique opportunity to interact with scientists from ISRO, gain first-hand exposure to scientific concepts and live experiments, and receive her SPOT 100 Badge, Medal, and Certificate of Merit.",
      photos: [shot("02.png", "Aditi Dash, Grade VI, selected among India's Top 100 Science Talents")]
    },
    {
      kicker: "Student Achievements",
      title: "K S Sathvik Wins Bronze at Tirak Taekwondo International Championship",
      body: "K S Sathvik of Grade X represented India at the Tirak Taekwondo International Championship in Bangkok, Thailand and secured the Bronze Medal by defeating his Malaysian opponent in a competition featuring participants from 28 countries.",
      photos: [shot("03.png", "K S Sathvik with the Indian flag after winning bronze in Bangkok")]
    },
    {
      kicker: "Student Achievements",
      title: "U-14 Boys Kabaddi Team Runners-Up at State School Olympics",
      body: "Lawrence school U14 Boys Kabaddi team secured the runners-up at the 18th State Level School Olympics Games Championship - 2026, organized by Youngsters Sports Club, at Kittur Rani Chennamma Stadium, Bangalore on 25th June.\n\nTeam Members: Vinay - VIII B, Veeraj - VIIIA, Guru Charan-VIIA, Nithin - VIIC, Manish - VIII D, Nuthan D - VIIF, Parin - VIII B, Jashwanth - VIII B, Mithun - VIII A",
      photos: [shot("04.png", "U-14 boys kabaddi team at Kittur Rani Chennamma Stadium")]
    },
    {
      kicker: "Student Achievements",
      title: "U-17 Girls Handball Team Runners-Up at CISCE Zonal",
      body: "Lawrence School Under-17 Girls team secured the Runner-up position in the CISCE Zonal Handball Competition held at VIBGYOR High School, Haralur, from 27/06/2026 to 28/06/2026. 8 of our students have been selected for the Regional-level competition.",
      photos: [
        shot("05.png", "U-17 girls handball team at the CISCE Zonal Championship"),
        shot("05b.png", "Girls handball team at the CISCE Karnataka and Goa Regional Tournament")
      ]
    },
    {
      kicker: "Student Achievements",
      title: "U-14 Boys Win Bronze at CISCE Zonal Table Tennis",
      body: "U-14 Boys team secured bronze medal in the CISCE ZONAL LEVEL Table Tennis Tournament conducted by Primus Public School, Sarjapur on 18th and 19th July.",
      photos: [shot("06.png", "U-14 boys table tennis medallists at Primus Public School")]
    },
    {
      kicker: "Student Achievements",
      title: "Lawrence Named Best Delegate School at IIMUN Bangalore",
      body: "Lawrence High School - the host school of IIMUN Bangalore Chapter held from 17th July to 19th July 2026, has been awarded the Best Delegate School among 58 schools and 650 student delegates. Lawrence School won the titles- 5 Best Delegate Awards, 2 High Commendation Awards, 1 Special Mention Awards and 3 Verbal Mentions.",
      photos: [shot("07.png", "Lawrence students and teachers at IIMUN Bangalore")]
    },
    {
      kicker: "Student Achievements",
      title: "Harshitha Goswami and Swasti Prasad Win Bronze in CISCE Zonal Yoga",
      body: "Harshitha Goswami of grade 7B and Swasti Prasad of grade 7 E secured 3rd place in the Rhythmic Pair event in the U-14 category at CISCE Zonal Level Yoga Competition, held at Primus School on 1st July 2026.",
      photos: [shot("08.png", "Harshitha Goswami and Swasti Prasad with their yoga medals")]
    },
    {
      kicker: "Student Achievements",
      title: "U-14 Girls Win CISCE Zonal Kabaddi",
      body: "CISCE Zonal Level Kabaddi Competition 2026 held at Swami Vivekanand School, Chandapura on July 1st and 2nd July, U-14 girls secured 1st place and 6 students from Lawrence school selected for the regional level.\n\nAmritha E of grade 7 F is awarded Best defender Award.",
      photos: [shot("09.png", "U-14 girls kabaddi team with their zonal medals")]
    },
    {
      kicker: "Student Achievements",
      title: "Mohitha L Wins Bronze in CISCE Zone-E Swimming",
      body: "Mohitha L of 9B won the third prize in the CISCE – Karnataka & Goa Zone-E Swimming Championship 2026 in the Backstroke event U-17 hosted by Swargarani School, held at Vijaynagar Aquatic Centre on 27th July 2026.",
      photos: [shot("10.png", "Mohitha L on the podium at the CISCE Zone-E Swimming Championship")]
    },
    {
      kicker: "Student Achievements",
      title: "Harsha M and Bala Harish Win Gold in CISCE Zonal Lawn Tennis",
      body: "In the CISCE Zonal Games & Sports 2026 Lawn Tennis Tournament held at Ebenezer International School, Bangalore, from 22nd July 2026 to 23rd July 2026, Harsha M of grade 7 won the Bronze Medal in the U-14 Boys Singles category.\n\nHarsha M and Bala Harish, both of grade 7, won the Gold Medal in the U-14 Boys Doubles category and have qualified for the Regional Tournament.",
      photos: [shot("11.png", "Harsha M and Bala Harish on the lawn tennis podium")]
    },
    {
      kicker: "Student Achievements",
      title: "Students Medal at CISCE Zonal Taekwondo Tournament",
      body: "In the CISCE Zonal Taekwondo Tournament, held on 16/7/2026, for the Under-14, Under-17, and Under-19 Boys/Girls categories, the following students won medals.",
      photos: [
        shot("12a.png", "Boys taekwondo medallists at the CISCE Zonal Tournament"),
        shot("12b.png", "Girls taekwondo medallists at the CISCE Zonal Tournament"),
        shot("12c.png", "Lawrence students on the podium at the West India Taekwondo Championship")
      ]
    },
    {
      kicker: "Student Achievements",
      title: "Students Medal at CISCE Zonal Chess Tournament",
      body: "At the CISCE Zonal Chess Tournament hosted by Carmel School, Banashankari, Out of 58 schools and around 570 students who participated across all categories, Lawrence students have won the following medals.",
      photos: [
        shot("13a.png", "Lawrence chess team at the CISCE Zonal Chess Tournament"),
        shot("13b.png", "Girls chess medallists on the podium at Carmel School")
      ]
    },
    {
      kicker: "Student Achievements",
      title: "U-14 Boys Football Team Runners-Up at CISCE Zonal",
      body: "U-14 boys team secured the runner-up position in the CISCE zonal-level Football Tournament conducted at Christ Academy, Kengeri. Five students are selected for the Regional Level.",
      photos: [shot("14.png", "U-14 boys football team at Christ Academy, Kengeri")]
    },
    {
      kicker: "Student Achievements",
      title: "U-15 Girls Team 2nd Runners-Up in Interschool Football",
      body: "Lawrence, U-15 girls team secured 2nd runner up in the interschool football tournament held at Vibgyor School, Haralur, on 29th July 2026.",
      photos: [shot("15.png", "U-15 girls football team with their trophy at Vibgyor School")]
    },
    {
      kicker: "Student Achievements",
      title: "Students Win Prizes at SEVAK Drama Competition",
      body: "Lawrence students won Second Prize in Group I at the SEVAK Drama Competition and a Consolation Prize in the competition held on 26th July 2026 at Seshadripuram College, Bengaluru.",
      photos: [shot("16.png", "Lawrence students at the SEVAK World Family Day drama competition")]
    },
    {
      kicker: "Student Achievements",
      title: "Outstanding Results at CISCE Regional Kabaddi",
      body: "We are delighted to share the outstanding achievements of our students at the CISCE Regional Level Kabaddi Competition, held at ACTS Secondary School on 20th & 21st August 2026.\n\nTeam Results\nU-14 Boys – 1st Place\nU-17 Girls – 1st Place\nU-19 Boys – 1st Place\nU-14 Girls – 2nd Place\n\nOut of 15 students who participated from Lawrence High School, 8 students have been selected for the NATIONAL LEVEL Competition:\nVidith Ashok Kumar – Grade 10 A\nSurya S. – Grade 10 A\nDipthanshu Swain – Grade 10 B\nMishitha – Grade 10 A\nRachana – Grade 9 B\nKalpana Bhattrai – Grade 8 A\nPranitha P. – Grade 7 D\nAmritha E. – Grade 7 E",
      photos: [
        shot("17.png", "Lawrence kabaddi teams at the CISCE Regional Kabaddi Tournament"),
        shot("17b.png", "Kabaddi squad with certificates at ACTS School"),
        shot("17c.png", "Kabaddi medallists with their coach"),
        shot("17d.png", "Boys kabaddi medallists after the regional tournament"),
        shot("17e.png", "Lawrence kabaddi team with medals at ACTS School")
      ]
    },
    {
      kicker: "Student Achievements",
      title: "Mishitha and Lohit Medal at Regional Boxing Championship",
      body: "Regional Boxing Competition held at Mysore. (3/9/2026)\n\nMishitha – Grade 10A\nSecured 1st Place in the Under-17 category\nSelected for the National Boxing Competition, to be held in Meerut on 28th September 2026\n\nLohit – Grade 9A\nSecured 2nd Place in the Under-17 category",
      photos: [
        shot("18.png", "Mishitha receiving her regional boxing certificate"),
        shot("18a.png", "Mishitha and Lohit with medals at the CISCE Regional Boxing Championship")
      ]
    }
  ]
};

export async function getNewsContent(): Promise<NewsContent> {
  let entry;
  try {
    entry = await reader.singletons.news.read();
  } catch (error) {
    console.error("Failed to read Keystatic news content", error);
    return defaultNews;
  }
  if (!entry) return defaultNews;

  return {
    metaTitle: textSrc(entry.metaTitle, defaultNews.metaTitle),
    metaDescription: textSrc(entry.metaDescription, defaultNews.metaDescription),
    hero: {
      kicker: textSrc(entry.hero?.kicker, defaultNews.hero.kicker),
      title: textSrc(entry.hero?.title, defaultNews.hero.title),
      lede: textSrc(entry.hero?.lede, defaultNews.hero.lede),
      image: imageSrc(entry.hero?.image, defaultNews.hero.image, "/images/news/"),
      imageAlt: textSrc(entry.hero?.imageAlt, defaultNews.hero.imageAlt),
      fit: newsFit(entry.hero?.fit)
    },
    tabs: {
      resultLabel: textSrc(entry.tabs?.resultLabel, defaultNews.tabs.resultLabel),
      achievementLabel: textSrc(entry.tabs?.achievementLabel, defaultNews.tabs.achievementLabel),
      eventLabel: textSrc(entry.tabs?.eventLabel, defaultNews.tabs.eventLabel),
      resultEmpty: textSrc(entry.tabs?.resultEmpty, defaultNews.tabs.resultEmpty),
      achievementEmpty: textSrc(entry.tabs?.achievementEmpty, defaultNews.tabs.achievementEmpty),
      eventEmpty: textSrc(entry.tabs?.eventEmpty, defaultNews.tabs.eventEmpty)
    },
    results: entry.results?.length
      ? entry.results.map((item, index) => {
          const fallback = defaultNews.results[index] ?? defaultNews.results[0];
          const date = item.date || "";
          return {
            dateLabel: formatNewsDate(date) || fallback.dateLabel,
            title: textSrc(item.title, fallback.title),
            summary: textSrc(item.summary, fallback.summary),
            href: (item.href ?? "").trim() || defaultNews.results[index]?.href || ""
          };
        })
      : defaultNews.results,
    events: entry.events?.length
      ? entry.events.map((item, index) => {
          const fallback = defaultNews.events[index] ?? defaultNews.events[0];
          return {
            day: textSrc(item.day, fallback.day),
            month: textSrc(item.month, fallback.month),
            title: textSrc(item.title, fallback.title),
            text: textSrc(item.text, fallback.text)
          };
        })
      : defaultNews.events,
    achievements: entry.achievements?.length
      ? entry.achievements.map((item, index) => {
          const fallback = defaultNews.achievements[index] ?? defaultNews.achievements[0];
          return {
            kicker: textSrc(item.kicker, fallback.kicker),
            title: textSrc(item.title, fallback.title),
            body: textSrc(item.body, fallback.body),
            photos: mapPhotos(item.photos, fallback.photos, ACHIEVE).slice(0, 5)
          };
        })
      : defaultNews.achievements
  };
}

export async function getNewsPosts(): Promise<NewsPost[]> {
  try {
    const posts = await reader.collections.posts.all();
    return [...posts]
      .sort((a, b) => (b.entry.date ?? "").localeCompare(a.entry.date ?? ""))
      .map((post) => ({
        slug: post.slug,
        title: post.entry.title,
        date: post.entry.date ?? "",
        dateLabel: formatNewsDate(post.entry.date),
        summary: post.entry.summary || "",
        category: newsCategory(post.entry.category, post.slug)
      }));
  } catch (error) {
    console.error("Failed to read Keystatic news posts", error);
    return [];
  }
}
