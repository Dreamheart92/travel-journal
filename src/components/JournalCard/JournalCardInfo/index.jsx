import style from '../index.module.css';
import UserProfileImage from '../../UserProfileImage';

export default function JournalCardInfo(
  {
    author,
    title,
    description,
    fontSize,
    imageUrl,
  },
) {
  return (
    <div style={{ fontSize }} className={style.info}>
      <div className={style.author}>
        <UserProfileImage size="sm" imageUrl={imageUrl} />
        <p>{author}</p>
      </div>

      <h2>{title}</h2>
      <p
        className={style.description}
      >
        {`${description.slice(0, 100)}...`}
      </p>

    </div>
  );
}
