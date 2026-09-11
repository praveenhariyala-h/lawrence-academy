"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import type { HomePartner } from "@/lib/home";
import { useScrollReveal } from "@/lib/useScrollReveal";

const icons: Record<string, ReactNode> = {
  CISCE: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 5 8 8.2v7.3c0 5.2 3.4 9.3 8 11.5 4.6-2.2 8-6.3 8-11.5V8.2Z" />
      <path d="M12.5 16.2 15 18.7l4.8-5.2" />
    </svg>
  ),
  HarperCollins: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 8h7.2c2.4 0 4.3 1.4 4.3 3.8V24H12c-2.2 0-4-1.3-4-3.4Z" />
      <path d="M24 8h-7.2c-2.4 0-4.3 1.4-4.3 3.8V24H20c2.2 0 4-1.3 4-3.4Z" />
    </svg>
  ),
  "Karadi Path": (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9 12v8M13 10v12" />
      <path d="M18 13.5c2.2 1.1 2.2 3.9 0 5" />
      <path d="M21.2 11c3.4 2 3.4 8 0 10" />
    </svg>
  ),
  "Vedic Math": (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="7" width="18" height="18" rx="3" />
      <path d="M12 16h8M16 12v8" />
    </svg>
  ),
  Theatre: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6.5 11c2-4 5.2-5.5 9.5-5.5S23.5 7 25.5 11c-2.2 1-4.6 1.5-9.5 1.5S8.7 12 6.5 11Z" />
      <path d="M8 14.5c.8 6 3.4 10 8 10s7.2-4 8-10" />
      <path d="M12.5 18.5c.4 1.4 1.5 2.3 3.5 2.3s3.1-.9 3.5-2.3" />
    </svg>
  ),
  Taekwondo: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="8" r="2.2" />
      <path d="M16 11.5 12 21M16 11.5l3.2 6.2 7.3-1.6" />
      <path d="M14.2 16.5 8 14.8" />
    </svg>
  ),
  "Public Speaking": (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M11 13.5v5a4 4 0 0 0 4 4h1" />
      <path d="M18 8.5v15a3.2 3.2 0 0 0 3.2-3.2V11.7A3.2 3.2 0 0 0 18 8.5Z" />
    </svg>
  ),
  Pottery: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M12 8h8c.6 2 .6 3.5 0 4H12c-.6-.5-.6-2 0-4Z" />
      <path d="M11 12h10s2 3.2 2 7.5c0 3.2-2.4 4.5-7 4.5s-7-1.3-7-4.5c0-4.3 2-7.5 2-7.5Z" />
    </svg>
  )
};

export default function PartnersGrid({ items }: { items: HomePartner[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef, { threshold: 0.18 });

  return (
    <div className="partners" ref={gridRef}>
      {items.map((item, index) => (
        <article
          key={`${item.name}-${index}`}
          className="partner"
          style={{ animationDelay: `${index * 75}ms` }}
        >
          <span className="partner-mark">
            {item.logo ? (
              <Image src={item.logo} alt="" width={32} height={32} />
            ) : (
              icons[item.name]
            )}
          </span>
          <strong>{item.name}</strong>
          <span className="partner-cat">{item.category}</span>
        </article>
      ))}
    </div>
  );
}
