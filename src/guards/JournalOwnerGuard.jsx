import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { PATHS } from '../constants/paths';
import Loading from '../components/Loading';
import { journalsActions } from '../store/journals';
import { JOURNALS_STATE_KEYS } from '../constants/redux';
import { selectJournal } from '../store/journals/selectors';
import { fetchJournalService } from '../store/journals/services';

export default function JournalOwnerGuard({ children }) {
  const dispatch = useDispatch();
  const { journalId } = useParams();

  const {
    results: journal,
    loading,
    error,
  } = useSelector(selectJournal);

  useEffect(() => {
    const promise = dispatch(fetchJournalService({ key: JOURNALS_STATE_KEYS.JOURNAL, journalId }));

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
