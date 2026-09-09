"use client";

import { memo, useCallback, useState, type FormEvent } from "react";

function ContactForm({
  submitLabel = "Send message"
}: {
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSent(true);
    form.reset();
  }, []);

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
      <button className="btn btn--blue" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}

export default memo(ContactForm);
