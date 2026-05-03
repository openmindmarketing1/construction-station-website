import HeroVideo from "@/components/HeroVideo";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { CS, HOURS } from "@/lib/constants";
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
      addressLocality: "Inland Empire",
      addressRegion: "CA",
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
    openingHoursSpecification: HOURS.filter((h) => h.time !== "Closed").map(
      (h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.time.split(" – ")[0],
        closes: h.time.split(" – ")[1],
      })
    ),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "17",
    },
    sameAs: [],
    foundingDate: String(CS.founded),
    identifier: CS.license,
  };

  return (
    <>
      <JsonLd data={localBusiness} />
      <HeroVideo />
      <TrustBar />
      <ServicesGrid />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <ServiceAreaSection />
      <CtaSection
        heading="Ready to transform your home?"
        subheading="Free design session — normally $299. Book yours today and get a 3D rendering plus a line-item estimate within a week."
      />
    </>
  );
}
