"use client";

import { useCallback, useEffect, useState, type MouseEvent, type ReactNode } from "react";

export default function Carousel({
  slides,
  className = "",
  interval = 5000,
  autoPlay = true
}: {
  slides: ReactNode[];
  className?: string;
  interval?: number;
  autoPlay?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const last = count - 1;

  useEffect(() => {
    if (!autoPlay || count < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % count);
    }, interval);
    return () => window.clearInterval(timer);
  }, [autoPlay, count, interval]);

  const goPrev = useCallback(() => {
    setIndex((value) => (value === 0 ? last : value - 1));
  }, [last]);
  const goNext = useCallback(() => {
    setIndex((value) => (value === last ? 0 : value + 1));
  }, [last]);
  const goTo = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setIndex(Number(event.currentTarget.dataset.index));
  }, []);

  if (count === 0) return null;

  return (
    <div className={`carousel ${className}`.trim()}>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={i === index ? "carousel-slide is-active" : "carousel-slide"}
            aria-hidden={i !== index}
          >
            {slide}
          </div>
        ))}
      </div>
      {count > 1 ? (
        <div className="carousel-nav">
          <button className="arrow" type="button" aria-label="Previous slide" onClick={goPrev}>
            ‹
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === index ? "dot is-on" : "dot"}
              aria-label={`Go to slide ${i + 1}`}
              data-index={i}
              onClick={goTo}
            />
          ))}
          <button className="arrow" type="button" aria-label="Next slide" onClick={goNext}>
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
