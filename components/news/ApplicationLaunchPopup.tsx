"use client";

import { useEffect, useState } from "react";
import NewsResultModal from "@/components/news/NewsResultModal";
import type { NewsResult } from "@/lib/news";

const STORAGE_KEY = "lhs-application-launch-popup";

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

  return <NewsResultModal item={item} onClose={dismiss} dismissGuardMs={600} />;
}
