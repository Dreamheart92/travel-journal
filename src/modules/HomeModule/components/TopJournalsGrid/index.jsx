import Container from '../../../../components/Container';
import ErrorMessage from '../../../../components/ErrorMessage';
import Loading from '../../../../components/Loading';
import JournalsGrid from '../JournalsGrid';

export default function TopJournalsGrid(
  {
    loading,
    journals,
    error,
    heading,
  },
) {
  return (
    <Container
      customStyle={{ width: '70%', paddingBottom: '2em' }}
      heading={heading}
    >

      {loading
        && <Loading />}

      {journals
        && <JournalsGrid journals={journals} />}

      {
        error
        && <ErrorMessage large message={error.message} />
      }
    </Container>
  );
}
