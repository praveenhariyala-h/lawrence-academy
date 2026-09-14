"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function AboutReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { childSelector: ".about-reveal", threshold: 0.12 });

  return (
    <div className="about-page" ref={ref}>
      {children}
    </div>
  );
}
