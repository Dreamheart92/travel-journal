import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PATHS } from '../constants/paths';
import Loading from '../components/Loading';
import useJournal from '../hooks/useJournal';
import { useDispatch } from 'react-redux';
import { entriesActions } from '../store/entries';
import entriesKeys from '../store/entries/types';

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
      dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRY }));
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
