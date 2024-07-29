import { useDispatch, useSelector } from 'react-redux';
import { selectJournalsEntries } from '../store/entries/selectors';
import { fetchEntries, fetchUserEntries } from '../store/entries/services';

const useJournals = () => {
  const dispatch = useDispatch();

  const {
    results,
    loading,
    success,
    error,
  } = useSelector(selectJournalsEntries);

  const fetchJournals = (query, destination) => (
    dispatch(fetchEntries({ query, destination }))
  );

  const fetchUserJournals = (userId) => (
    dispatch(fetchUserEntries({ userId }))
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
