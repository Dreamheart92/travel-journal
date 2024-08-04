import Image from '../../../Image';
import style from './index.module.css';

export default function CardImage({ imageUrl, size }) {
  return (
    <div style={size} className={style['journal-image']}>
      <Image imageUrl={imageUrl} />
    </div>
  );
}
