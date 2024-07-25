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
import Loading from '../Loading';
import { selectComments } from '../../store/entries/selectors';
import { entriesActions } from '../../store/entries';
import { deleteCommentRequest, postCommentRequest } from '../../store/crud/thunks';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';

export default function CommentsSection({ user, journalId }) {
  const dispatch = useDispatch();

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
      key: crudConstants.CREATE,
      currentAction: crudActionsConstants.POST_COMMENT,
      commentMetaData: {
        commentData: {
          comment: localComment.comment,
          createdAt: localComment.createdAt,
        },
        journalId,
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

  // Todo : Handle better loading

  if (!comments.results || loading) {
    return;
  }

  return (
    <>
      <CommentsSectionHeader user={!!user} />

      {user
        && <CreateCommentForm onCreateCommentSubmit={handleCreateCommentSubmit} />}

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
