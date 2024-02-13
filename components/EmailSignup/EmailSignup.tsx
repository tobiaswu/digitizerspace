'use client';

import { PiCheckCircleLight } from 'react-icons/pi';
import { submitEmailForm } from './actions';
import { useFormState } from 'react-dom';
import { SubscribeButton } from './SubscribeButton';

interface EmailSignupProps {
  disclaimer: JSX.Element;
  loadingMsg: string;
  btnTitle: string;
}

export const EmailSignup = ({
  disclaimer,
  loadingMsg,
  btnTitle,
}: EmailSignupProps) => {
  const [state, formAction] = useFormState(submitEmailForm, null);
  const error = state?.error?.email?._errors[0];
  const message: string | undefined = state?.message?.message;

  return (
    <div>
      <form action={formAction} className="sm:join">
        <label className="form-control">
          <input
            type="email"
            name="email"
            required
            className={`${
              error && 'input-error'
            } input input-bordered input-primary w-full sm:w-72 join-item mb-4 sm:mb-0`}
            placeholder="Email"
          />
          {error && (
            <div className="label">
              <span className="label-text-alt text-error">{error}</span>
            </div>
          )}
        </label>
        <SubscribeButton loadingMsg={loadingMsg} btnTitle={btnTitle} />
      </form>
      {message && (
        <div className="alert alert-info w-fit mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
      <p className="text-sm pt-8">{disclaimer}</p>
    </div>
  );
};
