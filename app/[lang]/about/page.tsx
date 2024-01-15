import Image from 'next/image';
import {
  PiCoinsThin,
  PiLightningLight,
  PiLinkedinLogoLight,
  PiTimerLight,
  PiTwitterLogoLight,
} from 'react-icons/pi';
import { StatCard } from '@/components/StatCard';
import Link from 'next/link';
import { RouteId } from '@/lib/route';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import {
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/lib/animation';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/utils/getDictionary';

export const metadata: Metadata = {
  title: 'About DigitizerSpace - The why, who, and what of automation!',
  description:
    '▷ About DigitizerSpace - the team behind the automation and digitization portal. ✓ Learn about what we do, why we do it and who started it. ✓ Work with us!',
};

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="bg-blob-md bg-cover lg:bg-contain bg-top">
        <div className="hero">
          <div className="hero-content text-center flex flex-col">
            <MotionWrapper
              className="max-w-6xl"
              variants={itemAnimationVariant}
            >
              <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed sm:pt-8">
                {dict.about.title}
              </h1>
            </MotionWrapper>
            <MotionWrapper variants={itemAnimationVariant}>
              <p className="mt-8 max-w-xl mx-auto leading-relaxed">
                {dict.about.description}
              </p>
            </MotionWrapper>
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto flex flex-col gap-8 px-4 items-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiLightningLight />}
                  title={dict.about.statCard.foundedTitle}
                  value={dict.about.statCard.founedValue}
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiCoinsThin />}
                  title={dict.about.statCard.costSavingTitle}
                  value={dict.about.statCard.costSavingValue}
                />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiTimerLight />}
                  title={dict.about.statCard.timeSavingTitle}
                  value={dict.about.statCard.timeSavingValue}
                />
              </MotionWrapper>
            </div>
            <Image
              className="rounded-lg max-w-3xl w-full mt-16"
              src="/assets/images/ai-hacker-wide.webp"
              alt="Ai generated image of a hacker in a space suit in front of a macbook."
              width={768}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-2xl px-4">
        <p className="mb-8">{dict.about.firstSectionText}</p>
        <p>
          {dict.about.secondSectionText}
          &nbsp;
          <Link className="underline hover:text-primary" href={RouteId.root}>
            DigitizerSpace.com
          </Link>
          .&nbsp;
          {dict.about.thirdSectionText}
        </p>
        <h2 className="mt-16 mb-8 text-4xl font-semibold">
          {dict.about.firstSubtitle}
        </h2>
        <p>{dict.about.fourthSectionText}</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center my-8">
          <div className="flex flex-col items-center gap-2">
            <Image
              className="rounded-full border border-gunmetal-600"
              src="/assets/images/founder-portrait.webp"
              alt="Portrait of our founder Tobias Wupperfeld"
              width={200}
              height={200}
              loading="lazy"
            />
            <div className="flex gap-2">
              <Link
                href="https://twitter.com/hikingceo"
                className="link link-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <PiTwitterLogoLight className="text-2xl" />
              </Link>
              <Link
                href="https://linkedin.com/in/tobias-wupperfeld"
                className="link link-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <PiLinkedinLogoLight className="text-2xl" />
              </Link>
            </div>
          </div>
          <p className="italic font-serif max-w-md">
            &quot;{dict.about.quote}&quot;
          </p>
        </div>
        <p>
          {dict.about.fifthSectionText}
          &nbsp;
          <Link
            className="underline hover:text-primary"
            href="https://openai.com/blog/introducing-chatgpt-enterprise"
            rel="noopener noreferrer"
            target="_blank"
          >
            {dict.about.fortune500LinkText}
          </Link>
          &nbsp;{dict.about.sixthSectionText}
        </p>
        <h2 className="mt-16 mb-8 text-4xl font-semibold">
          {dict.about.secondSubtitle}
        </h2>
        <p>
          {dict.about.seventhSectionText}
          &nbsp;
          <Link
            className="underline hover:text-primary"
            href={RouteId.resources}
          >
            {dict.about.resourcesLinkText}
          </Link>
          ,&nbsp;
          <Link
            className="underline hover:text-primary"
            href={RouteId.solutions}
          >
            {dict.about.solutionsLinkText}
          </Link>
          &nbsp;{dict.conditional.or}&nbsp;
          <Link className="underline hover:text-primary" href={RouteId.contact}>
            {dict.about.contactUsLinkText}
          </Link>
          &nbsp;
          {dict.about.eighthSectionText}
        </p>
      </section>

      <section className="py-32 px-4 bg-blob-lg bg-cover bg-top">
        {/* <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
          className="container mx-auto grid grid-cols-3 gap-20 xl:gap-40 border border-gunmetal-600 rounded-lg p-8 sm:p-12"
        >
          <div className="col-span-3 md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:leading-normal">
              Book a consulting call with DigitizerSpace today!
            </h2>
            <p className="leading-relaxed mb-8">
              Discover how your business could implement automation and
              digitization solutions. Save costs and more benefits
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <CheckedText description="Call with the founder Tobias Wupperfeld" />
              <CheckedText description='Bonus: Get our e-book "The full tool guide" for free (value $299)' />
              <CheckedText description="100% money back guarantee - no questions asked" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">
                Book now
                <PiTriangleLight className="rotate-90" />
              </button>
              <button className="btn btn-neutral btn-outline">
                Check out specific solutions
                <PiTriangleLight className="rotate-90" />
              </button>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 place-self-center">
            <div className="rounded-lg border-primary border-2 shadow-md bg-neutral px-8 py-32 relative">
              <p className="uppercase text-center font-bold">
                10 must have automation tools and how to use them
              </p>
              <PiPlusSquareFill className="text-5xl text-primary absolute -top-8 -left-8" />
            </div>
          </div>
        </motion.div> */}
      </section>
    </>
  );
}
