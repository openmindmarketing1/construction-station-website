import Link from "next/link";
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-gold">
                <span className="font-display text-2xl text-gold">CS</span>
              </div>
              <div>
                <div className="font-display text-xl leading-none text-white">
                  Construction
                </div>
                <div className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mt-1">
                  Station
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium kitchen, bathroom, and home renovation in the Inland
              Empire since {CS.founded}. Family-run craftsmanship, no
              subcontracted shortcuts.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
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
                href="#"
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
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-display text-gold text-lg mb-5 gold-underline">
              Services
            </div>
            <ul className="space-y-3 mt-8">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
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
          <div className="text-center md:text-right">
            Licensed, Bonded &amp; Insured · Serving the Inland Empire Since{" "}
            {CS.founded}
          </div>
        </div>
      </div>
    </footer>
  );
}
