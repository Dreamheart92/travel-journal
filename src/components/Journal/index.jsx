import style from './index.module.css';
import JournalHeader from './JournalHeader';
import Image from '../Image';
import JournalContent from './JournalContent';

export default function Journal(
  {
    id,
    title,
    location,
    author,
    date,
    imageUrl,
    description,
  },
) {
  return (
    <div className={style.container}>
      <JournalHeader
        title={title}
        location={location}
        author={author.username}
        date={date}
      />

      <Image imageUrl={imageUrl} />

      <JournalContent description={description} />
    </div>
  );
}
