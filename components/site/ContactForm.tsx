"use client";

import { siteData } from "@/data/site";

export function ContactForm() {
  return (
    <form className="editorial-panel p-4 md:p-5" onSubmit={(event) => event.preventDefault()}>
      <div className="editorial-kicker">Contact form</div>
      <div className="mt-4 grid gap-2.5 md:grid-cols-2">
        <Field label="Name" type="text" placeholder="Your name" />
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Phone / WhatsApp" type="text" placeholder="+33 ..." />
        <Field label="Subject" type="text" placeholder="Tell us the vibe" />
      </div>

      <div className="mt-2.5">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/48">
          Interested in
        </label>
        <select className="w-full border border-white/10 bg-black/[0.2] px-3 py-2.5 outline-none transition focus:border-[var(--accent)]/40">
          {siteData.contact.formInterests.map((interest) => (
            <option key={interest} value={interest} className="bg-black">
              {interest}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-2.5">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/48">
          Message
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your project, your questions or the destination you want to join."
          className="w-full border border-white/10 bg-black/[0.2] px-3 py-2.5 outline-none transition focus:border-[var(--accent)]/40"
        />
      </div>

      <button type="submit" className="button-editorial button-editorial-primary mt-4">
        Send your request
      </button>
    </form>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/48">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-white/10 bg-black/[0.2] px-3 py-2.5 outline-none transition focus:border-[var(--accent)]/40"
      />
    </div>
  );
}
