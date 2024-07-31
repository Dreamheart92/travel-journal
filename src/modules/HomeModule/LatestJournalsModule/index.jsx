import { useEffect } from 'react';
import Container from '../../../components/Container';
import Grid from '../../../components/Grid';
import ErrorMessage from '../../../components/ErrorMessage';
import useJournals from '../../../hooks/useJournals';
import JournalCard from '../../../components/JournalCard';
import Loading from '../../../components/Loading';

export default function LatestJournalsModule() {
  const {
    journals,
    loading,
    success,
    error,
    fetchJournals,
  } = useJournals();

  useEffect(() => {
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
