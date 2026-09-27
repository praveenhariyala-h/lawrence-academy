"use client";

import { memo, useCallback, useState, type FormEvent, type ReactNode } from "react";
import { sendToMailAndWhatsApp, type EnquiryDelivery } from "@/lib/sendEnquiry";

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
  email,
  whatsapp
}: {
  title: string;
  lede: string;
  submitLabel: string;
  titleField?: string;
  ledeField?: string;
  submitField?: string;
  email: string;
  whatsapp: string;
}) {
  const [sent, setSent] = useState(false);
  const [delivery, setDelivery] = useState<EnquiryDelivery | null>(null);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const body = [
        "Admission enquiry from the Lawrence High School website",
        "",
        `Child's full name: ${data.get("childName") ?? ""}`,
        `Date of birth: ${data.get("dob") ?? ""}`,
        `Current grade: ${data.get("currentGrade") ?? ""}`,
        `Grade applying for: ${data.get("grade") ?? ""}`,
        `Current school: ${data.get("currentSchool") ?? ""}`,
        `Parent / guardian: ${data.get("parentName") ?? ""}`,
        `Relationship: ${data.get("relationship") ?? ""}`,
        `Mobile: ${data.get("phone") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Academic year: ${data.get("year") ?? ""}`,
        `Heard about us: ${data.get("source") ?? ""}`,
        "",
        String(data.get("message") ?? "")
      ].join("\n");
      if (email && whatsapp) {
        setDelivery(
          sendToMailAndWhatsApp({
            email,
            whatsapp,
            subject: "Admission enquiry",
            body
          })
        );
      }
      setSent(true);
      form.reset();
    },
    [email, whatsapp]
  );

  return (
    <form className={sent ? "enquiry-card is-sent" : "enquiry-card"} onSubmit={onSubmit} noValidate>
      <header className="enquiry-head">
        <h2 data-tina-field={titleField}>{title}</h2>
        <p data-tina-field={ledeField}>{lede}</p>
      </header>

      <div className="form-success" role="status">
        <p>Thank you. Our Admissions Team will be in touch shortly.</p>
        {delivery ? (
          <p className="form-delivery">
            <a href={delivery.mail}>Open email</a>
            <a href={delivery.whatsapp} target="_blank" rel="noreferrer">
              Open WhatsApp
            </a>
          </p>
        ) : null}
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
