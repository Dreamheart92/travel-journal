import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOptimistic } from '../../store/optimistic/selectors';
import useModal from '../../hooks/useModal';
import { optimisticErrorMessages } from '../../constants/errorMessages';
import Modal from '../../components/Modal';
import ErrorMessage from '../../components/ErrorMessage';
import optimisticKeys from '../../store/optimistic/types';
import { entriesActions } from '../../store/entries';

export default function OptimisticModule() {
  const dispatch = useDispatch();

  const { isOpen: isModalOpen, onOpenModal } = useModal();

  const [errorMessage, setErrorMessage] = useState(null);

  const optimisticState = useSelector(selectOptimistic);

  const postCommentSuccessData = optimisticState[optimisticKeys.POST_COMMENT].data;

  const optimisticErrors = {
    [optimisticKeys.POST_COMMENT]: optimisticState[optimisticKeys.POST_COMMENT].error,
    [optimisticKeys.DELETE_COMMENT]: optimisticState[optimisticKeys.DELETE_COMMENT].error,
    [optimisticKeys.POST_COMMENT_REACTION]: optimisticState[optimisticKeys.POST_COMMENT_REACTION].error,
  };

  useEffect(() => {
    if (postCommentSuccessData) {
      dispatch(entriesActions.updateLocalCommentWithRealData(postCommentSuccessData));
    }
  }, [postCommentSuccessData]);

  useEffect(() => {
    const optimisticErrorsEntries = Object.entries(optimisticErrors);

    for (let i = 0; i < optimisticErrorsEntries.length; i += 1) {
      const [key, error] = optimisticErrorsEntries[i];

      if (error) {
        setErrorMessage(optimisticErrorMessages[key]);
        onOpenModal();
        break;
      }
    }
  }, [optimisticErrors]);

  return (
    <Modal isOpen={isModalOpen}>
      <ErrorMessage isRefreshError large message={errorMessage} />
    </Modal>
  );
}
