import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import journalService from '../../services/journalService';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import DestinationHeader from '../../components/DestinationHeader';
import Container from '../../components/Container';
import JournalsList from '../../components/JournalsList';

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
      <JournalsList journals={journals.data.journals} />
    </DefaultLayout>
  );
}
