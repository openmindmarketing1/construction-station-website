// One source for what a callback form promises (2026-09-30, Greg). Every
// form submission triggers an automatic call within about 90 seconds between
// 8 AM and 9 PM Pacific; a request outside those hours gets its call at 8 AM.
// A person follows up during business hours. Say exactly that — "within 2
// hours" undersold the one thing we're genuinely fast at, and an unqualified
// "2 minutes" would be false at night.

export const CALLBACK_PROMISE =
  "We’ll call you within 2 minutes (8 AM–9 PM). A team member follows up during business hours.";

export const CALLBACK_PROMISE_SHORT = "We’ll call you within 2 minutes (8 AM–9 PM).";

const CALL_START_HOUR = 8;
const CALL_END_HOUR = 21;

function pacificHour(now: Date): number {
  return (
    Number(
      new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "2-digit", hour12: false }).format(now)
    ) % 24
  );
}

/** Headline shown right after a form is submitted — true at any hour. */
export function callbackConfirmation(now: Date = new Date()): string {
  const h = pacificHour(now);
  if (h >= CALL_START_HOUR && h < CALL_END_HOUR) return "Watch your phone — we’ll call you within 2 minutes.";
  return "Got it — we’ll call you at 8 AM.";
}

export const HUMAN_FOLLOW_UP = "A team member will follow up during business hours.";

// Replaces "we return missed calls within 30 minutes" (2026-09-30): a 90-day
// audit found no recorded callback to any caller who missed a person, and the
// office line (797-6333) isn't measurable at all. Promise only what's true:
// the line is answered after hours and details are taken.
export const MISSED_CALL_LINE =
  "We answer during business hours. After hours, our assistant picks up and takes your details so a team member can call you back.";
