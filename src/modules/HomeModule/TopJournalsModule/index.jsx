import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeJournals } from '../../../store/journals/selectors';
import { fetchLatestAndMostLikedJournals } from '../../../store/journals/services';
import { JOURNALS_STATE_KEYS } from '../../../constants/redux';
import TopJournalsGrid from '../components/TopJournalsGrid';
import { journalsActions } from '../../../store/journals';

export default function TopJournalsModule() {
  const dispatch = useDispatch();

  const {
    results,
    loading,
    error,
  } = useSelector(selectHomeJournals);

  useEffect(() => {
    const promise = dispatch(fetchLatestAndMostLikedJournals({ key: JOURNALS_STATE_KEYS.HOME }));

    return () => {
      promise.abort();
      dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.HOME }));
    };
  }, []);

  return (
    <>
      <TopJournalsGrid
        heading="Latest Journals"
        loading={loading}
        error={error}
        journals={results?.latestJournals}
      />

      <TopJournalsGrid
        heading="Most Liked Journals"
        loading={loading}
        error={error}
        journals={results?.mostLikedJournals}
      />
    </>
  );
}
