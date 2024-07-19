import PropTypes from 'prop-types';

import Container from '../Container';
import Grid from '../Grid';
import JournalCard from '../JournalCard';

import journalPropTypes from '../../propTypes/journalPropTypes';

export default function LatestJournals({ journals }) {
  return (
    <Container
      width="70%"
      heading="Latest journals"
    >
      <Grid>
        {journals.map((journal) => (
          <JournalCard
            key={journal._id}
            journal={journal}
          />
        ))}
      </Grid>

    </Container>
  );
}

LatestJournals.propTypes = {
  journals: PropTypes.arrayOf(PropTypes.shape(journalPropTypes)),
};
