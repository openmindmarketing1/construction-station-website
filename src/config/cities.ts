export type City = {
  name: string;
  state: string;
  slug: string;
  county: string;
  description: string;
  population?: string;
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
  { name: "Apple Valley", state: "CA", slug: "apple-valley", county: "San Bernardino", description: "Home remodeling specialists in Apple Valley", population: "73,000" },
  { name: "Highland", state: "CA", slug: "highland", county: "San Bernardino", description: "Premium kitchen and bath in Highland, CA", population: "55,000" },
  { name: "Colton", state: "CA", slug: "colton", county: "San Bernardino", description: "Reliable remodeling contractor in Colton", population: "54,000" },
  { name: "Moreno Valley", state: "CA", slug: "moreno-valley", county: "Riverside", description: "Affordable quality remodeling in Moreno Valley", population: "210,000" },
  { name: "Corona", state: "CA", slug: "corona", county: "Riverside", description: "Award-winning kitchen remodels in Corona, CA", population: "168,000" },
  { name: "Beaumont", state: "CA", slug: "beaumont", county: "Riverside", description: "Home remodeling and construction in Beaumont", population: "55,000" },
  { name: "Calimesa", state: "CA", slug: "calimesa", county: "Riverside", description: "Kitchen, bath, and home renovation in Calimesa", population: "13,000" },
  { name: "Banning", state: "CA", slug: "banning", county: "Riverside", description: "Trusted remodeling contractor in Banning, CA", population: "32,000" },
];
