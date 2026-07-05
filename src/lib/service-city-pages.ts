// Data for the per-service city landing pages at
// /services/{service}/{city} for the six expansion cities:
// Norco, Eastvale, Perris (Inland Empire) and Palm Springs, Cathedral City,
// Palm Desert (Coachella Valley). ADU city pages live separately in
// src/lib/adu-cities.ts and cover these cities too.

import { CS } from "@/lib/constants";

export const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-kitchen-design-consultation";

export type ServiceKey =
  | "kitchen-remodeling"
  | "bathroom-remodeling"
  | "flooring"
  | "room-additions"
  | "general-contractor";

export type Faq = { q: string; a: string };

export type ServiceCityProfile = {
  slug: string;
  name: string;
  county: string;
  /** "Inland Empire" or "Coachella Valley" — used in eyebrows and copy. */
  regionLabel: string;
  isDesert: boolean;
  /** One-sentence city character line woven into hero subtitles. */
  heroBlurb: string;
  /** Paragraph about the city's neighborhoods / housing stock / character. */
  cityIntro: string;
  /** Sentence tying the city back to CS's base of operations. */
  proximity: string;
  /** Who issues building permits — used in permit FAQs. */
  permitNote: string;
  /** Unique local paragraph per service — not find-and-replace copy. */
  angles: Record<ServiceKey, string>;
  /** One custom city-specific FAQ per service. */
  serviceFaq: Record<ServiceKey, Faq>;
};

export type ServiceCityService = {
  key: ServiceKey;
  /** Full display name, e.g. "Kitchen Remodeling". */
  name: string;
  /** Keyword phrase used in titles: "{keyword} {City} CA". */
  keyword: string;
  /** URL segment under /services/. */
  routeSegment: string;
  /** The main (non-city) page for this service. */
  mainHref: string;
  mainLabel: string;
  schemaServiceType: string;
  shortDescription: string;
  /** Generic intro paragraphs; {city} is interpolated by the template. */
  intro: string[];
  included: { title: string; blurb: string }[];
  /** Service FAQs with city facts injected. */
  baseFaqs: (city: ServiceCityProfile) => Faq[];
};

const serves = (city: ServiceCityProfile) =>
  `Yes. Construction Station is a licensed California general contractor (CSLB ${CS.license}) and has served Southern California homeowners since ${CS.founded}. ${city.proximity} Every project gets the same in-house crew — no rotating subcontractors — and starts with a free in-home consultation.`;

const permits = (city: ServiceCityProfile, scope: string) =>
  `Most ${scope} require permits when electrical, plumbing, or structural work is involved — and doing it without one creates problems at resale and with insurance. We prepare the plans, submit to ${city.permitNote}, manage plan-check corrections, and schedule every inspection. Permit costs and timelines are built into your fixed-price contract up front.`;

export const SERVICE_CITY_SERVICES: ServiceCityService[] = [
  {
    key: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    keyword: "Kitchen Remodel",
    routeSegment: "kitchen-remodeling",
    mainHref: "/services/kitchen-remodeling",
    mainLabel: "Kitchen Remodeling Overview",
    schemaServiceType: "Kitchen Remodeling",
    shortDescription:
      "Custom cabinetry, quartz countertops, islands, and full-gut kitchen transformations.",
    intro: [
      "The kitchen is where a remodel earns its keep — it's the room you use every day and the first thing an appraiser and a buyer look at. Construction Station has been designing and building kitchens across Southern California since 2008, from focused cabinet-and-countertop refreshes to full-gut transformations with wall removals, new islands, and all-new electrical and plumbing.",
      "Every kitchen starts with a free in-home design session. We measure the space, talk through how your family actually cooks and gathers, and follow up with a written, fixed-price proposal — no allowances that balloon later, no surprise change orders. The same licensed crew that demos your kitchen installs the last cabinet pull.",
    ],
    included: [
      { title: "Custom Cabinetry", blurb: "Semi-custom and full-custom cabinet lines, soft-close hardware, and storage built around how you cook." },
      { title: "Countertops & Backsplash", blurb: "Quartz, granite, and porcelain surfaces with full-height backsplash and waterfall island options." },
      { title: "Layout & Wall Removals", blurb: "Open-concept conversions with engineered beams, permits, and structural calcs handled in-house." },
      { title: "Lighting & Electrical", blurb: "Recessed lighting, under-cabinet LEDs, dedicated appliance circuits, and panel upgrades where needed." },
      { title: "Plumbing & Fixtures", blurb: "Sink and faucet relocations, pot fillers, and new supply and drain lines run to code." },
      { title: "Flooring & Finish", blurb: "Tile, LVP, or hardwood flooring plus paint, trim, and final detailing — one contract, one warranty." },
    ],
    baseFaqs: (city) => [
      {
        q: `How much does a kitchen remodel cost in ${city.name}?`,
        a: `Most full kitchen remodels in ${city.name} land between $45,000 and $95,000 depending on size, layout changes, and finish level. A cabinet-countertop-backsplash refresh can come in under that range, while a full-gut remodel with wall removals and high-end appliances can exceed $120,000. Your free design consultation ends with a written, line-item fixed price — not an estimate that grows.`,
      },
      {
        q: `How long does a kitchen remodel take in ${city.name}?`,
        a: `Once materials are on site and permits are issued, most ${city.name} kitchen remodels take 4–8 weeks of construction. Add 3–6 weeks before that for design, material ordering, and permitting. We give you a written schedule before demo day and keep one crew on your project from start to finish, which is how we avoid the stop-start delays that plague subcontracted jobs.`,
      },
      {
        q: `Do I need a permit to remodel a kitchen in ${city.name}?`,
        a: permits(city, "kitchen remodels"),
      },
      {
        q: `Does Construction Station remodel kitchens in ${city.name}?`,
        a: serves(city),
      },
    ],
  },
  {
    key: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    keyword: "Bathroom Remodel",
    routeSegment: "bathroom-remodeling",
    mainHref: "/services/bathroom-remodeling",
    mainLabel: "Bathroom Remodeling Overview",
    schemaServiceType: "Bathroom Remodeling",
    shortDescription:
      "Walk-in showers, freestanding tubs, and spa-quality primary bath renovations.",
    intro: [
      "Bathrooms are the highest-stakes rooms in a remodel: the most waterproofing, the most trades in the smallest space, and the most visible difference between careful work and shortcuts. Construction Station builds bathrooms the way they should be built — proper shower pans and waterproof membranes behind the tile, pressure-tested plumbing, and ventilation sized for the room.",
      "Whether it's converting a never-used tub into a walk-in shower, rebuilding a hall bath for kids, or creating a true spa-style primary suite with a freestanding tub and heated floors, one licensed crew handles demolition through the final bead of caulk.",
    ],
    included: [
      { title: "Walk-In Showers", blurb: "Curbless and low-curb showers with frameless glass, bench seating, and full waterproof membrane systems." },
      { title: "Tubs & Tub-to-Shower", blurb: "Freestanding soaking tubs, tub replacements, and tub-to-shower conversions done to code." },
      { title: "Vanities & Storage", blurb: "Custom and semi-custom vanities, quartz tops, framed and backlit mirrors, medicine cabinets." },
      { title: "Tile Work", blurb: "Floor-to-ceiling porcelain, natural stone, and pattern layouts installed by our own tile setters." },
      { title: "Plumbing & Fixtures", blurb: "New valves, drains, and supply lines — including repipes of aging galvanized lines while walls are open." },
      { title: "Heated Floors & Ventilation", blurb: "Electric radiant floor heat and properly sized exhaust ventilation to protect the new finishes." },
    ],
    baseFaqs: (city) => [
      {
        q: `How much does a bathroom remodel cost in ${city.name}?`,
        a: `Most full bathroom remodels in ${city.name} run $20,000–$45,000. A hall bath refresh with a new tub or shower, vanity, tile, and fixtures typically sits at the lower end; a primary-suite renovation with a walk-in shower, freestanding tub, and heated floors can reach $50,000–$70,000. Every project is quoted as a fixed price after a free in-home consultation.`,
      },
      {
        q: `How long does a bathroom remodel take in ${city.name}?`,
        a: `A typical ${city.name} bathroom remodel takes 2–4 weeks of construction once permits and materials are in hand. Primary-suite expansions that move walls or plumbing can run 5–8 weeks. Because our crew is in-house, the tile setter shows up the day after the waterproofing passes inspection — not two weeks later.`,
      },
      {
        q: `Do I need a permit for a bathroom remodel in ${city.name}?`,
        a: permits(city, "bathroom remodels"),
      },
      {
        q: `Does Construction Station remodel bathrooms in ${city.name}?`,
        a: serves(city),
      },
    ],
  },
  {
    key: "flooring",
    name: "Flooring Installation",
    keyword: "Flooring Installation",
    routeSegment: "flooring",
    mainHref: "/services/flooring-installation-yucaipa-ca",
    mainLabel: "Flooring Installation Overview",
    schemaServiceType: "Flooring Installation",
    shortDescription:
      "Hardwood, LVP, laminate, carpet, and tile — installed by our own licensed crew.",
    intro: [
      "The right flooring transforms a house; the wrong installation ruins it. Construction Station is a full-service flooring contractor — not a big-box install crew. We remove your existing floors, diagnose and level the subfloor, install moisture barriers where they're needed, lay your chosen material to manufacturer spec, and finish with baseboards, thresholds, and transitions that look like they were always there.",
      "We install hardwood and engineered wood, luxury vinyl plank (LVP), laminate, carpet, and porcelain or natural stone tile — and we'll tell you honestly which material belongs in which room, because we're the same crew that builds kitchens and bathrooms around those floors.",
    ],
    included: [
      { title: "Luxury Vinyl Plank (LVP)", blurb: "100% waterproof planks from COREtec, Shaw, Pergo, and Karndean — the region's most popular floor." },
      { title: "Hardwood & Engineered Wood", blurb: "Solid and engineered hardwood in oak, hickory, maple, and walnut, plus sand-and-finish restoration." },
      { title: "Laminate", blurb: "AC4/AC5-rated laminate with realistic embossed textures for high-traffic living areas." },
      { title: "Tile & Stone", blurb: "Large-format porcelain up to 24×48\", ceramic, and natural stone with precision leveling systems." },
      { title: "Carpet", blurb: "Stain-resistant nylon and polyester carpet, power-stretched over quality pad — no wrinkles, no callbacks." },
      { title: "Subfloor Prep", blurb: "Old-floor removal, leveling, and moisture barriers — the unglamorous work that makes floors last." },
    ],
    baseFaqs: (city) => [
      {
        q: `How much does flooring installation cost in ${city.name}?`,
        a: `Installed pricing in ${city.name} typically runs $6–$9 per sq ft for quality LVP or laminate, $9–$15 for engineered hardwood, and $10–$18 for large-format porcelain tile, including materials, subfloor prep, and trim. Whole-home projects get better per-foot pricing than single rooms. We recommend budgeting an extra 10% for potential subfloor repairs — often it isn't needed, but planning for it means no surprises.`,
      },
      {
        q: `How long does flooring installation take in ${city.name}?`,
        a: `Most ${city.name} flooring projects finish fast: a typical 1,200–1,800 sq ft LVP or laminate installation takes 3–5 working days including old-floor removal and subfloor prep. Tile runs longer — roughly a week per major area — because of setting and grout cure times. We schedule around your household, and whole-home projects can be phased room by room.`,
      },
      {
        q: `Do you provide free flooring estimates in ${city.name}?`,
        a: `Yes — every ${city.name} flooring project starts with a free in-home estimate. We measure your rooms, check the subfloor, bring samples so you can see materials in your own light, and deliver a written price within 5 business days. No obligation and no pressure.`,
      },
      {
        q: `Does Construction Station install flooring in ${city.name}?`,
        a: serves(city),
      },
    ],
  },
  {
    key: "room-additions",
    name: "Room Additions",
    keyword: "Room Addition",
    routeSegment: "room-additions",
    mainHref: "/services/room-additions",
    mainLabel: "Room Additions Overview",
    schemaServiceType: "Room Addition Construction",
    shortDescription:
      "Bedrooms, primary suites, family rooms, and second-story additions matched to your home.",
    intro: [
      "When your family outgrows the house but you don't want to leave the neighborhood, a room addition is almost always cheaper than moving — and it's the only option that gets you exactly the space you want. Construction Station designs and builds additions that look original to the home: matched rooflines, matched stucco and siding, and foundations engineered for your soil.",
      "We handle the entire project under one fixed-price contract — architectural plans, structural engineering, Title 24 energy compliance, permits, construction, and finish work. Bedrooms, primary suites with baths, family rooms, home offices, and full second stories.",
    ],
    included: [
      { title: "Bedroom & Suite Additions", blurb: "Extra bedrooms and full primary suites with baths and walk-in closets." },
      { title: "Family & Great Rooms", blurb: "Open living space additions that flow into the existing kitchen and dining areas." },
      { title: "Second-Story Additions", blurb: "Full and partial second stories where lot coverage is tight but square footage isn't." },
      { title: "Design & Engineering", blurb: "Architectural drawings, structural calcs, and Title 24 energy compliance done in-house." },
      { title: "Permits & Inspections", blurb: "We submit, manage plan check, and walk every city inspection through final." },
      { title: "Seamless Matching", blurb: "Rooflines, stucco texture, siding, and interior finishes matched so the addition doesn't read as one." },
    ],
    baseFaqs: (city) => [
      {
        q: `How much does a room addition cost in ${city.name}?`,
        a: `Room additions in ${city.name} typically run $350–$550 per sq ft depending on complexity — a straightforward bedroom addition sits near the lower end, while a primary suite with a full bath, or any second-story work, prices higher. A 400 sq ft bedroom addition generally lands between $140,000 and $220,000 all-in, including design, engineering, permits, and finish work.`,
      },
      {
        q: `How long does a room addition take in ${city.name}?`,
        a: `Plan on 3–6 months from signed contract to final inspection for a typical ${city.name} addition: 6–10 weeks for design, engineering, and permits, then 10–16 weeks of construction. Second-story additions run longer. We provide a written schedule and keep the same crew on your project throughout.`,
      },
      {
        q: `Do I need a permit for a room addition in ${city.name}?`,
        a: `Always — any addition of habitable square footage requires a building permit, and skipping it means unpermitted square footage that hurts you at appraisal and sale. We prepare plans, submit to ${city.permitNote}, handle plan-check corrections, and schedule every inspection from foundation through final.`,
      },
      {
        q: `Does Construction Station build room additions in ${city.name}?`,
        a: serves(city),
      },
    ],
  },
  {
    key: "general-contractor",
    name: "General Contractor",
    keyword: "General Contractor",
    routeSegment: "general-contractor",
    mainHref: "/about",
    mainLabel: "About Construction Station",
    schemaServiceType: "General Contracting",
    shortDescription:
      "Licensed general contracting — whole-home remodels, kitchens, baths, additions, and ADUs under one roof.",
    intro: [
      "A good general contractor is the difference between a remodel you tell friends about and one you warn them about. Construction Station is a licensed California general contractor (CSLB #1108879), bonded and fully insured, family-run since 2008 — and our crews are employees, not a rotating cast of subcontractors sourced job by job.",
      "That structure matters on multi-trade projects. When the same company handles demolition, framing, electrical, plumbing, drywall, tile, and finish carpentry, nothing falls in the gaps between trades — and you get one schedule, one fixed-price contract, and one warranty that covers the whole job.",
    ],
    included: [
      { title: "Whole-Home Remodels", blurb: "Multi-room renovations sequenced so your household can keep functioning during construction." },
      { title: "Kitchens & Bathrooms", blurb: "The two highest-ROI rooms in the house, built by our own in-house trades." },
      { title: "Room Additions & ADUs", blurb: "New square footage from design and engineering through final inspection." },
      { title: "Structural Work", blurb: "Wall removals, beam installations, foundation repairs — engineered and permitted properly." },
      { title: "Flooring, Windows & Doors", blurb: "Whole-home flooring, energy-efficient window replacement, and exterior doors." },
      { title: "Permits & Project Management", blurb: "Plans, plan check, inspections, and a single point of contact from day one to walkthrough." },
    ],
    baseFaqs: (city) => [
      {
        q: `How do I verify a general contractor in ${city.name} is licensed?`,
        a: `Look the license number up on the CSLB website (cslb.ca.gov) before signing anything — you'll see the license status, classification, bond, and workers' comp coverage. Construction Station holds CSLB license ${CS.license}, is bonded and fully insured, and has held an A+ BBB rating. Any legitimate ${city.name} contractor will hand you their license number without being asked twice.`,
      },
      {
        q: `What does a general contractor cost in ${city.name}?`,
        a: `It depends entirely on scope, which is why we quote fixed prices rather than hourly rates. As reference points for ${city.name} projects: full kitchen remodels typically run $45,000–$95,000, bathrooms $20,000–$45,000, room additions $350–$550 per sq ft, and ADUs $250–$550 per sq ft depending on type. Your free consultation ends with a written line-item price, not a vague allowance-filled estimate.`,
      },
      {
        q: `Do you handle permits and inspections in ${city.name}?`,
        a: `Yes — every permitted project includes plan preparation, submission to ${city.permitNote}, plan-check corrections, and scheduling and walking every inspection through final sign-off. Permit fees are itemized in your contract up front so there are no pass-through surprises.`,
      },
      {
        q: `Does Construction Station work in ${city.name}?`,
        a: serves(city),
      },
    ],
  },
];

export const SERVICE_CITY_PROFILES: ServiceCityProfile[] = [
  {
    slug: "norco",
    name: "Norco",
    county: "Riverside",
    regionLabel: "Inland Empire",
    isDesert: false,
    heroBlurb:
      "Horsetown USA — half-acre animal-keeping lots, horse trails instead of sidewalks, and ranch homes built for real living.",
    cityIntro:
      "Norco is unlike anywhere else in the Inland Empire. \"Horsetown USA\" mandates animal-keeping lots across most of the city, so half-acre-plus parcels, horse trails in place of sidewalks, and a working western character define neighborhoods from Old Norco to the newer hillside homes of Norco Hills. The housing stock leans heavily on 1960s–1980s single-story ranch homes — solid bones, big footprints, and original kitchens and baths that are overdue for the quality of finish these properties deserve. Landmarks like Pumpkin Rock, Ingalls Park, the SilverLakes Sports Complex, and Norco College anchor a community that takes pride in doing things its own way.",
    proximity:
      "Norco sits about 40 minutes west of our Yucaipa headquarters via the 60 and I-15, squarely inside our core Inland Empire service area — the same crew that builds in Redlands and Riverside builds in Norco.",
    permitNote: "the City of Norco Planning and Building Department",
    angles: {
      "kitchen-remodeling":
        "Norco's ranch homes were built with generous square footage but era-typical kitchens — closed-off galleys, original oak cabinets, and tile counters from the Reagan years. The most requested Norco kitchen project is opening that galley to the family room with an engineered beam and building a large island the floor plan can easily absorb. On horse properties we also plan for reality: durable surfaces near the back door, a big single-basin utility sink, and storage that handles feed-store runs as gracefully as grocery runs.",
      "bathroom-remodeling":
        "Most Norco bathrooms we remodel are originals in 1970s and 1980s ranch homes — shallow tubs, 30-inch vanities, and plumbing that's earned retirement. Primary-bath expansions work especially well here because single-story ranch layouts often have closet or hallway space to borrow. On animal-keeping properties, a mudroom-style utility bath near the back entry — tiled floor-to-wainscot, walk-in shower, and a bench for pulling off boots — is one of the most practical upgrades a horse family can make.",
      flooring:
        "Flooring in Norco has to work harder than in a typical suburb: boots, dogs, arena dust, and long single-story floor plans that show every transition. We steer most Norco clients toward heavy-wear-layer LVP or large-format porcelain through the main living areas — waterproof, dust-proof, and forgiving — with carpet reserved for bedrooms. Wide-plank runs look exceptional across an open ranch floor plan, and we detail thresholds at back doors and mudrooms to take real traffic.",
      "room-additions":
        "Norco's half-acre-plus lots are the addition builder's dream — almost every project can expand outward on one story instead of going up, which keeps cost per square foot down and the ranch character intact. We design additions that respect the property's working layout too, keeping corral sightlines, trailer access, and turnaround space in mind. Common Norco projects include primary-suite wings, oversized family rooms, and bonus rooms that double as tack and gear storage.",
      "general-contractor":
        "General contracting in Norco means understanding properties, not just houses. A remodel here often touches the whole parcel — updating a 1970s ranch home inside while coordinating with the realities of animal-keeping zoning, existing outbuildings, and lot drainage. Construction Station handles the full scope under one contract: interior renovation, structural work, exterior improvements, and the permit navigation that comes with Norco's distinctive lot standards.",
    },
    serviceFaq: {
      "kitchen-remodeling": {
        q: "Can you open up the kitchen in an older Norco ranch home?",
        a: "Almost always, yes. Most 1960s–1980s Norco ranch homes have conventionally framed roofs, and the wall between the kitchen and family room is usually load-bearing but very manageable — we install an engineered beam, pull the structural permit, and open the space up. During the free design session we identify which walls are structural and price the beam work into your fixed quote so there's no mid-project surprise.",
      },
      "bathroom-remodeling": {
        q: "Can you build a utility or mudroom bath for our Norco horse property?",
        a: "That's one of our favorite Norco projects. A back-entry bath with a tiled walk-in shower, floor drain, durable porcelain surfaces, a bench, and a deep utility sink lets riders clean up without tracking the arena through the house. If there's an existing laundry or back hall, we can often carve one out without adding square footage.",
      },
      flooring: {
        q: "What flooring holds up best on a Norco horse property?",
        a: "Heavy-wear-layer LVP (20 mil or better) and large-format porcelain tile are the two we recommend. Both shrug off grit, boot traffic, dog claws, and the fine dust that comes with trail access, and both mop clean. We'd steer you away from solid hardwood in main traffic paths on a working property — save the wood look for LVP that can take the abuse.",
      },
      "room-additions": {
        q: "Does Norco's animal-keeping zoning affect a room addition?",
        a: "It can. Norco's lot standards protect animal-keeping capacity, so an addition's placement relative to setbacks, corrals, and lot coverage gets reviewed with that in mind. We confirm your parcel's specifics with the City of Norco before design begins, and we lay out the addition so you keep trailer access and animal areas intact.",
      },
      "general-contractor": {
        q: "Do you work on both the house and outbuildings in Norco?",
        a: "Yes — as a licensed general contractor we can handle the residence, garages, covered patios, and permitted accessory structures under one contract. Many Norco projects pair an interior remodel with exterior work, and running it all through one contractor keeps the schedule, grading, and inspections coordinated.",
      },
    },
  },
  {
    slug: "eastvale",
    name: "Eastvale",
    county: "Riverside",
    regionLabel: "Inland Empire",
    isDesert: false,
    heroBlurb:
      "One of California's youngest cities — master-planned neighborhoods where the original builder finishes are ready for their first real upgrade.",
    cityIntro:
      "Eastvale incorporated in 2010, making it one of the youngest cities in California, and it grew almost entirely in one generation — former dairy land transformed into master-planned neighborhoods of two-story family homes between the late 1990s and mid-2010s. That gives Eastvale a housing stock unlike its neighbors: nearly every home has modern electrical, modern plumbing, and an HOA — and nearly every home also has the same builder-grade kitchen, baths, and flooring it was sold with. From the neighborhoods around Harada Heritage Park to the homes near Eastvale Gateway and The Merge, the city is entering its first big remodel cycle, and the difference between builder-grade and custom is dramatic.",
    proximity:
      "Eastvale anchors the western edge of our Inland Empire service area, about 45 minutes from our Yucaipa headquarters via the 60 — the same in-house crew, the same standards.",
    permitNote: "the City of Eastvale's Building and Safety Division",
    angles: {
      "kitchen-remodeling":
        "Eastvale kitchens are a remodeler's clean slate: the 2000s builder package — raised-panel maple or oak, 4-inch granite or tile splash, and a bulky island — sits in an otherwise great open floor plan with modern electrical behind the walls. That means your budget goes to what you see: full-height custom cabinetry, quartz or porcelain counters with a waterfall island, statement lighting, and a full-height backsplash. Because the bones are new, Eastvale kitchen remodels rarely hit the hidden-condition surprises common in older cities.",
      "bathroom-remodeling":
        "The builder bath package of 2005 — cultured-marble counters, oak-framed mirrors, a fiberglass tub/shower in the hall bath, and a garden tub nobody uses in the primary — is exactly what we replace most in Eastvale. Tub-to-shower conversions with frameless glass, floating double vanities, and floor-to-ceiling porcelain transform these rooms completely, and because the plumbing is modern, the work is fast and predictable. Primary baths especially benefit: that oversized garden-tub deck is free real estate for a true walk-in shower.",
      flooring:
        "Almost every Eastvale flooring project is the same satisfying story: original builder carpet and 18-inch beige tile, replaced wholesale with waterproof LVP downstairs and fresh carpet or LVP up. Two-story homes add the details that separate a pro install from a big-box one — flush stair nosings on the staircase, quality sound-dampening underlayment on the second floor, and clean transitions at the tile-to-plank boundaries the builders left behind.",
      "room-additions":
        "Eastvale families rarely add on because the house is failing — they add on because they're growing faster than the floor plan. The most common projects are downstairs bedroom-and-bath additions for multi-generational living, extended great rooms opening to the yard, and loft-to-bedroom conversions. Eastvale's HOAs add an architectural-review step to most additions, and we prepare and shepherd that submittal alongside the city permit so both approvals move in parallel.",
      "general-contractor":
        "Eastvale homeowners tend to hire a general contractor for whole-home refreshes: flooring, kitchen, baths, and paint executed as one coordinated project on a 2005-era home that's structurally excellent but stylistically frozen at purchase. Running it as a single project with one crew costs less and finishes months faster than hiring trades piecemeal — and we handle the HOA architectural paperwork that most Eastvale communities require for anything visible from the street.",
    },
    serviceFaq: {
      "kitchen-remodeling": {
        q: "Our Eastvale home still has its original builder kitchen — full remodel or just new counters?",
        a: "It depends on the cabinets. If the builder boxes are solid and the layout works, refacing or repainting with new quartz counters and a backsplash is a legitimate mid-range option. But most Eastvale clients who start there end up choosing the full remodel — new full-height cabinetry, a rebuilt island, and lighting — because the per-dollar transformation is far bigger and the home's modern bones keep the project cost predictable. We'll price both paths in your free design session.",
      },
      "bathroom-remodeling": {
        q: "Can you convert our builder tub/shower combo into a walk-in shower?",
        a: "Yes — tub-to-shower conversions are the single most common bathroom project we do in Eastvale. The existing drain and valve locations usually work with minor modification, so the project typically runs about two weeks: full tear-out, new pan and waterproof membrane, floor-to-ceiling tile, and frameless glass. Keep at least one tub in the house for resale; convert the ones you'll actually use.",
      },
      flooring: {
        q: "Can you install LVP on our stairs and second floor?",
        a: "Yes, and stairs are where installer quality shows most. We use matching flush stair-nose profiles — not glued-on rubber trim — and on second floors we install a quality acoustic underlayment so plank flooring doesn't telegraph footsteps to the rooms below. It's the detail Eastvale's two-story homes need and big-box installs routinely skip.",
      },
      "room-additions": {
        q: "Will our Eastvale HOA approve a room addition?",
        a: "Most Eastvale HOAs approve well-designed additions — they care about matched rooflines, stucco, and colors, which is how we design anyway. We prepare the HOA architectural submittal with the same drawings we take to the city and manage both approvals in parallel, so the HOA step adds paperwork but rarely adds calendar time.",
      },
      "general-contractor": {
        q: "Do you handle HOA architectural approval in Eastvale?",
        a: "Yes. Nearly every Eastvale neighborhood requires architectural committee approval for exterior changes and additions. We prepare the submittal package — plans, elevations, materials, and colors — respond to committee questions, and sequence the HOA and city approvals so neither one stalls your start date.",
      },
    },
  },
  {
    slug: "perris",
    name: "Perris",
    county: "Riverside",
    regionLabel: "Inland Empire",
    isDesert: false,
    heroBlurb:
      "One of Riverside County's fastest-growing cities — from historic downtown bungalows to brand-new subdivisions around Lake Perris.",
    cityIntro:
      "Perris spans more housing eras than almost any city in Riverside County. Historic bungalows and mid-century homes surround the old downtown along D Street — home of the Southern California Railway Museum — while master-planned subdivisions like May Ranch, Villages of Avalon, and Green Valley have added thousands of newer homes on the city's edges. Lake Perris State Recreation Area, Skydive Perris, and the Perris Auto Speedway give the city its identity, and the Metrolink 91/Perris Valley Line puts downtown Riverside within a commuter's reach. For homeowners, that mix means remodeling needs run the full spectrum — from repiping a 1950s bungalow to upgrading a builder-grade 2018 tract home.",
    proximity:
      "Perris is about 40 minutes southwest of our Yucaipa headquarters via the 60 and I-215, well inside our core Inland Empire service area — we're in the Perris Valley regularly.",
    permitNote: "the City of Perris Building and Safety Division",
    angles: {
      "kitchen-remodeling":
        "Perris kitchens split into two very different projects. In the older neighborhoods near downtown, a kitchen remodel is the right moment to modernize what's behind the walls — many pre-1980 homes need a panel upgrade or circuit additions to support modern appliances, and we fold that into the project while the walls are open. In May Ranch, Villages of Avalon, and the newer tracts, it's the classic builder-grade-to-custom upgrade: full-height cabinets, quartz, an island that actually anchors the great room. Either way, Perris's strong price-to-value market means a well-built kitchen returns more at appraisal here than in most of the region.",
      "bathroom-remodeling":
        "In Perris's older housing stock, bathroom remodels frequently double as plumbing renewals — original galvanized supply lines are still hiding in pre-1970s homes near downtown, and replacing them while the walls are already open costs a fraction of doing it later. In the newer subdivisions, the work is cosmetic-to-luxury: tub-to-shower conversions, quartz-topped double vanities, and porcelain tile replacing builder fiberglass. Both versions get the same waterproofing standards and the same in-house crew.",
      flooring:
        "Perris summers regularly push past 100°F, and hard-surface flooring is the practical answer — tile and LVP stay cooler underfoot, handle swamp-cooler-to-AC humidity swings, and shrug off the dust that comes with a fast-growing city still surrounded by open land. Whole-home LVP is our most requested Perris project, replacing tired carpet and mismatched tile in one pass. In older homes we check subfloors carefully; decades of settling near downtown often call for leveling that makes the new floor look — and last — dramatically better.",
      "room-additions":
        "Perris has some of the Inland Empire's most favorable addition economics: land is generous, many lots in the established neighborhoods are 7,200 sq ft or larger, and the cost of adding a bedroom or primary suite is far below the cost of trading up in today's market. Growing families in May Ranch and Villages of Avalon add downstairs bedrooms for relatives; owners of older homes near downtown add primary suites their floor plans never had. We design to match — stucco, roofline, and window proportions — so the addition reads original.",
      "general-contractor":
        "A general contractor in Perris has to be fluent in two building eras at once: 1950s bungalows with undocumented past 'improvements' that need careful discovery, and 2015-plus tract homes where the challenge is upgrading finishes without voiding builder warranties. Construction Station runs both kinds of projects weekly across the Inland Empire. One crew, one fixed-price contract, and permits handled through the City of Perris from submittal to final.",
    },
    serviceFaq: {
      "kitchen-remodeling": {
        q: "Our older Perris home has a small electrical panel — can you still remodel the kitchen?",
        a: "Yes, and the remodel is the right time to fix it. Many pre-1980 Perris homes carry 100-amp panels that can't support a modern kitchen's dedicated circuits. We include the panel upgrade and new circuits in the kitchen contract, coordinate the utility work, and have it inspected with the rest of the project — one permit package, one schedule.",
      },
      "bathroom-remodeling": {
        q: "Should we repipe our older Perris home during a bathroom remodel?",
        a: "If your home still has galvanized supply lines — common in pre-1970s homes near downtown Perris — yes, emphatically. The walls are already open, so replacing the bathroom's supply lines (or the whole house) during the remodel costs far less than a standalone repipe later, and it protects your brand-new tile from a future leak. We'll tell you honestly what we find during demo.",
      },
      flooring: {
        q: "What flooring handles Perris heat and dust best?",
        a: "Porcelain tile and quality LVP. Both stay comfortable through 100°+ summers, neither traps the fine dust that blows through the Perris Valley, and both handle the humidity swings between evaporative cooling and AC. If you love the wood look, LVP with a 20-mil wear layer gives you it without hardwood's sensitivity to the dry heat.",
      },
      "room-additions": {
        q: "Is adding on in Perris really cheaper than moving?",
        a: "Usually by a wide margin. Between selling costs, moving costs, and today's mortgage rates, trading up from a Perris home you bought years ago is expensive — while a 400 sq ft primary-suite addition adds the space and substantial appraised value without touching your existing loan. We'll give you a fixed price at the free consultation so you can run the comparison with real numbers.",
      },
      "general-contractor": {
        q: "Can you fix unpermitted work from a previous owner of our Perris home?",
        a: "Yes — it's common in older Perris neighborhoods. We assess what was done, work with the City of Perris on a path to legalize it (usually as-built plans plus corrections), and fold the corrective work into your remodel contract. Legalizing it during a planned remodel is the cheapest moment you'll ever have to do it.",
      },
    },
  },
  {
    slug: "palm-springs",
    name: "Palm Springs",
    county: "Riverside",
    regionLabel: "Coachella Valley",
    isDesert: true,
    heroBlurb:
      "The mid-century modern capital of America — where remodeling means honoring world-famous architecture while building for 115° summers.",
    cityIntro:
      "Palm Springs is the crown of the Coachella Valley and one of the most architecturally significant small cities in America. The Alexander tract homes of Vista Las Palmas and Racquet Club Estates, the estates of the Movie Colony and Old Las Palmas, and the mid-century neighborhoods of Twin Palms and Deepwell define a design language — clean rooflines, breeze block, walls of glass, indoor-outdoor living — that remodeling here has to respect. It also has to respect the desert: summer highs above 110°F, intense UV, and Title 24 climate-zone-15 energy requirements shape every material and mechanical decision. Add one of the country's most active vacation-rental markets, and Palm Springs remodels carry both design stakes and investment stakes.",
    proximity:
      "Construction Station serves the entire Coachella Valley from our Inland Empire base — Palm Springs is about an hour down I-10 from our Yucaipa headquarters, and our crews are in the valley on a regular rotation.",
    permitNote:
      "the City of Palm Springs Department of Planning Services and Building & Safety — including historic-district design review where it applies",
    angles: {
      "kitchen-remodeling":
        "A Palm Springs kitchen remodel is a design exercise first: flat-slab walnut or lacquered cabinetry, terrazzo-look porcelain, waterfall quartz, and sightlines that keep the kitchen part of the living space, the way the Alexanders intended. It's also a desert-engineering exercise — we specify UV-stable cabinet finishes for rooms with walls of west-facing glass, ventilation sized for summer cooking loads, and materials that don't flinch at 115°F attic temperatures above them. For vacation-rental owners, we design for turnovers: durable surfaces, generous seating, and the photograph that books the property.",
      "bathroom-remodeling":
        "Palm Springs bathrooms want to feel like the resorts that made the city famous: curbless walk-in showers behind frameless glass, floating vanities, terrazzo and porcelain, matte black or brushed brass against white. Outdoor showers off the primary suite are a signature Palm Springs upgrade we build regularly — desert evenings were made for them. Practical desert details matter too: we specify UV-stable finishes near clerestory glass and slip-rated tile for the wet traffic that comes with pool living.",
      flooring:
        "Hard surfaces rule the desert, and Palm Springs floors are their own genre — terrazzo-look large-format porcelain, polished concrete, and pale wide-plank looks that keep interiors cool and bright. Material choice here is technical: sun-drenched rooms with walls of glass can hit surface temperatures that push cheap vinyl past its limits, so we specify LVP rated for high heat and UV with proper expansion gaps, or go porcelain in the most exposed rooms. Solid hardwood in direct desert sun is a mistake we'll talk you out of.",
      "room-additions":
        "Additions in Palm Springs live or die on rooflines. The city's flat and low-slung butterfly roofs make a badly matched addition instantly visible, so we design extensions that continue the original geometry — and where the home sits in a historic district or is a Class 1 site, we manage the design review that comes with it. Casita additions and great-room expansions with multi-slide glass walls to the pool are the signature projects, engineered to climate-zone-15 Title 24 requirements with cooling loads calculated honestly for the desert.",
      "general-contractor":
        "General contracting in Palm Springs spans full restorations of Alexander-era homes, whole-home updates of 1970s–1990s properties, and investor renovations on vacation-rental timelines. It demands things generic contractors miss: familiarity with historic-district review, desert-rated mechanical sizing, materials that survive the sun, and scheduling that works around the October-to-May season when owners and guests are in residence. Construction Station serves the Coachella Valley with the same in-house crew model we've run in the Inland Empire since 2008.",
    },
    serviceFaq: {
      "kitchen-remodeling": {
        q: "What kitchen materials stand up to the Palm Springs desert climate?",
        a: "Quartz and porcelain counters handle heat and UV without the fading or etching some natural stones show in sun-flooded rooms. For cabinets near big glass exposures, we specify UV-stable finishes so south and west elevations don't yellow or fade unevenly. Porcelain, terrazzo-look tile, and heat-rated LVP handle the floors. It's all standard practice for us in the Coachella Valley — the desert punishes material shortcuts.",
      },
      "bathroom-remodeling": {
        q: "Can you add an outdoor shower to our Palm Springs home?",
        a: "Yes — it's one of the most requested upgrades we build in Palm Springs. Off a primary bath or pool wall, an outdoor shower needs permitted drainage, privacy screening that meets code, and fixtures rated for sun exposure. We typically pair it with a primary-bath remodel so the plumbing runs once and the indoor and outdoor spaces read as one design.",
      },
      flooring: {
        q: "Will LVP warp in Palm Springs heat?",
        a: "Cheap LVP can — direct desert sun through a wall of glass will exceed the temperature tolerance of budget products. We install lines rated for high-heat environments, acclimate them on site, leave manufacturer-spec expansion gaps, and recommend porcelain instead in the most sun-hammered rooms. Specified correctly, plank flooring performs beautifully in the desert; specified from a big-box bargain aisle, it buckles by August.",
      },
      "room-additions": {
        q: "Does historic-district review apply to additions in Palm Springs?",
        a: "It depends on the property. Homes in designated historic districts or with Class 1/Class 2 site designations get architectural review on top of standard permitting, focused on massing, rooflines, and street-visible character. We confirm your property's status before design starts and prepare the review package ourselves — it adds a step, not a roadblock, when the design respects the original architecture.",
      },
      "general-contractor": {
        q: "Do you renovate vacation rentals in Palm Springs?",
        a: "Yes — vacation-rental renovations are a significant part of our Coachella Valley work. We build to hospitality durability standards, design for the listing photos, and schedule hard around your booking calendar, including summer-window renovations timed while occupancy is low. We'll also flag the city's vacation-rental compliance items that touch construction, like required parking and safety details.",
      },
    },
  },
  {
    slug: "cathedral-city",
    name: "Cathedral City",
    county: "Riverside",
    regionLabel: "Coachella Valley",
    isDesert: true,
    heroBlurb:
      "The Coachella Valley's best value — established Cove neighborhoods and mid-valley homes with serious remodeling upside.",
    cityIntro:
      "Cathedral City sits in the heart of the Coachella Valley between Palm Springs and Rancho Mirage, and it's the valley's value story: the same desert light, mountain views, and indoor-outdoor lifestyle at a friendlier price of entry. The Cathedral City Cove — the hillside grid of 1960s–1980s homes tucked against the Santa Rosa foothills — is the city's remodeling heartland, joined by established neighborhoods like Panorama and Dream Homes and newer subdivisions toward Rio Vista. The revitalized downtown Arts & Entertainment District, anchored by the Mary Pickford Theatre, has brought fresh energy, and homeowners here get outsized returns from quality renovation because the neighborhood ceilings keep rising.",
    proximity:
      "Construction Station serves the entire Coachella Valley — Cathedral City is about an hour from our Yucaipa headquarters down I-10, on the same regular rotation as our Palm Springs and Palm Desert projects.",
    permitNote: "the City of Cathedral City Building and Safety Division",
    angles: {
      "kitchen-remodeling":
        "Cove kitchens are the classic Cathedral City project: 1970s-era galley layouts with original cabinets and a wall separating the cook from the mountain view out the living-room glass. Opening that wall, running quartz or terrazzo-look porcelain, and adding an island turns these houses into the desert-modern homes their bones always promised — at a project cost meaningfully below the identical remodel two miles west in Palm Springs. Desert specification comes standard: UV-stable finishes, heat-tolerant surfaces, and ventilation sized for summer.",
      "bathroom-remodeling":
        "Bathrooms in the Cove and Panorama neighborhoods are mostly originals — 1970s tile, shallow tubs, and vanities on their third coat of paint. Our standard Cathedral City transformation is a walk-in porcelain shower with frameless glass, a floating vanity, and desert-appropriate finishes that read high-end without Palm Springs pricing. For hillside Cove homes we check drainage and slab conditions carefully during demo; the foothill lots occasionally hide surprises best caught while the floor is open.",
      flooring:
        "Cathedral City floors follow desert logic — porcelain tile and heat-rated LVP that stay cool through 110° summers and handle the fine sand that finds its way into every Coachella Valley home. Whole-home flooring swaps are the most common project here: pulling a patchwork of 1980s carpet, parquet, and tile from a Cove home and running one continuous pale plank or large-format porcelain floor transforms the space more per dollar than any other single upgrade.",
      "room-additions":
        "Cathedral City additions punch above their weight because land and neighborhood pricing leave room to build value. Primary-suite additions on Cove homes — many of which were built with modest bedroom wings — are the signature project, followed by casita additions that serve as guest quarters or rental space. Hillside lots in the Cove need real structural attention to slope and drainage, which our in-house engineering handles, and everything is built to climate-zone-15 Title 24 energy requirements.",
      "general-contractor":
        "Cathedral City is where Coachella Valley investors and homeowners get the most renovation for the money, and our general-contracting work here reflects it: whole-home updates of Cove properties, pre-sale renovations, and phased remodels that take a dated house to desert-modern over a season or two. One in-house crew, desert-rated materials as standard practice, and permits handled through Cathedral City Building and Safety from submittal to final.",
    },
    serviceFaq: {
      "kitchen-remodeling": {
        q: "Is a kitchen remodel worth it in Cathedral City compared to Palm Springs?",
        a: "Often more so. The construction cost of a quality kitchen is similar valley-wide, but Cathedral City's rising neighborhood values — especially in the Cove — mean a $60,000 kitchen frequently moves the appraisal needle further here than the same kitchen would in a market that's already peaked. You get Palm Springs design at Cathedral City economics.",
      },
      "bathroom-remodeling": {
        q: "Our Cove home has original 1970s bathrooms — what should we budget?",
        a: "Most Cove bathroom remodels run $20,000–$40,000 per bath for a full transformation: demo to studs, new waterproofing, walk-in porcelain shower, floating vanity, and fixtures. Because these homes are on slab and the plumbing is 50 years old, we include a camera inspection of the drains during design — if anything needs correcting, you'll know before demo, not during.",
      },
      flooring: {
        q: "What's the best flooring for a Cathedral City home?",
        a: "Large-format porcelain or heat-and-UV-rated LVP, in light desert tones that bounce the valley's abundant light and hide the sand that comes with it. Porcelain wins in sunrooms and west-facing rooms with big glass; LVP wins on comfort and budget everywhere else. We bring samples to your home so you can judge them in your own light — desert sun changes how every material reads.",
      },
      "room-additions": {
        q: "Can you build on a hillside lot in the Cathedral City Cove?",
        a: "Yes — Cove hillside additions are very buildable, they just demand honest engineering: stepped foundations or grade beams where the slope requires, drainage designed for the foothill runoff, and structural calcs stamped for the site. We fold the engineering into the fixed-price contract and handle the city's hillside review as part of permitting.",
      },
      "general-contractor": {
        q: "Do you do full-home renovations for Cathedral City investors?",
        a: "Regularly. Cathedral City is one of the Coachella Valley's most active markets for value-add renovation, and we run investor projects on fixed prices and firm schedules — whole-home scopes covering flooring, kitchen, baths, paint, and curb appeal, sequenced for the fastest path to listing or leasing. We're direct about which upgrades return money in this market and which don't.",
      },
    },
  },
  {
    slug: "palm-desert",
    name: "Palm Desert",
    county: "Riverside",
    regionLabel: "Coachella Valley",
    isDesert: true,
    heroBlurb:
      "The polished heart of the Coachella Valley — El Paseo style, country-club living, and remodels timed to the desert seasons.",
    cityIntro:
      "Palm Desert is the Coachella Valley's polished center — home to the El Paseo shopping district, the McCallum Theatre, The Living Desert Zoo and Gardens, and the valley's largest concentration of country-club communities, from Palm Desert Country Club to Ironwood and Bighorn. The housing stock ranges from 1970s–1990s golf-course homes and condos in South Palm Desert to newer neighborhoods in the city's north end near the CSU San Bernardino Palm Desert campus and Desert Willow. A large share of owners are seasonal, which shapes how remodeling works here: projects are planned in spring, built through the quiet summer, and finished before the November return — and HOA architectural review is a fact of life in most communities.",
    proximity:
      "Construction Station serves the full Coachella Valley — Palm Desert is roughly an hour from our Yucaipa headquarters via I-10, and our desert projects run on a regular crew rotation.",
    permitNote:
      "the City of Palm Desert Building & Safety Division — plus HOA architectural review in most country-club communities",
    angles: {
      "kitchen-remodeling":
        "Palm Desert kitchens skew upscale, and the remodels do too: full-height custom cabinetry, quartzite and porcelain surfaces, panel-ready appliances, and bars and islands built for the entertaining that defines country-club living. Many 1980s–1990s golf-course homes carry sunken living rooms, soffited ceilings, and closed kitchens that a remodel can finally correct — we remove soffits, open the wall to the fairway view, and light the space properly. For seasonal residents, we routinely run the entire project over the summer so you leave in May and return in fall to a finished kitchen.",
      "bathroom-remodeling":
        "The signature Palm Desert bathroom project is retiring the 1990s package — cultured marble, gold-brass frames, sunken platform tubs — in favor of a serene, spa-grade suite: curbless porcelain shower, freestanding tub where the platform was, floating double vanity, and quiet desert tones. In country-club condos and villas we're experienced with the practical constraints: HOA rules, shared plumbing walls, and elevator-and-parking logistics that make crew discipline matter. Summer build windows for seasonal owners are standard practice.",
      flooring:
        "Palm Desert floors trend elegant and cool: large-format porcelain in warm desert neutrals, honed-stone looks, and wide pale planks that suit both a contemporary remodel and a classic country-club interior. Heat and UV specification is standard — heat-rated LVP or porcelain in the sun-heavy rooms — and in golf-course homes we detail transitions carefully across the big open living-dining-bar floor plans of the era. Whole-home flooring is a favorite summer project for seasonal owners: leave after Coachella season, come back to new floors everywhere.",
      "room-additions":
        "Additions in Palm Desert range from casitas and guest suites on single-family lots to great-room expansions that open golf-course homes to their patios with multi-slide glass. Nearly every project in a country-club community adds an HOA architectural layer to city permitting — massing, roof tile, and exterior color all get reviewed — and we manage both tracks in parallel as standard practice. Everything is engineered to climate-zone-15 Title 24 requirements, with cooling capacity sized for real desert summers rather than the code minimum.",
      "general-contractor":
        "General contracting in Palm Desert is a logistics discipline: HOA gate access and work-hour rules, seasonal owners managing projects from out of state, and finish expectations set by El Paseo rather than the big-box aisle. Construction Station runs it accordingly — weekly photo-documented progress reports for remote owners, summer construction windows planned around your seasonal calendar, and one in-house crew accountable for every trade. Licensed CSLB #1108879, serving the Coachella Valley alongside our Inland Empire home base.",
    },
    serviceFaq: {
      "kitchen-remodeling": {
        q: "Can you remodel our Palm Desert kitchen over the summer while we're away?",
        a: "Yes — that's the rhythm of most of our Palm Desert work. We finalize design and selections in spring while you're here, order everything before you leave, build through the summer with weekly photo and video updates, and walk the finished kitchen with you when you return in fall. Your keys, alarm codes, and HOA access are handled under a written protocol.",
      },
      "bathroom-remodeling": {
        q: "Can you remodel a bathroom in our country-club condo or villa?",
        a: "Yes — we work in Palm Desert's country-club communities regularly and know the drill: HOA approval packages, insurance certificates for the association, protected common-area access, and work-hour compliance. Shared plumbing walls in attached units need coordination with the HOA and neighbors, and we manage that communication so your remodel doesn't become a board agenda item.",
      },
      flooring: {
        q: "What flooring is best for a Palm Desert golf-course home?",
        a: "Large-format porcelain in warm neutrals is the valley's gold standard — cool underfoot in summer, indifferent to sun, and elegant across the wide-open floor plans of golf-course homes. Heat-rated wide-plank LVP is the softer-underfoot alternative. Either way we detail the indoor-outdoor transitions at your patio sliders carefully, because that sightline to the fairway is the whole point.",
      },
      "room-additions": {
        q: "Will our Palm Desert HOA approve a casita or room addition?",
        a: "Most do, provided the design matches the community's architectural standards — roof tile, stucco color, massing, and setbacks. We design to your HOA's guidelines from the start, prepare the architectural-review package alongside the city permit set, and present to the committee if needed. Approval timelines vary by community, so we sequence the HOA review first to protect your construction window.",
      },
      "general-contractor": {
        q: "How do you manage a Palm Desert remodel if we live out of state?",
        a: "Remote-owner projects are a core part of our Coachella Valley work. You get a single point of contact, a written schedule, weekly photo-and-video progress reports, and decision points batched so they respect your time zone. Payments follow milestones you can verify from the reports, and the final walkthrough happens on your calendar — in person or by video, then in person when you're back.",
      },
    },
  },
];

export const SERVICE_CITY_SLUGS = SERVICE_CITY_PROFILES.map((c) => c.slug);

export const getServiceCityProfile = (
  slug: string
): ServiceCityProfile | undefined =>
  SERVICE_CITY_PROFILES.find((c) => c.slug === slug);

export const getServiceCityService = (
  key: ServiceKey
): ServiceCityService => {
  const service = SERVICE_CITY_SERVICES.find((s) => s.key === key);
  if (!service) throw new Error(`Unknown service key: ${key}`);
  return service;
};

export const buildServiceCityFaqs = (
  service: ServiceCityService,
  city: ServiceCityProfile
): Faq[] => [...service.baseFaqs(city), city.serviceFaq[service.key]];

/** All city-specific page links for a city (the five services here + ADU). */
export const serviceCityLinks = (city: ServiceCityProfile) => [
  ...SERVICE_CITY_SERVICES.map((s) => ({
    name: s.name,
    href: `/services/${s.routeSegment}/${city.slug}`,
    description: s.shortDescription,
  })),
  {
    name: "ADU Construction",
    href: `/services/adu/${city.slug}`,
    description: `ADU regulations, costs, and rental income in ${city.name} — full city guide.`,
  },
];
