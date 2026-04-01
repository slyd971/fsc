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
    <main className="pt-28 md:pt-36" style={{ padding: 24, color: "white" }}>
      <h1>{trip.title}</h1>
      <p>{trip.eyebrow}</p>
      <p>{trip.heroDescription}</p>
      <img
        src={trip.heroImage}
        alt={trip.title}
        style={{ width: 320, maxWidth: "100%", marginTop: 24 }}
      />

      <h2 style={{ marginTop: 32 }}>Intro</h2>
      {(trip.introParagraphs ?? []).map((p, i) => (
        <p key={i} style={{ marginTop: 12 }}>
          {p}
        </p>
      ))}

      <h2 style={{ marginTop: 32 }}>Experiences</h2>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
        {JSON.stringify(trip.experiences ?? [], null, 2)}
      </pre>

      <h2 style={{ marginTop: 32 }}>Packs</h2>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
        {JSON.stringify(trip.packs ?? [], null, 2)}
      </pre>
    </main>
  );
}