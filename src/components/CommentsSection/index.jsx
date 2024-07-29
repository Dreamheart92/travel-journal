import { useDispatch, useSelector } from 'react-redux';
import CommentsSectionHeader from './CommentsSectionHeader';
import CommentCard from '../CommentCard';
import style from './index.module.css';
import { formatCommentsCount } from '../../helpers';
import CreateCommentForm from '../../forms/CreateCommentForm';
import { buildLocalComment } from '../../forms/helpers/createCommentForm';
import Modal from '../Modal';
import DeleteModal from '../Modal/DeleteModal';
import useModal from '../../hooks/useModal';
import { selectComments } from '../../store/entries/selectors';
import { entriesActions } from '../../store/entries';
import { postCommentRequest, deleteCommentRequest } from '../../store/optimistic/services';
import { selectAuth } from '../../store/auth/selectors';
import FormProvider from '../../context/FormContext';
import optimisticKeys from '../../store/optimistic/types';

export default function CommentsSection({ journalId }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(selectAuth);

  const { comments, loading } = useSelector(selectComments);

  const {
    isOpen,
    targetItemId,
    onSetTargetItemId,
    onCloseModal,
  } = useModal();

  const handleCreateCommentSubmit = async (comment) => {
    const localComment = buildLocalComment(user, comment);

    dispatch(entriesActions.addLocalComment(localComment));
    dispatch(postCommentRequest({
      key: optimisticKeys.POST_COMMENT,
      commentMetaData: {
        commentData: {
          comment: localComment.comment,
          createdAt: localComment.createdAt,
        },
        journalId,
      },
    }));
  };

  const handleDeleteComment = () => {
    if (targetItemId) {
      dispatch(deleteCommentRequest({
        key: optimisticKeys.DELETE_COMMENT,
        commentId: targetItemId,
      }));
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
