import Image from '../../../../components/Image';
import style from './index.module.css';
import { findCurrentDestination } from '../../../../utils/utils';
import useDestinations from '../../../../hooks/useDestinations';

export default function DestinationBanner({ destination }) {
  const { destinations } = useDestinations();

  const currentDestination = findCurrentDestination(destination, destinations);

  const imageUrl = currentDestination ? currentDestination.imageUrl : '/around-the-world.jpg';
  const caption = currentDestination ? currentDestination.name : 'Around the World';

  return (
    <div className={style['destination-header']}>
      <Image imageUrl={imageUrl} />
      <h1 className={style.caption}>{caption}</h1>
    </div>
  );
}
