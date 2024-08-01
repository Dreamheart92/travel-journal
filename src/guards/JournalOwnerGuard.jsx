import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { PATHS } from '../constants/paths';
import Loading from '../components/Loading';
import useJournal from '../hooks/useJournal';
import { journalsActions } from '../store/journals';
import { JOURNALS_STATE_KEYS } from '../constants/redux';

export default function JournalOwnerGuard({ children }) {
  const dispatch = useDispatch();
  const { journalId } = useParams();

  const {
    journal,
    loading,
    fetchJournal,
    error,
  } = useJournal();

  useEffect(() => {
    const promise = fetchJournal(journalId);

    return () => {
      promise.abort();
      dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.JOURNAL }));
    };
  }, []);

  if (error) {
    return <Navigate to={PATHS.HOME} />;
  }

  if (loading || !journal) {
    return <Loading />;
  }

  if (!journal.isJournalOwner) {
    return <Navigate to={PATHS.HOME} />;
  }

  return children;
}
