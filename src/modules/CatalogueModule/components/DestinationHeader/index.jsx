import Image from '../../../../components/Image';
import style from './index.module.css';

export default function DestinationHeader({ destination }) {
  const imageUrl = destination ? destination.imageUrl : '/arround-the-world.jpg';
  const caption = destination ? destination.name : 'Around the World';

  return (
    <div className={style['destination-header']}>
      <Image imageUrl={imageUrl} />
      <h1 className={style.caption}>{caption}</h1>
    </div>
  );
}
