import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserProfileImage from '../UserProfileImage';
import CommentCardContent from './CommentCardContent';
import CommentCardReaction from './CommentCardReaction';
import style from './index.module.css';
import Button from '../Button';
import { selectIsAuthenticated } from '../../store/auth/selectors';
import { PATHS } from '../../constants/paths';
import useOptimisticActions from '../../hooks/useOptimisticActions';

export default function CommentCard({ comment, userId, onSetModalTargetItemId }) {
  const navigate = useNavigate();

  const {
    author,
    createdAt,
    comment: content,
    _id: commentId,
    likes,
    dislikes,
  } = comment;

  const { postCommentReactionOptimistic } = useOptimisticActions();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleCommentReaction = (reactionType, isReacted) => {
    if (isAuthenticated) {
      if (!commentId.endsWith('___temporary')) {
        postCommentReactionOptimistic({
          reactionType,
          isReacted,
          commentId,
          userId,
        });
      }
    } else {
      navigate(PATHS.LOGIN);
    }
  };

  const isCommentOwner = userId && comment.author._id === userId;
  const isLikedComment = likes.includes(userId);
  const isDislikedComment = dislikes.includes(userId);

  return (
    <div className={style['comment-card']}>
      <UserProfileImage imageUrl={author.imageUrl} />

      <div className={style.wrapper}>
        <CommentCardContent
          author={author.username}
          content={content}
          createdAt={createdAt}
          id={commentId}
        />

        <CommentCardReaction
          commentId={commentId}
          isLikedComment={isLikedComment}
          isDislikedComment={isDislikedComment}
          likes={likes.length}
          dislikes={dislikes.length}
          onCommentReaction={handleCommentReaction}
        />

        {isCommentOwner
          && (
            <div className={style['delete-control']}>
              <Button
                onClick={() => onSetModalTargetItemId(commentId)}
                variant="warning"
                caption="Delete"
              />
            </div>
          )}
      </div>
    </div>
  );
}
