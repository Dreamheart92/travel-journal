import style from './index.module.css';
import JournalHeader from './JournalHeader';

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
        id={id}
        title={title}
        location={location}
        author={author.username}
        date={date}
        imageUrl={imageUrl}
        description={description}
      />
    </div>
  );
}
