import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CatalogueCard from '../CatalogueCard';
import Loading from '../Loading';
import { fetchEntries } from '../../store/entries/thunks';
import { selectJournalsEntries } from '../../store/entries/selectors';

export default function JournalsList({ destination, searchParams }) {
  const dispatch = useDispatch();

  const {
    results,
    loading,
  } = useSelector(selectJournalsEntries);


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
