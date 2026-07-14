"use client";

import { useState } from "react";

export function ContactForm({ defaultSubject = "General Enquiry" }: { defaultSubject?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank you for reaching out</h3>
        <p>Your enquiry has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label>
          Full Name
          <input type="text" name="name" required placeholder="Your name" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required placeholder="+91 92899 75453" />
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder="you@email.com" />
        </label>
        <label>
          Subject
          <select name="subject" defaultValue={defaultSubject}>
            <option>General Enquiry</option>
            <option>Dealer Partnership</option>
            <option>Fleet / Corporate</option>
            <option>Investor Relations</option>
            <option>Careers</option>
            <option>Institutional / Campus</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={5} required placeholder="How can we help you?" />
      </label>
      <button type="submit" className="btn btn--primary">
        Send Enquiry
      </button>
    </form>
  );
}
