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
import VibeRouteTracker from "@/components/VibeRouteTracker";
import BareRouteGate from "@/components/BareRouteGate";
import VibePixelFallback from "@/components/VibePixelFallback";
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
    "Serving the Inland Empire since 2008. CSLB #1108879. Kitchen remodeling, bathroom renovations, ADUs, room additions. Free design session worth $299. Call 909-797-6333.",
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
  // No root-level canonical: a layout-inherited canonical marks every page
  // that forgets its own as a duplicate of the homepage (the exact defect the
  // 2026-08-17 audit found on the OMM site). The homepage's self-canonical
  // lives in app/page.tsx; every other route declares its own.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Construction Station",
    title: "Construction Station | Residential & Commercial Construction in the Inland Empire",
    description:
      "Kitchen, bath, and home renovation contractor serving the Inland Empire since 2008. CSLB #1108879. Free design session — book your consultation today.",
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
        {/* html.js gate for the CSS scroll reveals (Reveal.tsx) — runs before
            paint so content never flashes visible-then-hidden; without JS the
            class is absent and everything stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {/* Google tag (gtag.js) — GA4 + Google Ads. lazyOnload (2026-08-21):
            gtag was 230ms+ of main-thread work inside the Lighthouse TBT
            window on throttled mobile; loading after window.load keeps the
            pageview + Ads config intact while freeing first-load. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CG9QRL26H7"
          strategy="lazyOnload"
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
        {/* Vibe CTV pixel — ID hardcoded on purpose: an unset NEXT_PUBLIC_ env
            var silently drops the tag on deploy (how the GA4 tag went missing).
            Client-side route changes are covered by <VibeRouteTracker />; the
            lead event fires via vibeLead() (src/lib/vibe.ts) on confirmed
            submit success in the estimate forms and on Calendly bookings
            (useCalendlyVibeLead). The cost-guide download deliberately does
            NOT fire it — see LeadMagnetCard. */}
        {/* Split for PageSpeed (2026-08-21): the tiny stub+queue runs early so
            no vbpx() call is ever lost; the remote vbpx.js replays the queue
            via s.process.

            CORRECTED 2026-08-30, then corrected again the same day — read
            both halves before changing this.

            (a) strategy="lazyOnload" defers the fetch to browser idle after
            window load, and on a page with a chat widget and other third-party
            tags idle may never arrive. afterInteractive requests it
            deterministically instead (measured: fetched at ~400ms, queue
            flushed by ~740ms). That part stands.

            (b) The event-loss numbers first recorded here blamed lazyOnload
            for a 30-80% drop. That was WRONG. The real cause is that
            s.vibe.co itself is flaky: fetching the script directly, with no
            browser and no page involved, gave 2/12 successes from one network
            and ECONNRESET from a second, independent one. tracker.vibe.co
            (the host in Vibe's current docs) was 0/12. By contrast the event
            COLLECTOR, t.vibe.co/pixel/s, answered 8/8.

            So: when the script fails to load, the synchronously-queued
            page_view AND any queued lead event are discarded with nothing
            logged. That is Vibe-side infrastructure, not something this
            loading strategy can fix, and it is worth raising with Vibe —
            it undercounts every conversion the CTV campaign depends on.

            Keeping afterInteractive regardless: a small tracker requested
            deterministically beats one that waits for an idle that may never
            come, and it removes one of the two failure modes. */}
        <Script id="vibe-pixel" strategy="afterInteractive">
          {`
            !function(v,c){if(!v[c]){var s=v[c]=function(){s.process?s.process.apply(s,arguments):s.queue.push(arguments)};s.queue=[],s.b=1*new Date}}(window,"vbpx");
            vbpx('init','MuZz4z');
            vbpx('event', 'page_view');
          `}
        </Script>
        <Script src="https://s.vibe.co/vbpx.js" strategy="afterInteractive" />
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
        <VibeRouteTracker />
        {/* Sends page_view/lead as image beacons when Vibe's script host fails.
            Mutually exclusive with the script — see the component. */}
        <VibePixelFallback />
        <SmoothScrollInit />
        <BareRouteGate>
          <Header />
        </BareRouteGate>
        <main className="min-h-screen">{children}</main>
        <BareRouteGate>
          <Footer />
          <ScrollToTop />
          <FloatingCTA />
        </BareRouteGate>
        <SpeedInsights />
        {/* data-offset-bottom lifts the widget above the mobile FloatingCTA
            bar (a11y target-size: the card was partially covering the Free
            Estimate link). */}
        <Script
          src="https://www.openmindmarketing.ai/widget/chat.js"
          data-business-id="1"
          data-offset-bottom="72"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
