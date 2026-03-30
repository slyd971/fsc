import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export function getSanityFetchOptions(tags: string[] = []) {
  if (process.env.NODE_ENV !== 'production') {
    return {cache: 'no-store' as const}
  }

  return {
    next: {
      tags: ['sanity', ...tags],
    },
  }
}
