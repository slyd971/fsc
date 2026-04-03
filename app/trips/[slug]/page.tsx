import { notFound } from "next/navigation";
import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { getTripPage } from "@/lib/site-content";
import { defaultLocale } from "@/lib/i18n";

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = await getTripPage(slug, defaultLocale);

  if (!trip) {
    notFound();
  }

  return <DestinationPageTemplate page={trip} locale={defaultLocale} />;
}
