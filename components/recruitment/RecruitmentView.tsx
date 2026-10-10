"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import PageBanner from "@/components/PageBanner";
import type { RecruitmentContent } from "@/lib/recruitment";
import { tinaMark, useEditable } from "@/components/tina/EditablePage";

function RequiredMark() {
  return (
    <abbr className="form-req" title="required">
      *
    </abbr>
  );
}

const imageAccept =
  "image/*,.png,.jpg,.jpeg,.jpe,.webp,.gif,.bmp,.heic,.heif,.tif,.tiff,.avif,.svg,image/png,image/jpeg,image/webp,image/gif,image/bmp,image/heic,image/heif,image/tiff,image/avif,image/svg+xml";
const documentAccept =
  "image/*,.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function validDate(day: number, month: number, year: number) {
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

export default function RecruitmentView({ content: initial }: { content: RecruitmentContent }) {
  const content = useEditable("recruitment", initial);
  const [sent, setSent] = useState(false);
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
  const inbox = content.applicationEmail?.trim() || "lawrencestaffrecruitment@gmail.com";

  useEffect(() => {
    const sentFlag = new URLSearchParams(window.location.search).get("sent");
    if (sentFlag === "1") setSent(true);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const day = form.elements.namedItem("dobDay") as HTMLSelectElement;
    const month = form.elements.namedItem("dobMonth") as HTMLSelectElement;
    const year = form.elements.namedItem("dobYear") as HTMLSelectElement;
    day.setCustomValidity("");
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }
    if (!validDate(Number(day.value), Number(month.value), Number(year.value))) {
      event.preventDefault();
      day.setCustomValidity("Enter a valid date of birth.");
      day.reportValidity();
      return;
    }
    const files = ["profile_photo", "payslip", "resume"].flatMap((name) => {
      const value = form.elements.namedItem(name);
      return value instanceof HTMLInputElement && value.files?.[0] ? [value.files[0]] : [];
    });
    if (files.some((file) => file.size > 8 * 1024 * 1024) || files.reduce((total, file) => total + file.size, 0) > 10 * 1024 * 1024) {
      event.preventDefault();
      setError("Attachments must be 10 MB or smaller in total. Please use smaller files and try again.");
      return;
    }
    const applicant = (form.elements.namedItem("Name") as HTMLInputElement).value;
    const applicantEmail = (form.elements.namedItem("email") as HTMLInputElement).value;
    const honey = (form.elements.namedItem("hp") as HTMLInputElement).value.trim();
    (form.elements.namedItem("_subject") as HTMLInputElement).value = `Staff recruitment — ${applicant}`;
    (form.elements.namedItem("_replyto") as HTMLInputElement).value = applicantEmail;
    (form.elements.namedItem("_next") as HTMLInputElement).value = `${window.location.origin}/recruitment?sent=1`;
    (form.elements.namedItem("Date_of_birth") as HTMLInputElement).value = `${day.value}/${month.value}/${year.value}`;
    const honeyField = form.elements.namedItem("_honey") as HTMLInputElement;
    honeyField.disabled = !honey;
    honeyField.value = honey;
    day.disabled = true;
    month.disabled = true;
    year.disabled = true;
    (form.elements.namedItem("hp") as HTMLInputElement).disabled = true;
    form.enctype = "multipart/form-data";
    form.encoding = "multipart/form-data";
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
              action={`https://formsubmit.co/${encodeURIComponent(inbox)}`}
              method="POST"
              encType="multipart/form-data"
              onSubmit={onSubmit}
              onReset={() => {
                if (clearing.current) return;
                setSent(false);
                setError("");
              }}
              noValidate
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" defaultValue="" />
              <input type="hidden" name="_replyto" defaultValue="" />
              <input type="hidden" name="_next" defaultValue="" />
              <input type="hidden" name="Date_of_birth" defaultValue="" />
              <input type="hidden" name="_honey" defaultValue="" />
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
                <input name="Name" required autoComplete="name" placeholder={content.namePlaceholder} />
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
                <input name="Phone" type="tel" required autoComplete="tel" placeholder={content.phonePlaceholder} />
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "addressLabel")}>{content.addressLabel}</span> <RequiredMark />
                </span>
                <input name="Address" required autoComplete="street-address" placeholder={content.addressPlaceholder} />
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "subjectLabel")}>{content.subjectLabel}</span> <RequiredMark />
                </span>
                <input name="Subject preferred" required placeholder={content.subjectPlaceholder} />
              </label>
              <label>
                <span>
                  <span data-tina-field={tinaMark(content, "positionLabel")}>{content.positionLabel}</span> <RequiredMark />
                </span>
                <select name="Position" required defaultValue="">
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
                <input name="Education" required placeholder={content.educationPlaceholder} />
              </label>
              <label>
                <span data-tina-field={tinaMark(content, "experienceLabel")}>{content.experienceLabel}</span>
                <input name="Experience" placeholder={content.experiencePlaceholder} />
              </label>
              <label className="recruit-file">
                <span>
                  <span data-tina-field={tinaMark(content, "photoLabel")}>{content.photoLabel}</span> <RequiredMark />
                </span>
                <input name="profile_photo" type="file" accept={imageAccept} required />
              </label>
              <label className="recruit-file">
                <span data-tina-field={tinaMark(content, "payslipLabel")}>{content.payslipLabel}</span>
                <input name="payslip" type="file" accept={documentAccept} />
              </label>
              <label className="recruit-file">
                <span>
                  <span data-tina-field={tinaMark(content, "resumeLabel")}>{content.resumeLabel}</span> <RequiredMark />
                </span>
                <input name="resume" type="file" accept={documentAccept} required />
              </label>
              {error ? (
                <p className="recruit-error" role="alert">
                  {error}
                </p>
              ) : null}
              <div className="recruit-actions">
                <button className="btn btn--gold contact-submit" type="submit">
                  <span data-tina-field={tinaMark(content, "submitLabel")}>{content.submitLabel}</span>
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
