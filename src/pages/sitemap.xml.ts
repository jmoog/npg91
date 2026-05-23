import type { APIRoute } from 'astro';

// /sitemap.xml → 301 vers le sitemap réellement généré par @astrojs/sitemap.
// Beaucoup de crawlers/outils tentent /sitemap.xml en premier ; on les redirige
// vers /sitemap-index.xml (qui référence sitemap-0.xml). Endpoint dynamique pour
// éviter la normalisation trailingSlash qui cassait la redirection en config.
export const prerender = false;

export const GET: APIRoute = () =>
  new Response(null, {
    status: 301,
    headers: { Location: '/sitemap-index.xml' },
  });
