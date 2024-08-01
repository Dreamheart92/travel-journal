import { useDispatch } from 'react-redux';
import { deleteCommentRequest, postCommentReactionRequest, postCommentRequest } from '../store/optimistic/services';
import optimisticKeys from '../store/optimistic/types';
import { journalsActions } from '../store/journals';

const useOptimisticActions = () => {
  const dispatch = useDispatch();

  const handlePostComment = (localComment, journalId) => {
    dispatch(journalsActions.addLocalComment(localComment));
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

  const handleDeleteComment = ({ commentId, journalId }) => {
    dispatch(journalsActions.deleteLocalComment({ commentId }));
    dispatch(deleteCommentRequest({
      key: optimisticKeys.DELETE_COMMENT,
      commentId,
      journalId,
    }));
  };

  const handleCommentReaction = (metaData) => {
    const {
      reactionType,
      isReacted,
      commentId,
      userId,
    } = metaData;

    dispatch(journalsActions.updateLocalCommentReaction({
      reactionType,
      isReacted,
      commentId,
      userId,
    }));

    dispatch(postCommentReactionRequest({
      key: optimisticKeys.POST_COMMENT_REACTION,
      reactionMetaData: {
        reactionType,
        isReacted,
        commentId,
        userId,
      },
    }));
  };

  return {
    postCommentOptimistic: handlePostComment,
    deleteCommentOptimistic: handleDeleteComment,
    postCommentReactionOptimistic: handleCommentReaction,
  };
};

export default useOptimisticActions;
