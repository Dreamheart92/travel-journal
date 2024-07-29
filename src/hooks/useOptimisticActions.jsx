import { useDispatch } from 'react-redux';
import { deleteCommentRequest, postCommentReactionRequest, postCommentRequest } from '../store/optimistic/services';
import optimisticKeys from '../store/optimistic/types';
import { entriesActions } from '../store/entries';

const useOptimisticActions = () => {
  const dispatch = useDispatch();

  const handlePostComment = (localComment, journalId) => {
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

  const handleDeleteComment = (commentId) => {
    dispatch(entriesActions.deleteLocalComment({ commentId }));
    dispatch(deleteCommentRequest({
      key: optimisticKeys.DELETE_COMMENT,
      commentId,
    }));
  };

  const handleCommentReaction = (metaData) => {
    const {
      reactionType,
      isReacted,
      commentId,
      userId,
    } = metaData;

    dispatch(entriesActions.updateLocalCommentReaction({
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
