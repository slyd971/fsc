export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-30'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

export const readToken =
  process.env.SANITY_API_READ_TOKEN ||
  process.env.SANITY_READ_TOKEN ||
  ''

export const hasSanityEnv = Boolean(projectId && dataset)
