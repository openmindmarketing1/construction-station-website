export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "inland-empire-kitchen-remodel-costs",
    title: "Inland Empire Kitchen Remodel: Costs, Value & Smart Saves",
    excerpt:
      "Most kitchen remodels in the Inland Empire fall between $20,000 and $120,000. Here's how to plan your budget, maximize ROI, and know where to spend vs. save.",
    date: "2025-01-15",
    category: "Kitchen",
    image: "/images/blog/kitchen-remodel-costs.jpg",
    imageAlt: "Kitchen remodel costs in the Inland Empire",
  },
  {
    slug: "small-bathroom-remodel-mistakes",
    title: "7 Small Bathroom Remodel Mistakes (And How to Fix Them)",
    excerpt:
      "Small bathrooms are deceptively tricky to renovate. Learn the 7 most common mistakes Inland Empire homeowners make — and how to avoid every one of them.",
    date: "2025-02-10",
    category: "Bathroom",
    image: "/images/blog/bathroom-mistakes.jpg",
    imageAlt: "Small bathroom remodel mistakes to avoid",
  },
  {
    slug: "bathroom-remodeling-ideas-2026",
    title: "Bathroom Remodeling Ideas for Inland Empire Homeowners 2026",
    excerpt:
      "Walk-in showers, statement vanities, smart tech, and spa-inspired suites — the top bathroom trends Inland Empire homeowners are embracing in 2026.",
    date: "2026-04-14",
    category: "Bathroom",
    image: "/images/services/bathroom/bathroom-01.jpg",
    imageAlt: "Bathroom remodeling ideas for 2026",
  },
  {
    slug: "covered-patio-ideas",
    title: "Extend Your Living Space With These Covered Patio Ideas",
    excerpt:
      "From wood pergolas to modern aluminum patio covers, discover covered patio ideas that transform your outdoor space into a year-round retreat.",
    date: "2025-03-05",
    category: "Outdoor Living",
    image: "/images/blog/covered-patio-ideas.jpg",
    imageAlt: "Covered patio ideas for Inland Empire homes",
  },
  {
    slug: "choosing-best-home-improvement-company",
    title: "Top 5 Tips for Choosing the Best Home Improvement Company",
    excerpt:
      "The right contractor makes all the difference. Here's how to vet licenses, read reviews, compare estimates, and find a company you can actually trust.",
    date: "2025-04-01",
    category: "Home Improvement",
    image: "/images/services/kitchen/kitchen-03.jpg",
    imageAlt: "Choosing the best home improvement company near me",
  },
  {
    slug: "flooring-tips-inland-empire",
    title: "10 Flooring Tips for Inland Empire Homeowners in 2026",
    excerpt:
      "Our climate, lifestyle, and water quality all affect which flooring lasts. The 10 most important things to know before investing in new floors.",
    date: "2026-01-20",
    category: "Flooring",
    image: "/images/blog/flooring-tips-inland-empire.jpg",
    imageAlt: "Flooring tips for Inland Empire homeowners",
  },
  {
    slug: "flooring-inland-empire",
    title: "Looking for Flooring in the Inland Empire? 10 Things to Know",
    excerpt:
      "Shopping for new flooring can feel overwhelming. Your insider guide to choosing the right material, installer, and budget for your Inland Empire home.",
    date: "2025-05-15",
    category: "Flooring",
    image: "/images/blog/flooring-inland-empire.jpg",
    imageAlt: "Flooring in the Inland Empire — what to know",
  },
  {
    slug: "flooring-trends-2025",
    title: "Elevate Your Yucaipa Home — Flooring Trend Ideas for 2025",
    excerpt:
      "Statement patterns, earthy tones, eco-friendly materials, and smart heated floors — the 2025 flooring trends transforming Inland Empire homes.",
    date: "2025-01-02",
    category: "Flooring",
    image: "/images/blog/flooring-trends-2025.jpg",
    imageAlt: "2025 flooring trends for Yucaipa homes",
  },
];

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
