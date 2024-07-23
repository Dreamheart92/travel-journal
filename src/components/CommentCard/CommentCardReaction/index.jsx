import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faSolidThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faThumbsUp as faRegularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown as faSolidThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsDown as faRegularThumbsDown } from '@fortawesome/free-regular-svg-icons/faThumbsDown';
import style from './index.module.css';

export default function CommentCardReaction(
  {
    isLikedComment,
    isDislikedComment,
    likes,
    dislikes,
    onCommentReaction,
  },
) {
  return (
    <div className={style.reaction}>
      <div onClick={() => onCommentReaction('likes', isLikedComment)}>
        <FontAwesomeIcon
          icon={isLikedComment ? faSolidThumbsUp : faRegularThumbsUp}
          style={{ color: '#3b82f6' }}
        />

        <span>{likes}</span>
      </div>

      <div onClick={() => onCommentReaction('dislikes', isDislikedComment)}>
        <FontAwesomeIcon
          icon={isDislikedComment ? faSolidThumbsDown : faRegularThumbsDown}
          style={{ color: '#3b82f6' }}
        />
        <span>{dislikes}</span>
      </div>
    </div>
  );
}
