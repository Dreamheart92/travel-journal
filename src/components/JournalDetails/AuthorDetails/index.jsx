import { Link } from 'react-router-dom';
import UserProfileImage from '../../UserProfileImage';
import JournalDetailsContainer from '../JournalDetailsContainer';
import { PATHS } from '../../../constants/paths';

export default function AuthorDetails({ author }) {
  return (
    <JournalDetailsContainer>
      <Link to={`${PATHS.CATALOGUE}?author=${author._id}`}>
        <UserProfileImage size="sm" imageUrl={author.imageUrl} />
        <p>{author.username}</p>
      </Link>
    </JournalDetailsContainer>
  );
}
