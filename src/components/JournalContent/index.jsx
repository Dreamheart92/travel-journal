import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons/faComments';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { formatDate, splitByNewLine } from '../../helpers';
import CatalogueCardButton from '../CatalogueCard/CatalogueCardButton';

import style from './index.module.css';

// Todo: pass the total comments

export default function JournalContent({ journal, readMore = false }) {
  const content = readMore ? `${journal.description.slice(0, 500)}...` : journal.description;

  return (
    <div className={style.info}>
      <div className={style.header}>
        <div className={style['info-container']}>
          <FontAwesomeIcon icon={faCalendar} />
          <p>{formatDate(journal.date)}</p>
        </div>

        <div className={style['info-container']}>
          <FontAwesomeIcon icon={faPencil} />
          <p>{journal.author.username}</p>
        </div>
      </div>

      <div className={style.description}>
        <h1>{journal.title}</h1>
        {journal.location
          && <h4>{journal.location}</h4>}
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
            <CatalogueCardButton
              caption="Read more"
            />

            <div className={style.comments}>
              {/*<p>{totalComments}</p>*/}
              <p>ADD THE TOTAL COMMENTS</p>
              <FontAwesomeIcon icon={faComments} />
            </div>
          </div>
        )}

    </div>
  );
}
