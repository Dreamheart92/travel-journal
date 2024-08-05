import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import JournalDetailsContainer from '../JournalDetailsContainer';

export default function LikesDetails({ likesCount }) {
  return (
    <JournalDetailsContainer>
      <FontAwesomeIcon icon={faHeart} />
      <p>{likesCount}</p>
    </JournalDetailsContainer>
  );
}
