import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import Grid from '../../../components/Grid';
import HomeCard from '../../../components/HomeCard';
import { fetchUserEntries } from '../../../store/entries/thunks';
import { selectJournalsEntries } from '../../../store/entries/selectors';

export default function MyJournals() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { results, loading } = useSelector(selectJournalsEntries);

  useEffect(() => {
    dispatch(fetchUserEntries({ userId: user._id }));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid>
      {results.journals.map((journal) => (
        <HomeCard
          key={journal._id}
          journal={journal}
        />
      ))}
    </Grid>
  );
}
