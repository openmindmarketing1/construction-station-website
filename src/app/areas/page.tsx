import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import CtaSection from "@/components/CtaSection";
import TrustBar from "@/components/TrustBar";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";
import {
  ADU_CITIES,
  REGION_LABEL,
  type RegionKey,
} from "@/lib/adu-cities";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

// Cities we serve that don't (yet) have a dedicated city guide.
const ALSO_SERVED = ["Claremont", "Pomona", "Corona"];

const REGION_ORDER: RegionKey[] = [
  "ie-core",
  "high-desert",
  "temecula-valley",
  "desert",
  "oc-adjacent",
];

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: `Construction Station serves ${ADU_CITIES.length}+ cities across the Inland Empire, High Desert, Temecula Valley, Coachella Valley, and Orange County–adjacent communities. Licensed general contractor since ${CS.founded}. Call ${CS.phone}.`,
  alternates: { canonical: "/areas" },
};

export default function AreasHubPage() {
  const byRegion = REGION_ORDER.map((key) => ({
    key,
    label: REGION_LABEL[key],
    cities: ADU_CITIES.filter((c) => c.regionKey === key),
  })).filter((r) => r.cities.length > 0);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Serve",
        item: `${SITE_URL}/areas`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <ServiceHero
        eyebrow="Service Area"
        title="Areas We Serve"
        italicWord="Serve"
        subtitle={`One crew, ${ADU_CITIES.length}+ cities. From our Yucaipa–Redlands base across the Inland Empire, High Desert, Temecula Valley, Coachella Valley, and Orange County–adjacent communities — same standards, every job.`}
      />

      <TrustBar />

      {byRegion.map((region, idx) => (
        <section
          key={region.key}
          className={`${idx % 2 === 0 ? "bg-white" : "bg-cream"} py-16 lg:py-20`}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-gold" />
              <h2 className="text-gold text-xs uppercase tracking-[0.4em]">
                {region.label}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {region.cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/adu/${c.slug}`}
                  className={`${idx % 2 === 0 ? "bg-cream" : "bg-white"} border border-navy/10 p-6 hover:border-gold transition-colors group`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-display text-navy text-xl">
                      {c.name}
                    </div>
                    <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                  <div className="text-navy/60 text-sm">
                    {c.county} — ADU rules, permits &amp; full-service
                    remodeling guide.
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-navy/70 leading-relaxed">
            We also serve{" "}
            {ALSO_SERVED.map((name, i) => (
              <span key={name} className="font-semibold text-navy">
                {name}
                {i < ALSO_SERVED.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            and surrounding communities.{" "}
            <Link href="/contact" className="text-gold underline hover:no-underline">
              Contact us
            </Link>{" "}
            to confirm coverage for your address.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Build something great in your city."
        subheading="Free in-home design consultation. We&rsquo;ll come to you."
        showForm
      />
    </>
  );
}
