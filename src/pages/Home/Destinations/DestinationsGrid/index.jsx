import DestinationCard from '../../../../components/DestinationCard';

import destinationPropTypes from '../../../../propTypes/destinationPropTypes';
import style from './index.module.css';

export default function DestinationsGrid({ destinations }) {
  return (
    <div className={style.grid}>
      {destinations.map((destination) => (
        <DestinationCard
          key={destination._id}
          destination={destination}
        />
      ))}
    </div>
  );
}

DestinationsGrid.propTypes = destinationPropTypes;
