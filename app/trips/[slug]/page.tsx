import { getTripPage } from "@/lib/site-content";
import { defaultLocale } from "@/lib/i18n";

export default async function TripPage({
  params,
}: {
  params: { slug: string };
}) {
  const trip = await getTripPage(params.slug, defaultLocale);

  return (
    <pre style={{ padding: 40 }}>
      {JSON.stringify(trip, null, 2)}
    </pre>
  );
}