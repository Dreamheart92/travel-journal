import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import Grid from '../../../components/Grid';
import { selectUser } from '../../../store/auth/selectors';
import { journalsActions } from '../../../store/journals';
import { JOURNALS_STATE_KEYS } from '../../../constants/redux';
import ErrorMessage from '../../../components/ErrorMessage';
import NoJournalResults from '../../../components/NoJournalsResults';
import HomeCard from '../../../components/JournalCards/HomeCard';
import { selectUserJournals } from '../../../store/journals/selectors';
import { fetchJournalsService } from '../../../store/journals/services';

export default function MyJournalsModule() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const {
    results,
    loading,
    error,
  } = useSelector(selectUserJournals);

  useEffect(() => {
    const promise = dispatch(fetchJournalsService({
      key: JOURNALS_STATE_KEYS.USER_JOURNALS,
      query: `?author=${user._id}`,
    }));

    return () => {
      promise.abort();
      dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.USER_JOURNALS }));
    };
  }, []);

  return (
    <>
      {loading
        && <Loading />}

      {!loading && results?.journals
        && (
          <>
            {results.journals.length <= 0
              && <NoJournalResults contextType="account" />}

            {results.journals.length > 0
              && (
                <Grid>
                  {results.journals.map((journal) => (
                    <HomeCard
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
