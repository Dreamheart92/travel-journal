import { useDispatch } from 'react-redux';
import { deleteCommentRequest, postCommentReactionRequest, postCommentRequest } from '../store/optimistic/services';
import optimisticKeys from '../store/optimistic/types';
const useOptimisticActions = () => {
  const dispatch = useDispatch();

  const handlePostComment = (localComment, journalId) => {
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
    postCommentOptimistic: handlePostComment,
};

export default useOptimisticActions;
