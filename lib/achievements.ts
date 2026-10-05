import { readCollection } from "@/lib/readContent";
import type { NewsAchievement } from "@/lib/news";

export async function getAchievements(): Promise<NewsAchievement[]> {
  return readCollection<NewsAchievement>("content/achievements");
}
