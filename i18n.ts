import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from './lib/constants';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as any)) notFound();

  return {
    messages: (await import(`./public/dictionaries/${locale}.json`)).default,
    timeZone: 'Europe/London',
  };
});
