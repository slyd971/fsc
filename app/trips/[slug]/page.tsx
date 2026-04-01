import { notFound } from "next/navigation";
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

  return (
    <main className="pt-28 md:pt-36">
      <div style={{ padding: 24, color: "white" }}>
        <h1>{trip.title}</h1>
        <p>{trip.eyebrow}</p>
        <p>{trip.heroDescription}</p>

        <pre style={{ whiteSpace: "pre-wrap", marginTop: 24 }}>
          {JSON.stringify(trip, null, 2)}
        </pre>
      </div>
    </main>
  );
}