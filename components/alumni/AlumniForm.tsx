"use client";

import { useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { tinaMark } from "@/components/tina/EditablePage";
import type { AlumniFormContent } from "@/lib/alumni";
import { sendToMailAndWhatsApp, type EnquiryDelivery } from "@/lib/sendEnquiry";

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
  wide,
  field
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  wide?: boolean;
  field?: string;
}) {
  return (
    <label className={wide ? "enquiry-span" : undefined}>
      <span data-tina-field={field}>
        {label}
        {required ? (
          <>
            {" "}
            <RequiredMark />
          </>
        ) : null}
      </span>
      {children}
    </label>
  );
}

function filled(values: Array<string | null | undefined>) {
  return values.filter((value): value is string => Boolean(value));
}

export default function AlumniForm({
  form,
  email,
  whatsapp
}: {
  form: AlumniFormContent;
  email: string;
  whatsapp: string;
}) {
  const [sent, setSent] = useState(false);
  const [delivery, setDelivery] = useState<EnquiryDelivery | null>(null);
  const [gender, setGender] = useState("");
  const [other, setOther] = useState(false);
  const clearing = useRef(false);
  const thisYear = new Date().getFullYear();
  const years = useMemo(
    () => Array.from({ length: thisYear - 1979 }, (_, index) => String(thisYear - index)),
    [thisYear]
  );
  const genders = filled(form.genders);
  const involvement = filled(form.involvement);

  function involveValidity(node: HTMLFormElement) {
    const boxes = [...node.querySelectorAll<HTMLInputElement>('input[name="involve"]')];
    const first = boxes[0];
    if (!first) return;
    const chosen = boxes.some((box) => box.checked);
    first.setCustomValidity(chosen ? "" : form.involveError);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const node = event.currentTarget;
    involveValidity(node);
    if (!node.reportValidity()) return;

    const data = new FormData(node);
    const chosen = data
      .getAll("involve")
      .map(String)
      .filter(Boolean)
      .map((item) => {
        if (item !== "Other") return item;
        const detail = String(data.get("involveOther") ?? "").trim();
        return detail ? `${form.otherLabel} ${detail}` : form.otherLabel;
      });
    const dob = String(data.get("dob") ?? "");
    const body = [
      form.heading,
      "",
      `${form.emailLabel}: ${data.get("email") ?? ""}`,
      `${form.nameLabel}: ${data.get("fullName") ?? ""}`,
      `${form.genderLabel}: ${data.get("gender") || "Not specified"}`,
      `${form.dobLabel}: ${dob || "Not specified"}`,
      `${form.phoneLabel}: ${data.get("phone") ?? ""}`,
      `${form.yearLabel}: ${data.get("graduationYear") ?? ""}`,
      `${form.organisationLabel}: ${data.get("organisation") || "Not specified"}`,
      `${form.roleLabel}: ${data.get("role") || "Not specified"}`,
      `${form.networkLabel}: ${data.get("joinNetwork") || "Not specified"}`,
      `${form.involveLabel} ${chosen.join("; ")}`,
      "",
      `${form.influenceLabel}`,
      String(data.get("influence") ?? ""),
      "",
      `${form.featureLabel}`,
      String(data.get("feature") ?? "")
    ].join("\n");

    if (email && whatsapp) {
      setDelivery(
        sendToMailAndWhatsApp({
          email,
          whatsapp,
          subject: form.heading,
          body
        })
      );
    }

    setSent(true);
    clearing.current = true;
    node.reset();
    setGender("");
    setOther(false);
    clearing.current = false;
  }

  return (
    <form
      className={sent ? "enquiry-card alumni-form is-sent" : "enquiry-card alumni-form"}
      onSubmit={onSubmit}
      onReset={() => {
        if (clearing.current) return;
        setSent(false);
        setDelivery(null);
        setGender("");
        setOther(false);
      }}
      onChange={(event) => {
        const target = event.target;
        if (target instanceof HTMLInputElement && target.name === "involve") {
          involveValidity(event.currentTarget);
        }
      }}
      noValidate
    >
      <header className="enquiry-head">
        <h1 data-tina-field={tinaMark(form, "heading")}>{form.heading}</h1>
        <p data-tina-field={tinaMark(form, "intro")}>{form.intro}</p>
      </header>

      <div className="form-success" role="status">
        <p data-tina-field={tinaMark(form, "successMessage")}>{form.successMessage}</p>
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
        <h3 data-tina-field={tinaMark(form, "detailsHeading")}>{form.detailsHeading}</h3>
        <div className="enquiry-grid">
          <Field label={form.emailLabel} required field={tinaMark(form, "emailLabel")}>
            <input name="email" type="email" required autoComplete="email" placeholder={form.emailPlaceholder} />
          </Field>
          <Field label={form.nameLabel} required field={tinaMark(form, "nameLabel")}>
            <input name="fullName" required autoComplete="name" placeholder={form.namePlaceholder} />
          </Field>
          <div className="enquiry-span alumni-field">
            <span id="alumni-gender" data-tina-field={tinaMark(form, "genderLabel")}>
              {form.genderLabel}
            </span>
            <div className="alumni-gender" role="radiogroup" aria-labelledby="alumni-gender">
              {genders.map((option) => (
                <label className="alumni-option" key={option}>
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={() => setGender(option)}
                  />
                  {option}
                </label>
              ))}
              <button
                className="alumni-clear"
                type="button"
                disabled={!gender}
                onClick={() => setGender("")}
                data-tina-field={tinaMark(form, "clearGenderLabel")}
              >
                {form.clearGenderLabel}
              </button>
            </div>
          </div>
          <Field label={form.dobLabel} field={tinaMark(form, "dobLabel")}>
            <span className="enquiry-date">
              <input name="dob" type="date" autoComplete="bday" />
            </span>
          </Field>
          <Field label={form.phoneLabel} required field={tinaMark(form, "phoneLabel")}>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder={form.phonePlaceholder}
              pattern="[0-9+\s()-]{10,16}"
              title="Enter a valid mobile number"
            />
          </Field>
          <Field label={form.yearLabel} required field={tinaMark(form, "yearLabel")}>
            <select name="graduationYear" required defaultValue="">
              <option value="">{form.yearPlaceholder}</option>
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </Field>
        </div>
      </section>

      <section className="enquiry-block">
        <h3>
          <span data-tina-field={tinaMark(form, "backgroundHeading")}>{form.backgroundHeading}</span>
          <span className="alumni-sub" data-tina-field={tinaMark(form, "backgroundNote")}>
            {form.backgroundNote}
          </span>
        </h3>
        <div className="enquiry-grid">
          <Field label={form.organisationLabel} field={tinaMark(form, "organisationLabel")}>
            <input name="organisation" placeholder={form.organisationPlaceholder} />
          </Field>
          <Field label={form.roleLabel} field={tinaMark(form, "roleLabel")}>
            <input name="role" placeholder={form.rolePlaceholder} />
          </Field>
          <div className="enquiry-span alumni-field">
            <span id="alumni-network" data-tina-field={tinaMark(form, "networkLabel")}>
              {form.networkLabel}
            </span>
            <div className="alumni-yesno" role="radiogroup" aria-labelledby="alumni-network">
              <label className="alumni-option">
                <input type="radio" name="joinNetwork" value={form.yesLabel} />
                <span data-tina-field={tinaMark(form, "yesLabel")}>{form.yesLabel}</span>
              </label>
              <label className="alumni-option">
                <input type="radio" name="joinNetwork" value={form.noLabel} />
                <span data-tina-field={tinaMark(form, "noLabel")}>{form.noLabel}</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="enquiry-block">
        <h3 data-tina-field={tinaMark(form, "engagementHeading")}>{form.engagementHeading}</h3>
        <div className="enquiry-grid">
          <div className="enquiry-span alumni-field">
            <span id="alumni-involve" data-tina-field={tinaMark(form, "involveLabel")}>
              {form.involveLabel} <RequiredMark />
            </span>
            <div className="alumni-checks" role="group" aria-labelledby="alumni-involve" data-tina-field={tinaMark(form, "involvement")}>
              {involvement.map((item) => (
                <label className="alumni-check" key={item}>
                  <input type="checkbox" name="involve" value={item} />
                  {item}
                </label>
              ))}
              <div className={other ? "alumni-check alumni-check-other is-on" : "alumni-check alumni-check-other"}>
                <label>
                  <input
                    type="checkbox"
                    name="involve"
                    value="Other"
                    checked={other}
                    onChange={(event) => {
                      setOther(event.target.checked);
                      if (!event.target.checked) {
                        const input = event.currentTarget.form?.elements.namedItem("involveOther");
                        if (input instanceof HTMLInputElement) input.value = "";
                      }
                    }}
                  />
                  <span data-tina-field={tinaMark(form, "otherLabel")}>{form.otherLabel}</span>
                </label>
                <input
                  className="alumni-other-input"
                  name="involveOther"
                  disabled={!other}
                  required={other}
                  placeholder={form.otherPlaceholder}
                  aria-label={form.otherPlaceholder}
                />
              </div>
            </div>
          </div>
          <Field label={form.influenceLabel} required wide field={tinaMark(form, "influenceLabel")}>
            <textarea name="influence" required rows={4} placeholder={form.influencePlaceholder} />
          </Field>
          <Field label={form.featureLabel} required wide field={tinaMark(form, "featureLabel")}>
            <textarea name="feature" required rows={4} placeholder={form.featurePlaceholder} />
          </Field>
        </div>
      </section>

      <div className="alumni-actions">
        <button className="btn btn--gold contact-submit alumni-submit" type="submit" data-tina-field={tinaMark(form, "submitLabel")}>
          {form.submitLabel}
        </button>
        <button className="btn recruit-reset" type="reset" data-tina-field={tinaMark(form, "resetLabel")}>
          {form.resetLabel}
        </button>
      </div>
    </form>
  );
}
