import Grid from '../../../../components/Grid';
import JournalCard from '../../../../components/JournalCard';

export default function JournalsGrid({ journals }) {
  return (
    <Grid>
      {journals.map((journal) => (
        <JournalCard
          key={journal._id}
          journal={journal}
        />
      ))}
    </Grid>
  );
}
