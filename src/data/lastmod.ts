// src/data/lastmod.ts
// Dates de dernière modification (lastmod) exposées dans le sitemap.
// Pour toute URL non listée, on retombe sur DEFAULT_LASTMOD.

export const DEFAULT_LASTMOD = '2026-05-23T10:00:00+02:00';

export const LASTMOD: Record<string, string> = {
  '/':                         '2026-05-23T10:00:00+02:00',
  '/a-propos/':                '2026-05-23T10:00:00+02:00',
  '/contact/':                 '2026-05-23T10:00:00+02:00',
  '/galerie/':                 '2026-05-23T10:00:00+02:00',
  '/mentions-legales/':        '2026-05-23T10:00:00+02:00',
  '/plan-du-site/':            '2026-05-23T10:00:00+02:00',
  '/politique-de-cookies-ue/': '2026-05-23T10:00:00+02:00',
};

/** Retourne la date lastmod pour une URL ou un chemin. Tolérant aux variations de slash. */
export function getLastmod(urlOrPath: string): string {
  let path = urlOrPath;
  try {
    const u = new URL(urlOrPath);
    path = u.pathname;
  } catch {
    // pas une URL absolue
  }
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/')) path = path + '/';
  return LASTMOD[path] ?? DEFAULT_LASTMOD;
}
