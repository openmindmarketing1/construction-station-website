import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export const metadata: Metadata = {
  title: { absolute: "Choosing a Home Improvement Company | Construction Station" },
  description:
    "The right contractor makes all the difference. Learn how to vet licenses, read reviews, compare estimates, and choose a home improvement company you can actually trust in the Inland Empire.",
  alternates: { canonical: "/blog/choosing-best-home-improvement-company" },
};

const post = POSTS.find((p) => p.slug === "choosing-best-home-improvement-company")!;
const related = POSTS.filter((p) =>
  ["inland-empire-kitchen-remodel-costs", "small-bathroom-remodel-mistakes", "flooring-tips-inland-empire"].includes(p.slug)
);

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.date,
  image: `${SITE_URL}${post.image}`,
  url: `${SITE_URL}/blog/${post.slug}`,
  author: { "@type": "Organization", name: "Construction Station", url: SITE_URL },
  publisher: {
    "@type": "Organization",
    name: "Construction Station",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo/cs-logo.png` },
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogPostLayout post={post} related={related}>
      <p className="text-navy/80 text-lg leading-[1.8] mb-6">
        When it comes to home improvement, the right contractor can make all the difference. Whether
        you&rsquo;re installing new flooring, remodeling your kitchen or bathroom, or adding a patio
        cover or room addition in Yucaipa, you want a company that delivers quality work, stays on
        schedule, and respects your budget.
      </p>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Unfortunately, choosing the wrong company can lead to headaches — delays, hidden costs, and
        subpar craftsmanship. That&rsquo;s why it&rsquo;s important to do your research before hiring
        a home improvement contractor.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        Why Choosing the Right Home Improvement Company Matters
      </h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Your home is one of your biggest investments. A licensed, experienced, and customer-focused
        contractor ensures a smooth, stress-free remodeling experience. The wrong one can void your
        insurance, create code violations, and cost you far more in the long run.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        5 Key Factors to Consider
      </h2>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">1. Reputation &amp; Reviews</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Before hiring, check online reviews on Google, Yelp, and the Better Business Bureau (BBB).
        Look for consistent positive feedback about quality of work, professionalism, timeliness, and
        customer service. Ask the company for references and request to see before-and-after photos of
        completed projects.
      </p>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">2. Licensing, Insurance &amp; Certifications</h3>
      <p className="text-navy/80 leading-[1.8] mb-4">
        A professional contractor should be:
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-5">
        <li><strong className="text-navy">Licensed</strong> — ensure they have the proper state and local licenses (Construction Station holds CSLB License {"{"}#1108879{"}"}).</li>
        <li><strong className="text-navy">Insured</strong> — liability and worker&rsquo;s compensation insurance protect you from potential damages or injuries during the project.</li>
        <li><strong className="text-navy">Certified</strong> — check for certifications from industry organizations like the National Association of Home Builders.</li>
      </ul>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">3. Experience &amp; Expertise</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Look for a company with years of experience in the services you need. A general handyman might
        not be the best choice for specialized work like flooring installation or bathroom remodeling.
        Construction Station provides kitchen remodeling, bathroom remodeling, flooring, room
        additions, ADUs, outdoor renovations, and windows and doors — all with the same in-house crew.
      </p>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">4. Transparency in Pricing &amp; Estimates</h3>
      <p className="text-navy/80 leading-[1.8] mb-4">
        A reputable company provides detailed, written estimates that break down material costs, labor
        fees, and estimated timeline. Avoid contractors who:
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-5">
        <li>Give vague, verbal estimates</li>
        <li>Demand full payment upfront</li>
        <li>Refuse to provide a contract</li>
      </ul>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Construction Station offers free estimates and in-home measurements to ensure accuracy, plus
        financing options to fit your budget.
      </p>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">5. Customer Service &amp; Communication</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Good contractors are easy to contact, responsive to questions, and clear about contracts and
        warranties. At Construction Station, we believe in a no-pressure sales approach — we provide
        all the information you need so you can make the best decision for your home without feeling
        rushed.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        Steps to Take Before Hiring
      </h2>
      <ol className="list-none space-y-4 mb-6">
        {[
          ["Visit the Showroom", "See flooring and remodeling materials in person. We're located at 33145 Yucaipa Blvd, Yucaipa, CA 92399."],
          ["Ask for a Detailed Contract", "Ensure it outlines the timeline, costs, and scope of work before anything starts."],
          ["Confirm Warranties & Follow-Ups", "Construction Station offers installation guarantees and post-installation check-ins."],
        ].map(([title, desc], i) => (
          <li key={i} className="flex gap-4">
            <span className="font-display text-gold text-2xl leading-none mt-1 shrink-0">0{i + 1}</span>
            <div>
              <strong className="text-navy block mb-1">{title}</strong>
              <span className="text-navy/75 text-sm leading-relaxed">{desc}</span>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        Why Homeowners Choose Construction Station
      </h2>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-6">
        <li>Free estimates &amp; in-home measurements</li>
        <li>Shop-at-home service — we bring samples to you</li>
        <li>Financing options available</li>
        <li>Complete satisfaction guarantee</li>
        <li>In-house installation team — no third-party subcontractors</li>
        <li>Furniture moving &amp; removal included</li>
        <li>Post-installation follow-ups</li>
      </ul>
      </BlogPostLayout>
    </>
  );
}
