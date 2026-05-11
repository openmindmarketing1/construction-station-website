import type { Metadata } from "next";
import Link from "next/link";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Construction Station Flooring and Design — how we collect, use, and protect your personal information, including SMS communications and your opt-in choices.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 11, 2026";

const SECTION = "scroll-mt-32";

export default function PrivacyPage() {
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
            Privacy <span className="italic text-gold">Policy</span>
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
                This Privacy Policy explains how{" "}
                <strong>Construction Station Flooring and Design</strong>{" "}
                (&ldquo;Construction Station,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
                protects your personal information when you visit{" "}
                <a
                  href="https://constructionstation.com"
                  className="text-gold underline hover:no-underline"
                >
                  constructionstation.com
                </a>
                , request a quote, communicate with us by phone or SMS, or use
                our services. Our digital communications and lead handling are
                operated by{" "}
                <strong>Open Mind Marketing</strong> on behalf of Construction
                Station.
              </p>

              <p className="text-base leading-relaxed mb-10">
                By using our website or providing your information to us, you
                consent to the practices described in this Policy.
              </p>

              {/* Quick contact card */}
              <div className="bg-navy text-white p-6 mb-10">
                <div className="text-gold text-xs uppercase tracking-[0.3em] mb-3">
                  Contact
                </div>
                <div className="font-display text-2xl mb-3">
                  Construction Station Flooring and Design
                </div>
                <div className="text-white/80 text-sm space-y-1">
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
                  <div>CSLB License #1108879</div>
                </div>
              </div>

              <h2 id="information-we-collect" className={SECTION}>
                1. Information We Collect
              </h2>
              <p>
                We collect the information you provide directly to us and
                information that is generated automatically when you interact
                with our website.
              </p>

              <h3>1.1 Information You Provide</h3>
              <ul>
                <li>
                  <strong>Contact details</strong> — name, phone number, email
                  address, and service address when you request an estimate or
                  contact us.
                </li>
                <li>
                  <strong>Project details</strong> — descriptions of the work
                  you&rsquo;re considering (kitchen, bathroom, ADU, flooring,
                  room addition, commercial buildout, etc.), photos or
                  measurements you choose to upload, and budget or timeline
                  notes.
                </li>
                <li>
                  <strong>Communication content</strong> — messages, calls,
                  texts, and emails you exchange with our team.
                </li>
                <li>
                  <strong>Payment information</strong> — for active customers,
                  billing details collected by us or by our payment processors
                  (we do not store full card numbers on our servers).
                </li>
              </ul>

              <h3>1.2 Information Collected Automatically</h3>
              <ul>
                <li>
                  <strong>Usage data</strong> — pages visited, time on page,
                  referring URLs, and similar analytics.
                </li>
                <li>
                  <strong>Device data</strong> — IP address, browser type,
                  operating system, and approximate location derived from your
                  IP.
                </li>
                <li>
                  <strong>Cookies and pixels</strong> — including the Meta
                  Pixel and other advertising and analytics technologies used
                  to measure marketing performance.
                </li>
              </ul>

              <h2 id="how-we-use" className={SECTION}>
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to estimate requests and questions.</li>
                <li>
                  Schedule consultations, in-home assessments, and project
                  work.
                </li>
                <li>
                  Send appointment confirmations, project updates, invoices,
                  and other service-related communications.
                </li>
                <li>
                  Send marketing communications (only when you have opted in).
                </li>
                <li>Improve our website, services, and customer experience.</li>
                <li>
                  Comply with our legal, contractual, and licensing
                  obligations.
                </li>
              </ul>

              <h2 id="sms-communications" className={SECTION}>
                3. SMS / Text Message Communications
              </h2>
              <p>
                Construction Station, working with Open Mind Marketing, sends
                text messages from our business line at{" "}
                <strong>+1 (909) 454-7300</strong>. We use two separate
                categories of SMS, and each requires its own opt-in.
              </p>

              <h3>3.1 Transactional SMS (Service-Related)</h3>
              <p>
                Transactional messages relate directly to a job, request, or
                appointment you have started with us. Examples include:
              </p>
              <ul>
                <li>Estimate confirmations and follow-up scheduling.</li>
                <li>Appointment reminders and arrival windows.</li>
                <li>Project status updates and inspection notifications.</li>
                <li>Invoice and payment reminders.</li>
              </ul>
              <p>
                You opt in to transactional SMS by checking the SMS consent box
                on our contact form, by providing your number when you request
                a quote, or by texting us first. Transactional SMS is required
                if you want us to coordinate the project by text.
              </p>

              <h3>3.2 Marketing SMS (Promotional)</h3>
              <p>
                Marketing messages are optional and include promotions,
                seasonal offers, design tips, and announcements. You only
                receive marketing SMS if you separately check the marketing
                consent box on our contact form or otherwise expressly opt in.
                You can opt out of marketing SMS at any time without losing
                transactional messages about an active project.
              </p>

              <h3>3.3 Frequency, Rates, and Carriers</h3>
              <p>
                Message frequency varies based on your project and preferences.{" "}
                <strong>Message and data rates may apply</strong> depending on
                your wireless plan. Carriers are not liable for delayed or
                undelivered messages.
              </p>

              <h3>3.4 STOP and HELP Keywords</h3>
              <ul>
                <li>
                  Reply <strong>STOP</strong> to any message to unsubscribe
                  from that category of SMS. We will send one confirmation
                  message and then stop sending further texts in that category.
                </li>
                <li>
                  Reply <strong>HELP</strong> for support. You can also reach
                  us at{" "}
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
                  .
                </li>
                <li>
                  Opting out of marketing SMS does not opt you out of
                  service-related transactional messages required to deliver
                  work you have hired us to perform. To stop all SMS, reply
                  STOP to a transactional message as well.
                </li>
              </ul>

              <h3>3.5 SMS Data Retention</h3>
              <ul>
                <li>
                  <strong>Consent records</strong> (proof of your opt-in) are
                  retained for at least four (4) years after your last
                  interaction, as required by applicable telecommunications
                  rules.
                </li>
                <li>
                  <strong>Opt-out records</strong> (STOP requests) are retained
                  indefinitely to ensure we do not contact you after you have
                  unsubscribed.
                </li>
                <li>
                  <strong>Message logs</strong> are retained for up to twelve
                  (12) months for support, billing, and quality assurance, then
                  deleted or anonymized.
                </li>
                <li>
                  After opt-out, your mobile number is retained only on an
                  internal suppression list to prevent future contact.
                </li>
              </ul>

              <h3>3.6 No Sale or Sharing of Mobile Opt-In Data</h3>
              <p>
                <strong>
                  We do not sell, rent, or share your mobile number, SMS
                  opt-in, or SMS consent information with third parties or
                  affiliates for their marketing purposes. Mobile opt-in data
                  is never transferred to third-party advertisers under any
                  circumstance.
                </strong>{" "}
                We share phone numbers only with the service providers needed
                to deliver our own messages (for example, our SMS platform and
                CRM) and only as needed to operate the service.
              </p>

              <h2 id="cookies" className={SECTION}>
                4. Cookies, Pixels, and Analytics
              </h2>
              <p>
                We use cookies and similar technologies to operate the site,
                remember preferences, measure traffic, and improve our
                marketing. This includes the Meta (Facebook) Pixel for ad
                measurement and conversion tracking. You can disable cookies in
                your browser, but parts of the site may not function as
                intended.
              </p>

              <h2 id="how-we-share" className={SECTION}>
                5. How We Share Your Information
              </h2>
              <p>
                We share information only as needed to run our business and
                deliver your project:
              </p>
              <ul>
                <li>
                  <strong>Open Mind Marketing</strong>, which operates our
                  digital marketing, lead handling, and CRM on our behalf.
                </li>
                <li>
                  <strong>Service providers</strong> such as hosting, email,
                  SMS, scheduling, and payment processors.
                </li>
                <li>
                  <strong>Trade partners</strong> when needed to perform work
                  you have requested (for example, a designer or inspector).
                </li>
                <li>
                  <strong>Legal authorities</strong> when required by law,
                  subpoena, or to protect our rights, customers, or workers.
                </li>
              </ul>
              <p>
                We do not sell your personal information, and as noted above,
                we never sell or share SMS opt-in data for third-party
                marketing.
              </p>

              <h2 id="data-retention" className={SECTION}>
                6. Data Retention
              </h2>
              <p>
                We retain personal information only as long as needed for the
                purposes described in this Policy:
              </p>
              <ul>
                <li>
                  <strong>Leads and inquiries</strong> — up to 24 months from
                  last contact, unless you become a customer.
                </li>
                <li>
                  <strong>Customer project records</strong> — for the duration
                  of the project plus the period required by California
                  contractor recordkeeping rules (generally at least four
                  years).
                </li>
                <li>
                  <strong>Financial and tax records</strong> — at least seven
                  (7) years.
                </li>
                <li>
                  <strong>SMS records</strong> — as described in Section 3.5
                  above.
                </li>
              </ul>

              <h2 id="security" className={SECTION}>
                7. Data Security
              </h2>
              <p>
                We use reasonable administrative, technical, and physical
                safeguards to protect your information. No method of
                transmission or storage is perfectly secure, so we cannot
                guarantee absolute security. If we become aware of a breach
                affecting your personal information, we will notify you as
                required by law.
              </p>

              <h2 id="your-rights" className={SECTION}>
                8. Your Rights and Choices
              </h2>
              <p>You may at any time:</p>
              <ul>
                <li>Request a copy of the personal information we hold about you.</li>
                <li>Ask us to correct or update that information.</li>
                <li>Ask us to delete your information, subject to legal recordkeeping requirements.</li>
                <li>Opt out of marketing emails by clicking &ldquo;unsubscribe&rdquo; in any marketing email.</li>
                <li>Opt out of marketing SMS by replying STOP.</li>
              </ul>

              <h3>8.1 California Residents</h3>
              <p>
                California residents have additional rights under the
                California Consumer Privacy Act (CCPA), including the right to
                know what categories of personal information we collect, the
                right to request deletion, and the right not to be
                discriminated against for exercising these rights. To exercise
                these rights, contact us using the details below.
              </p>

              <h2 id="childrens-privacy" className={SECTION}>
                9. Children&rsquo;s Privacy
              </h2>
              <p>
                Our services are intended for adults (18+) who own or are
                responsible for a property. We do not knowingly collect
                personal information from children under 13. If you believe a
                child has provided us with information, contact us and we will
                delete it.
              </p>

              <h2 id="third-party-links" className={SECTION}>
                10. Third-Party Links
              </h2>
              <p>
                Our website may link to third-party sites (financing partners,
                review sites, social media). We are not responsible for the
                privacy practices of those sites. Please read their privacy
                policies before sharing information with them.
              </p>

              <h2 id="changes" className={SECTION}>
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we
                make material changes, we will post the new effective date at
                the top of this page. Continued use of our website or services
                after an update constitutes acceptance of the revised Policy.
              </p>

              <h2 id="contact-privacy" className={SECTION}>
                12. How to Contact Us About Privacy
              </h2>
              <p>
                To exercise your rights, submit a privacy request, or ask any
                question about this Policy, contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@constructionstation.com"
                    className="text-gold underline"
                  >
                    info@constructionstation.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={CS.phoneHref} className="text-gold underline">
                    (909) 797-6333
                  </a>
                </li>
                <li>
                  <strong>Mail:</strong> Construction Station Flooring and
                  Design, 33145 Yucaipa Blvd, Yucaipa, CA 92399
                </li>
              </ul>
              <p>
                We will respond to verified requests within 30 days, or sooner
                where required by law.
              </p>

              <div className="mt-12 pt-6 border-t border-navy/10 text-sm text-navy/60">
                Construction Station Flooring and Design · CSLB License
                #1108879 · Operated digitally by Open Mind Marketing on behalf
                of Construction Station.{" "}
                <Link href="/terms" className="text-gold underline">
                  See our Terms of Service
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page-local typography for legal copy */}
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
