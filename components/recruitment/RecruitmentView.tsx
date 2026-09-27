"use client";

import Image from "next/image";
import { useMemo, useRef, useState, type FormEvent } from "react";
import type { RecruitmentContent } from "@/lib/recruitment";
import { attachedFileName, sendToMailAndWhatsApp, type EnquiryDelivery } from "@/lib/sendEnquiry";
import { useEditable } from "@/components/tina/EditablePage";

function Emphasised({ text }: { text: string }) {
  return text.split(/(\*[^*]+\*)/g).filter(Boolean).map((piece, index) =>
    piece.startsWith("*") && piece.endsWith("*") ? (
      <span className="contact-accent" key={index}>
        {piece.slice(1, -1)}
      </span>
    ) : (
      piece
    )
  );
}

function RequiredMark() {
  return (
    <abbr className="form-req" title="required">
      *
    </abbr>
  );
}

function validDate(day: number, month: number, year: number) {
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

export default function RecruitmentView({
  content: initial,
  email,
  whatsapp
}: {
  content: RecruitmentContent;
  email: string;
  whatsapp: string;
}) {
  const content = useEditable("recruitment", initial);
  const [sent, setSent] = useState(false);
  const [delivery, setDelivery] = useState<EnquiryDelivery | null>(null);
  const clearing = useRef(false);
  const thisYear = new Date().getFullYear();
  const days = useMemo(() => Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, "0")), []);
  const months = useMemo(() => Array.from({ length: 12 }, (_, index) => String(index + 1).padStart(2, "0")), []);
  const years = useMemo(
    () => Array.from({ length: 53 }, (_, index) => String(thisYear - 18 - index)),
    [thisYear]
  );
  const positions = (content.positions ?? []).filter(Boolean);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const day = form.elements.namedItem("dobDay") as HTMLSelectElement;
    const month = form.elements.namedItem("dobMonth") as HTMLSelectElement;
    const year = form.elements.namedItem("dobYear") as HTMLSelectElement;
    day.setCustomValidity("");
    if (!form.reportValidity()) return;
    if (!validDate(Number(day.value), Number(month.value), Number(year.value))) {
      day.setCustomValidity("Enter a valid date of birth.");
      day.reportValidity();
      return;
    }
    const data = new FormData(form);
    const body = [
      "Staff recruitment application for Lawrence High School",
      "",
      `Name: ${data.get("name") ?? ""}`,
      `Date of birth: ${day.value}/${month.value}/${year.value}`,
      `Email: ${data.get("email") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Address: ${data.get("address") ?? ""}`,
      `Subject preferred: ${data.get("subject") ?? ""}`,
      `Position: ${data.get("position") ?? ""}`,
      `Education: ${data.get("education") || "Not provided"}`,
      `Experience: ${data.get("experience") || "Not provided"}`,
      `Profile photo: ${attachedFileName(data.get("photo"))}`,
      `Last pay slip: ${attachedFileName(data.get("payslip"))}`,
      `Updated resume: ${attachedFileName(data.get("resume"))}`,
      "",
      "Please attach the listed files in WhatsApp before sending."
    ].join("\n");
    setDelivery(
      sendToMailAndWhatsApp({
        email,
        whatsapp,
        subject: "Staff recruitment application",
        body
      })
    );
    setSent(true);
    clearing.current = true;
    form.reset();
    clearing.current = false;
  }

  return (
    <div className="recruit-page">
      <section className="recruit-hero">
        <Image
          src={content.heroImage}
          alt={content.heroImageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="recruit-hero-copy">
          <span className="recruit-hero-rule" aria-hidden="true" />
          <h1>
            <Emphasised text={content.title} />
          </h1>
          <p>{content.lede}</p>
        </div>
      </section>

      <section className="recruit-main">
        <div className="wrap">
          <div className="recruit-card">
            <h2>
              <span className="recruit-heading-rule" aria-hidden="true" />
              {content.formHeading}
            </h2>
            <form
              className={sent ? "recruit-form is-sent" : "recruit-form"}
              onSubmit={onSubmit}
              onReset={() => {
                if (clearing.current) return;
                setSent(false);
                setDelivery(null);
              }}
              noValidate
            >
              <div className="form-success recruit-span" role="status">
                <p>{content.successMessage}</p>
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
                  {content.nameLabel} <RequiredMark />
                </span>
                <input name="name" required autoComplete="name" placeholder={content.namePlaceholder} />
              </label>
              <div className="recruit-dob-field">
                <span>
                  {content.dobLabel} <RequiredMark />
                </span>
                <div className="recruit-dob">
                <select name="dobDay" required defaultValue="" aria-label="Day">
                  <option value="">DD</option>
                  {days.map((day) => (
                    <option key={day}>{day}</option>
                  ))}
                </select>
                <select name="dobMonth" required defaultValue="" aria-label="Month">
                  <option value="">MM</option>
                  {months.map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </select>
                <select name="dobYear" required defaultValue="" aria-label="Year">
                  <option value="">YYYY</option>
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
                </div>
              </div>
              <label>
                <span>
                  {content.emailLabel} <RequiredMark />
                </span>
                <input name="email" type="email" required autoComplete="email" placeholder={content.emailPlaceholder} />
              </label>
              <label>
                <span>
                  {content.phoneLabel} <RequiredMark />
                </span>
                <input name="phone" type="tel" required autoComplete="tel" placeholder={content.phonePlaceholder} />
              </label>
              <label>
                <span>
                  {content.addressLabel} <RequiredMark />
                </span>
                <input name="address" required autoComplete="street-address" placeholder={content.addressPlaceholder} />
              </label>
              <label>
                <span>
                  {content.subjectLabel} <RequiredMark />
                </span>
                <input name="subject" required placeholder={content.subjectPlaceholder} />
              </label>
              <label>
                <span>
                  {content.positionLabel} <RequiredMark />
                </span>
                <select name="position" required defaultValue="">
                  <option value="">{content.positionPlaceholder}</option>
                  {positions.map((position) => (
                    <option key={position}>{position}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>{content.educationLabel}</span>
                <input name="education" placeholder={content.educationPlaceholder} />
              </label>
              <label>
                <span>{content.experienceLabel}</span>
                <input name="experience" placeholder={content.experiencePlaceholder} />
              </label>
              <label className="recruit-file">
                <span>{content.photoLabel}</span>
                <input name="photo" type="file" accept="image/*" />
              </label>
              <label className="recruit-file">
                <span>{content.payslipLabel}</span>
                <input name="payslip" type="file" accept="image/*,.pdf" />
              </label>
              <label className="recruit-file">
                <span>{content.resumeLabel}</span>
                <input name="resume" type="file" accept=".pdf,.doc,.docx,image/*" />
              </label>
              <div className="recruit-actions">
                <button className="btn btn--gold contact-submit" type="submit">
                  {content.submitLabel}
                </button>
                <button className="btn recruit-reset" type="reset">
                  {content.resetLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
