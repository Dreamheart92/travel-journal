import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container';
import Grid from '../Grid';
import HomeCard from '../HomeCard';
import Loading from '../Loading';
import { fetchEntries } from '../../store/entries/thunks';
import { selectJournalsEntries } from '../../store/entries/selectors';

export default function LatestJournals() {
  const dispatch = useDispatch();
  const { results, loading } = useSelector(selectJournalsEntries);

  useEffect(() => {
    dispatch(fetchEntries());
  }, []);

  if (loading || !results) {
    return <Loading />;
  }

  return (
    <Container
      width="70%"
      heading="Latest journals"
    >
      <Grid>
        {results.journals.map((journal) => (
          <HomeCard
            key={journal._id}
            journal={journal}
          />
        ))}
      </Grid>

    </Container>
  );
}
