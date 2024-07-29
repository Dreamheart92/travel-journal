import style from './index.module.css';

export default function Pagination(
  {
    totalPages,
    currentPage,
    onQuery,
    children,
  },
) {
  const handlePagination = (direction) => {
    onQuery('page', direction === 'next' ? currentPage + 1 : currentPage - 1);
  };

  const isLastPage = currentPage === totalPages;

  return (
    <>
      {currentPage !== 1
        && (
          <button
            type="button"
            onClick={() => handlePagination('previous')}
            className={`${style.pagination} ${style['pagination-left']}`}
          >
            Previous Page
          </button>
        )}

      {children}

      {!isLastPage
        && (
          <button
            type="button"
            onClick={() => handlePagination('next')}
            className={`${style.pagination} ${style['pagination-right']}`}
          >
            Next Page
          </button>
        )}
    </>
  );
}
