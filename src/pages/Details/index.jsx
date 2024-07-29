import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Journal from '../../components/Journal';
import CommentsSection from '../../components/CommentsSection';
import Container from '../../components/Container';
import { selectJournalEntry } from '../../store/entries/selectors';
import Loading from '../../components/Loading';
import { fetchEntry } from '../../store/entries/services';
import { entriesActions } from '../../store/entries';
import entriesKeys from '../../store/entries/types';
import ErrorMessage from '../../components/ErrorMessage';
import { PATHS } from '../../constants/paths';

export default function Details() {
  const { journalId } = useParams();

  const {
    result: journal,
    loading,
    success,
    error,
  } = useSelector(selectJournalEntry);

  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchEntry({ journalId }));

    return () => {
      dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRY }));
      promise.abort();
    };
  }, []);

  // Todo : Create and redirect to 404 page

  if (error?.message === 'Journal not found') {
    return <Navigate to={PATHS.CATALOGUE} />;
  }

  return (
    <DefaultLayout>
      <Container width="80em">

        <CommentsSection
          journalId={journalId}
        />
      </Container>
    </DefaultLayout>
  );
}
