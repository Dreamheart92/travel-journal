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
import { CRUD_STATE_KEYS } from '../../../constants/redux';
import { crudActions } from '../../../store/crud';
import useCrud from '../../../hooks/useCrud';

export default function JournalModule({ journalId, journal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpenModal, onCloseModal } = useModal();
  const { loading, deleteJournal } = useCrud(CRUD_STATE_KEYS.DELETE);

  const handleDeleteJournal = async () => {
    const isSuccess = await deleteJournal({ journalId, destinationId: journal.destination._id });

    if (isSuccess?.payload?.success) {
      dispatch(crudActions.resetState({ key: CRUD_STATE_KEYS.DELETE }));
      navigate(PATHS.CATALOGUE);
    }
  };

  return (
    <div className={style.container}>
      <div className={style['journal-image-wrapper']}>
        <Image imageUrl={journal.imageUrl} />

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
      </div>

      <JournalContent journal={journal} />

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
