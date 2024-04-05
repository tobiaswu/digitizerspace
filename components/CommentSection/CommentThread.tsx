import { Comment } from '@/lib/types';
import { CommentReply } from './CommentReply';
import { getFormatter, getTranslations } from 'next-intl/server';

export interface CommentThreadProps {
  comment: Comment;
  depth?: number;
}

export const CommentThread = async ({
  comment,
  depth = 0,
}: CommentThreadProps) => {
  const t = await getTranslations();
  const format = await getFormatter();
  const dateCreated = new Date(comment.createdAt);
  const formattedDateCreated = format.dateTime(dateCreated, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  // console.log(comment);
  // className="pl-6 border-l-2 border-neutral"
  return (
    <div
      className={depth > 0 ? 'pl-6 border-l-2 border-neutral' : ''}
      key={comment.id}
    >
      <div className="flex items-center pb-2">
        <p>{comment.author.name}</p>
        <div className="divider divider-horizontal"></div>
        <p className="text-sm">{formattedDateCreated}</p>
      </div>
      <p className="text-base">{comment.content}</p>
      <CommentReply
        commentPlaceholder={t('commentSection.commentPlaceholder')}
        id={comment.id}
        loadingText={t('state.sending')}
        replyBtnText={t('commentSection.replyBtnText')}
        submitBtnText={t('commentSection.submitBtnText')}
        title={t('commentSection.replyDialogTitle', {
          user: comment.author.name,
        })}
      />
      {comment.gotThread &&
        comment.children.map((child) => (
          <CommentThread key={child.id} comment={child} depth={depth + 1} />
        ))}
    </div>
  );
};
