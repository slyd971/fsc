import {revalidatePath, revalidateTag} from 'next/cache'
import {NextRequest, NextResponse} from 'next/server'

type LocalizedSlugValue =
  | string
  | {
      current?: string
      fr?: {current?: string}
      en?: {current?: string}
    }

type RevalidatePayload = {
  tags?: string[]
  paths?: string[]
  slug?: LocalizedSlugValue
  documentType?: string
  _type?: string
}

function normalizeSlug(value?: string) {
  return value?.trim().toLowerCase().replace(/^\/+|\/+$/g, '')
}

function collectLocalizedSlugs(slug?: LocalizedSlugValue) {
  if (!slug) {
    return {fr: undefined, en: undefined}
  }

  if (typeof slug === 'string') {
    const normalized = normalizeSlug(slug)
    return {fr: normalized, en: normalized}
  }

  return {
    fr: normalizeSlug(slug.fr?.current ?? slug.current),
    en: normalizeSlug(slug.en?.current ?? slug.current),
  }
}

function buildPathsForDocumentType(documentType: string | undefined, slug?: LocalizedSlugValue) {
  const paths = new Set<string>(['/', '/en', '/gallery', '/en/gallery', '/trips', '/en/trips'])
  const {fr, en} = collectLocalizedSlugs(slug)

  if (documentType === 'trip') {
    if (fr) {
      paths.add(`/trips/${fr}`)
    }

    if (en) {
      paths.add(`/en/trips/${en}`)
    }
  }

  if (documentType === 'page') {
    if (fr) {
      paths.add(fr === 'home' ? '/' : `/${fr}`)
    }

    if (en) {
      paths.add(en === 'home' ? '/en' : `/en/${en}`)
    }
  }

  return [...paths]
}

function buildTags(documentType: string | undefined, slug?: LocalizedSlugValue, incomingTags?: string[]) {
  const tags = new Set<string>(incomingTags?.length ? incomingTags : ['sanity'])
  const {fr, en} = collectLocalizedSlugs(slug)

  if (documentType) {
    tags.add(documentType)
  }

  if (documentType === 'trip') {
    tags.add('trips')
  }

  if (fr) {
    tags.add(`slug:${fr}`)
    if (documentType) {
      tags.add(`${documentType}:${fr}`)
      tags.add(`${documentType}:fr:${fr}`)
    }
  }

  if (en) {
    tags.add(`slug:${en}`)
    if (documentType) {
      tags.add(`${documentType}:${en}`)
      tags.add(`${documentType}:en:${en}`)
    }
  }

  return [...tags]
}

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET

  if (!configuredSecret || secret !== configuredSecret) {
    return NextResponse.json({ok: false, message: 'Invalid secret'}, {status: 401})
  }

  let payload: RevalidatePayload = {}

  try {
    payload = await request.json()
  } catch {
    payload = {}
  }

  const documentType = payload.documentType ?? payload._type
  const tags = buildTags(documentType, payload.slug, payload.tags)
  const paths = payload.paths?.length
    ? payload.paths
    : buildPathsForDocumentType(documentType, payload.slug)

  tags.forEach((tag) => revalidateTag(tag, 'max'))
  paths.forEach((path) => revalidatePath(path))

  return NextResponse.json({
    ok: true,
    revalidated: true,
    tags,
    paths,
  })
}
