import sr from './sr';
import en from './en';
import { langs, pathFor, routes, type Lang, type PageKey } from './routes';

const dicts = { sr, en };

export function t(lang: Lang) {
  return dicts[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'sr' ? 'en' : 'sr';
}

// Putanje iste stranice na svim jezicima (za prekidač jezika i hreflang).
export function alternates(page: PageKey) {
  return langs.map((lang) => ({ lang, path: pathFor(page, lang) }));
}

// Pretvara tekst u HTML i vidljivo označava nedostajuće podatke.
const TODO = /\[(UPISATI|ADD|DOPUNITI|COMPLETE)[^\]]*\]/g;

export function fmt(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(TODO, (m) => `<mark class="todo">${m}</mark>`);
}

export { langs, pathFor, routes };
export type { Lang, PageKey };
