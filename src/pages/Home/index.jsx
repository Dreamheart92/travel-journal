import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Destinations from '../../components/Destinations';
import LatestJournals from '../../components/LatestJournals';

export default function Home() {
  return (
    <Container width="100%">
      <Hero />
      <Destinations />
      <LatestJournals />
    </Container>
  );
}
