"use client";
import { TEXTS_CHECKBOX_V3, TEXTS_FINE_PRINT_V3 } from "@/lib/sms-consent";

/** One optional, unticked consent box. The label is the exact registered text. */
export function ConsentBox({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-navy"
      />
      <span className="text-sm text-navy/80 leading-snug">
        {label} <span className="text-navy/60">(Optional)</span>
      </span>
    </label>
  );
}

/** The registered fine print, with the policy links, shown under the box(es). */
export function TextsFinePrint() {
  return (
    <p className="text-xs text-navy/75 leading-snug mt-1 ml-7">
      {TEXTS_FINE_PRINT_V3}{" "}
      <a
        href="https://constructionstation.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Privacy Policy
      </a>
      {" | "}
      <a
        href="https://constructionstation.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Terms
      </a>
    </p>
  );
}

/** The texts box shared by the quick forms. */
export default function TextsConsentBox({
  id,
  checked,
  onChange,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div>
      <ConsentBox id={id} label={TEXTS_CHECKBOX_V3} checked={checked} onChange={onChange} />
      <TextsFinePrint />
    </div>
  );
}
