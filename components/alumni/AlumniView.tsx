"use client";

import { useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import AboutReveal from "@/components/about/AboutReveal";
import AlumniStories from "@/components/alumni/AlumniStories";
import PageBanner from "@/components/PageBanner";
import { sendToMailAndWhatsApp, type EnquiryDelivery } from "@/lib/sendEnquiry";

const involvement = [
  "Offer an Internship / Job Opportunities",
  "Guest Lecture - share your knowledge",
  "Financial support for school infrastructure",
  "Sponsor a student, offer scholarships or awards"
];

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

function involveValidity(form: HTMLFormElement) {
  const boxes = [...form.querySelectorAll<HTMLInputElement>('input[name="involve"]')];
  const first = boxes[0];
  if (!first) return;
  const chosen = boxes.some((box) => box.checked);
  first.setCustomValidity(chosen ? "" : "Choose at least one way you would like to be involved.");
}

export default function AlumniView({ email, whatsapp }: { email: string; whatsapp: string }) {
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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    involveValidity(form);
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const chosen = data
      .getAll("involve")
      .map(String)
      .filter(Boolean)
      .map((item) => {
        if (item !== "Other") return item;
        const detail = String(data.get("involveOther") ?? "").trim();
        return detail ? `Other: ${detail}` : "Other";
      });
    const dob = String(data.get("dob") ?? "");
    const body = [
      "Lawrence School Alumni - networking & engagement form",
      "",
      `Email: ${data.get("email") ?? ""}`,
      `Full name: ${data.get("fullName") ?? ""}`,
      `Gender: ${data.get("gender") || "Not specified"}`,
      `Date of birth: ${dob || "Not specified"}`,
      `Mobile number: ${data.get("phone") ?? ""}`,
      `Year of graduation (10th standard): ${data.get("graduationYear") ?? ""}`,
      `Organisation / company: ${data.get("organisation") || "Not specified"}`,
      `Role / job description: ${data.get("role") || "Not specified"}`,
      `Join the alumni network: ${data.get("joinNetwork") || "Not specified"}`,
      `How they would like to be involved: ${chosen.join("; ")}`,
      "",
      "How Lawrence School influenced them:",
      String(data.get("influence") ?? ""),
      "",
      "What they would like featured on the website:",
      String(data.get("feature") ?? "")
    ].join("\n");

    if (email && whatsapp) {
      setDelivery(
        sendToMailAndWhatsApp({
          email,
          whatsapp,
          subject: "Lawrence School Alumni - networking & engagement form",
          body
        })
      );
    }

    setSent(true);
    clearing.current = true;
    form.reset();
    setGender("");
    setOther(false);
    clearing.current = false;
  }

  return (
    <div className="alumni-page">
      <AboutReveal>
        <PageBanner
          src="/images/about/bb-assembly-1.png"
          alt="Lawrence High School students gathered together in assembly"
          kicker="Alumni"
          title="Once a *Lawrencian*, always a Lawrencian."
          lede="Come back to the community that shaped you, and tell us how you would like to stay involved."
          className="page-banner-title"
        />
      </AboutReveal>

      <AlumniStories />

      <section className="alumni-main" id="alumni-form">
        <div className="wrap">
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
              <h2>Lawrence School Alumni - networking & engagement form</h2>
              <p>Share where life has taken you, and the ways you would like to give back to Lawrence.</p>
            </header>

            <div className="form-success" role="status">
              <p>Thank you. Your details are with the school, and we will be in touch.</p>
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
              <h3>Your details</h3>
              <div className="enquiry-grid">
                <Field label="Email" required>
                  <input name="email" type="email" required autoComplete="email" placeholder="name@email.com" />
                </Field>
                <Field label="Full Name" required>
                  <input name="fullName" required autoComplete="name" placeholder="Your full name" />
                </Field>
                <div className="enquiry-span alumni-field">
                  <span id="alumni-gender">Gender</span>
                  <div className="alumni-gender" role="radiogroup" aria-labelledby="alumni-gender">
                    <label className="alumni-option">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={() => setGender("Male")}
                      />
                      Male
                    </label>
                    <label className="alumni-option">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={() => setGender("Female")}
                      />
                      Female
                    </label>
                    <button
                      className="alumni-clear"
                      type="button"
                      disabled={!gender}
                      onClick={() => setGender("")}
                    >
                      Clear selection
                    </button>
                  </div>
                </div>
                <Field label="Date of Birth">
                  <span className="enquiry-date">
                    <input name="dob" type="date" autoComplete="bday" />
                  </span>
                </Field>
                <Field label="Mobile Number" required>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="10-digit mobile number"
                    pattern="[0-9+\s()-]{10,16}"
                    title="Enter a valid mobile number"
                  />
                </Field>
                <Field label="Year of Graduation (10th Standard)" required>
                  <select name="graduationYear" required defaultValue="">
                    <option value="">Select year</option>
                    {years.map((year) => (
                      <option key={year}>{year}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </section>

            <section className="enquiry-block">
              <h3>
                What do you do (professional background)
                <span className="alumni-sub">(Or education background)</span>
              </h3>
              <div className="enquiry-grid">
                <Field label="Organisation / Company Name">
                  <input name="organisation" placeholder="School, college, or company" />
                </Field>
                <Field label="Your Role / job description">
                  <input name="role" placeholder="Your role, or what you are studying" />
                </Field>
                <div className="enquiry-span alumni-field">
                  <span id="alumni-network">Would you like to join the Lawrence school alumni network</span>
                  <div className="alumni-yesno" role="radiogroup" aria-labelledby="alumni-network">
                    <label className="alumni-option">
                      <input type="radio" name="joinNetwork" value="Yes" />
                      Yes
                    </label>
                    <label className="alumni-option">
                      <input type="radio" name="joinNetwork" value="No" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="enquiry-block">
              <h3>Engagement & Networking</h3>
              <div className="enquiry-grid">
                <div className="enquiry-span alumni-field">
                  <span id="alumni-involve">
                    How would you like to be involved with the school? <RequiredMark />
                  </span>
                  <div className="alumni-checks" role="group" aria-labelledby="alumni-involve">
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
                        Other:
                      </label>
                      <input
                        className="alumni-other-input"
                        name="involveOther"
                        disabled={!other}
                        required={other}
                        placeholder="Please specify"
                        aria-label="Other way to be involved"
                      />
                    </div>
                  </div>
                </div>
                <Field label="How did Lawrence school influence you?" required wide>
                  <textarea name="influence" required rows={4} placeholder="Your answer" />
                </Field>
                <Field label="What would you like to be featured on our website?" required wide>
                  <textarea name="feature" required rows={4} placeholder="Your answer" />
                </Field>
              </div>
            </section>

            <div className="alumni-actions">
              <button className="btn btn--gold contact-submit alumni-submit" type="submit">
                Submit
              </button>
              <button className="btn recruit-reset" type="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
