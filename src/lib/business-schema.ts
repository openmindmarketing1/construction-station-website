import { CS } from "@/lib/constants";

// The ONE Construction Station business entity for structured data. Every page
// that describes the business uses this node (same @id, same facts), and every
// provider / author / publisher points at it by @id. Pages add only their own
// extras (areaServed, aggregateRating, …) — never a different name, URL or
// address. A city page must never claim an address in that city: the office is
// in Yucaipa.

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export const BUSINESS_ID = `${SITE_URL}/#organization`;

/** Reference to the business entity, for provider / author / publisher. */
export const BUSINESS_REF = { "@id": BUSINESS_ID };

/** The full business node. Spread it, then add page-specific extras. */
export function businessEntity() {
  return {
    "@type": "GeneralContractor",
    "@id": BUSINESS_ID,
    name: CS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/cs-logo.png`,
    image: `${SITE_URL}/og.jpg`,
    telephone: CS.phone,
    email: CS.email,
    foundingDate: String(CS.founded),
    identifier: CS.license,
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
    sameAs: ["https://www.google.com/maps?cid=8346061725681242502"],
  };
}
