import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProcessSteps from "@/components/ProcessSteps";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";
import {
  ADU_CITY_SLUGS,
  getCityBySlug,
  maxSizeStat,
  contactPhone,
  rentTiersFor,
  formatUSD,
  REGION_LABEL,
  type ADUCity,
} from "@/lib/adu-cities";

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const LAST_UPDATED = "May 2026";

export const dynamicParams = false;

export function generateStaticParams() {
  return ADU_CITY_SLUGS.map((city) => ({ city }));
}

type RouteParams = { city: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  // `absolute` bypasses the root layout's "%s | Construction Station" template
  // so the override's brand isn't appended twice. Cities without an override
  // keep the templated title (brand added once by the template).
  const title: Metadata["title"] = city.seoTitle
    ? { absolute: city.seoTitle }
    : `ADU Regulations ${city.name}, CA`;
  const description =
    city.seoDescription ??
    `Everything you need to know about building an ADU in ${city.name}, California — size limits, setbacks, permits, costs, and rental income. Licensed ADU contractor since 2008. Call ${CS.phone}.`;
  return {
    title,
    description,
    alternates: { canonical: `/services/adu/${city.slug}` },
  };
}

const ADU_TYPES = [
  {
    title: "Detached ADU",
    blurb:
      "Standalone unit up to 1,200 sq ft, built fresh on your lot with its own address, utilities, and entrance.",
    icon: "🏠",
  },
  {
    title: "Garage Conversion",
    blurb:
      "Convert an existing attached or detached garage into a fully permitted living space — the fastest path to an ADU.",
    icon: "🚪",
  },
  {
    title: "Junior ADU (JADU)",
    blurb:
      "Up to 500 sq ft carved out of the existing home footprint. Streamlined approval under California state law.",
    icon: "📐",
  },
  {
    title: "Room Addition ADU",
    blurb:
      "Attached addition to the main home — adds a bedroom, kitchenette, and bath under one shared roof and foundation.",
    icon: "🏗️",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Free Feasibility Consultation",
    description:
      "We walk your lot, check setbacks and lot coverage, and confirm what your jurisdiction will approve.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Floor plan, elevations, structural calcs, and Title 24 energy compliance — drawn for your specific lot.",
  },
  {
    number: "03",
    title: "Permit Submission & Approval",
    description:
      "We submit to your city or county, manage plan-check corrections, and pay the permit fees.",
  },
  {
    number: "04",
    title: "Construction",
    description:
      "Same Construction Station crew handles foundation, framing, MEP, drywall, and finish — start to keys.",
  },
  {
    number: "05",
    title: "Final Inspection & Move-In Ready",
    description:
      "Final city inspection, certificate of occupancy where applicable, and two-year workmanship warranty.",
  },
];

function regulationRows(city: ADUCity) {
  return [
    {
      label: "ADUs Allowed",
      value:
        "Up to 3 units on a single-family lot (primary home + 1 ADU + 1 JADU); up to 8 detached ADUs on multifamily lots",
    },
    { label: "Max ADU Size", value: city.maxSize },
    { label: "Setbacks", value: city.setbacks },
    { label: "Height", value: city.height },
    { label: "Parking", value: city.parking },
    { label: "JADU Allowed", value: city.jaduAllowed },
    { label: "Impact Fees", value: city.impactFees },
    { label: "Permit Timeline", value: city.permitTimeline },
  ];
}

function buildFaqs(city: ADUCity) {
  return [
    {
      q: `How much does an ADU cost in ${city.name}?`,
      a: `${city.name} ADUs typically run $250–$400 per sq ft for garage conversions, $300–$450 per sq ft for attached room-addition ADUs, and $350–$550 per sq ft for new detached ADUs. A 400 sq ft garage conversion typically lands between $100,000 and $160,000; a 1,200 sq ft detached ADU between $420,000 and $660,000 depending on finish level and site conditions. Your free ${city.name} feasibility consultation ends with a transparent line-item estimate.`,
    },
    {
      q: `How long does it take to get an ADU permit in ${city.name}?`,
      a: `California state law caps ADU plan-check review at 60 days, and ${city.name} processes ADU permits within that window. Total time from signed contract to permit-in-hand typically runs 8–14 weeks, including design, structural engineering, Title 24 energy compliance, and any plan-check corrections. Construction begins immediately after the permit is issued.`,
    },
    {
      q: `Can I rent my ADU in ${city.name}?`,
      a: `Yes — long-term rentals of 30 days or more are allowed statewide in California, and that applies in ${city.name}. Short-term rentals under 30 days are governed by local ordinance and vary by city. We confirm any ${city.name}-specific short-term rental restrictions during your free consultation so there are no surprises.`,
    },
    {
      q: `Do I need owner-occupancy for an ADU in ${city.name}?`,
      a: `No — California permanently removed the owner-occupancy requirement for standard ADUs as of 2026, so you can build and rent an ADU in ${city.name} whether or not you live on the property. The one exception is a JADU (Junior ADU): if you build a JADU, owner-occupancy of either the primary home or the JADU is required.`,
    },
    {
      q: `Does Construction Station build ADUs in ${city.name}?`,
      a: `Yes. Construction Station is a licensed California general contractor (License ${CS.license}) and has been building ADUs across the Inland Empire, Temecula Valley, Desert, and Orange County–adjacent communities since 2008. We handle the entire ${city.name} project — feasibility, design, structural engineering, permits, construction, and final inspection — under one fixed-price contract and one warranty.`,
    },
  ];
}

export default async function ADUCityPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const rows = regulationRows(city);
  const faqs = buildFaqs(city);
  const rentTiers = rentTiersFor(city);
  const phone = contactPhone(city);
  const regionLabel = REGION_LABEL[city.regionKey];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    email: CS.email,
    url: `${SITE_URL}/services/adu/${city.slug}`,
    image: `${SITE_URL}/images/services/adu/adu-01.jpg`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: `${city.name}, CA` },
    identifier: CS.license,
    description: `Licensed ADU general contractor serving ${city.name}, ${city.county} — detached ADUs, JADUs, garage conversions, and room-addition ADUs up to 1,200 sq ft.`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ADU Services",
        item: `${SITE_URL}/services/adu`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${city.name} ADU Regulations`,
        item: `${SITE_URL}/services/adu/${city.slug}`,
      },
    ],
  };

  const stats = [
    { label: "Max ADU Size", value: maxSizeStat(city) },
    { label: "Permit Timeline", value: "60 days" },
    { label: "Min Setbacks", value: "4 ft side & rear" },
    { label: "Impact Fees", value: "Waived under 750 sq ft" },
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. HERO */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
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
            City Guide · {city.region}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6"
          >
            <Link href="/services/adu" className="hover:text-gold">
              ADU Services
            </Link>
            <span aria-hidden className="mx-2">
              /
            </span>
            <span className="text-gold">{city.name}</span>
          </nav>
          <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5 md:hidden">
            City Guide · {city.region}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
            ADU Regulations in{" "}
            <span className="italic text-gold">{city.name}</span>, California
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mb-9 leading-relaxed">
            Everything you need to know about building an ADU in {city.name} —
            size limits, setbacks, permits, and costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
            >
              Book Free ADU Consultation
              <span aria-hidden>→</span>
            </a>
            <a
              href={CS.phoneHref}
              className="border border-white/40 text-white px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
            >
              Call {CS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS BAR */}
      <section className="bg-gold">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-gold px-4 py-5 text-center lg:text-left"
              >
                <div className="text-navy/70 text-[11px] uppercase tracking-[0.25em] mb-2">
                  {s.label}
                </div>
                <div className="font-display text-navy text-xl md:text-2xl leading-tight">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW MANY ADUs */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Unit Count
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              How many ADUs are allowed in{" "}
              <span className="italic text-gold">{city.name}</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-cream border border-navy/10 p-8">
              <div className="text-gold text-xs uppercase tracking-[0.3em] mb-3">
                Single-Family Property
              </div>
              <ul className="space-y-3 text-navy/80">
                <li className="flex gap-3">
                  <span className="text-gold">→</span> 1 Detached ADU (up to
                  1,200 sq ft)
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">→</span> 1 Attached ADU
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">→</span> 1 Junior ADU / JADU (up
                  to 500 sq ft)
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-navy/10 font-display text-navy text-lg">
                Total: up to 3 units on your property
              </div>
            </div>
            <div className="bg-cream border border-navy/10 p-8">
              <div className="text-gold text-xs uppercase tracking-[0.3em] mb-3">
                Multifamily Property
              </div>
              <ul className="space-y-3 text-navy/80">
                <li className="flex gap-3">
                  <span className="text-gold">→</span> Up to 8 detached ADUs
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">→</span> Interior conversions up
                  to 25% of existing units
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-navy/10 font-display text-navy text-lg">
                Scales with your existing unit count
              </div>
            </div>
          </div>
          <p className="mt-6 text-navy/60 text-sm leading-relaxed text-center max-w-3xl mx-auto">
            All California cities must follow state-law minimums. {city.name}{" "}
            follows California AB 68 and subsequent ADU laws.
          </p>
        </div>
      </section>

      {/* 4. FULL REGULATION TABLE */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Regulations at a glance
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              {city.name} ADU{" "}
              <span className="italic text-gold">rules &amp; limits</span>.
            </h2>
          </div>
          <div className="bg-white border-2 border-gold">
            <table className="w-full">
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 === 0 ? "bg-white" : "bg-cream/40"}
                  >
                    <th
                      scope="row"
                      className="text-left align-top p-5 md:p-6 font-display text-navy text-base md:text-lg w-1/3 md:w-1/4 border-b border-navy/5"
                    >
                      {row.label}
                    </th>
                    <td className="p-5 md:p-6 text-navy/80 text-sm md:text-base leading-relaxed border-b border-navy/5">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-navy/10 p-6">
            <div className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
              Local Notes
            </div>
            <p className="text-navy/80 leading-relaxed text-sm md:text-base mb-3">
              {city.notes}
            </p>
            <p className="text-navy/60 text-sm">
              <span className="font-semibold text-navy">Contact:</span>{" "}
              {city.contact}
            </p>
          </div>
        </div>
      </section>

      {/* 5. RENTAL INCOME ESTIMATE */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Rental Income
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              What could your {city.name} ADU{" "}
              <span className="italic text-gold">earn</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rentTiers.map((tier) => (
              <div
                key={tier.label}
                className="bg-cream border border-navy/10 p-7 flex flex-col"
              >
                <div className="font-display text-navy text-2xl leading-tight">
                  {tier.label}
                </div>
                <div className="text-navy/50 text-sm mb-5">{tier.size}</div>
                <div className="mt-auto space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-navy/40 mb-1">
                      Estimated rent
                    </div>
                    <div className="font-display text-gold text-2xl">
                      {formatUSD(tier.minMonthly)} – {formatUSD(tier.maxMonthly)}
                      <span className="text-navy/50 text-base">/mo</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-navy/10">
                    <div className="text-[10px] uppercase tracking-wider text-navy/40 mb-1">
                      Annual income
                    </div>
                    <div className="font-semibold text-navy text-lg">
                      {formatUSD(tier.minMonthly * 12)} –{" "}
                      {formatUSD(tier.maxMonthly * 12)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-navy/60 text-sm leading-relaxed text-center max-w-3xl mx-auto">
            Rental estimates based on current {regionLabel} market rates. Actual
            rents vary by condition, amenities, and local demand.
          </p>
        </div>
      </section>

      {/* 6. ADU TYPES WE BUILD */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                ADU Types We Build
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Four paths to an ADU in{" "}
              <span className="italic text-gold">{city.name}</span>.
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

      {/* 7. OUR PROCESS */}
      <ProcessSteps steps={STEPS} />

      {/* 8. WHY BUILD IN [CITY] */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                Why {city.name}
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-7">
                Why build an ADU in{" "}
                <span className="italic text-gold">{city.name}</span>.
              </h2>
              <p className="text-navy/80 leading-[1.8] text-base md:text-lg">
                {city.whyBuild}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Ready to start?
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Ready to build an ADU in{" "}
            <span className="italic text-gold">{city.name}</span>?
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            We&rsquo;ll walk your lot, confirm what {city.name} will allow, and
            ballpark cost before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
            >
              Book Free ADU Consultation
              <span aria-hidden>→</span>
            </a>
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              Call {CS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                {city.name} FAQ
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              {city.name} ADU{" "}
              <span className="italic text-gold">questions, answered</span>.
            </h2>
          </div>
          <div className="border-t border-navy/10">
            {faqs.map((f) => (
              <details key={f.q} className="border-b border-navy/10 group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-6">
                  <span className="font-display text-navy text-lg md:text-xl group-hover:text-gold transition-colors">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 w-9 h-9 border border-gold flex items-center justify-center text-gold group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-6 pr-12 text-navy/75 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. REGULATION DISCLAIMER */}
      <section className="bg-cream py-12">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="border border-navy/15 bg-white p-6 text-center">
            <p className="text-navy/70 text-sm leading-relaxed">
              ADU regulations change frequently. Always verify current
              requirements with the {city.name} Planning Department
              {phone ? ` at ${phone}` : ""}. This page was last updated{" "}
              {LAST_UPDATED}.
            </p>
          </div>
        </div>
      </section>

      {/* 12. INTERNAL LINKS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <Link
              href="/services/adu"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                ← Back
              </div>
              <div className="font-display text-navy text-2xl">
                ADU Overview
              </div>
              <div className="text-navy/60 text-sm mt-1">
                How Construction Station builds ADUs — start to keys.
              </div>
            </Link>
            <Link
              href="/services/adu/floor-plans"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                Browse
              </div>
              <div className="font-display text-navy text-2xl">
                View Floor Plans
              </div>
              <div className="text-navy/60 text-sm mt-1">
                12 sample plans from 400 to 1,200 sq ft.
              </div>
            </Link>
            <Link
              href="/services/adu#cities"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                Explore
              </div>
              <div className="font-display text-navy text-2xl">
                View All Cities
              </div>
              <div className="text-navy/60 text-sm mt-1">
                ADU regulation guides for all 29 cities we serve.
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
