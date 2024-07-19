import PropTypes from 'prop-types';

import Container from '../Container';
import Grid from '../Grid';
import DestinationCard from '../DestinationCard';

import destinationPropTypes from '../../propTypes/destinationPropTypes';

import style from './index.module.css';

export default function Destinations({ destinations }) {
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

Destinations.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape(destinationPropTypes)),
};
