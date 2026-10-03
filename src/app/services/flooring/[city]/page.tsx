import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCityPage, {
  serviceCityMetadata,
} from "@/components/ServiceCityPage";
import {
  SERVICE_CITY_SLUGS,
  getServiceCityProfile,
  isExcludedServiceCity,
} from "@/lib/service-city-pages";

const SERVICE_KEY = "flooring" as const;

export const dynamicParams = false;

// Palm Desert came back a soft 404 — 301'd instead (service-city-pages.ts).
export function generateStaticParams() {
  return SERVICE_CITY_SLUGS.filter((city) => !isExcludedServiceCity(SERVICE_KEY, city)).map(
    (city) => ({ city })
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  return serviceCityMetadata(SERVICE_KEY, city);
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  if (isExcludedServiceCity(SERVICE_KEY, slug)) notFound();
  const city = getServiceCityProfile(slug);
  if (!city) notFound();
  return <ServiceCityPage serviceKey={SERVICE_KEY} city={city} />;
}
