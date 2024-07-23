import { useDispatch, useSelector } from 'react-redux';
import UserProfileImage from '../UserProfileImage';

import style from './index.module.css';
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

export default function CommentCard(
  {
    comment,
  },
) {
  const { author, createdAt, comment: content, _id: id } = comment;

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
