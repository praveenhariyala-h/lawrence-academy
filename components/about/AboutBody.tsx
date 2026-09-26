"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { useEditable } from "@/components/tina/EditablePage";
import type { AboutContent } from "@/lib/about";
import AboutReveal from "./AboutReveal";
import FacilitySlider from "./FacilitySlider";
import TeamsCarousel from "./TeamsCarousel";

function delay(index: number): CSSProperties {
  return { "--d": `${index * 70}ms` } as CSSProperties;
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="about-title">{children}</h2>;
}

function Portrait({
  src,
  alt,
  position,
  initials,
  sizes,
  className = ""
}: {
  src: string | null;
  alt: string;
  position?: string;
  initials?: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`about-portrait ${className}`.trim()}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition: position }}
        />
      ) : (
        <span className="about-portrait-initials" aria-hidden="true">
          {initials}
        </span>
      )}
    </div>
  );
}

export default function AboutBody({ content: initial }: { content: AboutContent }) {
  const content = useEditable("about", initial);
  const {
    hero: aboutHero,
    stats: aboutStats,
    journey: aboutJourney,
    philosophy: aboutPhilosophy,
    messages: aboutMessages,
    leadershipTeam: aboutLeadershipTeam,
    legacy: aboutLegacy,
    teams: aboutTeams,
    values: aboutValues,
    motto: aboutMotto
  } = content;

  return (
    <AboutReveal>
      <PageBanner
        src={aboutHero.image}
        alt={aboutHero.imageAlt}
        title={aboutHero.title}
        showTitle
        className="page-banner-title"
      />

      <section className="about-stats-band" aria-label="School at a glance">
        <div className="about-stats">
          {aboutStats.map((stat, index) => (
            <article className="about-stat about-reveal" style={delay(index)} key={stat.label}>
              <span className="about-stat-icon" aria-hidden="true">
                <StatIcon name={stat.icon} />
              </span>
              <p className="about-stat-value">
                {stat.value}
                {stat.unit ? <span className="about-stat-unit">{stat.unit}</span> : null}
              </p>
              <p className="about-stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band">
        <div className="wrap about-journey">
          <div className="about-journey-copy about-reveal">
            <SectionTitle>{aboutJourney.title}</SectionTitle>
            {aboutJourney.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="about-campus about-reveal" style={delay(1)}>
            <FacilitySlider
              photos={aboutJourney.photos}
              className="kg-slider"
              sizes="(max-width: 900px) 100vw, 34vw"
            />
          </div>
          <div className="about-promises about-reveal" style={delay(2)}>
            <article className="about-promise">
              <span className="about-icon-wrap" aria-hidden="true">
                <VisionIcon />
              </span>
              <div>
                <h3>{aboutJourney.vision.title}</h3>
                <p>{aboutJourney.vision.text}</p>
              </div>
            </article>
            <article className="about-promise">
              <span className="about-icon-wrap" aria-hidden="true">
                <MissionIcon />
              </span>
              <div>
                <h3>{aboutJourney.mission.title}</h3>
                <p>{aboutJourney.mission.text}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap about-philosophy">
          <div className="about-philosophy-photo about-reveal">
            <Image
              src={aboutPhilosophy.image}
              alt={aboutPhilosophy.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="about-philosophy-copy about-reveal" style={delay(1)}>
            <SectionTitle>{aboutPhilosophy.title}</SectionTitle>
            <p>{aboutPhilosophy.body}</p>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="about-head about-reveal">
            <SectionTitle>{aboutMessages.title}</SectionTitle>
            <p className="about-kicker">{aboutMessages.kicker}</p>
          </header>
          <div className="about-messages">
            {aboutMessages.people.map((person, index) => (
              <article className="about-message about-reveal" style={delay(index)} key={person.name}>
                <Portrait
                  src={person.photo}
                  alt={person.photoAlt}
                  position={person.position}
                  initials={person.initials}
                  sizes="(max-width: 900px) 70vw, 260px"
                  className="about-portrait--lg"
                />
                <h3>{person.name}</h3>
                <p className="about-role">{person.role}</p>
                <p>{person.message}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="about-head about-reveal">
            <SectionTitle>{aboutLeadershipTeam.title}</SectionTitle>
            <p className="about-kicker">{aboutLeadershipTeam.kicker}</p>
          </header>
          <div className="about-leaders">
            <div className="about-leader-grid">
              {aboutLeadershipTeam.people.map((person, index) => (
                <article className="about-leader about-reveal" style={delay(index)} key={person.name}>
                  <Portrait
                    src={person.photo}
                    alt={person.photoAlt}
                    position={person.position}
                    sizes="180px"
                    className="about-portrait--md"
                  />
                  <h3>{person.name}</h3>
                  <p className="about-role">{person.role}</p>
                </article>
              ))}
            </div>
            <blockquote className="about-pullquote about-reveal" style={delay(3)}>
              <p>{aboutLeadershipTeam.quote}</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="wrap">
          <header className="about-head about-reveal">
            <SectionTitle>{aboutLegacy.title}</SectionTitle>
            <p>{aboutLegacy.intro}</p>
          </header>
          <div className="about-teachers">
            {aboutLegacy.teachers.map((teacher, index) => (
              <article className="about-teacher about-reveal" style={delay(index)} key={teacher.name}>
                <Portrait
                  src={teacher.photo}
                  alt={teacher.photoAlt}
                  position="center 12%"
                  sizes="160px"
                  className="about-portrait--md"
                />
                <h3>{teacher.name}</h3>
                <p className="about-role">Joined in {teacher.year}</p>
                <p>{teacher.profile}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band about-band--soft">
        <div className="wrap">
          <header className="about-head about-reveal">
            <SectionTitle>{aboutTeams.title}</SectionTitle>
            <p className="about-kicker">{aboutTeams.kicker}</p>
          </header>
          <div className="about-reveal">
            <TeamsCarousel items={aboutTeams.groups} />
          </div>
        </div>
      </section>

      <section className="about-band about-values-band">
        <div className="wrap">
          <header className="about-head about-reveal">
            <SectionTitle>{aboutValues.title}</SectionTitle>
          </header>
          <div className="about-values">
            {aboutValues.items.map((value, index) => (
              <article className="about-value about-reveal" style={delay(index)} key={value.key}>
                <span className="about-icon-wrap" aria-hidden="true">
                  <ValueIcon name={value.key} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
          <div className="about-motto about-reveal">
            <OliveBranch />
            <p>{aboutMotto}</p>
            <OliveBranch flip />
          </div>
        </div>
      </section>
    </AboutReveal>
  );
}

function StatIcon({ name }: { name: "years" | "results" | "campus" | "faculty" }) {
  if (name === "years") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="5" y="7" width="22" height="20" rx="3" />
        <path d="M5 13h22M11 5v4M21 5v4" />
        <path d="M12 19.2 14.4 21.5 20 16" />
      </svg>
    );
  }

  if (name === "results") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M6 13 16 8l10 5v8c0 3.2-4.2 6-10 6s-10-2.8-10-6v-8Z" />
        <path d="M16 8v19M11.5 12.2c1.4.8 3 .8 4.5 0s3.1-.8 4.5 0" />
      </svg>
    );
  }

  if (name === "campus") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 27h24M7 27V15l9-7 9 7v12" />
        <path d="M13 27v-7h6v7" />
        <path d="M12 17h2M18 17h2M12 21h2M18 21h2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="11" cy="11" r="3.2" />
      <circle cx="21" cy="12" r="2.6" />
      <path d="M5 24c.8-3.4 3.1-5.2 7.4-5.2S18.6 20.6 19.4 24" />
      <path d="M19.2 18.2c2.4.3 4.2 1.6 5.1 4.3" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 16s5-8 12-8 12 8 12 8-5 8-12 8-12-8-12-8Z" />
      <circle cx="16" cy="16" r="3.2" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="5.5" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ValueIcon({ name }: { name: string }) {
  if (name === "excellence") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m16 5 2.4 6.8H26l-5.6 4.2 2.2 6.8L16 19.4 9.4 22.8l2.2-6.8L6 11.8h7.6Z" />
      </svg>
    );
  }
  if (name === "integrity") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M16 5 7 9v8c0 6 4.2 9.4 9 10.8C20.8 26.4 25 23 25 17V9l-9-4Z" />
        <path d="m12 16 2.6 2.6L20.4 13" />
      </svg>
    );
  }
  if (name === "respect") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="11" cy="12" r="3" />
        <circle cx="21" cy="12" r="3" />
        <path d="M5.5 24c.6-3.4 3-5.5 5.5-5.5s4.9 2.1 5.5 5.5" />
        <path d="M15.5 24c.6-3.4 3-5.5 5.5-5.5s4.9 2.1 5.5 5.5" />
      </svg>
    );
  }
  if (name === "curiosity") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12.5 18.2a6.2 6.2 0 1 1 7 0c-.8.6-1.5 1.6-1.5 2.8v.5h-4v-.5c0-1.2-.7-2.2-1.5-2.8Z" />
        <path d="M14 24h4M14.8 26.5h2.4" />
      </svg>
    );
  }
  if (name === "compassion") {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M16 26s-9-5.6-9-12.2A5.2 5.2 0 0 1 16 11a5.2 5.2 0 0 1 9 2.8C25 20.4 16 26 16 26Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="16" cy="16" r="10" />
      <path d="M6 16h20M16 6c3.2 3.4 4.8 7 4.8 10S19.2 22.6 16 26c-3.2-3.4-4.8-7-4.8-10S12.8 9.4 16 6Z" />
    </svg>
  );
}

function OliveBranch({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={flip ? "about-olive is-flip" : "about-olive"}
      viewBox="0 0 88 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 30c18-2 32-16 42-24"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M20 28c2-6 8-10 12-12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 22c2-5 7-8 11-9" stroke="currentColor" strokeWidth="1.2" />
      <path d="M44 14c1.5-4 5-7 9-8" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="18" cy="22" rx="4" ry="2.2" transform="rotate(-28 18 22)" fill="currentColor" />
      <ellipse cx="30" cy="16" rx="4" ry="2.2" transform="rotate(-32 30 16)" fill="currentColor" />
      <ellipse cx="42" cy="10" rx="3.6" ry="2" transform="rotate(-36 42 10)" fill="currentColor" />
      <ellipse cx="54" cy="7" rx="3.2" ry="1.8" transform="rotate(-40 54 7)" fill="currentColor" />
    </svg>
  );
}
