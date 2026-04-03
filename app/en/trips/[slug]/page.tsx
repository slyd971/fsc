import { notFound } from "next/navigation";
import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { getGalleryItems, getTripPage } from "@/lib/site-content";

function galleryTagFromTripSlug(slug: string) {
  if (slug.includes("london")) {
    return "london";
  }

  if (slug.includes("rotterdam")) {
    return "rotterdam";
  }

  return null;
}

export default async function TripPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [trip, galleryItems] = await Promise.all([getTripPage(slug, "en"), getGalleryItems("en")]);

  if (!trip) {
    notFound();
  }

  const galleryTag = galleryTagFromTripSlug(trip.slug);
  const tripGallery = galleryTag
    ? galleryItems.filter((item) => item.tag?.slug?.trim().toLowerCase() === galleryTag)
    : [];

  return <DestinationPageTemplate page={trip} locale="en" galleryItems={tripGallery.slice(0, 4)} />;
}
