"use client";

import { useState } from "react";
import { tinaMark } from "@/components/tina/EditablePage";
import type { AlumniContent } from "@/lib/alumni";

function youtubeId(value: string) {
  const match = value.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return match?.[1] || value.trim();
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="var(--legacy-blue)" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23 12.2s-.2-3.2-.9-4.6c-.5-1.2-1.6-2.1-2.8-2.2C16.7 5 12 5 12 5s-4.7 0-7.3.4c-1.2.1-2.3 1-2.8 2.2C1.2 9 1 12.2 1 12.2s.2 3.2.9 4.6c.5 1.2 1.6 2.1 2.8 2.2 2.6.4 7.3.4 7.3.4s4.7 0 7.3-.4c1.2-.1 2.3-1 2.8-2.2.7-1.4.9-4.6.9-4.6Z"
      />
      <path d="M10 15.2V9.2l5.2 3-5.2 3Z" fill="#fff" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" />
    </svg>
  );
}

export default function AlumniTestimonials({
  testimonials
}: {
  testimonials: AlumniContent["testimonials"];
}) {
  const items = (testimonials.items ?? []).filter((item) => item && (item.videoId || item.title));
  const [playing, setPlaying] = useState<string | null>(null);

  if (!items.length) return null;

  return (
    <section className="alumni-testimonials" aria-labelledby="alumni-testimonials-title">
      <div className="wrap">
        <h2 className="kg-title" id="alumni-testimonials-title" data-tina-field={tinaMark(testimonials, "title")}>
          {testimonials.title}
        </h2>
        {testimonials.intro ? (
          <p className="alumni-testimonials-intro" data-tina-field={tinaMark(testimonials, "intro")}>
            {testimonials.intro}
          </p>
        ) : null}

        <ul className="alumni-testimonial-grid">
          {items.map((item, index) => {
            const id = youtubeId(item.videoId);
            const key = `${id}-${index}`;
            const isPlaying = playing === key;
            return (
              <li key={key}>
                <article className="alumni-testimonial-card">
                  <div className="alumni-testimonial-video">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        className="alumni-testimonial-play"
                        type="button"
                        onClick={() => setPlaying(key)}
                        aria-label={`Play ${item.title}`}
                      >
                        <img
                          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                          alt=""
                        />
                        <span className="alumni-testimonial-play-icon">
                          <PlayIcon />
                        </span>
                      </button>
                    )}
                  </div>
                  <h3 data-tina-field={tinaMark(item, "title")}>{item.title}</h3>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="alumni-testimonial-links">
          {testimonials.youtubeHref ? (
            <a
              className="alumni-testimonial-link alumni-testimonial-link--youtube"
              href={testimonials.youtubeHref}
              target="_blank"
              rel="noreferrer"
              data-tina-field={tinaMark(testimonials, "youtubeLabel")}
            >
              <YouTubeIcon />
              {testimonials.youtubeLabel || "Watch on YouTube"}
            </a>
          ) : null}
          {testimonials.instagramHref ? (
            <a
              className="alumni-testimonial-link alumni-testimonial-link--instagram"
              href={testimonials.instagramHref}
              target="_blank"
              rel="noreferrer"
              data-tina-field={tinaMark(testimonials, "instagramLabel")}
            >
              <InstagramIcon />
              {testimonials.instagramLabel || "Follow on Instagram"}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
