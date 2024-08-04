import { useSelector } from 'react-redux';
import CommentsSectionHeader from './CommentsSectionHeader';
import style from './index.module.css';
import CreateCommentForm from '../Forms/CreateCommentForm';
import Modal from '../../../components/Modal';
import DeleteModal from '../../../components/Modal/DeleteModal';
import useModal from '../../../hooks/useModal';
import { selectComments } from '../../../store/journals/selectors';
import { selectAuth } from '../../../store/auth/selectors';
import FormProvider from '../../../context/FormContext';
import useOptimisticActions from '../../../hooks/useOptimisticActions';
import CommentsList from '../components/CommentsList';
import { formatCommentsCount } from '../../../utils/stringUtils';
import { buildLocalComment } from '../../../utils/commentUtils';

export default function CommentsModule({ journalId }) {
  const { user, isAuthenticated } = useSelector(selectAuth);

  const { comments } = useSelector(selectComments);

  const { postCommentOptimistic, deleteCommentOptimistic } = useOptimisticActions();

  const {
    isOpen,
    targetItemId,
    onSetTargetItemId,
    onCloseModal,
  } = useModal();

  const handleCreateCommentSubmit = async (comment) => {
    const localComment = buildLocalComment(user, comment);
    postCommentOptimistic(localComment, journalId);
  };

  const handleDeleteComment = () => {
    if (targetItemId) {
      deleteCommentOptimistic({ commentId: targetItemId, journalId });
      onCloseModal();
    }
  };

  return (
    <>
      <CommentsSectionHeader user={isAuthenticated} />

      {isAuthenticated
        && (
          <FormProvider>
            <CreateCommentForm onCreateCommentSubmit={handleCreateCommentSubmit} />
          </FormProvider>
        )}

      <div className={style['comments-count']}>
        {formatCommentsCount(comments.results)}
      </div>

      <CommentsList
        comments={comments.results}
        userId={user?._id}
        onSetTargetItemId={onSetTargetItemId}
      />

      <Modal isOpen={isOpen}>
        <DeleteModal
          text="Are you sure you want to delete this comment?"
          onDelete={handleDeleteComment}
          onCloseModal={onCloseModal}
        />
      </Modal>
    </>
  );
}
