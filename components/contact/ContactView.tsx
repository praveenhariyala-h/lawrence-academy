"use client";

import Link from "next/link";
import AboutReveal from "@/components/about/AboutReveal";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";
import type { ContactContent } from "@/lib/contact";

type Social = { label: string; href: string };

const socialOrder = ["Facebook", "Instagram", "LinkedIn", "YouTube"];

function AddressLines({ address }: { address: string }) {
  const parts = address.split(/,\s*(?=HSR)/);
  if (parts.length < 2) return address;
  return (
    <>
      {parts[0]},
      <br />
      {parts[1]}
    </>
  );
}

function Emphasised({ text }: { text: string }) {
  return text.split("\n").map((line, lineIndex) => (
    <span key={`${line}-${lineIndex}`}>
      {lineIndex > 0 ? <br /> : null}
      {line.split(/(\*[^*]+\*)/g).filter(Boolean).map((piece, index) =>
        piece.startsWith("*") && piece.endsWith("*") ? (
          <span className="contact-accent" key={index}>
            {piece.slice(1, -1)}
          </span>
        ) : (
          piece
        )
      )}
    </span>
  ));
}

function TouchIcon({ type }: { type: "pin" | "phone" | "mail" | "clock" }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true as const, fill: "none", stroke: "currentColor", strokeWidth: 1.7 };
  if (type === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M8 4.8h2.2l1.1 2.8-1.5 1a11 11 0 0 0 5.6 5.6l1-1.5 2.8 1.1V16a1.2 1.2 0 0 1-1.3 1.2A13.2 13.2 0 0 1 6.8 6.1 1.2 1.2 0 0 1 8 4.8Z" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "mail") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 5.5L19.5 7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="7.2" />
      <path d="M12 8.2V12l2.6 1.6" strokeLinecap="round" />
    </svg>
  );
}

function SocialGlyph({ label }: { label: string }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true as const };
  if (label === "Facebook") {
    return (
      <svg {...common}>
        <path fill="currentColor" d="M14.2 8.5h2.3V6h-2.3C11.9 6 10 7.8 10 10.1V12H8v2.5h2V21h2.6v-6.5h2.2l.4-2.5h-2.6v-1.2c0-.7.4-1.3 1.2-1.3Z" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (label === "YouTube") {
    return (
      <svg {...common}>
        <path fill="currentColor" d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18.1 6 12 6 12 6s-6.1 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 3.8 2.7 2.7 0 0 0 1.9 1.9C5.9 18 12 18 12 18s6.1 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-3.8ZM10.2 14.8V9.2L15.2 12l-5 2.8Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path fill="currentColor" d="M6.7 9.4v8.1H4.2V9.4h2.5ZM5.4 4.6a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM19.8 17.5h-2.5v-3.9c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.7v4.1H11.7s0-6.7 0-7.4h2.5v1c.4-.6 1.1-1.4 2.6-1.4 1.9 0 3 1.2 3 3.9v3.9Z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="17" cy="16" r="5" />
      <circle cx="31" cy="18" r="4" />
      <path d="M6.5 35c1.4-6.2 5.4-9.2 10.5-9.2s9.1 3 10.5 9.2" strokeLinecap="round" />
      <path d="M27 35c.7-4.2 3.2-6.6 6.6-6.6 3.2 0 5.4 2.2 6.4 6.6" strokeLinecap="round" />
    </svg>
  );
}

function LeafMark() {
  return (
    <svg className="contact-leaf" viewBox="0 0 170 210" aria-hidden="true" fill="currentColor">
      <path d="M132 198c-6-22-16-42-32-60-18-20-34-32-58-42" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M104 146c-16-2-28 6-34 18 12-2 24-4 34-18Z" />
      <path d="M88 122c-14-8-20 4-22 18 12-6 20-10 22-18Z" />
      <path d="M118 164c-10 8-28 8-36 18 14-2 28-6 36-18Z" />
      <path d="M70 98c-16-6-22 8-20 20 10-8 18-12 20-20Z" />
      <path d="M126 180c-4 12-22 16-34 18 12 0 26-6 34-18Z" />
      <path d="M54 74c-14-2-18 10-14 20 8-8 14-12 14-20Z" />
    </svg>
  );
}

export default function ContactView({
  content: initial,
  schoolName,
  address,
  phone,
  email,
  whatsapp,
  mapUrl,
  socials
}: {
  content: ContactContent;
  schoolName: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  mapUrl: string;
  socials: Social[];
}) {
  const content = useEditable("contact", initial);
  const hours = (content.hours ?? []).filter((row) => row?.days && row?.time);
  const motto = (content.motto ?? []).filter(Boolean);
  const orderedSocials = [
    ...socialOrder.flatMap((label) => socials.filter((item) => item.label === label)),
    ...socials.filter((item) => !socialOrder.includes(item.label))
  ];
  const recruitHref = content.recruitHref || `mailto:${email}?subject=Staff%20Recruitment`;
  const recruitInternal = recruitHref.startsWith("/");

  return (
    <div className="contact-page">
      <AboutReveal>
        <PageBanner
          src={content.heroImage}
          alt={content.heroImageAlt}
          title={content.title}
          grades={content.subtitle}
          gradesAfter
          lede={content.lede}
          fit="cover"
          className="page-banner-title"
          fields={{
            image: tinaMark(content, "heroImage"),
            title: tinaMark(content, "title"),
            grades: tinaMark(content, "subtitle"),
            lede: tinaMark(content, "lede")
          }}
        />
      </AboutReveal>

      <section className="contact-main">
        <div className="wrap contact-main-grid">
          <aside className="contact-card contact-touch">
            <h2 data-tina-field={tinaMark(content, "touchHeading")}>{content.touchHeading}</h2>
            <div className="contact-touch-row">
              <span className="contact-touch-icon">
                <TouchIcon type="pin" />
              </span>
              <div>
                <strong data-tina-field={tinaMark(content, "addressLabel")}>{content.addressLabel}</strong>
                <p>
                  <AddressLines address={address} />
                </p>
              </div>
            </div>
            <div className="contact-touch-row">
              <span className="contact-touch-icon">
                <TouchIcon type="phone" />
              </span>
              <div>
                <strong data-tina-field={tinaMark(content, "phoneLabel")}>{content.phoneLabel}</strong>
                <p>
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                </p>
              </div>
            </div>
            <div className="contact-touch-row">
              <span className="contact-touch-icon">
                <TouchIcon type="mail" />
              </span>
              <div>
                <strong data-tina-field={tinaMark(content, "emailLabel")}>{content.emailLabel}</strong>
                <p>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>
            <div className="contact-touch-row">
              <span className="contact-touch-icon">
                <TouchIcon type="clock" />
              </span>
              <div>
                <strong data-tina-field={tinaMark(content, "hoursHeading")}>{content.hoursHeading}</strong>
                <div className="contact-hours">
                  {hours.map((row) => (
                    <p key={row.days}>
                      <span data-tina-field={tinaMark(row, "days")}>{row.days}</span>
                      <span data-tina-field={tinaMark(row, "time")}>{row.time}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="contact-card contact-message" id="message">
            <h2 data-tina-field={tinaMark(content, "formHeading")}>{content.formHeading}</h2>
            <ContactForm
              message={{
                nameLabel: content.nameLabel,
                namePlaceholder: content.namePlaceholder,
                emailFieldLabel: content.emailFieldLabel,
                emailPlaceholder: content.emailPlaceholder,
                phoneFieldLabel: content.phoneFieldLabel,
                phonePlaceholder: content.phonePlaceholder,
                subjectLabel: content.subjectLabel,
                subjectPlaceholder: content.subjectPlaceholder,
                subjects: content.subjects ?? [],
                messageLabel: content.messageLabel,
                messagePlaceholder: content.messagePlaceholder,
                submitLabel: content.submitLabel,
                successMessage: content.successMessage
              }}
              submitField={tinaMark(content, "submitLabel")}
              toEmail={email}
              toWhatsapp={whatsapp}
            />
          </div>
        </div>
      </section>

      <section className="contact-recruit">
        <div className="wrap">
          <div className="contact-recruit-bar">
            <div className="contact-recruit-brand">
              <span className="contact-recruit-icon">
                <PeopleIcon />
              </span>
              <h2 data-tina-field={tinaMark(content, "recruitTitle")}>
                <Emphasised text={content.recruitTitle} />
              </h2>
            </div>
            <span className="contact-recruit-rule" aria-hidden="true" />
            <p data-tina-field={tinaMark(content, "recruitBody")}>{content.recruitBody}</p>
            {recruitInternal ? (
              <Link
                className="btn btn--gold contact-recruit-btn"
                href={recruitHref}
                data-tina-field={tinaMark(content, "recruitLabel")}
              >
                {content.recruitLabel} <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <a
                className="btn btn--gold contact-recruit-btn"
                href={recruitHref}
                data-tina-field={tinaMark(content, "recruitLabel")}
              >
                {content.recruitLabel} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="contact-find">
        <div className="wrap contact-find-grid">
          <div className="contact-map-col">
            <h2 data-tina-field={tinaMark(content, "mapTitle")}>{content.mapTitle}</h2>
            <div className="contact-map-frame">
              <iframe
                title={`${schoolName} campus map`}
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact-map-card">
                <span className="contact-touch-icon">
                  <TouchIcon type="pin" />
                </span>
                <div>
                  <strong>{schoolName}</strong>
                  <p>
                  <AddressLines address={address} />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-social-col">
            <h2 data-tina-field={tinaMark(content, "connectTitle")}>{content.connectTitle}</h2>
            <div className="contact-socials">
              {orderedSocials.map((item) => (
                <a
                  key={item.label}
                  className={`contact-social contact-social--${item.label.toLowerCase()}`}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialGlyph label={item.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-motto-col">
            <p className="contact-motto" data-tina-field={tinaMark(content, "motto")}>
              {motto.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <LeafMark />
          </div>
        </div>
      </section>
    </div>
  );
}
