import type {StructureResolver} from 'sanity/structure'
import {isAdminUser, singletonDocumentIds} from './lib/editorial'

const singletonItem = (
  S: Parameters<StructureResolver>[0],
  title: string,
  schemaType: string,
  documentId: string,
) =>
  S.listItem()
    .title(title)
    .id(documentId)
    .child(S.document().schemaType(schemaType).documentId(documentId))

export const structure: StructureResolver = (S, context) => {
  const admin = isAdminUser(context.currentUser)

  const mainContent = S.listItem()
    .title('Contenu principal')
    .child(
      S.list()
        .title('Contenu principal')
        .items([
          singletonItem(S, 'Homepage', 'page', singletonDocumentIds.homePage),
          singletonItem(S, 'Page trips', 'page', singletonDocumentIds.tripsPage),
          singletonItem(S, 'Page galerie', 'page', singletonDocumentIds.galleryPage),
          S.divider(),
          S.listItem().title('Trips').child(S.documentTypeList('trip')),
          S.listItem().title('Destinations').child(S.documentTypeList('destination')),
          S.listItem().title('Événements').child(S.documentTypeList('event')),
          S.listItem().title('Témoignages').child(S.documentTypeList('testimonial')),
          S.listItem().title('Éléments de galerie').child(S.documentTypeList('galleryItem')),
          S.listItem()
            .title('Autres pages')
            .child(
              S.documentTypeList('page').filter(
                `_type == "page" && !(_id in ["${singletonDocumentIds.homePage}", "${singletonDocumentIds.tripsPage}", "${singletonDocumentIds.galleryPage}"])`,
              ),
            ),
        ]),
    )

  const globalSettings = S.listItem()
    .title('Réglages globaux')
    .child(
      S.list()
        .title('Réglages globaux')
        .items([singletonItem(S, 'Paramètres du site', 'siteSettings', singletonDocumentIds.siteSettings)]),
    )

  const items: any[] = [mainContent, globalSettings]

  if (admin) {
    items.push(
      S.divider(),
      S.listItem()
        .title('Admin')
        .child(
          S.list()
            .title('Admin')
            .items([
              S.listItem().title('Toutes les pages').child(S.documentTypeList('page')),
              S.listItem().title('Tous les réglages site').child(S.documentTypeList('siteSettings')),
            ]),
        ),
    )
  }

  return S.list().title('Studio éditorial').items(items)
}
