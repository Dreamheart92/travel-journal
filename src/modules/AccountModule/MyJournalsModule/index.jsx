import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import Grid from '../../../components/Grid';
import HomeCard from '../../../components/HomeCard';
import { selectUser } from '../../../store/auth/selectors';
import { entriesActions } from '../../../store/entries';
import entriesKeys from '../../../store/entries/types';
import useJournals from '../../../hooks/useJournals';
import ErrorMessage from '../../../components/ErrorMessage';

export default function MyJournalsModule() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const {
    journals,
    loading,
    success,
    error,
    fetchUserJournals,
  } = useJournals();

  useEffect(() => {
    dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRIES }));

    const promise = fetchUserJournals(user._id);

    return () => {
      promise.abort();
    };
  }, []);

  return (
    <>
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
    </>
  );
}
