function mapBlockGallery(
  items: CmsPageBlock["items"] | undefined,
  locale: Locale,
  fallback: GalleryItem[],
): GalleryItem[] {
  const mapped =
    items
      ?.filter((item) => item?._type === "galleryItem")
      .map((item, index) => ({
        id: item._id ?? `gallery-${index}`,
        title: localize(item.title, locale, "Gallery item"),
        tag: item.tag
          ? {
              title: localize(item.tag.title, locale, "Parties"),
              slug:
                item.tag.slug?.[locale]?.current ??
                item.tag.slug?.fr?.current ??
                item.tag.slug?.en?.current ??
                "parties",
            }
          : undefined,
        image: resolveMediaUrl(item.image, fallback[index]?.image ?? fallback[0]?.image ?? "/fsc-crew-1.jpg"),
        alt: localize(item.alt ?? item.image?.alt, locale, "Gallery image"),
        size: item.size ?? "landscape",
      })) as GalleryItem[] | undefined;

  return mapped?.length ? mapped : fallback;
}