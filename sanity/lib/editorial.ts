type StudioContext = {
  currentUser?: {
    roles?: Array<{name?: string}>
  } | null
  document?: {
    _id?: string
    _type?: string
  }
}

const ADMIN_ROLE_NAMES = new Set(['administrator', 'admin', 'developer'])

export const documentGroups = [
  {name: 'content', title: 'Contenu', default: true},
  {name: 'media', title: 'Médias'},
  {name: 'seo', title: 'SEO'},
  {name: 'settings', title: 'Réglages'},
  {name: 'internal', title: 'Interne'},
] 

export const objectFieldsets = [
  {name: 'content', title: 'Contenu', options: {columns: 1}},
  {name: 'media', title: 'Médias', options: {columns: 1}},
  {name: 'settings', title: 'Réglages', options: {columns: 1}},
  {name: 'internal', title: 'Interne', options: {columns: 1}},
] 

export const singletonDocumentIds = {
  siteSettings: 'siteSettings.main',
  homePage: 'page.home',
  tripsPage: 'page.trips',
  galleryPage: 'page.gallery',
} as const

export function isAdminUser(currentUser?: StudioContext['currentUser']) {
  return Boolean(currentUser?.roles?.some((role) => ADMIN_ROLE_NAMES.has(role.name)))
}

export function hideForContributors({currentUser}: StudioContext) {
  return !isAdminUser(currentUser)
}

export function readOnlyForContributors({currentUser}: StudioContext) {
  return !isAdminUser(currentUser)
}

export function isSingletonDocumentId(documentId?: string) {
  return Object.values(singletonDocumentIds).includes(documentId as (typeof singletonDocumentIds)[keyof typeof singletonDocumentIds])
}
