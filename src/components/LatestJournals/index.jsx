import PropTypes from 'prop-types';

import Container from '../Container';
import Grid from '../Grid';
import HomeCard from '../HomeCard';

import journalPropTypes from '../../propTypes/journalPropTypes';

export default function LatestJournals({ journals }) {
  return (
    <Container
      width="70%"
      heading="Latest journals"
    >
      <Grid>
        {journals.map((journal) => (
          <HomeCard
            key={journal._id}
            journal={journal}
          />
        ))}
      </Grid>

    </Container>
  );
}
