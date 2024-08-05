import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from '../../../../components/Image';
import Button from '../../../../components/Button';
import { PATHS } from '../../../../constants/paths';
import JournalContent from '../../../../components/JournalContent';
import style from './index.module.css';
import Map from '../../../../components/Map';
import useOptimisticActions from '../../../../hooks/useOptimisticActions';
import { selectUser } from '../../../../store/auth/selectors';

export default function Journal({ journal, onOpenModal }) {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const { likeJournalOptimistic } = useOptimisticActions();

  const handleLikeJournal = () => {
    likeJournalOptimistic(journal._id, user._id);
  };

  const { isJournalOwner } = journal;
  const isLikedJournal = journal.likes.userIds.includes(user?._id);

  const likeButtonCaption = isLikedJournal ? 'Liked' : 'Like';

  return (
    <>
      <div className={style['journal-image-wrapper']}>
        <Image imageUrl={journal.imageUrl} />

        <div className={style.controls}>
          {isJournalOwner && (
            <>
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
            </>
          )}

          {!isJournalOwner && user
            && (
              <Button
                caption={likeButtonCaption}
                variant={isLikedJournal ? 'secondary' : 'primary'}
                onClick={handleLikeJournal}
              />
            )}
        </div>
      </div>

      <JournalContent journal={journal} />
      <Map center={{ lat: Number(journal.location.lat), lng: Number(journal.location.lng) }} />
    </>
  );
}
