import { notFound } from "next/navigation";
import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { getTripPage } from "@/lib/site-content";

export default async function TripPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = await getTripPage(slug, "en");

  if (!trip) {
    notFound();
  }

  return <DestinationPageTemplate page={trip} locale="en" />;
}
