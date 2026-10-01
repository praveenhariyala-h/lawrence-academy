"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { tinaMark } from "@/components/tina/EditablePage";
import type { NewsResult } from "@/lib/news";

function textOf(value: string | null | undefined) {
  return typeof value === "string" ? value : "";
}

function photosOf(photos: NewsResult["photos"] | null | undefined) {
  if (!Array.isArray(photos)) return [];
  return photos.filter((photo) => Boolean(photo?.src));
}

function splitStudent(title: string | null | undefined) {
  const match = textOf(title).match(/^(.*?)\s*[—–-]\s*(\d+(?:\.\d+)?%)\s*$/);
  if (!match?.[1] || !match[2]) return null;
  return { name: match[1].trim(), score: match[2] };
}

export default function ResultCards({
  items,
  startOpen = false,
  onDismiss
}: {
  items: NewsResult[];
  startOpen?: boolean;
  onDismiss?: () => void;
}) {
  const records = (items ?? []).filter((item) => item && typeof item === "object");
  const students = records.flatMap((item) => {
    const parts = splitStudent(item.title);
    return parts ? [{ item, ...parts }] : [];
  });
  const features = records.filter((item) => !splitStudent(item.title));
  const [active, setActive] = useState<number | null>(startOpen && features.length ? 0 : null);
  const [slide, setSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const blockCloseUntil = useRef(startOpen ? Date.now() + 600 : 0);
  const titleId = useId();
  const open = active !== null ? features[active] : null;
  const photos = photosOf(open?.photos).slice(0, 5);

  useEffect(() => {
    if (!startOpen || features.length === 0) return undefined;
    blockCloseUntil.current = Date.now() + 600;
    setActive(0);
    return undefined;
  }, [startOpen, features.length]);

  const close = useCallback(() => {
    if (Date.now() < blockCloseUntil.current) return;
    setActive(null);
    setSlide(0);
    onDismiss?.();
  }, [onDismiss]);

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

  return (
    <div className="news-result-layout">
      {students.length ? (
        <div
          className="news-result-students"
          style={{ "--result-cols": students.length } as CSSProperties}
        >
          {students.map(({ item, name, score }) => {
            const photo = photosOf(item.photos)[0];
            return (
              <article className="news-result-student" key={item.title}>
                {photo ? (
                  <span className="news-result-student-photo">
                    <Image
                      src={photo.src}
                      alt={photo.alt || ""}
                      fill
                      sizes="(max-width: 720px) 46vw, 18vw"
                      data-tina-field={tinaMark(photo, "src")}
                    />
                  </span>
                ) : null}
                <strong data-tina-field={tinaMark(item, "title")}>{name}</strong>
                <span className="news-result-student-score">{score}</span>
              </article>
            );
          })}
        </div>
      ) : null}

      {features.length ? (
        <div className="news-result-feature-row">
          {features.map((item, index) => {
            const photo = photosOf(item.photos)[0];
            const preview = textOf(item.body).split(/\n\s*\n/)[0]?.trim() ?? "";
            return (
              <button
                key={`${item.title}-${index}`}
                className="news-achieve-card news-achieve-card--photo news-result-feature-card"
                type="button"
                onClick={() => {
                  setSlide(0);
                  setActive(index);
                }}
              >
                {photo ? (
                  <span className="news-achieve-photo news-achieve-photo--contain">
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="(max-width: 720px) 92vw, 520px"
                      data-tina-field={tinaMark(photo, "src")}
                    />
                  </span>
                ) : null}
                <span className="news-achieve-copy">
                  <span className="news-achieve-kicker" data-tina-field={tinaMark(item, "kicker")}>
                    {item.kicker}
                  </span>
                  <strong data-tina-field={tinaMark(item, "title")}>{item.title}</strong>
                  {preview ? (
                    <span className="news-achieve-text" data-tina-field={tinaMark(item, "body")}>
                      {preview}
                    </span>
                  ) : null}
                </span>
                <span className="news-achieve-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      {open && mounted
        ? createPortal(
            <div className="news-modal" role="presentation" onClick={close}>
              <div
                className="news-modal-dialog news-modal-dialog--large"
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
                    <div className="news-modal-viewport news-modal-viewport--large">
                      {photos.map((photo, index) => (
                        <div
                          key={photo.src}
                          className={index === slide ? "news-modal-slide is-on" : "news-modal-slide"}
                          aria-hidden={index !== slide}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt || ""}
                            fill
                            sizes="(max-width: 860px) 92vw, 860px"
                            data-tina-field={tinaMark(photo, "src")}
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
                  <span className="news-achieve-kicker" data-tina-field={tinaMark(open, "kicker")}>
                    {open.kicker}
                  </span>
                  <h2 id={titleId} data-tina-field={tinaMark(open, "title")}>
                    {open.title}
                  </h2>
                  <div data-tina-field={tinaMark(open, "body")}>
                    {textOf(open.body).split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
