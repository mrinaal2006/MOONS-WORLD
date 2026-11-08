"use client";
import { useState } from "react";
import { services, site } from "@/data/site";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text =
      `Hello ${site.name}, I would like to enquire.\n` +
      `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nInterested in: ${f.get("service")}\n` +
      (f.get("message") ? `Message: ${f.get("message")}` : "");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="form card" onSubmit={onSubmit}>
      <h3>Request a call back</h3>
      <input name="name" placeholder="Student name" required />
      <input name="phone" type="tel" placeholder="Phone number" pattern="[0-9+ ]{10,15}" required />
      <select name="service" defaultValue="" required>
        <option value="" disabled>Interested in…</option>
        {services.map((s) => <option key={s.slug}>{s.title}</option>)}
      </select>
      <textarea name="message" rows={3} placeholder="Message (optional)" />
      <button className="btn btn-primary" type="submit">Send Enquiry</button>
      {sent && <p className="ok">Thank you! We&apos;ll get back to you shortly.</p>}
    </form>
  );
}
