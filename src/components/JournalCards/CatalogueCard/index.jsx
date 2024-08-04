import { Link } from 'react-router-dom';
import Image from '../../Image';
import { PATHS } from '../../../constants/paths';
import style from './index.module.css';
import JournalContent from '../../JournalContent';
import DestinationLabel from './DestinationLabel';

export default function JournalCatalogueCard({ journal }) {
  const {
    destination,
    imageUrl,
  } = journal;

  return (
    <div className={style.wrapper}>
      <div className={style['image-wrapper']}>
        <Link
          to={`${PATHS.DETAILS}/${journal._id}`}
        >
          <Image
            imageUrl={imageUrl}
          />
        </Link>
      </div>

      <JournalContent journal={journal} readMore />

      <DestinationLabel
        destination={destination.name}
      />
    </div>
  );
}
