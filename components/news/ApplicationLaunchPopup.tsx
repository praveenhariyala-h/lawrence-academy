"use client";

import { useEffect, useState } from "react";
import NewsResultModal from "@/components/news/NewsResultModal";
import type { NewsResult } from "@/lib/news";

const STORAGE_KEY = "lhs-application-launch-popup";

function admissionsFirst(item: NewsResult): NewsResult {
  const photos = Array.isArray(item.photos) ? item.photos.filter((photo) => photo?.src) : [];
  const lead = photos.filter((photo) => photo.applyHref?.trim());
  const rest = photos.filter((photo) => !photo.applyHref?.trim());
  if (!lead.length) return item;
  return { ...item, photos: [...lead, ...rest] };
}

export default function ApplicationLaunchPopup({ item }: { item: NewsResult }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.parent !== window) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // Private browsing can block storage; still show the launch popup.
    }
    setOpen(true);
  }, []);

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Closing still hides the popup when storage is unavailable.
    }
    setOpen(false);
  }

  if (!open) return null;

  return <NewsResultModal item={admissionsFirst(item)} onClose={dismiss} dismissGuardMs={600} autoSlide />;
}
