export function imageSrc(
  value: string | null | undefined,
  fallback: string,
  basePath: string
) {
  if (!value) return fallback;
  if (value.startsWith("/") || value.startsWith("http")) return value;
  return `${basePath}${value}`;
}

export function textSrc(value: string | null | undefined, fallback = "") {
  return value?.trim() ? value : fallback;
}

export async function readText(value: unknown, fallback: string) {
  if (typeof value === "string" && value.trim()) return value;
  if (typeof value === "function") {
    try {
      const result = await value();
      if (typeof result === "string" && result.trim()) return result;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

export function paragraphs(value: string | null | undefined, fallback: string[]) {
  const parts = value?.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean) ?? [];
  return parts.length ? parts : fallback;
}

export type CmsPhoto = {
  src: string | null;
  alt: string | null;
  caption?: string | null;
};

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export function mapPhotos<T extends Photo>(
  entries: readonly CmsPhoto[] | undefined,
  fallbacks: readonly T[],
  basePath: string
): T[] {
  if (!entries?.length) return [...fallbacks];
  return entries.map((entry, index) => {
    const fallback = fallbacks[index] ?? fallbacks[0];
    const caption = textSrc(entry.caption, fallback?.caption ?? "");
    return {
      ...fallback,
      src: imageSrc(entry.src, fallback?.src ?? "", basePath),
      alt: textSrc(entry.alt, fallback?.alt ?? ""),
      ...(fallback?.caption !== undefined || caption ? { caption: caption || fallback?.caption || "" } : {})
    } as T;
  });
}
