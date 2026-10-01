"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { tinaMark } from "@/components/tina/EditablePage";
import type { NewsAchievementPhoto, NewsResult } from "@/lib/news";

function textOf(value: string | null | undefined) {
  return typeof value === "string" ? value : "";
}

function photosOf(photos: NewsResult["photos"] | null | undefined) {
  if (!Array.isArray(photos)) return [];
  return photos.filter((photo) => Boolean(photo?.src)).slice(0, 5);
}

function applyOf(photo: NewsAchievementPhoto | undefined) {
  const href = textOf(photo?.applyHref).trim();
  if (!href.startsWith("/") && !/^https?:\/\//i.test(href)) return null;
  if (href.startsWith("//")) return null;
  return {
    href,
    label: textOf(photo?.applyLabel).trim() || "Apply",
    external: /^https?:\/\//i.test(href)
  };
}

export default function NewsResultModal({
  item,
  onClose,
  dismissGuardMs = 0
}: {
  item: NewsResult;
  onClose: () => void;
  dismissGuardMs?: number;
}) {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const blockCloseUntil = useRef(Date.now() + dismissGuardMs);
  const titleId = useId();
  const photos = photosOf(item.photos);
  const applyAction = applyOf(photos[slide]);

  const close = useCallback(() => {
    if (Date.now() < blockCloseUntil.current) return;
    onClose();
  }, [onClose]);

  const apply = useCallback(
    (event: { preventDefault: () => void; stopPropagation: () => void }) => {
      event.preventDefault();
      event.stopPropagation();
      if (!applyAction) return;
      onClose();
      if (applyAction.external) {
        window.location.assign(applyAction.href);
        return;
      }
      router.push(applyAction.href);
    },
    [applyAction, onClose, router]
  );

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
  }, [close, go]);

  if (!mounted) return null;

  return createPortal(
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
            {photos.length > 1 || applyAction ? (
              <div className="news-modal-nav">
                {photos.length > 1 ? (
                  <div className="news-modal-nav-controls">
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
                {applyAction ? (
                  <a
                    className="btn btn--blue news-modal-apply"
                    href={applyAction.href}
                    data-tina-field={tinaMark(photos[slide], "applyLabel")}
                    onClick={apply}
                  >
                    {applyAction.label}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="news-modal-copy">
          <span className="news-achieve-kicker" data-tina-field={tinaMark(item, "kicker")}>
            {item.kicker}
          </span>
          <h2 id={titleId} data-tina-field={tinaMark(item, "title")}>
            {item.title}
          </h2>
          <div data-tina-field={tinaMark(item, "body")}>
            {textOf(item.body)
              .split(/\n\s*\n/)
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
