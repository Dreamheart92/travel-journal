import { useDispatch, useSelector } from 'react-redux';
import CommentsSectionHeader from './CommentsSectionHeader';
import CommentCard from '../../../components/CommentCard';
import style from './index.module.css';
import { formatCommentsCount } from '../../../helpers';
import CreateCommentForm from '../Forms/CreateCommentForm';
import { buildLocalComment } from '../../../forms/helpers/createCommentForm';
import Modal from '../../../components/Modal';
import DeleteModal from '../../../components/Modal/DeleteModal';
import useModal from '../../../hooks/useModal';
import { selectComments } from '../../../store/entries/selectors';
import { entriesActions } from '../../../store/entries';
import { selectAuth } from '../../../store/auth/selectors';
import FormProvider from '../../../context/FormContext';
import useOptimisticActions from '../../../hooks/useOptimisticActions';

export default function CommentsModule({ journalId }) {
  const dispatch = useDispatch();
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

    dispatch(entriesActions.addLocalComment(localComment));
    postCommentOptimistic(localComment, journalId);
  };

  const handleDeleteComment = () => {
    if (targetItemId) {
      deleteCommentOptimistic(targetItemId);
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

      <div className={style['comments-list']}>
        {comments.results.map((comment) => (
          <CommentCard
            key={comment._id}
            comment={comment}
            userId={user?._id}
            onSetModalTargetItemId={onSetTargetItemId}
          />
        ))}
      </div>

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
