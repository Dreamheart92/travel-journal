import Container from '../../components/Container';
import Hero from '../../components/Hero';
import DestinationsModule from '../../modules/HomeModule/DestinationsModule';
import LatestJournalsModule from '../../modules/HomeModule/LatestJournalsModule';

export default function Home() {
  return (
    <Container customStyle={{ width: '100%' }}>
      <Hero />
      <DestinationsModule />
      <LatestJournalsModule />
    </Container>
  );
}
