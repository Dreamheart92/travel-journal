import { Link } from 'react-router-dom';
import Image from '../Image';
import { PATHS } from '../../constants/paths';
import journalPropTypes from '../../propTypes/journalPropTypes';
import JournalCardInfo from './JournalCardInfo';
import JournalCardImage from './JournalCardImage';

export default function JournalCard({ journal }) {
  const {
    _id: journalId,
    author,
    title,
    description,
    imageUrl,
  } = journal;

  return (
    <div>
      <Link
        to={`${PATHS.DETAILS}/${journalId}`}
      >

        <JournalCardImage
          imageUrl={imageUrl}
        />

        <JournalCardInfo
          author={author.username}
          title={title}
          description={description}
        />
      </Link>
    </div>
  );
}

JournalCard.propTypes = journalPropTypes;
