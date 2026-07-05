import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import CtaSection from "@/components/CtaSection";
import TrustBar from "@/components/TrustBar";
import JsonLd from "@/components/JsonLd";
import { CITIES } from "@/config/cities";
import { CS, SERVICES } from "@/lib/constants";
import {
  CALENDLY_URL,
  getServiceCityProfile,
  serviceCityLinks,
} from "@/lib/service-city-pages";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) return { title: "Service Area Not Found" };
  return {
    // `absolute` bypasses the root layout's "%s | Construction Station"
    // template so the override's brand isn't appended twice. Cities without an
    // override keep the templated title (brand added once by the template).
    title: city.seoTitle
      ? { absolute: city.seoTitle }
      : `Kitchen & Bathroom Remodeling in ${city.name}, ${city.state}`,
    description:
      city.seoDescription ??
      `Premium home renovation in ${city.name}, ${city.state}. Kitchens, bathrooms, ADUs, and additions by Construction Station — licensed contractor since 2008. Call ${CS.phone}.`,
    alternates: { canonical: `/areas/${city.slug}` },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) notFound();

  // Cities with dedicated per-service pages get city-specific service links.
  const serviceProfile = getServiceCityProfile(city.slug);
  const cityServiceLinks = serviceProfile
    ? serviceCityLinks(serviceProfile)
    : null;

  const faqSchema = city.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: city.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: `${CS.name} — ${city.name}`,
    url: `${SITE_URL}/areas/${city.slug}`,
    telephone: CS.phone,
    email: CS.email,
    priceRange: "$$$",
    areaServed: {
      "@type": "City",
      name: `${city.name}, ${city.state}`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${city.county} County`,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "17",
    },
    identifier: CS.license,
    foundingDate: String(CS.founded),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Remodeling in ${city.name}, ${city.state}`,
        item: `${SITE_URL}/areas/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <ServiceHero
        eyebrow={`Service Area · ${city.county} County`}
        title={`Remodeling in ${city.name}, ${city.state}`}
        italicWord={city.name}
        subtitle={`${city.description}. From ${city.name} kitchens and bathrooms to ADUs and additions — same crew, same standards, every job.`}
      />

      <TrustBar />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                Serving {city.name}
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl leading-[1.05]">
                Local crew, premium <span className="italic text-gold">finish</span>.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              {city.localContext ? (
                city.localContext.map((p, i) => (
                  <p
                    key={p.slice(0, 40)}
                    className={`text-navy/80 leading-[1.8]${
                      i === city.localContext!.length - 1 ? "" : " mb-5"
                    }`}
                  >
                    {p}
                  </p>
                ))
              ) : (
                <>
              <p className="text-navy/80 leading-[1.8] mb-5">
                Construction Station has been remodeling homes in {city.name},
                {" "}
                {city.state} since {CS.founded}. With a population of roughly{" "}
                {city.population ?? "—"}, {city.name} sits in {city.county}{" "}
                County and offers a mix of mid-century homes, mid-2000s tract
                builds, and newer custom construction — each with its own
                renovation challenges and opportunities.
              </p>
              <p className="text-navy/80 leading-[1.8] mb-5">
                We pull permits through {city.county} County Building &amp;
                Safety, coordinate with local inspectors, and know which
                neighborhoods have which quirks (slab-on-grade vs raised
                foundations, common electrical service sizes, where the older
                galvanized lines still hide).
              </p>
              <p className="text-navy/80 leading-[1.8]">
                Whether you&rsquo;re refreshing a guest bath in a 1990s tract
                home or designing a full kitchen-and-great-room transformation
                in a custom build, your project is handled by the same
                Construction Station crew — no rotating subs, no ghosting,
                no last-minute price hikes.
              </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
              Services Available in {city.name}
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              All disciplines, <span className="italic text-gold">one</span>{" "}
              contractor.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.hasPage).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
                <div className="font-display text-navy text-xl mb-1">
                  {s.name}
                </div>
                <div className="text-navy/60 text-sm">{s.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific service guides */}
      {cityServiceLinks && (
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="text-center mb-12">
              <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                {city.name} Service Guides
              </div>
              <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
                Your project, <span className="italic text-gold">in</span>{" "}
                {city.name}.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityServiceLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-display text-navy text-xl">
                      {l.name} in {city.name}
                    </div>
                    <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                  <div className="text-navy/60 text-sm">{l.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {city.faqs && (
        <section className="bg-cream py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-5 lg:px-10">
            <div className="text-center mb-12">
              <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                {city.name} FAQ
              </div>
              <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
                {city.name} remodeling{" "}
                <span className="italic text-gold">questions, answered</span>.
              </h2>
            </div>
            <div className="border-t border-navy/10">
              {city.faqs.map((f) => (
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
            <div className="text-center mt-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
              >
                Book a Free Consultation
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      <CtaSection
        heading={`Build something great in ${city.name}.`}
        subheading="Free in-home design consultation. We&rsquo;ll come to you."
        showForm
      />
    </>
  );
}
