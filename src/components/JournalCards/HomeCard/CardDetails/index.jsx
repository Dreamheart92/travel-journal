import AuthorDetails from '../../../JournalDetails/AuthorDetails';
import ViewsDetails from '../../../JournalDetails/ViewsDetails';
import style from '../index.module.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../../constants/paths';

export default function CardDetails(
  {
    author,
    title,
    description,
    fontSize,
    imageUrl,
    viewsCount,
    journalId,
  },
) {
  return (
    <div style={{ fontSize }} className={style.info}>
      <div style={{ display: 'flex', gap: '.5em', justifyContent: 'space-between', padding: '.5em 0' }}>
        <AuthorDetails
          username={author}
          image={imageUrl}
        />

        <ViewsDetails viewsCount={viewsCount} />
      </div>

      <Link to={`${PATHS.DETAILS}/${journalId}`}>
        <h3>{title}</h3>
      </Link>
      <p className={style.description}>
        {`${description.slice(0, 100)}...`}
      </p>

    </div>
  );
}
