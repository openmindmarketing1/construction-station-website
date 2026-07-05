import Link from "next/link";
import {
  SERVICE_CITY_PROFILES,
  getServiceCityService,
  type ServiceKey,
} from "@/lib/service-city-pages";

// Links a main service page to its per-city landing pages.
export default function ServiceCityLinksStrip({
  serviceKey,
}: {
  serviceKey: ServiceKey;
}) {
  const service = getServiceCityService(serviceKey);
  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-8">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            By City
          </div>
          <h2 className="font-display text-navy text-3xl md:text-4xl leading-[1.05]">
            {service.name} <span className="italic text-gold">near you</span>.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {SERVICE_CITY_PROFILES.map((city) => (
            <Link
              key={city.slug}
              href={`/services/${service.routeSegment}/${city.slug}`}
              className="inline-block border border-navy/15 bg-white text-navy px-5 py-2.5 text-sm hover:bg-navy hover:text-gold hover:border-navy transition-all"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
