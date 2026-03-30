import { notFound } from "next/navigation";
import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { PageBlocksRenderer } from "@/components/site/PageBlocksRenderer";
import { getTripPage } from "@/lib/site-content";
import { client } from "@/sanity/lib/client";
import { pageBySlugQuery } from "@/sanity/lib/queries";

export default async function LocalizedCmsPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tripPage = await getTripPage(slug, "en");
  if (tripPage) {
    return <DestinationPageTemplate page={tripPage} locale="en" />;
  }

  let page = null;
  try {
    page = await client.fetch(pageBySlugQuery, { slug, locale: "en" });
  } catch {
    page = null;
  }

  if (!page) {
    notFound();
  }

  return (
    <main className="pt-28 md:pt-36">
      <PageBlocksRenderer blocks={page.blocks ?? []} locale="en" />
    </main>
  );
}
