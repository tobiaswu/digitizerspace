import { CheckedText } from '@/components/CheckedText';
import Image from 'next/image';
import {
  PiArticleLight,
  PiCalculatorLight,
  PiClockCountdownLight,
  PiCloudCheckLight,
  PiDesktopTowerLight,
  PiDownloadLight,
  PiFileArrowDownLight,
  PiHandshakeLight,
  PiHardDrivesLight,
  PiHourglassMediumLight,
  PiKeyLight,
  PiLightbulbFilamentLight,
  PiMedalLight,
  PiMoneyLight,
  PiNumberSquareOneLight,
  PiNumberSquareThreeLight,
  PiNumberSquareTwoLight,
  PiPathLight,
  PiQuestionLight,
  PiRobotLight,
  PiScanLight,
  PiShootingStarLight,
  PiSignInLight,
  PiStarFourLight,
  PiTestTubeLight,
  PiTrendUpLight,
  PiTrophyLight,
  PiUserLight,
  PiWarningCircleLight,
  PiWrenchLight,
} from 'react-icons/pi';
import { SolutionCard } from '@/components/SolutionCard';
import { PricingCard } from '@/components/PricingCard';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import { itemAnimationVariant, staggerAnimationVariant } from '@/lib/animation';
import { StatCard } from '@/components/StatCard';
import { RouteId } from '@/lib/route';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.solutions.paperless',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
  };
}

export default async function Paperless({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'solutions.paperless',
  });
  const tButton = await getTranslations({
    locale: params.locale,
    namespace: 'button',
  });
  const tConditional = await getTranslations({
    locale: params.locale,
    namespace: 'conditional',
  });

  const paperlessCardItems = [
    {
      name: t('pricingCard.paperlessSystem.item.firstName'),
      infoText: t('pricingCard.paperlessSystem.item.firstInfo'),
    },
    {
      name: t('pricingCard.paperlessSystem.item.secondName'),
      infoText: t('pricingCard.paperlessSystem.item.secondInfo'),
    },
    {
      name: t('pricingCard.paperlessSystem.item.thirdName'),
      infoText: t('pricingCard.paperlessSystem.item.thirdInfo'),
    },
    {
      name: t('pricingCard.paperlessSystem.item.fourthName'),
      infoText: t('pricingCard.paperlessSystem.item.fourthInfo'),
    },
    {
      name: t('pricingCard.paperlessSystem.item.fifthName'),
      infoText: t('pricingCard.paperlessSystem.item.fifthInfo'),
    },
    {
      icon: <PiShootingStarLight />,
      name: t('pricingCard.paperlessSystem.item.sixthName'),
      infoText: t('pricingCard.paperlessSystem.item.sixthInfo'),
    },
    {
      icon: <PiShootingStarLight />,
      name: t('pricingCard.paperlessSystem.item.seventhName'),
      infoText: t('pricingCard.paperlessSystem.item.seventhInfo'),
    },
    {
      icon: <PiShootingStarLight />,
      name: t('pricingCard.paperlessSystem.item.eighthName'),
      infoText: t('pricingCard.paperlessSystem.item.eighthInfo'),
    },
    {
      icon: <PiShootingStarLight />,
      name: t('pricingCard.paperlessSystem.item.ninethName'),
      infoText: t('pricingCard.paperlessSystem.item.ninethInfo'),
    },
    {
      icon: <PiWarningCircleLight className="text-accent" />,
      name: t('pricingCard.paperlessSystem.item.tenthName'),
      infoText: t('pricingCard.paperlessSystem.item.tenthInfo'),
    },
  ];

  const testCardItems = [
    {
      icon: <PiUserLight className="text-primary" />,
      name: t('pricingCard.testSystem.item.firstName'),
    },
    {
      icon: <PiKeyLight className="text-primary" />,
      name: t('pricingCard.testSystem.item.secondName'),
    },
    {
      icon: <PiWarningCircleLight className="text-accent" />,
      name: t('pricingCard.testSystem.item.thirdName'),
    },
  ];

  const liveCardItems = [
    {
      icon: <PiStarFourLight className="text-primary" />,
      name: t('pricingCard.liveDemo.item.firstName'),
    },
    {
      icon: <PiPathLight className="text-primary" />,
      name: t('pricingCard.liveDemo.item.secondName'),
    },
  ];

  const faqItems = [
    'faq.serverAdvise',
    'faq.scannerAdvise',
    'faq.targetGroup',
    'faq.dataPrivacy',
    'faq.fileNaming',
    'faq.permissions',
    'faq.importFolderStructure',
    'faq.mediaSource',
    'faq.workflow',
  ] as const;

  return (
    <>
      <div className="hero bg-blob-soft bg-cover xl:bg-contain bg-top">
        <div className="hero-content text-center flex flex-col">
          <MotionWrapper className="max-w-6xl" variants={itemAnimationVariant}>
            <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed sm:pt-8">
              {t('title')}
            </h1>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="mt-8 mb-2 max-w-xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <Link href="#pricing">
              <button className="btn btn-secondary btn-lg mb-16 capitalize">
                {tButton('getStarted')}
              </button>
            </Link>
          </MotionWrapper>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-4 max-w-2xl">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <Image
                  className="h-auto w-96"
                  src="https://docs.paperless-ngx.com/assets/logo_full_white.svg"
                  alt="White logo of paperless-ngx"
                  width={0}
                  height={184}
                  loading="lazy"
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <CheckedText description={t('firstCheckedText')} />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <CheckedText description={t('secondCheckedText')} />
              </MotionWrapper>
              <MotionWrapper index={3} variants={staggerAnimationVariant}>
                <CheckedText description={t('thirdCheckedText')} />
              </MotionWrapper>
            </div>
            <div className="flex flex-col gap-4">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiClockCountdownLight />}
                  title={t('averageTimeTitle')}
                  value={t('averageTimeValue')}
                  description={t('averageTimeDescription')}
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiRobotLight />}
                  title={t('teachTitle')}
                  value={t('teachValue')}
                  description={t('teachDescription')}
                />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiKeyLight />}
                  title={t('dataSafetyTitle')}
                  value={t('dataSafetyValue')}
                  description={t('dataSafetyDescription')}
                />
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>

      <MotionWrapper variants={itemAnimationVariant}>
        <Image
          className="container mx-auto pt-16 px-4"
          src="https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards-dark.png"
          alt="paperless-ngx dashboard with tagged documents"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </MotionWrapper>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">{t('reqTitle')}</h2>
        </div>
        <p className="max-w-3xl">{t('reqDescription')}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiDownloadLight />}
            description={t('reqtFirstStep')}
            url="https://github.com/paperless-ngx/paperless-ngx"
          />
          <SolutionCard
            icon={<PiScanLight />}
            description={t('reqSecondStep')}
            url="https://amzn.to/42Pp9Td"
          />
          <SolutionCard
            icon={<PiDesktopTowerLight />}
            description={t('reqThirdStep')}
            url="https://amzn.to/3IaCvjp"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiHourglassMediumLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">{t('installTitle')}</h2>
        </div>
        <p className="max-w-3xl">{t('installDescription')}</p>
        <ul className="mt-8">
          <li className="flex flex-col gap-4 mb-8">
            <PiNumberSquareOneLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="col-span-2 flex flex-col sm:flex-row gap-2">
                <SolutionCard
                  icon={<PiHardDrivesLight />}
                  description={t('installFirstStep')}
                />
                <div className="divider sm:divider-horizontal">
                  {tConditional('or')}
                </div>
                <SolutionCard
                  icon={<PiCloudCheckLight />}
                  description={t('installSecondStep')}
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-4 mb-8">
            <PiNumberSquareTwoLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              <SolutionCard
                icon={<PiWrenchLight />}
                description={t('installThirdStep')}
              />
            </div>
          </li>
          <li className="flex flex-col gap-4">
            <PiNumberSquareThreeLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              <SolutionCard
                icon={<PiSignInLight />}
                description={t('installFourthStep')}
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">{t('useTitle')}</h2>
        </div>
        <p className="max-w-3xl">
          {t('useDescription')}&nbsp;
          <Link
            className="link link-hover link-primary"
            href="https://docs.paperless-ngx.com/"
          >
            {t('officialDocLinkText')}
          </Link>
          .
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiFileArrowDownLight />}
            description={t('useFirstStep')}
            url="https://digitizerspace.beehiiv.com/subscribe"
          />
          <SolutionCard
            icon={<PiLightbulbFilamentLight />}
            description={t('useSecondStep')}
            url={`${RouteId.blog}?tag=paperless-ngx`}
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description={t('useThirdStep')}
            url={`${RouteId.blog}?tag=paperless-ngx`}
          />
        </div>
      </div>

      <section className="bg-blob-lg bg-center bg-cover xl:bg-contain">
        <div className="container mx-auto px-4 py-16">
          <div className="flex gap-4 items-center mb-8">
            <PiMedalLight className="text-5xl text-yellow-400" />
            <h2 className="text-4xl font-semibold">{t('offerTitle')}</h2>
          </div>
          <h3 className="text-3xl max-w-3xl mb-4">{t('offerSubtitle')}</h3>
          <p className="max-w-3xl">{t('offerDescription')}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
            <SolutionCard
              icon={<PiWrenchLight />}
              description={t('offerFirstBenefit')}
            />
            <SolutionCard
              icon={<PiTestTubeLight />}
              description={t('offerSecondBenefit')}
              url="https://paperless.digitizerspace.com/"
            />
            <SolutionCard
              icon={<PiHandshakeLight />}
              description={t('offerThirdBenefit')}
            />
            <SolutionCard
              icon={<PiMoneyLight />}
              description={t('offerFourthBenefit')}
            />
            <SolutionCard
              icon={<PiTrophyLight />}
              description={t('offerFifthBenefit')}
            />
            <SolutionCard
              icon={<PiTrendUpLight />}
              description={t('offerSixthBenefit')}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" id="pricing">
        <div className="flex gap-4 items-center mb-8">
          <PiCalculatorLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">{t('pricingTitle')}</h2>
        </div>
        <p className="max-w-3xl">{t('pricingDescription')}</p>
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <PricingCard
            title={t('pricingCard.paperlessSystem.title')}
            subtitle={t('pricingCard.paperlessSystem.subtitle')}
            priceOld={t('pricingCard.paperlessSystem.priceOld')}
            discount={t('pricingCard.paperlessSystem.discount')}
            badgeText={t('pricingCard.paperlessSystem.badgeText')}
            price={t('pricingCard.paperlessSystem.price')}
            priceInfo={t('pricingCard.paperlessSystem.priceInfo')}
            btnText={tButton('getStarted')}
            btnUrl={
              params.locale === 'de'
                ? 'https://buy.stripe.com/bIY6re0K11YDg9O8ww?locale=de'
                : 'https://buy.stripe.com/cN2g1O64l9r58Hm145?locale=en'
            }
            className="border-primary"
            items={paperlessCardItems}
          />
          <div>
            <PricingCard
              title={t('pricingCard.testSystem.title')}
              subtitle={t('pricingCard.testSystem.subtitle')}
              badgeText={t('pricingCard.testSystem.badgeText')}
              btnText={tButton('startDemo')}
              btnUrl="https://paperless.digitizerspace.com/"
              price={t('pricingCard.testSystem.price')}
              className="border-gunmetal-600 mb-8"
              items={testCardItems}
            />
            <PricingCard
              title={t('pricingCard.liveDemo.title')}
              subtitle={t('pricingCard.liveDemo.subtitle')}
              badgeText={t('pricingCard.liveDemo.badgeText')}
              btnText={tButton('bookDemo')}
              btnUrl={RouteId.contact}
              price={t('pricingCard.liveDemo.price')}
              className="border-gunmetal-600"
              items={liveCardItems}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">{t('faq.faqTitle')}</h2>
        </div>
        <p className="max-w-3xl mb-8">
          {t.rich('faq.faqDescription', {
            link: (chunks) => (
              <Link
                className="link link-hover link-primary"
                href={RouteId.contact}
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
        <div className="flex flex-col gap-2">
          {faqItems.map((item, index) => (
            <div key={item} className="collapse collapse-arrow bg-neutral">
              <input
                type="radio"
                name="my-accordion-1"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium">
                {t(`${item}.title`)}
              </div>
              <div className="collapse-content">
                <p>
                  {t.rich(`${item}.content`, {
                    linkDemo: (chunks) => (
                      <Link
                        className="link link-hover link-primary"
                        href="https://paperless.digitizerspace.com/"
                      >
                        {chunks}
                      </Link>
                    ),
                    linkBlog: (chunks) => (
                      <Link
                        className="link link-hover link-primary"
                        href={RouteId.blog}
                      >
                        {chunks}
                      </Link>
                    ),
                    linkNas: (chunks) => (
                      <Link
                        className="link link-hover link-primary"
                        href={
                          params.locale === 'de'
                            ? 'https://amzn.to/3TlNrQv'
                            : 'https://amzn.to/3IaCvjp'
                        }
                      >
                        {chunks}
                      </Link>
                    ),
                    linkVps: (chunks) => (
                      <Link
                        className="link link-hover link-primary"
                        href="https://tidd.ly/3If2dmL"
                      >
                        {chunks}
                      </Link>
                    ),
                    linkScanner: (chunks) => (
                      <Link
                        className="link link-hover link-primary"
                        href={
                          params.locale === 'de'
                            ? 'https://amzn.to/49SYY07'
                            : 'https://amzn.to/42Pp9Td'
                        }
                      >
                        {chunks}
                      </Link>
                    ),
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-16 mb-4">{t('dataProtectionTitle')}</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <p className="max-w-3xl text-sm">{t('dataProtectionDescription')}</p>
          <div className="w-full">
            <Image
              className="w-auto h-32"
              src="/assets/images/ai-gdpr-shield.webp"
              alt="EU GDPR logo"
              width={128}
              height={128}
            />
          </div>
        </div>
      </div>
    </>
  );
}
