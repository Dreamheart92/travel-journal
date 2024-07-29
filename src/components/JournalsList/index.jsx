import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CatalogueCard from '../CatalogueCard';
import Loading from '../Loading';
import { fetchEntries } from '../../store/entries/services';
import { selectJournalsEntries } from '../../store/entries/selectors';
import { entriesActions } from '../../store/entries';
import entriesKeys from '../../store/entries/types';
import { buildQueryString } from '../../helpers';
import { searchActions } from '../../store/search';
import ErrorMessage from '../ErrorMessage';
import Pagination from '../Pagination';

export default function JournalsList({ destination, searchParams, onQuery }) {
  const dispatch = useDispatch();

  const {
    results,
    loading,
    success,
    error,
  } = useSelector(selectJournalsEntries);

  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRIES }));

    const query = buildQueryString(searchParams);
    const promise = dispatch(fetchEntries({ query, destination }));

    return () => {
      promise.abort();
    };
  }, [dispatch, destination, searchParams]);

  useEffect(() => {
    dispatch(searchActions.resetState());
  }, [destination]);

  return (
    <>
      {(loading || (!success && !error))
        && <Loading />}

      {!loading && results
        && (
          <Pagination
            onQuery={onQuery}
            totalPages={results.totalPages}
            currentPage={currentPage}
          >
            {results.journals.map((journal) => (
              <CatalogueCard
                key={journal._id}
                journal={journal}
              />
            ))}
          </Pagination>
        )}

      {error
        && <ErrorMessage large message={error.message} />}
    </>
  );
}
