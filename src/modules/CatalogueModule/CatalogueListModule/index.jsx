import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import style from './index.module.css';
import useSearch from '../../../hooks/useSearch';
import useJournals from '../../../hooks/useJournals';
import NoJournalResults from '../../../components/NoJournalsResults';
import JournalsList from '../components/JournalsList';
import { journalsActions } from '../../../store/journals';
import { JOURNALS_STATE_KEYS } from '../../../constants/redux';
import { buildQueryString } from '../../../utils/queryUtils';

export default function CatalogueListModule({ destination, searchParams, onQuery }) {
  const dispatch = useDispatch();

  const {
    journals,
    totalPages,
    loading,
    error,
    fetchJournals,
  } = useJournals();

  const { resetSearch } = useSearch();

  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const query = buildQueryString(searchParams);
    const promise = fetchJournals(query, destination);

    return () => {
      promise.abort();
      dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.JOURNALS }));
    };
  }, [dispatch, destination, searchParams]);

  useEffect(() => {
    resetSearch();
  }, [destination]);

  return (
    <div className={style['journals-container']}>
      {loading
        && <Loading />}

      {!loading && journals
        && (
          <>
            {journals.length <= 0
              && <NoJournalResults />}

            {journals.length > 0
              && (
                <JournalsList
                  currentPage={currentPage}
                  totalPages={totalPages}
                  journals={journals}
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
