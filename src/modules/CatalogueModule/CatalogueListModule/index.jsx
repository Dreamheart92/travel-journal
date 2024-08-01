import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CatalogueCard from '../../../components/CatalogueCard';
import Loading from '../../../components/Loading';
import { buildQueryString } from '../../../helpers';
import ErrorMessage from '../../../components/ErrorMessage';
import Pagination from '../../../components/Pagination';
import style from './index.module.css';
import useSearch from '../../../hooks/useSearch';
import useJournals from '../../../hooks/useJournals';
import NoJournalResults from '../../../components/NoJournalsResults';

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
                <Pagination
                  onQuery={onQuery}
                  totalPages={totalPages}
                  currentPage={currentPage}
                >
                  {journals.map((journal) => (
                    <CatalogueCard
                      key={journal._id}
                      journal={journal}
                    />
                  ))}
                </Pagination>
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
