import PropTypes from 'prop-types';
import destinationPropTypes from '../../../propTypes/destinationPropTypes';
import SidebarSection from '../SidebarSection';
import style from './index.module.css';
import Filter from '../Filter';

export default function FiltersSection({ destinations }) {
  return (
    <SidebarSection
      heading="Destinations"
    >
      <ul className={style['filters-section']}>
        {destinations.map((destination) => (
          <li key={destination._id}>
            <Filter filter={destination.name} />
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}

FiltersSection.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape(destinationPropTypes)),
};
