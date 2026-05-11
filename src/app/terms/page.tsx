import type { Metadata } from "next";
import Link from "next/link";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Construction Station Flooring and Design — the agreement that governs use of our website, requests for estimates, SMS communications, and our construction services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 11, 2026";

const SECTION = "scroll-mt-32";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Legal
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-5">
            Terms of <span className="italic text-gold">Service</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base">
            Effective Date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="bg-white border border-navy/10 shadow-sm p-8 lg:p-12 text-navy">
            <div className="prose-legal">
              <p className="text-base leading-relaxed mb-6">
                These Terms of Service (&ldquo;Terms&rdquo;) are a binding
                agreement between you and{" "}
                <strong>Construction Station Flooring and Design</strong>{" "}
                (&ldquo;Construction Station,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) regarding your use of{" "}
                <a
                  href="https://constructionstation.com"
                  className="text-gold underline hover:no-underline"
                >
                  constructionstation.com
                </a>
                , our SMS communications, and our construction services. Our
                digital communications and lead handling are operated by{" "}
                <strong>Open Mind Marketing</strong> on behalf of Construction
                Station.
              </p>
              <p className="text-base leading-relaxed mb-10">
                By using our website, requesting an estimate, or engaging us
                for work, you agree to these Terms. If you do not agree, do not
                use our website or services.
              </p>

              {/* License card */}
              <div className="bg-navy text-white p-6 mb-10">
                <div className="text-gold text-xs uppercase tracking-[0.3em] mb-3">
                  Licensed California Contractor
                </div>
                <div className="font-display text-2xl mb-3">
                  CSLB License #1108879
                </div>
                <div className="text-white/80 text-sm space-y-1">
                  <div>Construction Station Flooring and Design</div>
                  <div>33145 Yucaipa Blvd, Yucaipa, CA 92399</div>
                  <div>
                    Phone:{" "}
                    <a href={CS.phoneHref} className="text-gold hover:underline">
                      (909) 797-6333
                    </a>
                  </div>
                  <div>
                    SMS:{" "}
                    <a
                      href="sms:+19094547300"
                      className="text-gold hover:underline"
                    >
                      +1 (909) 454-7300
                    </a>
                  </div>
                  <div>
                    Email:{" "}
                    <a
                      href="mailto:info@constructionstation.com"
                      className="text-gold hover:underline"
                    >
                      info@constructionstation.com
                    </a>
                  </div>
                </div>
              </div>

              <h2 id="acceptance" className={SECTION}>
                1. Acceptance and Eligibility
              </h2>
              <p>
                You must be at least 18 years old and the owner of the property
                in question (or authorized to act on the owner&rsquo;s behalf)
                to request services from us. By using our site or contacting
                us, you represent that you meet these requirements.
              </p>

              <h2 id="services" className={SECTION}>
                2. Services We Provide
              </h2>
              <p>
                Construction Station Flooring and Design is a licensed
                California contractor (CSLB License #1108879) offering
                residential and commercial construction services across the
                Inland Empire, including:
              </p>
              <ul>
                <li>
                  <strong>Home remodeling</strong> — full and partial home
                  renovations.
                </li>
                <li>
                  <strong>Kitchen remodeling</strong> — design, cabinetry,
                  countertops, tile, lighting, and appliance integration.
                </li>
                <li>
                  <strong>Bathroom remodeling</strong> — walk-in showers, tubs,
                  vanities, tile, and full bathroom redesigns.
                </li>
                <li>
                  <strong>Accessory Dwelling Units (ADUs)</strong> — attached
                  and detached ADUs from permitting through final inspection.
                </li>
                <li>
                  <strong>Room additions</strong> — single- and multi-story
                  additions.
                </li>
                <li>
                  <strong>Flooring</strong> — hardwood, LVP, tile, carpet,
                  laminate, and commercial flooring systems.
                </li>
                <li>
                  <strong>Windows, doors, and outdoor living projects</strong>.
                </li>
                <li>
                  <strong>Commercial construction</strong> — tenant
                  improvements, office and retail buildouts, and renovations.
                </li>
              </ul>
              <p>
                The website provides general information and an intake channel
                for estimate requests. It is not itself a contract for any
                work. All construction work is governed by a separate written
                contract signed by both parties, which controls scope, pricing,
                schedule, warranties, change orders, and payment.
              </p>

              <h2 id="estimates" className={SECTION}>
                3. Estimates, Quotes, and Communications
              </h2>
              <p>
                Estimates and quotes provided through the website, by phone, by
                SMS, or in person are non-binding until reflected in a signed
                construction contract. We reserve the right to refuse service,
                adjust pricing based on actual site conditions, or decline
                projects outside our service area or capability.
              </p>

              <h2 id="sms-terms" className={SECTION}>
                4. SMS / Text Message Terms
              </h2>
              <p>
                Construction Station, working with Open Mind Marketing, sends
                business text messages from{" "}
                <strong>+1 (909) 454-7300</strong>. Two categories of SMS may
                be sent, each requiring its own opt-in:
              </p>
              <ul>
                <li>
                  <strong>Transactional SMS</strong> — appointment
                  confirmations, scheduling, project updates, inspection
                  notices, and invoice reminders.
                </li>
                <li>
                  <strong>Marketing SMS</strong> — promotions, seasonal offers,
                  and announcements. Marketing SMS is optional and requires a
                  separate, express opt-in.
                </li>
              </ul>
              <p>
                Message frequency varies.{" "}
                <strong>Message and data rates may apply</strong> depending on
                your wireless plan. Carriers (including AT&amp;T, T-Mobile,
                Verizon, and others) are not liable for delayed or undelivered
                messages.
              </p>
              <p>
                Reply <strong>STOP</strong> to unsubscribe and{" "}
                <strong>HELP</strong> for help. You can also contact us at{" "}
                <a href={CS.phoneHref} className="text-gold underline">
                  (909) 797-6333
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@constructionstation.com"
                  className="text-gold underline"
                >
                  info@constructionstation.com
                </a>
                . By providing your mobile number and opting in, you consent to
                receive the corresponding category of SMS at that number,
                including messages sent using an automated system. Consent is
                not a condition of purchase. Full SMS details, including how
                long we keep records and how we handle opt-outs, are described
                in our{" "}
                <Link href="/privacy" className="text-gold underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                <strong>
                  We do not sell or share your mobile number or SMS opt-in
                  information with third parties for their marketing purposes.
                </strong>
              </p>

              <h2 id="website-use" className={SECTION}>
                5. Acceptable Use of the Website
              </h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the site for any unlawful purpose.</li>
                <li>
                  Submit false, misleading, or fraudulent information through
                  any form.
                </li>
                <li>
                  Attempt to interfere with, probe, or disrupt the website,
                  including by scraping, automated submissions, or bypassing
                  security controls.
                </li>
                <li>
                  Upload content that infringes someone else&rsquo;s rights or
                  contains malicious code.
                </li>
              </ul>

              <h2 id="ip" className={SECTION}>
                6. Intellectual Property
              </h2>
              <p>
                All content on our website — including text, photos of past
                projects, logos, designs, and graphics — is owned by
                Construction Station or its licensors and is protected by
                copyright and trademark laws. You may not copy, reproduce, or
                use this content for commercial purposes without our written
                permission.
              </p>
              <p>
                Photos and videos you upload through our intake form are used
                only for the purpose of evaluating and performing your
                requested work, except where you separately give us permission
                to use them for marketing.
              </p>

              <h2 id="warranties" className={SECTION}>
                7. Warranties and Disclaimers
              </h2>
              <p>
                Construction Station stands behind its workmanship under the
                terms of each signed construction contract and applicable
                California law. Manufacturer warranties on materials and
                fixtures are passed through to the customer.
              </p>
              <p>
                Except for the warranties expressly described in your signed
                construction contract, our website and pre-contract
                communications are provided <strong>&ldquo;as is&rdquo;</strong>{" "}
                and <strong>&ldquo;as available&rdquo;</strong> without
                warranty of any kind, express or implied, including warranties
                of merchantability, fitness for a particular purpose, accuracy,
                or non-infringement. We do not warrant that information on the
                website is complete, current, or error-free.
              </p>

              <h2 id="limitation-of-liability" className={SECTION}>
                8. Limitation of Liability
              </h2>
              <p>
                <strong>
                  To the maximum extent permitted by California law,
                  Construction Station Flooring and Design, Open Mind
                  Marketing, and their respective owners, employees, agents,
                  and affiliates will not be liable for any indirect,
                  incidental, special, consequential, exemplary, or punitive
                  damages — including lost profits, lost data, loss of
                  goodwill, or business interruption — arising out of or
                  relating to your use of the website, SMS communications, or
                  pre-contract interactions, even if we have been advised of
                  the possibility of such damages.
                </strong>
              </p>
              <p>
                For any other liability arising from your use of the website or
                pre-contract communications, our total aggregate liability is
                limited to one hundred dollars (US $100). This limitation does
                not apply to (a) liability that cannot be limited under
                California law, (b) the express terms of a signed construction
                contract between you and Construction Station, or (c) the
                statutory rights provided to consumers under California
                contractor law.
              </p>

              <h2 id="indemnification" className={SECTION}>
                9. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Construction Station
                and Open Mind Marketing from any claims, damages, or expenses
                (including reasonable attorneys&rsquo; fees) arising out of (a)
                your misuse of the website, (b) your violation of these Terms,
                or (c) your violation of any rights of a third party.
              </p>

              <h2 id="third-party" className={SECTION}>
                10. Third-Party Services and Links
              </h2>
              <p>
                The website may link to third-party services such as financing
                partners, review sites, and social media. We are not
                responsible for the content, terms, or privacy practices of
                those services.
              </p>

              <h2 id="termination" className={SECTION}>
                11. Suspension and Termination
              </h2>
              <p>
                We may suspend or terminate your access to the website and SMS
                communications at any time for any reason, including violation
                of these Terms. Sections that by their nature should survive
                termination — including Intellectual Property, Warranties and
                Disclaimers, Limitation of Liability, Indemnification, and
                Governing Law — will survive.
              </p>

              <h2 id="governing-law" className={SECTION}>
                12. Governing Law and Venue
              </h2>
              <p>
                These Terms are governed by the laws of the State of
                California, without regard to its conflict-of-laws principles.
                Any dispute arising out of or relating to these Terms or your
                use of the website will be brought exclusively in the state or
                federal courts located in San Bernardino County, California,
                and you consent to the jurisdiction of those courts. Nothing
                in this section limits your statutory rights under California
                consumer or contractor protection laws.
              </p>

              <h2 id="changes" className={SECTION}>
                13. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. When we make
                material changes, we will post the new effective date at the
                top of this page. Your continued use of the website or services
                after an update means you accept the revised Terms.
              </p>

              <h2 id="contact" className={SECTION}>
                14. Contact Us
              </h2>
              <p>Questions about these Terms? Contact us:</p>
              <ul>
                <li>
                  <strong>Construction Station Flooring and Design</strong>
                </li>
                <li>33145 Yucaipa Blvd, Yucaipa, CA 92399</li>
                <li>
                  Phone:{" "}
                  <a href={CS.phoneHref} className="text-gold underline">
                    (909) 797-6333
                  </a>
                </li>
                <li>
                  SMS:{" "}
                  <a href="sms:+19094547300" className="text-gold underline">
                    +1 (909) 454-7300
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@constructionstation.com"
                    className="text-gold underline"
                  >
                    info@constructionstation.com
                  </a>
                </li>
                <li>CSLB License #1108879</li>
              </ul>

              <div className="mt-12 pt-6 border-t border-navy/10 text-sm text-navy/60">
                Construction Station Flooring and Design · CSLB License
                #1108879 · Operated digitally by Open Mind Marketing on behalf
                of Construction Station.{" "}
                <Link href="/privacy" className="text-gold underline">
                  See our Privacy Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .prose-legal h2 {
          font-family: var(--font-display), serif;
          font-size: 1.5rem;
          line-height: 1.2;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #0a1733;
        }
        .prose-legal h3 {
          font-family: var(--font-body), sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          margin-top: 1.75rem;
          margin-bottom: 0.6rem;
          color: #0a1733;
        }
        .prose-legal p {
          color: #1a2a4a;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .prose-legal ul {
          list-style: disc;
          padding-left: 1.25rem;
          margin-bottom: 1rem;
        }
        .prose-legal ul li {
          color: #1a2a4a;
          line-height: 1.7;
          margin-bottom: 0.4rem;
        }
        .prose-legal strong { color: #0a1733; }
      `}</style>
    </>
  );
}
