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
}
