import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import { journalsActions } from '../../store/journals';
import { JOURNALS_STATE_KEYS } from '../../constants/redux';
import ErrorMessage from '../../components/ErrorMessage';
import { PATHS } from '../../constants/paths';
import JournalModule from '../../modules/DetailsModule/JournalModule';
import CommentsModule from '../../modules/DetailsModule/CommentsModule';
import { crudActions } from '../../store/crud';
import { selectJournal } from '../../store/journals/selectors';
import { fetchJournalService } from '../../store/journals/services';

export default function Details() {
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
      dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.JOURNAL }));
      dispatch(crudActions.resetState());
      promise.abort();
    };
  }, []);

  if (error?.message === 'Journal not found') {
    return <Navigate to={PATHS.NOT_FOUND} />;
  }

  return (
    <Container customStyle={{ width: '80em', minHeight: '100vh', paddingBottom: '5em' }}>

      {loading
        && <Loading />}

      {!loading && journal
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
  );
}
