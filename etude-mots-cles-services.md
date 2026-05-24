# Étude de mots-clés GSC & arborescence des pages services — NPG

_Source : exports Google Search Console (Requêtes, Pages, Apparence) — analyse réalisée le 24/05/2026._

## 1. Diagnostic de départ

Le site ne compte aujourd'hui que **5 pages indexées**, toutes institutionnelles (accueil, contact, mentions légales, à propos, plan du site). La page d'accueil concentre à elle seule **10 223 impressions** (position moyenne 7,8) et capte l'essentiel du trafic. **Aucune page de service dédiée n'existe.**

Conséquence directe : des dizaines de requêtes commerciales très précises génèrent des impressions mais **0 clic**, car aucune page ne répond spécifiquement à l'intention. C'est le gisement principal d'amélioration.

Bonne nouvelle : comme une seule page (l'accueil) se positionne, il **n'existe aucune cannibalisation actuelle**. On part d'une page blanche — l'enjeu est d'éviter d'en créer en construisant le silo proprement.

## 2. Clusters de requêtes (regroupement par sujet × intention)

Les 438 requêtes de l'export ont été regroupées par sujet. Volume = impressions cumulées sur la période.

| Cluster (futur service) | Requêtes | Impressions | Clics | Intention dominante | Potentiel |
|---|---|---|---|---|---|
| Nettoyage de bureaux | 62 | 897 | 2 | LOCAL-PROJET | ⭐⭐⭐ |
| Copropriété & parties communes | 37 | 688 | 0 | LOCAL-PROJET | ⭐⭐⭐ |
| Nettoyage industriel | 36 | 471 | 1 | LOCAL-PROJET | ⭐⭐⭐ |
| Commerces, boutiques, magasins | 8 | 450 | 0 | LOCAL-PROJET | ⭐⭐⭐ |
| Haute pression (façades, parkings…) | 28 | 231 | 2 | LOCAL-PROJET | ⭐⭐ |
| Surfaces vitrées | 7 | 140 | 0 | LOCAL-PROJET | ⭐⭐ |
| Collectivités / écoles | 6 | 36 | 0 | LOCAL-PROJET | ⭐ |
| Fin de chantier / après travaux | 15 | 18 | 0 | LOCAL-PROJET | ⭐ |
| Sols | 2 | 8 | 0 | LOCAL-PROJET | ⭐ |
| Espaces verts | 0 | 0 | 0 | — | ⭐ |
| _Générique (accueil)_ | 154 | 3 498 | 21 | NAV + LOCAL-PROJET | (reste sur l'accueil) |
| _Particulier / ménage_ | 61 | 447 | 3 | hors cœur de cible B2B | non prioritaire |
| _Marque (npg…)_ | 13 | 273 | 10 | NAV | (accueil) |
| _Emploi / hors-sujet_ | 9 | 13 | 0 | — | ignoré |

### Lecture des résultats

**Trois pages à très fort potentiel immédiat** captent déjà des impressions mais aucun clic faute de page dédiée :
- **Bureaux** : `societe de nettoyage de bureau 91` (320 imp, pos 1,6), `nettoyage bureaux 91` (276 imp, pos 2,0). On est déjà très bien positionné — une page dédiée transformera ces impressions en clics.
- **Copropriété / parties communes** : `nettoyage copropriété 91` (245 imp), `societe nettoyage parties communes` (158 imp, pos 1,1).
- **Industriel** : `nettoyage industriel 91` (285 imp, pos 1,8) — excellent sur le générique, mais les variantes par ville plongent (pos 47 à 86).
- **Commerces** : `nettoyage commerce 91` (309 imp), `nettoyage boutique 91` (134 imp).

**Le générique reste à l'accueil.** Les requêtes `entreprise de nettoyage 91 / essonne` (≈ 3 500 impressions cumulées) sont l'intention principale de la page d'accueil. **Il ne faut pas créer de page service qui les cible** — ce serait se cannibaliser avec sa propre home.

**La longue traîne géographique est révélatrice :** les requêtes service + ville (chilly-mazarin, savigny, brunoy, les ulis, antony, arpajon, étampes…) rankent mal (positions 20 à 86). Cela **confirme le besoin de pages service × ville en phase 2** — comme convenu, on construit d'abord les pages services génériques.

## 3. Point clé : fusion « parties communes » + « copropriété »

Le menu prévoyait deux entrées séparées (`parties-communes` et une future page copropriété). **L'analyse montre qu'elles partagent exactement la même intention** (LOCAL-PROJET, entretien d'immeuble en copropriété) et les mêmes requêtes (`nettoyage parties communes`, `nettoyage copropriété 91`, `entretien d'immeuble`). Les maintenir séparées créerait une **cannibalisation quasi certaine**.

➡️ **Recommandation : une seule page** « Nettoyage de copropriété & parties communes », qui couvre halls, escaliers, locaux poubelles, vitrerie des communs, etc. Le créneau libéré est réaffecté à une page **Collectivités / écoles** (demande réelle : `agence de nettoyage écoles`, `nettoyage services publics`).

On conserve donc bien **10 pages services**.

## 4. Arborescence recommandée (silo /services/)

| # | Page | URL | Mot-clé principal |
|---|---|---|---|
| 1 | Nettoyage de bureaux | `/services/nettoyage-bureaux/` | nettoyage bureaux 91 |
| 2 | Copropriété & parties communes | `/services/nettoyage-copropriete/` | nettoyage copropriété 91 |
| 3 | Nettoyage industriel (ateliers, usines) | `/services/nettoyage-industriel/` | nettoyage industriel 91 |
| 3bis | Entrepôts & logistique | `/services/nettoyage-entrepot-logistique/` | nettoyage entrepôt / plateforme logistique |
| 4 | Commerces & magasins | `/services/nettoyage-commerces/` | nettoyage commerce 91 |
| 5 | Nettoyage haute pression | `/services/nettoyage-haute-pression/` | nettoyage bardage / façade essonne |
| 6 | Surfaces vitrées | `/services/nettoyage-vitres/` | nettoyage vitres 91 |
| 7 | Nettoyage des sols | `/services/nettoyage-sols/` | nettoyage sol professionnel |
| 8 | Entretien des espaces verts | `/services/entretien-espaces-verts/` | entretien espaces verts entreprise |
| 9 | Fin de chantier / après travaux | `/services/nettoyage-fin-de-chantier/` | nettoyage fin de chantier |
| 10 | Collectivités & bâtiments publics | `/services/nettoyage-collectivites/` | nettoyage collectivités / services publics |

> **Ajout du 24/05/2026** — page « Entrepôts & logistique » (3bis) créée à la demande de l'utilisateur. Demande GSC directe faible (`nettoyage entrepot` 3 imp), mais niche B2B à forte valeur (corridor logistique A6 / Essonne) et NPG dispose de nombreux visuels d'entrepôts. Pour éviter la cannibalisation, la page « nettoyage industriel » a été **recentrée sur les ateliers, usines et sites de production**, et la page logistique cible les entrepôts, plateformes, quais et zones de stockage. On passe donc à **11 pages services**.

Les pages 7, 8, 9, 10 ont une demande faible dans CETTE GSC, mais elles font partie de l'offre affichée et capteront la longue traîne nationale + soutiennent le maillage interne. Elles sont à créer en priorité plus basse que les pages 1 à 6.

## 5. Balises SEO proposées (anti-cannibalisation)

Chaque page a un sujet et un mot-clé principal distincts. La géolocalisation « Essonne (91) » est présente partout sans dupliquer la même formule de title.

### 1 — Nettoyage de bureaux _(balises revues le 24/05 ; cible entreprises, anti-triplette)_
- **Title :** Nettoyage de bureaux et locaux pro dans l'Essonne (91) | NPG
- **Meta :** Sols, sanitaires, vitres, corbeilles : NPG nettoie vos bureaux et locaux professionnels dans l'Essonne (91), en journée ou de nuit. Devis gratuit.
- **H1 :** Des bureaux propres et sains pour vos équipes dans l'Essonne (91)

### 2 — Copropriété & parties communes _(balises revues le 24/05 ; cible syndics, anti-triplette)_
- **Title :** Nettoyage de copropriété et parties communes – 91 | NPG
- **Meta :** Halls, escaliers, locaux poubelles : NPG entretient les parties communes de vos immeubles dans l'Essonne (91). Syndics, un seul interlocuteur. Devis gratuit.
- **H1 :** Entretien des parties communes pour syndics et copropriétés dans l'Essonne (91)

### 3 — Nettoyage industriel _(recentré ateliers/usines ; balises revues le 24/05, anti-triplette)_
- **Title :** Nettoyage industriel : ateliers et usines – Essonne (91)
- **Meta :** Sols techniques, ateliers, surfaces de production : NPG nettoie vos sites industriels dans l'Essonne (91). Matériel adapté, équipes formées. Devis gratuit.
- **H1 :** Entretien des ateliers, usines et sites de production dans l'Essonne (91)

### 4 — Commerces & magasins
- **Title :** Nettoyage de commerces et magasins – Essonne (91) | NPG
- **Meta :** Nettoyage de commerces, boutiques, magasins et restaurants dans l'Essonne (91) : surfaces de vente, vitrines, sols. Interventions hors heures d'ouverture. Devis gratuit.
- **H1 :** Nettoyage de commerces, boutiques et magasins dans l'Essonne (91)

### 5 — Nettoyage haute pression
- **Title :** Nettoyage haute pression : façades, terrasses, parkings (91)
- **Meta :** Nettoyage haute pression dans l'Essonne (91) : façades, bardages, terrasses, dalles et parkings. Décrassage en profondeur des surfaces extérieures. Devis gratuit.
- **H1 :** Nettoyage haute pression : façades, bardages, terrasses et parkings

### 6 — Surfaces vitrées
- **Title :** Nettoyage de vitres et surfaces vitrées – Essonne (91) | NPG
- **Meta :** Nettoyage de vitres, vitrines et surfaces vitrées dans l'Essonne (91) : bureaux, commerces, copropriétés. Résultat impeccable, sans traces, en hauteur si besoin. Devis gratuit.
- **H1 :** Nettoyage de vitres et surfaces vitrées professionnelles dans l'Essonne (91)

### 7 — Nettoyage des sols
- **Title :** Nettoyage et entretien des sols professionnels – 91 | NPG
- **Meta :** Entretien et remise en état des sols professionnels dans l'Essonne (91) : autolaveuse, monobrosse, décapage, cristallisation, moquettes. Tous revêtements. Devis gratuit.
- **H1 :** Nettoyage et entretien des sols professionnels dans l'Essonne (91)

### 8 — Entretien des espaces verts _(balises revues le 24/05 ; cible neutre « professionnels », anti-triplette)_
- **Title :** Entretien des espaces verts dans l'Essonne (91) | NPG
- **Meta :** NPG, entreprise de nettoyage dans l'Essonne (91), entretient les espaces verts des professionnels : tonte, taille de haies, désherbage. Devis gratuit.
- **H1 :** Tonte, taille de haies et entretien des extérieurs dans l'Essonne (91)

### 9 — Fin de chantier / après travaux
- **Title :** Nettoyage de fin de chantier et après travaux – 91 | NPG
- **Meta :** Nettoyage de fin de chantier et après travaux dans l'Essonne (91) : dépoussiérage, traces de peinture, vitres, sols, remise en état avant livraison. Intervention rapide. Devis gratuit.
- **H1 :** Nettoyage de fin de chantier et remise en état après travaux

### 10 — Collectivités & établissements publics
- **Title :** Nettoyage de collectivités et bâtiments publics – 91 | NPG
- **Meta :** Nettoyage de bâtiments publics, administrations, mairies et locaux de collectivités dans l'Essonne (91) : protocoles d'hygiène adaptés, équipes formées, marchés publics. Devis gratuit.
- **H1 :** Nettoyage de collectivités et de bâtiments publics dans l'Essonne (91)

## 6. Plan d'action

1. **Phase 1 (maintenant)** : créer les 10 pages services dans `/services/`, en réutilisant le design du site. Priorité de rédaction : bureaux, copropriété, industriel, commerces (fort potentiel), puis vitres et haute pression, puis sols, espaces verts, fin de chantier, collectivités.
2. Mettre à jour le méga-menu pour pointer vers les vraies URLs `/services/<slug>/` (au lieu des ancres `#`), ajouter les pages au sitemap et au plan du site.
3. Maillage interne : chaque page service renvoie vers l'accueil et vers 2-3 services connexes ; l'accueil et le footer listent les 10 services.
4. **Phase 2 (plus tard)** : décliner les pages service × ville sur les communes à fort potentiel mal positionnées (Palaiseau, Évry, Brunoy, Les Ulis, Arpajon, Chilly-Mazarin, Savigny-sur-Orge…).
