import Link from "next/link";
import ServiceCarousel from "@/components/ServiceCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ReviewsSection from "@/components/ReviewsSection";
import RecentPosts from "@/components/RecentPosts";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";
import { CITIES } from "@/config/cities";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export default function Home() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: CS.name,
    image: `${SITE_URL}/og.jpg`,
    url: SITE_URL,
    telephone: CS.phone,
    email: CS.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "33145 Yucaipa Blvd",
      addressLocality: "Yucaipa",
      addressRegion: "CA",
      postalCode: "92399",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0556,
      longitude: -117.1825,
    },
    areaServed: CITIES.map((c) => ({
      "@type": "City",
      name: `${c.name}, ${c.state}`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "17",
    },
    sameAs: [
      "https://www.google.com/maps?cid=8346061725681242502",
    ],
    foundingDate: String(CS.founded),
    identifier: CS.license,
  };

  return (
    <>
      <JsonLd data={localBusiness} />
      <ServiceCarousel />
      <ServicesGrid />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <ServiceAreaSection />
      <ReviewsSection />

      {/* Featured Project */}
      <section className="bg-navy texture-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Featured Project
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              A Junior ADU in Redlands —{" "}
              <span className="italic text-gold">in progress now.</span>
            </h2>
            <Link
              href="/projects"
              className="text-white/60 hover:text-gold font-body text-sm tracking-wide transition-colors shrink-0"
            >
              View all projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 flex flex-wrap gap-3 mb-2">
              {[
                ["Location", "Redlands, CA"],
                ["Type", "Junior ADU (JADU)"],
                ["Size", "465 sq ft"],
                ["Budget", "~$200K all-in"],
                ["Status", "In Progress"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center gap-2 border border-white/20 px-4 py-2"
                >
                  <span className="text-white/45 text-xs uppercase tracking-wider">{k}</span>
                  <span className="w-px h-3 bg-white/20" />
                  <span className="text-white text-sm font-semibold">{v}</span>
                </div>
              ))}
            </div>
            <div className="md:col-span-1 md:text-right">
              <Link
                href="/projects/redlands-jr-adu"
                className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase tracking-wider px-7 py-3 text-sm hover:bg-yellow-400 transition-colors"
              >
                Read the Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local service spotlight — Yucaipa */}
      <section className="bg-cream py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Serving Yucaipa Since 2008
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-3xl md:text-4xl leading-[1]">
              Local expertise in{" "}
              <span className="italic text-gold">Yucaipa &amp; the Inland Empire</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                label: "Kitchen Remodel Yucaipa CA",
                href: "/kitchen-remodeler-yucaipa-ca",
                note: "Custom kitchens — free in-home consultation",
              },
              {
                label: "ADU Contractors Yucaipa",
                href: "/services/adu/yucaipa",
                note: "Detached ADUs, garage conversions, JADUs",
              },
              {
                label: "Flooring Installation Yucaipa",
                href: "/services/flooring-installation-yucaipa-ca",
                note: "Hardwood, LVP, tile — full service",
              },
              {
                label: "Bathroom Remodeling",
                href: "/services/bathroom-remodeling",
                note: "Walk-in showers, soaking tubs, tile work",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white border border-navy/10 p-5 hover:border-gold transition-colors group"
              >
                <div className="font-display text-navy text-base leading-tight group-hover:text-gold transition-colors mb-1">
                  {item.label}
                </div>
                <div className="text-navy/55 text-xs leading-relaxed">{item.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RecentPosts />
      <CtaSection
        heading="Ready to Start Your Project?"
        subheading="Free design session — normally $299. Book yours today and get a 3D rendering plus a line-item estimate within a week."
      />
    </>
  );
}
