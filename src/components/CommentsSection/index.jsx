import CommentsSectionHeader from './CommentsSectionHeader';
import CreateCommentForm from '../../forms/CreateCommentForm';

import style from './index.module.css';
import CommentCard from '../CommentCard';
import useOnFetch from '../../hooks/useOnFetch';

export default function CommentsSection(
  {
    user,
    comments,
    journalId,
  },
) {
  const {
    data: submittedCommentData,
    error,
    fetch: sendCreateCommentRequest,
  } = useOnFetch();

  

  const caption = user ? 'Leave a comment' : 'Login to leave a comment';

  const totalComments = () => `${comments.length} comment${comments.length > 1 ? 's' : ''}`;

  return (
    <>
      <CommentsSectionHeader caption={caption} />

      {user
        && <CreateCommentForm user={user} journalId={journalId} />}

      <div className={style['comments-count']}>
        {totalComments()}
      </div>

      <div className={style['comments-list']}>
        {comments.map((comment) => (
          <CommentCard
            key={comment._id}
            comment={comment}
          />
        ))}
      </div>
    </>
  );
}
