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
  { name: "Redlands", state: "CA", slug: "redlands", county: "San Bernardino", description: "Home base — serving Redlands homeowners since 2008", population: "75,000" ,
    seoDescription: "Kitchen, bath & ADU remodeling in Redlands, CA — from South Redlands hillside customs to the historic craftsman districts. CS home base since 2008.",
    localContext: [
      "Redlands is home turf — Construction Station's crews are based here, and our most recent ADU build, a 465 sq ft junior ADU, was completed on a Redlands lot. That project ran the full City of Redlands permit path, so we know exactly how the city's Development Services counter handles JADU conversions, setbacks, and owner-occupancy rules.",
      "The housing stock here spans a century: craftsman and Victorian homes near the historic districts, 1950s-70s ranches across north Redlands, and hillside customs in South Redlands with the slab and drainage quirks that come with grade. Older homes frequently hide knob-and-tube circuits and galvanized supply lines that have to be addressed mid-remodel, and we bid for that up front.",
      "Orange-grove-era lots also mean mature trees and deep setbacks, which is why so many Redlands projects are additions and ADUs rather than teardowns. If you are weighing a garage conversion against a detached unit, we can walk you through the same cost tradeoffs we priced on our own Redlands JADU.",
    ],
  },
  { name: "Yucaipa", state: "CA", slug: "yucaipa", county: "San Bernardino", description: "Trusted kitchen and bathroom remodeling in Yucaipa", population: "55,000" ,
    seoDescription: "Yucaipa remodeling contractor — Chapman Heights to the older Dunlap-area ranches. Kitchens, baths, ADUs with City of Yucaipa permits handled.",
    localContext: [
      "Yucaipa splits into two very different remodel profiles: HOA-governed Chapman Heights, where exterior changes need architectural approval before the City of Yucaipa even sees a permit application, and the older ranch homes toward Dunlap and the upper bench, where the work is usually about modernizing 1960s-80s systems.",
      "Foothill lots here come with real slope. Room additions on the north side often need engineered footings and drainage planning that flatland contractors underestimate, and we design for the Oak Glen-adjacent freeze line that surprises people who assume all of the Inland Empire is frost-free.",
      "We are minutes from Yucaipa — it is effectively an extension of our Redlands home base — so site visits, inspector meetings, and punch-list trips do not wait for a crew to cross the county.",
    ],
  },
  { name: "Loma Linda", state: "CA", slug: "loma-linda", county: "San Bernardino", description: "Premium home remodeling for Loma Linda residents", population: "25,000" ,
    seoDescription: "Loma Linda home remodeling — hillside homes, medical-community schedules, and City of Loma Linda permits. Kitchens, baths, additions since 2008.",
    localContext: [
      "Loma Linda's identity is the university and medical center, and it shapes how we work here: many of our clients are hospital staff on rotating schedules, so we plan noisy phases around shift sleep and keep punch lists tight. The city's quiet, residential character is something inspectors here actively protect.",
      "South-slope hillside homes above Barton Road bring the structural side of remodeling — stepped foundations, retaining considerations, and view-driven great-room conversions. Down on the flats, the 1960s-80s stock typically needs panel upgrades before a modern kitchen's appliance load is safe.",
      "Loma Linda borders Redlands, our home base, so we have run City of Loma Linda permits for years — including the health-conscious touches this town asks for more than anywhere else we build: induction cooking, low-VOC finishes, and serious ventilation.",
    ],
  },
  { name: "San Bernardino", state: "CA", slug: "san-bernardino", county: "San Bernardino", description: "Full-service contractor serving San Bernardino homeowners", population: "222,000" },
  { name: "Riverside", state: "CA", slug: "riverside", county: "Riverside", description: "Award-winning kitchen and bathroom remodels in Riverside", population: "310,000" ,
    seoDescription: "Riverside remodeling — Wood Streets craftsman restorations to Canyon Crest updates. Historic-district aware, City of Riverside permits handled.",
    localContext: [
      "Remodeling in Riverside means knowing which neighborhoods carry historic weight. In the Wood Streets, exterior-visible changes on contributing craftsman homes can trigger design review, and the right move is restoring rather than replacing — we detail kitchens and baths so the street-facing character never comes into question.",
      "Canyon Crest and Mission Grove are a different job entirely: 1970s-90s stock where the work is opening up compartmentalized floor plans and updating the original systems. UCR's faculty and staff make up a steady share of our clients on that side of town.",
      "City of Riverside runs its own Building & Safety with online plan check, and our drawings go through it regularly. For the older grid — anything near downtown or Victoria Avenue's citrus-era homes — budget conversations start with what is behind the plaster, and we scope exploratory work honestly.",
    ],
  },
  { name: "Fontana", state: "CA", slug: "fontana", county: "San Bernardino", description: "Trusted home renovation contractor in Fontana", population: "220,000" ,
    seoDescription: "Fontana remodeling contractor — Sierra Lakes tract updates to central Fontana steel-era homes. Kitchens, baths, ADUs. City permits handled.",
    localContext: [
      "Fontana's north end — Sierra Lakes, Coyote Canyon, Hunter's Ridge — is mid-2000s tract construction where the remodel conversation is upgrading builder-grade: island expansions, slab-front cabinet swaps, and turning the loft into real square footage. HOAs there care about exterior work, so we sequence approvals before permits.",
      "Central and south Fontana is the old steel-town grid, with 1950s-60s homes on generous lots. Those lots are exactly why Fontana leads our ADU inquiries — deep rear yards that fit a detached unit, in a city that processes ADU permits through its own Building & Safety division.",
      "Warehouse-corridor growth has pushed Fontana property values fast, and the remodel math follows: owners are adding bathrooms and bedrooms to hold families here rather than trading up. We build those additions to match the original roofline, not to look like a box grafted on.",
    ],
  },
  { name: "Rancho Cucamonga", state: "CA", slug: "rancho-cucamonga", county: "San Bernardino", description: "Luxury kitchen and bath remodels in Rancho Cucamonga", population: "175,000" ,
    seoDescription: "Rancho Cucamonga remodels — Alta Loma & Etiwanda wind-zone builds, Victoria-era HOAs. Luxury kitchens & baths, city permits handled.",
    localContext: [
      "Rancho Cucamonga's building department flags what locals already know: the Etiwanda wind zone is real. Patio covers, additions, and anything with a roof plane up toward Alta Loma and Etiwanda gets engineered for uplift, and we design for it from the first drawing instead of failing plan check.",
      "The city splits between older Alta Loma half-acre properties — horse lots, custom ranches, 1970s systems — and the master-planned Victoria communities where HOA architectural committees review exterior changes before the city will. We run both approval tracks in parallel to keep schedules honest.",
      "This is one of the Inland Empire's strongest home-value markets, and our Rancho clients typically remodel to a higher finish level: full-height backsplashes, panel-ready appliances, real stone. The permit counter at Civic Center Drive sees our plans often.",
    ],
  },
  { name: "Ontario", state: "CA", slug: "ontario", county: "San Bernardino", description: "Expert home remodeling in Ontario, CA", population: "185,000" ,
    seoDescription: "Ontario CA remodeling — Euclid Ave craftsman-era homes to Ontario Ranch new builds. Kitchens, baths, additions with city permits handled.",
    localContext: [
      "Ontario is two housing markets wearing one name. Historic Ontario around Euclid Avenue's tree-lined median holds craftsman and prewar homes where remodels are part restoration — plaster, original casings, and services that predate modern loads. Ontario Ranch, at the south end, is brand-new master-planned construction where the work is personalizing builder spec.",
      "In the older grid we open walls expecting surprises and price exploratory demo honestly; in Ontario Ranch the constraint is the HOA design review that precedes any exterior or structural change. The City of Ontario Building Department handles both worlds and moves efficiently when plans arrive complete.",
      "Airport-area commuters make up much of our Ontario clientele, and their most-requested project is the same: turn an unused formal dining room into a functional home office or expand the kitchen into a true gathering space.",
    ],
  },
  { name: "Upland", state: "CA", slug: "upland", county: "San Bernardino", description: "Premium renovation services in Upland", population: "78,000" ,
    seoDescription: "Upland remodeling contractor — north Upland customs below San Antonio Heights to downtown-era bungalows. Kitchens, baths & additions.",
    localContext: [
      "North Upland, climbing toward San Antonio Heights, is custom-home territory: bigger lots, view lines, and remodels that involve structural moves — vaulting ceilings, widening openings, building out primary suites. Those projects live or die on engineering, and ours is stamped before we bid final numbers.",
      "South of Foothill, the streets around historic downtown Upland hold early-1900s bungalows and postwar cottages where charm and old infrastructure share the walls. We keep the character — built-ins, casings, roof lines — while replacing what the decades wore out.",
      "Upland's Euclid Avenue median and mature canopy set a tone the city takes seriously at plan check for street-visible work. Our crews are twenty minutes away, which keeps inspection-day scheduling simple.",
    ],
  },
  { name: "Claremont", state: "CA", slug: "claremont", county: "Los Angeles", description: "High-end home remodeling in Claremont", population: "36,000" ,
    seoDescription: "Claremont home remodeling — Village-adjacent craftsman & midcentury homes, mature-tree lots, college-town standards. Kitchens & baths.",
    localContext: [
      "Claremont clients are the most detail-literate we serve — a college town where homeowners arrive with journal articles about induction ranges. The housing stock rewards it: craftsman homes near the Village and a genuine midcentury inventory whose post-and-beam bones deserve better than a generic white-shaker remodel.",
      "The city's tree canopy is protected in practice as well as sentiment, which shapes additions here more than anywhere else we build: footprints get designed around root zones, and skylights do the work that a bump-out can't. Claremont's own Building Division reviews with LA County codes, not San Bernardino's — a detail that matters for energy compliance paperwork.",
      "Our typical Claremont project is a kitchen opened carefully to the original living spaces, finished in materials that match the home's era — quartersawn oak, zellige, unlacquered brass — rather than erasing it.",
    ],
  },
  { name: "Pomona", state: "CA", slug: "pomona", county: "Los Angeles", description: "Trusted kitchen and bath contractor in Pomona", population: "150,000" ,
    seoDescription: "Pomona remodeling — Lincoln Park historic district restorations to Phillips Ranch updates. Kitchens, baths, ADUs. LA County codes handled.",
    localContext: [
      "Pomona's Lincoln Park and Wilton Heights historic districts hold some of the region's best Victorian and craftsman stock, and the city's historic-preservation review means exterior-visible work needs a sympathetic hand. We remodel these interiors to modern function while keeping every street-facing detail defensible at review.",
      "Phillips Ranch is the other Pomona: 1980s hillside tracts where the work is honest modernization — oak-to-modern kitchen conversions, primary bath rebuilds, and repairing what three decades of settling did to drywall and decks.",
      "Pomona sits in Los Angeles County, so Title 24 documentation and permit flow run slightly differently than our San Bernardino County jobs — a difference we handle daily rather than discover mid-project. Generous old-grid lots also make Pomona a strong ADU candidate city.",
    ],
  },
  { name: "Chino", state: "CA", slug: "chino", county: "San Bernardino", description: "Full home renovation services in Chino", population: "91,000" ,
    seoDescription: "Chino remodeling contractor — Preserve-era new builds to old dairy-land ranch homes. Kitchens, baths, additions with city permits handled.",
    localContext: [
      "Chino's story is dairy land turned master plan. The Preserve's newer homes come with HOA architectural review and the personalize-the-spec-build remodel profile, while old Chino — the streets around downtown and the fairgrounds — holds 1950s-70s ranch homes on lots sized for a different era.",
      "Those older lots are ADU-ready, and Chino's Building Division processes accessory-unit permits routinely now. Where a client's parents once kept a workshop or back garage, we are usually converting it into a permitted rental or family unit.",
      "Agricultural soil history means we check slabs and drainage more carefully here than in neighboring cities; expansive soils show up in door frames long before anyone calls a contractor. Our additions start with the geotech question, not end with it.",
    ],
  },
  { name: "Chino Hills", state: "CA", slug: "chino-hills", county: "San Bernardino", description: "Luxury home remodels in Chino Hills", population: "82,000" },
  { name: "Victorville", state: "CA", slug: "victorville", county: "San Bernardino", description: "Trusted remodeling contractor in Victorville", population: "135,000" ,
    seoDescription: "Victorville remodeling — Spring Valley Lake to Old Town. High Desert kitchens, baths & additions built for the climate. Permits handled.",
    localContext: [
      "Victorville anchors the High Desert, and Spring Valley Lake anchors its remodel market — a lake-and-golf community with its own association review where waterside outdoor living and kitchen remodels lead the list. Old Town and the 2000s-boom tracts to the north remodel on entirely different budgets and eras.",
      "Desert physics drive our specs here: swamp-cooler-to-refrigerated-air conversions, attic insulation done right, and window packages that keep July manageable. A remodel that ignores the climate line-items is a remodel that disappoints by August.",
      "The boom-era tracts are now old enough for first full kitchen and bath updates, and Victorville's Building & Safety processes those permits routinely. For commuters down the Cajon Pass, we run jobs to firm weekly decision batches so progress never waits on a drive home.",
    ],
  },
  { name: "Hesperia", state: "CA", slug: "hesperia", county: "San Bernardino", description: "Expert home renovation in Hesperia, CA", population: "100,000" },
  { name: "Apple Valley", state: "CA", slug: "apple-valley", county: "San Bernardino", description: "Home remodeling specialists in Apple Valley", population: "73,000", seoTitle: "Kitchen Remodel & Home Additions Apple Valley CA | Licensed Contractor | Construction Station",
    seoDescription: "Apple Valley remodeling — High Desert ranch homes on acre lots, Jess Ranch updates, Town permits handled. Kitchens, baths & additions.",
    localContext: [
      "Apple Valley is a Town, not a city — and its Building Division reviews accordingly, with High Desert realities baked in: acre-plus lots, single-story ranch homes, and on the outskirts, properties running well and septic systems that any addition has to respect.",
      "Desert design rules the material list. We spec for 100-degree summers, hard UV, and real winter frost — deep overhangs on additions, high-SEER equipment, and flooring that tolerates a 40-degree daily swing without gapping.",
      "Jess Ranch's 55+ community drives steady accessibility remodels, while the acreage properties ask for the High Desert classics: great-room conversions, oversized garages and workshops, and covered patios that make evenings outdoors the point of the house.",
    ],
  },
  { name: "Highland", state: "CA", slug: "highland", county: "San Bernardino", description: "Premium kitchen and bath in Highland, CA", population: "55,000" },
  { name: "Colton", state: "CA", slug: "colton", county: "San Bernardino", description: "Reliable remodeling contractor in Colton", population: "54,000" },
  { name: "Moreno Valley", state: "CA", slug: "moreno-valley", county: "Riverside", description: "Affordable quality remodeling in Moreno Valley", population: "210,000" ,
    seoDescription: "Moreno Valley remodeling — 80s-90s boom-era tracts ready for first full updates. Kitchens, baths, additions. City permits handled.",
    localContext: [
      "Moreno Valley grew fast in the 1980s-90s, which means a huge inventory of same-era tract homes now hitting the age where original kitchens, baths, and HVAC all need their first real replacement at once. We package those scopes so the disruption happens once, not three times.",
      "March Air Reserve Base shapes parts of the market — military families on defined timelines who need remodels finished between orders. We quote real calendars, not optimistic ones.",
      "Values here still leave room between purchase price and remodel budget, which makes Moreno Valley one of the smartest fix-don't-move markets we serve; the city's Building & Safety counter processes straightforward residential permits without drama.",
    ],
  },
  { name: "Corona", state: "CA", slug: "corona", county: "Riverside", description: "Award-winning kitchen remodels in Corona, CA", population: "168,000" ,
    seoDescription: "Corona CA remodeling — South Corona HOA tracts to the historic downtown grid. Kitchens, baths & room additions, city permits handled.",
    localContext: [
      "South Corona's hillside tracts toward Cleveland National Forest carry HOA review and a 1990s-2000s housing profile — the remodels are kitchen openings, loft conversions, and outdoor rooms built for canyon evenings. The old downtown grid inside the Circle is a century older and remodels like it.",
      "Corona commuters live on the 91, which changes how we run jobs: crews staged early, decisions batched, and punch lists closed without wait-at-home days. It is the most schedule-sensitive city we serve and we plan accordingly.",
      "The City of Corona runs a responsive Building Division with online inspections scheduling. For the growing families that dominate this market, our most common project is the garage-to-bedroom-plus-bath conversion, engineered and permitted rather than the unpermitted versions we are often called to fix.",
    ],
  },
  { name: "Beaumont", state: "CA", slug: "beaumont", county: "Riverside", description: "Home remodeling and construction in Beaumont", population: "55,000" ,
    seoDescription: "Beaumont remodeling — Sundance, Tournament Hills & Fairway Canyon upgrades, pass-area wind-smart additions. Kitchens & baths, permits handled.",
    localContext: [
      "Beaumont is one of Riverside County's fastest-growing cities, and its housing profile shows it: large master-planned communities — Sundance, Tournament Hills, Fairway Canyon — full of 2005-and-newer homes. The remodels here are upgrades and completions, not gut jobs: extending builder kitchens, finishing California rooms, converting dens to bedrooms.",
      "The San Gorgonio Pass wind is a design input, not a footnote. Patio covers and additions get engineered for gusts that flatten box-store pergolas, and exterior material choices favor what the pass cannot peel off.",
      "Every one of those HOA communities has architectural review ahead of the city's permit counter, and we run both queues at once. Beaumont sits twenty minutes from our base, so it gets the same crew consistency as our Redlands-Yucaipa core.",
    ],
  },
  { name: "Calimesa", state: "CA", slug: "calimesa", county: "Riverside", description: "Kitchen, bath, and home renovation in Calimesa", population: "13,000" ,
    seoDescription: "Calimesa remodeling — ranch homes, manufactured-home upgrades & Mesa Verde-era new builds. Riverside County line expertise. Free consults.",
    localContext: [
      "Calimesa is small, semi-rural, and split between older ranch homes on generous lots, a significant manufactured-home inventory, and the new Mesa Verde-area tract growth. Each remodels differently, and the manufactured stock in particular needs a contractor who understands HUD-tag implications before promising a renovation.",
      "The city sits just across the Riverside County line from our Yucaipa-Redlands base — five minutes away, but a different permit jurisdiction. We pull through the City of Calimesa and keep the county-line paperwork straight so the job never stalls on geography.",
      "Larger Calimesa lots make it a quiet ADU opportunity: detached units and garage conversions pencil well here, and the small-city permit counter is refreshingly direct about what it wants to see.",
    ],
  },
  { name: "Banning", state: "CA", slug: "banning", county: "Riverside", description: "Trusted remodeling contractor in Banning, CA", population: "32,000" ,
    seoDescription: "Banning remodeling — Sun Lakes accessibility updates and midcentury pass-area homes. Aging-in-place, kitchens & baths. City permits handled.",
    localContext: [
      "Banning's biggest remodel driver is Sun Lakes Country Club — thousands of 55+ homes whose owners are updating for the next twenty years: curbless showers, comfort-height everything, wider doorways, and lever hardware, done to look like design choices rather than medical equipment.",
      "Outside the gates, Banning's midcentury stock along the old Ramona Boulevard corridor offers the pass area's most affordable entry into homeownership, and those buyers call us for first-remodel packages that prioritize electrical service, insulation against pass winds, and the kitchen — in that order.",
      "The City of Banning's Building Division is small and personal; plans move fastest when they arrive complete, which is how we submit. Aging-in-place work here can also intersect with HOA rules inside Sun Lakes, and we handle that review alongside the permit.",
    ],
  },
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
