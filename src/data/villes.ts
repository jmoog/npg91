// src/data/villes.ts
// Contenu des pages villes (/entreprise-nettoyage-<slug>/) — SEO local NPG.
// 10 communes de l'Essonne où NPG a des sites et des clients.
// Contenu UNIQUE par ville (intro, chapitres locaux, prestations, FAQ) pour éviter le duplicate content.
// Balises pensées anti-triplette : title, H1 et meta commencent différemment,
// « dans l'Essonne (91) » (jamais « en Essonne »), cible adaptée au tissu économique de chaque ville.

const IMG = '/assets/img/photos-npg';

export interface VilleFaq { q: string; r: string; }
export interface VilleChapitre { h2: string; texte: string; } // texte : HTML autorisé

export interface Ville {
  slug: string;
  nom: string;
  /** Forme à utiliser après « à / aux » (ex. « aux Ulis ») si différente de « à {nom} » */
  prep?: string;
  cp: string;
  /** Étiquette courte du tissu local (affichée en sous-titre rouge du hero) */
  heroSub: string;
  heroImg: string;
  heroAlt: string;
  /** Balise <title> (≤ 60 car.) */
  seoTitle: string;
  /** Meta description (140-158 car.) */
  seoDesc: string;
  /** H1 — commence différemment du title */
  h1: string;
  /** Accroche hero (HTML) avec mot-clé exact en <strong> + posture client */
  heroDesc: string;
  /** Intro éditoriale unique */
  intro: string;
  /** 2 chapitres H2 ancrés localement (texte HTML, contenu propre à la ville) */
  chapitres: VilleChapitre[];
  /** Slugs des services prioritaires (affichés en premier dans les cartes prestations ; les 11 sont toujours liées) */
  services?: string[];
  /** FAQ propre à la ville (alimente le schema FAQPage) */
  faq: VilleFaq[];
  /** Slugs des communes voisines (maillage interne) */
  voisines: string[];
}

export const VILLES: Ville[] = [

  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'evry-courcouronnes',
    nom: 'Évry-Courcouronnes',
    cp: '91000',
    heroSub: 'Bureaux · Administrations · Copropriétés · Commerces',
    heroImg: `${IMG}/nettoyage-locaux-professionnels-npg.webp`,
    heroAlt: "Nettoyage de bureaux et de locaux professionnels par NPG à Évry-Courcouronnes",
    seoTitle: "Entreprise de nettoyage à Évry-Courcouronnes (91) — NPG",
    seoDesc: "Bureaux, parties communes, commerces et surfaces vitrées : NPG assure le nettoyage de vos locaux à Évry-Courcouronnes, dans l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Évry-Courcouronnes",
    heroDesc: "Vous cherchez une <strong>entreprise de nettoyage à Évry-Courcouronnes</strong> ? NPG entretient bureaux, sièges administratifs, parties communes de copropriété et commerces dans toute la préfecture de l'Essonne, avec des horaires adaptés à votre activité.",
    intro: "Préfecture de l'Essonne, Évry-Courcouronnes concentre administrations, sièges d'entreprises, grands ensembles résidentiels et commerces autour du centre Évry 2. NPG y intervient au quotidien pour l'entretien des bureaux, des parties communes et des surfaces commerciales, du lundi au vendredi.",
    chapitres: [
      {
        h2: "Nettoyage de bureaux et d'administrations à Évry-Courcouronnes",
        texte: "Le quartier d'affaires d'Évry-Courcouronnes accueille de nombreux services publics, sièges et plateaux tertiaires. Nous adaptons la fréquence et les horaires d'intervention à votre organisation : tôt le matin, en soirée ou pendant les heures de bureau, pour ne pas perturber vos équipes. Dépoussiérage, désinfection des points de contact, sanitaires, sols et vitres : tout est consigné dans un cahier des charges précis.",
      },
      {
        h2: "Entretien des copropriétés et des résidences",
        texte: "Évry-Courcouronnes compte de nombreuses copropriétés et résidences collectives. Pour les syndics et les conseils syndicaux, NPG assure l'entretien régulier des halls, escaliers, paliers, ascenseurs et locaux poubelles, avec un interlocuteur unique et des comptes rendus réguliers qui facilitent le suivi.",
      },
    ],
    services: ['nettoyage-bureaux', 'nettoyage-copropriete', 'nettoyage-commerces', 'nettoyage-vitres', 'nettoyage-sols', 'nettoyage-collectivites'],
    faq: [
      { q: "Intervenez-vous dans tout Évry-Courcouronnes ?", r: "Oui, NPG intervient dans l'ensemble des quartiers d'Évry-Courcouronnes, du centre administratif aux zones résidentielles et commerciales, ainsi que dans les communes voisines de l'Essonne (91)." },
      { q: "Pouvez-vous nettoyer nos bureaux en dehors des heures d'ouverture ?", r: "Oui. Nous adaptons nos horaires à votre activité : tôt le matin, en soirée ou la nuit, pour intervenir sans gêner vos collaborateurs ni vos visiteurs." },
      { q: "Proposez-vous un contrat d'entretien régulier ?", r: "Oui, nous établissons un cahier des charges et une fréquence d'intervention sur mesure (quotidienne, hebdomadaire ou mensuelle), avec un interlocuteur unique et un suivi des prestations." },
    ],
    voisines: ['corbeil-essonnes', 'longjumeau', 'sainte-genevieve-des-bois'],
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'corbeil-essonnes',
    nom: 'Corbeil-Essonnes',
    cp: '91100',
    heroSub: 'Sites industriels · Bureaux · Copropriétés · Sols techniques',
    heroImg: `${IMG}/vehicule-societe-nettoyage-npg.webp`,
    heroAlt: "Véhicule NPG, entreprise de nettoyage intervenant à Corbeil-Essonnes",
    seoTitle: "Entreprise de nettoyage à Corbeil-Essonnes (91) — NPG",
    seoDesc: "Sites industriels, bureaux, copropriétés et sols techniques : NPG entretient vos locaux à Corbeil-Essonnes, partout dans l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Corbeil-Essonnes",
    heroDesc: "Besoin d'une <strong>entreprise de nettoyage à Corbeil-Essonnes</strong> ? NPG intervient sur les sites industriels, les bureaux, les parties communes et les locaux techniques de cette ville à l'histoire industrielle forte, avec un matériel professionnel adapté.",
    intro: "Ville industrielle historique de la vallée de la Seine, Corbeil-Essonnes accueille usines, sites de production, le centre hospitalier Sud-Francilien et de nombreuses copropriétés. NPG y assure aussi bien le nettoyage industriel que l'entretien tertiaire et résidentiel, avec des équipes formées aux contraintes de chaque site.",
    chapitres: [
      {
        h2: "Nettoyage industriel et de sites de production à Corbeil-Essonnes",
        texte: "Sur les ateliers, sites de production et locaux techniques de Corbeil-Essonnes, l'entretien répond à des exigences d'hygiène et de sécurité précises. NPG intervient avec des autolaveuses et un matériel adapté aux grandes surfaces et aux sols industriels, en coordination avec vos plannings de production.",
      },
      {
        h2: "Bureaux, copropriétés et commerces",
        texte: "Au-delà de l'industriel, Corbeil-Essonnes compte un centre-ville commerçant, des bureaux et de nombreuses résidences. Nous assurons l'entretien des espaces tertiaires, des parties communes de copropriété et des surfaces commerciales, avec la même régularité et le même suivi.",
      },
    ],
    services: ['nettoyage-industriel', 'nettoyage-sols', 'nettoyage-entrepot-logistique', 'nettoyage-bureaux', 'nettoyage-copropriete', 'nettoyage-haute-pression'],
    faq: [
      { q: "Êtes-vous équipés pour le nettoyage de sites industriels ?", r: "Oui. NPG dispose d'autolaveuses, de monobrosses et d'un matériel professionnel adapté aux ateliers, sites de production et grandes surfaces de Corbeil-Essonnes." },
      { q: "Pouvez-vous intervenir sur des copropriétés à Corbeil-Essonnes ?", r: "Oui, nous entretenons halls, escaliers, paliers et locaux poubelles des résidences, pour les syndics comme pour les conseils syndicaux, avec un interlocuteur unique." },
      { q: "Travaillez-vous avec des comptes rendus de suivi ?", r: "Oui, nous assurons le contrôle et le suivi de nos interventions, avec des comptes rendus réguliers transmis à nos clients." },
    ],
    voisines: ['evry-courcouronnes', 'sainte-genevieve-des-bois', 'longjumeau'],
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'palaiseau',
    nom: 'Palaiseau',
    cp: '91120',
    heroSub: 'Bureaux · Laboratoires · Campus · Parties communes',
    heroImg: `${IMG}/nettoyage-bureaux-open-space-npg.webp`,
    heroAlt: "Nettoyage de bureaux en open space par NPG à Palaiseau",
    seoTitle: "Entreprise de nettoyage à Palaiseau (91) — NPG",
    seoDesc: "Bureaux, laboratoires, parties communes et vitres : NPG prend en charge le nettoyage de vos locaux à Palaiseau, dans tout l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Palaiseau",
    heroDesc: "Vous recherchez une <strong>entreprise de nettoyage à Palaiseau</strong> ? NPG entretient bureaux, laboratoires, locaux d'entreprises et parties communes, au cœur du pôle scientifique du plateau de Saclay.",
    intro: "Palaiseau accueille l'École polytechnique, l'ENSTA et de nombreuses entreprises technologiques rattachées au plateau de Saclay, aux côtés de quartiers résidentiels. NPG y entretient des environnements de travail exigeants, où la propreté participe directement à l'image et au confort des équipes.",
    chapitres: [
      {
        h2: "Nettoyage de bureaux et de laboratoires à Palaiseau",
        texte: "Les entreprises et centres de recherche de Palaiseau attendent un entretien rigoureux et discret. NPG forme ses agents aux protocoles propres aux espaces tertiaires et techniques, et intervient sur des horaires décalés pour ne pas perturber l'activité des plateaux et des laboratoires.",
      },
      {
        h2: "Parties communes et résidences",
        texte: "Palaiseau compte aussi de nombreuses copropriétés et logements collectifs. Pour les syndics, nous assurons l'entretien régulier des halls, cages d'escalier, ascenseurs et locaux techniques, avec un suivi documenté et un interlocuteur unique.",
      },
    ],
    services: ['nettoyage-bureaux', 'nettoyage-vitres', 'nettoyage-copropriete', 'nettoyage-sols', 'entretien-espaces-verts', 'nettoyage-fin-de-chantier'],
    faq: [
      { q: "Pouvez-vous intervenir sur des horaires décalés à Palaiseau ?", r: "Oui. Nous adaptons nos interventions tôt le matin, en soirée ou la nuit pour ne pas gêner l'activité des bureaux, laboratoires et plateaux techniques." },
      { q: "Assurez-vous le nettoyage des vitres en hauteur ?", r: "Oui, nous nettoyons vitres, vitrines et surfaces vitrées avec le matériel adapté, y compris les vérandas et façades vitrées des bâtiments tertiaires." },
      { q: "Proposez-vous un contrat d'entretien régulier ?", r: "Oui, nous définissons une fréquence sur mesure et un cahier des charges précis, avec contrôle et comptes rendus de suivi." },
    ],
    voisines: ['saclay', 'massy', 'villebon-sur-yvette', 'les-ulis'],
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'massy',
    nom: 'Massy',
    cp: '91300',
    heroSub: 'Sièges tertiaires · Copropriétés · Commerces · Vitres',
    heroImg: `${IMG}/camions-npg-parking-npg.webp`,
    heroAlt: "Camionnettes NPG, entreprise de nettoyage intervenant à Massy",
    seoTitle: "Entreprise de nettoyage à Massy (91) — NPG",
    seoDesc: "Sièges tertiaires, copropriétés, commerces et surfaces vitrées : NPG nettoie vos locaux à Massy et dans tout l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Massy",
    heroDesc: "Vous avez besoin d'une <strong>entreprise de nettoyage à Massy</strong> ? NPG entretient les sièges tertiaires du quartier de la gare, les copropriétés récentes et les commerces de l'un des principaux pôles d'affaires de l'Essonne.",
    intro: "Avec son quartier d'affaires Atlantis et sa gare TGV, Massy est l'un des grands pôles tertiaires de l'Essonne : sièges d'entreprises, immeubles de bureaux et copropriétés récentes s'y côtoient. NPG y assure l'entretien des espaces de travail comme des parties communes, avec une réactivité adaptée à l'activité du secteur.",
    chapitres: [
      {
        h2: "Nettoyage de bureaux et de sièges d'entreprise à Massy",
        texte: "Le quartier Massy-Atlantis concentre de nombreux immeubles de bureaux et sièges sociaux. NPG y propose un entretien régulier des plateaux, salles de réunion, espaces d'accueil et sanitaires, sur des horaires choisis avec vous pour préserver le confort des collaborateurs et l'image de l'entreprise.",
      },
      {
        h2: "Copropriétés et résidences récentes",
        texte: "Massy a connu un fort développement résidentiel. Pour les syndics et les gestionnaires, NPG entretient les halls, circulations, parkings et locaux poubelles des copropriétés, avec un suivi régulier et un seul interlocuteur du devis à la prestation.",
      },
    ],
    services: ['nettoyage-bureaux', 'nettoyage-copropriete', 'nettoyage-vitres', 'nettoyage-commerces', 'nettoyage-sols', 'nettoyage-haute-pression'],
    faq: [
      { q: "Intervenez-vous dans le quartier de Massy-Atlantis ?", r: "Oui, NPG intervient dans l'ensemble de Massy, dont le quartier d'affaires Atlantis et le secteur de la gare, ainsi que dans les communes voisines de l'Essonne (91)." },
      { q: "Pouvez-vous entretenir les parkings et extérieurs des copropriétés ?", r: "Oui, nous assurons le nettoyage des parkings, cours et abords par balayage et haute pression, en complément de l'entretien des parties communes." },
      { q: "Quels sont vos horaires d'intervention ?", r: "Nous intervenons du lundi au vendredi, de 7h à 21h, avec des plages adaptées à votre activité." },
    ],
    voisines: ['palaiseau', 'wissous', 'longjumeau', 'villebon-sur-yvette'],
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'saclay',
    nom: 'Saclay',
    cp: '91400',
    heroSub: 'Bureaux · Campus · Laboratoires · Parties communes',
    heroImg: `${IMG}/bg-camions-npg-parking-2.webp`,
    heroAlt: "Flotte de véhicules NPG, entreprise de nettoyage intervenant à Saclay",
    seoTitle: "Entreprise de nettoyage à Saclay (91) — NPG",
    seoDesc: "Bureaux, campus, laboratoires et parties communes : NPG assure l'entretien de vos locaux à Saclay et dans tout l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Saclay",
    heroDesc: "Vous cherchez une <strong>entreprise de nettoyage à Saclay</strong> ? NPG entretient bureaux, bâtiments de recherche et locaux d'entreprises au cœur du pôle scientifique et technologique du plateau de Saclay.",
    intro: "Saclay est au centre de l'un des premiers pôles scientifiques d'Europe : CEA, centres de recherche, campus universitaires et entreprises de R&D y sont implantés. NPG y intervient sur des bâtiments tertiaires et techniques exigeants, où la propreté répond à des standards élevés.",
    chapitres: [
      {
        h2: "Nettoyage de bureaux et de bâtiments de recherche à Saclay",
        texte: "Les organismes et entreprises du plateau de Saclay attendent un entretien régulier, discret et traçable. NPG met en place des protocoles précis pour les bureaux, espaces communs et zones d'accueil, avec des agents formés et un suivi documenté de chaque intervention.",
      },
      {
        h2: "Entretien des sols et des surfaces vitrées",
        texte: "Halls vitrés, grandes circulations et sols techniques caractérisent les bâtiments du secteur. Nous assurons l'entretien et la remise en état des sols (autolaveuse, monobrosse) ainsi que le nettoyage des surfaces vitrées, pour des espaces toujours nets.",
      },
    ],
    services: ['nettoyage-bureaux', 'nettoyage-sols', 'nettoyage-vitres', 'nettoyage-copropriete', 'entretien-espaces-verts', 'nettoyage-fin-de-chantier'],
    faq: [
      { q: "Intervenez-vous sur les campus et bâtiments de recherche ?", r: "Oui, NPG entretient bureaux, espaces communs et bâtiments tertiaires du plateau de Saclay, avec des protocoles adaptés et un suivi documenté." },
      { q: "Pouvez-vous remettre en état des sols techniques ?", r: "Oui, nous réalisons l'entretien et la remise en état des sols (carrelage, PVC, béton) à l'autolaveuse et à la monobrosse." },
      { q: "Proposez-vous un interlocuteur unique ?", r: "Oui, vous disposez d'un seul interlocuteur, du devis au suivi des prestations, pour simplifier la gestion de vos sites." },
    ],
    voisines: ['palaiseau', 'les-ulis', 'villebon-sur-yvette'],
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'les-ulis',
    nom: 'Les Ulis',
    prep: 'aux Ulis',
    cp: '91940',
    heroSub: 'Entrepôts · Bureaux · Courtabœuf · Commerces',
    heroImg: `${IMG}/camion-npg-devant-entrepot-logistique-npg.webp`,
    heroAlt: "Camionnette NPG devant un entrepôt logistique, nettoyage aux Ulis",
    seoTitle: "Entreprise de nettoyage aux Ulis (91) — NPG",
    seoDesc: "Entrepôts, bureaux du parc de Courtabœuf, commerces et sols : NPG nettoie vos locaux aux Ulis, dans tout l'Essonne (91). Devis gratuit sur demande.",
    h1: "Société de nettoyage aux Ulis",
    heroDesc: "Vous cherchez une <strong>entreprise de nettoyage aux Ulis</strong> ? NPG intervient sur les entrepôts, bureaux et commerces du parc d'activités de Courtabœuf, l'un des plus importants d'Île-de-France.",
    intro: "Les Ulis abritent une large partie du parc d'activités de Courtabœuf, immense zone d'entreprises, de bureaux et d'entrepôts. NPG y intervient pour le nettoyage des plateformes logistiques, des espaces tertiaires et des commerces, avec un matériel adapté aux grandes surfaces.",
    chapitres: [
      {
        h2: "Nettoyage d'entrepôts et de plateformes à Courtabœuf",
        texte: "Les entrepôts et bâtiments logistiques de Courtabœuf imposent l'entretien de vastes surfaces de sols, de quais et de zones de stockage. NPG mobilise autolaveuses et équipes dimensionnées pour ces volumes, en coordination avec votre exploitation.",
      },
      {
        h2: "Bureaux et commerces du parc d'activités",
        texte: "Le parc de Courtabœuf accueille aussi de nombreux sièges, bureaux et commerces. Nous assurons l'entretien régulier des plateaux tertiaires, des espaces d'accueil et des surfaces vitrées, avec des horaires adaptés à chaque entreprise.",
      },
    ],
    services: ['nettoyage-entrepot-logistique', 'nettoyage-industriel', 'nettoyage-bureaux', 'nettoyage-sols', 'nettoyage-vitres', 'nettoyage-commerces'],
    faq: [
      { q: "Intervenez-vous dans le parc de Courtabœuf ?", r: "Oui, NPG intervient sur l'ensemble du parc d'activités de Courtabœuf, aux Ulis comme sur les communes limitrophes de l'Essonne (91)." },
      { q: "Êtes-vous équipés pour les grandes surfaces d'entrepôts ?", r: "Oui, nous disposons d'autolaveuses et d'équipes dimensionnées pour le nettoyage des entrepôts, quais et zones de stockage." },
      { q: "Pouvez-vous intervenir hors des heures d'exploitation ?", r: "Oui, nous adaptons nos interventions à vos plannings, y compris tôt le matin, en soirée ou la nuit." },
    ],
    voisines: ['villebon-sur-yvette', 'palaiseau', 'saclay'],
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'villebon-sur-yvette',
    nom: 'Villebon-sur-Yvette',
    cp: '91140',
    heroSub: "Zone d'activité · Bureaux · Entrepôts · Commerces",
    heroImg: `${IMG}/bg-camions-npg-parking.webp`,
    heroAlt: "Camionnettes NPG stationnées, nettoyage à Villebon-sur-Yvette",
    seoTitle: "Entreprise de nettoyage à Villebon-sur-Yvette (91) — NPG",
    seoDesc: "Bureaux, entrepôts de la zone d'activité, commerces et vitres : NPG entretient vos locaux à Villebon-sur-Yvette, dans l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Villebon-sur-Yvette",
    heroDesc: "Besoin d'une <strong>entreprise de nettoyage à Villebon-sur-Yvette</strong> ? NPG entretient bureaux, entrepôts et commerces de la zone d'activité, rattachée au grand pôle de Courtabœuf.",
    intro: "Villebon-sur-Yvette partage avec Les Ulis une partie du parc de Courtabœuf et dispose de ses propres zones d'activité. NPG y intervient pour le nettoyage des bureaux, des entrepôts et des commerces, ainsi que pour l'entretien des résidences de la commune.",
    chapitres: [
      {
        h2: "Nettoyage de bureaux et d'entrepôts à Villebon-sur-Yvette",
        texte: "Les zones d'activité de Villebon-sur-Yvette regroupent bureaux, locaux d'entreprises et bâtiments logistiques. NPG y assure l'entretien des plateaux tertiaires comme des grandes surfaces de stockage, avec un matériel et des équipes adaptés à chaque configuration.",
      },
      {
        h2: "Commerces et copropriétés",
        texte: "La commune compte également des commerces et des résidences collectives. Nous prenons en charge le nettoyage des surfaces commerciales et l'entretien des parties communes, avec la régularité et le suivi attendus par les gestionnaires.",
      },
    ],
    services: ['nettoyage-bureaux', 'nettoyage-entrepot-logistique', 'nettoyage-commerces', 'nettoyage-sols', 'nettoyage-vitres', 'nettoyage-copropriete'],
    faq: [
      { q: "Intervenez-vous dans les zones d'activité de Villebon-sur-Yvette ?", r: "Oui, NPG intervient dans les zones d'activité de Villebon-sur-Yvette, dont la partie rattachée au parc de Courtabœuf, et dans les communes voisines de l'Essonne (91)." },
      { q: "Pouvez-vous entretenir à la fois bureaux et entrepôts ?", r: "Oui, nous adaptons nos prestations et notre matériel aux espaces tertiaires comme aux grandes surfaces logistiques, sur un même site si besoin." },
      { q: "Proposez-vous un contrat avec suivi régulier ?", r: "Oui, nous mettons en place un cahier des charges, une fréquence sur mesure et des comptes rendus de suivi, avec un interlocuteur unique." },
    ],
    voisines: ['les-ulis', 'palaiseau', 'massy', 'saclay'],
  },

  // 8 ─────────────────────────────────────────────────────────────
  {
    slug: 'wissous',
    nom: 'Wissous',
    cp: '91320',
    heroSub: 'Plateformes logistiques · Entrepôts · Bureaux · Sols',
    heroImg: `${IMG}/camion-npg-devant-entrepot-logistique-npg.webp`,
    heroAlt: "Camionnette NPG devant un entrepôt logistique à Wissous",
    seoTitle: "Entreprise de nettoyage à Wissous (91) — NPG",
    seoDesc: "Plateformes logistiques, entrepôts, bureaux et sols : NPG assure le nettoyage de vos sites à Wissous et dans tout l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Wissous",
    heroDesc: "Vous cherchez une <strong>entreprise de nettoyage à Wissous</strong> ? NPG intervient sur les plateformes logistiques, les entrepôts et les bureaux d'une commune proche d'Orly et des grands axes routiers.",
    intro: "Située aux portes d'Orly et à proximité immédiate de Rungis, Wissous accueille de nombreuses plateformes logistiques, entrepôts et entreprises. NPG y assure le nettoyage de grandes surfaces et l'entretien des espaces tertiaires associés, avec une logistique adaptée aux flux des sites.",
    chapitres: [
      {
        h2: "Nettoyage de plateformes logistiques et d'entrepôts à Wissous",
        texte: "Les entrepôts et plateformes de Wissous imposent l'entretien de vastes sols, de quais de chargement et de zones de stockage. NPG mobilise autolaveuses et équipes dédiées, en coordination avec votre exploitation pour intervenir sans perturber les flux.",
      },
      {
        h2: "Bureaux et locaux d'exploitation",
        texte: "Aux entrepôts s'ajoutent les bureaux d'exploitation, salles de pause et espaces sociaux. Nous assurons leur entretien régulier (sols, sanitaires, points de contact), pour un environnement de travail sain au quotidien.",
      },
    ],
    services: ['nettoyage-entrepot-logistique', 'nettoyage-industriel', 'nettoyage-sols', 'nettoyage-bureaux', 'nettoyage-haute-pression', 'nettoyage-vitres'],
    faq: [
      { q: "Intervenez-vous sur les plateformes logistiques de Wissous ?", r: "Oui, NPG intervient sur les entrepôts et plateformes logistiques de Wissous, avec un matériel et des équipes dimensionnés pour les grandes surfaces." },
      { q: "Pouvez-vous nettoyer les quais et zones extérieures ?", r: "Oui, nous assurons le nettoyage haute pression des quais de chargement, cours et abords, en complément de l'entretien intérieur." },
      { q: "Vous adaptez-vous aux flux d'exploitation ?", r: "Oui, nous planifions nos interventions selon vos créneaux d'activité, y compris en horaires décalés, pour ne pas perturber la logistique." },
    ],
    voisines: ['massy', 'longjumeau'],
  },

  // 9 ─────────────────────────────────────────────────────────────
  {
    slug: 'longjumeau',
    nom: 'Longjumeau',
    cp: '91160',
    heroSub: 'Copropriétés · Commerces · Bureaux · Vitres',
    heroImg: `${IMG}/camion-npg-devant-residence-npg.webp`,
    heroAlt: "Camionnette NPG devant une résidence à Longjumeau",
    seoTitle: "Entreprise de nettoyage à Longjumeau (91) — NPG",
    seoDesc: "Parties communes, commerces, bureaux et surfaces vitrées : NPG entretient vos locaux à Longjumeau et dans tout l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Longjumeau",
    heroDesc: "Vous recherchez une <strong>entreprise de nettoyage à Longjumeau</strong> ? NPG entretient les parties communes de copropriété, les commerces et les bureaux de cette ville traversée par la RN20.",
    intro: "Traversée par l'axe historique de la RN20, Longjumeau associe commerces de proximité, résidences collectives, bureaux et un centre hospitalier. NPG y assure l'entretien des parties communes, des surfaces commerciales et des espaces de travail, avec régularité et discrétion.",
    chapitres: [
      {
        h2: "Entretien des copropriétés et résidences à Longjumeau",
        texte: "Longjumeau compte de nombreuses copropriétés et résidences. Pour les syndics et conseils syndicaux, NPG entretient halls, escaliers, paliers, ascenseurs et locaux poubelles, et valorise le cadre de vie des habitants grâce à un suivi régulier et un interlocuteur unique.",
      },
      {
        h2: "Commerces et bureaux du centre-ville",
        texte: "Le long de la RN20 et dans le centre, commerces et bureaux ont besoin d'un entretien soigné qui reflète leur sérieux. Nous assurons le nettoyage des surfaces commerciales, des vitrines et des espaces de travail, sur des horaires adaptés à votre activité.",
      },
    ],
    services: ['nettoyage-copropriete', 'nettoyage-commerces', 'nettoyage-vitres', 'nettoyage-bureaux', 'nettoyage-sols', 'nettoyage-haute-pression'],
    faq: [
      { q: "Intervenez-vous pour les syndics de copropriété à Longjumeau ?", r: "Oui, NPG entretient les parties communes des copropriétés de Longjumeau pour les syndics et conseils syndicaux, avec un suivi régulier et un interlocuteur unique." },
      { q: "Nettoyez-vous les vitrines des commerces ?", r: "Oui, nous assurons le nettoyage des vitres et vitrines des commerces et bureaux, à la fréquence qui vous convient." },
      { q: "Proposez-vous des interventions ponctuelles ?", r: "Oui, au-delà des contrats réguliers, nous réalisons des interventions ponctuelles (remise en état, fin de chantier, grand nettoyage)." },
    ],
    voisines: ['massy', 'evry-courcouronnes', 'sainte-genevieve-des-bois', 'wissous'],
  },

  // 10 ────────────────────────────────────────────────────────────
  {
    slug: 'sainte-genevieve-des-bois',
    nom: 'Sainte-Geneviève-des-Bois',
    cp: '91700',
    heroSub: 'Copropriétés · Parties communes · Commerces · Sols',
    heroImg: `${IMG}/camion-npg-devant-residence-de-charme-npg.webp`,
    heroAlt: "Camionnette NPG devant une résidence à Sainte-Geneviève-des-Bois",
    seoTitle: "Entreprise de nettoyage à Sainte-Geneviève-des-Bois — NPG",
    seoDesc: "Parties communes, copropriétés, commerces et sols : NPG assure le nettoyage de vos locaux à Sainte-Geneviève-des-Bois, dans l'Essonne (91). Devis sur demande.",
    h1: "Société de nettoyage à Sainte-Geneviève-des-Bois",
    heroDesc: "Vous cherchez une <strong>entreprise de nettoyage à Sainte-Geneviève-des-Bois</strong> ? NPG entretient les parties communes de copropriété, les commerces et les bureaux de cette commune résidentielle de l'Essonne.",
    intro: "Commune résidentielle de l'Essonne, Sainte-Geneviève-des-Bois compte de nombreuses copropriétés, un centre commercial et des commerces de proximité. NPG y assure l'entretien régulier des parties communes et des surfaces commerciales, au service des syndics, des gestionnaires et des commerçants.",
    chapitres: [
      {
        h2: "Entretien des parties communes de copropriété à Sainte-Geneviève-des-Bois",
        texte: "Le parc résidentiel de Sainte-Geneviève-des-Bois représente l'essentiel de notre activité locale. NPG entretient halls, cages d'escalier, paliers, ascenseurs, parkings et locaux poubelles, avec un cahier des charges précis et des comptes rendus réguliers pour les syndics.",
      },
      {
        h2: "Commerces et bureaux",
        texte: "Autour du centre commercial et des axes commerçants, NPG assure le nettoyage des surfaces de vente, des vitrines et des bureaux. La propreté y est un véritable argument auprès de la clientèle et des visiteurs.",
      },
    ],
    services: ['nettoyage-copropriete', 'nettoyage-commerces', 'nettoyage-sols', 'nettoyage-vitres', 'nettoyage-haute-pression', 'entretien-espaces-verts'],
    faq: [
      { q: "Intervenez-vous pour les copropriétés de Sainte-Geneviève-des-Bois ?", r: "Oui, NPG entretient les parties communes des copropriétés et résidences de Sainte-Geneviève-des-Bois pour les syndics et conseils syndicaux, avec un suivi régulier." },
      { q: "Pouvez-vous nettoyer parkings et locaux poubelles ?", r: "Oui, nous assurons le nettoyage des parkings, cours, locaux poubelles et abords, par balayage et haute pression." },
      { q: "Travaillez-vous avec les commerçants ?", r: "Oui, nous entretenons surfaces de vente, vitrines et bureaux des commerces, à la fréquence et aux horaires qui conviennent à votre activité." },
    ],
    voisines: ['evry-courcouronnes', 'longjumeau', 'corbeil-essonnes'],
  },

];

/** Index par slug pour le template */
export const VILLES_MAP: Record<string, Ville> = Object.fromEntries(
  VILLES.map(v => [v.slug, v])
);
