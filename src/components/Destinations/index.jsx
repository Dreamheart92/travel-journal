import PropTypes from 'prop-types';

import Container from '../Container';
import DestinationsGrid from '../DestinationsGrid';

import destinationPropTypes from '../../propTypes/destinationPropTypes';

export default function Destinations({ destinations }) {
  const firstRow = destinations.slice(0, 3);
  const secondRow = destinations.slice(3, 5);

  return (
    <Container
      heading="Around the world"
    >
      <DestinationsGrid
        destinations={firstRow}
      />
      <DestinationsGrid
        destinations={secondRow}
      />

    </Container>
  );
}

Destinations.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape(destinationPropTypes)),
};
