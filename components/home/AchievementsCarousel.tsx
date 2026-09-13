"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export type AchievementSlide = {
  title: string;
  text: string;
  date: string;
  image: string;
  alt: string;
  href: string;
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
            key={item.href}
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
              <Image src={item.image} alt={item.alt} fill sizes="336px" />
            </div>
            <div>
              {item.date ? <span className="home-achievement-date">{item.date}</span> : null}
              <h3>{item.title}</h3>
              {item.text ? <p>{item.text}</p> : null}
            </div>
          </Link>
        ))}
      </div>

      {count > 1 ? (
        <div className="achievement-carousel-nav">
          {items.map((slide, slideIndex) => (
            <button
              key={slide.href}
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
