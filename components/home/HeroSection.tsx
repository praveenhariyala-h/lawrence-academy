"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { HomeHeroSlide } from "@/lib/home";

const SLIDE_MS = 5000;

export default function HeroSection({
  slides,
  learnMoreHref,
  learnMoreLabel
}: {
  slides: HomeHeroSlide[];
  learnMoreHref: string;
  learnMoreLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [manual, setManual] = useState(false);
  const count = slides.length;
  const step = count > 0 ? 100 / count : 0;

  useEffect(() => {
    setManual(true);
  }, []);

  useEffect(() => {
    if (!manual || count < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [manual, count]);

  const goTo = useCallback(
    (next: number) => {
      setManual(true);
      setIndex((next + count) % count);
    },
    [count]
  );

  if (count === 0) return null;

  return (
    <div className="hero-banner">
      <div className={manual ? "hero-carousel is-manual" : "hero-carousel"}>
        <div className="hero-carousel-viewport">
          <div
            className="hero-carousel-track"
            style={{
              width: `${count * 100}%`,
              transform: `translate3d(-${index * step}%, 0, 0)`,
              animationDuration: `${count * (SLIDE_MS / 1000)}s`
            }}
          >
            {slides.map((slide, slideIndex) => (
              <section
                key={`${slide.image}-${slideIndex}`}
                className={slideIndex === index ? "hero-carousel-slide is-active" : "hero-carousel-slide"}
                style={{ width: `${step}%`, flexBasis: `${step}%` }}
                aria-hidden={slideIndex !== index}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={slideIndex === 0}
                  className={slideIndex === 2 ? "is-contain" : undefined}
                  style={slideIndex === 2 ? { objectFit: "contain" } : undefined}
                />
              </section>
            ))}
          </div>
        </div>
        {count > 1 ? (
          <div className="hero-carousel-nav">
            <button
              className="hero-carousel-arrow"
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
            >
              ‹
            </button>
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                className={slideIndex === index ? "hero-carousel-dot is-on" : "hero-carousel-dot"}
                type="button"
                aria-label={`Go to slide ${slideIndex + 1}`}
                onClick={() => goTo(slideIndex)}
              />
            ))}
            <button
              className="hero-carousel-arrow"
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
            >
              ›
            </button>
          </div>
        ) : null}
      </div>
      <Link className="hero-learn-more" href={learnMoreHref}>
        {learnMoreLabel}
      </Link>
    </div>
  );
}
