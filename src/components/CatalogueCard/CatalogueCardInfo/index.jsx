import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons/faComments';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { formatDate } from '../../../utility/utility';
import CatalogueCardButton from '../CatalogueCardButton';
import InfoBlock from '../../InfoBlock';
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
        <InfoBlock
          textAlign="left"
          title={title}
          caption={`${description.slice(0, 500)}...`}
        />
      </div>

      <div className={style['additional-info']}>
        <CatalogueCardButton
          caption="Read more"
        />

        <div className={style.comments}>
          <p>{totalComments}</p>
          <FontAwesomeIcon icon={faComments} />
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
