import useFetch from '../../hooks/useFetch';
import journalServiceSettings from '../../services/journalServiceSettings';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Destinations from '../../components/Destinations';
import Loading from '../../components/Loading';
import LatestJournals from '../../components/LatestJournals';

export default function Home() {
  const {
    data: destinations,
    error: destinationsError,
    isSuccess: destinationsSuccess,
  } = useFetch(journalServiceSettings.getDestinationsSettings);

  const {
    data: journalsData,
    error: journalsError,
    isSuccess: journalsSuccess,
  } = useFetch(journalServiceSettings.getJournalsSettings);

  if (!journalsSuccess || !destinationsSuccess) {
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
