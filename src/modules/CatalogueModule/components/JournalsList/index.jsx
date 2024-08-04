import CatalogueCard from '../../../../components/JournalCards/CatalogueCard';
import Pagination from '../../../../components/Pagination';

export default function JournalsList(
  {
    onQuery,
    totalPages,
    currentPage,
    journals,
  },
) {
  return (
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
  );
}
