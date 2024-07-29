import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../Image';
import JournalContent from '../JournalContent';
import style from './index.module.css';
import Button from '../Button';
import Modal from '../Modal';
import DeleteModal from '../Modal/DeleteModal';
import useModal from '../../hooks/useModal';
import { PATHS } from '../../constants/paths';
import { fetchEntry } from '../../store/entries/services';
import { selectDeleteState } from '../../store/crud/selectors';
import { deleteJournalRequest } from '../../store/crud/services';
import crudKeys from '../../store/crud/types';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { crudActions } from '../../store/crud';
import { entriesActions } from '../../store/entries';
import entriesKeys from '../../store/entries/types';

export default function Journal({ journalId, journal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpenModal, onCloseModal } = useModal();
  const { loading } = useSelector(selectDeleteState);

  const handleDeleteJournal = async () => {
    const isSuccess = await dispatch(deleteJournalRequest({
      key: crudKeys.DELETE,
      currentAction: crudActionsConstants.DELETE_JOURNAL,
      journalId,
    }));

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
