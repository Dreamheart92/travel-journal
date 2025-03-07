import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './index.module.css';
import Modal from '../../../components/Modal';
import DeleteModal from '../../../components/Modal/DeleteModal';
import useModal from '../../../hooks/useModal';
import { PATHS } from '../../../constants/paths';
import { CRUD_STATE_KEYS } from '../../../constants/redux';
import { crudActions } from '../../../store/crud';
import useCrud from '../../../hooks/useCrud';
import Journal from '../components/Journal';

export default function JournalModule({ journal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpenModal, onCloseModal } = useModal();
  const { loading, deleteJournal } = useCrud(CRUD_STATE_KEYS.DELETE);

  const handleDeleteJournal = async () => {
    const isSuccess = await deleteJournal({
      journalId: journal._id,
      destinationId: journal.destination._id,
    });

    if (isSuccess?.payload?.success) {
      dispatch(crudActions.resetState({ key: CRUD_STATE_KEYS.DELETE }));
      navigate(PATHS.CATALOGUE);
    }
  };

  return (
    <div className={style.container}>
      <Journal journal={journal} onOpenModal={onOpenModal} />

      <Modal isOpen={isOpen}>
        <DeleteModal
          text="Are you sure you want to delete this journal?"
          isDeleting={loading}
          onCloseModal={onCloseModal}
          onDelete={handleDeleteJournal}
        />
      </Modal>
    </div>
  );
}
