import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export const metadata: Metadata = {
  title: { absolute: "Covered Patio Ideas for Your Home | Construction Station" },
  description:
    "From tarp covers and wood pergolas to modern aluminum patio covers and A-frames — discover covered patio ideas that turn your outdoor space into a year-round retreat.",
  alternates: { canonical: "/blog/covered-patio-ideas" },
};

const post = POSTS.find((p) => p.slug === "covered-patio-ideas")!;
const related = POSTS.filter((p) =>
  ["choosing-best-home-improvement-company", "inland-empire-kitchen-remodel-costs", "flooring-inland-empire"].includes(p.slug)
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
        Is your outdoor area feeling a bit bland? A patio cover can turn your outdoor space into a
        delightful extension of your home — a cozy nook for morning coffee or a spacious area for
        entertaining guests, usable rain or shine.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Why a Covered Patio Is a Game-Changer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          ["Protection from Weather", "A covered patio shields you from scorching sun and sudden downpours, extending the usability of your outdoor space year-round."],
          ["Enhancing Aesthetic Appeal", "A well-designed cover acts as a canvas for creativity — materials, colors, and design that transform your patio into a visually stunning space."],
          ["Increasing Property Value", "Potential buyers view a covered patio as additional living space. It represents a lifestyle upgrade that blends seamlessly with indoor living."],
        ].map(([title, desc]) => (
          <div key={title} className="bg-cream p-5 border border-navy/10">
            <strong className="text-navy font-display text-lg block mb-2">{title}</strong>
            <p className="text-navy/70 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Wood or Wood-Look Patio Covers</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        A rustic wood patio cover gives your outdoor space a cozy, cabin-like feel. Use reclaimed wood
        for an eco-friendly touch, and pair it with hanging plants or string lights for a magical
        atmosphere. For a sleek and modern look, consider treated wood with a clear sealant — it
        protects the wood while highlighting its natural beauty. Pair it with minimalist furniture for
        a chic outdoor retreat.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Modern Aluminum Patio Covers</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        At Construction Station, we specialize in professional installation of <strong className="text-navy">DuraLum
        Aluminum Patio Covers</strong>. We love these for their durability, ease of maintenance, and
        clean modern look.
      </p>
      <ul className="list-disc list-outside pl-6 space-y-3 text-navy/80 mb-6">
        <li><strong className="text-navy">Low maintenance</strong> — unlike wood, they don&rsquo;t require regular staining or sealing.</li>
        <li><strong className="text-navy">Weather resistant</strong> — resist rust and corrosion regardless of harsh conditions.</li>
        <li><strong className="text-navy">Customizable</strong> — adjustable louvers, integrated lighting, and even solar panels for energy efficiency.</li>
        <li><strong className="text-navy">Sustainable</strong> — often made from recycled content.</li>
      </ul>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Pergolas and Unattached Patio Covers</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        Pergolas and gazebos offer flexibility — they don&rsquo;t need to be connected to your home
        and can be moved or adjusted as needed. With their open-roof design, pergolas provide partial
        shade and add an architectural element to your garden. Train climbing plants to create a
        natural canopy, adding both beauty and extra shade.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Patio Trellis Covers</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        A trellis cover is perfect if you want a space that feels open yet offers some shade. The
        lattice design allows sunlight to filter through, creating a dappled light effect. Enhance it
        with climbing plants for a living canopy that evolves with the seasons.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">A-Frame Patio Covers</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        A-frame covers offer a classic look that suits many home styles. Their pitched roof design is
        excellent for drainage and adds a distinct architectural element to your outdoor space. Built
        to withstand various weather conditions, they can be constructed from wood, metal, or hybrid
        materials. A long-term investment that remains in excellent condition for years.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Screened-In Porch Ideas</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        For those who love the outdoors but could do without the bugs, a screened-in porch is ideal.
        It offers the best of both worlds — fresh air without the pests, a seamless connection between
        indoor and outdoor living. Can serve as a dining area, relaxation zone, or even an outdoor
        office.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">Choosing the Right Cover for Your Home</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        When selecting a patio cover, assess your specific needs — intended use, climate conditions,
        and desired maintenance level. Budget is significant, but remember your patio is an extension
        of your home&rsquo;s style. Consider the architectural elements and decor of your house when
        selecting a design.
      </p>

      <h2 className="font-display text-navy text-3xl mt-12 mb-4">How Construction Station Can Help</h2>
      <p className="text-navy/80 leading-[1.8] mb-5">
        From planning to installation, our team has the expertise and professionalism to make sure
        your project is done right the first time.
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2 text-navy/80 mb-6">
        <li>Free estimates and in-home measurements</li>
        <li>Extensive showroom selection — see and feel materials before you buy</li>
        <li>Professional installation with a flawless finish</li>
        <li>Financing options available</li>
        <li>Complete satisfaction guarantee</li>
        <li>No-pressure sales approach</li>
      </ul>
      </BlogPostLayout>
    </>
  );
}
