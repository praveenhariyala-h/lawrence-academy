"use client";

import { memo, useCallback, useEffect, useState, type MouseEvent, type ReactNode } from "react";

function PairCarousel({
  pairs
}: {
  pairs: [ReactNode, ReactNode?][];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const last = pairs.length - 1;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce || pairs.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value === last ? 0 : value + 1));
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, last, pairs.length]);

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
    <div className="carousel" onMouseEnter={pause} onMouseLeave={resume}>
      <div className="carousel-track">
        {pairs.map((pair, i) => (
          <div
            key={i}
            className={i === index ? "carousel-slide is-active" : "carousel-slide"}
            aria-hidden={i !== index}
          >
            <div className="spotlight">
              {pair[0]}
              {pair[1]}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button className="arrow" type="button" aria-label="Previous" onClick={goPrev}>
          ‹
        </button>
        {pairs.map((_, i) => (
          <button
            key={i}
            className={i === index ? "dot is-on" : "dot"}
            aria-label={`Go to pair ${i + 1}`}
            data-index={i}
            onClick={goTo}
          />
        ))}
        <button className="arrow" type="button" aria-label="Next" onClick={goNext}>
          ›
        </button>
      </div>
    </div>
  );
}

export default memo(PairCarousel);
