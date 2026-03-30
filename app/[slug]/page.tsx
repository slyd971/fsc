import { notFound } from "next/navigation";
import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { PageBlocksRenderer } from "@/components/site/PageBlocksRenderer";
import { defaultLocale } from "@/lib/i18n";
import { getTripPage } from "@/lib/site-content";
import { client } from "@/sanity/lib/client";
import { pageBySlugQuery } from "@/sanity/lib/queries";

export default async function LocalizedCmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tripPage = await getTripPage(slug, defaultLocale);
  if (tripPage) {
    return <DestinationPageTemplate page={tripPage} locale={defaultLocale} />;
  }

  let page = null;
  try {
    page = await client.fetch(pageBySlugQuery, { slug, locale: defaultLocale });
  } catch {
    page = null;
  }

  if (!page) {
    notFound();
  }

  return (
    <main className="pt-28 md:pt-36">
      <PageBlocksRenderer blocks={page.blocks ?? []} locale={defaultLocale} />
    </main>
  );
}
