import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Gregory Pilon and Gustavo Mancilla — the owners behind Construction Station. Flooring roots since 2008, general contracting since 2018, merged 2023. Licensed GC CSLB #1108879, BBB A+.",
  alternates: { canonical: "/about" },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";
const SB = "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/";

const TIMELINE = [
  {
    year: "2008",
    event: "Carpet Station Tile and Wood opens",
    detail:
      "A family-run flooring shop opens in the Inland Empire, building a reputation for quality hardwood, tile, and LVP installations across the region over the next 15 years.",
  },
  {
    year: "2018",
    event: "Gerold Construction established",
    detail:
      "General contracting capabilities are added — kitchens, bathrooms, ADUs, and room additions — expanding what the team can deliver to Inland Empire homeowners.",
  },
  {
    year: "April 2023",
    event: "Construction Station is born",
    detail:
      "Gregory Pilon and Gustavo Mancilla acquire both companies and merge them into Construction Station Flooring and Design — one licensed GC firm with flooring roots reaching back to 2008.",
  },
  {
    year: "Today",
    event: "17 reviews. 16+ cities. One team.",
    detail:
      "Licensed General Contractor (CSLB #1108879), BBB A+ accredited, serving the Inland Empire from Redlands to Riverside, Yucaipa to Victorville.",
  },
];

const TEAM = [
  {
    name: "Gregory Pilon",
    role: "Co-Owner / President",
    photo: `${SB}business-1/Team%20Photos/Greg_Pilon.jpg`,
    initials: "GP",
    hasPhoto: false,
  },
  {
    name: "Gustavo Mancilla",
    role: "Co-Owner / VP Operations",
    photo: `${SB}business-1/Team%20Photos/Gustavo_Mancilla.jpg`,
    initials: "GM",
    hasPhoto: true,
  },
  {
    name: "Cameron Kemock",
    role: "Lead Project Manager",
    photo: `${SB}business-1/Team%20Photos/Cameron_Kemock.jpg`,
    initials: "CK",
    hasPhoto: false,
  },
  {
    name: "Lisa Elias",
    role: "Office Manager",
    photo: `${SB}business-1/Team%20Photos/Lisa_Elias.jpg`,
    initials: "LE",
    hasPhoto: false,
  },
];

const WHY_US = [
  {
    icon: "🏛️",
    title: "Licensed General Contractor",
    body: `California Contractor's License ${CS.license}. Bonded, insured, and credentialed to pull permits in every Inland Empire jurisdiction.`,
  },
  {
    icon: "📐",
    title: "Free 3D Design Session",
    body: "New clients get a custom 3D rendering and detailed line-item estimate at no charge — no obligation, no pressure.",
  },
  {
    icon: "📋",
    title: "Permit Management",
    body: "We handle every permit, plan check, and city inspection from submittal to certificate of occupancy. You never talk to City Hall unless you want to.",
  },
  {
    icon: "🔒",
    title: "Fixed-Price Contracts",
    body: "Transparent line-item quotes signed before demo begins. Change orders only happen when you ask for them — no surprise upcharges.",
  },
  {
    icon: "📍",
    title: "Local Inland Empire Knowledge",
    body: "16+ cities served. We know each jurisdiction's plan-check quirks, preferred inspectors, and typical timelines before we submit a single page.",
  },
];

const TRUST_STATS = [
  { value: "2008", label: "Flooring roots since" },
  { value: "17", label: "Five-star Google reviews" },
  { value: "16+", label: "Inland Empire cities served" },
  { value: "#1108879", label: "CSLB License" },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "About Construction Station",
  description:
    "Meet the team behind Construction Station — licensed GC serving the Inland Empire since 2023, with flooring roots to 2008.",
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CS.name,
    foundingDate: "2023",
    founders: [
      { "@type": "Person", name: "Gregory Pilon", jobTitle: "Co-Owner / President" },
      { "@type": "Person", name: "Gustavo Mancilla", jobTitle: "Co-Owner / VP Operations" },
    ],
    employees: [
      { "@type": "Person", name: "Cameron Kemock", jobTitle: "Lead Project Manager" },
      { "@type": "Person", name: "Lisa Elias", jobTitle: "Office Manager" },
    ],
    identifier: CS.license,
    telephone: CS.phone,
    areaServed: "Inland Empire, California",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-navy texture-navy pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F5A623 0, #F5A623 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Our Story
            </span>
          </div>
          <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl leading-[1] mb-8 max-w-4xl">
            Two Trusted Local Companies,{" "}
            <span className="italic text-gold">One Team</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Construction Station brings together 15+ years of Inland Empire
            flooring expertise and 6+ years of general contracting under one
            licensed roof — family-run, permit-ready, and community first.
          </p>
        </div>
      </section>

      {/* ── Our Story / Timeline ──────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              How We Got Here
            </span>
          </div>
          <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl mb-20 leading-[1.1]">
            Built on two companies,{" "}
            <span className="italic">one mission.</span>
          </h2>

          <div className="relative">
            <div className="hidden lg:block absolute left-[calc(16.666%-1px)] top-0 bottom-0 w-px bg-navy/10" />

            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`grid lg:grid-cols-6 gap-6 lg:gap-16 items-start ${
                    i < TIMELINE.length - 1 ? "pb-16 mb-16 border-b border-navy/10" : "pb-0"
                  }`}
                >
                  <div className="lg:col-span-1 flex lg:block items-center gap-4">
                    <span className="font-display text-gold text-2xl md:text-3xl shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-navy text-2xl md:text-3xl mb-3">
                      {item.event}
                    </h3>
                    <p className="text-navy/70 text-base md:text-lg leading-relaxed max-w-2xl">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              The People
            </span>
          </div>
          <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1]">
            Meet the team.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] bg-navy/5 overflow-hidden mb-5">
                  {member.hasPhoto ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name} — ${member.role} at Construction Station`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-navy flex items-center justify-center">
                      <span className="font-display text-gold text-5xl md:text-6xl select-none">
                        {member.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                </div>
                <h3 className="font-display text-navy text-xl md:text-2xl leading-tight">
                  {member.name}
                </h3>
                <p className="text-gold text-sm tracking-wide mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="bg-navy texture-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1]">
            What sets us apart.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 p-8 hover:border-gold/50 transition-colors"
              >
                <span className="text-3xl block mb-5">{item.icon}</span>
                <h3 className="font-display text-white text-xl mb-3">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Stats ───────────────────────────────────────────────── */}
      <section className="bg-cream border-y border-navy/10 py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-gold text-4xl md:text-5xl mb-2">
                  {stat.value}
                </div>
                <div className="text-navy/60 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-display text-navy text-4xl md:text-5xl mb-6 leading-tight">
            Ready to build with us?
          </h2>
          <p className="text-navy/65 text-lg mb-10 leading-relaxed">
            Book your free consultation and meet the team. We&apos;ll walk your project,
            answer every question, and give you a transparent line-item estimate — no
            obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold text-navy font-body font-semibold uppercase tracking-wider px-8 py-4 hover:bg-yellow-400 transition-colors"
            >
              Book Free Estimate
            </Link>
            <a
              href={CS.phoneHref}
              className="border border-navy text-navy font-body font-semibold uppercase tracking-wider px-8 py-4 hover:bg-navy hover:text-white transition-colors"
            >
              Call {CS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
