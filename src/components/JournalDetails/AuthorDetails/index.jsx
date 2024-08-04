import UserProfileImage from '../../UserProfileImage';
import JournalDetailsContainer from '../JournalDetailsContainer';

export default function AuthorDetails({ image, username }) {
  return (
    <JournalDetailsContainer>
      <UserProfileImage size="sm" imageUrl={image} />
      <p>{username}</p>
    </JournalDetailsContainer>
  );
}
