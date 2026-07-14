import Link from "next/link";
import Image from "next/image";
import { CS, SERVICES, HOURS } from "@/lib/constants";
import { CITIES } from "@/config/cities";

export default function Footer() {
  return (
    <footer className="bg-navy-dark texture-navy text-white relative overflow-hidden">
      {/* Top gold rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="/images/logo/cs-logo.png"
                alt="Construction Station"
                width={160}
                height={44}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] mb-2">
              Residential &amp; Commercial Construction
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Full-service residential and commercial construction across the
              Inland Empire since {CS.founded}. Licensed {CS.license} ·
              Family-run craftsmanship, no subcontracted shortcuts.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/103292419433574"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/construction_station"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/construction-station-flooring-and-design/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ConstructionStation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@constructionstation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-display text-gold text-lg mb-5 gold-underline">
              Services
            </div>
            <ul className="space-y-3 mt-8">
              {SERVICES.filter((s) => s.hasPage).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10 mt-1">
                <Link
                  href="/services/flooring-installation-yucaipa-ca"
                  className="text-white/70 hover:text-gold text-sm transition-colors"
                >
                  Flooring Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <div className="font-display text-gold text-lg mb-5 gold-underline">
              Areas We Serve
            </div>
            <ul className="space-y-3 mt-8 grid grid-cols-2 gap-x-2">
              {CITIES.slice(0, 12).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/areas/${c.slug}`}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display text-gold text-lg mb-5 gold-underline">
              Contact
            </div>
            <div className="space-y-3 mt-8 text-sm">
              <a
                href={CS.phoneHref}
                className="block text-white hover:text-gold transition-colors font-display text-2xl"
              >
                {CS.phone}
              </a>
              <a
                href={`mailto:${CS.email}`}
                className="block text-white/70 hover:text-gold transition-colors"
              >
                {CS.email}
              </a>
              <div className="text-white/70">{CS.address}</div>
              <div className="pt-3 border-t border-white/10 mt-4">
                <div className="text-gold text-xs tracking-wider uppercase mb-2">
                  Hours
                </div>
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between text-white/70 text-sm py-0.5"
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-gold font-display text-2xl">License {CS.license}</div>
            <div className="text-white/50 text-xs uppercase tracking-wider mt-1">
              CSLB Licensed
            </div>
          </div>
          <div>
            <div className="text-gold font-display text-2xl">BBB {CS.bbb}</div>
            <div className="text-white/50 text-xs uppercase tracking-wider mt-1">
              Accredited
            </div>
          </div>
          <div>
            <div className="text-gold font-display text-2xl">Bonded</div>
            <div className="text-white/50 text-xs uppercase tracking-wider mt-1">
              & Fully Insured
            </div>
          </div>
          <div>
            <div className="text-gold font-display text-2xl">Since 2008</div>
            <div className="text-white/50 text-xs uppercase tracking-wider mt-1">
              Family Operated
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Construction Station. All rights
            reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-gold transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="text-center md:text-right">
            Licensed, Bonded &amp; Insured · Serving the Inland Empire Since{" "}
            {CS.founded}
          </div>
        </div>
      </div>
    </footer>
  );
}
