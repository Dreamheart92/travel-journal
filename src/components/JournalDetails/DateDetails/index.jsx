import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { formatDate } from '../../../utils/dateUtils';
import JournalDetailsContainer from '../JournalDetailsContainer';

export default function DateDetails({ date }) {
  return (
    <JournalDetailsContainer>
      <FontAwesomeIcon icon={faCalendar} />
      <p>{formatDate(date)}</p>
    </JournalDetailsContainer>
  );
}
