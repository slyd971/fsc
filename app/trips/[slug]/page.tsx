import { notFound } from "next/navigation";
import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { PageBlocksRenderer } from "@/components/site/PageBlocksRenderer";
import { getTripPage } from "@/lib/site-content";
import { client } from "@/sanity/lib/client";
import { pageBySlugQuery } from "@/sanity/lib/queries";

export default async function LocalizedCmsPageFr({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const tripPage = await getTripPage(slug, "fr");
  if (tripPage) {
    return <DestinationPageTemplate page={tripPage} locale="fr" />;
  }

  let page = null;
  try {
    page = await client.fetch(pageBySlugQuery, { slug, locale: "fr" });
  } catch {
    page = null;
  }

  if (!page) {
    notFound();
  }

  return (
    <main className="pt-28 md:pt-36">
      <PageBlocksRenderer blocks={page.blocks ?? []} locale="fr" />
    </main>
  );
}