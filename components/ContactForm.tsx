"use client";

import { memo, useEffect, useState, type FormEvent } from "react";
import type { ContactContent } from "@/lib/contact";

export type ContactMessageFields = Pick<
  ContactContent,
  | "nameLabel"
  | "namePlaceholder"
  | "emailFieldLabel"
  | "emailPlaceholder"
  | "phoneFieldLabel"
  | "phonePlaceholder"
  | "subjectLabel"
  | "subjectPlaceholder"
  | "subjects"
  | "messageLabel"
  | "messagePlaceholder"
  | "submitLabel"
  | "successMessage"
>;

function RequiredMark() {
  return (
    <abbr className="form-req" title="required">
      *
    </abbr>
  );
}

function ContactForm({
  submitLabel = "Send message",
  submitField,
  message,
  toEmail
}: {
  submitLabel?: string;
  submitField?: string;
  message?: ContactMessageFields;
  toEmail?: string;
}) {
  const [sent, setSent] = useState(false);
  const inbox = toEmail?.trim() || "";

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") === "1") setSent(true);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }
    if (!inbox) {
      event.preventDefault();
      setSent(true);
      form.reset();
      return;
    }
    const sender = (form.elements.namedItem("Name") as HTMLInputElement).value;
    const senderEmail = (form.elements.namedItem("email") as HTMLInputElement).value;
    const honey = (form.elements.namedItem("hp") as HTMLInputElement).value.trim();
    (form.elements.namedItem("_subject") as HTMLInputElement).value = `Website enquiry — ${sender}`;
    (form.elements.namedItem("_replyto") as HTMLInputElement).value = senderEmail;
    const next = new URL(window.location.pathname, window.location.origin);
    next.searchParams.set("sent", "1");
    (form.elements.namedItem("_next") as HTMLInputElement).value = next.toString();
    const honeyField = form.elements.namedItem("_honey") as HTMLInputElement;
    honeyField.disabled = !honey;
    honeyField.value = honey;
    (form.elements.namedItem("hp") as HTMLInputElement).disabled = true;
    form.method = "post";
    form.action = `https://formsubmit.co/${encodeURIComponent(inbox)}`;
  }

  if (message) {
    const subjects = message.subjects.filter(Boolean);
    return (
      <form
        className={sent ? "form form--message is-sent" : "form form--message"}
        action={inbox ? `https://formsubmit.co/${encodeURIComponent(inbox)}` : undefined}
        method="POST"
        onSubmit={onSubmit}
        noValidate
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" defaultValue="" />
        <input type="hidden" name="_replyto" defaultValue="" />
        <input type="hidden" name="_next" defaultValue="" />
        <input type="hidden" name="_honey" defaultValue="" />
        <div className="enquiry-honey" aria-hidden="true">
          <label>
            Leave blank
            <input name="hp" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="form-success form-span" role="status">
          <p>{message.successMessage}</p>
        </div>
        <label>
          <span>
            {message.nameLabel} <RequiredMark />
          </span>
          <input name="Name" required autoComplete="name" placeholder={message.namePlaceholder} />
        </label>
        <label>
          <span>
            {message.emailFieldLabel} <RequiredMark />
          </span>
          <input name="email" type="email" required autoComplete="email" placeholder={message.emailPlaceholder} />
        </label>
        <label>
          <span>
            {message.phoneFieldLabel} <RequiredMark />
          </span>
          <input name="Phone" type="tel" required autoComplete="tel" placeholder={message.phonePlaceholder} />
        </label>
        <label>
          <span>
            {message.subjectLabel} <RequiredMark />
          </span>
          <select name="Subject" required defaultValue="">
            <option value="">{message.subjectPlaceholder}</option>
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </label>
        <label className="form-span">
          <span>
            {message.messageLabel} <RequiredMark />
          </span>
          <textarea name="Message" required placeholder={message.messagePlaceholder} />
        </label>
        <button className="btn btn--gold contact-submit form-span" type="submit" data-tina-field={submitField}>
          {message.submitLabel} <span aria-hidden="true">→</span>
        </button>
      </form>
    );
  }

  return (
    <form
      className={sent ? "form is-sent" : "form"}
      action={inbox ? `https://formsubmit.co/${encodeURIComponent(inbox)}` : undefined}
      method="POST"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" defaultValue="" />
      <input type="hidden" name="_replyto" defaultValue="" />
      <input type="hidden" name="_next" defaultValue="" />
      <input type="hidden" name="_honey" defaultValue="" />
      <div className="enquiry-honey" aria-hidden="true">
        <label>
          Leave blank
          <input name="hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-success" role="status">
        Thank you. The Community Relations team will be in touch shortly.
      </div>
      <label>
        Full name
        <input name="Name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="Phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        I’m interested in
        <select name="Interest" required defaultValue="">
          <option value="">Select</option>
          <option>Kindergarten</option>
          <option>Primary</option>
          <option>Middle School</option>
          <option>High School</option>
          <option>A campus tour</option>
          <option>Transport</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="Message" required placeholder="Tell us about your child or your question." />
      </label>
      <button className="btn btn--blue" type="submit" data-tina-field={submitField}>
        {submitLabel}
      </button>
    </form>
  );
}

export default memo(ContactForm);
