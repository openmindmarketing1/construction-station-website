import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ADU Financing Options | Construction Station",
  description:
    "How to finance your ADU in the Inland Empire — HELOCs, cash-out refinance, construction loans, ADU-specific loans, and the CalHFA ADU Grant Program. Flexible financing through Enhancify. Licensed IE contractor.",
  alternates: { canonical: "/services/adu/financing" },
};

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const FINANCING_URL = "https://www.constructionstation.com/financing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

type FinancingOption = {
  icon: string;
  title: string;
  blurb: string;
  bestFor: string;
};

const OPTIONS: FinancingOption[] = [
  {
    icon: "🏦",
    title: "Home Equity Line of Credit (HELOC)",
    blurb:
      "Most common option. Borrow against your home's equity. Interest only during the draw period. Rates vary with the market.",
    bestFor: "Homeowners with significant equity",
  },
  {
    icon: "💵",
    title: "Cash-Out Refinance",
    blurb:
      "Refinance your mortgage for more than you owe and take the difference in cash.",
    bestFor: "Homeowners who can get a lower rate than their current mortgage",
  },
  {
    icon: "🏗️",
    title: "Construction Loan",
    blurb:
      "Short-term loan specifically for building. Converts to a permanent mortgage after construction. Requires detailed plans.",
    bestFor: "Larger projects, less home equity",
  },
  {
    icon: "🏠",
    title: "ADU-Specific Loans",
    blurb:
      "Some lenders offer ADU-specific products based on the projected rental income of the new unit.",
    bestFor: "Investment-focused ADU projects",
  },
  {
    icon: "🏛️",
    title: "CalHFA ADU Grant Program",
    blurb:
      "When funded, covers up to $40,000 in pre-development costs. Check current availability at calhfa.ca.gov.",
    bestFor: "Owner-occupants, income limits apply",
  },
];

const TIPS = [
  "Get pre-approved before finalizing your plans",
  "Factor in rental income when qualifying",
  "ADUs typically increase property value 20–30% — improving your equity position",
  "Some cities offer local fee waivers",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ADU Financing",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "ADU financing guidance for Inland Empire homeowners — HELOCs, cash-out refinance, construction loans, ADU-specific loans, the CalHFA ADU Grant Program, and flexible financing through Enhancify.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/adu/financing`,
  image: `${SITE_URL}/images/services/adu/adu-01.jpg`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
    addressLocality: "Inland Empire",
  },
  areaServed: "Inland Empire, California",
  identifier: CS.license,
};

function PrimaryCta() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
    >
      Book Free ADU Consultation
      <span aria-hidden>→</span>
    </a>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-10 h-px bg-gold" />
      <span className="text-gold text-xs uppercase tracking-[0.4em]">{label}</span>
      <span className="w-10 h-px bg-gold" />
    </div>
  );
}

export default function ADUFinancingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-24 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="absolute top-32 right-10 hidden md:flex items-center gap-3">
          <div className="w-12 h-px bg-gold" />
          <div className="text-gold text-[10px] tracking-[0.4em] uppercase">
            ADU · Financing
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5 md:hidden">
              ADU · Financing
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
              How to Finance Your ADU in the{" "}
              <span className="italic text-gold">Inland Empire</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
              Building an ADU is a major investment. Here are the most common
              financing options available to IE homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryCta />
              <a
                href={CS.phoneHref}
                className="border border-white/40 text-white px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
              >
                Call {CS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Financing options */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="Financing Options" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Five ways to{" "}
              <span className="italic text-gold">fund your build</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPTIONS.map((opt, i) => (
              <div
                key={opt.title}
                className="bg-cream border border-navy/10 p-7 hover:border-gold transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{opt.icon}</div>
                  <div className="text-gold text-xs tracking-[0.3em] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="font-display text-navy text-2xl mb-3 leading-tight">
                  {opt.title}
                </div>
                <div className="text-navy/70 text-sm leading-relaxed mb-5">
                  {opt.blurb}
                </div>
                <div className="mt-auto pt-4 border-t border-navy/10">
                  <div className="text-[10px] uppercase tracking-wider text-navy/40 mb-1">
                    Best for
                  </div>
                  <div className="text-navy font-semibold text-sm">
                    {opt.bestFor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Financing tips */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Tips" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Smart financing{" "}
              <span className="italic text-gold">moves</span>.
            </h2>
          </div>
          <div className="bg-white border border-navy/10 p-8 md:p-10">
            <ul className="space-y-4">
              {TIPS.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-navy/80 text-base leading-relaxed"
                >
                  <span className="mt-1 text-gold shrink-0">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 — Enhancify financing */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="bg-navy texture-navy text-white p-10 md:p-14 text-center">
            <SectionEyebrow label="Enhancify" />
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1] mb-5">
              Flexible financing through{" "}
              <span className="italic text-gold">Enhancify</span>.
            </h2>
            <p className="text-white/75 text-base leading-relaxed max-w-xl mx-auto mb-8">
              Construction Station offers flexible financing through Enhancify.
              Apply in minutes and know your budget before your consultation.
            </p>
            <Link
              href={FINANCING_URL}
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
            >
              Explore Financing
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <SectionEyebrow label="Ready to start?" />
          <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1] mb-6">
            Know your budget{" "}
            <span className="italic text-gold">before you build</span>.
          </h2>
          <p className="text-navy/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Book a free ADU consultation and we&rsquo;ll help you map financing
            to a build plan that fits your property and your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryCta />
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 border border-navy/40 text-navy px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              Call {CS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
