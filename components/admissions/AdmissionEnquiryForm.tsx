"use client";

import { memo, useEffect, useState, type FormEvent, type ReactNode } from "react";

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
  const inbox = email.trim() || "lawrence.admn@gmail.com";

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") === "1") setSent(true);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }
    const child = (form.elements.namedItem("Child name") as HTMLInputElement).value;
    const parentEmail = (form.elements.namedItem("email") as HTMLInputElement).value;
    const honey = (form.elements.namedItem("hp") as HTMLInputElement).value.trim();
    (form.elements.namedItem("_subject") as HTMLInputElement).value = `Admission enquiry — ${child}`;
    (form.elements.namedItem("_replyto") as HTMLInputElement).value = parentEmail;
    const next = new URL("/admissions", window.location.origin);
    next.searchParams.set("sent", "1");
    (form.elements.namedItem("_next") as HTMLInputElement).value = next.toString();
    const honeyField = form.elements.namedItem("_honey") as HTMLInputElement;
    honeyField.disabled = !honey;
    honeyField.value = honey;
    (form.elements.namedItem("hp") as HTMLInputElement).disabled = true;
    form.method = "post";
    form.action = `https://formsubmit.co/${encodeURIComponent(inbox)}`;
  }

  return (
    <form
      className={sent ? "enquiry-card is-sent" : "enquiry-card"}
      action={`https://formsubmit.co/${encodeURIComponent(inbox)}`}
      method="POST"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" defaultValue="" />
      <input type="hidden" name="_replyto" defaultValue="" />
      <input type="hidden" name="_next" defaultValue="" />
      <input type="hidden" name="_honey" defaultValue="" />
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
            <input name="Child name" required autoComplete="name" placeholder="Enter your child's name" />
          </Field>
          <Field label="Date of Birth">
            <span className="enquiry-date">
              <input name="Date of birth" type="date" />
            </span>
          </Field>
          <Field label="Current Grade / Class">
            <select name="Current grade" defaultValue="">
              <option value="">Select current grade</option>
              {grades.map((grade) => (
                <option key={grade}>{grade}</option>
              ))}
            </select>
          </Field>
          <Field label="Grade Applying For" required>
            <select name="Grade applying for" required defaultValue="">
              <option value="">Select grade</option>
              {grades.map((grade) => (
                <option key={grade}>{grade}</option>
              ))}
            </select>
          </Field>
          <Field label="Current School">
            <input name="Current school" autoComplete="organization" placeholder="Enter current school name" />
          </Field>
        </div>
      </section>

      <section className="enquiry-block">
        <h3>Parent / Guardian Details</h3>
        <div className="enquiry-grid">
          <Field label="Parent / Guardian Name" required>
            <input name="Parent name" required autoComplete="name" placeholder="Enter parent / guardian name" />
          </Field>
          <Field label="Relationship" required>
            <select name="Relationship" required defaultValue="">
              <option value="">Select relationship</option>
              {relationships.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </Field>
          <Field label="Mobile Number" required>
            <input name="Phone" type="tel" required autoComplete="tel" placeholder="Enter mobile number" />
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
            <select name="Academic year" required defaultValue="2027 – 28">
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </Field>
          <Field label="How did you hear about us?">
            <select name="Heard about us" defaultValue="">
              <option value="">Select option</option>
              {sources.map((source) => (
                <option key={source}>{source}</option>
              ))}
            </select>
          </Field>
          <Field label="Your Query / Message" wide>
            <textarea name="Message" placeholder="Tell us how we can help you..." />
          </Field>
        </div>
      </section>

      <button className="enquiry-submit" type="submit" data-tina-field={submitField}>
        {submitLabel} <span aria-hidden="true">→</span>
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
