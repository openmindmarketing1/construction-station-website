import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Elevate Your Yucaipa Home — Flooring Trend Ideas for 2025",
  description:
    "Statement patterns, earthy tones, eco-friendly materials, and smart heated floors — discover the 2025 flooring trends transforming Inland Empire homes.",
  alternates: { canonical: "/blog/flooring-trends-2025" },
};

const post = POSTS.find((p) => p.slug === "flooring-trends-2025")!;
const related = POSTS.filter((p) =>
  ["flooring-tips-inland-empire", "flooring-inland-empire", "covered-patio-ideas"].includes(p.slug)
);

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
    <BlogPostLayout post={post} related={related}>
      <p className="text-navy/80 text-lg leading-[1.8] mb-6">
        As we step into 2025, homeowners in Yucaipa are looking for ways to refresh their living
        spaces with stylish, functional, and eco-friendly flooring options. While 2024 saw a surge in
        warm, natural textures and hybrid flooring solutions, this year&rsquo;s trends push the
        boundaries of innovation — blending aesthetics with sustainability and durability.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">A Look Back at 2024 Flooring Trends</h2>
      <ul className="list-disc list-outside pl-6 space-y-3 text-navy/80 mb-6">
        <li><strong className="text-navy">Warm and Natural Aesthetic</strong> — light oak, honey-toned hardwoods, and wood-look luxury vinyl planks reflecting a desire for warmth and comfort.</li>
        <li><strong className="text-navy">Hybrid Flooring</strong> — waterproof laminate and SPC flooring gained traction for their durability and water resistance.</li>
        <li><strong className="text-navy">Large Format Tiles</strong> — oversized tiles in neutral tones provided a sleek, modern look while minimizing grout lines.</li>
        <li><strong className="text-navy">Sustainable Options</strong> — bamboo, cork, and reclaimed wood for eco-conscious homeowners.</li>
        <li><strong className="text-navy">Patterned Carpets and Rugs</strong> — bold patterns adding character to living spaces.</li>
      </ul>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">2025 Flooring Trends: What&rsquo;s New &amp; What&rsquo;s Next</h2>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">1. Statement-Making Patterns &amp; Textures</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Homeowners are moving away from traditional flooring and embracing bolder patterns and
        textures. Herringbone and chevron hardwood designs continue to gain popularity, creating a
        timeless yet contemporary appeal. Patterned tiles — encaustic cement and Moroccan-inspired
        designs — bring artistic flair to kitchens and bathrooms. For carpets, expect cut-and-loop
        textures and intricate geometric patterns that add dimension.
      </p>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">2. Earthy and Organic Tones</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        The love for natural aesthetics continues in 2025, but with a deeper connection to earthy and
        organic hues — rich walnut, caramel, and deep espresso in hardwood flooring. Natural stone-look
        tiles, including travertine and slate, are in demand, complementing both rustic and modern
        interiors.
      </p>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">3. High-Performance, Low-Maintenance Materials</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Homeowners want beautiful floors without the hassle of constant upkeep. Waterproof LVP and
        engineered hardwood remain strong contenders. SPC and WPC flooring offer a perfect balance of
        aesthetics and durability, ideal for homes with pets, kids, or high foot traffic.
        Stain-resistant carpets with built-in spill protection technology make it easier than ever to
        maintain a cozy, soft floor.
      </p>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">4. Eco-Friendly Flooring Innovations</h3>
      <p className="text-navy/80 leading-[1.8] mb-4">
        Sustainability is more than a buzzword — it&rsquo;s a movement. 2025 homeowners are
        increasingly opting for:
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-5">
        <li>Reclaimed and recycled wood flooring for rustic, unique charm</li>
        <li>Cork flooring — sustainable, comfortable, and quiet</li>
        <li>Wool carpets — a natural, biodegradable alternative to synthetic fibers</li>
        <li>Carbon-neutral manufacturing processes that reduce environmental impact</li>
      </ul>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">5. Seamless Indoor-Outdoor Flow</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        With Yucaipa&rsquo;s beautiful climate, homeowners are looking to create seamless transitions
        between indoor and outdoor living spaces. Porcelain pavers, weather-resistant LVP, and
        polished concrete floors are perfect for achieving this look — allowing a cohesive and stylish
        flow from the inside of your home to patios and outdoor entertainment areas.
      </p>

      <h3 className="font-display text-navy text-xl mt-8 mb-3">6. Smart and Heated Flooring Options</h3>
      <p className="text-navy/80 leading-[1.8] mb-5">
        The integration of smart home technology into flooring is making waves in 2025. Radiant
        heated floors, once a luxury, are now more accessible and energy-efficient, providing warmth
        during cooler months. Some LVP and tile brands even incorporate smart temperature control
        systems, allowing homeowners to adjust floor temperature via mobile apps.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">
        How Construction Station Can Bring Your Flooring Vision to Life
      </h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Whether you&rsquo;re drawn to the timeless appeal of hardwood, the practicality of luxury
        vinyl, or the elegance of natural stone, our team is here to guide you every step of the way.
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-6">
        <li>Free estimates and in-home measurements tailored to your space</li>
        <li>Extensive showroom selection — see and feel the latest trends before you buy</li>
        <li>Professional installation with a flawless finish</li>
        <li>Financing options available to make your dream floors a reality</li>
        <li>Complete satisfaction guarantee on every project</li>
        <li>No-pressure sales approach — we help you make informed decisions at your own pace</li>
      </ul>

      <FlooringNote />
    </BlogPostLayout>
  );
}
