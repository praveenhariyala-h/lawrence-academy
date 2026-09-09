"use client";

import {
  memo,
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode
} from "react";

function Carousel({
  slides,
  className = "",
  interval = 6500
}: {
  slides: ReactNode[];
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const last = slides.length - 1;
  const isHero = className.includes("hero-wrap");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value === last ? 0 : value + 1));
    }, interval);
    return () => window.clearInterval(timer);
  }, [paused, last, interval, slides.length]);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);
  const goPrev = useCallback(
    () => setIndex((value) => (value === 0 ? last : value - 1)),
    [last]
  );
  const goNext = useCallback(
    () => setIndex((value) => (value === last ? 0 : value + 1)),
    [last]
  );
  const goTo = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setIndex(Number(event.currentTarget.dataset.index));
  }, []);

  return (
    <div
      className={`carousel ${className}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="carousel-track">
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
      {isHero ? (
        <div className={paused ? "carousel-progress is-paused" : "carousel-progress"} key={index} />
      ) : null}
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
    </div>
  );
}

export default memo(Carousel);
