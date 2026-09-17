"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { HomeCurriculum } from "@/lib/home";
import { useScrollReveal } from "@/lib/useScrollReveal";

function CurriculumTitle({ title }: { title: string }) {
  return <h2 className="curriculum-title">{title}</h2>;
}

export default function CurriculumMosaic({
  title,
  kicker,
  stages
}: {
  title: string;
  kicker: string;
  stages: HomeCurriculum[];
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  useScrollReveal(stripRef, { childSelector: ".curriculum-tile", threshold: 0.14, repeat: true });

  return (
    <section className="band band--white curriculum-band">
      <div className="wrap curriculum-wrap">
        <header className="curriculum-head">
          <CurriculumTitle title={title} />
          {kicker ? <p className="curriculum-kicker">{kicker}</p> : null}
        </header>
        <div className="curriculum-strip" ref={stripRef}>
          {stages.map((item, index) => (
            <Link
              key={`${item.title}-${index}`}
              href={item.href || "/academics"}
              className="curriculum-tile curriculum-stage"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Image
                src={item.photo}
                alt={item.photoAlt}
                fill
                sizes="(max-width: 900px) 100vw, 25vw"
              />
              <div className="curriculum-stage-copy">
                <h3>{item.title}</h3>
                <span>{item.grades}</span>
              </div>
              <span className="curriculum-stage-go" aria-hidden="true">
                ›
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
