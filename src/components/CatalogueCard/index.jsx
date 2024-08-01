import { Link } from 'react-router-dom';
import Image from '../Image';
import { PATHS } from '../../constants/paths';
import CatalogueCardDestinationLabel from './CatalogueCardDestinationLabel';
import style from './index.module.css';
import JournalContent from '../JournalContent';

export default function JournalCatalogueCard({ journal }) {
  const {
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

        <JournalContent journal={journal} readMore />

        <CatalogueCardDestinationLabel
          destination={destination.name}
        />
      </Link>
    </div>
  );
}
