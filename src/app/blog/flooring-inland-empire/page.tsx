import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export const metadata: Metadata = {
  title: { absolute: "Flooring Guide for the Inland Empire | Construction Station" },
  description:
    "Shopping for new flooring can feel overwhelming. Here's your insider guide to choosing the right material, installer, and budget for your Inland Empire home.",
  alternates: { canonical: "/blog/flooring-inland-empire" },
};

const post = POSTS.find((p) => p.slug === "flooring-inland-empire")!;
const related = POSTS.filter((p) =>
  ["flooring-tips-inland-empire", "flooring-trends-2025", "choosing-best-home-improvement-company"].includes(p.slug)
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

function FlooringNote() {
  return (
    <div className="bg-gold/10 border border-gold/40 p-5 my-8 text-sm">
      <strong className="text-navy block mb-1">Complete Flooring Showroom</strong>
      <p className="text-navy/80 leading-relaxed">
        For our complete flooring showroom and virtual room visualizer, visit{" "}
        <a
          href="https://www.carpet-station.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline underline-offset-4 hover:text-navy transition-colors"
        >
          carpet-station.com
        </a>{" "}
        — our sister company, Carpet Station Tile &amp; Wood.
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogPostLayout post={post} related={related}>
      <p className="text-navy/80 text-lg leading-[1.8] mb-6">
        Shopping for new flooring can feel overwhelming — but it doesn&rsquo;t have to be. The floors
        beneath your feet set the tone for every room, affect your home&rsquo;s value, and need to
        stand up to the Inland Empire&rsquo;s unique climate and lifestyle demands. Here&rsquo;s your
        insider&rsquo;s guide to making the best choice.
      </p>
      <FlooringNote />

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">1. Climate Matters More Than You Think</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        The Inland Empire experiences hot, dry summers and mild winters — and that affects your
        flooring more than you might realize. Solid hardwood can expand and contract with temperature
        fluctuations, while luxury vinyl plank (LVP) and tile handle our desert-adjacent climate
        beautifully. When choosing flooring, think beyond aesthetics: will this material hold up in
        my home year-round?
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">2. Not All Flooring Is Created Equal</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Quality varies dramatically between brands and price points. Premium manufacturers like Shaw,
        Mohawk, and Mannington invest in better materials, more realistic textures, and longer-lasting
        finishes. Cheaper options save money upfront but often show wear faster, fade in sunlight, and
        lack the warranties that protect your investment. When comparing quotes, make sure you&rsquo;re
        comparing apples to apples.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">3. Lifestyle Should Drive Your Decision</h2>
      <ul className="list-disc list-outside pl-6 space-y-3 text-navy/80 mb-6">
        <li><strong className="text-navy">High-traffic homes:</strong> Luxury vinyl plank, porcelain tile, and laminate offer durability and easy maintenance.</li>
        <li><strong className="text-navy">Pet owners:</strong> Scratch-resistant surfaces like tile or high-quality LVP.</li>
        <li><strong className="text-navy">Allergy sufferers:</strong> Hard surfaces keep dust and allergens at bay.</li>
        <li><strong className="text-navy">Comfort seekers:</strong> Carpet or cork provide warmth and cushion underfoot.</li>
      </ul>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Be honest about how you actually live — not how you wish you lived. Your floors will thank you.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">4. Professional Installation Makes All the Difference</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        We see it all the time: homeowners invest in beautiful flooring, then try to cut corners on
        installation. The result? Gaps, buckling, uneven surfaces, and voided warranties. Professional
        installation ensures your flooring is laid correctly, with proper subfloor preparation and
        transitions between rooms. Licensed contractors also guarantee their work and honor manufacturer
        warranties — something DIY projects can&rsquo;t offer.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">5. Trends Come and Go — Timeless Works</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        What&rsquo;s hot today might feel dated in five years. Gray-washed wood was everywhere a few
        years ago — now warmer tones and natural oak finishes are making a comeback. If you&rsquo;re
        planning to sell eventually, choose classic, neutral options that appeal to a wide range of
        buyers. If you&rsquo;re staying put for the long haul, go ahead and embrace what speaks to you.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">6. Tile Isn&rsquo;t Just for Bathrooms Anymore</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Today&rsquo;s tile can mimic hardwood, natural stone, or concrete with stunning realism —
        and it&rsquo;s practically indestructible. Porcelain tile is harder and denser than standard
        ceramic, frost-proof, and stain-resistant. It stays cool underfoot during scorching summer
        months, making it a favorite for living rooms, kitchens, and even bedrooms. Don&rsquo;t box
        tile into wet areas only.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">7. Hardwood Adds Value — When Done Right</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Hardwood is timeless, elegant, and adds real value to your property. Buyers love it, and it
        photographs beautifully. That said, it requires more maintenance and can scratch and dent in
        active family homes. Engineered hardwood offers a middle ground — real wood veneer over a
        stable core that handles humidity better than solid planks.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">8. Samples Look Different in Your Home</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        That flooring sample you fell in love with in the showroom might look completely different
        under your home&rsquo;s lighting. Natural light, artificial light, wall colors, and furniture
        all affect how flooring appears in real life. Always take samples home before making a final
        decision. Live with them for a few days and look at them morning and night. This simple step
        can save you from expensive regret.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">9. Subfloor Condition Can Make or Break Your Project</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        What&rsquo;s underneath your flooring matters just as much as what&rsquo;s on top. An
        uneven, damaged, or moisture-prone subfloor can cause squeaky floors, premature wear, and
        complete installation failure. A reputable flooring contractor will always inspect your
        subfloor before installation and address any issues upfront.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">10. The Right Partner Makes Everything Easier</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        When you partner with a flooring company that knows the Inland Empire — our climate, our
        homes, our lifestyles — you get personalized recommendations instead of generic sales pitches.
        You get honest answers about what will work and what won&rsquo;t. You get peace of mind.
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-6">
        <li>Free in-home consultations to assess your space and discuss your vision</li>
        <li>Top brands like Shaw, Mohawk, Mannington, and Daltile</li>
        <li>Expert installation backed by manufacturer warranties</li>
        <li>No-pressure guidance from a team that genuinely cares about your home</li>
      </ul>

      <FlooringNote />
      </BlogPostLayout>
    </>
  );
}
