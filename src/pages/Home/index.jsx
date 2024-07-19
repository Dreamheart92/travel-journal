import useFetch from '../../hooks/useFetch';
import journalService from '../../services/journalService';

import Container from '../../components/Container';
import Hero from './Hero';
import Destinations from './Destinations';
import Loading from '../../components/Loading';

export default function Home() {
  const { data: destinations, isLoading } = useFetch(journalService.getDestinations);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Hero />
      <Destinations destinations={destinations.data} />
    </Container>
  );
}
