import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCityPage, {
  serviceCityMetadata,
} from "@/components/ServiceCityPage";
import {
  SERVICE_CITY_SLUGS,
  getServiceCityProfile,
} from "@/lib/service-city-pages";

const SERVICE_KEY = "kitchen-remodeling" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CITY_SLUGS.map((city) => ({ city }));
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
  const city = getServiceCityProfile(slug);
  if (!city) notFound();
  return <ServiceCityPage serviceKey={SERVICE_KEY} city={city} />;
}
