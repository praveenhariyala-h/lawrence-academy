"use client";

import { useEffect, type RefObject } from "react";

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  {
    childSelector,
    threshold = 0.18
  }: {
    childSelector?: string;
    threshold?: number;
  } = {}
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = childSelector
      ? Array.from(root.querySelectorAll<HTMLElement>(childSelector))
      : [root];

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const show = (el: HTMLElement) => {
      el.classList.remove("is-in");
      void el.offsetWidth;
      el.classList.add("is-in");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) show(el);
          else el.classList.remove("is-in");
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [childSelector, threshold]);
}
