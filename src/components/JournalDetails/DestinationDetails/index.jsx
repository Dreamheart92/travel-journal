import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import JournalDetailsContainer from '../JournalDetailsContainer';
import { normalizeName } from '../../../utils/stringUtils';

export default function DestinationDetails({ destination }) {
  return (
    <JournalDetailsContainer>
      <FontAwesomeIcon icon={faGlobe} />
      <p>{normalizeName(destination)}</p>
    </JournalDetailsContainer>
  );
}
