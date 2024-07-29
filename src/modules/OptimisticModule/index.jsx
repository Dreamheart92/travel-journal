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
    <Modal isOpen={isModalOpen}>
    </Modal>
  );
}
