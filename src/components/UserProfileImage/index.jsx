import Image from '../Image';
import style from './index.module.css';

export default function UserProfileImage({ imageUrl, size = 'md' }) {
  const image = imageUrl || '/userPlaceholder.png';

  const wrapperClassName = size === 'md' ? style.medium : style.small;

  return (
    <div className={wrapperClassName}>
      <Image imageUrl={image} />
    </div>
  );
}
