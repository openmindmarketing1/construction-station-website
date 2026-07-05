export type CityFaq = { q: string; a: string };

export type City = {
  name: string;
  state: string;
  slug: string;
  county: string;
  description: string;
  population?: string;
  // Optional per-city SEO overrides. When set, they replace the generated
  // title/description in areas/[city] generateMetadata.
  seoTitle?: string;
  seoDescription?: string;
  // Optional city-specific body paragraphs. When set, they replace the
  // generic three-paragraph local copy in areas/[city].
  localContext?: string[];
  // Optional FAQ section rendered with FAQPage JSON-LD in areas/[city].
  faqs?: CityFaq[];
};

export const CITIES: City[] = [
  { name: "Redlands", state: "CA", slug: "redlands", county: "San Bernardino", description: "Home base — serving Redlands homeowners since 2008", population: "75,000" },
  { name: "Yucaipa", state: "CA", slug: "yucaipa", county: "San Bernardino", description: "Trusted kitchen and bathroom remodeling in Yucaipa", population: "55,000" },
  { name: "Loma Linda", state: "CA", slug: "loma-linda", county: "San Bernardino", description: "Premium home remodeling for Loma Linda residents", population: "25,000" },
  { name: "San Bernardino", state: "CA", slug: "san-bernardino", county: "San Bernardino", description: "Full-service contractor serving San Bernardino homeowners", population: "222,000" },
  { name: "Riverside", state: "CA", slug: "riverside", county: "Riverside", description: "Award-winning kitchen and bathroom remodels in Riverside", population: "310,000" },
  { name: "Fontana", state: "CA", slug: "fontana", county: "San Bernardino", description: "Trusted home renovation contractor in Fontana", population: "220,000" },
  { name: "Rancho Cucamonga", state: "CA", slug: "rancho-cucamonga", county: "San Bernardino", description: "Luxury kitchen and bath remodels in Rancho Cucamonga", population: "175,000" },
  { name: "Ontario", state: "CA", slug: "ontario", county: "San Bernardino", description: "Expert home remodeling in Ontario, CA", population: "185,000" },
  { name: "Upland", state: "CA", slug: "upland", county: "San Bernardino", description: "Premium renovation services in Upland", population: "78,000" },
  { name: "Claremont", state: "CA", slug: "claremont", county: "Los Angeles", description: "High-end home remodeling in Claremont", population: "36,000" },
  { name: "Pomona", state: "CA", slug: "pomona", county: "Los Angeles", description: "Trusted kitchen and bath contractor in Pomona", population: "150,000" },
  { name: "Chino", state: "CA", slug: "chino", county: "San Bernardino", description: "Full home renovation services in Chino", population: "91,000" },
  { name: "Chino Hills", state: "CA", slug: "chino-hills", county: "San Bernardino", description: "Luxury home remodels in Chino Hills", population: "82,000" },
  { name: "Victorville", state: "CA", slug: "victorville", county: "San Bernardino", description: "Trusted remodeling contractor in Victorville", population: "135,000" },
  { name: "Hesperia", state: "CA", slug: "hesperia", county: "San Bernardino", description: "Expert home renovation in Hesperia, CA", population: "100,000" },
  { name: "Apple Valley", state: "CA", slug: "apple-valley", county: "San Bernardino", description: "Home remodeling specialists in Apple Valley", population: "73,000", seoTitle: "Kitchen Remodel & Home Additions Apple Valley CA | Licensed Contractor | Construction Station", seoDescription: "Trusted remodeling contractor serving Apple Valley CA. Kitchen remodels, bathroom renovations, home additions. Free estimates. Call (909) 797-6333." },
  { name: "Highland", state: "CA", slug: "highland", county: "San Bernardino", description: "Premium kitchen and bath in Highland, CA", population: "55,000" },
  { name: "Colton", state: "CA", slug: "colton", county: "San Bernardino", description: "Reliable remodeling contractor in Colton", population: "54,000" },
  { name: "Moreno Valley", state: "CA", slug: "moreno-valley", county: "Riverside", description: "Affordable quality remodeling in Moreno Valley", population: "210,000" },
  { name: "Corona", state: "CA", slug: "corona", county: "Riverside", description: "Award-winning kitchen remodels in Corona, CA", population: "168,000" },
  { name: "Beaumont", state: "CA", slug: "beaumont", county: "Riverside", description: "Home remodeling and construction in Beaumont", population: "55,000" },
  { name: "Calimesa", state: "CA", slug: "calimesa", county: "Riverside", description: "Kitchen, bath, and home renovation in Calimesa", population: "13,000" },
  { name: "Banning", state: "CA", slug: "banning", county: "Riverside", description: "Trusted remodeling contractor in Banning, CA", population: "32,000" },
  {
    name: "Norco",
    state: "CA",
    slug: "norco",
    county: "Riverside",
    description: "Remodeling contractor for Horsetown USA's ranch properties",
    population: "26,000",
    seoTitle: "Inland Empire Service Area | Construction Station Flooring & Design | Norco CA",
    seoDescription:
      "Trusted Norco contractor for kitchen & bathroom remodeling, flooring, ADUs & room additions. Norco remodeling built for horse-property living. Call (909) 797-6333.",
    localContext: [
      "Norco isn't a typical suburb, and remodeling here shouldn't be typical either. \"Horsetown USA\" mandates animal-keeping lots across most of the city — half-acre-plus parcels, horse trails where sidewalks would be, and a working western character that runs from Old Norco to the hillside homes of Norco Hills. Landmarks like Pumpkin Rock, Ingalls Park, the SilverLakes Sports Complex, and Norco College anchor a community that does things its own way.",
      "The housing stock leans on 1960s–1980s single-story ranch homes: solid bones, generous footprints, and original kitchens and bathrooms that are overdue for finishes worthy of these properties. We open galley kitchens to family rooms, rebuild era-original bathrooms, run durable flooring that stands up to boots and dogs, and design additions that use Norco's big lots to expand outward — while respecting corral sightlines, trailer access, and the city's animal-keeping lot standards.",
      "Construction Station is about 40 minutes from Norco via the 60 and I-15 — the same in-house crew that has built across the Inland Empire from our Yucaipa headquarters since 2008. We pull permits through the City of Norco Planning and Building Department and price every project as a fixed, line-item contract.",
    ],
    faqs: [
      {
        q: "Does Construction Station serve Norco?",
        a: "Yes — Norco is squarely inside our core Inland Empire service area, about 40 minutes from our Yucaipa headquarters via the 60 and I-15. The same in-house crew that builds in Redlands and Riverside builds in Norco, and every project starts with a free in-home consultation.",
      },
      {
        q: "What remodeling services do you offer in Norco?",
        a: "Everything under one license: kitchen remodeling, bathroom remodeling, flooring installation, room additions, ADUs and garage conversions, windows and doors, outdoor living, and full general-contracting projects. Because our trades are in-house, multi-room Norco projects run on one schedule with one warranty.",
      },
      {
        q: "How much does a home remodel cost in Norco?",
        a: "As reference points: full kitchen remodels typically run $45,000–$95,000, bathroom remodels $20,000–$45,000, room additions $350–$550 per sq ft, and ADUs $250–$550 per sq ft depending on type. Norco's larger ranch floor plans sometimes mean more square footage than a typical suburb, so we quote every project as a fixed line-item price after a free consultation.",
      },
      {
        q: "Do you understand Norco's animal-keeping zoning?",
        a: "Yes. Norco's lot standards protect animal-keeping capacity, which affects where additions, ADUs, and accessory structures can sit relative to setbacks, corrals, and lot coverage. We verify your parcel's specifics with the City of Norco before design begins and lay projects out so trailer access and animal areas stay intact.",
      },
      {
        q: "Can you remodel an older Norco ranch home?",
        a: "That's our favorite kind of Norco project. Most 1960s–1980s ranch homes here have great bones — we open up closed floor plans with engineered beams, modernize electrical panels and plumbing while walls are open, and match new work to the home's original character. Structural engineering and permits are handled in-house.",
      },
      {
        q: "Are you licensed and insured for work in Norco?",
        a: "Yes — Construction Station is a licensed California general contractor (CSLB #1108879), bonded and fully insured, with an A+ BBB rating. You can verify the license anytime at cslb.ca.gov. We've been family-run since 2008.",
      },
    ],
  },
  {
    name: "Eastvale",
    state: "CA",
    slug: "eastvale",
    county: "Riverside",
    description: "Upgrading Eastvale's builder-grade homes to custom quality",
    population: "70,000",
    seoTitle: "Inland Empire Service Area | Construction Station Flooring & Design | Eastvale CA",
    seoDescription:
      "Eastvale contractor for kitchen & bath remodels, flooring, ADUs & additions. Eastvale remodeling that takes builder-grade homes custom. Call (909) 797-6333.",
    localContext: [
      "Eastvale is one of California's youngest cities — incorporated in 2010 and built almost entirely in one generation, as former dairy land became master-planned neighborhoods of two-story family homes between the late 1990s and mid-2010s. From the blocks around Harada Heritage Park to the homes near Eastvale Gateway and The Merge, the city has modern infrastructure everywhere and the same story in nearly every house: great bones, builder-grade finishes.",
      "That makes Eastvale the Inland Empire's best remodeling value story. Because the electrical, plumbing, and framing are modern, your budget goes to what you see — custom kitchens replacing the 2005 builder package, tub-to-shower conversions with frameless glass, whole-home LVP replacing original carpet and beige tile, and additions for families outgrowing the floor plan. Most Eastvale neighborhoods have HOAs, and we prepare and shepherd architectural-review submittals alongside city permits as standard practice.",
      "Eastvale anchors the western edge of our service area, about 45 minutes from our Yucaipa headquarters via the 60. Same in-house crew, same fixed-price contracts, same standards we've kept across the Inland Empire since 2008.",
    ],
    faqs: [
      {
        q: "Does Construction Station serve Eastvale?",
        a: "Yes — Eastvale sits at the western edge of our core Inland Empire service area, about 45 minutes from our Yucaipa headquarters via the 60. Our own in-house crew handles every project, and consultations are free and in-home.",
      },
      {
        q: "What remodeling services do you offer in Eastvale?",
        a: "Kitchen remodeling, bathroom remodeling, flooring installation, room additions, ADUs and garage conversions, windows and doors, and whole-home renovations as your general contractor. Eastvale's most popular projects are builder-grade-to-custom kitchen upgrades and whole-home flooring.",
      },
      {
        q: "Our Eastvale home is all original builder finishes — where do we start?",
        a: "Usually flooring or the kitchen, because they transform the most per dollar. Since Eastvale homes have modern electrical and plumbing behind the walls, remodels here are fast and predictable — the budget goes to cabinetry, counters, tile, and floors instead of hidden repairs. A free design session will price the options so you can sequence the work.",
      },
      {
        q: "Do you handle Eastvale HOA architectural approval?",
        a: "Yes. Nearly every Eastvale neighborhood requires architectural committee approval for exterior changes and additions. We prepare the HOA submittal with the same drawings we take to the City of Eastvale and run both approvals in parallel, so the HOA step adds paperwork, not calendar time.",
      },
      {
        q: "How much does remodeling cost in Eastvale?",
        a: "Typical ranges: full kitchen remodels $45,000–$95,000, bathrooms $20,000–$45,000, whole-home LVP flooring $6–$9 per sq ft installed, room additions $350–$550 per sq ft, and ADUs $250–$550 per sq ft. Every quote is a fixed line-item price — no allowances that balloon mid-project.",
      },
      {
        q: "Are you licensed and insured for work in Eastvale?",
        a: "Yes — Construction Station is a licensed California general contractor (CSLB #1108879), bonded and fully insured, family-run since 2008 with an A+ BBB rating. Verify the license anytime at cslb.ca.gov.",
      },
    ],
  },
  {
    name: "Perris",
    state: "CA",
    slug: "perris",
    county: "Riverside",
    description: "Full-service remodeling in one of Riverside County's fastest-growing cities",
    population: "80,000",
    seoTitle: "Inland Empire Service Area | Construction Station Flooring & Design | Perris CA",
    seoDescription:
      "Perris contractor for kitchen & bathroom remodels, flooring, ADUs & room additions. Perris remodeling from downtown bungalows to new tracts. (909) 797-6333.",
    localContext: [
      "Perris spans more housing eras than almost any city in Riverside County. Historic bungalows and mid-century homes surround the old downtown along D Street — home of the Southern California Railway Museum — while master-planned subdivisions like May Ranch, Villages of Avalon, and Green Valley have added thousands of newer homes on the city's edges. Lake Perris, Skydive Perris, the Perris Auto Speedway, and the Metrolink 91/Perris Valley Line round out one of the county's fastest-growing communities.",
      "That range means remodeling needs run the full spectrum, and we work both ends of it weekly: repiping and re-wiring older downtown homes while their kitchens and bathrooms are rebuilt, and taking builder-grade 2015-plus tract homes to custom with new cabinetry, quartz, and whole-home LVP. Perris's strong price-to-value market means quality renovation moves the appraisal needle further here than in most of the region.",
      "We're about 40 minutes from Perris via the 60 and I-215 from our Yucaipa headquarters, pulling permits through the City of Perris Building and Safety Division. One in-house crew, one fixed-price contract, one warranty.",
    ],
    faqs: [
      {
        q: "Does Construction Station serve Perris?",
        a: "Yes — Perris is well inside our core Inland Empire service area, about 40 minutes southwest of our Yucaipa headquarters via the 60 and I-215. We're in the Perris Valley regularly, and every project starts with a free in-home consultation.",
      },
      {
        q: "What remodeling services do you offer in Perris?",
        a: "Kitchen remodeling, bathroom remodeling, flooring installation, room additions, ADUs and garage conversions, windows and doors, and full general-contracting work. In Perris that ranges from modernizing 1950s downtown bungalows to upgrading brand-new tract homes in May Ranch and Villages of Avalon.",
      },
      {
        q: "How much does a remodel cost in Perris?",
        a: "Typical ranges: kitchens $45,000–$95,000, bathrooms $20,000–$45,000, flooring $6–$9 per sq ft installed for quality LVP, room additions $350–$550 per sq ft, ADUs $250–$550 per sq ft. Perris's affordability means these projects often return more at appraisal, proportionally, than the same work elsewhere in the region.",
      },
      {
        q: "Can you handle older Perris homes with outdated plumbing or electrical?",
        a: "Yes — it's a specialty. Many pre-1980 homes near downtown Perris still carry galvanized supply lines or 100-amp panels. We fold repipes and panel upgrades into kitchen and bathroom remodels while the walls are already open, which costs a fraction of doing that work standalone later.",
      },
      {
        q: "Is it cheaper to add on than to move in Perris?",
        a: "Usually, by a wide margin. Between selling costs and today's mortgage rates, trading up from a home you bought years ago is expensive — while a room addition adds the space and appraised value without touching your existing loan. We'll give you a fixed addition price at the free consultation so you can compare with real numbers.",
      },
      {
        q: "Are you licensed and insured for work in Perris?",
        a: "Yes — Construction Station is a licensed California general contractor (CSLB #1108879), bonded and fully insured, with an A+ BBB rating, family-run since 2008. Verify the license anytime at cslb.ca.gov.",
      },
    ],
  },
  {
    name: "Palm Springs",
    state: "CA",
    slug: "palm-springs",
    county: "Riverside",
    description: "Design-driven remodeling for the mid-century modern capital",
    population: "45,000",
    seoTitle: "Coachella Valley Service Area | Construction Station Flooring & Design | Palm Springs CA",
    seoDescription:
      "Palm Springs contractor for kitchen & bath remodels, flooring, ADUs & additions. Palm Springs remodeling built for mid-century homes & desert heat. (909) 797-6333.",
    localContext: [
      "Palm Springs is the crown of the Coachella Valley and one of the most architecturally significant small cities in America. The Alexander tract homes of Vista Las Palmas and Racquet Club Estates, the estates of the Movie Colony and Old Las Palmas, and the mid-century neighborhoods of Twin Palms and Deepwell define a design language — clean rooflines, breeze block, walls of glass, indoor-outdoor living — that remodeling here has to respect. Construction Station serves the Coachella Valley with that respect built in.",
      "Remodeling in Palm Springs also has to respect the desert. Summer highs above 110°F, intense UV through all that glass, and climate-zone-15 Title 24 energy requirements shape every decision we make: quartz and porcelain surfaces that shrug off heat, UV-stable cabinet and floor finishes, heat-rated LVP or large-format porcelain underfoot, cooling loads calculated honestly, and additions that integrate with desert landscaping and pool living rather than fighting them.",
      "We handle historic-district and Class 1 site design review where it applies, build vacation-rental renovations to hospitality standards on booking-calendar schedules, and pull permits through Palm Springs Planning Services and Building & Safety. Our crews rotate through the valley regularly from our Inland Empire base — about an hour down I-10.",
    ],
    faqs: [
      {
        q: "Does Construction Station serve Palm Springs?",
        a: "Yes — Construction Station serves the entire Coachella Valley, with Palm Springs about an hour from our Yucaipa headquarters down I-10. Our crews are in the valley on a regular rotation, and consultations are free and in-home.",
      },
      {
        q: "What remodeling services do you offer in Palm Springs?",
        a: "Kitchen remodeling, bathroom remodeling, flooring installation, room additions and casitas, ADUs, and full general-contracting — including complete renovations of mid-century and Alexander-era homes and vacation-rental projects built to hospitality durability standards.",
      },
      {
        q: "Do you build for the desert climate?",
        a: "It's standard practice in all our Coachella Valley work. That means heat- and UV-rated materials — quartz and porcelain surfaces, UV-stable finishes, flooring specified for sun-drenched rooms — plus cooling capacity sized for real desert summers, Title 24 climate-zone-15 compliance, and designs that embrace indoor-outdoor living and desert landscaping instead of ignoring them.",
      },
      {
        q: "Can you work on homes in Palm Springs historic districts?",
        a: "Yes. Properties in designated historic districts or with Class 1/Class 2 site designations get architectural review on top of standard permitting. We confirm your property's status before design begins and prepare the review package ourselves — when the design respects the original architecture, it's a step, not a roadblock.",
      },
      {
        q: "Do you renovate Palm Springs vacation rentals?",
        a: "Regularly. We build for turnovers and listing photos, schedule around your booking calendar — including summer renovation windows when occupancy is low — and flag the city's vacation-rental compliance items that touch construction. Fixed prices and firm schedules, because every dark week costs you revenue.",
      },
      {
        q: "How much does remodeling cost in Palm Springs?",
        a: "Typical ranges: full kitchen remodels $45,000–$95,000 (design-forward mid-century projects can run higher), bathrooms $20,000–$45,000, room additions and casitas $350–$550 per sq ft, ADUs $250–$550 per sq ft. Every project is quoted as a fixed line-item price after a free consultation.",
      },
    ],
  },
  {
    name: "Cathedral City",
    state: "CA",
    slug: "cathedral-city",
    county: "Riverside",
    description: "High-value remodeling in the heart of the Coachella Valley",
    population: "52,000",
    seoTitle: "Coachella Valley Service Area | Construction Station Flooring & Design | Cathedral City CA",
    seoDescription:
      "Cathedral City contractor for kitchens, baths, flooring, ADUs & additions. Cathedral City remodeling with desert-rated materials & fixed pricing. (909) 797-6333.",
    localContext: [
      "Cathedral City sits in the heart of the Coachella Valley between Palm Springs and Rancho Mirage, and it's the valley's value story: the same desert light, mountain views, and indoor-outdoor lifestyle at a friendlier price of entry. The Cathedral City Cove — the hillside grid of 1960s–1980s homes tucked against the Santa Rosa foothills — is the city's remodeling heartland, joined by Panorama, Dream Homes, and newer neighborhoods toward Rio Vista, with the revitalized downtown Arts & Entertainment District bringing fresh energy.",
      "Serving the Coachella Valley means building for the desert, and we do it as standard practice: porcelain and heat-rated LVP floors that stay cool through 110° summers, UV-stable finishes, quartz surfaces, and additions engineered to climate-zone-15 Title 24 requirements. In the Cove, hillside lots get honest structural attention — stepped foundations, drainage designed for foothill runoff — handled by our in-house engineering.",
      "Because Cathedral City's neighborhood values keep rising, quality renovation returns more here per dollar than almost anywhere in the valley. We pull permits through Cathedral City Building and Safety and quote every project as a fixed line-item price — about an hour from our Yucaipa headquarters, on the same crew rotation as our Palm Springs and Palm Desert work.",
    ],
    faqs: [
      {
        q: "Does Construction Station serve Cathedral City?",
        a: "Yes — Cathedral City is part of our regular Coachella Valley rotation, about an hour from our Yucaipa headquarters down I-10. Same in-house crew, same fixed-price contracts, and free in-home consultations.",
      },
      {
        q: "What remodeling services do you offer in Cathedral City?",
        a: "Kitchen remodeling, bathroom remodeling, flooring installation, room additions and casitas, ADUs (Cathedral City even has a pre-approved ADU plan program), and whole-home renovations as your general contractor — including investor and pre-sale projects.",
      },
      {
        q: "Is remodeling a Cathedral City Cove home worth it?",
        a: "Often exceptionally so. Cove homes from the 1960s–1980s have great bones and mountain views, and the neighborhood's rising values mean a quality kitchen, bath, or flooring project frequently moves the appraisal further here than the identical project would two miles west. You get Palm Springs design at Cathedral City economics.",
      },
      {
        q: "Can you build on a hillside lot in the Cove?",
        a: "Yes — Cove hillside additions are very buildable with honest engineering: stepped foundations or grade beams where the slope requires, drainage designed for foothill runoff, and structural calcs stamped for the site. We fold the engineering into the fixed-price contract and handle the city's hillside review as part of permitting.",
      },
      {
        q: "Do you build for the desert climate?",
        a: "Standard practice in every Coachella Valley project: heat- and UV-rated flooring and finishes, quartz and porcelain surfaces, cooling sized for real desert summers, Title 24 climate-zone-15 compliance, and designs that integrate desert landscaping and indoor-outdoor living.",
      },
      {
        q: "How much does remodeling cost in Cathedral City?",
        a: "Typical ranges: kitchens $45,000–$95,000, bathrooms $20,000–$40,000, flooring $6–$18 per sq ft installed depending on material, additions $350–$550 per sq ft, ADUs $250–$550 per sq ft. Every project gets a written fixed price after a free consultation.",
      },
    ],
  },
  {
    name: "Palm Desert",
    state: "CA",
    slug: "palm-desert",
    county: "Riverside",
    description: "Polished remodeling for country-club and El Paseo living",
    population: "52,000",
    seoTitle: "Coachella Valley Service Area | Construction Station Flooring & Design | Palm Desert CA",
    seoDescription:
      "Palm Desert contractor for kitchen & bath remodels, flooring, ADUs & additions. Palm Desert remodeling timed to seasonal living & HOA rules. (909) 797-6333.",
    localContext: [
      "Palm Desert is the Coachella Valley's polished center — home to the El Paseo shopping district, the McCallum Theatre, The Living Desert, and the valley's largest concentration of country-club communities, from Palm Desert Country Club to Ironwood and Bighorn. The housing stock ranges from 1970s–1990s golf-course homes and condos in South Palm Desert to newer neighborhoods near the CSU San Bernardino Palm Desert campus and Desert Willow.",
      "A large share of Palm Desert owners are seasonal, and our process is built around that: design and selections finalized in spring, construction through the quiet summer with weekly photo-and-video reports, and a finished project waiting when you return in fall. HOA architectural review is a fact of life in most communities here — we prepare the submittal packages, carry the association's insurance requirements, and run HOA and city approvals in parallel.",
      "Serving the Coachella Valley means desert specification comes standard: large-format porcelain and heat-rated flooring, UV-stable finishes, quartzite and porcelain surfaces, and additions engineered to climate-zone-15 Title 24 requirements with cooling sized for real summers. Palm Desert is about an hour from our Yucaipa headquarters via I-10, on our regular valley crew rotation.",
    ],
    faqs: [
      {
        q: "Does Construction Station serve Palm Desert?",
        a: "Yes — Palm Desert is part of our regular Coachella Valley rotation, roughly an hour from our Yucaipa headquarters via I-10. Consultations are free and in-home, and remote-owner projects are a core part of our valley work.",
      },
      {
        q: "Can you remodel our Palm Desert home over the summer while we're away?",
        a: "That's the rhythm of most of our Palm Desert work. We finalize design and selections in spring, order everything before you leave, build through the summer with weekly photo and video updates, and walk the finished project with you when you return in fall — keys, alarm codes, and HOA access handled under a written protocol.",
      },
      {
        q: "Do you work in country-club communities with HOAs?",
        a: "Regularly. We prepare HOA architectural-review packages — plans, elevations, materials, colors — carry the insurance certificates associations require, respect gate access and work-hour rules, and sequence HOA and city approvals in parallel so neither stalls your construction window.",
      },
      {
        q: "What remodeling services do you offer in Palm Desert?",
        a: "Kitchen remodeling, bathroom remodeling, flooring installation, room additions and casitas, ADUs, and whole-home renovations — from opening up a 1980s golf-course home to its fairway view to full condo and villa remodels in country-club communities.",
      },
      {
        q: "Do you build for the desert climate?",
        a: "Always: large-format porcelain and heat-rated LVP flooring, UV-stable cabinet and floor finishes, quartzite and porcelain surfaces, Title 24 climate-zone-15 compliance, and cooling capacity sized for real desert summers rather than code minimums.",
      },
      {
        q: "How much does remodeling cost in Palm Desert?",
        a: "Typical ranges: full kitchen remodels $45,000–$95,000 (higher for the custom, panel-ready-appliance projects common here), bathrooms $20,000–$50,000, additions and casitas $350–$550 per sq ft, ADUs $250–$550 per sq ft. Every project is quoted as a written fixed line-item price after a free consultation.",
      },
    ],
  },
];
