import { Link } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';
import CardDetails from './CardDetails';
import CardImage from './CardImage';

export default function HomeCard({ journal, size = 'md' }) {
  const {
    _id: journalId,
    author,
    title,
    description,
    imageUrl,
    views,
  } = journal;

  let cardStyle;

  switch (size) {
    case 'sm': {
      cardStyle = {
        width: '19.8em',
        height: '12em',
        fontSize: '.9em',
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
        <CardImage
          size={{ width: cardStyle.width, height: cardStyle.height }}
          imageUrl={imageUrl}
        />
      </Link>

      <CardDetails
        author={author}
        title={title}
        description={description}
        fontSize={cardStyle.fontSize}
        viewsCount={views.count}
        journalId={journal._id}
      />
    </div>
  );
}
