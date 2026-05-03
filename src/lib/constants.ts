export const CS = {
  name: "Construction Station",
  tagline: "Building Dreams Across the Inland Empire",
  phone: "909-797-6333",
  phoneHref: "tel:9097976333",
  email: "info@constructionstation.com",
  address: "Inland Empire, CA",
  license: "#1108879",
  founded: 2008,
  bbb: "A+",
  pixel: "1236703801875418",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  leadsApiUrl: "https://openmindmarketing.ai/api/leads/landing",
  businessId: 1,
};

export const SERVICES = [
  {
    name: "Kitchen Remodeling",
    slug: "kitchen-remodeling",
    category: "residential" as const,
    icon: "🍳",
    description: "Transform your kitchen into the heart of your home.",
    long: "Custom cabinetry, quartz and granite countertops, expert tile work, and luxury appliance integration.",
  },
  {
    name: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    category: "residential" as const,
    icon: "🚿",
    description: "Luxurious bathroom renovations for every budget.",
    long: "Walk-in showers, freestanding tubs, heated floors, and master-suite bathrooms designed around you.",
  },
  {
    name: "ADUs",
    slug: "adus",
    category: "residential" as const,
    icon: "🏠",
    description: "Accessory Dwelling Units that add value to your property.",
    long: "Detached and attached ADUs from permits to keys — turnkey backyard homes built to California code.",
  },
  {
    name: "Room Additions",
    slug: "room-additions",
    category: "residential" as const,
    icon: "🏗️",
    description: "Expand your living space with expert room additions.",
    long: "Bedrooms, family rooms, home offices, and second-story additions matched to your existing home.",
  },
  {
    name: "Windows & Doors",
    slug: "windows-doors",
    category: "residential" as const,
    icon: "🪟",
    description: "Energy-efficient windows and doors installed right.",
    long: "Premium dual-pane windows, sliding patio doors, and entry doors that lower bills and boost curb appeal.",
  },
  {
    name: "Outdoor Living",
    slug: "outdoor-living",
    category: "residential" as const,
    icon: "🌿",
    description: "Patios, pergolas, and outdoor kitchens built to impress.",
    long: "Covered patios, pergolas, fire features, and outdoor kitchens that turn yards into year-round retreats.",
  },
  {
    name: "Commercial Construction",
    slug: "commercial",
    category: "commercial" as const,
    icon: "🏢",
    description: "Tenant improvements, buildouts, and commercial renovations.",
    long: "Full-service commercial construction for Inland Empire businesses — tenant improvements, office renovations, retail buildouts, and ADA compliance.",
  },
];

export const COMMERCIAL_SERVICES = [
  {
    name: "TI Buildouts",
    anchor: "tenant-improvements",
    icon: "🏢",
    description: "Tenant improvements for office, medical, retail, and more.",
  },
  {
    name: "Restaurant & Retail",
    anchor: "restaurant-retail",
    icon: "🍽️",
    description: "Restaurant and retail construction from shell to open.",
  },
  {
    name: "Commercial Flooring",
    anchor: "commercial-flooring",
    icon: "🪵",
    description: "Polished concrete, LVT, carpet tile, and epoxy flooring systems.",
  },
  {
    name: "Office Renovations",
    anchor: "office-renovations",
    icon: "💼",
    description: "Modern office upgrades that improve workflow and first impressions.",
  },
];

export const CITIES_SERVED = [
  "Redlands",
  "Yucaipa",
  "Loma Linda",
  "San Bernardino",
  "Riverside",
  "Fontana",
  "Rancho Cucamonga",
  "Ontario",
  "Upland",
  "Claremont",
  "Pomona",
  "Chino",
  "Chino Hills",
  "Victorville",
  "Hesperia",
];

export const HOURS = [
  { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const REVIEWS = [
  {
    name: "Maria G.",
    stars: 5,
    date: "March 2025",
    text: "Construction Station completely transformed our kitchen. The craftsmanship is exceptional — every detail was thought through. Greg and his team are professional, on time, and truly care about the finished product. Our neighbors keep asking who did the work!",
  },
  {
    name: "James T.",
    stars: 5,
    date: "January 2025",
    text: "After getting 5 quotes for our bathroom remodel, we chose Construction Station and couldn't be happier. They stuck to the budget, finished on schedule, and the quality is outstanding. The tile work alone is worth every penny.",
  },
  {
    name: "Sandra K.",
    stars: 5,
    date: "November 2024",
    text: "We had an ADU built in our backyard. From permits to final walkthrough, Construction Station handled everything. Incredibly smooth process for something that could have been a nightmare. Highly recommend for any major project.",
  },
  {
    name: "Robert M.",
    stars: 5,
    date: "October 2024",
    text: "Second time using Construction Station — first for our kitchen, now a room addition. Same quality, same professionalism. You don't find contractors this reliable. Licensed, insured, and they actually show up when they say they will.",
  },
];

export const TRUST_STATS = [
  { value: "18", label: "Years Experience" },
  { value: "Hundreds", label: "Projects Completed" },
  { value: "5★", label: "Average Rating" },
  { value: "#1108879", label: "Licensed" },
  { value: "A+", label: "BBB Rated" },
  { value: "0%", label: "Financing Available" },
];

export const PROJECTS = [
  {
    title: "Modern Farmhouse Kitchen",
    location: "Redlands, CA",
    year: "2024",
    description: "Full gut remodel — custom shaker cabinets, quartz waterfall island, brass fixtures.",
  },
  {
    title: "Spa-Inspired Master Bath",
    location: "Yucaipa, CA",
    year: "2023",
    description: "Curbless walk-in shower, freestanding soaking tub, heated marble flooring.",
  },
  {
    title: "Two-Story Family Room Addition",
    location: "Riverside, CA",
    year: "2024",
    description: "650 sq ft addition with vaulted ceiling, custom millwork, and integrated audio.",
  },
];
