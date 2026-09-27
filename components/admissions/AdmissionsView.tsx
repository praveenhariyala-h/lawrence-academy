"use client";

import Image from "next/image";
import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";
import AdmissionEnquiryForm from "@/components/admissions/AdmissionEnquiryForm";
import PageHero from "@/components/PageHero";
import type { AdmissionsContent } from "@/lib/admissions";

const documentPath = "content/admissions/admissions.json";

type EditableRecord = Record<string, unknown> & {
  _content_source?: {
    queryId: string;
    path: Array<string | number>;
  };
};

export type AdmissionsTinaProps = {
  query: string;
  variables: { relativePath: string };
  data: { admissions: AdmissionsContent };
  phones: string[];
  email: string;
  whatsapp: string;
};

function text(record: EditableRecord | null, key: string) {
  const value = record?.[key];
  return typeof value === "string" ? value : "";
}

function record(value: unknown): EditableRecord | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as EditableRecord;
}

function mark(object: object | null | undefined, property: string, index?: number) {
  if (!object) return undefined;
  const value = tinaField(object as EditableRecord, property, index);
  return value || undefined;
}

const stepIcons = ["enquire", "visit", "apply", "interaction", "offer"];
const documentIcons = ["photo", "medal", "certificate", "transfer", "records", "visa"];

function DocumentIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };
  if (name === "medal") {
    return (
      <svg {...common}>
        <circle cx="12" cy="9" r="4" />
        <path d="m9 13-1.5 7L12 17l4.5 3L15 13" />
      </svg>
    );
  }
  if (name === "certificate" || name === "transfer") {
    return (
      <svg {...common}>
        <path d="M7 3h7l5 5v13H7V3Z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    );
  }
  if (name === "records") {
    return (
      <svg {...common}>
        <path d="M5 19V11M10 19V7M15 19v-5M20 19V5" />
      </svg>
    );
  }
  if (name === "visa") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2 2.4 3 5 3 8s-1 5.6-3 8c-2-2.4-3-5-3-8s1-5.6 3-8Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.4" />
      <path d="m7 17 3.2-3.2a1 1 0 0 1 1.4 0L16 18" />
    </svg>
  );
}

function ProcessIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };
  if (name === "visit") {
    return (
      <svg {...common}>
        <path d="M4 20h16M6 20V10l6-5 6 5v10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }
  if (name === "apply") {
    return (
      <svg {...common}>
        <path d="M7 3h7l5 5v13H7V3Z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </svg>
    );
  }
  if (name === "interaction") {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="2.2" />
        <circle cx="16" cy="9.5" r="1.8" />
        <path d="M4.5 18c.7-2.6 2.4-4 4.5-4s3.8 1.4 4.5 4M14 14.2c1.6.2 2.8 1.1 3.5 2.8" />
      </svg>
    );
  }
  if (name === "offer") {
    return (
      <svg {...common}>
        <path d="M4 6h16v12H4V6Z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M7 3h8l4 4v14H7V3Z" />
      <path d="M15 3v4h4M9 14h4M9 17h2" />
      <path d="m13 15 1.2 1.2L17 13" />
    </svg>
  );
}

export default function AdmissionsView(props: AdmissionsTinaProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    experimental___selectFormByFormId: () => documentPath
  });

  const content = record(data.admissions) ?? {};
  const hero = record(content.hero);
  const stages = Array.isArray(content.stages) ? content.stages : [];
  const steps = Array.isArray(content.steps) ? content.steps : [];
  const fees = Array.isArray(content.fees) ? content.fees : [];
  const documents = Array.isArray(content.documents) ? content.documents : [];
  const administrationTeam = record(content.administrationTeam);
  const adminTitle = text(administrationTeam, "title") || "Administration Team";
  const adminImage = text(administrationTeam, "image") || "/images/about/principal-devi.jpg";
  const adminAlt = text(administrationTeam, "imageAlt") || "The Principal of Lawrence High School";

  return (
    <>
      <PageHero
        kicker={text(hero, "kicker")}
        title={text(hero, "title")}
        lede={text(hero, "lede")}
        fields={{
          kicker: mark(hero, "kicker"),
          title: mark(hero, "title"),
          lede: mark(hero, "lede")
        }}
      />

      <section id="apply" className="band enquiry-band section-anchor">
        <div className="wrap apply-layout">
          <div id="process" className="admit-process section-anchor">
            <h2 className="kg-title" data-tina-field={mark(content, "processTitle")}>
              {text(content, "processTitle")}
            </h2>
            <ol className="admit-steps">
              {steps.map((item, index) => {
                const step = record(item);
                if (!step) return null;
                const icon = text(step, "icon") || stepIcons[index] || "enquire";
                return (
                  <li className="admit-step" key={index}>
                    <span className="admit-num">{index + 1}</span>
                    <div className="admit-step-body">
                      <span className="admit-icon" aria-hidden="true">
                        <ProcessIcon name={icon} />
                      </span>
                      <div>
                        <h3 data-tina-field={mark(step, "title")}>{text(step, "title")}</h3>
                        <p data-tina-field={mark(step, "text")}>{text(step, "text")}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="enquiry-helpline">
              <h2 data-tina-field={mark(content, "helplineTitle")}>{text(content, "helplineTitle")}</h2>
              <p>
                {props.phones.map((phone, index) => (
                  <span key={phone}>
                    {index > 0 ? " · " : null}
                    <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                  </span>
                ))}
              </p>
              <p>
                <a href={`mailto:${props.email}`}>{props.email}</a>
              </p>
              <p>
                <span data-tina-field={mark(content, "visitNote")}>{text(content, "visitNote")}</span>{" "}
                <Link href="/contact" data-tina-field={mark(content, "visitLinkLabel")}>
                  {text(content, "visitLinkLabel")}
                </Link>
                .
              </p>
            </div>
          </div>
          <AdmissionEnquiryForm
            title={text(content, "applyTitle")}
            lede={text(content, "applyBody")}
            submitLabel={text(content, "submitLabel")}
            titleField={mark(content, "applyTitle")}
            ledeField={mark(content, "applyBody")}
            submitField={mark(content, "submitLabel")}
            email={props.email}
            whatsapp={props.whatsapp}
          />
        </div>
      </section>

      <section className="band docs-band">
        <div className="wrap">
          <h2 className="kg-title" data-tina-field={mark(content, "documentsTitle")}>
            {text(content, "documentsTitle")}
          </h2>
          <p className="docs-lede" data-tina-field={mark(content, "documentsBody")}>
            {text(content, "documentsBody")}
          </p>
          <ul className="docs-card">
            {documents.map((item, index) =>
              typeof item === "string" ? (
                <li key={index} data-tina-field={mark(content, "documents", index)}>
                  <span className="docs-icon" aria-hidden="true">
                    <DocumentIcon name={documentIcons[index] ?? "certificate"} />
                  </span>
                  <span>{item}</span>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>

      <section className="band band--tint">
        <div className="wrap">
          <span className="kicker" data-tina-field={mark(content, "openingsKicker")}>
            {text(content, "openingsKicker")}
          </span>
          <h2 className="kg-title" data-tina-field={mark(content, "openingsTitle")}>
            {text(content, "openingsTitle")}
          </h2>
          <div className="cards cards--4">
            {stages.map((item, index) => {
              const stage = record(item);
              if (!stage) return null;
              return (
                <article key={index} className="card">
                  <h3 data-tina-field={mark(stage, "title")}>{text(stage, "title")}</h3>
                  <p data-tina-field={mark(stage, "text")}>{text(stage, "text")}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fees" className="band band--white section-anchor">
        <div className="wrap">
          <span className="kicker" data-tina-field={mark(content, "feesKicker")}>
            {text(content, "feesKicker")}
          </span>
          <h2 className="kg-title" data-tina-field={mark(content, "feesTitle")}>
            {text(content, "feesTitle")}
          </h2>
          <p className="lede" data-tina-field={mark(content, "feesNote")}>
            {text(content, "feesNote")}
          </p>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>What it covers</th>
                  <th>When</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((item, index) => {
                  const fee = record(item);
                  if (!fee) return null;
                  return (
                    <tr key={index}>
                      <td data-tina-field={mark(fee, "name")}>{text(fee, "name")}</td>
                      <td data-tina-field={mark(fee, "covers")}>{text(fee, "covers")}</td>
                      <td data-tina-field={mark(fee, "when")}>{text(fee, "when")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p>
            Call <a href={`tel:${props.phones[0]?.replace(/\s/g, "") ?? ""}`}>{props.phones[0] ?? ""}</a> or write to{" "}
            <a href={`mailto:${props.email}`}>{props.email}</a> for this year’s schedule.
          </p>
        </div>
      </section>

      <section className="band band--tint">
        <div className="wrap facility-team facility-team--admin">
          <h2>
            <span className="facility-lead-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="2.4" />
                <circle cx="16" cy="9" r="2" />
                <path d="M4.2 19c.8-3 2.6-4.4 6.3-4.4s5.5 1.4 6.3 4.4M15.2 14.2c1.8.3 3.2 1.4 3.8 3.8" />
              </svg>
            </span>
            <span className="facility-team-name" data-tina-field={mark(administrationTeam, "title")}>
              {adminTitle}
            </span>
          </h2>
          <div className="facility-team-photos facility-team-photos--1">
            <div className="facility-team-photo">
              <Image
                src={adminImage}
                alt={adminAlt}
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
                style={{ objectPosition: "center 32%" }}
                data-tina-field={mark(administrationTeam, "image")}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
