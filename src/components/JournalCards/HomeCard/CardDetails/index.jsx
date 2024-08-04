import AuthorDetails from '../../../JournalDetails/AuthorDetails';
import ViewsDetails from '../../../JournalDetails/ViewsDetails';
import style from '../index.module.css';

export default function CardDetails(
  {
    author,
    title,
    description,
    fontSize,
    imageUrl,
    viewsCount,
  },
) {
  return (
    <div style={{ fontSize }} className={style.info}>
      <div style={{ display: 'flex', gap: '.5em', justifyContent: 'space-between', paddingTop: '.5em' }}>
        <AuthorDetails
          username={author}
          image={imageUrl}
        />

        <ViewsDetails viewsCount={viewsCount} />
      </div>

      <h2>{title}</h2>
      <p className={style.description}>
        {`${description.slice(0, 100)}...`}
      </p>

    </div>
  );
}
