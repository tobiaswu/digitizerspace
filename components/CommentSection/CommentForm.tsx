'use client';

import { useFormState } from 'react-dom';
import { submitCommentForm } from './actions';
import { SubmitButton } from '../SubmitButton';
import { PiCheckCircleLight } from 'react-icons/pi';

export interface CommentFormProps {
  articleId: number;
  commentId?: number;
  commentPlaceholder: string;
  loadingText: string;
  submitBtnText: string;
}

export const CommentForm = ({
  articleId,
  commentId,
  commentPlaceholder,
  loadingText,
  submitBtnText,
}: CommentFormProps) => {
  const [state, formAction] = useFormState(submitCommentForm, null);

  const nameError = state?.error?.name?._errors[0];
  const emailError = state?.error?.email?._errors[0];
  const textError = state?.error?.text?._errors[0];
  // const checkboxError = state?.error?.checkbox?._errors[0];
  const message: string | undefined = state?.message?.message;

  return (
    <div>
      <form className="flex flex-col gap-4 pt-4" action={formAction}>
        <input type="hidden" name="articleId" value={articleId} />
        {commentId && (
          <input type="hidden" name="commentId" value={commentId} />
        )}
        <label className="form-control">
          <textarea
            className={`${
              textError && 'textarea-error'
            } textarea textarea-bordered text-base textarea-md`}
            name="text"
            placeholder={commentPlaceholder}
            required
          />
          {textError && (
            <div className="label">
              <span className="label-text-alt text-error">{textError}</span>
            </div>
          )}
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="form-control flex-1">
            <input
              className={`${nameError && 'input-error'} input input-bordered`}
              name="name"
              required
              type="text"
              placeholder="Name*"
            />
            {nameError && (
              <div className="label">
                <span className="label-text-alt text-error">{nameError}</span>
              </div>
            )}
          </label>
          <label className="form-control flex-1">
            <input
              className={`${emailError && 'input-error'} input input-bordered`}
              name="email"
              required
              type="email"
              placeholder="Email*"
            />
            {emailError && (
              <div className="label">
                <span className="label-text-alt text-error">{emailError}</span>
              </div>
            )}
          </label>
        </div>
        {/* <label className="form-control">
          <label className="cursor-pointer label w-fit gap-4">
            <span className={`${checkboxError && 'text-error'} label-text`}>
              {checkboxLabel}
            </span>
            <input
              type="checkbox"
              name="checkbox"
              className={`${
                checkboxError && 'checkbox-error'
              } checkbox checkbox-primary`}
            />
          </label>
          {checkboxError && (
            <div className="label">
              <span className="label-text-alt text-error">{checkboxError}</span>
            </div>
          )}
        </label> */}
        <SubmitButton loadingText={loadingText} submitBtnText={submitBtnText} />
      </form>
      {message && (
        <div className="alert alert-info mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};