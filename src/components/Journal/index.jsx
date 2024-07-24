import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../Image';
import JournalContent from '../JournalContent';
import style from './index.module.css';
import Button from '../Button';
import Modal from '../Modal';
import DeleteModal from '../Modal/DeleteModal';
import useModal from '../../hooks/useModal';
import { deleteJournal } from '../../store/journalEditor/thunks';
import { selectDeleteState } from '../../store/journalEditor/selectors';
import { PATHS } from '../../constants/paths';
import { journalEditorActions } from '../../store/journalEditor';

export default function Journal(
  {
    title,
    location,
    author,
    date,
    imageUrl,
    description,
    isJournalOwner,
    journalId,
  },
) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpenModal, onCloseModal } = useModal();
  const { success, loading } = useSelector(selectDeleteState);

  const handleDeleteJournal = () => {
    dispatch(deleteJournal(journalId));
  };

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
    </div>
  );
}

Journal.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
