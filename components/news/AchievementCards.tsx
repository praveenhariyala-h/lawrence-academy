"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import type { NewsAchievement } from "@/lib/news";

export default function AchievementCards({
  items,
  empty = "Achievements will appear here as they are published.",
  imageFit = "cover"
}: {
  items: NewsAchievement[];
  empty?: string;
  imageFit?: "cover" | "contain";
}) {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const open = active !== null ? items[active] : null;
  const photos = open?.photos.slice(0, 5) ?? [];

  const close = useCallback(() => {
    setActive(null);
    setSlide(0);
  }, []);

  const go = useCallback(
    (direction: number) => {
      setSlide((current) => {
        const count = photos.length;
        if (count < 2) return 0;
        return (current + direction + count) % count;
      });
    },
    [photos.length]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, go]);

  if (!items.length) {
    return <p className="lede news-empty">{empty}</p>;
  }

  return (
    <>
      <div className="news-achieve-grid">
        {items.map((item, index) => {
          const photo = item.photos[0];
          const preview = item.body.split(/\n\s*\n/)[0]?.trim() ?? "";
          return (
            <button
              key={`${item.title}-${index}`}
              className="news-achieve-card news-achieve-card--photo"
              type="button"
              onClick={() => {
                setSlide(0);
                setActive(index);
              }}
            >
              {photo ? (
                <span className={imageFit === "contain" ? "news-achieve-photo news-achieve-photo--contain" : "news-achieve-photo"}>
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </span>
              ) : null}
              <span className="news-achieve-copy">
                <span className="news-achieve-kicker">{item.kicker}</span>
                <strong>{item.title}</strong>
                {preview ? <span className="news-achieve-text">{preview}</span> : null}
              </span>
              <span className="news-achieve-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          );
        })}
      </div>

      {open && mounted
        ? createPortal(
        <div className="news-modal" role="presentation" onClick={close}>
          <div
            className="news-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="news-modal-close" type="button" aria-label="Close" onClick={close}>
              ×
            </button>
            {photos.length ? (
              <div className="news-modal-carousel">
                <div className="news-modal-viewport">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.src}
                      className={index === slide ? "news-modal-slide is-on" : "news-modal-slide"}
                      aria-hidden={index !== slide}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 800px) 92vw, 720px"
                      />
                    </div>
                  ))}
                </div>
                {photos.length > 1 ? (
                  <div className="news-modal-nav">
                    <button type="button" aria-label="Previous photo" onClick={() => go(-1)}>
                      ‹
                    </button>
                    <div className="news-modal-dots">
                      {photos.map((photo, index) => (
                        <button
                          key={photo.src}
                          className={index === slide ? "is-on" : undefined}
                          type="button"
                          aria-label={`Show photo ${index + 1}`}
                          onClick={() => setSlide(index)}
                        />
                      ))}
                    </div>
                    <button type="button" aria-label="Next photo" onClick={() => go(1)}>
                      ›
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="news-modal-copy">
              <span className="news-achieve-kicker">{open.kicker}</span>
              <h2 id={titleId}>{open.title}</h2>
              {open.body.split(/\n\s*\n/).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )
      : null}
    </>
  );
}
