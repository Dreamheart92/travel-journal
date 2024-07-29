import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Image from '../../../components/Image';
import JournalContent from '../../../components/JournalContent';
import style from './index.module.css';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import DeleteModal from '../../../components/Modal/DeleteModal';
import useModal from '../../../hooks/useModal';
import { PATHS } from '../../../constants/paths';
import crudKeys from '../../../store/crud/types';
import { crudActions } from '../../../store/crud';
import useDelete from '../../../hooks/useDelete';

export default function JournalModule({ journalId, journal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpenModal, onCloseModal } = useModal();
  const { loading, deleteJournal } = useDelete();

  const handleDeleteJournal = async () => {
    const isSuccess = await deleteJournal(journalId);

    if (isSuccess?.payload?.success) {
      dispatch(crudActions.resetState({ key: crudKeys.DELETE }));
      navigate(PATHS.CATALOGUE);
    }
  };

  return (
    <div className={style.container}>
      <div className={style['journal-image-wrapper']}>
        <Image imageUrl={journal.imageUrl} />
      </div>

      <JournalContent journal={journal} />

      {journal.isJournalOwner && (
        <div className={style.controls}>
          <Button
            onClick={() => navigate(`${PATHS.EDIT}/${journalId}`)}
            variant="secondary"
            caption="Edit"
          />
          <Button
            onClick={() => onOpenModal()}
            variant="warning"
            caption="Delete"
          />
        </div>
      )}

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
