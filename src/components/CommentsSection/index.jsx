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

  const totalComments = () => `${comments.length} comment${comments.length > 1 ? 's' : ''}`;

  return (
    <>
      <CommentsSectionHeader caption={caption} />

      {user
        && <CreateCommentForm />}

      <div className={style['comments-count']}>
        {totalComments()}
      </div>
    </>
  );
}
