/**
 * SMS consent disclosures shown on this site.
 *
 * These strings are BOTH rendered to the visitor AND sent to the lead API, so
 * the recorded evidence is literally the text the person read — they cannot
 * drift apart, because there is only one copy.
 *
 * ⚠️ They must match `src/lib/sms-consent.ts` in the open-mind-marketing repo
 * exactly (whitespace is normalised, wording is not). The API verifies against
 * its own copy and records consent as "cannot establish" if they disagree,
 * rather than trusting whatever a client sends. If you change wording here,
 * add a NEW versioned constant in both repos — never edit an existing one, or
 * past records will claim text their person never saw.
 */

/** Transactional only: appointment confirmations, project updates. Says nothing
 *  about promotional messages, so it can never grant marketing consent. */
export const QUICKFORM_TRANSACTIONAL_V1 =
  "By submitting you agree to receive calls and texts from Construction Station about your project. Message and data rates may apply. Reply STOP to opt out.";

/** The two checkbox disclosures on /contact. */
export const CONTACT_TRANSACTIONAL_V1 =
  "I agree to receive SMS text messages from Construction Station Flooring and Design at the phone number provided, including appointment confirmations, project updates, and consultation reminders. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.";

export const CONTACT_MARKETING_V1 =
  "I also agree to receive promotional offers, review requests, and follow-up messages via SMS from Construction Station Flooring and Design. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.";

// ── V2 (2026-10-07): calls AND texts, including automated / AI-assisted ──────
// Greg's wording. Transactional scope only ("about your request").

/** The sentence beside the submit button on every quick form. */
export const CALLS_TEXTS_V2 =
  "By submitting, you agree that Construction Station may call or text you at this number about your request, including with automated or AI-assisted calls and messages. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.";

/** The same consent, worded for the /contact tick box (consent is the tick, not the submit). */
export const CONTACT_CHECKBOX_V2 =
  "I agree that Construction Station may call or text me at this number about my request, including with automated or AI-assisted calls and messages. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.";

/**
 * The consent fields every form sends with a lead (OMM field contract:
 * consent, consent_text, consent_at, consent_url), plus the legacy sms_*
 * fields so an endpoint that predates the contract still saves the lead.
 */
export function consentFields(consent: boolean, text: string) {
  return {
    consent,
    consent_text: text,
    consent_at: new Date().toISOString(),
    consent_url: typeof window !== "undefined" ? window.location.href : undefined,
    sms_transactional_consent: consent,
    sms_consent_text: text,
  };
}
