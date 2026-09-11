"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { HomeCurriculum } from "@/lib/home";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Shield = () => (
  <span className="curriculum-shield" aria-hidden="true">
    <Image src="/images/logo-shield-blue.png" alt="" width={28} height={40} />
  </span>
);

function StageCard({ item, className }: { item: HomeCurriculum; className?: string }) {
  return (
    <article className={`curriculum-tile curriculum-card ${className ?? ""}`.trim()}>
      <Shield />
      <h3>{item.title}</h3>
      <span>{item.grades}</span>
      <Link href={item.href || "/learning"}>Read more</Link>
    </article>
  );
}

function StagePhoto({
  item,
  className,
  sizes
}: {
  item: HomeCurriculum;
  className?: string;
  sizes: string;
}) {
  return (
    <div className={`curriculum-tile curriculum-photo ${className ?? ""}`.trim()}>
      <Image src={item.photo} alt={item.photoAlt} fill sizes={sizes} />
    </div>
  );
}

export default function CurriculumMosaic({
  title,
  stages
}: {
  title: string;
  stages: HomeCurriculum[];
}) {
  const mosaicRef = useRef<HTMLDivElement>(null);
  useScrollReveal(mosaicRef, { childSelector: ".curriculum-tile", threshold: 0.16 });

  if (stages.length === 4) {
    const [first, second, third, fourth] = stages;
    return (
      <section className="band band--white">
        <div className="wrap">
          <h2 className="why-choose-title">{title}</h2>
          <div className="curriculum-mosaic" ref={mosaicRef}>
            <StageCard item={first} className="c-y1" />
            <StagePhoto item={first} className="c-p1" sizes="(max-width: 900px) 100vw, 28vw" />
            <StageCard item={second} className="c-y2" />
            <StagePhoto item={second} className="c-p2" sizes="(max-width: 900px) 100vw, 28vw" />
            <StageCard item={third} className="c-y3" />
            <StagePhoto item={third} className="c-p3" sizes="(max-width: 900px) 100vw, 45vw" />
            <StagePhoto item={fourth} className="c-p4" sizes="(max-width: 900px) 100vw, 22vw" />
            <StageCard item={fourth} className="c-y4" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="band band--white">
      <div className="wrap">
        <h2 className="why-choose-title">{title}</h2>
        <div className="cards" ref={mosaicRef}>
          {stages.map((item) => (
            <StageCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
