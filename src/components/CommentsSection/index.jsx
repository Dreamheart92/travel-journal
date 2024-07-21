import { useContext, useEffect } from 'react';
import useOnFetch from '../../hooks/useOnFetch';
import { CommentsContext } from '../../context/CommentsContext';
import CommentsSectionHeader from './CommentsSectionHeader';
import CommentCard from '../CommentCard';
import style from './index.module.css';
import { formatCommentsCount } from '../../helpers';
import CreateCommentForm from '../../forms/CreateCommentForm';
import { constructLocalComment } from '../../forms/helpers/createCommentForm';
import commentService from '../../services/commentService';

export default function CommentsSection(
  {
    user,
    comments,
    journalId,
  },
) {
  const { onUpdateCommentWithRealData, onAddLocalComment } = useContext(CommentsContext);

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
