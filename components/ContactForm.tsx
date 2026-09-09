"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSent(true);
    form.reset();
  }

  return (
    <form className={sent ? "form is-sent" : "form"} onSubmit={onSubmit} noValidate>
      <div className="form-success" role="status">
        Thank you. We’ll be in touch shortly.
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
        I’m interested in
        <select name="interest" required defaultValue="">
          <option value="">Select a division</option>
          <option>Lower School (JK–5)</option>
          <option>Middle School (6–8)</option>
          <option>Upper School (9–12)</option>
          <option>A campus tour</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          placeholder="Tell us about your child or the visit you’d like."
        />
      </label>
      <button className="btn btn--gold" type="submit">
        Send message
      </button>
    </form>
  );
}
