import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container';
import Grid from '../../../components/Grid';
import HomeCard from '../../../components/HomeCard';
import Loading from '../../../components/Loading';
import { fetchEntries } from '../../../store/entries/services';
import { selectJournalsEntries } from '../../../store/entries/selectors';
import { entriesActions } from '../../../store/entries';
import entriesKeys from '../../../store/entries/types';
import ErrorMessage from '../../../components/ErrorMessage';

export default function LatestJournalsModule() {
  const dispatch = useDispatch();

  const {
    results,
    loading,
    error,
    success,
  } = useSelector(selectJournalsEntries);

  useEffect(() => {
    dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRIES }));
    const promise = dispatch(fetchEntries());

    return () => {
      promise.abort();
    };
  }, []);

  return (
    <Container
      width="70%"
      heading="Latest journals"
    >
      {(loading || (!success && !error))
        && <Loading />}

      {!loading && success
        && (
          <Grid>
            {results.journals.map((journal) => (
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
