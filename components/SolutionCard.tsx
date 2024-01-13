import Link from 'next/link';
import { PiArrowSquareOutLight } from 'react-icons/pi';

export interface SolutionCardProps {
  icon: JSX.Element;
  description: string;
  url?: string;
}

export const SolutionCard = ({ icon, description, url }: SolutionCardProps) => {
  return (
    <>
      {url ? (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <div className="bg-neutral border border-gunmetal-600 rounded-lg h-full w-full flex flex-col justify-center gap-8 p-8 hover:border-primary relative">
            <PiArrowSquareOutLight className="absolute text-3xl text-gunmetal-800 top-4 right-4" />
            <span className="text-3xl text-primary">{icon}</span>
            <p className="font-semibold">{description}</p>
          </div>
        </Link>
      ) : (
        <div className="bg-neutral border border-gunmetal-600 rounded-lg h-full w-full flex flex-col justify-center gap-8 p-8">
          <span className="text-3xl text-primary">{icon}</span>
          <p className="font-semibold">{description}</p>
        </div>
      )}
    </>
  );
};
