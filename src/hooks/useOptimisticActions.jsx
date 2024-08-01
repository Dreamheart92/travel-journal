import { useDispatch } from 'react-redux';
import { deleteCommentRequest, postCommentReactionRequest, postCommentRequest } from '../store/optimistic/services';
import { OPTIMISTIC_STATE_KEYS } from '../constants/redux';
import { journalsActions } from '../store/journals';

const useOptimisticActions = () => {
  const dispatch = useDispatch();

  const handlePostComment = (localComment, journalId) => {
    dispatch(journalsActions.addLocalComment(localComment));
    dispatch(postCommentRequest({
      key: OPTIMISTIC_STATE_KEYS.POST_COMMENT,
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
      key: OPTIMISTIC_STATE_KEYS.DELETE_COMMENT,
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
      key: OPTIMISTIC_STATE_KEYS.POST_COMMENT_REACTION,
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
