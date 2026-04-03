# Guide Back-Office FSC

## Version simple pour client non technique

Ce guide explique comment mettre a jour le contenu du site French Soca Crew depuis le back-office Sanity.

## 1. Acces au back-office

Le back-office est disponible a l'adresse:

`/studio`

Exemple en local:

`http://localhost:3000/studio`

ou

`http://localhost:3001/studio`

Selon le port utilise.

## 2. Ce qu'il est possible de modifier facilement aujourd'hui

Depuis Sanity, il est deja possible de modifier:

- le hero de la homepage
- la section intro / a propos
- le bloc video de la homepage
- le bloc destinations
- le bloc galerie
- le bloc temoignages
- le bloc contact
- les trips
- les destinations
- les temoignages
- la galerie photo

## 3. Important a savoir sur le bloc video

Aujourd'hui, le bloc video permet bien d'ajouter de vraies videos depuis Sanity.

Concretement:

- oui, on peut modifier le titre, le texte et le bouton du bloc video
- oui, on peut ajouter, retirer et reordonner les elements du bloc
- oui, on peut uploader un vrai fichier video dans Sanity
- oui, on peut aussi coller une URL video directe
- oui, on peut ajouter une image de couverture en fallback
- attention: un lien de page Instagram, TikTok ou YouTube n'est pas une video directe

## 4. Conclusion simple sur les videos

### Est-ce facile actuellement d'ajouter des videos depuis Sanity ?

La reponse courte:

Oui.

La reponse precise:

Le bloc "video" permet maintenant d'ajouter un fichier video importe dans Sanity ou une URL video directe. Si aucune video n'est fournie, le site affiche l'image de couverture.

## 5. Ce que le client peut faire tout de suite dans le bloc video

Le client peut:

1. Ouvrir `Contenu principal`
2. Ouvrir `Homepage`
3. Descendre jusqu'au bloc `Video block`
4. Modifier:
   - l'eyebrow
   - le titre
   - le texte
   - le bouton CTA
5. Dans `items`, ajouter ou remplacer des elements video
6. Pour chaque element:
   - uploader une image de couverture
   - renseigner le texte alternatif
   - renseigner une legende optionnelle
   - importer un fichier video ou coller une URL video directe
7. Publier

## 6. Ce que le client ne peut pas faire aujourd'hui sans developpement

Le client ne peut pas aujourd'hui:

- transformer automatiquement une page Instagram en fichier video exploitable
- transformer automatiquement une page TikTok en fichier video exploitable
- gerer des embeds sociaux avances sans evolution supplementaire

## 7. Bon format de video recommande

Formats recommandes:

- MP4
- WebM
- MOV

Conseils:

- privilegier MP4 pour la compatibilite
- garder des fichiers pas trop lourds
- toujours ajouter une image de couverture
- toujours remplir le texte alternatif

### Contraintes recommandees pour les videos

- poids ideal: 50 Mo maximum
- poids maximum conseille: 100 Mo
- resolution conseillee: 1920x1080 maximum
- format prefere: MP4
- si vous utilisez une URL video, il faut un lien direct vers un fichier `.mp4`, `.mov` ou `.webm`
- un lien vers une page Instagram, TikTok ou YouTube ne fonctionnera pas comme fichier video direct

## 8. Bon format d'image recommande

Formats recommandes:

- JPG
- PNG
- WebP

Conseils:

- poids recommande: 3 Mo maximum
- largeur recommandee: 2000 px minimum pour les grands visuels
- toujours remplir le texte alternatif
- eviter les captures d'ecran floues ou trop compressees

## 9. Comment modifier la homepage

### Chemin

`Contenu principal` -> `Homepage`

### Blocs modifiables

- Hero block
- Intro block
- Destinations block
- Gallery block
- Video block
- Testimonials block
- Contact block

### Conseil important

Ne pas supprimer un bloc si vous voulez seulement changer son contenu.
Il vaut mieux ouvrir le bloc existant et modifier ses champs.

## 10. Comment modifier le hero

Dans `Homepage` -> `Hero block`, vous pouvez modifier:

- micro-label
- eyebrow
- titre
- texte principal
- mot decoratif de fond
- image
- CTA principal
- CTA secondaire
- statistiques
- mots du bandeau anime

## 11. Comment modifier la section a propos

Dans `Homepage` -> `Intro block`, vous pouvez modifier:

- eyebrow
- titre
- texte principal
- note sur l'image
- petit texte lateral
- titre lateral
- image

## 12. Comment modifier les destinations

Dans `Homepage` -> `Destinations block`, vous pouvez modifier:

- eyebrow
- titre
- description
- bouton CTA
- liste des destinations affichees

Pour modifier le detail d'une destination:

`Contenu principal` -> `Destinations`

ou

`Contenu principal` -> `Trips`

Selon la structure du contenu a mettre a jour.

## 13. Comment modifier la galerie

Dans `Homepage` -> `Gallery block`, vous pouvez modifier:

- eyebrow
- titre
- description
- bouton CTA
- photos affichees

Pour gerer toutes les photos:

`Contenu principal` -> `Galerie`

## 14. Comment modifier les temoignages

Dans `Homepage` -> `Testimonials block`, vous pouvez modifier:

- eyebrow
- titre
- description
- mot decoratif de fond
- temoignages affiches

Pour modifier les temoignages eux-memes:

`Contenu principal` -> `Temoignages`

## 15. Comment modifier le bloc contact

Dans `Homepage` -> `Contact block`, vous pouvez modifier:

- eyebrow
- titre
- texte
- mot decoratif de fond
- CTA principal
- CTA secondaire

## 16. Bonnes pratiques pour le client

- toujours remplir le FR si le site principal est en francais
- ne pas laisser le champ alt vide sur les images
- utiliser des images propres et assez grandes
- respecter les formats recommandes pour les images et videos
- privilegier les fichiers legers pour garder un site rapide
- cliquer sur `Publish` apres les modifications
- verifier le rendu sur le site apres publication

## 17. Resume ultra simple

### Oui, le client peut maintenant facilement mettre a jour le bloc video

Le client peut gerer:

- le texte
- le bouton
- l'image de couverture
- le fichier video
- l'URL video directe
