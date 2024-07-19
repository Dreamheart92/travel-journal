import useFetch from '../../hooks/useFetch';
import journalService from '../../services/journalService';

import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Destinations from '../../components/Destinations';
import Loading from '../../components/Loading';
import LatestJournals from '../../components/LatestJournals';

export default function Home() {
  const {
    data: destinations,
    isLoading: isDestinationsLoading,
    error: destinationsError
  } = useFetch(journalService.getDestinations);

  const {
    data: journalsData,
    isLoading: isJournalsLoading,
    error: journalsError
  } = useFetch(journalService.getJournals);

  if (isDestinationsLoading || isJournalsLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Hero />
      <Destinations destinations={destinations.data} />
      <LatestJournals journals={journalsData.data.journals} />
    </Container>
  );
}
