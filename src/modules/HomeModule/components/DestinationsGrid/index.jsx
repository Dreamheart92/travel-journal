import Grid from '../../../../components/Grid';
import DestinationCard from '../../../../components/DestinationCard';

export default function DestinationsGrid({ destinations }) {
  return (
    <Grid>
      {destinations.map((destination) => (
        <DestinationCard
          key={destination._id}
          destination={destination}
        />
      ))}
    </Grid>
  );
}
