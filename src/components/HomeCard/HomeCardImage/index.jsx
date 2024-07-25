import Image from '../../Image';

import style from '../index.module.css';

export default function HomeCardImage({ imageUrl }) {
  return (
    <div className={style['journal-image']}>
      <Image imageUrl={imageUrl} />
    </div>
  );
}
