import {revalidatePath, revalidateTag} from 'next/cache'
import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET

  if (!configuredSecret || secret !== configuredSecret) {
    return NextResponse.json({ok: false, message: 'Invalid secret'}, {status: 401})
  }

  let payload: {tags?: string[]; paths?: string[]} = {}

  try {
    payload = await request.json()
  } catch {
    payload = {}
  }

  const tags = payload.tags?.length ? payload.tags : ['sanity']
  const paths = payload.paths?.length ? payload.paths : ['/', '/en', '/gallery', '/en/gallery', '/trips', '/en/trips']

  tags.forEach((tag) => revalidateTag(tag, 'max'))
  paths.forEach((path) => revalidatePath(path))

  return NextResponse.json({
    ok: true,
    revalidated: true,
    tags,
    paths,
  })
}
