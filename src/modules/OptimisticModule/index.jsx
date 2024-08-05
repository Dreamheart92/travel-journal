import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOptimistic } from '../../store/optimistic/selectors';
import useModal from '../../hooks/useModal';
import { optimisticErrorMessages } from '../../constants/errorMessages';
import Modal from '../../components/Modal';
import ErrorMessage from '../../components/ErrorMessage';
import { OPTIMISTIC_STATE_KEYS } from '../../constants/redux';
import { journalsActions } from '../../store/journals';

export default function OptimisticModule() {
  const dispatch = useDispatch();

  const { isOpen: isModalOpen, onOpenModal } = useModal();

  const [errorMessage, setErrorMessage] = useState(null);

  const optimisticState = useSelector(selectOptimistic);

  const postCommentSuccessData = optimisticState[OPTIMISTIC_STATE_KEYS.POST_COMMENT].data;

  const optimisticErrors = {
    [OPTIMISTIC_STATE_KEYS.POST_COMMENT]: optimisticState[OPTIMISTIC_STATE_KEYS.POST_COMMENT].error,
    [OPTIMISTIC_STATE_KEYS.DELETE_COMMENT]: optimisticState[OPTIMISTIC_STATE_KEYS.DELETE_COMMENT].error,
    [OPTIMISTIC_STATE_KEYS.POST_COMMENT_REACTION]: optimisticState[OPTIMISTIC_STATE_KEYS.POST_COMMENT_REACTION].error,
    [OPTIMISTIC_STATE_KEYS.LIKE_JOURNAL]: optimisticState[OPTIMISTIC_STATE_KEYS.LIKE_JOURNAL].error,
  };

  useEffect(() => {
    if (postCommentSuccessData) {
      dispatch(journalsActions.updateLocalCommentWithRealData(postCommentSuccessData));
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
