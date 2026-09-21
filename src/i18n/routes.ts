export const langs = ['sr', 'en'] as const;
export type Lang = (typeof langs)[number];

// Slug svake stranice po jeziku. Prazan string = početna.
export const routes = {
  home: { sr: '', en: '' },
  about: { sr: 'o-nama', en: 'about' },
  beskraj: { sr: 'beskraj', en: 'beskraj' },
  wine: { sr: 'vino', en: 'wine' },
  contact: { sr: 'kontakt', en: 'contact' },
  privacy: { sr: 'privatnost', en: 'privacy' },
} as const;

export type PageKey = keyof typeof routes;

// Stranice u glavnoj navigaciji, tim redom.
export const navPages: PageKey[] = ['home', 'about', 'beskraj', 'wine', 'contact'];

export function pathFor(page: PageKey, lang: Lang): string {
  const slug = routes[page][lang];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}
