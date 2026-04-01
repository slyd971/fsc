import { createClient } from 'next-sanity'

import { apiVersion, dataset, hasSanityEnv, projectId, readToken } from '../env'

export const client = hasSanityEnv
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: readToken || undefined,
    })
  : null

export function getSanityFetchOptions(tags: string[] = []) {
  if (process.env.NODE_ENV !== 'production') {
    return { cache: 'no-store' as const }
  }

  return {
    next: {
      revalidate: 60,
      tags: ['sanity', ...tags],
    },
  }
}