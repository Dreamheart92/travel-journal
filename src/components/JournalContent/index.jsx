import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons/faComments';
import { splitByNewLine } from '../../utils/stringUtils';
import style from './index.module.css';
import AuthorDetails from '../JournalDetails/AuthorDetails';
import DestinationDetails from '../JournalDetails/DestinationDetails';
import DateDetails from '../JournalDetails/DateDetails';
import ViewsDetails from '../JournalDetails/ViewsDetails';
import ReadMoreButton from '../JournalCards/CatalogueCard/ReadMoreButton';

export default function JournalContent({ journal, readMore = false }) {
  const content = readMore ? `${journal.description.slice(0, 500)}...` : journal.description;

  return (
    <div className={style.info}>
      <div className={style.header}>

        <AuthorDetails
          image={journal.author.imageUrl}
          username={journal.author.username}
        />

        <DestinationDetails destination={journal.destination.name} />

        <DateDetails date={journal.date} />

        <ViewsDetails viewsCount={journal.views.count} />

      </div>

      <div className={style.description}>
        <h1>{journal.title}</h1>
        <h4>{journal.location.formatted_address}</h4>

        {readMore
          && <p>{content}</p>}

        {!readMore
          && (
            <div className={style.content}>
              {splitByNewLine(journal.description).map((chunk, index) => (
                <p key={index}>{chunk}</p>
              ))}
            </div>
          )}
      </div>

      {readMore
        && (
          <div className={style['additional-info']}>
            <ReadMoreButton />

            <div className={style.comments}>
              <p>{journal.comments.length}</p>
              <FontAwesomeIcon icon={faComments} />
            </div>
          </div>
        )}
    </div>
  );
}
