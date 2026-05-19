export type ADUCity = {
  slug: string;
  name: string;
  county: string;
  region: string;
  maxSize: string;
  setbacks: string;
  height: string;
  parking: string;
  jaduAllowed: string;
  impactFees: string;
  permitTimeline: string;
  contact: string;
  notes: string;
  intro: string;
  whyBuild: string;
};

const STATE_SETBACKS = "4 ft side & rear (CA state baseline)";
const STATE_PARKING =
  "Not required in most cases; no replacement parking for garage conversions";
const STATE_JADU = "Yes — up to 500 sq ft; owner-occupancy required if JADU is present";
const STATE_IMPACT_FEES = "Waived under 750 sq ft (state law)";
const STATE_PERMIT_TIMELINE = "60 days maximum (state-mandated review window)";

export const ADU_CITIES: ADUCity[] = [
  {
    slug: "yucaipa",
    name: "Yucaipa",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,000 sq ft (2-bedroom) / 800 sq ft (1-bedroom)",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 25 ft attached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Yucaipa Building & Safety: (909) 797-2489 ext 292",
    notes:
      "Yucaipa runs a Pre-Reviewed ADU Program that accelerates plan check when homeowners use one of the city's vetted plan sets — a meaningful timeline savings compared to a fully custom design submission.",
    intro:
      "Yucaipa is home turf for Construction Station — we live and build here. The city sits in the foothills of the San Bernardino Mountains with large suburban lots, mature trees, and a slower pace that makes detached ADUs especially attractive for multi-generational families, in-law suites, and long-term rental income. Yucaipa's Pre-Reviewed ADU Program shortens permit timelines for homeowners willing to start from a city-vetted plan set, and city planning staff have been actively supportive of backyard housing as a housing-supply solution. Most single-family lots in Yucaipa can accommodate a detached ADU within standard setbacks, and garage-conversion ADUs are common on the older 1960s and 1970s tract homes throughout the city. Construction Station has built and permitted ADUs in Yucaipa for over fifteen years — we know which corrections the city flags before submitting.",
    whyBuild:
      "Yucaipa is one of the strongest ADU markets in the Inland Empire. Median single-family lot sizes here are larger than in Redlands or San Bernardino, giving most properties room for a 1,000 sq ft detached ADU without crowding the primary residence. The city's Pre-Reviewed ADU Program rewards homeowners who use vetted plan sets with materially faster plan check. Rental demand from Crafton Hills College students, Loma Linda Medical Center commuters, and retirees relocating to the foothills keeps long-term ADU rents strong year-round. Property values in Yucaipa appreciated steadily through the last decade, and an attached or detached ADU typically increases appraised value by $100,000–$200,000 depending on size and finish level — often exceeding the construction cost for owners who hold the property long-term.",
  },
  {
    slug: "redlands",
    name: "Redlands",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "800 sq ft (state minimum guaranteed; larger negotiable)",
    setbacks: STATE_SETBACKS,
    height:
      "16 ft detached; 25 ft permitted under 2025 ordinance if 10 ft side setback from adjacent single-family property",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Redlands Building & Safety Division",
    notes:
      "Redlands hired RRM Design Group to produce four pre-approved ADU plan sets — Craftsman, Ranch, Contemporary, and Mid-Century Modern — that homeowners can license at reduced cost and submit for expedited review. A 2025 ordinance update also allows 25 ft height with an expanded side setback, enabling two-story detached ADUs on qualifying lots.",
    intro:
      "Redlands is a historic citrus-era city with extraordinary architectural variety — turn-of-the-century Victorians, Craftsman bungalows, mid-century ranches, and contemporary infill all sit on the same blocks. That architectural diversity is exactly why the city invested in pre-approved ADU plan sets: a Craftsman ADU behind a 1910 home and a Mid-Century Modern ADU behind a 1962 ranch shouldn't look the same, and Redlands codifies that. The city's 2025 ordinance update allows 25 ft height with a 10 ft side setback, opening real two-story ADU potential on qualifying lots. Redlands also has one of the most active permitted-ADU pipelines in the Inland Empire. Construction Station has completed a Redlands garage conversion and currently has a Redlands Jr ADU / room-addition under construction — we know the local plan-check process intimately.",
    whyBuild:
      "Redlands has the strongest ADU economics in the eastern Inland Empire. Average detached single-family home values in Redlands consistently rank in the top quartile of San Bernardino County, which translates directly into ADU appraisal lift and rental income strength. The University of Redlands, Loma Linda Medical Center, Esri's headquarters, and a thriving downtown all generate steady tenant demand for one- and two-bedroom backyard rentals. The 2025 height ordinance change is a quiet game-changer — homeowners on standard 7,500 sq ft lots can now plausibly build a two-story 1,200 sq ft detached ADU that fits the neighborhood scale without crowding. Combined with the city's pre-approved Craftsman, Ranch, Contemporary, and Mid-Century Modern plan sets, Redlands offers the fastest permit path of any Inland Empire city with strong design controls.",
  },
  {
    slug: "loma-linda",
    name: "Loma Linda",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 25 ft attached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Loma Linda Community Development: (909) 799-2819",
    notes:
      "Loma Linda follows California state ADU baseline closely with limited additional local overlays — straightforward submittal process compared to neighboring cities.",
    intro:
      "Loma Linda is defined by Loma Linda University and the Loma Linda University Medical Center, one of the largest employers in San Bernardino County. The city sits on the southwest edge of the Inland Empire and has a uniquely dense, walkable feel for a Southern California suburb — many residents work, study, and worship within a one-mile radius. That's exactly the population that drives strong ADU demand: medical residents, visiting fellows, graduate students, and retired faculty looking for ground-floor in-law units. Loma Linda's ADU ordinance follows the California state baseline closely, which actually simplifies submittal — there are fewer local overlays to navigate than in Redlands or Murrieta. Lot sizes vary from compact 5,000 sq ft urban parcels to larger 10,000+ sq ft properties closer to the South Hills, with most lots able to accommodate a 600–1,200 sq ft detached or attached ADU.",
    whyBuild:
      "Loma Linda has one of the strongest medical-rental tenant pools in the entire Inland Empire. The Medical Center, Children's Hospital, School of Medicine, and Veterans Affairs Healthcare System all draw a continuous stream of residents, fellows, students, and traveling medical professionals who need furnished or unfurnished one-bedroom housing on long-term leases. ADU rents in Loma Linda for a 600–800 sq ft one-bedroom unit consistently track above comparable units in Redlands or San Bernardino. The city's compact footprint also means most ADUs are walkable to campus and the hospital, which commands a meaningful rent premium. For homeowners who already live in Loma Linda and own land outright, a detached ADU is one of the highest-yield real estate moves available in the region.",
  },
  {
    slug: "san-bernardino",
    name: "San Bernardino",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 18 ft permitted near transit corridors",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "San Bernardino Building & Safety: (909) 384-5057",
    notes:
      "San Bernardino is one of the most ADU-friendly cities in the region — low impact fees, expanded height allowances near transit, and an active push from the city to grow housing supply.",
    intro:
      "San Bernardino is the largest city in the Inland Empire by population and one of the most pro-ADU jurisdictions in California. The city has actively encouraged backyard housing as a tool to address regional housing supply, and that translates into low impact fees, generous height allowances near transit corridors, and a plan-check process that has shortened materially in recent years. San Bernardino's housing stock spans every era — from historic Westside bungalows to mid-century North End ranches to modern Verdemont infill — and most lot configurations can accommodate either a garage conversion, a detached ADU, or a JADU. The city's 18 ft height allowance near sbX transit corridors and the Metrolink station expands two-story ADU potential for homeowners along Mt. Vernon, E Street, and Highland Avenue. Construction Station has been pulling permits in San Bernardino for over fifteen years.",
    whyBuild:
      "San Bernardino offers the lowest barrier to entry for ADU construction in the eastern Inland Empire. Impact fees are among the lowest in the region, lot sizes on the Westside, North End, and Verdemont are larger than the regional median, and home values have appreciated substantially over the past five years — meaning ADU appraisal lift is real. The expanded 18 ft height allowance near transit corridors is meaningful for homeowners within a half-mile of the Metrolink station or sbX bus rapid transit, where a true two-story detached ADU becomes feasible on lots that would only support single-story elsewhere. Rental demand is steady from Cal State San Bernardino students, San Manuel Casino employees, county government workers, and Loma Linda commuters — and San Bernardino does not enforce additional short-term rental restrictions beyond the state's 30-day minimum.",
  },
  {
    slug: "highland",
    name: "Highland",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Highland Planning: (909) 864-6861",
    notes:
      "Parts of Highland fall within unincorporated San Bernardino County overlay zones — confirm whether your parcel is governed by Highland or San Bernardino County before submitting. We verify this during the free feasibility consultation.",
    intro:
      "Highland sits between San Bernardino and the foothills, with a mix of suburban tract neighborhoods, semi-rural acreage along Greenspot Road, and newer master-planned communities like East Highlands Ranch. The city follows California state ADU baseline closely, but the jurisdictional boundary with unincorporated San Bernardino County zigzags through the area — some Highland-addressed parcels are actually governed by county rules, which changes setback and lot-coverage details. That's the first thing we verify before drawing plans. Highland's larger lots, particularly in the older Base Line corridor and the Greenspot Road semi-rural zone, are ideal candidates for detached ADUs in the 1,000–1,200 sq ft range. Garage conversions are also common on the postwar tract neighborhoods south of Pacific Avenue. The city is generally pro-ADU and processes permits on the state-mandated 60-day timeline.",
    whyBuild:
      "Highland's combination of larger suburban lots, semi-rural acreage on the foothill side, and proximity to San Bernardino employment makes it an underrated ADU market. Homeowners along Greenspot Road and the older Base Line corridor frequently have lots in excess of 10,000 sq ft — large enough to build a full 1,200 sq ft detached ADU without crowding the primary residence or compromising the yard. East Highlands Ranch and the newer master-planned subdivisions have tighter HOA rules to navigate, but Construction Station has worked through Highland HOA architectural review committees before. Rental demand is steady from San Bernardino County government employees, Loma Linda Medical Center commuters, and Crafton Hills College students who prefer a quieter neighborhood than central San Bernardino.",
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    county: "Riverside County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 25 ft attached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Beaumont Building: (951) 769-8520",
    notes:
      "Beaumont follows the California state ADU baseline. The city is growing rapidly and ADU permit volume has increased sharply in the last three years.",
    intro:
      "Beaumont sits at the eastern edge of the San Gorgonio Pass, between the Inland Empire and the desert, and has been one of the fastest-growing cities in Riverside County for a decade running. Master-planned communities like Sundance, Tournament Hills, and Solera have driven population growth from 11,000 in 2000 to over 60,000 today, and the existing housing stock is overwhelmingly newer single-family homes on standard suburban lots. That's good news for ADU construction — newer homes mean newer electrical panels, newer plumbing stubs, and easier sewer tie-ins, all of which keep ADU construction costs down. Beaumont follows California state ADU baseline with minimal local overlays. The city has been processing ADU permits efficiently as backyard housing volume increases, and HOA-governed subdivisions are increasingly approving ADUs as state law preempts most blanket prohibitions.",
    whyBuild:
      "Beaumont's growth trajectory makes it one of the better long-term ADU bets in Riverside County. Population is projected to keep climbing as housing demand pushes outward from the urban Inland Empire, and the city sits in the path of every commuter heading between Palm Springs and Los Angeles. Long-term rental demand is strong from Cabazon, Banning, and Hemet workers who prefer Beaumont's newer housing stock. The 25 ft attached-ADU height allowance opens up second-story room-addition ADUs on existing two-story homes — an underused strategy that adds square footage without sacrificing yard space. Newer homes also mean fewer surprise repairs during construction, which keeps fixed-price contracts more accurate. We pull permits in Beaumont regularly and know the city's submittal preferences.",
  },
  {
    slug: "banning",
    name: "Banning",
    county: "Riverside County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Banning Community Development: (951) 922-3130",
    notes:
      "Banning follows the California state ADU baseline. The city is smaller than Beaumont with more variation in lot size, including some semi-rural and equestrian properties along the foothills.",
    intro:
      "Banning is the older twin to Beaumont, sitting just to the east at the gateway to the San Gorgonio Pass. The city has a more eclectic housing stock — postwar bungalows downtown, mid-century tracts along Ramsey Street, semi-rural properties and equestrian zones along the foothills, and newer subdivisions on the eastern edge. That variety means ADU strategy in Banning depends heavily on which neighborhood you're in. Downtown bungalows are strong candidates for JADUs and garage conversions; the larger foothill and equestrian lots can accommodate full 1,200 sq ft detached ADUs with room to spare; and the newer subdivisions are typical suburban ADU candidates. Banning follows California state ADU baseline with limited additional overlays, and the city's smaller volume means permit attention is often more personal than in larger jurisdictions.",
    whyBuild:
      "Banning offers some of the most affordable entry points for ADU construction in Riverside County. Land values and existing home prices are lower than in Beaumont or Calimesa, which means ADU appraisal lift as a percentage of property value is often higher. Larger lots in the foothill zones north of Ramsey Street give homeowners room for detached ADUs without compromising the yard, and some equestrian-zoned parcels can support both an ADU and continued horse-keeping. Long-term rental demand comes from Morongo Casino workers, Cabazon outlet employees, and commuters using I-10. Banning is also one of the few Inland Empire cities where lot size and zoning often align cleanly for a freestanding ADU on a generous lot — without HOA design committees adding months of additional review.",
  },
  {
    slug: "colton",
    name: "Colton",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Colton Building & Safety: (909) 370-5079",
    notes:
      "Colton follows the California state ADU baseline. Some older neighborhoods have undersized lots that limit detached ADU placement, in which case garage conversion or attached ADU often becomes the better strategy.",
    intro:
      "Colton sits at the geographic center of the Inland Empire, where I-10 and I-215 meet, and the city's housing stock reflects that long history — historic Agua Mansa-era cottages, mid-century postwar tracts, and newer infill all coexist within a few miles. Lot sizes vary widely, and some of the older neighborhoods south of Valley Boulevard have undersized parcels where a 1,200 sq ft detached ADU simply doesn't fit within setbacks. In those cases, garage conversion ADUs or attached room-addition ADUs are usually the better path, and the city is supportive of both. The larger lots in the Reche Canyon area and along the foothills can accommodate full detached ADUs with room to spare. Colton's central location makes it one of the more practical Inland Empire cities for commuter-tenant rental demand.",
    whyBuild:
      "Colton's central Inland Empire location is its biggest asset. The city sits within twenty minutes of San Bernardino, Riverside, Loma Linda, Redlands, and Rancho Cucamonga, which means an ADU here can be marketed to tenants working anywhere in the Inland Empire. Long-term rental demand is steady from Loma Linda Medical Center commuters, Stater Bros. distribution warehouse workers (the company is headquartered in San Bernardino but operates major facilities in Colton), and county government employees. Older neighborhoods often have larger garages — full two-car detached structures from the 1960s that are exceptional candidates for garage-conversion ADUs at 400–700 sq ft. Colton also tends to be quicker and less paperwork-heavy than San Bernardino on plan check, which shortens the construction timeline meaningfully for owner-occupants.",
  },
  {
    slug: "rialto",
    name: "Rialto",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Rialto Planning: (909) 820-2525",
    notes:
      "Rialto follows the California state ADU baseline. The city's larger industrial footprint means many residential neighborhoods sit adjacent to commercial zoning, which can affect setback details on corner lots — verify zoning before designing.",
    intro:
      "Rialto runs along the I-210 corridor between Fontana and San Bernardino, with a mix of established suburban neighborhoods south of Foothill Boulevard and a substantial industrial and logistics footprint along the I-10 and Cactus Avenue corridors. The residential housing stock is predominantly mid-century tract construction with newer infill in the northern foothill areas. Standard suburban lots in Rialto generally accommodate full 1,200 sq ft detached ADUs within state setbacks, and the city follows California state ADU baseline with minimal additional overlays. Rialto's growing logistics employment base, including Amazon and other major warehouse operators, has driven steady demand for affordable workforce housing — which translates directly into strong rental demand for ADUs in the 600–900 sq ft range. The city processes ADU permits within the state-mandated 60-day window.",
    whyBuild:
      "Rialto's logistics-driven economy gives it one of the steadier rental tenant bases in the western Inland Empire. Amazon, FedEx, UPS, and dozens of smaller distribution operators employ thousands of workers in the Rialto industrial corridor, and those workers consistently need affordable one- and two-bedroom rentals close to work. ADU rents track well against the local rental comp set, and tenant turnover for logistics workers tends to be longer than student or short-term professional tenants, which keeps vacancy low. Larger lots in the foothill neighborhoods north of Foothill Boulevard can accommodate full detached ADUs, while the older postwar tracts south of Baseline are strong garage-conversion candidates. Rialto's plan-check process is straightforward and follows state minimums, which keeps the design-to-permit timeline tight.",
  },
  {
    slug: "fontana",
    name: "Fontana",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 18 ft permitted near transit corridors",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Fontana Building: (909) 350-6718",
    notes:
      "ADUs are permitted in R-1, R-2, and R-3 zones. Fontana is one of the most ADU-friendly cities in the western Inland Empire, with low impact fees and parking waived in most cases.",
    intro:
      "Fontana is the largest city in the western Inland Empire and one of the most ADU-friendly jurisdictions in California. The city explicitly permits ADUs in R-1, R-2, and R-3 residential zones, parking requirements are waived in nearly all cases, and impact fees are among the lowest in the region. Fontana's housing stock is dominated by post-2000 master-planned subdivisions in north Fontana — large suburban lots, newer construction, and modern electrical and plumbing infrastructure that keeps ADU buildout costs predictable. South Fontana and the older central neighborhoods have a different character — smaller mid-century lots, more variation, and stronger candidates for garage-conversion and JADU strategies. The 18 ft height allowance near Metrolink and Sierra Avenue transit corridors expands two-story ADU possibilities meaningfully. Fontana processes ADU permits within the state-mandated 60-day window and has actively encouraged backyard housing development.",
    whyBuild:
      "Fontana combines the largest population in the western Inland Empire with some of the most ADU-friendly regulations in California — low fees, multiple permitted zones, and waived parking. The newer north Fontana subdivisions have the ideal mix of large lots, modern utility infrastructure, and standardized construction details that keep ADU pricing predictable. Long-term rental demand is exceptionally strong: Fontana is home to the Mission Boulevard and Slover Avenue logistics corridor, with thousands of warehouse and distribution jobs, and the city sits within commuting distance of jobs in Ontario, Rancho Cucamonga, and San Bernardino. The 18 ft transit-corridor height allowance is particularly valuable for homeowners near the Fontana Metrolink station, where a two-story detached ADU becomes feasible on a standard suburban lot. Construction Station pulls permits in Fontana regularly.",
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking:
      "1 space per ADU bedroom unless within 0.5 mile of Metrolink Cucamonga Station or the ADU is a garage conversion (parking waived in those cases)",
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Rancho Cucamonga Planning: (909) 477-2750",
    notes:
      "ADUs permitted in R-1, R-2, R-3, and HR zones. Maximum lot coverage is 45% including all structures (primary residence, ADU, garage, accessory buildings). Rancho Cucamonga enforces parking unless the property is within 0.5 mile of Metrolink Cucamonga Station or the ADU is a garage conversion.",
    intro:
      "Rancho Cucamonga sits at the foot of the San Gabriel Mountains and is one of the most affluent cities in the Inland Empire. The housing stock is overwhelmingly post-1980 construction — large master-planned subdivisions in Etiwanda, Alta Loma, and the Victoria Gardens corridor — with standard suburban lots in the 6,000–10,000 sq ft range and consistent architectural character within each subdivision. ADUs are permitted in R-1, R-2, R-3, and HR zones, and the city is generally pro-ADU within the framework of its parking rule (1 space per ADU bedroom unless within 0.5 mile of Metrolink Cucamonga Station or a garage conversion). The 45% lot coverage cap is the variable that catches some homeowners off guard — adding a 1,000 sq ft ADU on a lot that's already at 35% coverage means working through coverage math carefully. We do that math before drawing plans.",
    whyBuild:
      "Rancho Cucamonga has the highest median home values in the western Inland Empire, which makes ADU appraisal lift among the strongest in the region. The Metrolink Cucamonga Station parking waiver is a meaningful regulatory benefit — homeowners within a half-mile of the station avoid the per-bedroom parking requirement that applies elsewhere in the city, which unlocks ADU construction on lots where a parking pad simply doesn't fit. Etiwanda's larger 8,000–10,000 sq ft lots can comfortably accommodate a full 1,200 sq ft detached ADU within the 45% lot coverage cap. Long-term rental demand is exceptionally strong from Ontario International Airport employees, Victoria Gardens retail and restaurant workers, and Chaffey College students, and tenant quality tends to be among the strongest in the Inland Empire. Construction Station has worked through Rancho Cucamonga plan check multiple times.",
  },
  {
    slug: "ontario",
    name: "Ontario",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 18 ft permitted near transit corridors",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Ontario Planning: (909) 395-2036",
    notes:
      "Ontario follows the California state ADU baseline with expanded height allowance near transit. The Ontario International Airport flight paths affect some neighborhoods — noise insulation requirements may apply on parcels under the approach corridor.",
    intro:
      "Ontario is the economic heart of the western Inland Empire, home to Ontario International Airport, the Ontario Mills shopping complex, the Toyota Arena, and a substantial logistics and distribution footprint along the I-10 corridor. The city's residential character ranges from historic 1920s bungalows in old Ontario near Euclid Avenue to mid-century postwar tracts in the central neighborhoods to newer master-planned communities in south Ontario near the New Model Colony. ADUs are permitted citywide and the city has been actively pro-ADU as a housing-supply strategy. The 18 ft height allowance near Metrolink Ontario Center and major transit corridors expands two-story ADU possibilities. The main jurisdictional wrinkle is the airport — properties directly under approach corridors may need additional sound insulation for habitable space, which we coordinate with the structural and Title 24 engineers during design.",
    whyBuild:
      "Ontario's economic gravity is unmatched in the western Inland Empire. Ontario International Airport employs over 7,000 people directly, the surrounding logistics corridor employs tens of thousands more, and Ontario Mills, Toyota Arena, and the Convention Center generate continuous workforce demand. Long-term rental demand for ADUs in the 600–1,000 sq ft range is exceptionally strong, and the city's central location within the Inland Empire — equidistant from Riverside, San Bernardino, and Los Angeles County — keeps tenant pool diversity high. The 18 ft transit-corridor height allowance is particularly useful in the Ontario Center and Holt Boulevard neighborhoods. Older Ontario neighborhoods near Euclid Avenue have substantial detached garages from the 1920s and 1930s that make excellent garage-conversion candidates with character-driven finishes. Construction Station pulls Ontario permits regularly.",
  },
  {
    slug: "upland",
    name: "Upland",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Upland Planning: (909) 931-4130",
    notes:
      "Upland follows the California state ADU baseline. Older neighborhoods south of Foothill Boulevard have mature landscaping and tree-canopy considerations that can affect detached ADU placement.",
    intro:
      "Upland sits at the foot of the San Gabriel Mountains between Rancho Cucamonga and Claremont, and the city has one of the most beautiful established residential characters in the western Inland Empire. Tree-lined streets, historic Spanish Colonial and Craftsman homes south of Foothill Boulevard, mid-century ranches in the central neighborhoods, and newer custom homes in the foothill areas all coexist in a city with strong architectural identity. Lot sizes vary widely — older Upland near downtown can have 5,000–6,000 sq ft parcels, while the foothill north of Foothill Boulevard often runs 10,000+ sq ft. Upland follows California state ADU baseline closely, which keeps submittal straightforward. Mature trees and established landscaping are the main practical consideration on older properties — detached ADU siting often has to work around protected trees, which we coordinate during the feasibility walk.",
    whyBuild:
      "Upland's combination of historic character, mature neighborhoods, and proximity to Claremont Colleges and Ontario employment makes it one of the more desirable Inland Empire ADU markets. Long-term rental demand is steady from Claremont graduate students, Mt. San Antonio College faculty, and professionals commuting to Pomona, Ontario, and the L.A. County job centers via the 210 freeway. ADU rents in Upland for a well-finished 600–900 sq ft one-bedroom tend to be at or above the regional median. Larger foothill lots can accommodate full 1,200 sq ft detached ADUs with room to spare; older downtown bungalow lots are stronger candidates for JADUs and garage conversions. Property appreciation has been steady in Upland for over a decade, which compounds the ADU appraisal lift over time.",
  },
  {
    slug: "chino",
    name: "Chino",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Chino Planning: (909) 334-3325",
    notes:
      "Chino follows the California state ADU baseline. Some properties along the southern edge of the city are within the Chino Agricultural Preserve overlay — confirm zoning before designing.",
    intro:
      "Chino is a historically agricultural community at the southwest corner of the Inland Empire, with deep roots in dairy farming and a substantial agricultural preserve along its southern edge. The residential character is a mix of established postwar tracts near downtown, newer master-planned subdivisions north of Riverside Drive, and semi-rural acreage closer to the preserve. ADUs are permitted citywide and Chino follows California state ADU baseline with minimal overlay requirements — which makes it one of the more straightforward Inland Empire cities for ADU permitting. The main jurisdictional check is confirming whether a parcel falls within the Chino Agricultural Preserve overlay, which can affect setbacks and lot coverage on rural-zoned parcels. Standard suburban lots in central and north Chino accommodate full 1,200 sq ft detached ADUs comfortably within state setbacks.",
    whyBuild:
      "Chino's combination of newer housing stock, larger suburban lots, and a stable employment base — California Institution for Men and Chino Hills State Park area — makes it a reliable long-term ADU market. The newer master-planned subdivisions in north Chino have ideal lot sizes and modern utility infrastructure, which keeps ADU construction costs predictable. Long-term rental demand is steady from Chino Valley Unified School District employees, dairy and agricultural workers, and commuters using the 60 and 71 freeways to reach Ontario, Pomona, and Diamond Bar. Semi-rural acreage at the southern edge of the city can accommodate larger detached structures with horse-keeping and other rural uses preserved. The straightforward plan-check process keeps the design-to-permit timeline tight compared to neighbors with more complex local overlays.",
  },
  {
    slug: "chino-hills",
    name: "Chino Hills",
    county: "San Bernardino County",
    region: "Inland Empire Core",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Chino Hills Planning: (909) 364-2822",
    notes:
      "Hillside lots — common throughout Chino Hills — may have additional grading, retaining wall, and slope-stability engineering requirements that affect detached ADU placement and cost.",
    intro:
      "Chino Hills is the affluent, hillside-driven counterpart to Chino, with one of the highest median home values in San Bernardino County. The city is built around the rolling hills along the Riverside County border, and the majority of residential parcels involve some degree of slope, terracing, or hillside grading. That topography is what makes Chino Hills beautiful, but it's also what makes ADU siting more complex than in flat suburban cities. Setbacks are state baseline at 4 ft side and rear, but lot coverage on hillside parcels has to account for usable buildable area rather than gross parcel size. We do hillside-specific feasibility analysis before drawing plans. The city follows California state ADU baseline with no additional ordinance restrictions, and the housing stock is overwhelmingly newer construction with modern utility infrastructure.",
    whyBuild:
      "Chino Hills has the highest median home values of any city profiled in our service area, and ADU appraisal lift here tracks accordingly. Long-term rental demand is among the strongest in the western Inland Empire — proximity to Diamond Bar, Brea, Fullerton, and the broader Orange County job market means tenant pool quality and rent levels are exceptional. The newer master-planned subdivisions have modern electrical service, modern sewer connections, and standardized architectural character that keeps ADU construction predictable. The main strategic consideration is hillside grading and retaining wall engineering — many parcels require additional structural work compared to flat-site ADU construction, which we account for in the fixed-price contract. Chino Hills State Park views and the overall semi-rural feel of much of the city also support strong rents for well-finished ADUs.",
  },
  {
    slug: "victorville",
    name: "Victorville",
    county: "San Bernardino County",
    region: "High Desert",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 18 ft permitted near transit corridors",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Victorville Planning: (760) 955-5135",
    notes:
      "Victorville is one of the most ADU-friendly jurisdictions in the High Desert, with low impact fees and an expanded 18 ft height allowance near transit. Large lot sizes are common.",
    intro:
      "Victorville is the largest city in the High Desert and one of the most ADU-friendly jurisdictions north of the Cajon Pass. Lot sizes are substantially larger than in the urban Inland Empire — many residential parcels run 7,500 to 15,000+ sq ft — which gives most homeowners room for a full 1,200 sq ft detached ADU without compromising the yard. The housing stock spans older Old Town homes near D Street to mid-century tracts in the central neighborhoods to large master-planned subdivisions in the Spring Valley Lake and Hesperia-border areas. Victorville follows California state ADU baseline closely, impact fees are among the lowest in the region, and the city has actively encouraged ADU construction as a tool to grow its housing supply. The 18 ft height allowance near Metrolink Victorville Station and Bear Valley Road expands two-story possibilities.",
    whyBuild:
      "Victorville offers some of the most favorable ADU economics in Southern California. Lot sizes are large, land costs are low compared to the urban Inland Empire, and the city's regulatory environment is among the most permissive in the region — low impact fees, expanded transit-corridor height, and a streamlined plan-check process. Long-term rental demand is strong from Southern California Logistics Airport (formerly George AFB) employees, the substantial federal and county government workforce, and commuters using Metrolink to reach jobs in San Bernardino, Riverside, and L.A. County. The High Desert tenant pool is also more stable than the urban Inland Empire — turnover tends to be lower and lease terms longer. Property values have appreciated substantially over the past five years, which has compounded ADU appraisal lift meaningfully for early adopters.",
  },
  {
    slug: "hesperia",
    name: "Hesperia",
    county: "San Bernardino County",
    region: "High Desert",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Hesperia Planning: (760) 947-1913",
    notes:
      "Hesperia has some of the largest residential lots in the High Desert — half-acre and full-acre parcels are common, particularly outside the central core. This makes detached ADUs straightforward but may require longer utility runs.",
    intro:
      "Hesperia sits between Victorville and Apple Valley on the southern edge of the High Desert, just north of the Cajon Pass. The city's defining feature for ADU construction is lot size — many residential parcels run a half-acre or larger, particularly in the foothill areas south of Main Street and the eastern neighborhoods near Apple Valley. Those large lots make detached ADU placement extraordinarily flexible — there's room to site an ADU well away from the primary residence, preserve the existing yard, and still meet setbacks with plenty of margin. The trade-off on larger lots is utility runs: water, sewer, and electrical service may need to be extended further than on standard suburban lots, which we account for in feasibility and fixed-price contracts. Hesperia follows California state ADU baseline with minimal additional overlays and processes permits within the state timeline.",
    whyBuild:
      "Hesperia's large lot sizes make it one of the best detached-ADU markets in the High Desert. Homeowners with half-acre or larger parcels can build a true freestanding 1,200 sq ft ADU that functions as a fully independent home — separate driveway, separate yard, full privacy — which commands premium rents and supports family multi-generational use. Land costs are low, ADU appraisal lift is strong as a percentage of property value, and the city's regulatory environment is permissive. Long-term rental demand is steady from Victorville workers, federal and county government employees, and Inland Empire commuters who prefer the High Desert's quieter pace and lower cost of living. The longer utility runs typical on larger lots are a manageable construction cost, not a roadblock, and Construction Station has built ADUs on Hesperia acreage before.",
  },
  {
    slug: "apple-valley",
    name: "Apple Valley",
    county: "San Bernardino County",
    region: "High Desert",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Apple Valley Planning: (760) 240-7000",
    notes:
      "Apple Valley is a town, not a city, and parts of the jurisdiction overlap with unincorporated San Bernardino County rules. Equestrian and large-lot zoning is common, particularly outside the central core.",
    intro:
      "Apple Valley is technically a town rather than a city, and the jurisdiction has a distinctive rural-suburban character — equestrian zoning is common, lot sizes are large, and the housing stock is more architecturally varied than the surrounding High Desert tract construction. Some parcels in Apple Valley fall under unincorporated San Bernardino County overlay rules, which is the first thing to verify before designing an ADU — the county rules differ in some details from the town's own ordinance. The town follows California state ADU baseline with the addition that equestrian-zoned parcels can typically continue horse-keeping alongside an ADU, which is a significant benefit for owners who use their property both residentially and recreationally. Standard residential lots accommodate full 1,200 sq ft detached ADUs comfortably, and the equestrian and acreage parcels have nearly unlimited siting flexibility.",
    whyBuild:
      "Apple Valley's combination of large lots, equestrian zoning, and rural-suburban character makes it uniquely suited to lifestyle-driven ADU construction — guest houses for visiting family, in-law suites for aging parents, on-site rentals that don't compromise horse-keeping operations, and multi-generational housing on family acreage. The town's regulatory environment is permissive and follows state minimums, lot sizes give nearly unlimited siting flexibility, and tenant pool quality is high — many Apple Valley rentals are leased to retirees, telecommuters, and professionals working in Victorville. Property values have appreciated steadily, and the town's reputation as a desirable High Desert community has only strengthened in the last five years. The main strategic consideration is verifying whether a specific parcel falls under town or county overlay rules, which we confirm during feasibility.",
  },
  {
    slug: "murrieta",
    name: "Murrieta",
    county: "Riverside County",
    region: "Southwest IE / Temecula Valley",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 25 ft attached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Murrieta Planning: (951) 461-6063",
    notes:
      "ADU exterior must match the primary residence — roofing, trim, walls, windows, and color palette all subject to design review. Short-term rentals under 30 days are prohibited, and a recorded covenant prohibiting STR is required before the certificate of occupancy is issued.",
    intro:
      "Murrieta is the northern half of the Temecula Valley and one of the fastest-growing cities in Riverside County. The housing stock is overwhelmingly post-1990 master-planned construction — large suburban lots, modern utility infrastructure, and consistent architectural character within subdivisions. The defining local ADU requirements in Murrieta are design matching and the short-term rental ban. ADU exteriors must match the primary residence — same roofing material and pitch, same trim profile, same window style, same paint palette — which is enforced through design review. The city also prohibits short-term rentals under 30 days and requires a recorded covenant to that effect before issuing the certificate of occupancy. Construction Station handles both the design-matching coordination with the architect and the STR covenant recording as part of the standard ADU process.",
    whyBuild:
      "Murrieta has one of the strongest long-term ADU rental markets in Riverside County. The city's population has grown rapidly and the broader Temecula Valley economy — wineries, medical facilities at Loma Linda University Medical Center–Murrieta, the Promenade Mall corridor, and steady commuter demand toward San Diego County via the 15 — all support consistent ADU tenant demand. The 25 ft attached-ADU height allowance is particularly useful for room-addition ADUs on existing two-story master-planned homes. The design-matching requirement is a meaningful constraint but it also protects the appraised value of the ADU as it integrates into the neighborhood character — done right, a Murrieta ADU looks like an original element of the home rather than a backyard add-on. Construction Station has navigated Murrieta design review before.",
  },
  {
    slug: "lake-elsinore",
    name: "Lake Elsinore",
    county: "Riverside County",
    region: "Southwest IE / Temecula Valley",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Lake Elsinore Planning: (951) 674-3124",
    notes:
      "Lake Elsinore follows California state ADU baseline. The city has been actively processing ADU permits as housing demand grows along the 15 corridor. Construction Station has an active permitted ADU project here.",
    intro:
      "Lake Elsinore sits along the 15 freeway between Corona and Temecula, built around the largest natural freshwater lake in Southern California. The city has grown steadily over the past two decades, driven by master-planned communities in Canyon Lake, Tuscany Hills, Rosetta Canyon, and the broader Wildomar-Murrieta corridor. The housing stock is overwhelmingly post-1990 construction with newer, ADU-friendly utility infrastructure. Lake Elsinore follows California state ADU baseline with minimal additional overlays, and the city has been actively processing ADU permits as backyard housing demand has grown along the 15 corridor. Standard suburban lots in the master-planned subdivisions accommodate full 1,200 sq ft detached ADUs comfortably. Construction Station has an active permitted ADU project in Lake Elsinore — a dual garage-conversion ADU configuration — which means we know the current Lake Elsinore plan-check process firsthand.",
    whyBuild:
      "Lake Elsinore is one of the underrated ADU markets in the southwest Inland Empire. The combination of newer housing stock, master-planned suburban lot sizes, and a regulatory environment that follows state minimums keeps both construction costs and permit timelines predictable. Long-term rental demand is strong from Lake Elsinore Storm baseball employees, the Lake Elsinore Outlets workforce, and the broader Temecula Valley commuter pool — Lake Elsinore rents tend to be slightly below Murrieta and Temecula, which keeps tenant turnover low and lease durations longer. Property values have appreciated meaningfully as the 15 corridor has matured, and ADU appraisal lift compounds with overall property appreciation. Construction Station's existing Lake Elsinore project means we have current, first-hand knowledge of the city's submittal and inspection cadence.",
  },
  {
    slug: "menifee",
    name: "Menifee",
    county: "Riverside County",
    region: "Southwest IE / Temecula Valley",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Menifee Planning: (951) 672-6777",
    notes:
      "Menifee is one of the fastest-growing cities in California and follows the California state ADU baseline. New construction subdivisions dominate, which keeps ADU buildout straightforward.",
    intro:
      "Menifee was incorporated in 2008 and has been one of the fastest-growing cities in California ever since. The housing stock is overwhelmingly post-2000 master-planned construction, with large subdivisions like Audie Murphy Ranch, McCall Mesa, Lakeland Village, and the broader Sun City corridor (which is the historic 55+ community that anchored the original Menifee development). That newness is the city's biggest ADU advantage — modern electrical panels, modern sewer connections, and standardized lot layouts make ADU buildout predictable. Menifee follows California state ADU baseline with minimal additional overlays. Standard suburban lots in the master-planned subdivisions comfortably accommodate full 1,200 sq ft detached ADUs within state setbacks. The Sun City 55+ neighborhoods are a particularly strong market for in-law suite and caregiver-housing JADUs, which we've designed before.",
    whyBuild:
      "Menifee's population growth is the foundation of its long-term ADU value. The city has added tens of thousands of residents since incorporation, and demographic projections show continued strong growth through the next decade. Long-term rental demand is supported by Inland Valley Medical Center, the Menifee Valley Medical Center, Mt. San Jacinto College, and a substantial commuter population working in Temecula, Lake Elsinore, and Murrieta. The Sun City 55+ corridor is a unique ADU opportunity — multi-generational caregiver-housing JADUs allow adult children or hired caregivers to live on-site without compromising the age-restricted community's primary residence rules. New construction housing stock means ADU permitting is straightforward and construction costs are predictable. Property values have appreciated steadily, and ADU appraisal lift tracks well in the Menifee market.",
  },
  {
    slug: "temecula",
    name: "Temecula",
    county: "Riverside County",
    region: "Southwest IE / Temecula Valley",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 25 ft attached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Temecula Planning: (951) 694-6400",
    notes:
      "Temecula has several local overlays: the ADU must bear the same street address as the primary residence with a 'Unit 2' identifier, water and sewer letters of service availability are required before the building permit is issued, short-term rentals under 30 days are prohibited, and exterior design must match the primary residence.",
    intro:
      "Temecula sits at the southern end of the Temecula Valley and is the cultural and economic anchor of the southwest Inland Empire — wine country, Old Town, Pechanga Resort, the Promenade, and a substantial professional commuter base working in San Diego County via the 15. The city has the most detailed local ADU ordinance in our service area: ADUs must bear the same street address as the primary residence with a 'Unit 2' identifier, water and sewer letters of service availability are required before the building permit is issued, short-term rentals under 30 days are prohibited (and enforced), and ADU exterior design must match the primary residence. Construction Station handles the address coordination with the city, requests the water and sewer letters from EMWD and RCWD, and coordinates the design-matching requirements with the architect as part of the standard ADU package.",
    whyBuild:
      "Temecula has the strongest ADU rental economics of any city in the southwest Inland Empire. The professional commuter base working in San Diego County, the substantial Pechanga Resort and Temecula Valley Wine Country workforce, and the broader tourism economy all support premium long-term ADU rents. Temecula property values consistently rank among the highest in Riverside County, which means ADU appraisal lift in absolute dollar terms is among the best in our service area. The 25 ft attached-ADU height allowance enables real two-story room-addition ADUs on existing two-story homes — a particularly useful option in the Vintage Hills, Redhawk, and Crowne Hill neighborhoods. The water and sewer letter requirement is a process step rather than a roadblock, and Construction Station handles those requests as standard procedure on every Temecula project.",
  },
  {
    slug: "palm-springs",
    name: "Palm Springs",
    county: "Riverside County",
    region: "Desert Cities",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Palm Springs Planning: (760) 323-8245",
    notes:
      "ADUs are permitted in residential zones (R-1-A, R-1-B, R-1-C, etc.) and in Planned Development Districts (PDD) that allow ADUs. Historic district overlays apply citywide — additional design review is required for properties in the Tennis Club, Movie Colony, Old Las Palmas, and other historic preservation zones.",
    intro:
      "Palm Springs is the most architecturally distinctive city in our service area and one of the most carefully regulated. The city's mid-century modern, Spanish Colonial Revival, and contemporary desert-modern architectural identity is actively preserved through design review, and historic district overlays apply to a substantial share of the residential housing stock. ADUs are permitted in residential zones — R-1-A, R-1-B, R-1-C, and others — and in Planned Development Districts (PDDs) that explicitly allow ADUs. The first feasibility step in Palm Springs is verifying which zone and overlay apply to a specific parcel, because design review requirements in the Tennis Club, Movie Colony, Old Las Palmas, and other historic districts differ materially from standard residential zones. Construction Station has worked through Palm Springs design review and we know the city's preferences for ADU rooflines and finish details.",
    whyBuild:
      "Palm Springs has the strongest tourism-driven and second-home rental market in our service area — but state law requires a 30-day minimum rental, so the ADU economic case here is built on premium long-term rentals to seasonal residents, retirees, and Coachella Valley workers rather than short-term vacation rentals. Long-term rents for well-designed ADUs in Palm Springs are among the highest in the Inland Empire and Coachella Valley combined. The mid-century modern, Spanish Colonial Revival, and desert-modern architectural traditions also mean that a well-designed ADU adds disproportionate appraised value compared to a generic suburban ADU — design quality directly drives both rents and resale. Property values in Palm Springs have appreciated substantially over the past decade and continue to rank among the strongest in the Coachella Valley.",
  },
  {
    slug: "palm-desert",
    name: "Palm Desert",
    county: "Riverside County",
    region: "Desert Cities",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached, 25 ft attached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Palm Desert Planning: (760) 346-0611",
    notes:
      "Palm Desert follows the California state ADU baseline. Desert climate drives meaningful design decisions — solar orientation, roof reflectivity, insulation specification, and HVAC capacity all matter more here than in coastal climates.",
    intro:
      "Palm Desert sits in the heart of the Coachella Valley and is the retail and cultural center of the desert cities — El Paseo, the McCallum Theatre, the College of the Desert, and the broader resort economy all converge here. The residential character is dominated by gated golf-course communities (Indian Wells country club spillover, Bighorn, Ironwood, Sun City Palm Desert, and many more), country club condos, and standard suburban single-family neighborhoods in the central and north parts of the city. Palm Desert follows California state ADU baseline with no major local ordinance restrictions. The 25 ft attached-ADU height allowance is particularly useful for room-addition ADUs on existing two-story homes. The defining design consideration in Palm Desert isn't regulatory — it's the desert climate, which drives insulation specification, roof reflectivity, solar orientation, and HVAC sizing decisions that matter more here than in coastal cities.",
    whyBuild:
      "Palm Desert offers strong ADU economics built on the Coachella Valley's seasonal-resident and retirement-driven rental market. Long-term ADU rentals to seasonal residents, working professionals at the medical and resort employers, and family members of golf-community homeowners support steady demand at premium rents. Property values in Palm Desert have appreciated steadily and ADU appraisal lift is meaningful. The 25 ft attached-ADU height allowance opens up room-addition ADU strategies on existing two-story homes. Construction Station builds to desert-climate-appropriate specifications by default — cool roofs, high-performance insulation, properly sized HVAC, and Title 24 compliance tuned to Coachella Valley climate zones — which directly affects both energy bills and long-term tenant satisfaction. We handle the desert-specific design coordination as part of the standard ADU package.",
  },
  {
    slug: "cathedral-city",
    name: "Cathedral City",
    county: "Riverside County",
    region: "Desert Cities",
    maxSize: "1,200 sq ft",
    setbacks:
      "4 ft side and rear; detached ADU must be 5 ft from main residence and 5 ft from other structures",
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Cathedral City Building: (760) 770-0342",
    notes:
      "Cathedral City is the most ADU-streamlined city in the desert — three pre-approved detached ADU plans (Desert Modern and Mediterranean styles) plus a garage-to-JADU conversion plan are available. Southern California Edison review is required for all ADUs; email PalmSpringsPlanning@sce.com before submitting your building permit.",
    intro:
      "Cathedral City is the most ADU-streamlined city in the Coachella Valley and one of the most streamlined in our entire service area. The city offers three pre-approved detached ADU floor plans in Desert Modern and Mediterranean styles, plus a separate garage-to-JADU conversion plan, which homeowners can license at reduced cost and submit for expedited plan check. The pre-approved plans dramatically shorten the design timeline and reduce architectural fees. Cathedral City also requires Southern California Edison review for all ADUs — homeowners or contractors email PalmSpringsPlanning@sce.com before submitting the building permit so SCE can confirm service capacity. Construction Station coordinates the SCE review request as part of the standard ADU package. Setbacks are state baseline at 4 ft side and rear, with an additional 5 ft separation required between the detached ADU and the main residence or other structures.",
    whyBuild:
      "Cathedral City offers the fastest design-to-permit path of any city in our service area. The combination of pre-approved Desert Modern and Mediterranean ADU plans, plus the pre-approved garage-to-JADU conversion plan, can shave months off the typical ADU timeline. Long-term ADU rental demand in Cathedral City is supported by the broader Coachella Valley workforce — resort employees, College of the Desert students, retirees, and seasonal residents. Property values have appreciated steadily and ADU appraisal lift compounds with that appreciation. The required SCE review is a 1–2 week administrative step rather than a roadblock, and the 5 ft separation requirement between the detached ADU and main residence is a straightforward design constraint rather than a major siting limitation. We coordinate the entire process — pre-approved plan licensing, SCE review, plan check, construction, and final inspection.",
  },
  {
    slug: "indio",
    name: "Indio",
    county: "Riverside County",
    region: "Desert Cities",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Indio Planning: (760) 391-4111",
    notes:
      "Indio follows California state ADU baseline. The city's economy is anchored by the Coachella and Stagecoach music festivals, which generate substantial seasonal rental demand within the state's 30-day minimum framework.",
    intro:
      "Indio is the largest city in the Coachella Valley by population and is best known nationally for hosting the Coachella Valley Music and Arts Festival and Stagecoach Festival each spring. Beyond the festivals, Indio is the agricultural and date-farming heart of the valley, with a substantial workforce population and a housing stock that ranges from older central-city neighborhoods to newer master-planned subdivisions north of the I-10. Lot sizes are generally generous compared to the Inland Empire core, and detached ADUs in the 800–1,200 sq ft range fit comfortably on most parcels. Indio follows California state ADU baseline with minimal local overlays. The city's permit process is straightforward and handled within the state-mandated 60-day window. Desert-climate design considerations apply here as they do across the Coachella Valley, and Construction Station builds to those specifications by default.",
    whyBuild:
      "Indio has one of the more interesting long-term ADU markets in our service area. The city's workforce — agricultural, hospitality, healthcare at JFK Memorial Hospital, and the broader Coachella Valley service economy — supports steady demand for affordable one- and two-bedroom rentals. Property values are lower than in Palm Desert or Rancho Mirage, which means ADU construction cost as a percentage of property value is more favorable here than in higher-priced desert cities. Long-term rentals also benefit from the broader seasonal economic activity around the festivals — though state law's 30-day minimum keeps the ADU economic case focused on workforce and seasonal-resident long-term rentals rather than short-term vacation tenants. Lot sizes are generous, the regulatory environment follows state minimums, and the permit process is straightforward.",
  },
  {
    slug: "la-quinta",
    name: "La Quinta",
    county: "Riverside County",
    region: "Desert Cities",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "La Quinta Planning: (760) 777-7000",
    notes:
      "La Quinta is a resort and golf community with extensive gated, HOA-governed subdivisions. ADU permitting follows California state ADU baseline, but HOA architectural review is the practical gating step for many properties.",
    intro:
      "La Quinta is a resort city anchored by world-class golf — PGA West, La Quinta Resort & Club, The Hideaway, The Quarry, Andalusia, and many more golf-course communities define the residential character. The housing stock is overwhelmingly post-1990 master-planned construction with substantial gated, HOA-governed subdivisions. ADU permitting follows California state ADU baseline, but for the substantial share of La Quinta properties inside HOAs, the practical gating step is HOA architectural review rather than the city plan-check process itself. California state ADU law preempts blanket HOA prohibitions, but HOAs retain meaningful authority over design, materials, and color palette — and La Quinta HOAs tend to enforce that authority actively. Construction Station has navigated La Quinta HOA architectural review before and we coordinate the HOA approval process in parallel with city plan check to keep the overall timeline tight.",
    whyBuild:
      "La Quinta has the strongest long-term rental economics for high-end ADUs in the Coachella Valley. The seasonal-resident and second-home owner population supports premium long-term rentals (state law's 30-day minimum applies) at rates that meaningfully exceed standard suburban ADU rents. Property values in La Quinta consistently rank among the highest in the Coachella Valley, and ADU appraisal lift in absolute dollar terms is among the strongest in our service area. The HOA review process is a real timeline factor but it's manageable with proper sequencing — we typically begin HOA architectural review at the same time we begin city plan check, which keeps the two tracks moving in parallel. Design quality matters more in La Quinta than in any city outside Palm Springs, and Construction Station's design coordination is built around that reality.",
  },
  {
    slug: "anaheim-hills",
    name: "Anaheim Hills",
    county: "Orange County",
    region: "Orange County Adjacent",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Anaheim Planning: (714) 765-5139",
    notes:
      "Anaheim Hills is part of the City of Anaheim. Hillside areas may have additional grading, slope-stability, retaining wall, and fire safety overlay requirements that affect ADU placement, structural design, and exterior materials.",
    intro:
      "Anaheim Hills is the affluent, hillside-driven eastern portion of the City of Anaheim, with a residential character defined by curving streets, hillside lots, and panoramic views toward Orange County and the Santa Ana Mountains. The housing stock is primarily post-1970 custom and semi-custom construction on parcels that involve some degree of slope. ADU permitting goes through the City of Anaheim, which follows California state ADU baseline at the regulatory level — but hillside considerations drive significant practical decisions in design and construction. Slope-stability engineering, retaining walls, fire safety overlay materials (in higher-fire-risk areas), and grading permits often add cost and timeline compared to flat-site ADU construction. Construction Station handles the hillside structural coordination during design and accounts for it in the fixed-price contract — there are no surprise upcharges on a properly-feasibility-checked Anaheim Hills ADU project.",
    whyBuild:
      "Anaheim Hills offers some of the strongest ADU economics in our broader service area. Median home values in Anaheim Hills are substantially higher than in the Inland Empire core, which translates into strong ADU appraisal lift. The Orange County employment base — Disney, Anaheim convention industry, the broader OC professional and healthcare economy — supports premium long-term rental demand. Hillside lots are larger than typical Orange County suburban parcels, which provides siting flexibility despite the slope considerations. The hillside design and structural cost premium is a real factor in the budget, but it's a known and quantifiable factor rather than a surprise — and the appraisal lift on a well-designed Anaheim Hills ADU typically more than offsets the additional structural cost. Construction Station handles the hillside coordination as part of the standard design process.",
  },
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    county: "Orange County",
    region: "Orange County Adjacent",
    maxSize: "1,200 sq ft",
    setbacks: STATE_SETBACKS,
    height: "16 ft detached",
    parking: STATE_PARKING,
    jaduAllowed: STATE_JADU,
    impactFees: STATE_IMPACT_FEES,
    permitTimeline: STATE_PERMIT_TIMELINE,
    contact: "Yorba Linda Planning: (714) 961-7100",
    notes:
      "Yorba Linda's hillside areas may fall within fire safety overlay zones that affect exterior materials, defensible-space landscape requirements, and ignition-resistant construction details. Larger lot sizes are common throughout the city.",
    intro:
      "Yorba Linda is one of the most affluent cities in north Orange County and has earned a longstanding reputation as 'The Land of Gracious Living.' Lot sizes here are larger than typical Orange County suburban parcels — many residential properties run 8,000 to 15,000+ sq ft, with some equestrian-zoned acreage in the eastern hillside neighborhoods. That lot generosity is the foundation of Yorba Linda's ADU appeal. ADU permitting follows California state ADU baseline at the regulatory level. The main practical considerations are the hillside fire safety overlay zones that apply to portions of the city, which drive exterior material decisions (ignition-resistant roofing and siding), defensible-space landscape requirements, and additional plan-check review. Construction Station handles fire-overlay coordination during design — we specify ignition-resistant assemblies by default in any overlay zone, which keeps both insurance and plan check straightforward.",
    whyBuild:
      "Yorba Linda combines large lots, high property values, and proximity to north Orange County job centers — Brea, Fullerton, Anaheim Hills, and the broader OC employment base — into one of the strongest ADU markets in our service area. Median home values rank among the highest in Orange County, and ADU appraisal lift in absolute dollar terms is exceptional. Large lots provide unmatched siting flexibility for detached ADUs, in-law suites, guest houses, and multi-generational housing strategies. The fire safety overlay considerations are a known design factor rather than an unpredictable cost — Construction Station accounts for ignition-resistant assemblies and defensible-space requirements in the fixed-price contract from the start. Equestrian-zoned parcels in the eastern hillside neighborhoods can accommodate detached ADUs alongside continued horse-keeping, which is a uniquely valuable use case for the right property.",
  },
];

export const getCityBySlug = (slug: string): ADUCity | undefined =>
  ADU_CITIES.find((city) => city.slug === slug);

export const ADU_CITY_SLUGS = ADU_CITIES.map((c) => c.slug);
