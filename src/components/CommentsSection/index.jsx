import { useDispatch, useSelector } from 'react-redux';
import CommentsSectionHeader from './CommentsSectionHeader';
import CommentCard from '../CommentCard';
import style from './index.module.css';
import { formatCommentsCount } from '../../helpers';
import CreateCommentForm from '../../forms/CreateCommentForm';
import { buildLocalComment } from '../../forms/helpers/createCommentForm';
import { detailsActions } from '../../store/details';
import { deleteComment, postComment } from '../../store/details/thunks';
import Modal from '../Modal';
import DeleteModal from '../Modal/DeleteModal';
import useModal from '../../hooks/useModal';
import { selectCommentDeleteState } from '../../store/details/selectors';

export default function CommentsSection(
  {
    user,
    comments,
    journalId,
  },
) {
  const dispatch = useDispatch();

  const { loading: isDeletingComment } = useSelector(selectCommentDeleteState);

  const {
    isOpen,
    targetItemId,
    onSetTargetItemId,
    onCloseModal,
  } = useModal();

  const handleCreateCommentSubmit = (comment) => {
    const localComment = buildLocalComment(user, comment);

    dispatch(detailsActions.addLocalComment(localComment));
    dispatch(postComment({
      commentData: {
        comment: localComment.comment,
        createdAt: localComment.createdAt,
      },
      journalId,
    }));
  };

  const handleDeleteComment = () => {
    if (targetItemId) {
      dispatch(detailsActions.deleteLocalComment(targetItemId));
      dispatch(deleteComment(targetItemId));
      onCloseModal();
    }
  };

  return (
    <>
      <CommentsSectionHeader user={!!user} />

      {user
        && <CreateCommentForm onCreateCommentSubmit={handleCreateCommentSubmit} />}

      <div className={style['comments-count']}>
        {formatCommentsCount(comments)}
      </div>

      <div className={style['comments-list']}>
        {comments?.map((comment) => (
          <CommentCard
            key={comment._id}
            comment={comment}
            userId={user._id}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>

      <Modal>
        <DeleteModal
          text="Are you sure you want to delete this comment?"
        />
      </Modal>
    </>
  );
}
