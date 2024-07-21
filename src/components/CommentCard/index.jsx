import UserProfileImage from '../UserProfileImage';

import style from './index.module.css';
import CommentCardContent from './CommentCardContent';

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
