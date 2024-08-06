import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import style from './index.module.css';
import useSearch from '../../../hooks/useSearch';
import NoJournalResults from '../../../components/NoJournalsResults';
import JournalsList from '../components/JournalsList';
import { journalsActions } from '../../../store/journals';
import { JOURNALS_STATE_KEYS } from '../../../constants/redux';
import { buildQueryString } from '../../../utils/queryUtils';
import { selectCatalogue } from '../../../store/journals/selectors';
import { fetchJournalsService } from '../../../store/journals/services';

export default function CatalogueListModule({ destination, searchParams, onQuery }) {
  const dispatch = useDispatch();

  const {
    results,
    loading,
    error
  } = useSelector(selectCatalogue);

  const { resetSearch } = useSearch();

  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const query = buildQueryString(searchParams);

    const promise = dispatch(fetchJournalsService({
      key: JOURNALS_STATE_KEYS.CATALOGUE,
      query,
      destination,
    }));

    return () => {
      promise.abort();
      dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.CATALOGUE }));
    };
  }, [dispatch, destination, searchParams]);

  useEffect(() => {
    resetSearch();
  }, [destination]);

  return (
    <div className={style['journals-container']}>
      {loading
        && <Loading />}

      {!loading && results
        && (
          <>
            {results.journals.length <= 0
              && <NoJournalResults />}

            {results.journals.length > 0
              && (
                <JournalsList
                  currentPage={currentPage}
                  totalPages={results.totalPages}
                  journals={results.journals}
                  onQuery={onQuery}
                />
              )}
          </>
        )}

      {
        error
        && <ErrorMessage large message={error.message} />
      }
    </div>
  );
}
