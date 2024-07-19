import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';

import style from './index.module.css';

export default function CatalogueCardInfo(
  {
    title,
    date,
    description,
    author,
    totalComments,
  },
) {
  return (
    <div className={style.info}>
      <div className={style.description}>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{`${description.slice(0, 500)}...`}</p>
      </div>

      <div className={style['additional-info']}>
        <p>
          Post by:
          {author}
        </p>

        <div>
          <p>{totalComments}</p>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>

    </div>
  );
}

CatalogueCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};
