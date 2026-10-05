import { readCollection } from "@/lib/readContent";
import type { NewsEvent } from "@/lib/news";

export async function getEvents(): Promise<NewsEvent[]> {
  return readCollection<NewsEvent>("content/events");
}
