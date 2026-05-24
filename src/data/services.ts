// src/data/services.ts
// Contenu des pages services (/services/<slug>/).
// Étude de mots-clés GSC — voir etude-mots-cles-services.md à la racine du projet.
// L'ordre du tableau définit l'ordre d'affichage (hub + menu) : priorité SEO décroissante.

const IMG = '/assets/img/photos-npg';

export interface ServiceFaq { q: string; r: string; }

export interface Service {
  slug: string;
  /** Nom court (menu, cartes, fil d'ariane) */
  nom: string;
  /** Accroche courte affichée dans le méga-menu et les cartes du hub */
  tagline: string;
  /** Catégorie de service concise pour le schema.org (serviceType), ex. "Nettoyage de bureaux" */
  serviceType?: string;
  /** Balise <title> */
  title: string;
  /** Meta description */
  description: string;
  /** Titre H1 de la page */
  h1: string;
  /** Image principale (hero) */
  heroImg: string;
  heroAlt: string;
  /** Si true, l'image hero est affichée en bannière large pleine largeur (image paysage) */
  heroWide?: boolean;
  /** Image spécifique pour la bande de la page d'accueil (sinon heroImg est utilisée) */
  homeImg?: string;
  /** Paragraphe d'introduction (peut contenir du HTML <strong>) */
  lead: string;
  /** Bloc "ce que comprend la prestation" */
  inclus: { titre: string; items: string[] };
  /** Bloc de contenu avec image. imgNarrow = image affichée compacte (source petite, anti-flou) */
  bloc: { titre: string; paragraphes: string[]; img: string; imgAlt: string; imgNarrow?: boolean };
  /** Galerie d'images optionnelle (affichée après le bloc de contenu) */
  gallery?: { img: string; alt: string }[];
  /** Arguments "pourquoi NPG" propres au service */
  atouts: string[];
  /** Questions fréquentes (alimente aussi le schema FAQPage) */
  faq: ServiceFaq[];
  /** Slugs des services connexes (maillage interne) */
  related: string[];
  /** Paragraphe optionnel (HTML autorisé) avec lien(s) contextualisé(s) vers d'autres services */
  relatedNote?: string;
}

export const SERVICES: Service[] = [
  // 1 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-bureaux',
    serviceType: "Nettoyage de bureaux",
    nom: 'Nettoyage de bureaux',
    tagline: 'Espaces de travail sains et nets',
    title: "Nettoyage de bureaux et locaux pro dans l'Essonne (91) | NPG",
    description: "Sols, sanitaires, vitres, corbeilles : NPG nettoie vos bureaux et locaux professionnels dans l'Essonne (91), en journée ou de nuit. Devis gratuit.",
    h1: "Des bureaux propres et sains pour vos équipes dans l'Essonne (91)",
    heroImg: `${IMG}/nettoyage-locaux-professionnels-npg.webp`,
    heroAlt: "Nettoyage de locaux professionnels et de bureaux par NPG dans l'Essonne",
    lead: "Des bureaux propres sont essentiels au bien-être de vos équipes comme à l'image de votre entreprise. <strong>NPG</strong> assure l'entretien régulier de vos <strong>bureaux et locaux professionnels dans toute l'Essonne (91)</strong>, avec des horaires adaptés à votre activité : tôt le matin, en soirée ou pendant les heures de bureau.",
    inclus: {
      titre: "Ce que comprend notre prestation de nettoyage de bureaux",
      items: [
        "Dépoussiérage des surfaces, mobilier et équipements",
        "Désinfection des points de contact (poignées, interrupteurs, téléphones)",
        "Aspiration et lavage des sols, entretien des moquettes",
        "Nettoyage et désinfection des sanitaires, réapprovisionnement des consommables",
        "Vidage des corbeilles et gestion du tri des déchets",
        "Entretien des espaces de pause, cuisines et salles de réunion",
      ],
    },
    bloc: {
      titre: "Un entretien régulier adapté à votre activité",
      paragraphes: [
        "Que vous occupiez un open space, un cabinet, une agence ou un plateau de plusieurs étages, nous définissons avec vous un cahier des charges et une fréquence d'intervention sur mesure : quotidienne, hebdomadaire ou mensuelle.",
        "Nos agents sont formés, suivis et discrets. Ils interviennent avec un matériel professionnel et des produits adaptés à chaque type de surface, pour un environnement de travail sain qui valorise votre entreprise auprès de vos collaborateurs comme de vos visiteurs.",
      ],
      img: `${IMG}/camion-npg-devant-entreprise-sylq-npg.webp`,
      imgAlt: "Camionnette NPG devant une entreprise cliente dans l'Essonne",
      imgNarrow: true,
    },
    gallery: [
      { img: `${IMG}/entretien-bureaux-espace-travail-npg.webp`,   alt: "Entretien d'un espace de travail de bureaux dans l'Essonne par NPG" },
      { img: `${IMG}/nettoyage-bureaux-aspirateur-dorsal-npg.webp`, alt: "Aspiration des sols de bureaux à l'aspirateur dorsal dans l'Essonne" },
      { img: `${IMG}/nettoyage-sanitaires-bureaux-npg.webp`,        alt: "Nettoyage et désinfection des sanitaires de bureaux dans l'Essonne" },
    ],
    atouts: [
      "Interventions en journée, en soirée ou tôt le matin selon votre organisation",
      "Un seul interlocuteur du devis au suivi des prestations",
      "Comptes rendus réguliers et contrôle qualité des interventions",
      "Contrats d'entretien souples, sans engagement de durée excessif",
    ],
    faq: [
      { q: "Intervenez-vous en dehors des heures d'ouverture de nos bureaux ?", r: "Oui. Nous adaptons nos horaires à votre activité : nous pouvons intervenir tôt le matin avant l'arrivée de vos équipes, le soir après leur départ, ou pendant la journée selon vos préférences." },
      { q: "Proposez-vous des contrats d'entretien réguliers pour les bureaux ?", r: "Oui, nous proposons des contrats quotidiens, hebdomadaires ou mensuels, ainsi que des prestations ponctuelles. La fréquence est définie avec vous en fonction de la surface et de la fréquentation de vos locaux." },
      { q: "Le devis pour le nettoyage de bureaux est-il gratuit ?", r: "Le devis est gratuit et sans engagement. Nous nous déplaçons sur place dans toute l'Essonne pour évaluer la surface et la nature de vos locaux avant de vous remettre une proposition détaillée." },
    ],
    related: ['nettoyage-vitres', 'nettoyage-sols', 'nettoyage-copropriete'],
  },

  // 2 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-copropriete',
    serviceType: "Nettoyage de parties communes",
    nom: 'Copropriété & parties communes',
    tagline: 'Halls, escaliers, copropriétés',
    title: "Nettoyage de copropriété et parties communes – 91 | NPG",
    description: "Halls, escaliers, locaux poubelles : NPG entretient les parties communes de vos immeubles dans l'Essonne (91). Syndics, un seul interlocuteur. Devis gratuit.",
    h1: "Entretien des parties communes pour syndics et copropriétés dans l'Essonne (91)",
    heroImg: `${IMG}/camion-npg-devant-residence-de-charme-npg.webp`,
    heroAlt: "Camionnette NPG devant une résidence de charme dans l'Essonne",
    heroWide: true,
    lead: "Halls, escaliers, paliers, ascenseurs, locaux poubelles : <strong>NPG</strong> entretient les <strong>parties communes de vos immeubles et copropriétés dans l'Essonne (91)</strong>. Syndics, gestionnaires et propriétaires, nous garantissons des espaces propres qui valorisent votre patrimoine et le cadre de vie des résidents.",
    inclus: {
      titre: "Notre prestation d'entretien des parties communes",
      items: [
        "Nettoyage des halls d'entrée, paliers, couloirs et escaliers",
        "Entretien des ascenseurs, miroirs et surfaces vitrées des communs",
        "Lavage des sols (carrelage, pierre, béton) et aspiration des tapis",
        "Nettoyage et désinfection des locaux poubelles, sortie et rentrée des bacs",
        "Dépoussiérage des boîtes aux lettres, rampes et points de contact",
        "Entretien des accès extérieurs et abords immédiats",
      ],
    },
    bloc: {
      titre: "Un prestataire fiable pour les syndics et gestionnaires",
      paragraphes: [
        "Nous savons combien la propreté des parties communes pèse dans la satisfaction des copropriétaires et locataires. NPG établit un planning d'intervention clair, avec une traçabilité des passages et un interlocuteur unique pour le conseil syndical.",
        "De la petite copropriété au grand ensemble résidentiel, nous adaptons la fréquence et le périmètre : entretien courant, sortie des conteneurs, nettoyage approfondi saisonnier. Notre objectif : des communs toujours présentables, sans mauvaises surprises.",
      ],
      img: `${IMG}/nettoyage-bacs-ordures-residence-npg.webp`,
      imgAlt: "Nettoyage et désinfection du local à ordures d'une résidence dans l'Essonne",
    },
    gallery: [
      { img: `${IMG}/nettoyage-entree-immeuble-habitat-collectif-npg.webp`, alt: "Nettoyage de l'entrée d'un immeuble d'habitat collectif dans l'Essonne" },
      { img: `${IMG}/nettoyage-allee-residence-essonne-npg.webp`,           alt: "Nettoyage d'une allée de résidence dans l'Essonne" },
      { img: `${IMG}/nettoyage-cour-exterieure-autolaveuse-npg.webp`,       alt: "Nettoyage d'une cour extérieure de copropriété à l'autolaveuse dans l'Essonne" },
    ],
    atouts: [
      "Interlocuteur unique pour le syndic et le conseil syndical",
      "Planning d'intervention et traçabilité des passages",
      "Sortie et rentrée des conteneurs à ordures incluses sur demande",
      "Interventions ponctuelles ou contrats annuels selon vos besoins",
    ],
    faq: [
      { q: "Travaillez-vous avec les syndics de copropriété ?", r: "Oui, une grande partie de notre activité concerne l'entretien de copropriétés pour le compte de syndics et de gestionnaires. Nous proposons un interlocuteur unique et des comptes rendus réguliers." },
      { q: "Gérez-vous la sortie des poubelles et l'entretien des locaux à conteneurs ?", r: "Oui. La sortie et la rentrée des bacs ainsi que le nettoyage et la désinfection du local poubelles peuvent être intégrés à votre contrat d'entretien des parties communes." },
      { q: "Intervenez-vous dans les petites copropriétés ?", r: "Oui, nous intervenons aussi bien pour les petites copropriétés que pour les grands ensembles résidentiels. La prestation est dimensionnée selon la taille de l'immeuble et la fréquence souhaitée." },
    ],
    related: ['nettoyage-haute-pression', 'entretien-espaces-verts', 'nettoyage-vitres'],
  },

  // 3 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-industriel',
    serviceType: "Nettoyage industriel",
    nom: 'Nettoyage industriel',
    tagline: 'Ateliers, usines, production',
    title: "Nettoyage industriel : ateliers et usines – Essonne (91)",
    description: "Sols techniques, ateliers, surfaces de production : NPG nettoie vos sites industriels dans l'Essonne (91). Matériel adapté, équipes formées. Devis gratuit.",
    h1: "Entretien des ateliers, usines et sites de production dans l'Essonne (91)",
    heroImg: `${IMG}/camion-npg-devant-entrepot-logistique-npg.webp`,
    heroAlt: "Camionnette NPG devant un entrepôt logistique dans l'Essonne",
    lead: "Ateliers, usines, lignes de production et surfaces techniques : le <strong>nettoyage industriel</strong> exige un matériel adapté et des équipes formées à vos contraintes de sécurité. <strong>NPG</strong> entretient vos <strong>sites de production dans l'Essonne (91)</strong>, dans le respect de vos impératifs de continuité d'activité.",
    inclus: {
      titre: "Nos prestations de nettoyage industriel",
      items: [
        "Nettoyage mécanisé des sols d'atelier à l'autolaveuse (béton, résine)",
        "Entretien des sites de production et des surfaces techniques",
        "Dépoussiérage des structures, machines et abords (hors process)",
        "Nettoyage des vestiaires, réfectoires et locaux sociaux",
        "Décapage et remise en état des sols industriels",
        "Interventions ponctuelles ou récurrentes selon votre production",
      ],
    },
    bloc: {
      titre: "Un nettoyage adapté aux contraintes de production",
      paragraphes: [
        "Les sites de production imposent des contraintes spécifiques : sécurité, continuité d'activité, surfaces techniques. Nous utilisons des autolaveuses et un équipement professionnel pour un rendement élevé, sans perturber vos lignes.",
        "Nous intervenons en coordination avec vos équipes, dans le respect de vos consignes de sécurité (EPI, zones réglementées) et de vos plages horaires, pour des ateliers propres, sûrs et conformes aux exigences d'hygiène.",
      ],
      img: `${IMG}/autolaveuse-entrepot-nettoyage-industriel-npg.webp`,
      imgAlt: "Nettoyage mécanisé d'un sol industriel à l'autolaveuse dans l'Essonne",
      imgNarrow: true,
    },
    gallery: [
      { img: `${IMG}/nettoyage-industriel-entrepot-npg.webp`,         alt: "Nettoyage industriel d'un entrepôt dans l'Essonne" },
      { img: `${IMG}/nettoyage-entrepot-autolaveuse-essonne-npg.webp`, alt: "Nettoyage d'un sol industriel à l'autolaveuse dans l'Essonne" },
      { img: `${IMG}/nettoyage-entrepot-logistique-2-npg.webp`,        alt: "Nettoyage d'un grand site industriel dans l'Essonne" },
    ],
    atouts: [
      "Autolaveuses et matériel adapté aux surfaces d'atelier",
      "Respect strict des consignes de sécurité de vos sites de production",
      "Interventions hors production ou en continuité d'activité",
      "Équipes formées au nettoyage de sites industriels",
    ],
    faq: [
      { q: "Disposez-vous du matériel pour de grandes surfaces d'atelier ?", r: "Oui. Nous utilisons des autolaveuses et un équipement professionnel adaptés aux ateliers et sites de production, pour un nettoyage efficace sans perturber vos lignes." },
      { q: "Pouvez-vous intervenir en dehors des heures de production ?", r: "Oui, nous adaptons nos plages horaires à votre exploitation afin de ne pas perturber votre activité, y compris tôt le matin, en soirée ou le week-end." },
      { q: "Quelle différence avec votre service entrepôts et logistique ?", r: "Cette page concerne les ateliers, usines et sites de production. Pour le nettoyage d'entrepôts, de plateformes logistiques et de quais de chargement, nous avons une prestation dédiée : voir notre page nettoyage d'entrepôts et logistique." },
    ],
    related: ['nettoyage-entrepot-logistique', 'nettoyage-sols', 'nettoyage-fin-de-chantier'],
    relatedNote: "Au-delà des ateliers et des sites de production, NPG est aussi spécialiste du <a href=\"/services/nettoyage-entrepot-logistique/\">nettoyage d'entrepôts et de plateformes logistiques</a> et du <a href=\"/services/nettoyage-sols/\">nettoyage et de l'entretien des sols industriels</a> dans l'Essonne (91). N'hésitez pas à nous contacter pour ces prestations.",
  },

  // 3bis ─────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-entrepot-logistique',
    serviceType: "Nettoyage d'entrepôts et de plateformes logistiques",
    nom: 'Entrepôts & logistique',
    tagline: 'Plateformes, stockage, quais',
    title: "Nettoyage d'entrepôts et plateformes logistiques – 91 | NPG",
    description: "Grandes surfaces béton, allées, quais : NPG nettoie vos entrepôts logistiques dans l'Essonne (91), de nuit ou le week-end, sans gêner vos flux. Devis.",
    h1: "Au service des exploitants d'entrepôts et de plateformes dans l'Essonne (91)",
    heroImg: `${IMG}/nettoyage-entrepot-logistique-npg.webp`,
    heroAlt: "Nettoyage d'un entrepôt logistique à l'autolaveuse dans l'Essonne par NPG",
    lead: "Entrepôts, plateformes logistiques, quais de chargement et zones de stockage : <strong>NPG</strong> assure le <strong>nettoyage de vos sites logistiques dans l'Essonne (91)</strong>, avec un matériel adapté aux très grandes surfaces et une organisation calée sur vos flux et vos contraintes de sécurité.",
    inclus: {
      titre: "Nos prestations pour les entrepôts et la logistique",
      items: [
        "Lavage mécanisé des grandes surfaces béton à l'autolaveuse autoportée",
        "Entretien des allées de circulation, zones de stockage et de picking",
        "Nettoyage des quais de chargement et zones de réception / expédition",
        "Dépoussiérage des racks, structures et surfaces en hauteur",
        "Entretien des bureaux, vestiaires et locaux sociaux de la plateforme",
        "Nettoyage avant prise à bail ou remise en état de plateforme",
      ],
    },
    bloc: {
      titre: "Au service des exploitants logistiques",
      paragraphes: [
        "Une plateforme logistique ne s'arrête jamais vraiment : la propreté doit se faire sans interrompre les flux. Nous organisons nos interventions sur vos plages creuses, de nuit ou le week-end, pour des sols et des allées toujours nets, sans gêner la préparation de commandes.",
        "Surfaces de plusieurs milliers de mètres carrés, marquage au sol à préserver, circulation d'engins : nous utilisons des autolaveuses autoportées et des protocoles adaptés aux entrepôts, dans le strict respect de vos consignes de sécurité.",
      ],
      img: `${IMG}/nettoyage-entrepot-logistique-autolaveuse-npg.webp`,
      imgAlt: "Nettoyage des allées d'un entrepôt logistique à l'autolaveuse autoportée dans l'Essonne",
      imgNarrow: true,
    },
    gallery: [
      { img: `${IMG}/equipe-nettoyage-entrepot-logistique-npg.webp`, alt: "Équipe NPG en intervention dans un entrepôt logistique dans l'Essonne" },
      { img: `${IMG}/nettoyage-entrepot-logistique-allee-npg.webp`,   alt: "Nettoyage d'une allée de circulation d'entrepôt logistique dans l'Essonne" },
      { img: `${IMG}/nettoyage-entrepot-autolaveuse-2-npg.webp`,      alt: "Nettoyage du sol d'un entrepôt à l'autolaveuse autoportée dans l'Essonne" },
    ],
    atouts: [
      "Autolaveuses autoportées pour les très grandes surfaces",
      "Interventions de nuit ou le week-end, sans interrompre vos flux",
      "Respect du marquage au sol et des règles de circulation des engins",
      "Équipes formées aux contraintes de sécurité des entrepôts",
    ],
    faq: [
      { q: "Pouvez-vous nettoyer des entrepôts de plusieurs milliers de m² ?", r: "Oui. Nous utilisons des autolaveuses autoportées et un matériel adapté aux très grandes surfaces, pour un nettoyage efficace des entrepôts et plateformes logistiques sans ralentir votre exploitation." },
      { q: "Intervenez-vous sans interrompre l'activité de la plateforme ?", r: "Oui, nous calons nos interventions sur vos plages creuses, de nuit ou le week-end, afin de maintenir la propreté des sols et des allées sans gêner la préparation de commandes." },
      { q: "Nettoyez-vous les quais de chargement et les zones de stockage ?", r: "Oui, les quais de chargement, zones de réception/expédition, allées de circulation et zones de picking font partie de notre prestation pour les sites logistiques." },
    ],
    related: ['nettoyage-industriel', 'nettoyage-sols', 'nettoyage-fin-de-chantier'],
    relatedNote: "NPG intervient également pour le <a href=\"/services/nettoyage-industriel/\">nettoyage industriel d'ateliers et de sites de production</a> et pour le <a href=\"/services/nettoyage-sols/\">nettoyage et l'entretien des sols</a> dans l'Essonne (91). N'hésitez pas à nous contacter pour ces prestations.",
  },

  // 4 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-commerces',
    serviceType: "Nettoyage de commerces",
    nom: 'Commerces & magasins',
    tagline: 'Boutiques, magasins, restaurants',
    title: "Nettoyage de commerces et magasins – Essonne (91) | NPG",
    description: "Surfaces de vente, vitrines, sols : NPG nettoie vos commerces, boutiques et restaurants dans l'Essonne (91), hors heures d'ouverture. Devis gratuit.",
    h1: "Entretien de vos boutiques, magasins et restaurants dans l'Essonne (91)",
    heroImg: `${IMG}/nettoyage-local-commercial-npg.webp`,
    heroAlt: "Nettoyage d'un local commercial dans l'Essonne par NPG",
    lead: "Un commerce propre et accueillant donne envie d'entrer et de revenir. <strong>NPG</strong> assure le <strong>nettoyage de vos commerces, boutiques, magasins et restaurants dans l'Essonne (91)</strong>, avec des interventions programmées en dehors de vos heures d'ouverture.",
    inclus: {
      titre: "Notre prestation pour les commerces",
      items: [
        "Nettoyage des surfaces de vente, rayons et présentoirs",
        "Vitrines et surfaces vitrées sans traces, façades de magasin",
        "Lavage et entretien des sols (carrelage, PVC, parquet)",
        "Sanitaires clients et personnel, cabines d'essayage",
        "Espaces de restauration : salles, cuisines, sols dégraissés",
        "Sortie des déchets et entretien des réserves",
      ],
    },
    bloc: {
      titre: "Des interventions qui respectent votre activité",
      paragraphes: [
        "Boutiques, enseignes, magasins, restaurants : chaque commerce a ses contraintes. Nous intervenons avant l'ouverture ou après la fermeture, pour que vos clients trouvent toujours un espace impeccable sans perturber votre exploitation.",
        "Nous adaptons les produits et les protocoles à votre secteur, notamment pour la restauration où l'hygiène des sols et des surfaces est une exigence réglementaire autant qu'un gage de confiance pour la clientèle.",
      ],
      img: `${IMG}/nettoyage-sols-restaurant-npg.webp`,
      imgAlt: "Nettoyage du sol d'un restaurant dans l'Essonne par NPG",
    },
    gallery: [
      { img: `${IMG}/camionnette-npg-gare-de-lyon-npg.webp`, alt: "Camionnette NPG devant un site commercial" },
      { img: `${IMG}/nettoyage-cuisine-locaux-npg.webp`,      alt: "Nettoyage de la cuisine d'un local de restauration dans l'Essonne" },
    ],
    atouts: [
      "Interventions avant l'ouverture ou après la fermeture",
      "Vitrines et façades soignées pour valoriser votre enseigne",
      "Protocoles d'hygiène adaptés à la restauration",
      "Contrats récurrents ou interventions ponctuelles",
    ],
    faq: [
      { q: "Intervenez-vous avant l'ouverture ou après la fermeture du magasin ?", r: "Oui. Nous programmons nos interventions en dehors de vos heures d'ouverture afin que votre commerce soit impeccable à l'arrivée de vos clients, sans gêner votre activité." },
      { q: "Nettoyez-vous aussi les vitrines et façades de commerce ?", r: "Oui, le nettoyage des vitrines, surfaces vitrées et façades de magasin fait partie de nos prestations pour les commerces, en complément de l'entretien intérieur." },
      { q: "Prenez-vous en charge les restaurants et espaces de restauration ?", r: "Oui, nous intervenons dans les restaurants avec des protocoles adaptés : dégraissage des sols, nettoyage des cuisines et des salles, dans le respect des exigences d'hygiène." },
    ],
    related: ['nettoyage-vitres', 'nettoyage-sols', 'nettoyage-bureaux'],
  },

  // 5 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-haute-pression',
    serviceType: "Nettoyage haute pression",
    nom: 'Nettoyage haute pression',
    tagline: 'Façades, terrasses, parkings',
    title: "Nettoyage haute pression : façades, terrasses, parkings (91)",
    description: "Façades, bardages, terrasses, dalles, parkings : NPG décrasse vos surfaces extérieures à la haute pression dans l'Essonne (91). Devis gratuit.",
    h1: "Décrassage en profondeur des surfaces extérieures dans l'Essonne (91)",
    heroImg: `${IMG}/nettoyage-haute-pression-terrasse-npg.webp`,
    heroAlt: "Nettoyage haute pression d'une terrasse extérieure dans l'Essonne",
    heroWide: true,
    lead: "Façades encrassées, bardages, terrasses, dalles, allées et parkings : le <strong>nettoyage haute pression</strong> élimine en profondeur salissures, mousses et traces de pollution. <strong>NPG</strong> redonne un aspect net à toutes vos <strong>surfaces extérieures dans l'Essonne (91)</strong>, dans le respect des supports.",
    inclus: {
      titre: "Nos prestations de nettoyage haute pression",
      items: [
        "Nettoyage de façades et bardages encrassés",
        "Décrassage de terrasses, dalles et margelles",
        "Allées, cours, cheminements piétons et parvis",
        "Parkings extérieurs et couverts, places et voies de circulation",
        "Locaux poubelles et zones techniques",
        "Démoussage et traitement des surfaces minérales",
      ],
    },
    bloc: {
      titre: "Un décrassage en profondeur, sans abîmer vos supports",
      paragraphes: [
        "Le nettoyage haute pression demande de doser la pression et de choisir la bonne technique selon le support : pierre, béton, carrelage, bardage métallique ou composite. Nous adaptons notre matériel pour décrasser efficacement sans détériorer vos surfaces.",
        "Idéal pour les copropriétés, les entreprises et les collectivités, ce nettoyage extérieur redonne immédiatement un aspect soigné à vos abords et prolonge la durée de vie de vos revêtements.",
      ],
      img: `${IMG}/materiel-nettoyage-haute-pression-npg.webp`,
      imgAlt: "Matériel de nettoyage haute pression NPG en action dans l'Essonne",
      imgNarrow: true,
    },
    gallery: [
      { img: `${IMG}/camions-npg-parking-npg.webp`,                    alt: "Camionnettes NPG sur un parking dans l'Essonne" },
      { img: `${IMG}/decrassage-terrasse-carrelage-npg.webp`,          alt: "Décrassage d'une terrasse carrelée à la haute pression dans l'Essonne" },
      { img: `${IMG}/nettoyage-cour-immeuble-haute-pression-npg.webp`, alt: "Nettoyage haute pression de la cour d'un immeuble dans l'Essonne" },
    ],
    atouts: [
      "Pression et technique adaptées à chaque support",
      "Idéal pour copropriétés, entreprises et collectivités",
      "Démoussage et traitement des surfaces minérales",
      "Intervention sur surfaces en hauteur (perche télescopique)",
    ],
    faq: [
      { q: "Le nettoyage haute pression risque-t-il d'abîmer mes surfaces ?", r: "Non, à condition d'adapter la pression et la technique au support. Nous évaluons la nature de vos surfaces (pierre, béton, bardage…) pour décrasser efficacement sans les détériorer." },
      { q: "Nettoyez-vous les parkings de copropriété et d'entreprise ?", r: "Oui, le nettoyage haute pression des parkings extérieurs et couverts (places, voies de circulation, locaux techniques) fait partie de nos interventions courantes." },
      { q: "Pouvez-vous nettoyer des façades en hauteur ?", r: "Oui, nous disposons de perches télescopiques et du matériel adapté pour le nettoyage des façades et surfaces en hauteur, en toute sécurité." },
    ],
    related: ['nettoyage-copropriete', 'entretien-espaces-verts', 'nettoyage-sols'],
  },

  // 6 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-vitres',
    serviceType: "Nettoyage de vitres",
    nom: 'Surfaces vitrées',
    tagline: 'Vitres, vitrines, vérandas',
    title: "Nettoyage de vitres et surfaces vitrées – Essonne (91) | NPG",
    description: "Sans traces, intérieur comme extérieur : NPG nettoie vos vitres, vitrines et vérandas dans l'Essonne (91), en hauteur si besoin. Devis gratuit.",
    h1: "Vitres, vitrines et vérandas sans traces dans l'Essonne (91)",
    heroImg: `${IMG}/nettoyage-vitres-bureaux-essonne-npg.webp`,
    heroAlt: "Nettoyage des vitres de bureaux dans l'Essonne par NPG",
    heroWide: true,
    lead: "Des surfaces vitrées parfaitement nettes reflètent le sérieux de votre entreprise. <strong>NPG</strong> assure le <strong>nettoyage professionnel des vitres, vitrines et vérandas dans l'Essonne (91)</strong>, pour les bureaux, les commerces et les copropriétés.",
    inclus: {
      titre: "Notre prestation de nettoyage de vitres",
      items: [
        "Vitres intérieures et extérieures, baies vitrées",
        "Vitrines et devantures de commerce sans traces",
        "Vérandas, verrières et cloisons vitrées",
        "Châssis, encadrements et rebords de fenêtres",
        "Surfaces vitrées des parties communes d'immeubles",
        "Nettoyage en hauteur avec perche télescopique",
      ],
    },
    bloc: {
      titre: "Un résultat sans traces, en intérieur comme en extérieur",
      paragraphes: [
        "Le nettoyage de vitres professionnelles ne s'improvise pas : matériel adapté, eau osmosée et technique de raclage permettent d'obtenir des surfaces parfaitement transparentes, sans traces ni résidus.",
        "Nous intervenons ponctuellement ou dans le cadre d'un contrat régulier, à la fréquence qui convient à votre activité, y compris pour les surfaces vitrées difficiles d'accès ou en hauteur.",
      ],
      img: `${IMG}/nettoyage-surfaces-vitrees-veranda-npg.webp`,
      imgAlt: "Nettoyage d'une véranda et de surfaces vitrées dans l'Essonne",
      imgNarrow: true,
    },
    atouts: [
      "Résultat sans traces grâce à un matériel professionnel",
      "Vitres intérieures et extérieures, en hauteur si besoin",
      "Idéal bureaux, vitrines de commerce et copropriétés",
      "Prestation ponctuelle ou contrat régulier",
    ],
    faq: [
      { q: "Nettoyez-vous les vitres en hauteur et difficiles d'accès ?", r: "Oui, nous disposons de perches télescopiques et du matériel adapté pour atteindre les surfaces vitrées en hauteur, en toute sécurité." },
      { q: "À quelle fréquence faut-il nettoyer les vitres professionnelles ?", r: "Cela dépend de l'exposition et de l'activité. Pour des vitrines de commerce, un passage régulier est conseillé ; pour des bureaux, une fréquence mensuelle ou trimestrielle convient souvent. Nous définissons ce rythme avec vous." },
      { q: "Intervenez-vous sur les vitrines de magasins ?", r: "Oui, le nettoyage des vitrines et devantures de commerce fait partie de nos prestations, en complément ou non de l'entretien intérieur de votre point de vente." },
    ],
    related: ['nettoyage-bureaux', 'nettoyage-commerces', 'nettoyage-copropriete'],
  },

  // 7 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-sols',
    serviceType: "Nettoyage et entretien des sols",
    nom: 'Nettoyage des sols',
    tagline: 'Autolaveuse, monobrosse, moquettes',
    title: "Nettoyage et entretien des sols professionnels – 91 | NPG",
    description: "Autolaveuse, monobrosse, injection-extraction : NPG entretient et rénove tous vos sols professionnels dans l'Essonne (91). Tous revêtements. Devis gratuit.",
    h1: "Décapage, cristallisation et entretien de tous vos sols dans l'Essonne (91)",
    heroImg: `${IMG}/nettoyage-sol-autolaveuse-salle-npg.webp`,
    heroAlt: "Nettoyage d'un sol à l'autolaveuse dans l'Essonne par NPG",
    lead: "Carrelage, PVC, béton, parquet, moquette : <strong>NPG</strong> remet en état et entretient tous vos <strong>sols professionnels dans l'Essonne (91)</strong> avec un matériel adapté (autolaveuse, monobrosse, injection-extraction). Une obligation d'hygiène et un vrai confort pour les occupants.",
    inclus: {
      titre: "Nos prestations sur tous types de sols",
      items: [
        "Lavage mécanisé à l'autolaveuse des grandes surfaces",
        "Décapage et remise en état des sols encrassés",
        "Cristallisation et lustrage des sols pierre et marbre",
        "Shampooing de moquettes par injection-extraction",
        "Entretien des sols PVC, carrelage, béton et parquet",
        "Protection et métallisation des revêtements",
      ],
    },
    bloc: {
      titre: "La bonne technique pour chaque revêtement",
      paragraphes: [
        "Chaque sol appelle un traitement spécifique : autolaveuse pour les grandes surfaces, monobrosse et décapage pour raviver un sol terni, cristallisation pour les pierres calcaires, injection-extraction pour les moquettes. Nous choisissons la méthode la mieux adaptée à votre revêtement.",
        "Au-delà de l'aspect, un sol bien entretenu dure plus longtemps et garantit la sécurité des occupants. Nous intervenons en entretien courant comme en remise en état ponctuelle.",
      ],
      img: `${IMG}/injection-extraction-escalier-npg.webp`,
      imgAlt: "Shampooing de moquette par injection-extraction dans l'Essonne",
      imgNarrow: true,
    },
    gallery: [
      { img: `${IMG}/polisseuse-parquet-npg.webp`,                 alt: "Cristallisation et lustrage d'un parquet à la polisseuse dans l'Essonne" },
      { img: `${IMG}/nettoyage-moquette-rouge-machine-npg.webp`,   alt: "Shampooing d'une moquette rouge à la machine dans l'Essonne" },
      { img: `${IMG}/shampoing-moquette-escalier-npg.webp`,        alt: "Shampooing d'une moquette d'escalier dans l'Essonne" },
      { img: `${IMG}/remise-en-etat-sol-local-npg.webp`,           alt: "Remise en état du sol d'un local professionnel dans l'Essonne" },
    ],
    atouts: [
      "Matériel professionnel : autolaveuse, monobrosse, injection-extraction",
      "Tous revêtements : carrelage, PVC, béton, parquet, moquette",
      "Décapage, cristallisation et remise en état",
      "Entretien courant ou intervention ponctuelle",
    ],
    faq: [
      { q: "Quels types de sols pouvez-vous entretenir ?", r: "Tous les revêtements professionnels : carrelage, PVC, béton, parquet, pierre, marbre et moquette. Nous adaptons la technique (autolaveuse, monobrosse, cristallisation, injection-extraction) au type de sol." },
      { q: "Faites-vous la remise en état d'un sol très encrassé ?", r: "Oui, nous réalisons le décapage et la remise en état des sols ternis ou encrassés, suivis d'une protection si nécessaire, pour leur redonner leur aspect d'origine." },
      { q: "Nettoyez-vous les moquettes ?", r: "Oui, nous réalisons le shampooing de moquettes par injection-extraction, qui ravive les couleurs et élimine les taches incrustées sans détremper la fibre." },
    ],
    related: ['nettoyage-bureaux', 'nettoyage-industriel', 'nettoyage-fin-de-chantier'],
  },

  // 8 ───────────────────────────────────────────────────────────
  {
    slug: 'entretien-espaces-verts',
    serviceType: "Entretien d'espaces verts",
    nom: 'Entretien des espaces verts',
    tagline: 'Tonte, haies, abords',
    title: "Entretien des espaces verts dans l'Essonne (91) | NPG",
    description: "NPG, entreprise de nettoyage dans l'Essonne (91), entretient les espaces verts des professionnels : tonte, taille de haies, désherbage. Devis gratuit.",
    h1: "Tonte, taille de haies et entretien des extérieurs dans l'Essonne (91)",
    heroImg: `${IMG}/bg-camion-npg-karcher-espaces-verts.webp`,
    heroAlt: "Camionnette NPG dans le parc arboré d'une résidence dans l'Essonne",
    heroWide: true,
    lead: "Les abords de votre résidence ou de vos locaux participent à la valeur de votre patrimoine. <strong>NPG</strong> prend en charge l'<strong>entretien des espaces verts des professionnels dans l'Essonne (91)</strong> : tonte, taille, débroussaillage et entretien des extérieurs.",
    inclus: {
      titre: "Nos prestations d'entretien des espaces verts",
      items: [
        "Tonte des pelouses et ramassage des déchets de coupe",
        "Taille des haies, arbustes et massifs",
        "Débroussaillage et désherbage des allées et abords",
        "Entretien des massifs et bordures",
        "Ramassage des feuilles et nettoyage des extérieurs",
        "Évacuation des déchets verts",
      ],
    },
    bloc: {
      titre: "Des extérieurs soignés toute l'année",
      paragraphes: [
        "Un extérieur entretenu valorise immédiatement une résidence ou un site d'entreprise. Nous établissons un calendrier d'interventions adapté aux saisons : tontes régulières au printemps et en été, taille et nettoyage à l'automne.",
        "En complément de l'entretien des parties communes et du nettoyage haute pression des allées, l'entretien des espaces verts permet de confier l'ensemble de vos extérieurs à un interlocuteur unique.",
      ],
      img: `${IMG}/nettoyage-exterieur-residence-npg.webp`,
      imgAlt: "Nettoyage et entretien des extérieurs d'une résidence dans l'Essonne",
      imgNarrow: true,
    },
    gallery: [
      { img: `${IMG}/taille-haie-entretien-espaces-verts-npg.webp`, alt: "Taille de haie réalisée par NPG dans l'Essonne" },
      { img: `${IMG}/entretien-haies-residence-npg.webp`,           alt: "Entretien des haies d'une résidence dans l'Essonne" },
      { img: `${IMG}/taille-arbustes-espaces-verts-npg.webp`,       alt: "Taille des arbustes et massifs dans l'Essonne" },
    ],
    atouts: [
      "Calendrier d'intervention adapté aux saisons",
      "Évacuation des déchets verts incluse",
      "Complémentaire de l'entretien des parties communes",
      "Contrat annuel ou interventions ponctuelles",
    ],
    faq: [
      { q: "Proposez-vous des contrats annuels d'entretien des espaces verts ?", r: "Oui, nous proposons des contrats annuels avec un calendrier d'interventions adapté aux saisons, ainsi que des prestations ponctuelles selon vos besoins." },
      { q: "Évacuez-vous les déchets verts après l'intervention ?", r: "Oui, le ramassage et l'évacuation des déchets de coupe et déchets verts sont inclus dans nos prestations d'entretien des espaces verts." },
      { q: "Pouvez-vous entretenir à la fois les espaces verts et les parties communes ?", r: "Oui, c'est même l'un de nos atouts : vous confiez l'ensemble de vos extérieurs et de vos communs à un seul interlocuteur, ce qui simplifie la gestion et le suivi." },
    ],
    related: ['nettoyage-copropriete', 'nettoyage-haute-pression', 'nettoyage-collectivites'],
  },

  // 9 ───────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-fin-de-chantier',
    serviceType: "Nettoyage de fin de chantier",
    nom: 'Fin de chantier',
    tagline: 'Après travaux, remise en état',
    title: "Nettoyage de fin de chantier et après travaux – 91 | NPG",
    description: "Dépoussiérage, traces de peinture, vitres, sols : NPG remet vos locaux en état après travaux dans l'Essonne (91). Intervention rapide. Devis gratuit.",
    h1: "Remise en état de vos locaux avant livraison dans l'Essonne (91)",
    heroImg: `${IMG}/nettoyage-fin-de-chantier-local-npg.webp`,
    heroAlt: "Nettoyage de fin de chantier d'un local professionnel dans l'Essonne",
    lead: "Après des travaux ou avant une remise des clés, <strong>NPG</strong> prend en charge le <strong>nettoyage de fin de chantier et la remise en état de vos locaux dans l'Essonne (91)</strong> : élimination des poussières et résidus, dégraissage, vitres et sols prêts à la livraison.",
    inclus: {
      titre: "Notre prestation de nettoyage après travaux",
      items: [
        "Élimination des poussières et résidus de chantier",
        "Décollage des traces de peinture, colle et adhésifs",
        "Nettoyage des vitres, châssis et menuiseries",
        "Lavage et lustrage des sols, aspiration en profondeur",
        "Nettoyage des sanitaires et points d'eau neufs",
        "Évacuation des derniers déchets et finitions avant livraison",
      ],
    },
    bloc: {
      titre: "Des locaux prêts à être livrés ou occupés",
      paragraphes: [
        "Le nettoyage de fin de chantier est une étape décisive : c'est elle qui révèle la qualité des travaux et permet une livraison soignée. Nous intervenons rapidement, après le passage des différents corps de métier, pour rendre les locaux parfaitement propres.",
        "Bureaux, commerces, logements, locaux professionnels : nous adaptons notre intervention à la nature du chantier et à vos délais, pour une remise en état soignée jusqu'aux finitions.",
      ],
      img: `${IMG}/remise-en-etat-bureaux-npg.webp`,
      imgAlt: "Remise en état de bureaux après travaux dans l'Essonne par NPG",
      imgNarrow: true,
    },
    atouts: [
      "Intervention rapide après le passage des artisans",
      "Élimination des poussières fines et résidus de chantier",
      "Décollage des traces de peinture, colle et adhésifs",
      "Remise en état soignée jusqu'aux finitions",
    ],
    faq: [
      { q: "Sous quel délai pouvez-vous intervenir après des travaux ?", r: "Nous nous adaptons à vos délais de livraison. Une fois les corps de métier passés, nous pouvons intervenir rapidement pour rendre les locaux propres dans les temps." },
      { q: "Enlevez-vous les traces de peinture et de colle ?", r: "Oui, le décollage des traces de peinture, de colle et d'adhésifs fait partie de la prestation de nettoyage de fin de chantier, en plus du dépoussiérage et du lavage des sols." },
      { q: "Intervenez-vous sur tous types de chantiers ?", r: "Oui, nous réalisons le nettoyage de fin de chantier pour les bureaux, commerces, logements et locaux professionnels, en adaptant notre intervention à la nature du chantier." },
    ],
    related: ['nettoyage-sols', 'nettoyage-vitres', 'nettoyage-industriel'],
  },

  // 10 ──────────────────────────────────────────────────────────
  {
    slug: 'nettoyage-collectivites',
    serviceType: "Nettoyage de bâtiments publics et collectivités",
    nom: 'Collectivités & bâtiments publics',
    tagline: 'Administrations, établissements publics',
    title: "Nettoyage de collectivités et bâtiments publics – 91 | NPG",
    description: "Mairies, administrations, salles polyvalentes : NPG entretient vos bâtiments publics dans l'Essonne (91). Protocoles d'hygiène adaptés. Marchés publics.",
    h1: "Entretien des mairies, administrations et bâtiments publics dans l'Essonne (91)",
    heroImg: `${IMG}/equipe-nettoyage-professionnel-npg.webp`,
    heroAlt: "L'équipe de nettoyage professionnel NPG dans l'Essonne",
    heroWide: true,
    homeImg: `${IMG}/nettoyage-sols-restaurant-npg.webp`,
    lead: "Mairies, administrations, salles polyvalentes et locaux de collectivités accueillent du public et exigent une hygiène irréprochable. <strong>NPG</strong> assure le <strong>nettoyage des bâtiments publics et collectivités dans l'Essonne (91)</strong>, avec des protocoles adaptés et des équipes formées.",
    inclus: {
      titre: "Nos prestations pour les collectivités",
      items: [
        "Entretien des bureaux d'administration et accueils du public",
        "Nettoyage des salles polyvalentes, salles de réunion et de réception",
        "Sanitaires collectifs et points de contact à forte fréquentation",
        "Lavage mécanisé des sols des grandes salles",
        "Entretien des halls, couloirs et circulations",
        "Interventions ponctuelles pour événements et manifestations",
      ],
    },
    bloc: {
      titre: "Une hygiène adaptée aux lieux recevant du public",
      paragraphes: [
        "Les bâtiments publics reçoivent un flux important de visiteurs : la désinfection régulière des points de contact et des sanitaires y est primordiale. Nous mettons en place des protocoles d'hygiène adaptés à la fréquentation de chaque site.",
        "Réactifs et organisés, nous intervenons aussi bien pour l'entretien courant que pour des prestations ponctuelles (nettoyage après une manifestation, remise en état d'une salle), au service des administrations et des collectivités de l'Essonne.",
      ],
      img: `${IMG}/nettoyage-salle-reception-npg.webp`,
      imgAlt: "Nettoyage d'une salle de réception d'un bâtiment public dans l'Essonne",
      imgNarrow: true,
    },
    gallery: [
      { img: `${IMG}/nettoyage-salle-polyvalente-autolaveuse-npg.webp`, alt: "Lavage mécanisé du sol d'une salle polyvalente dans l'Essonne" },
      { img: `${IMG}/nettoyage-sanitaires-salle-de-bain-npg.webp`,      alt: "Nettoyage et désinfection de sanitaires collectifs dans l'Essonne" },
      { img: `${IMG}/nettoyage-sol-couloir-immeuble-npg.webp`,          alt: "Nettoyage du sol d'un couloir de bâtiment public dans l'Essonne" },
    ],
    atouts: [
      "Protocoles d'hygiène adaptés aux lieux recevant du public",
      "Désinfection renforcée des points de contact et sanitaires",
      "Entretien courant et interventions après événements",
      "Équipes formées, réactives et organisées",
    ],
    faq: [
      { q: "Intervenez-vous pour les mairies et administrations ?", r: "Oui, nous assurons le nettoyage des bâtiments publics, mairies, administrations et locaux de collectivités, avec des protocoles d'hygiène adaptés à l'accueil du public." },
      { q: "Pouvez-vous nettoyer une salle polyvalente après une manifestation ?", r: "Oui, nous réalisons des interventions ponctuelles de nettoyage et de remise en état des salles polyvalentes et de réception après événements et manifestations." },
      { q: "Adaptez-vous l'hygiène à la fréquentation des lieux ?", r: "Oui, nous renforçons la désinfection des points de contact et des sanitaires en fonction de la fréquentation de chaque site, pour garantir une hygiène irréprochable dans les lieux recevant du public." },
    ],
    related: ['nettoyage-bureaux', 'nettoyage-sols', 'entretien-espaces-verts'],
  },
];

/** Accès rapide par slug */
export const SERVICE_BY_SLUG: Record<string, Service> =
  Object.fromEntries(SERVICES.map(s => [s.slug, s]));
