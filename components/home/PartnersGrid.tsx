"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import type { HomePartner } from "@/lib/home";

const INTERVAL = 3500;

function visibleCount() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 640) return 2;
  if (window.innerWidth < 900) return 3;
  return 4;
}

export default function PartnersGrid({ items }: { items: HomePartner[] }) {
  const logos = items.filter((item): item is HomePartner & { logo: string } => Boolean(item.logo));
  const count = logos.length;
  const looped = count > 0 ? [...logos, ...logos] : [];
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const [paused, setPaused] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const update = () => setPerPage(visibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
      className="partner-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {count > perPage ? (
        <button
          className="partner-carousel-arrow partner-carousel-arrow--prev"
          type="button"
          aria-label="Previous partners"
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
          {looped.map((item, slideIndex) => (
            <article
              key={`${item.name}-${slideIndex}`}
              className="partner-slide"
              style={{ flex: `0 0 ${slidePct}%` }}
            >
              <div className="partner-card">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={240}
                  height={140}
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
          aria-label="Next partners"
          onClick={goNext}
        >
          ›
        </button>
      ) : null}

      {count > 1 ? (
        <div className="partner-carousel-dots">
          {logos.map((item, dotIndex) => (
            <button
              key={item.name}
              className={dotIndex === activeDot ? "dot is-on" : "dot"}
              type="button"
              aria-label={`Show ${item.name}`}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
