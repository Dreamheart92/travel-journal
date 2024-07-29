import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../ErrorMessage';
import useModal from '../../../hooks/useModal';
import Modal from '../index';
import { selectOptimisticErrors } from '../../../store/optimistic/selectors';
import { optimisticErrorMessages } from '../../../constants/errorMessages';

export default function OptimisticErrorModal() {
  const { isOpen: isModalOpen, onOpenModal } = useModal();

  const [errorMessage, setErrorMessage] = useState(null);

  const optimisticErrors = useSelector(selectOptimisticErrors);

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
