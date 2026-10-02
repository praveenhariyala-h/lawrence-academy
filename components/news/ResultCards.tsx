"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import NewsResultModal from "@/components/news/NewsResultModal";
import { tinaEditing, tinaMark } from "@/components/tina/EditablePage";
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

export default function ResultCards({ items }: { items: NewsResult[] }) {
  const records = (items ?? []).filter((item) => item && typeof item === "object");
  const students = records.flatMap((item) => {
    const parts = splitStudent(item.title);
    return parts ? [{ item, ...parts }] : [];
  });
  const features = records.filter((item) => !splitStudent(item.title));
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null ? features[active] : null;

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
                  if (tinaEditing()) return;
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

      {open ? (
        <NewsResultModal key={`${open.title}-${active}`} item={open} onClose={() => setActive(null)} />
      ) : null}
    </div>
  );
}
