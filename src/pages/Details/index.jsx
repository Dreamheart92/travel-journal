import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import { entriesActions } from '../../store/entries';
import entriesKeys from '../../store/entries/types';
import ErrorMessage from '../../components/ErrorMessage';
import { PATHS } from '../../constants/paths';
import JournalModule from '../../modules/DetailsModule/JournalModule';
import CommentsModule from '../../modules/DetailsModule/CommentsModule';
import useJournal from '../../hooks/useJournal';

export default function Details() {
  const { journalId } = useParams();

  const {
    journal,
    loading,
    success,
    error,
    fetchJournal,
  } = useJournal();

  const dispatch = useDispatch();

  useEffect(() => {
    const promise = fetchJournal(journalId);

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
      <Container customStyle={{ width: '80em' }}>

        {(loading || (!success && !error))
          && <Loading />}

        {!loading && success
          && (
            <>
              <JournalModule
                journal={journal}
                journalId={journalId}
              />

              <CommentsModule
                journalId={journalId}
              />
            </>
          )}

        {error
          && <ErrorMessage large message={error.message} />}
      </Container>
    </DefaultLayout>
  );
}
