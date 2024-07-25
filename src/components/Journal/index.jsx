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
import Loading from '../Loading';
import { fetchEntry } from '../../store/entries/thunks';
import { selectJournalEntry } from '../../store/entries/selectors';
import { selectDeleteState } from '../../store/crud/selectors';
import { deleteJournalRequest } from '../../store/crud/thunks';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { crudActions } from '../../store/crud';

export default function Journal({ journalId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpenModal, onCloseModal } = useModal();
  const { loading } = useSelector(selectDeleteState);

  const {
    result: journal,
    loading: journalLoading,
    isJournalOwner,
  } = useSelector(selectJournalEntry);

  useEffect(() => {
    if (success) {
      navigate(PATHS.CATALOGUE);
    }

    return () => {
      onCloseModal();
      dispatch(journalEditorActions.resetState());
    };
  }, [success]);

  return (
    <div className={style.container}>
      <div className={style['journal-image-wrapper']}>
        <Image imageUrl={imageUrl} />
      </div>

      <JournalContent
        title={title}
        date={date}
        content={description}
        author={author}
        location={location}
      />

      {isJournalOwner && (
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
