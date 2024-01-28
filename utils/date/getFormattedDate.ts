import { Locale } from '@/lib/i18n';

export const getFormattedDate = (date: string, lang: Locale) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  if (lang === 'de') {
    return `${day}.${month}.${year}`;
  }
  return `${month}/${day}/${year}`;
};