"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { tinaMark } from "@/components/tina/EditablePage";
import type { AlumniContent } from "@/lib/alumni";

function Leaves() {
  return (
    <svg className="alumni-stories-leaves" viewBox="0 0 160 90" aria-hidden="true">
      <path
        d="M118 18c18 8 32 24 34 42-16-2-30-12-38-26 8-2 14-8 16-16-6 2-10 1-12 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M128 28c8 10 10 22 8 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M96 8c14 14 18 32 14 48-14-6-24-18-28-32 6-2 10-8 14-16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="17" cy="16" r="5" />
      <circle cx="31" cy="18" r="4" />
      <path d="M6.5 35c1.4-6.2 5.4-9.2 10.5-9.2s9.1 3 10.5 9.2" strokeLinecap="round" />
      <path d="M27 35c.7-4.2 3.2-6.6 6.6-6.6 3.2 0 5.4 2.2 6.4 6.6" strokeLinecap="round" />
    </svg>
  );
}

function Emphasised({ text }: { text: string }) {
  return text.split("\n").map((line, lineIndex) => (
    <span key={`${line}-${lineIndex}`}>
      {lineIndex > 0 ? <br /> : null}
      {line.split(/(\*[^*]+\*)/g).filter(Boolean).map((piece, index) =>
        piece.startsWith("*") && piece.endsWith("*") ? (
          <span className="contact-accent" key={index}>
            {piece.slice(1, -1)}
          </span>
        ) : (
          piece
        )
      )}
    </span>
  ));
}

export default function AlumniStories({
  stories,
  form
}: {
  stories: AlumniContent["stories"];
  form: AlumniContent["form"];
}) {
  const items = (stories.items ?? []).filter((story) => story && (story.name || story.quote || story.photo));
  const count = items.length;
  const [index, setIndex] = useState(0);
  const safeIndex = count > 0 ? index % count : 0;
  const active = items[safeIndex];
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.querySelector<HTMLElement>("[aria-current='true']");
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    strip.scrollTo({ left: Math.max(0, left), behavior: reduce ? "auto" : "smooth" });
  }, [safeIndex]);

  function go(next: number) {
    if (count < 1) return;
    setIndex(((next % count) + count) % count);
  }

  return (
    <section className="alumni-stories" aria-labelledby="alumni-stories-title">
      <Leaves />
      <div className="wrap">
        <h2 className="visually-hidden" id="alumni-stories-title" data-tina-field={tinaMark(stories, "title")}>
          {stories.title}
        </h2>
        <p className="alumni-stories-intro" data-tina-field={tinaMark(stories, "intro")}>
          {stories.intro}
        </p>

        {active ? (
          <div className="alumni-slider">
            <article className="alumni-slider-stage" key={`${active.name}-${safeIndex}`} aria-live="polite">
              <div className="alumni-slider-photo">
                {active.photo ? (
                  <Image
                    src={active.photo}
                    alt={active.photoAlt || active.name}
                    fill
                    sizes="(max-width: 800px) 100vw, 340px"
                    quality={95}
                    data-tina-field={tinaMark(active, "photo")}
                  />
                ) : null}
              </div>
              <div className="alumni-slider-bio">
                <h3 data-tina-field={tinaMark(active, "name")}>{active.name}</h3>
                {active.batch ? (
                  <p className="alumni-story-batch" data-tina-field={tinaMark(active, "batch")}>
                    {active.batch}
                  </p>
                ) : null}
                <p>
                  {active.role ? <span data-tina-field={tinaMark(active, "role")}>{active.role}</span> : null}
                  {active.role && active.place ? " · " : null}
                  {active.place ? <span data-tina-field={tinaMark(active, "place")}>{active.place}</span> : null}
                </p>
                {active.quote ? (
                  <blockquote data-tina-field={tinaMark(active, "quote")}>
                    <span aria-hidden="true">“</span>
                    <p>&ldquo;{active.quote}&rdquo;</p>
                  </blockquote>
                ) : null}
              </div>
            </article>

            <div className="alumni-slider-foot">
              <div className="alumni-slider-thumbs" ref={thumbsRef} role="tablist" aria-label="Alumni">
                {items.map((story, thumbIndex) => (
                  <button
                    key={`${story.name}-thumb-${thumbIndex}`}
                    className={thumbIndex === safeIndex ? "alumni-slider-thumb is-on" : "alumni-slider-thumb"}
                    type="button"
                    role="tab"
                    aria-selected={thumbIndex === safeIndex}
                    aria-current={thumbIndex === safeIndex ? "true" : undefined}
                    aria-label={`Show ${story.name}`}
                    onClick={() => go(thumbIndex)}
                  >
                    {story.photo ? (
                      <Image src={story.photo} alt="" width={160} height={120} quality={75} />
                    ) : (
                      <span>{story.name.slice(0, 1)}</span>
                    )}
                  </button>
                ))}
              </div>
              {count > 1 ? (
                <div className="alumni-slider-arrows">
                  <button type="button" aria-label="Previous alumnus" onClick={() => go(safeIndex - 1)}>
                    ‹
                  </button>
                  <button type="button" aria-label="Next alumnus" onClick={() => go(safeIndex + 1)}>
                    ›
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="alumni-stories-cta contact-recruit-bar">
          <div className="contact-recruit-brand">
            <span className="contact-recruit-icon">
              <PeopleIcon />
            </span>
            <h3 data-tina-field={tinaMark(form, "ctaTitle")}>
              <Emphasised text={form.ctaTitle || "Stay part of our\n*Lawrence Family*"} />
            </h3>
          </div>
          <span className="contact-recruit-rule" aria-hidden="true" />
          <p data-tina-field={tinaMark(form, "ctaBody")}>
            {form.ctaBody ||
              "Reconnect with Lawrence, share where life has taken you, and tell us how you would like to stay involved."}
          </p>
          <Link className="btn btn--gold contact-recruit-btn" href="/alumni/engagement">
            <span data-tina-field={tinaMark(form, "ctaLabel")}>{form.ctaLabel || "Engagement Form"}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
