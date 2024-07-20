import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import journalService from '../../services/journalService';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import DestinationHeader from '../../components/DestinationHeader';
import JournalsList from '../../components/JournalsList';
import Sidebar from '../../components/Sidebar';
import style from './index.module.css';

export default function Catalogue() {
  const { destination } = useParams();

  const {
    data: journals,
    isLoading: isJournalsLoading,
    error: journalsError
  } = useFetch(() => journalService.getJournals(destination));

  const {
    data: destinations,
    isLoading: isDestinationsLoading,
    error: destinationsError,
  } = useFetch(journalService.getDestinations);

  if (isJournalsLoading || isDestinationsLoading) {
    return <Loading />;
  }

  const currentDestination = destination
    ? destinations.data.find((destinationFilter) => destinationFilter.name === destination)
    : null;

  return (
    <DefaultLayout>
      <DestinationHeader destination={currentDestination} />
      <div className={style.wrapper}>
        <JournalsList journals={journals.data.journals} />
        <Sidebar width="20%" />
      </div>
    </DefaultLayout>
  );
}
