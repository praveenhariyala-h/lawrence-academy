"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { tinaMark } from "@/components/tina/EditablePage";
import type { AlumniContent, AlumniStory } from "@/lib/alumni";

function BannerHeading({ title, field }: { title: string; field?: string }) {
  const pieces = title.split(/(\*[^*]+\*)/g).filter(Boolean);

  return (
    <h1 data-tina-field={field}>
      {pieces.map((piece, index) =>
        piece.startsWith("*") && piece.endsWith("*") ? (
          <span className="page-banner-accent" key={index}>
            {piece.slice(1, -1)}
          </span>
        ) : (
          piece
        )
      )}
    </h1>
  );
}

function SpreadPhoto({
  person,
  side,
  priority
}: {
  person: AlumniStory;
  side: "left" | "right";
  priority?: boolean;
}) {
  return (
    <span className={`spread-flap spread-flap--${side}`}>
      <span className="spread-flap-face">
        <Image
          src={person.photo}
          alt={side === "left" ? person.photoAlt || person.name : ""}
          data-tina-field={side === "left" ? tinaMark(person, "photo") : undefined}
          width={480}
          height={640}
          quality={95}
          sizes="280px"
          priority={priority}
        />
      </span>
    </span>
  );
}

export default function AlumniHero({
  hero,
  stories
}: {
  hero: AlumniContent["hero"];
  stories: AlumniContent["stories"];
}) {
  const people = useMemo(
    () => (stories.items ?? []).filter((story): story is AlumniStory => Boolean(story?.photo)),
    [stories.items]
  );
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="about-hero alumni-hero">
      <div className="about-hero-banner has-copy page-banner-title">
        <div className="page-banner-copy about-reveal">
          <span className="page-banner-kicker-row">
            <span className="page-banner-dash" aria-hidden="true" />
            {hero.kicker ? (
              <span className="kicker" data-tina-field={tinaMark(hero, "kicker")}>
                {hero.kicker}
              </span>
            ) : null}
          </span>
          <BannerHeading title={hero.title} field={tinaMark(hero, "title")} />
          {hero.lede ? (
            <p className="lede" data-tina-field={tinaMark(hero, "lede")}>
              {hero.lede}
            </p>
          ) : null}
        </div>

        {people.length > 0 ? (
          <ul className="alumni-hero-people">
            {people.map((person, index) => (
              <li key={`${person.photo}-${index}`}>
                <button
                  className={open === index ? "spread is-open" : "spread"}
                  type="button"
                  aria-expanded={open === index}
                  aria-label={`${person.name}. Hover or press to open the photo.`}
                  onClick={() => setOpen((current) => (current === index ? null : index))}
                >
                  <span className="spread-inner">
                    <strong data-tina-field={tinaMark(person, "name")}>{person.name}</strong>
                    <span>
                      {[person.batch, person.role].filter(Boolean).join(" · ")}
                    </span>
                  </span>
                  <SpreadPhoto person={person} side="left" priority={index === 0} />
                  <SpreadPhoto person={person} side="right" />
                </button>
              </li>
            ))}
          </ul>
        ) : hero.image ? (
          <Image src={hero.image} alt={hero.imageAlt} fill priority quality={95} sizes="50vw" />
        ) : null}
      </div>
    </section>
  );
}
