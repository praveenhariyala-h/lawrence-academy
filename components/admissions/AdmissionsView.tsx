"use client";

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
  const steps = Array.isArray(content.steps) ? content.steps : [];
  const fees = Array.isArray(content.fees) ? content.fees : [];
  const documents = Array.isArray(content.documents) ? content.documents : [];

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
            <div className="admit-checklist">
              {text(content, "documentsKicker") ? (
                <span className="admit-checklist-kicker" data-tina-field={mark(content, "documentsKicker")}>
                  {text(content, "documentsKicker")}
                </span>
              ) : null}
              <h3 data-tina-field={mark(content, "documentsTitle")}>{text(content, "documentsTitle")}</h3>
              <p data-tina-field={mark(content, "documentsBody")}>{text(content, "documentsBody")}</p>
              <ol>
                {documents.map((item, index) =>
                  typeof item === "string" ? (
                    <li key={index} data-tina-field={mark(content, "documents", index)}>
                      {item}
                    </li>
                  ) : null
                )}
              </ol>
            </div>
          </div>
          <AdmissionEnquiryForm
            title={text(content, "applyTitle")}
            lede={text(content, "applyBody")}
            submitLabel={text(content, "submitLabel")}
            titleField={mark(content, "applyTitle")}
            ledeField={mark(content, "applyBody")}
            submitField={mark(content, "submitLabel")}
            email={text(content, "enquiryEmail")}
          />
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
    </>
  );
}
