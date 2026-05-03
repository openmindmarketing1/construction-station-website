import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import CtaSection from "@/components/CtaSection";
import TrustBar from "@/components/TrustBar";
import JsonLd from "@/components/JsonLd";
import { CITIES } from "@/config/cities";
import { CS, SERVICES } from "@/lib/constants";

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
    title: `Kitchen & Bathroom Remodeling in ${city.name}, ${city.state}`,
    description: `Premium home renovation in ${city.name}, ${city.state}. Kitchens, bathrooms, ADUs, and additions by Construction Station — licensed contractor since 2008. Call ${CS.phone}.`,
    alternates: { canonical: `/areas/${city.slug}` },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) notFound();

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

  return (
    <>
      <JsonLd data={localBusinessSchema} />

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

      <CtaSection
        heading={`Build something great in ${city.name}.`}
        subheading="Free in-home design consultation. We&rsquo;ll come to you."
        showForm
      />
    </>
  );
}
