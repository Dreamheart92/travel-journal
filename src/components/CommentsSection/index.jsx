import CommentsSectionHeader from './CommentsSectionHeader';
import CreateCommentForm from '../../forms/CreateCommentForm';

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
    </>
  );
}
