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
    </>
  );
}
