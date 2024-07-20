import PropTypes from 'prop-types';

import CatalogueCard from '../CatalogueCard';
import journalPropTypes from '../../propTypes/journalPropTypes';

export default function JournalsList({ journals }) {
  return (
    <>
      {journals.map((journal) => (
        <CatalogueCard
          key={journal._id}
          journal={journal}
        />
      ))}
    </>
  );
}

JournalsList.propTypes = {
  journals: PropTypes.arrayOf(PropTypes.shape(journalPropTypes)),
};
