import { useDispatch, useSelector } from 'react-redux';
import { selectJournalEntry } from '../store/entries/selectors';
import { fetchEntry } from '../store/entries/services';

const useJournal = () => {
  const dispatch = useDispatch();

  const {
    result,
    loading,
    success,
    error,
  } = useSelector(selectJournalEntry);

  const fetchJournal = (journalId) => (
    dispatch(fetchEntry({ journalId }))
  );

  return {
    journal: result,
    loading,
    success,
    error,
    fetchJournal,
  };
};

export default useJournal;
