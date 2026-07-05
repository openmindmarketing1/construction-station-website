import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import TrustBar from "@/components/TrustBar";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";
import {
  buildServiceCityFaqs,
  getServiceCityProfile,
  getServiceCityService,
  serviceCityLinks,
  type ServiceCityProfile,
  type ServiceKey,
} from "@/lib/service-city-pages";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export function serviceCityMetadata(
  serviceKey: ServiceKey,
  slug: string
): Metadata {
  const city = getServiceCityProfile(slug);
  if (!city) return { title: "Page Not Found" };
  const service = getServiceCityService(serviceKey);
  return {
    // `absolute` bypasses the root layout's "%s | Construction Station"
    // template since the brand is included here already.
    title: { absolute: `${service.keyword} ${city.name} CA | Construction Station` },
    description: `${service.keyword} in ${city.name} CA by Construction Station — licensed general contractor (CSLB ${CS.license}) serving the ${city.regionLabel} since ${CS.founded}. Fixed-price contracts, free consultations. Call ${CS.phone}.`,
    alternates: {
      canonical: `/services/${service.routeSegment}/${city.slug}`,
    },
  };
}

export default function ServiceCityPage({
  serviceKey,
  city,
}: {
  serviceKey: ServiceKey;
  city: ServiceCityProfile;
}) {
  const service = getServiceCityService(serviceKey);
  const faqs = buildServiceCityFaqs(service, city);
  const pageUrl = `${SITE_URL}/services/${service.routeSegment}/${city.slug}`;
  const otherLinks = serviceCityLinks(city).filter(
    (l) => l.href !== `/services/${service.routeSegment}/${city.slug}`
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.schemaServiceType,
    name: `${service.keyword} ${city.name} CA`,
    url: pageUrl,
    provider: {
      "@type": "GeneralContractor",
      name: CS.name,
      telephone: CS.phone,
      email: CS.email,
      url: SITE_URL,
      identifier: CS.license,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: `${city.name}, CA`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${city.county} County`,
      },
    },
    description: `${service.shortDescription} Serving ${city.name} and the ${city.regionLabel}.`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free in-home consultation and written estimate",
    },
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
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${SITE_URL}${service.mainHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${service.keyword} in ${city.name}, CA`,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. HERO */}
      <ServiceHero
        eyebrow={`${service.name} · ${city.regionLabel}`}
        title={`${service.keyword} in ${city.name}, CA`}
        italicWord={city.name}
        subtitle={`${city.heroBlurb} ${service.shortDescription} Licensed CSLB ${CS.license} · Serving ${city.name} since ${CS.founded}.`}
      />

      <TrustBar />

      {/* 2. OVERVIEW + LOCAL CONTEXT */}
      <article className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                {service.name} · {city.name}
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9">
              {service.intro.map((p) => (
                <p key={p.slice(0, 40)} className="text-navy/80 leading-[1.8] mb-5">
                  {p}
                </p>
              ))}

              <h2 className="font-display text-navy text-3xl mt-10 mb-4">
                Working in {city.name}
              </h2>
              <p className="text-navy/80 leading-[1.8] mb-5">{city.cityIntro}</p>
              <p className="text-navy/80 leading-[1.8] mb-5">
                {city.angles[serviceKey]}
              </p>
              <p className="text-navy/80 leading-[1.8]">{city.proximity}</p>
            </div>
          </div>
        </div>
      </article>

      {/* 3. WHAT'S INCLUDED */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                What We Build
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              {city.name} {service.name.toLowerCase()},{" "}
              <span className="italic text-gold">done right</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.included.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors"
              >
                <div className="font-display text-navy text-xl mb-2">
                  {item.title}
                </div>
                <div className="text-navy/60 text-sm leading-relaxed">
                  {item.blurb}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
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
              {city.name} {service.keyword.toLowerCase()}{" "}
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

      {/* 5. CALENDLY CTA */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Free Consultation
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1] mb-4">
              Start your {city.name} project.{" "}
              <span className="italic text-gold">Pick a time.</span>
            </h2>
            <p className="text-navy/65 max-w-lg mx-auto text-sm leading-relaxed">
              Book a free in-home design consultation directly on our calendar —
              we come to you, anywhere in the {city.regionLabel}. Prefer the
              phone? Call{" "}
              <a href={CS.phoneHref} className="text-gold font-semibold">
                {CS.phone}
              </a>
              .
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      {/* 6. INTERNAL LINKS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-10">
            <Link
              href={`/areas/${city.slug}`}
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors"
            >
              <div className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                Service Area
              </div>
              <div className="font-display text-navy text-2xl">
                Remodeling in {city.name}
              </div>
              <div className="text-navy/60 text-sm mt-1">
                Everything Construction Station builds in {city.name} — the full
                city guide.
              </div>
            </Link>
            <Link
              href={service.mainHref}
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors"
            >
              <div className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                Learn More
              </div>
              <div className="font-display text-navy text-2xl">
                {service.mainLabel}
              </div>
              <div className="text-navy/60 text-sm mt-1">
                {service.shortDescription}
              </div>
            </Link>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-gold text-xs uppercase tracking-[0.3em] mb-4 text-center">
              More services in {city.name}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {otherLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-block border border-navy/15 bg-white text-navy px-5 py-2.5 text-sm hover:bg-navy hover:text-gold hover:border-navy transition-all"
                >
                  {l.name} in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
