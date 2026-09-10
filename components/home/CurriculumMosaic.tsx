"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Shield = () => (
  <span className="curriculum-shield" aria-hidden="true">
    <Image src="/images/logo-shield-blue.png" alt="" width={28} height={40} />
  </span>
);

export default function CurriculumMosaic() {
  const mosaicRef = useRef<HTMLDivElement>(null);
  useScrollReveal(mosaicRef, { childSelector: ".curriculum-tile", threshold: 0.16 });

  return (
    <section className="band band--white">
      <div className="wrap">
        <h2 className="why-choose-title">Our Curriculum</h2>
        <div className="curriculum-mosaic" ref={mosaicRef}>
          <article className="curriculum-tile curriculum-card c-y1">
            <Shield />
            <h3>Little Learners</h3>
            <span>Nursery – UKG</span>
            <Link href="/learning">Read more</Link>
          </article>

          <div className="curriculum-tile curriculum-photo c-p1">
            <Image
              src="/images/curriculum-little-learners.png"
              alt="Little learners discovering with a teacher at Lawrence High School"
              fill
              sizes="(max-width: 900px) 100vw, 28vw"
            />
          </div>

          <article className="curriculum-tile curriculum-card c-y2">
            <Shield />
            <h3>Young Explorers</h3>
            <span>Grades I – IV</span>
            <Link href="/learning">Read more</Link>
          </article>

          <div className="curriculum-tile curriculum-photo c-p2">
            <Image
              src="/images/curriculum-young-explorers.png"
              alt="Young explorers in martial arts at Lawrence High School"
              fill
              sizes="(max-width: 900px) 100vw, 28vw"
            />
          </div>

          <article className="curriculum-tile curriculum-card c-y3">
            <Shield />
            <h3>Creators</h3>
            <span>Grades V – VII</span>
            <Link href="/learning">Read more</Link>
          </article>

          <div className="curriculum-tile curriculum-photo c-p3">
            <Image
              src="/images/curriculum-creators.png"
              alt="Creators performing music at Lawrence High School"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>

          <div className="curriculum-tile curriculum-photo c-p4">
            <Image
              src="/images/curriculum-future-leaders.png"
              alt="Future leaders working on robotics at Lawrence High School"
              fill
              sizes="(max-width: 900px) 100vw, 22vw"
            />
          </div>

          <article className="curriculum-tile curriculum-card c-y4">
            <Shield />
            <h3>Future Leaders</h3>
            <span>Grades VIII – X</span>
            <Link href="/learning">Read more</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
