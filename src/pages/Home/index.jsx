import Container from '../../components/Container';
import Hero from '../../components/Hero';
import DestinationsModule from '../../modules/HomeModule/DestinationsModule';
import TopJournalsModule from '../../modules/HomeModule/TopJournalsModule';

export default function Home() {
  return (
    <Container customStyle={{ width: '100%' }}>
      <Hero />
      <DestinationsModule />
      <TopJournalsModule />
    </Container>
  );
}
