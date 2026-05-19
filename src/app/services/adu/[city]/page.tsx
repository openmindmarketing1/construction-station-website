import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";
import {
  ADU_CITIES,
  ADU_CITY_SLUGS,
  getCityBySlug,
  type ADUCity,
} from "@/lib/adu-cities";

const CALENDLY_URL = "https://calendly.com/constructionstation";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

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
  const title = `ADU Regulations ${city.name}, CA | Construction Station`;
  const description = `${city.name}, California ADU rules — max size, setbacks, height, parking, JADUs, impact fees, and permit timelines. Licensed ADU general contractor since 2008. Call ${CS.phone}.`;
  return {
    title,
    description,
    alternates: { canonical: `/services/adu/${city.slug}` },
  };
}

function regulationRows(city: ADUCity) {
  return [
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
      q: `What's the maximum ADU size in ${city.name}?`,
      a: `${city.name}'s maximum ADU size is ${city.maxSize}. California state law guarantees at least an 800 sq ft ADU on any single-family lot regardless of local zoning, and most ${city.name} lots can accommodate substantially more. Construction Station verifies the specific buildable footprint on your lot during the free feasibility consultation.`,
    },
    {
      q: `How long do ADU permits take in ${city.name}?`,
      a: `California state law caps ADU plan-check review at 60 days, and ${city.name} processes ADU permits within that window. Total time from signed contract to permit-in-hand typically runs 8–14 weeks, including design, engineering, Title 24, and any corrections. Construction begins immediately after the permit is issued.`,
    },
    {
      q: `Do I need parking for an ADU in ${city.name}?`,
      a: `${city.parking} This is consistent with California state law for most situations. If a parking space is required, it can be in tandem (one behind the other), in the front setback, or on an existing driveway — there's flexibility in how the requirement is met.`,
    },
    {
      q: `Can I build a JADU in ${city.name}?`,
      a: `${city.jaduAllowed} A JADU is a unit up to 500 sq ft created within the existing home footprint, typically by converting a bedroom or part of a garage. JADUs are the fastest and cheapest path to an income-generating unit, and ${city.name} processes them on the same 60-day review window as standard ADUs.`,
    },
    {
      q: `What does an ADU cost in ${city.name}?`,
      a: `Inland Empire ADUs typically run $250–$400 per sq ft for garage conversions, $300–$450 per sq ft for attached room-addition ADUs, and $350–$550 per sq ft for new detached ADUs. A 400 sq ft garage conversion typically lands between $100,000 and $160,000; a 1,200 sq ft detached ADU between $420,000 and $660,000 depending on finish level and site conditions. Your free ${city.name} feasibility consultation ends with a transparent line-item estimate.`,
    },
    {
      q: `Can I rent out my ADU in ${city.name}?`,
      a: `Yes — long-term rentals of 30 days or more are allowed statewide in California. Short-term rentals under 30 days are governed by local ordinance and vary by city. We confirm any ${city.name}-specific short-term rental restrictions during your free consultation.`,
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

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
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
            Everything you need to know to build a permitted ADU in {city.name}
            — max size, setbacks, height limits, parking, JADUs, impact fees,
            and the local plan-check process — explained by a licensed Inland
            Empire general contractor.
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

      {/* Intro */}
      <article className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 mb-10 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                Overview
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-navy/85 text-lg leading-[1.7]">{city.intro}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Regulation Table */}
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
          <div className="bg-white border border-navy/10">
            <table className="w-full">
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={
                      idx % 2 === 0 ? "bg-white" : "bg-cream/40"
                    }
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
          <p className="mt-6 text-navy/60 text-xs leading-relaxed text-center max-w-2xl mx-auto">
            Regulations change frequently. Always verify current requirements
            with your local planning department before starting your project.
          </p>
        </div>
      </section>

      {/* What You Can Build */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                What You Can Build
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Four paths to an ADU in{" "}
              <span className="italic text-gold">{city.name}</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-cream border border-navy/10 p-7">
              <div className="text-4xl mb-4">🏠</div>
              <div className="font-display text-navy text-2xl mb-2 leading-tight">
                Detached ADU
              </div>
              <div className="text-navy/70 text-sm leading-relaxed">
                A standalone unit on your {city.name} lot with its own
                address, utilities, and entrance. Up to {city.maxSize} on
                qualifying parcels — typically the highest-rent and
                highest-appraisal-lift option.
              </div>
            </div>
            <div className="bg-cream border border-navy/10 p-7">
              <div className="text-4xl mb-4">🚪</div>
              <div className="font-display text-navy text-2xl mb-2 leading-tight">
                Garage Conversion
              </div>
              <div className="text-navy/70 text-sm leading-relaxed">
                Convert an existing attached or detached garage into permitted
                living space. The fastest path to an ADU in {city.name} —
                typically 12–16 weeks from permit to final inspection. No
                replacement parking required under California state law.
              </div>
            </div>
            <div className="bg-cream border border-navy/10 p-7">
              <div className="text-4xl mb-4">📐</div>
              <div className="font-display text-navy text-2xl mb-2 leading-tight">
                Junior ADU (JADU)
              </div>
              <div className="text-navy/70 text-sm leading-relaxed">
                Up to 500 sq ft carved out of the existing home footprint in{" "}
                {city.name} — often a bedroom or part of a garage with its own
                entry and efficiency kitchen. Owner-occupancy required if a
                JADU is present on the property.
              </div>
            </div>
            <div className="bg-cream border border-navy/10 p-7">
              <div className="text-4xl mb-4">🏗️</div>
              <div className="font-display text-navy text-2xl mb-2 leading-tight">
                Room Addition ADU
              </div>
              <div className="text-navy/70 text-sm leading-relaxed">
                Attached addition to the main home — adds a bedroom,
                kitchenette, and bath under a shared roof and foundation. Often
                the best fit on tighter {city.name} lots where a detached
                structure doesn&rsquo;t pencil.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Build */}
      <section className="bg-cream py-20 lg:py-24">
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

      {/* Mid-page CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="font-display text-navy text-2xl md:text-3xl mb-5">
            Want to know what your {city.name} lot can support?
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
          >
            Book Free ADU Consultation
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white pb-20 lg:pb-24">
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
              <details
                key={f.q}
                className="border-b border-navy/10 group"
              >
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

      {/* Related Links */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3 text-center">
            Related Resources
          </div>
          <div className="font-display text-navy text-3xl text-center mb-10">
            Keep exploring
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <Link
              href="/services/adu"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">
                ADU Services Overview
              </div>
              <div className="text-navy/60 text-sm mt-1">
                How Construction Station builds ADUs — start to keys.
              </div>
            </Link>
            <Link
              href="/services/adu/floor-plans"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">
                Sample Floor Plans
              </div>
              <div className="text-navy/60 text-sm mt-1">
                12 sample plans from 400 to 1,200 sq ft.
              </div>
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">
                Send Us a Message
              </div>
              <div className="text-navy/60 text-sm mt-1">
                Request a free {city.name} estimate.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-gold text-xs uppercase tracking-[0.4em] mb-2">
              Cities We Serve
            </div>
            <div className="font-display text-navy text-3xl md:text-4xl">
              ADU regulation guides for every Inland Empire city
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-6 text-sm">
            {ADU_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/services/adu/${c.slug}`}
                className="flex items-center gap-2 text-navy/80 hover:text-gold transition-colors"
              >
                <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            Book your free{" "}
            <span className="italic text-gold">
              {city.name} ADU consultation
            </span>
            .
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            We&rsquo;ll walk your lot, confirm what {city.name} will allow,
            and ballpark cost before you commit to anything.
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
    </>
  );
}
