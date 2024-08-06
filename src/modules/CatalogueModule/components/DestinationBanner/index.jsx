import { useSelector } from 'react-redux';
import Image from '../../../../components/Image';
import style from './index.module.css';
import { findCurrentDestination } from '../../../../utils/utils';
import { selectDestinations } from '../../../../store/destinations/selectors';

export default function DestinationBanner({ destination }) {
  const { destinations } = useSelector(selectDestinations);

  const currentDestination = findCurrentDestination(destination, destinations);

  const imageUrl = currentDestination ? currentDestination.imageUrl : '/around-the-world.png';
  const caption = currentDestination ? currentDestination.name : 'Around the World';

  return (
    <div className={style['destination-header']}>
      <Image imageUrl={imageUrl} />
      <h1 className={style.caption}>{caption}</h1>
    </div>
  );
}
