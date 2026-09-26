import fs from "node:fs";
import path from "node:path";

export function readContent<T extends object>(relativePath: string, fallback: T): T {
  try {
    const filePath = path.join(process.cwd(), relativePath);
    const parsed: unknown = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
    return parsed as T;
  } catch {
    return fallback;
  }
}
