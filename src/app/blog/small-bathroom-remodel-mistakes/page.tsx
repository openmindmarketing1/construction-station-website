import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export const metadata: Metadata = {
  title: { absolute: "7 Bathroom Remodel Mistakes to Avoid | Construction Station" },
  description:
    "Small bathrooms are deceptively tricky. Learn the 7 most common mistakes Inland Empire homeowners make — skipping space planning, oversized fixtures, bad ventilation, and more.",
  alternates: { canonical: "/blog/small-bathroom-remodel-mistakes" },
};

const post = POSTS.find((p) => p.slug === "small-bathroom-remodel-mistakes")!;
const related = POSTS.filter((p) =>
  ["bathroom-remodeling-ideas-2026", "inland-empire-kitchen-remodel-costs", "choosing-best-home-improvement-company"].includes(p.slug)
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
        A small bathroom shouldn&rsquo;t mean small results — unless you make these common mistakes.
        At Construction Station, we&rsquo;ve helped many families in the Inland Empire remodel their
        compact bathrooms into beautiful, functional spaces they actually love. Most of these mistakes
        are completely avoidable if you know what to watch for.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Mistake 1: Skipping Proper Space Planning</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        This is the mistake that sets off a chain reaction of problems. Homeowners get excited about
        finishes and fixtures without first mapping out how the space actually works. The result? Doors
        that clash with cabinets, toilets crammed too close to walls, and showers you can barely turn
        around in.
      </p>
      <h3 className="font-display text-navy text-xl mt-6 mb-3">How to Fix It</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Before you pick a single tile sample, measure every inch. Create a detailed floor plan and
        think critically about how you move through the space. Building codes require specific
        clearances: 15 inches from the toilet centerline to any wall, 21 inches of clear space in
        front of the toilet, and 30 inches of standing space in front of the shower. A well-planned
        layout doesn&rsquo;t just improve functionality — it makes the room feel significantly larger.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Mistake 2: Choosing Oversized Fixtures</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        That gorgeous double vanity or deep soaking tub looks amazing in the showroom — but in a
        compact bathroom, it can swallow the entire room. A 60-inch double vanity in a 5&times;8
        bathroom leaves barely room to stand, and the shower door can&rsquo;t open fully.
      </p>
      <h3 className="font-display text-navy text-xl mt-6 mb-3">How to Fix It</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Choose fixtures proportional to your space. A 36-inch vanity can offer ample storage without
        overwhelming a small bathroom. Consider a floating vanity to create visual openness — the
        exposed floor beneath makes the room feel larger and easier to clean. Wall-hung toilets save
        several inches of floor space by hiding the tank inside the wall.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Mistake 3: Neglecting Storage Solutions</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Homeowners invest thousands in beautiful tile and fixtures, then realize they have nowhere to
        put towels, toiletries, or cleaning supplies. Suddenly, that spa-like bathroom becomes cluttered
        chaos.
      </p>
      <h3 className="font-display text-navy text-xl mt-6 mb-3">How to Fix It</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Think upwards. Vertical space is your most underutilized resource. Wall-mounted cabinets
        provide storage without consuming floor area. Recessed medicine cabinets steal space from wall
        cavities. Built-in shower niches keep shampoo bottles off the floor while adding a custom,
        high-end look. Plan storage before construction begins — retrofitting is far more expensive.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Mistake 4: Ignoring Ventilation and Waterproofing</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Poor ventilation traps moisture against every surface. Over time: peeling paint, warped
        cabinets, mold growth behind walls, and structural damage that can cost tens of thousands to
        remediate. Many homeowners assume the Inland Empire&rsquo;s dry climate means ventilation
        isn&rsquo;t important. That&rsquo;s dangerously wrong.
      </p>
      <h3 className="font-display text-navy text-xl mt-6 mb-3">How to Fix It</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Install a quality exhaust fan that vents to the outside — not into your attic. Your
        fan&rsquo;s CFM rating should match your bathroom&rsquo;s square footage (1 CFM per square
        foot minimum). Fans with humidity sensors automatically stay on until the air is properly
        dried. Use cement board behind tile, high-quality sealed grout, and mold-resistant paint on
        ceilings.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Mistake 5: Underestimating Your Budget</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Bathrooms involve multiple skilled trades — plumbing, electrical, tiling, carpentry. A modest
        5&times;8 bathroom remodel typically costs between <strong className="text-navy">$15,000 and
        $30,000</strong> when done properly. That&rsquo;s quality materials, professional installation,
        proper waterproofing, updated plumbing and electrical, and bringing everything up to current
        building codes.
      </p>
      <h3 className="font-display text-navy text-xl mt-6 mb-3">How to Fix It</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Build a realistic budget before starting demolition and include a 10–15% contingency for
        surprises. In our experience, nearly every bathroom remodel in Yucaipa&rsquo;s older homes
        reveals at least one unexpected issue. Prioritize spending on waterproofing, ventilation,
        quality installation, and code compliance.
      </p>
      <div className="bg-navy/5 border-l-4 border-gold p-5 my-8">
        <p className="text-navy/80 text-sm leading-relaxed">
          <strong className="text-navy">Budget Breakdown:</strong> 20–25% labor across multiple trades
          · 30–35% materials including tile and fixtures · 15–20% plumbing and electrical · 10–15%
          demolition and disposal · 10–15% finishing work.
        </p>
      </div>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Mistake 6: Choosing the Wrong Flooring and Tile</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Your bathroom floor experiences moisture, temperature swings, foot traffic, and daily wear.
        Cheap tile cracks under stress, low-quality vinyl peels at seams, and grout that isn&rsquo;t
        properly sealed becomes a mold magnet.
      </p>
      <h3 className="font-display text-navy text-xl mt-6 mb-3">How to Fix It</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Invest in durable materials designed for wet environments. Porcelain tile is denser and less
        porous than ceramic — it&rsquo;s more water-resistant and durable, available in stunning
        wood-look options. Waterproof luxury vinyl plank (LVP) offers comfort underfoot, realistic
        appearances, and is completely waterproof. Always check the DCOF (Dynamic Coefficient of
        Friction) rating — it should be at least 0.42 for wet areas. Use epoxy grout for shower floors
        and walls.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Mistake 7: Skipping Professional Help (and Permits)</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        DIY bathroom remodels are tempting because YouTube makes everything look simple. But bathrooms
        involve plumbing, electrical near water, structural considerations, and waterproofing that
        require genuine expertise. Unpermitted work can violate building codes, void your homeowner&rsquo;s
        insurance, and torpedo your home&rsquo;s resale value.
      </p>
      <h3 className="font-display text-navy text-xl mt-6 mb-3">How to Fix It</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Work with qualified contractors who hold proper licenses and insurance, understand local
        Inland Empire building codes, and have a verifiable portfolio. At Construction Station, we
        handle all permitting, inspections, and coordination with local building departments. Our team
        knows Yucaipa&rsquo;s requirements inside and out.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Our 4-Step Process That Prevents These Mistakes</h2>
      <ol className="list-none space-y-5 mb-6">
        {[
          ["Free In-Home Consultation", "We visit your space, take precise measurements, discuss your vision, and identify potential challenges early."],
          ["Custom Design Planning", "We maximize your bathroom's potential — proper layout, appropriately sized fixtures, built-in storage, and material selections that perform in wet environments."],
          ["Expert Construction", "Our skilled team handles every trade: plumbing, electrical, waterproofing, tile, and finishing. We pull necessary permits and coordinate inspections."],
          ["Post-Project Support", "We stand behind our work with a satisfaction guarantee and remain available if any questions arise down the road."],
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

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Why Inland Empire Homeowners Trust Construction Station</h2>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-6">
        <li>Free in-home consultations and measurements</li>
        <li>Transparent pricing with detailed estimates — no hidden fees</li>
        <li>Premium materials from Shaw, Daltile, Mohawk, and Mannington</li>
        <li>Expert installation backed by manufacturer warranties</li>
        <li>All necessary permits pulled and inspections coordinated</li>
        <li>One-year installation guarantee on all remodeling work</li>
      </ul>
      </BlogPostLayout>
    </>
  );
}
