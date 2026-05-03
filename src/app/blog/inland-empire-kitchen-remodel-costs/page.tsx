import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export const metadata: Metadata = {
  title: { absolute: "Inland Empire Kitchen Remodel Costs | Construction Station" },
  description:
    "Kitchen remodels in the Inland Empire range from $20,000 to $120,000+. Learn what drives costs, what adds the most value, and where to save without sacrificing quality.",
  alternates: { canonical: "/blog/inland-empire-kitchen-remodel-costs" },
};

const post = POSTS.find((p) => p.slug === "inland-empire-kitchen-remodel-costs")!;
const related = POSTS.filter((p) =>
  ["small-bathroom-remodel-mistakes", "bathroom-remodeling-ideas-2026", "choosing-best-home-improvement-company"].includes(p.slug)
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
        The kitchen is where mornings start with coffee, kids do homework at the counter, and friends
        always seem to gather for taco night. The good news is a kitchen remodel in the Inland Empire
        doesn&rsquo;t have to drain your savings or become a long, stressful project. At Construction
        Station, we help homeowners plan smart remodels that look great, work for daily life, and stay
        within budget.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        What Does a Kitchen Remodel Cost in the Inland Empire?
      </h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Most kitchen remodels in our area fall somewhere between <strong className="text-navy">$20,000
        and $120,000 or more</strong>, depending on how extensive the updates are.
      </p>
      <ul className="list-disc list-outside pl-6 space-y-3 text-navy/80 mb-6">
        <li>
          <strong className="text-navy">Minor remodels</strong> — cosmetic updates like fresh paint,
          new cabinet hardware, lighting, or a few new countertops: <strong className="text-navy">$20,000–$40,000</strong>
        </li>
        <li>
          <strong className="text-navy">Mid-range remodels</strong> — cabinets, countertops,
          appliances, and flooring updated: <strong className="text-navy">$40,000–$75,000</strong>
        </li>
        <li>
          <strong className="text-navy">High-end remodels</strong> — custom cabinets, designer
          finishes, and layout changes: <strong className="text-navy">$120,000+</strong>
        </li>
      </ul>
      <p className="text-navy/80 leading-[1.8] mb-5">
        On a per-square-foot basis, expect to pay between $75 and $250, depending on materials, labor,
        and complexity.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        What Actually Adds Value to Your Home
      </h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Not every upgrade gives the same return on investment. According to the Cost vs. Value Report,
        kitchen remodels consistently offer some of the highest returns when selling a home.
      </p>
      <p className="text-navy/80 leading-[1.8] mb-5">
        <strong className="text-navy">Cabinets</strong> typically take up 40% or more of the budget
        and have the biggest impact on both function and appeal. Quality cabinets signal craftsmanship
        and practicality, whether you choose custom, semi-custom, or well-selected stock options.
      </p>
      <p className="text-navy/80 leading-[1.8] mb-5">
        <strong className="text-navy">Countertops</strong> are next. Quartz is a local favorite for its
        durability and low maintenance, though granite is also a solid choice. Both materials can stand
        up to daily life and appeal to future buyers.
      </p>
      <p className="text-navy/80 leading-[1.8] mb-5">
        <strong className="text-navy">Appliances</strong> matter too. Energy-efficient options like
        gas ranges, spacious refrigerators, and quiet dishwashers make everyday cooking easier and are
        attractive when selling.
      </p>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Don&rsquo;t forget <strong className="text-navy">flooring</strong>. Kitchens see a lot of
        action, so choose durable materials — tile, hardwood, or luxury vinyl plank (LVP). Wood-look
        tile and large-format porcelain are especially popular in Inland Empire kitchens.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        Where to Spend and Where to Save
      </h2>
      <p className="text-navy/80 leading-[1.8] mb-4">
        We suggest spending more on the things that matter daily:
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-6">
        <li>Quality cabinets</li>
        <li>Durable countertops</li>
        <li>Good lighting</li>
        <li>Plumbing upgrades</li>
        <li>Electrical work</li>
      </ul>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Instead, save on cosmetic touches like paint or mid-range fixtures, and consider DIY for tasks
        you&rsquo;re comfortable with — painting or installing hardware. Even small savings here allow
        you to invest in details that make the biggest long-term difference.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        Design Ideas Worth Considering
      </h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        The Inland Empire has a warm, welcoming vibe, and kitchen design here reflects that:
      </p>
      <ul className="list-disc list-outside pl-6 space-y-3 text-navy/80 mb-6">
        <li>
          <strong className="text-navy">Modern farmhouse kitchens</strong> — shaker cabinets, wood
          accents, and apron-front sinks remain timeless and cozy.
        </li>
        <li>
          <strong className="text-navy">Clean contemporary kitchens</strong> — flat-panel cabinets,
          neutral tones, and integrated appliances feel sleek and functional.
        </li>
        <li>
          <strong className="text-navy">Transitional styles</strong> — blend classic and modern
          elements for broad appeal.
        </li>
        <li>
          <strong className="text-navy">Working kitchens</strong> — prioritize storage, deep drawers,
          pull-out bins, and prep sinks for busy family life.
        </li>
      </ul>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        Tips for a Smooth Remodel Process
      </h2>
      <ul className="list-disc list-outside pl-6 space-y-3 text-navy/80 mb-6">
        <li>Set a realistic budget and allow 10–15% for unexpected surprises, especially in older homes.</li>
        <li>Live with your kitchen for a few days and note daily frustrations — these should be your priorities.</li>
        <li>Keep plumbing in place when possible to save on labor.</li>
        <li>Order materials early to avoid delays.</li>
        <li>Work with professionals who know Inland Empire permitting and materials that hold up in our climate.</li>
      </ul>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        What to Expect Working with Construction Station
      </h2>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-6">
        <li>Free in-home consultations to assess your space and discuss your vision</li>
        <li>Access to quality materials, appliances, and finishes that fit your style and budget</li>
        <li>Expert installation by local professionals who take pride in their work</li>
        <li>Honest, no-pressure guidance from a team that genuinely cares about your home</li>
      </ul>
      </BlogPostLayout>
    </>
  );
}
