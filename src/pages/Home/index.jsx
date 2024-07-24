import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Destinations from '../../components/Destinations';
import LatestJournals from '../../components/LatestJournals';
import { selectHomeState } from '../../store/home/selectors';
import Loading from '../../components/Loading';
import { selectDestinations } from '../../store/destinations/selectors';
import { fetchLatestJournals } from '../../store/home/thunks';

export default function Home() {
  const dispatch = useDispatch();

  const { latestJournals, loading } = useSelector(selectHomeState);
  const { destinations } = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchLatestJournals());
  }, []);

  if (loading || !latestJournals) {
    return <Loading />;
  }

  return (
    <Container width="100%">
      <Hero />
      <Destinations destinations={destinations} />
      <LatestJournals journals={latestJournals} />
    </Container>
  );
}
