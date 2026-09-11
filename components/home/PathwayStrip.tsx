"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import type { HomePathway } from "@/lib/home";
import { useScrollReveal } from "@/lib/useScrollReveal";

const icons: Record<string, ReactNode> = {
  Learn: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 14v22c7-3 12-3 16 0V14c-4-3-9-3-16 0Z" />
      <path d="M24 14v22c4-3 9-3 16 0V14c-7-3-12-3-16 0Z" />
      <path d="M24 14v22" />
    </svg>
  ),
  Innovate: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="12" y="12" width="24" height="24" rx="4" />
      <path d="M18 24h12M24 18v12" />
      <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
    </svg>
  ),
  Explore: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 14h16v8a8 8 0 0 1-16 0Z" />
      <path d="M16 16H10v4a6 6 0 0 0 6 6M32 16h6v4a6 6 0 0 1-6 6" />
      <path d="M24 30v6M18 40h12" />
    </svg>
  ),
  Create: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 10c8.8 0 16 6.3 16 14.5 0 4.4-2.7 6.5-6 6.5h-5.2c-1.7 0-2.8 1.4-2.8 3 0 .8.3 1.6.8 2.2.7.8.2 2.1-.9 2.1C17.6 38.3 8 32 8 24.5 8 16.3 15.2 10 24 10Z" />
      <circle cx="18" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="17" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="31" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="32" cy="27" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  Lead: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="16" r="5" />
      <path d="M14 36c1.4-6 5-9 10-9s8.6 3 10 9" />
      <path d="M32 14h8l-2 4 2 4h-8" />
    </svg>
  ),
  Perform: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 38V14M24 38V14M32 38V14" />
      <path d="M14 14h20" />
      <path d="M12 10l24 20" />
      <circle cx="34" cy="32" r="3" />
    </svg>
  ),
  Grow: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 38c2-10 6-14 8-14s6 4 8 14" />
      <path d="M24 24c0-8 4-12 10-14-1 7-4 10-10 12" />
      <path d="M24 24c0-7-4-11-10-13 1 7 4 10 10 12" />
      <path d="M24 24v14" />
    </svg>
  )
};

const fallbackIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="24" r="10" />
  </svg>
);

export default function PathwayStrip({ items }: { items: HomePathway[] }) {
  const stripRef = useRef<HTMLDivElement>(null);
  useScrollReveal(stripRef, { threshold: 0.2 });

  return (
    <section className="band band--white pathway-band" aria-label="Student pathway">
      <div className="wrap">
        <div className="pathway-strip" ref={stripRef}>
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="pathway-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="pathway-card-media" aria-hidden="true">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 138px, 14vw"
                  style={{ objectPosition: item.position || "center" }}
                />
              </div>
              <span className="pathway-icon">{icons[item.title] ?? fallbackIcon}</span>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
              {item.extra ? <span className="pathway-extra">{item.extra}</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
