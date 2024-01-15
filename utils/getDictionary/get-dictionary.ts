import 'server-only';
import { Locale } from '@/lib/i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import('@/public/dictionaries/en.json').then((module) => module.default),
  de: () =>
    import('@/public/dictionaries/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
