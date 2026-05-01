import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Construction Station",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
          404 — Not Found
        </div>
        <h1 className="font-display text-navy text-6xl md:text-7xl leading-none mb-5">
          Page not found.
        </h1>
        <p className="text-navy/70 mb-8 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-gold text-navy font-body font-semibold px-8 py-3 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border border-navy text-navy px-8 py-3 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
