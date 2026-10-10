"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import PageBanner from "@/components/PageBanner";
import type { RecruitmentContent } from "@/lib/recruitment";
import { sendFormToInbox } from "@/lib/sendEnquiry";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";

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

export default function RecruitmentView({ content: initial }: { content: RecruitmentContent }) {
  const content = useEditable("recruitment", initial);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const clearing = useRef(false);
  const thisYear = new Date().getFullYear();
  const days = useMemo(() => Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, "0")), []);
  const months = useMemo(() => Array.from({ length: 12 }, (_, index) => String(index + 1).padStart(2, "0")), []);
  const years = useMemo(
    () => Array.from({ length: 53 }, (_, index) => String(thisYear - 18 - index)),
    [thisYear]
  );
  const positions = (content.positions ?? []).filter(Boolean);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
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
    const photo = data.get("photo");
    const payslip = data.get("payslip");
    const resume = data.get("resume");
    const files = [photo, payslip, resume].filter((file): file is File => file instanceof File && file.size > 0);
    if (files.some((file) => file.size > 8 * 1024 * 1024) || files.reduce((total, file) => total + file.size, 0) > 10 * 1024 * 1024) {
      setError("Attachments must be 10 MB or smaller in total. Please use smaller files and try again.");
      return;
    }
    const value = (key: string) => String(data.get(key) ?? "");
    setSending(true);
    setError("");
    const result = await sendFormToInbox({
      email: content.applicationEmail?.trim() || "lawrencestaffrecruitment@gmail.com",
      subject: `Staff recruitment — ${value("name")}`,
      replyTo: value("email"),
      name: value("name"),
      honey: value("hp"),
      fields: [
        ["Name", value("name")],
        ["Date of birth", `${day.value}/${month.value}/${year.value}`],
        ["Email", value("email")],
        ["Phone", value("phone")],
        ["Address", value("address")],
        ["Subject preferred", value("subject")],
        ["Position", value("position")],
        ["Education", value("education")],
        ["Experience", value("experience") || "Not provided"]
      ],
      files: [
        ...(photo instanceof File && photo.size > 0 ? [{ label: "Profile photo", file: photo }] : []),
        ...(payslip instanceof File && payslip.size > 0 ? [{ label: "Last pay slip", file: payslip }] : []),
        ...(resume instanceof File && resume.size > 0 ? [{ label: "Updated resume", file: resume }] : [])
      ]
    });
    setSending(false);
    if (!result.ok) {
      setError(
        result.offline
          ? "We could not send your application. Please check your connection and try again."
          : "We could not send your application. Please try again, or call the school office."
      );
      return;
    }
    setSent(true);
    clearing.current = true;
    form.reset();
    clearing.current = false;
  }

  return (
    <div className="recruit-page">
      <AboutReveal>
        <PageBanner
          src={content.heroImage}
          alt={content.heroImageAlt}
          title={content.title}
          lede={content.lede}
          fit="cover"
          className="page-banner-title"
          fields={{
            image: tinaMark(content, "heroImage"),
            title: tinaMark(content, "title"),
            lede: tinaMark(content, "lede")
          }}
        />
      </AboutReveal>

      <section className="recruit-main">
        <div className="wrap">
          <div className="recruit-card">
            <h2>
              <span className="recruit-heading-rule" aria-hidden="true" />
              <span data-tina-field={tinaMark(content, "formHeading")}>{content.formHeading}</span>
            </h2>
            <form
              className={sent ? "recruit-form is-sent" : "recruit-form"}
              onSubmit={onSubmit}
              onReset={() => {
                if (clearing.current) return;
                setSent(false);
                setError("");
              }}
              noValidate
            >
              <div className="form-success recruit-span" role="status">
                <p data-tina-field={tinaMark(content, "successMessage")}>{content.successMessage}</p>
              </div>
              <div className="recruit-honey" aria-hidden="true">
                <label>
                  Leave blank
                  <input name="hp" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "nameLabel")}>{content.nameLabel}</span> <RequiredMark />
                </span>
                <input name="name" required autoComplete="name" placeholder={content.namePlaceholder} />
              </label>
              <div className="recruit-dob-field">
                <span>
                  <span data-tina-field={tinaMark(content, "dobLabel")}>{content.dobLabel}</span> <RequiredMark />
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
                  <span data-tina-field={tinaMark(content, "emailLabel")}>{content.emailLabel}</span> <RequiredMark />
                </span>
                <input name="email" type="email" required autoComplete="email" placeholder={content.emailPlaceholder} />
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "phoneLabel")}>{content.phoneLabel}</span> <RequiredMark />
                </span>
                <input name="phone" type="tel" required autoComplete="tel" placeholder={content.phonePlaceholder} />
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "addressLabel")}>{content.addressLabel}</span> <RequiredMark />
                </span>
                <input name="address" required autoComplete="street-address" placeholder={content.addressPlaceholder} />
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "subjectLabel")}>{content.subjectLabel}</span> <RequiredMark />
                </span>
                <input name="subject" required placeholder={content.subjectPlaceholder} />
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "positionLabel")}>{content.positionLabel}</span> <RequiredMark />
                </span>
                <select name="position" required defaultValue="">
                  <option value="">{content.positionPlaceholder}</option>
                  {positions.map((position) => (
                    <option key={position}>{position}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "educationLabel")}>{content.educationLabel}</span> <RequiredMark />
                </span>
                <input name="education" required placeholder={content.educationPlaceholder} />
              </label>
              <label>
                <span data-tina-field={tinaMark(content, "experienceLabel")}>{content.experienceLabel}</span>
                <input name="experience" placeholder={content.experiencePlaceholder} />
              </label>
              <label className="recruit-file">
                <span>
                  <span data-tina-field={tinaMark(content, "photoLabel")}>{content.photoLabel}</span> <RequiredMark />
                </span>
                <input name="photo" type="file" accept="image/*" required />
              </label>
              <label className="recruit-file">
                <span data-tina-field={tinaMark(content, "payslipLabel")}>{content.payslipLabel}</span>
                <input name="payslip" type="file" accept="image/*,.pdf" />
              </label>
              <label className="recruit-file">
                <span>
                  <span data-tina-field={tinaMark(content, "resumeLabel")}>{content.resumeLabel}</span> <RequiredMark />
                </span>
                <input name="resume" type="file" accept=".pdf,.doc,.docx,image/*" required />
              </label>
              {error ? (
                <p className="recruit-error" role="alert">
                  {error}
                </p>
              ) : null}
              <div className="recruit-actions">
                <button className="btn btn--gold contact-submit" type="submit" disabled={sending} aria-busy={sending}>
                  {sending ? (
                    "Sending..."
                  ) : (
                    <span data-tina-field={tinaMark(content, "submitLabel")}>{content.submitLabel}</span>
                  )}
                </button>
                <button className="btn recruit-reset" type="reset">
                  <span data-tina-field={tinaMark(content, "resetLabel")}>{content.resetLabel}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
