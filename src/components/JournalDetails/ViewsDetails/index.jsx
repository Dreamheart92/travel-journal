import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import JournalDetailsContainer from '../JournalDetailsContainer';

export default function ViewsDetails({ viewsCount }) {
  return (
    <JournalDetailsContainer>
      <FontAwesomeIcon icon={faEye} />
      <p>{viewsCount}</p>
    </JournalDetailsContainer>
  );
}
