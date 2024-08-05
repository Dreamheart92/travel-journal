import JournalDetailsContainer from '../JournalDetailsContainer';
import { convertToRelativeTime } from '../../../utils/dateUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';

export default function PublishedDetails({ createdAt }) {
  return (
    <JournalDetailsContainer>
      <FontAwesomeIcon icon={faPencil} />
      <p>
        {convertToRelativeTime(createdAt)}
      </p>
    </JournalDetailsContainer>
  );
}
