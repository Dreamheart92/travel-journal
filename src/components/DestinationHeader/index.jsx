import Image from '../Image';
import destinationPropTypes from '../../propTypes/destinationPropTypes';

import style from './index.module.css';

export default function DestinationHeader({ destination }) {
  const imageUrl = destination ? destination.imageUrl : '/destinationPlaceholder.jpg';
  const caption = destination ? destination.name : 'Around the World';

  return (
    <div className={style['destination-header']}>
      <Image imageUrl={imageUrl} />
      <h1 className={style.caption}>{caption}</h1>
    </div>
  );
}

DestinationHeader.propTypes = destinationPropTypes;
