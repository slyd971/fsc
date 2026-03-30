"use client";

import { siteData } from "@/data/site";

export function ContactForm() {
  return (
    <form className="editorial-panel premium-hover-lift premium-sheen p-3.5 md:p-5" onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="editorial-kicker">Contact form</div>
        <div className="rounded-full border border-white/10 bg-black/24 px-3 py-1.5 text-[9px] uppercase tracking-[0.24em] text-white/42">
          24h reply target
        </div>
      </div>
      <p className="mt-3.5 max-w-md text-xs leading-5 text-white/58 sm:mt-4 sm:text-sm sm:leading-6">
        Leave your destination, your timing and what kind of road you want to join. We will come back with the clearest next step.
      </p>
      <div className="mt-3.5 grid gap-2.5 md:mt-4 md:grid-cols-2">
        <Field label="Name" type="text" placeholder="Your name" />
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Phone / WhatsApp" type="text" placeholder="+33 ..." />
        <Field label="Subject" type="text" placeholder="Tell us the vibe" />
      </div>

      <div className="mt-2.5">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/48">
          Interested in
        </label>
        <select className="form-field w-full px-3 py-2.5 outline-none">
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
          className="form-field w-full px-3 py-2.5 outline-none"
        />
      </div>

      <button type="submit" className="button-editorial button-editorial-primary premium-sheen premium-hover-lift mt-4 sm:mt-5">
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
        className="form-field w-full px-3 py-2.5 outline-none"
      />
    </div>
  );
}
