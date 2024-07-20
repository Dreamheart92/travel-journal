import { Link } from 'react-router-dom';
import Image from '../Image';
import { PATHS } from '../../constants/paths';
import journalPropTypes from '../../propTypes/journalPropTypes';
import CatalogueCardDestinationLabel from './CatalogueCardDestinationLabel';
import style from './index.module.css';
import JournalContent from '../JournalContent';

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

        <JournalContent
          date={date}
          totalComments={comments.length}
          author={author.username}
          content={description}
          title={title}
          readMore
        />

        <CatalogueCardDestinationLabel
          destination={destination.name}
        />
      </Link>
    </div>
  );
}

JournalCatalogueCard.propTypes = journalPropTypes;
