"use client";

import { memo, useCallback, useState, type FormEvent } from "react";
import type { ContactContent } from "@/lib/contact";
import { sendToMailAndWhatsApp, type EnquiryDelivery } from "@/lib/sendEnquiry";

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
  toEmail,
  toWhatsapp
}: {
  submitLabel?: string;
  submitField?: string;
  message?: ContactMessageFields;
  toEmail?: string;
  toWhatsapp?: string;
}) {
  const [sent, setSent] = useState(false);
  const [delivery, setDelivery] = useState<EnquiryDelivery | null>(null);

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (message && toEmail && toWhatsapp) {
      const data = new FormData(form);
      const body = [
        "Lawrence High School website enquiry",
        "",
        `Name: ${data.get("name") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Phone: ${data.get("phone") ?? ""}`,
        `Subject: ${data.get("subject") ?? ""}`,
        "",
        String(data.get("message") ?? "")
      ].join("\n");
      setDelivery(
        sendToMailAndWhatsApp({
          email: toEmail,
          whatsapp: toWhatsapp,
          subject: "Website enquiry",
          body
        })
      );
    }
    setSent(true);
    form.reset();
  }, [message, toEmail, toWhatsapp]);

  if (message) {
    const subjects = message.subjects.filter(Boolean);
    return (
      <form className={sent ? "form form--message is-sent" : "form form--message"} onSubmit={onSubmit} noValidate>
        <div className="form-success form-span" role="status">
          <p>{message.successMessage}</p>
          {delivery ? (
            <p className="form-delivery">
              <a href={delivery.mail}>Open email</a>
              <a href={delivery.whatsapp} target="_blank" rel="noreferrer">
                Open WhatsApp
              </a>
            </p>
          ) : null}
        </div>
        <label>
          <span>
            {message.nameLabel} <RequiredMark />
          </span>
          <input name="name" required autoComplete="name" placeholder={message.namePlaceholder} />
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
          <input name="phone" type="tel" required autoComplete="tel" placeholder={message.phonePlaceholder} />
        </label>
        <label>
          <span>
            {message.subjectLabel} <RequiredMark />
          </span>
          <select name="subject" required defaultValue="">
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
          <textarea name="message" required placeholder={message.messagePlaceholder} />
        </label>
        <button className="btn btn--gold contact-submit form-span" type="submit" data-tina-field={submitField}>
          {message.submitLabel} <span aria-hidden="true">→</span>
        </button>
      </form>
    );
  }

  return (
    <form className={sent ? "form is-sent" : "form"} onSubmit={onSubmit} noValidate>
      <div className="form-success" role="status">
        Thank you. The Community Relations team will be in touch shortly.
      </div>
      <label>
        Full name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        I’m interested in
        <select name="interest" required defaultValue="">
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
        <textarea name="message" required placeholder="Tell us about your child or your question." />
      </label>
      <button className="btn btn--blue" type="submit" data-tina-field={submitField}>
        {submitLabel}
      </button>
    </form>
  );
}

export default memo(ContactForm);
