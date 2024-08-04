import Grid from '../../../../components/Grid';
import HomeCard from '../../../../components/JournalCards/HomeCard';

export default function JournalsGrid({ journals }) {
  return (
    <Grid>
      {journals.map((journal) => (
        <HomeCard
          key={journal._id}
          journal={journal}
        />
      ))}
    </Grid>
  );
}
