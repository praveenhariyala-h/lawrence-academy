"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { SpacePhoto } from "@/lib/campus";

function chunkPhotos(photos: SpacePhoto[], size: number) {
  const pages: SpacePhoto[][] = [];
  for (let i = 0; i < photos.length; i += size) {
    pages.push(photos.slice(i, i + size));
  }
  return pages;
}

export default function FacilitySlider({
  photos,
  className = "",
  sizes = "(max-width: 900px) 100vw, 52vw",
  perView = 1
}: {
  photos: SpacePhoto[];
  className?: string;
  sizes?: string;
  perView?: number;
}) {
  const pages = useMemo(
    () => chunkPhotos(photos, Math.max(1, perView)),
    [photos, perView]
  );
  const pageCount = pages.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((current) => (current >= pageCount ? 0 : current));
  }, [pageCount]);

  useEffect(() => {
    if (pageCount < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % pageCount);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current === 0 ? pageCount - 1 : current - 1));
  }, [pageCount]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % pageCount);
  }, [pageCount]);

  if (pageCount === 0) return null;

  return (
    <div className={`facility-slider ${className}`.trim()}>
      <div className="facility-slider-viewport">
        <div
          className="facility-slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={page.map((photo, photoIndex) => `${photo.src}-${photo.caption ?? photoIndex}`).join("-")}
              className={pageIndex === index ? "facility-slider-slide is-active" : "facility-slider-slide"}
              aria-hidden={pageIndex !== index}
            >
              <div className={`facility-slider-page is-${perView}`}>
                {page.map((photo, photoIndex) => (
                  <figure key={`${photo.src}-${photo.caption ?? photoIndex}`}>
                    <Image src={photo.src} alt={photo.alt} fill sizes={sizes} />
                    {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {pageCount > 1 ? (
        <div className="facility-slider-nav">
          <button className="arrow" type="button" aria-label="Previous photo" onClick={goPrev}>
            ‹
          </button>
          {pages.map((page, pageIndex) => (
            <button
              key={page.map((photo, photoIndex) => `${photo.src}-${photo.caption ?? photoIndex}`).join("-")}
              className={pageIndex === index ? "dot is-on" : "dot"}
              aria-label={`Go to slide ${pageIndex + 1}`}
              onClick={() => setIndex(pageIndex)}
            />
          ))}
          <button className="arrow" type="button" aria-label="Next photo" onClick={goNext}>
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
