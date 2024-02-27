import { PageIntroCard } from '@/components/PageIntroCard';
import { RouteId } from '@/lib/route';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.solutions',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
  };
}

export default async function Solutions({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'paperlessIntroCard',
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <PageIntroCard
        buttonText={t('button')}
        description={t('description')}
        thumbnailAltText={t('thumbnailAlt')}
        thumbnailSrc="https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards.png"
        title={t('title')}
        url={RouteId.paperless}
      />
    </div>
  );
}
