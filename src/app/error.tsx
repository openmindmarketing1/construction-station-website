"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
          Something went wrong
        </div>
        <h1 className="font-display text-navy text-5xl mb-5">
          Unexpected Error
        </h1>
        <p className="text-navy/70 mb-8 leading-relaxed">
          We&rsquo;re sorry — something went wrong on our end. Please try again
          or give us a call at{" "}
          <a href="tel:9097976333" className="text-gold underline">
            909-797-6333
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-gold text-navy font-body font-semibold px-8 py-3 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-navy text-navy px-8 py-3 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
