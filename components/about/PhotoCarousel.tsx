"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import type { SpacePhoto } from "@/lib/campus";

const INTERVAL = 4000;

function visibleCount(desktop: number) {
  if (typeof window === "undefined") return desktop;
  if (window.innerWidth < 640) return desktop >= 4 ? 2 : 1;
  if (window.innerWidth < 900) return desktop >= 4 ? 3 : 2;
  return desktop;
}

export default function PhotoCarousel({
  photos,
  perView = 4
}: {
  photos: SpacePhoto[];
  perView?: number;
}) {
  const count = photos.length;
  const looped = count > 0 ? [...photos, ...photos] : [];
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(perView);
  const [paused, setPaused] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const update = () => setPerPage(visibleCount(perView));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perView]);

  const goNext = useCallback(() => {
    setIndex((current) => current + 1);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((current) => {
      if (current > 0) return current - 1;
      setInstant(true);
      return count;
    });
  }, [count]);

  useLayoutEffect(() => {
    if (!instant) return;
    if (index === count) {
      const frame = window.requestAnimationFrame(() => {
        setInstant(false);
        setIndex(count - 1);
      });
      return () => window.cancelAnimationFrame(frame);
    }
    const frame = window.requestAnimationFrame(() => setInstant(false));
    return () => window.cancelAnimationFrame(frame);
  }, [instant, index, count]);

  useEffect(() => {
    if (paused || instant || count < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(goNext, INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, instant, count, goNext]);

  if (count === 0) return null;

  const slidePct = 100 / perPage;
  const activeDot = index % count;

  return (
    <div
      className="partner-carousel kg-moments-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="kg-moments-carousel-stage">
        {count > perPage ? (
          <button
            className="partner-carousel-arrow partner-carousel-arrow--prev"
            type="button"
            aria-label="Previous photos"
            onClick={goPrev}
          >
            ‹
          </button>
        ) : null}

        <div className="partner-carousel-viewport">
          <div
            className={instant ? "partner-carousel-track is-instant" : "partner-carousel-track"}
            style={{ transform: `translate3d(-${index * slidePct}%, 0, 0)` }}
            onTransitionEnd={() => {
              if (index >= count) {
                setInstant(true);
                setIndex(0);
              }
            }}
          >
            {looped.map((photo, slideIndex) => (
              <article
                key={`${photo.src}-${slideIndex}`}
                className="partner-slide"
                style={{ flex: `0 0 ${slidePct}%` }}
              >
                <div className="partner-card">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 900px) 30vw, 22vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {count > perPage ? (
          <button
            className="partner-carousel-arrow partner-carousel-arrow--next"
            type="button"
            aria-label="Next photos"
            onClick={goNext}
          >
            ›
          </button>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="partner-carousel-dots">
          {photos.map((photo, dotIndex) => (
            <button
              key={photo.src}
              className={dotIndex === activeDot ? "dot is-on" : "dot"}
              type="button"
              aria-label={`Show photo ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
