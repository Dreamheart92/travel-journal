import { Link } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import JournalCardInfo from './JournalCardInfo';
import JournalCardImage from './JournalCardImage';

export default function JournalCard({ journal, size = 'md' }) {
  const {
    _id: journalId,
    author,
    title,
    description,
    imageUrl,
  } = journal;

  let cardStyle;

  switch (size) {
    case 'sm': {
      cardStyle = {
        width: '19.8em',
        height: '12em',
        fontSize: '.75em',
      };
      break;
    }
    case 'md': {
      cardStyle = {
        width: '25em',
        height: '15em',
        fontSize: '1em',
      };
      break;
    }
    default:
  }

  return (
    <div>
      <Link to={`${PATHS.DETAILS}/${journalId}`}>
        <JournalCardImage
          size={{ width: cardStyle.width, height: cardStyle.height }}
          imageUrl={imageUrl}
        />
        <JournalCardInfo
          author={author.username}
          title={title}
          imageUrl={author.imageUrl}
          description={description}
          fontSize={cardStyle.fontSize}
        />
      </Link>
    </div>
  );
}
