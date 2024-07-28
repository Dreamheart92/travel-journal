import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CatalogueCard from '../CatalogueCard';
import Loading from '../Loading';
import { fetchEntries } from '../../store/entries/thunks';
import { selectJournalsEntries } from '../../store/entries/selectors';
import { entriesActions } from '../../store/entries';
import entriesConstants from '../../constants/entriesConstants';

export default function JournalsList({ destination, searchParams }) {
  const dispatch = useDispatch();

  const {
    results,
    loading,
  } = useSelector(selectJournalsEntries);

  useEffect(() => {
    dispatch(entriesActions.resetState({ key: entriesConstants.JOURNAL_ENTRIES }));
    const search = searchParams.get('search');
    const promise = dispatch(fetchEntries({ query: { search, destination } }));

    return () => {
      promise.abort();
    };
  }, [dispatch, destination, searchParams]);

  if (loading || !results) {
    return <Loading />;
  }

  return (
    <>
      {results.journals.map((journal) => (
        <CatalogueCard
          key={journal._id}
          journal={journal}
        />
      ))}
    </>
  );
}
