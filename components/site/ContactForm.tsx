"use client";

import { siteData } from "@/data/site";

export function ContactForm() {
  return (
    <form className="editorial-panel premium-hover-lift premium-sheen p-3.5 md:p-5" onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="editorial-kicker">Booking request</div>
        <div className="theme-border theme-panel-dark text-muted rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.24em]">
          Crew reply
        </div>
      </div>
      <p className="text-muted mt-3.5 max-w-md text-xs leading-5 sm:mt-4 sm:text-sm sm:leading-6">
        Leave your destination, timing and booking intent. We will come back with the clearest next step for your road.
      </p>
      <div className="mt-3.5 grid gap-2.5 md:mt-4 md:grid-cols-2">
        <Field label="Name" type="text" placeholder="Your full name" />
        <Field label="Email" type="email" placeholder="name@email.com" />
        <Field label="Phone / WhatsApp" type="text" placeholder="Best number to reach you" />
        <Field label="Subject" type="text" placeholder="Road, trip or booking request" />
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
          placeholder="Tell us what road you want to join, your dates, and anything we should know before replying."
          className="form-field w-full px-3 py-2.5 outline-none"
        />
      </div>

      <button type="submit" className="button-editorial button-editorial-primary premium-sheen premium-hover-lift mt-4 sm:mt-5">
        Request your spot
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
