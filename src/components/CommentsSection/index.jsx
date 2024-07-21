import CommentsSectionHeader from './CommentsSectionHeader';
import CreateCommentForm from '../../forms/CreateCommentForm';

import style from './index.module.css';

export default function CommentsSection(
  {
    user,
    comments,
  },
) {
  const caption = user ? 'Leave a comment' : 'Login to leave a comment';

  return (
    <>
      <CommentsSectionHeader caption={caption} />

      {user
        && <CreateCommentForm />}

      <div className={style['comments-count']}>
        {comments.length}
      </div>
    </>
  );
}
