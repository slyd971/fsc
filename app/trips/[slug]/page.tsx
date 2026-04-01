import { notFound } from "next/navigation";
import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { getTripPage } from "@/lib/site-content";
import { defaultLocale } from "@/lib/i18n";

export default async function TripPage({
  params,
}: {
  params: { slug: string };
}) {
  const trip = await getTripPage(params.slug, defaultLocale);

  if (!trip) {
    notFound();
  }

  // 🔥 protection anti crash
  const safeTrip = {
    ...trip,
    experiences: trip.experiences ?? [],
    packs: trip.packs ?? [],
  };

  return <DestinationPageTemplate page={safeTrip} locale={defaultLocale} />;
}