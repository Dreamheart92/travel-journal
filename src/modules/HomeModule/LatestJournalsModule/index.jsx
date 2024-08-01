import { useEffect } from 'react';
import Container from '../../../components/Container';
import ErrorMessage from '../../../components/ErrorMessage';
import useJournals from '../../../hooks/useJournals';
import Loading from '../../../components/Loading';
import JournalsGrid from '../components/JournalsGrid';

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
      customStyle={{ width: '70%', paddingBottom: '5em' }}
      heading="Latest journals"
    >

      {loading
        && <Loading />}

      {success
        && <JournalsGrid journals={journals} />}

      {
        error
        && <ErrorMessage large message={error.message} />
      }
    </Container>
  );
}
