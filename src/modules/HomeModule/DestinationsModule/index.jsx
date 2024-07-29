import Container from '../../../components/Container';
import Grid from '../../../components/Grid';
import DestinationCard from '../../../components/DestinationCard';
import style from './index.module.css';
import useDestinations from '../../../hooks/useDestinations';

export default function DestinationsModule() {
  const { destinations } = useDestinations();

  const firstRow = destinations.slice(0, 3);
  const secondRow = destinations.slice(3, 5);

  return (
    <Container
      heading="Around the world"
    >
      <Grid>
        {firstRow.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </Grid>

      <Grid outerClassName={style['second-row']}>
        {secondRow.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </Grid>

    </Container>
  );
}
