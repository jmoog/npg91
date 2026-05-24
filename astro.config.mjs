import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import { LASTMOD, DEFAULT_LASTMOD } from './src/data/lastmod';

export default defineConfig({
  site: 'https://societe-npg.fr',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  // Inline TOUS les CSS scopés d'Astro directement dans le HTML → supprime les
  // requêtes bloquantes (/_astro/index.css + /_astro/Layout.css, ~9 KiB) qui
  // ralentissaient le FCP/LCP. ('always' au lieu de 'auto' qui laissait passer
  // les feuilles > 4 KiB.) Le gros style.css public reste chargé en preload.
  build: { inlineStylesheets: 'always' },
  // Adapter Node en mode standalone — sert les fichiers statiques + les API
  // routes (ex: /api/devis) via un serveur Node minimal. serveur Node minimal.
  adapter: node({ mode: 'standalone' }),
  // Derrière le reverse proxy Traefik/Coolify, l'Origin perçu par Astro peut
  // différer du Host réel, ce qui déclenche des 403 sur les POST. La route
  // /api/devis a son propre honeypot + validation, pas de session exposée.
  security: { checkOrigin: false },
  // Redirections 301 pour les anciennes URLs WP (à compléter via GSC 404).
  redirects: {
    // Ancienne page devis consolidée vers /contact/
    '/devis-gratuit/': '/contact/',
    // Note : l'alias /sitemap.xml → /sitemap-index.xml est géré par l'endpoint
    // src/pages/sitemap.xml.ts (la redirection ici était cassée par trailingSlash).
    // '/ancienne-url-wp/': '/nouvelle-url-astro/',
  },
  integrations: [
    sitemap({
      // Pour chaque URL, on injecte la lastmod fournie côté client.
      // Astro normalise déjà les URLs (avec trailing slash via trailingSlash: 'always').
      serialize(item) {
        const u = new URL(item.url);
        let path = u.pathname;
        if (!path.endsWith('/')) path += '/';
        item.lastmod = LASTMOD[path] ?? DEFAULT_LASTMOD;

        // priorités : home > services > villes > pages standards
        if (path === '/') item.priority = 1.0;
        else if (path.startsWith('/services/')) item.priority = 0.8;
        else if (path.startsWith('/entreprise-nettoyage-')) item.priority = 0.7;
        else item.priority = 0.5;

        item.changefreq = 'monthly';
        return item;
      },
    }),
  ],
});
