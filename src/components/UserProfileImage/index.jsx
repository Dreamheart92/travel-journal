import style from './index.module.css';
import Image from '../Image';

export default function UserProfileImage({ imageUrl }) {
  return (
    <div className={style['profile-image']}>
      <Image imageUrl={imageUrl} />
    </div>
  );
}
