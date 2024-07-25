import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntry } from '../store/entries/thunks';
import { selectJournalEntry } from '../store/entries/selectors';
import { selectUser } from '../store/auth/selectors';
import { PATHS } from '../constants/paths';
import Loading from '../components/Loading';

export default function JournalOwnerGuard({ children }) {
  const { journalId } = useParams();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const {
    result: journal,
    loading,
  } = useSelector(selectJournalEntry);

  useEffect(() => {
    dispatch(fetchEntry({ journalId }));
  }, []);

  if (loading || !journal) {
    return <Loading />;
  }

  if (journal) {
    const isOwner = journal.author._id === user._id;

    if (!isOwner) {
      return <Navigate to={PATHS.HOME} />;
    }
  }

  return children;
}
