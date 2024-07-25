import { useDispatch } from 'react-redux';
import UserProfileImage from '../UserProfileImage';
import CommentCardContent from './CommentCardContent';
import CommentCardReaction from './CommentCardReaction';
import style from './index.module.css';
import Button from '../Button';
import { postCommentReactionRequest } from '../../store/crud/thunks';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';

export default function CommentCard({ comment, userId, onSetModalTargetItemId }) {
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
      dispatch(postCommentReactionRequest({
        key: crudConstants.CREATE,
        currentAction: crudActionsConstants.REACT_JOURNAL,
        reactionMetaData: {
          reactionType,
          isReacted,
          commentId,
          userId,
        },
      }));
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
