import { useDispatch, useSelector } from 'react-redux';
import { selectJournal } from '../store/journals/selectors';
import { fetchJournalService } from '../store/journals/services';

const useJournal = () => {
  const dispatch = useDispatch();

  const {
    result,
    loading,
    success,
    error,
  } = useSelector(selectJournal);

  const fetchJournal = (journalId) => (
    dispatch(fetchJournalService({ journalId }))
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
