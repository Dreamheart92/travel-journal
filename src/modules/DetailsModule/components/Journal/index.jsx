import { useNavigate } from 'react-router-dom';
import Image from '../../../../components/Image';
import Button from '../../../../components/Button';
import { PATHS } from '../../../../constants/paths';
import JournalContent from '../../../../components/JournalContent';
import style from './index.module.css';
import Map from '../../../../components/Map';

export default function Journal({ journal, onOpenModal }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={style['journal-image-wrapper']}>
        <Image imageUrl={journal.imageUrl} />

        {journal.isJournalOwner && (
          <div className={style.controls}>
            <Button
              onClick={() => navigate(`${PATHS.EDIT}/${journal._id}`)}
              variant="secondary"
              caption="Edit"
            />
            <Button
              onClick={() => onOpenModal()}
              variant="warning"
              caption="Delete"
            />
          </div>
        )}
      </div>

      <JournalContent journal={journal} />
      <Map center={{ lat: Number(journal.location.lat), lng: Number(journal.location.lng) }} />
    </>
  );
}
