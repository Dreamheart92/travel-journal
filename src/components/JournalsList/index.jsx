import PropTypes from 'prop-types';

import Container from '../Container';
import CatalogueCard from '../CatalogueCard';
import journalPropTypes from '../../propTypes/journalPropTypes';

export default function JournalsList({ journals }) {
  return (
    <Container width="40%">
      {journals.map((journal) => (
        <CatalogueCard
          key={journal._id}
          journal={journal}
        />
      ))}
    </Container>
  );
}

JournalsList.propTypes = {
  journals: PropTypes.arrayOf(PropTypes.shape(journalPropTypes)),
};
