import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, hasSanityEnv, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = hasSanityEnv
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export const urlFor = (source: SanityImageSource) => {
  if (!builder) {
    throw new Error('Sanity image URL builder is unavailable because Sanity environment variables are missing.')
  }

  return builder.image(source)
}
