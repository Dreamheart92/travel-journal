import { Link } from 'react-router-dom';
import Image from '../Image';
import { PATHS } from '../../constants/paths';
import journalPropTypes from '../../propTypes/journalPropTypes';
import CatalogueCardInfo from './CatalogueCardInfo';
import CatalogueCardDestinationLabel from './CatalogueCardDestinationLabel';
import style from './index.module.css';

export default function JournalCatalogueCard({ journal }) {
  const {
    date,
    comments,
    author,
    description,
    title,
    destination,
    imageUrl,
  } = journal;

  return (
    <div className={style.wrapper}>
      <Link
        to={`${PATHS.DETAILS}/${journal._id}`}
      >
        <div className={style['image-wrapper']}>
          <Image
            imageUrl={imageUrl}
          />
        </div>
        <CatalogueCardInfo
          date={date}
          totalComments={comments.length}
          author={author.username}
          description={description}
          title={title}
        />
        <CatalogueCardDestinationLabel
          destination={destination.name}
        />
      </Link>
    </div>
  );
}

JournalCatalogueCard.propTypes = journalPropTypes;
