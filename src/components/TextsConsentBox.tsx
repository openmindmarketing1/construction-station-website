"use client";
import { TEXTS_CHECKBOX_V3, TEXTS_FINE_PRINT_V3 } from "@/lib/sms-consent";

/** The optional, unticked texts box shared by the quick forms. */
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
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-navy"
        />
        <span className="text-sm text-navy/80 leading-snug">
          {TEXTS_CHECKBOX_V3} <span className="text-navy/60">(Optional)</span>
        </span>
      </label>
      <p className="text-xs text-navy/75 leading-snug mt-1 ml-7">{TEXTS_FINE_PRINT_V3}</p>
    </div>
  );
}
