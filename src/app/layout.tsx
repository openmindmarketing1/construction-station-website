import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCTA from "@/components/FloatingCTA";
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingCTA />
      </body>
    </html>
  );
}
