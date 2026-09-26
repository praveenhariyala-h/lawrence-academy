import { readContent } from "@/lib/readContent";
import { school as defaultSchool, type School } from "@/lib/site";

export function getSchool(): School {
  return readContent("content/settings/site.json", defaultSchool);
}
