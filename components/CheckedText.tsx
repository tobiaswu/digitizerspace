import { PiChecksLight } from 'react-icons/pi';

export interface CheckedTextProps {
  description: string;
}

export const CheckedText = ({ description }: CheckedTextProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-neutral border border-gunmetal-600 rounded-lg p-4 flex items-center justify-center">
        <PiChecksLight className="text-3xl text-primary" />
      </div>
      <p className="text-left">{description}</p>
    </div>
  );
};
