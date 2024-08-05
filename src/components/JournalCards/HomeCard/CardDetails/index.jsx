import { Link } from 'react-router-dom';
import AuthorDetails from '../../../JournalDetails/AuthorDetails';
import ViewsDetails from '../../../JournalDetails/ViewsDetails';
import style from '../index.module.css';
import { PATHS } from '../../../../constants/paths';
import LikesDetails from '../../../JournalDetails/LikesDetails';

export default function CardDetails(
  {
    author,
    title,
    description,
    fontSize,
    viewsCount,
    journalId,
    likesCount,
  },
) {
  return (
    <div style={{ fontSize }} className={style.info}>
      <div style={{ display: 'flex', gap: '.5em', justifyContent: 'space-between', padding: '.5em 0' }}>
        <AuthorDetails author={author} />

          <LikesDetails likesCount={likesCount} />
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
