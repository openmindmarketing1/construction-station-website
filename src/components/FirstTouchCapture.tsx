"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureFirstTouch } from "@/lib/first-touch";

// Records first touch / last ad click on the hard load and on every
// client-side route change. See src/lib/first-touch.ts.
export default function FirstTouchCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureFirstTouch();
  }, [pathname]);
  return null;
}
