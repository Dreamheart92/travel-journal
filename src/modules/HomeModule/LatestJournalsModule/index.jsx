import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../../components/Container';
import Grid from '../../../components/Grid';
import HomeCard from '../../../components/HomeCard';
import Loading from '../../../components/Loading';
import { entriesActions } from '../../../store/entries';
import entriesKeys from '../../../store/entries/types';
import ErrorMessage from '../../../components/ErrorMessage';
import useJournals from '../../../hooks/useJournals';

export default function LatestJournalsModule() {
  const dispatch = useDispatch();

  const {
    journals,
    loading,
    success,
    error,
    fetchJournals,
  } = useJournals();

  useEffect(() => {
    dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRIES }));
    const promise = fetchJournals();

    return () => {
      promise.abort();
    };
  }, []);

  return (
    <Container
      customStyle={{ width: '70%' }}
      heading="Latest journals"
    >
      {(loading || (!success && !error))
        && <Loading />}

      {!loading && success
        && (
          <Grid>
            {journals.map((journal) => (
              <HomeCard
                key={journal._id}
                journal={journal}
              />
            ))}
          </Grid>
        )}

      {error
        && <ErrorMessage large message={error.message} />}
    </Container>
  );
}
