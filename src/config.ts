// src/config.ts — Configuration globale NPG (Nettoyage professionnel — Essonne 91)
//
// Données légales vérifiées via l'annuaire des entreprises (data.gouv.fr) :
// SIREN 511 255 473 · SIRET siège 511 255 473 00023 · Gérant Filipe Garnacho
// Création 15/02/2010 · NAF 43.22A · 32 chemin de la Mère-Dieu, 91310 Montlhéry
export const SITE = {
  nom:         'NPG',
  // Personne de référence (gérant) — réutilisé dans les schemas et certaines pages
  artisan:     'Filipe Garnacho',
  dirigeante:  'M. Filipe Garnacho',
  tel:         '06 82 18 71 14',
  telLink:     '0682187114',
  email:       'npgconcept@gmail.com',
  // Adresse complète pour les schemas Schema.org
  streetAddress: '32 chemin de la Mère-Dieu',
  adresse:     '32 chemin de la Mère-Dieu, 91310 Montlhéry',
  ville:       'Montlhéry',
  cp:          '91310',
  departement: '91',
  region:      'Île-de-France',
  siret:       '511 255 473 00023',
  siren:       '511 255 473',
  tva:         'FR06 511 255 473',
  // Réassurance (équivalent "garantie décennale" du couvreur → ici assurance + engagement qualité)
  garantie:    'Entreprise assurée — Responsabilité Civile Professionnelle',
  zone:        "Essonne (91) et Île-de-France",
  url:         'https://societe-npg.fr',
  seoTitle:    "Entreprise de nettoyage dans l'Essonne (91) — NPG",
  seoDesc:     "NPG, spécialiste du nettoyage dans l'Essonne (91) : bureaux, locaux professionnels, parties communes de copropriété, surfaces vitrées, sols et espaces verts. Devis gratuit, intervention dans tout le département.",
  // ── Schema.org ──
  logo:        '/assets/img/logo/logo-square-512.png',
  // URL Google Business (CID) — à compléter si fiche GBP existante
  gbpCid:      '',
  // Coordonnées GPS du siège (Montlhéry) — source INSEE/data.gouv
  geo:         { lat: 48.6420400, lng: 2.2613067 },
  // Horaires d'ouverture (WordPress : Lun-Ven 07h00-21h00)
  horaires:    'Mo-Fr 07:00-21:00',
} as const;
