import UserProfileImage from '../UserProfileImage';

import style from './index.module.css';

export default function CommentCard(
  {
    comment,
  },
) {
  return (
    <div className={style['comment-card']}>
      <UserProfileImage imageUrl={comment.author.imageUrl} />
    </div>
  );
}
