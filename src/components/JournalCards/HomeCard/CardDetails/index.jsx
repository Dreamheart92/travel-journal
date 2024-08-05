import { Link } from 'react-router-dom';
import AuthorDetails from '../../../JournalDetails/AuthorDetails';
import ViewsDetails from '../../../JournalDetails/ViewsDetails';
import { PATHS } from '../../../../constants/paths';
import LikesDetails from '../../../JournalDetails/LikesDetails';
import style from './index.module.css';

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
      <div className={style['details-wrapper']}>
        <AuthorDetails author={author} />

        <div className={style['likes-views-wrapper']}>
          <LikesDetails likesCount={likesCount} />
          <ViewsDetails viewsCount={viewsCount} />
        </div>
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
