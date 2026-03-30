"use client";

import { siteData } from "@/data/site";
import { siteDataEnSeed } from "@/data/site-en-seed";
import type { Locale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

export function ContactForm({
  locale = "fr",
  interests,
}: {
  locale?: Locale;
  interests?: readonly string[];
}) {
  const copy = getUiCopy(locale).contactForm;
  const formInterests = interests ?? (locale === "en" ? siteDataEnSeed.contact.formInterests : siteData.contact.formInterests);

  return (
    <form className="editorial-panel premium-hover-lift premium-sheen p-3.5 md:p-5" onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="editorial-kicker">{copy.kicker}</div>
        <div className="theme-border theme-panel-dark text-muted rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.24em]">
          {copy.reply}
        </div>
      </div>
      <p className="text-muted mt-3.5 max-w-md text-xs leading-5 sm:mt-4 sm:text-sm sm:leading-6">
        {copy.intro}
      </p>
      <div className="mt-3.5 grid gap-2.5 md:mt-4 md:grid-cols-2">
        <Field label={copy.name} type="text" placeholder={copy.fullName} />
        <Field label="Email" type="email" placeholder="name@email.com" />
        <Field label={copy.phone} type="text" placeholder={copy.bestNumber} />
        <Field label={copy.subject} type="text" placeholder={copy.subjectPlaceholder} />
      </div>

      <div className="mt-2.5">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/48">
          {copy.interestedIn}
        </label>
        <select className="form-field w-full px-3 py-2.5 outline-none">
          {formInterests.map((interest) => (
            <option key={interest} value={interest} className="bg-black">
              {interest}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-2.5">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/48">
          {copy.message}
        </label>
        <textarea
          rows={3}
          placeholder={copy.messagePlaceholder}
          className="form-field w-full px-3 py-2.5 outline-none"
        />
      </div>

      <button type="submit" className="button-editorial button-editorial-primary premium-sheen premium-hover-lift mt-4 sm:mt-5">
        {copy.cta}
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
