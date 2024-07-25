import Image from '../Image';
import style from './index.module.css';

export default function UserProfileImage({ imageUrl }) {
  const image = imageUrl || '/userPlaceholder.png';

  return (
    <div className={style['profile-image']}>
      <Image imageUrl={image} />
    </div>
  );
}
