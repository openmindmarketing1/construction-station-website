"use client";

import Link from "next/link";
import { CS } from "@/lib/constants";

export default function FloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy border-t border-gold/30 grid grid-cols-2 shadow-2xl">
      <a
        href={CS.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-gold font-body uppercase tracking-wider text-xs border-r border-white/10"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 py-4 bg-gold text-navy font-body uppercase tracking-wider text-xs font-semibold"
      >
        Free Estimate →
      </Link>
    </div>
  );
}
