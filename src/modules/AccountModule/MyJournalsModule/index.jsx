import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import Grid from '../../../components/Grid';
import { selectUser } from '../../../store/auth/selectors';
import { journalsActions } from '../../../store/journals';
import { JOURNALS_STATE_KEYS } from '../../../constants/redux';
import useJournals from '../../../hooks/useJournals';
import ErrorMessage from '../../../components/ErrorMessage';
import JournalCard from '../../../components/JournalCard';
import NoJournalResults from '../../../components/NoJournalsResults';

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
    dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.JOURNALS }));

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
          <>
            {journals.length <= 0
              && <NoJournalResults contextType="account" />}

            {journals.length > 0
              && (
                <Grid>
                  {journals.map((journal) => (
                    <JournalCard
                      key={journal._id}
                      size="sm"
                      journal={journal}
                    />
                  ))}
                </Grid>
              )}
          </>
        )}

      {error
        && <ErrorMessage large message={error.message} />}
    </>
  );
}
