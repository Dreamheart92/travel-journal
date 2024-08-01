import { useDispatch, useSelector } from 'react-redux';
import { selectJournals } from '../store/journals/selectors';
import { fetchJournalsService, fetchUserJournalsService } from '../store/journals/services';

const useJournals = () => {
  const dispatch = useDispatch();

  const {
    results,
    loading,
    success,
    error,
  } = useSelector(selectJournals);

  const fetchJournals = (query, destination) => (
    dispatch(fetchJournalsService({ query, destination }))
  );

  const fetchUserJournals = (userId) => (
    dispatch(fetchUserJournalsService({ userId }))
  );

  return {
    journals: results?.journals || null,
    totalPages: results?.totalPages || null,
    loading,
    success,
    error,
    fetchJournals,
    fetchUserJournals,
  };
};

export default useJournals;
