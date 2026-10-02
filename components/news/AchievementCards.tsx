"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { tinaEditing, tinaMark } from "@/components/tina/EditablePage";
import type { NewsAchievement, NewsAchievementPhoto } from "@/lib/news";

export type NewsCardMarks = {
  day?: string;
  month?: string;
  kicker?: string;
  title?: string;
  body?: string;
  preview?: string;
};

export type NewsCardItem = NewsAchievement & {
  preview?: string;
  dateDay?: string;
  dateMonth?: string;
  marks?: NewsCardMarks;
};

function textOf(value: string | null | undefined) {
  return typeof value === "string" ? value : "";
}

function photosOf(photos: NewsAchievementPhoto[] | null | undefined) {
  if (!Array.isArray(photos)) return [];
  return photos.filter((photo) => Boolean(photo?.src));
}

function firstParagraph(value: string) {
  return value.split(/\n\s*\n/)[0]?.trim() ?? "";
}

function CardKicker({ item }: { item: NewsCardItem }) {
  if (item.dateDay !== undefined || item.dateMonth !== undefined) {
    const day = textOf(item.dateDay);
    const month = textOf(item.dateMonth);
    return (
      <span className="news-achieve-kicker">
        <span data-tina-field={item.marks?.day}>{day || (month ? "" : "Event")}</span>
        {day && month ? " " : null}
        {month ? <span data-tina-field={item.marks?.month}>{month}</span> : null}
      </span>
    );
  }

  return (
    <span className="news-achieve-kicker" data-tina-field={item.marks?.kicker ?? tinaMark(item, "kicker")}>
      {textOf(item.kicker)}
    </span>
  );
}

export default function AchievementCards({
  items,
  empty = "Achievements will appear here as they are published.",
  imageFit = "cover"
}: {
  items: NewsCardItem[];
  empty?: string;
  imageFit?: "cover" | "contain";
}) {
  const cards = (items ?? []).filter((item) => item && typeof item === "object");
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const open = active !== null ? cards[active] : null;
  const photos = photosOf(open?.photos).slice(0, 5);
  const openBody = textOf(open?.body) || textOf(open?.preview);
  const openBodyField = textOf(open?.body)
    ? (open?.marks?.body ?? tinaMark(open, "body"))
    : open?.marks?.preview;

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

  if (!cards.length) {
    return <p className="lede news-empty">{empty}</p>;
  }

  return (
    <>
      <div className="news-achieve-grid">
        {cards.map((item, index) => {
          const photo = photosOf(item.photos)[0];
          const body = textOf(item.body);
          const preview = textOf(item.preview) || firstParagraph(body);
          const previewField = textOf(item.preview)
            ? item.marks?.preview
            : (item.marks?.body ?? tinaMark(item, "body"));
          const title = textOf(item.title);
          return (
            <button
              key={`${title}-${index}`}
              className="news-achieve-card news-achieve-card--photo"
              type="button"
              onClick={() => {
                if (tinaEditing()) return;
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
                    data-tina-field={tinaMark(photo, "src")}
                  />
                </span>
              ) : null}
              <span className="news-achieve-copy">
                <CardKicker item={item} />
                <strong data-tina-field={item.marks?.title ?? tinaMark(item, "title")}>{title}</strong>
                {preview ? (
                  <span className="news-achieve-text" data-tina-field={previewField}>
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
                      key={`${photo.src}-${index}`}
                      className={index === slide ? "news-modal-slide is-on" : "news-modal-slide"}
                      aria-hidden={index !== slide}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt ?? ""}
                        fill
                        sizes="(max-width: 800px) 92vw, 720px"
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
                          key={`${photo.src}-${index}`}
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
              <CardKicker item={open} />
              <h2 id={titleId} data-tina-field={open.marks?.title ?? tinaMark(open, "title")}>
                {textOf(open.title)}
              </h2>
              {openBody ? (
                <div data-tina-field={openBodyField}>
                  {openBody.split(/\n\s*\n/).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>,
        document.body
      )
      : null}
    </>
  );
}
