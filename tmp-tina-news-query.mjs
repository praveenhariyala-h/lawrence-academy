import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const news = JSON.parse(readFileSync("content/news/news.json", "utf8"));
const missing = [];
function check(src, where) {
  if (!src) return;
  const file = join("public", src.replace(/^\//, ""));
  if (!existsSync(file)) missing.push({ where, src });
}
check(news.hero?.image, "hero");
for (const [index, item] of (news.results ?? []).entries()) {
  for (const photo of item.photos ?? []) check(photo.src, `results.${index}`);
}
for (const [index, item] of (news.achievements ?? []).entries()) {
  for (const photo of item.photos ?? []) check(photo.src, `achievements.${index}`);
}
for (const [index, item] of (news.events ?? []).entries()) {
  for (const photo of item.photos ?? []) check(photo.src, `events.${index}`);
}
console.log(JSON.stringify({ missing, count: missing.length }, null, 2));
