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

    <Modal isOpen={isModalOpen}>
    </Modal>
  );
}
