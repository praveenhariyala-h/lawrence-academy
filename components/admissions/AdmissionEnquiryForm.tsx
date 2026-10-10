"use client";

import { memo, useCallback, useState, type FormEvent, type ReactNode } from "react";
import { sendFormToInbox } from "@/lib/sendEnquiry";

const grades = [
  "Nursery",
  "LKG",
  "UKG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10"
];

const relationships = ["Father", "Mother", "Guardian"];
const years = ["2026 – 27", "2027 – 28", "2028 – 29"];
const sources = ["Website", "Friends or family", "Social media", "Newspaper", "School visit", "Other"];

function RequiredMark() {
  return (
    <abbr className="form-req" title="required">
      *
    </abbr>
  );
}

function Field({
  label,
  required,
  children,
  wide
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "enquiry-span" : undefined}>
      <span>
        {label}
        {required ? <> <RequiredMark /></> : null}
      </span>
      {children}
    </label>
  );
}

function AdmissionEnquiryForm({
  title,
  lede,
  submitLabel,
  titleField,
  ledeField,
  submitField,
  email
}: {
  title: string;
  lede: string;
  submitLabel: string;
  titleField?: string;
  ledeField?: string;
  submitField?: string;
  email: string;
}) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "");
    setSending(true);
    setError("");
    const result = await sendFormToInbox({
      email: email.trim() || "lawrence.admn@gmail.com",
      subject: `Admission enquiry — ${value("childName")}`,
      replyTo: value("email"),
      name: value("parentName"),
      honey: value("hp"),
      fields: [
        ["Child's full name", value("childName")],
        ["Date of birth", value("dob") || "Not provided"],
        ["Current grade", value("currentGrade") || "Not provided"],
        ["Grade applying for", value("grade")],
        ["Current school", value("currentSchool") || "Not provided"],
        ["Parent / guardian", value("parentName")],
        ["Relationship", value("relationship")],
        ["Mobile", value("phone")],
        ["Email", value("email")],
        ["Academic year", value("year")],
        ["Heard about us", value("source") || "Not provided"],
        ["Message", value("message") || "Not provided"]
      ]
    });
    setSending(false);
    if (!result.ok) {
      setError(
        result.offline
          ? "We could not send your enquiry. Please check your connection and try again."
          : "We could not send your enquiry. Please try again, or call the admissions helpline."
      );
      return;
    }
    setSent(true);
    form.reset();
  }, [email]);

  return (
    <form className={sent ? "enquiry-card is-sent" : "enquiry-card"} onSubmit={onSubmit} noValidate>
      <header className="enquiry-head">
        <h2 data-tina-field={titleField}>{title}</h2>
        <p data-tina-field={ledeField}>{lede}</p>
      </header>

      <div className="form-success" role="status">
        <p>Thank you. Your enquiry has been sent to our Admissions Team, and they will be in touch shortly.</p>
      </div>

      <div className="enquiry-honey" aria-hidden="true">
        <label>
          Leave blank
          <input name="hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <section className="enquiry-block">
        <h3>Child Details</h3>
        <div className="enquiry-grid">
          <Field label="Child's Full Name" required>
            <input name="childName" required autoComplete="name" placeholder="Enter your child's name" />
          </Field>
          <Field label="Date of Birth">
            <span className="enquiry-date">
              <input name="dob" type="date" />
            </span>
          </Field>
          <Field label="Current Grade / Class">
            <select name="currentGrade" defaultValue="">
              <option value="">Select current grade</option>
              {grades.map((grade) => (
                <option key={grade}>{grade}</option>
              ))}
            </select>
          </Field>
          <Field label="Grade Applying For" required>
            <select name="grade" required defaultValue="">
              <option value="">Select grade</option>
              {grades.map((grade) => (
                <option key={grade}>{grade}</option>
              ))}
            </select>
          </Field>
          <Field label="Current School">
            <input name="currentSchool" autoComplete="organization" placeholder="Enter current school name" />
          </Field>
        </div>
      </section>

      <section className="enquiry-block">
        <h3>Parent / Guardian Details</h3>
        <div className="enquiry-grid">
          <Field label="Parent / Guardian Name" required>
            <input name="parentName" required autoComplete="name" placeholder="Enter parent / guardian name" />
          </Field>
          <Field label="Relationship" required>
            <select name="relationship" required defaultValue="">
              <option value="">Select relationship</option>
              {relationships.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </Field>
          <Field label="Mobile Number" required>
            <input name="phone" type="tel" required autoComplete="tel" placeholder="Enter mobile number" />
          </Field>
          <Field label="Email Address" required>
            <input name="email" type="email" required autoComplete="email" placeholder="Enter email address" />
          </Field>
        </div>
      </section>

      <section className="enquiry-block">
        <h3>Enquiry Details</h3>
        <div className="enquiry-grid">
          <Field label="Academic Year" required>
            <select name="year" required defaultValue="2027 – 28">
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </Field>
          <Field label="How did you hear about us?">
            <select name="source" defaultValue="">
              <option value="">Select option</option>
              {sources.map((source) => (
                <option key={source}>{source}</option>
              ))}
            </select>
          </Field>
          <Field label="Your Query / Message" wide>
            <textarea name="message" placeholder="Tell us how we can help you..." />
          </Field>
        </div>
      </section>

      {error ? (
        <p className="enquiry-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="enquiry-submit" type="submit" data-tina-field={submitField} disabled={sending} aria-busy={sending}>
        {sending ? "Sending..." : submitLabel} <span aria-hidden="true">→</span>
      </button>
      <p className="enquiry-secure">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="11" width="12" height="9" rx="1.5" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        Your information is secure with us.
      </p>
    </form>
  );
}

export default memo(AdmissionEnquiryForm);
