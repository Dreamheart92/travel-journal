import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons/faComments';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { formatDate, splitByNewLine } from '../../helpers';
import CatalogueCardButton from '../CatalogueCard/CatalogueCardButton';

import style from './index.module.css';

export default function JournalContent(
  {
    title,
    date,
    content: rawContent,
    author,
    totalComments,
    location,
    readMore = false,
  },
) {
  const content = readMore ? `${rawContent.slice(0, 500)}...` : rawContent;

  return (
    <div className={style.info}>
      <div className={style.header}>
        <div className={style['info-container']}>
          <FontAwesomeIcon icon={faCalendar} />
          <p>{formatDate(date)}</p>
        </div>

        <div className={style['info-container']}>
          <FontAwesomeIcon icon={faPencil} />
          <p>{author}</p>
        </div>
      </div>

      <div className={style.description}>
        <h1>{title}</h1>
        {location
          && <h4>{location}</h4>}
        {readMore
          && <p>{content}</p>}

        {!readMore
          && (
            <div className={style.content}>
              {splitByNewLine(rawContent).map((chunk, index) => (
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
              <p>{totalComments}</p>
              <FontAwesomeIcon icon={faComments} />
            </div>
          </div>
        )}

    </div>
  );
}

JournalContent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  totalComments: PropTypes.number,
  readMore: PropTypes.bool,
};
