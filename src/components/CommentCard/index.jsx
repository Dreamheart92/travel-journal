import { useDispatch, useSelector } from 'react-redux';
import UserProfileImage from '../UserProfileImage';
import CommentCardContent from './CommentCardContent';
import CommentCardReaction from './CommentCardReaction';
import style from './index.module.css';
import { detailsActions } from '../../store/details';
import { postCommentReaction } from '../../store/details/thunks';

export default function CommentCard({ comment, userId }) {
  const {
    author,
    createdAt,
    comment: content,
    _id: commentId,
    likes,
    dislikes,
  } = comment;

  const dispatch = useDispatch();

  const handleCommentReaction = (reactionType, isReacted) => {
    if (!commentId.endsWith('___temporary')) {
      dispatch(detailsActions.localCommentReaction(
        {
          reactionType,
          isReacted,
          commentId,
          userId,
        },
      ));

      const path = reactionType === 'likes' ? 'like' : 'dislike';
      const requestMethod = isReacted ? 'Delete' : 'Get';

      dispatch(postCommentReaction({ path, requestMethod, commentId }));
    }
  };

  const isLikedComment = likes.includes(userId);
  const isDislikedComment = dislikes.includes(userId);

  return (
    <div className={style['comment-card']}>
      <UserProfileImage imageUrl={author.imageUrl} />

      <CommentCardContent
        author={author.username}
        content={content}
        createdAt={createdAt}
        id={id}
      />
    </div>
  );
}
