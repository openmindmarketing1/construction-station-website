declare global {
  interface Window {
    vbpx?: (...args: unknown[]) => void;
  }
}

// Vibe CTV pixel events. The base snippet in the root layout defines the
// vbpx stub synchronously, but a blocked script or ad blocker can leave it
// missing — these helpers must never throw into a form's submit path.

export function vibeLead() {
  try {
    window.vbpx?.("event", "lead");
  } catch {
    // The form succeeding matters more than the pixel firing.
  }
}

export function vibePageView() {
  try {
    window.vbpx?.("event", "page_view");
  } catch {
    // Never let tracking break navigation.
  }
}
