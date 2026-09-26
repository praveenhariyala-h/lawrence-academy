"use client";

import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";
import ContactForm from "@/components/ContactForm";
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

      <section className="band band--white">
        <div className="wrap">
          <span className="kicker" data-tina-field={mark(content, "openingsKicker")}>
            {text(content, "openingsKicker")}
          </span>
          <h2 className="section-title" data-tina-field={mark(content, "openingsTitle")}>
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

      <section id="process" className="band band--pearl section-anchor">
        <div className="wrap">
          <span className="kicker" data-tina-field={mark(content, "processKicker")}>
            {text(content, "processKicker")}
          </span>
          <h2 className="section-title" data-tina-field={mark(content, "processTitle")}>
            {text(content, "processTitle")}
          </h2>
          <div className="timeline">
            {steps.map((item, index) => {
              const step = record(item);
              if (!step) return null;
              return (
                <div key={index} className="step">
                  <span className="step-num">{index + 1}</span>
                  <div>
                    <h3 data-tina-field={mark(step, "title")}>{text(step, "title")}</h3>
                    <p data-tina-field={mark(step, "text")}>{text(step, "text")}</p>
                  </div>
                </div>
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
          <h2 className="section-title" data-tina-field={mark(content, "feesTitle")}>
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

      <section className="band band--pearl">
        <div className="wrap split">
          <div>
            <span className="kicker" data-tina-field={mark(content, "documentsKicker")}>
              {text(content, "documentsKicker")}
            </span>
            <h2 className="section-title" data-tina-field={mark(content, "documentsTitle")}>
              {text(content, "documentsTitle")}
            </h2>
            <p data-tina-field={mark(content, "documentsBody")}>{text(content, "documentsBody")}</p>
          </div>
          <ul className="offer-list">
            {documents.map((item, index) =>
              typeof item === "string" ? (
                <li key={index} data-tina-field={mark(content, "documents", index)}>
                  {item}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>

      <section id="apply" className="band band--white section-anchor">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <div>
              <span className="kicker" data-tina-field={mark(content, "applyKicker")}>
                {text(content, "applyKicker")}
              </span>
              <h2 data-tina-field={mark(content, "applyTitle")}>{text(content, "applyTitle")}</h2>
              <p data-tina-field={mark(content, "applyBody")}>{text(content, "applyBody")}</p>
            </div>
            <div>
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
          <ContactForm submitLabel={text(content, "submitLabel")} submitField={mark(content, "submitLabel")} />
        </div>
      </section>
    </>
  );
}
