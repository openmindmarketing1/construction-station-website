import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ADU Basics — What Is an ADU? | Construction Station",
  description:
    "New to ADUs? Learn what an Accessory Dwelling Unit is, the four types you can build, how many ADUs are allowed on your lot, and the key California ADU laws — explained by a licensed Inland Empire contractor.",
  alternates: { canonical: "/services/adu/basics" },
};

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const ADU_TYPES = [
  {
    icon: "🏠",
    title: "Detached ADU",
    blurb: "Standalone structure in the backyard with its own entrance and utilities.",
  },
  {
    icon: "🏗️",
    title: "Attached ADU",
    blurb: "An addition built onto your existing home under a shared roof.",
  },
  {
    icon: "🚪",
    title: "Garage Conversion",
    blurb: "Convert an existing attached or detached garage into living space.",
  },
  {
    icon: "📐",
    title: "Junior ADU (JADU)",
    blurb: "Up to 500 sq ft created within the existing home footprint.",
  },
];

const SF_RULES = [
  "1 Detached ADU (up to 1,200 sq ft)",
  "1 Attached ADU",
  "1 JADU (up to 500 sq ft)",
  "Total: Up to 3 units",
];

const MF_RULES = [
  "Up to 8 detached ADUs",
  "Interior conversions up to 25% of existing units",
];

const CA_LAW = [
  "Cities must approve ADUs within 60 days",
  "No owner-occupancy required (permanent as of 2026)",
  "Impact fees waived under 750 sq ft",
  "No replacement parking required for garage conversions",
  "4 ft minimum side and rear setbacks",
  "State law overrides any more restrictive local rules",
];

const WHO_BUILDS = [
  "Multigenerational families",
  "Homeowners seeking rental income",
  "Property investors",
  "Homeowners needing a home office or studio",
];

const QUALIFYING = [
  "Do you have a single-family home?",
  "Do you have backyard space or an existing garage?",
  "Are you interested in rental income?",
  "Do you want to house family members nearby?",
  "Are you looking to increase property value?",
];

const FAQS = [
  {
    q: "What is an ADU?",
    a: "An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family or multifamily residential lot. They're also called granny flats, casitas, in-law suites, or backyard homes. California law now makes them easier than ever to build.",
  },
  {
    q: "What types of ADUs can I build?",
    a: "There are four common types: a detached ADU (a standalone backyard structure), an attached ADU (an addition to your existing home), a garage conversion, and a Junior ADU (JADU) up to 500 sq ft carved out of your existing home footprint.",
  },
  {
    q: "How many ADUs can I build on my property?",
    a: "On a single-family lot you can typically build one detached ADU (up to 1,200 sq ft), one attached ADU, and one JADU (up to 500 sq ft) — up to three units total. Multifamily properties can add up to eight detached ADUs plus interior conversions of up to 25% of existing units.",
  },
  {
    q: "Do I have to live on the property to build an ADU?",
    a: "No. Owner-occupancy is no longer required for standard ADUs — California made this permanent as of 2026. (A JADU still carries an owner-occupancy requirement.)",
  },
  {
    q: "How big can a Junior ADU (JADU) be?",
    a: "A JADU is capped at 500 sq ft and must be created within the existing footprint of your home — typically by converting a bedroom, office, or part of an attached garage.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/adu/basics`,
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function PrimaryCta({
  label = "Book a Free Feasibility Consultation",
}: {
  label?: string;
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
    >
      {label}
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-navy/80 leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ADUBasicsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

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
            ADU · Basics
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5 md:hidden">
              ADU · Basics
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
              ADU Basics — Everything You{" "}
              <span className="italic text-gold">Need to Know</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
              New to ADUs? Start here. Learn what an ADU is, what you can build,
              and how the process works in California.
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

      {/* Section 1 — What is an ADU? */}
      <article className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                What Is an ADU?
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-navy/85 text-lg leading-[1.7]">
                An <strong>Accessory Dwelling Unit (ADU)</strong> is a secondary
                housing unit on a single-family or multifamily residential lot.
                Also called granny flats, casitas, in-law suites, or backyard
                homes. California law now makes them easier than ever to build.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Section 2 — Types of ADUs */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="Types of ADUs" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Four kinds of{" "}
              <span className="italic text-gold">ADU</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADU_TYPES.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-navy/10 p-7 hover:border-gold transition-colors"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <div className="font-display text-navy text-2xl mb-2 leading-tight">
                  {t.title}
                </div>
                <div className="text-navy/70 text-sm leading-relaxed">
                  {t.blurb}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How many ADUs can I build? */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="How Many?" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              How many ADUs{" "}
              <span className="italic text-gold">can I build?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-cream border border-navy/10 p-8">
              <div className="font-display text-navy text-2xl mb-5">
                Single-family property
              </div>
              <CheckList items={SF_RULES} />
            </div>
            <div className="bg-cream border border-navy/10 p-8">
              <div className="font-display text-navy text-2xl mb-5">
                Multifamily property
              </div>
              <CheckList items={MF_RULES} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — California ADU Law */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="State Law" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              California{" "}
              <span className="italic text-gold">ADU law</span>.
            </h2>
          </div>
          <div className="bg-white border border-navy/10 p-8 md:p-10">
            <CheckList items={CA_LAW} />
          </div>
        </div>
      </section>

      {/* Section 5 — Who builds ADUs? */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="Who Builds Them" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Who builds{" "}
              <span className="italic text-gold">ADUs?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {WHO_BUILDS.map((w) => (
              <div
                key={w}
                className="bg-cream border border-navy/10 p-6 text-navy/80 leading-relaxed"
              >
                {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Is an ADU right for me? */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Right For You?" />
            <h2 className="font-display text-4xl md:text-5xl leading-[1]">
              Is an ADU{" "}
              <span className="italic text-gold">right for me?</span>
            </h2>
          </div>
          <ul className="space-y-4 mb-12 max-w-xl mx-auto">
            {QUALIFYING.map((q) => (
              <li key={q} className="flex items-start gap-3 text-white/85 text-lg leading-relaxed">
                <span className="text-gold shrink-0">✓</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Find out if your property qualifies — book a free feasibility
              consultation and we&rsquo;ll walk your lot together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <PrimaryCta />
              <Link
                href="/services/adu"
                className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
              >
                Back to ADU Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} />
    </>
  );
}
