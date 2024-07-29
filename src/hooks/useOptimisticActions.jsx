import { useDispatch } from 'react-redux';
import { deleteCommentRequest, postCommentReactionRequest, postCommentRequest } from '../store/optimistic/services';
import optimisticKeys from '../store/optimistic/types';
const useOptimisticActions = () => {
  const dispatch = useDispatch();
};
export default useOptimisticActions;
