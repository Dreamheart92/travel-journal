import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import useFetch from '../../hooks/useFetch';
import journalService from '../../services/journalService';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import DestinationHeader from '../../components/DestinationHeader';

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

  return (
    <DefaultLayout>
      <DestinationHeader />
    </DefaultLayout>
  );
}
