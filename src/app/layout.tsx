import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCTA from "@/components/FloatingCTA";
import SmoothScrollInit from "@/components/SmoothScrollInit";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

const displayFont = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Construction Station | Kitchen & Bathroom Remodeling in the Inland Empire",
    template: "%s | Construction Station",
  },
  description:
    "Licensed contractor serving the Inland Empire since 2008. Kitchen remodeling, bathroom renovations, ADUs, room additions. Free design session worth $299. Call 909-797-6333.",
  keywords: [
    "kitchen remodeling",
    "bathroom remodeling",
    "Inland Empire contractor",
    "ADU builder",
    "Redlands remodeling",
    "Riverside contractor",
    "home renovation",
  ],
  authors: [{ name: "Construction Station" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Construction Station",
    title: "Construction Station | Residential & Commercial Construction in the Inland Empire",
    description:
      "Licensed kitchen, bath, and home renovation contractor serving the Inland Empire since 2008. Free design session — book your consultation today.",
    images: [{ url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, alt: "Construction Station — Inland Empire Contractor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Station | Residential & Commercial Construction",
    description:
      "Award-winning kitchen and bathroom remodeling in the Inland Empire. Licensed, bonded, insured.",
    images: [`${SITE_URL}/og.jpg`],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "UWNjKJBmwzIEvCFajoKffM2zPfwIqwx8jvCiM6cmNBk",
  },
};

// Site-wide entity identity for search engines and AI answer engines. Page-level
// LocalBusiness/GeneralContractor schemas reference richer location data; this
// establishes the single canonical Organization across every route.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
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
  sameAs: ["https://www.google.com/maps?cid=8346061725681242502"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        {/* Google tag (gtag.js) — GA4 + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CG9QRL26H7"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CG9QRL26H7');
            gtag('config', 'AW-16750133133');
          `}
        </Script>
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${CS.pixel}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${CS.pixel}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className="font-body bg-cream text-navy antialiased">
        <JsonLd data={organizationSchema} />
        <SmoothScrollInit />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingCTA />
        <SpeedInsights />
        <Script
          src="https://www.openmindmarketing.ai/widget/chat.js"
          data-business-id="1"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
