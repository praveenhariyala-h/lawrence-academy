"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export type AchievementSlide = {
  title: string;
  text: string;
  date: string;
  image: string;
  alt: string;
  href: string;
  marks?: {
    image?: string;
    date?: string;
    title?: string;
    text?: string;
  };
};

const INTERVAL = 4500;

export default function AchievementsCarousel({
  items
}: {
  items: AchievementSlide[];
}) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count]
  );

  useLayoutEffect(() => {
    const photos = Array.from(document.querySelectorAll<HTMLElement>(".home-achievement-photo"));
    const campus = document.querySelector(".home-highlights .home-panel--compact");
    if (!photos.length || !campus) return undefined;

    const apply = () => {
      const wide = window.matchMedia("(min-width: 1101px)").matches;
      if (!wide) {
        photos.forEach((photo) => {
          photo.style.height = "";
        });
        return;
      }
      const bottom = campus.getBoundingClientRect().bottom;
      photos.forEach((photo) => {
        const height = Math.round(bottom - photo.getBoundingClientRect().top);
        photo.style.height = height > 0 ? `${height}px` : "";
      });
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(campus);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [count]);

  useEffect(() => {
    if (paused || count < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  if (count === 0) return null;

  return (
    <div
      className="achievement-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="achievement-carousel-viewport">
        {items.map((item, slideIndex) => (
          <Link
            key={`${item.title}-${slideIndex}`}
            className={
              slideIndex === index
                ? "home-achievement achievement-slide is-active"
                : "home-achievement achievement-slide"
            }
            href={item.href}
            aria-hidden={slideIndex !== index}
            tabIndex={slideIndex === index ? 0 : -1}
          >
            <div className="home-achievement-photo">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 92vw, 42vw"
                className="home-achievement-img"
                data-tina-field={item.marks?.image}
              />
            </div>
            <div>
              {item.date ? (
                <span className="home-achievement-date" data-tina-field={item.marks?.date}>
                  {item.date}
                </span>
              ) : null}
              <h3 data-tina-field={item.marks?.title}>{item.title}</h3>
              {item.text ? <p data-tina-field={item.marks?.text}>{item.text}</p> : null}
            </div>
          </Link>
        ))}
      </div>

      {count > 1 ? (
        <div className="achievement-carousel-nav">
          {items.map((slide, slideIndex) => (
            <button
              key={`${slide.title}-${slideIndex}`}
              className={slideIndex === index ? "dot is-on" : "dot"}
              type="button"
              aria-label={`Show ${slide.title}`}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
