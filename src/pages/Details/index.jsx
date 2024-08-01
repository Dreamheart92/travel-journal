import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import { journalsActions } from '../../store/journals';
import { JOURNALS_STATE_KEYS } from '../../constants/redux';
import ErrorMessage from '../../components/ErrorMessage';
import { PATHS } from '../../constants/paths';
import JournalModule from '../../modules/DetailsModule/JournalModule';
import CommentsModule from '../../modules/DetailsModule/CommentsModule';
import useJournal from '../../hooks/useJournal';
import { crudActions } from '../../store/crud';

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
      dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.JOURNAL }));
      dispatch(crudActions.resetState());
      promise.abort();
    };
  }, []);

  if (error?.message === 'Journal not found') {
    return <Navigate to={PATHS.NOT_FOUND} />;
  }

  return (
    <DefaultLayout>
      <Container customStyle={{ width: '80em', minHeight: '100vh', paddingBottom: '5em' }}>

        {loading
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
          && <ErrorMessage large message="Failed to fetch journal. Please try again." />}
      </Container>
    </DefaultLayout>
  );
}
