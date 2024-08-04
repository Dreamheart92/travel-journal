import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import JournalDetailsContainer from '../JournalDetailsContainer';
import { normalizeName } from '../../../utils/stringUtils';
import { PATHS } from '../../../constants/paths';

export default function DestinationDetails({ destination }) {
  return (
    <JournalDetailsContainer>
      <Link
        to={`${PATHS.CATALOGUE}/${destination}`}
      >
        <FontAwesomeIcon icon={faGlobe} />
        <p>{normalizeName(destination)}</p>
      </Link>
    </JournalDetailsContainer>
  );
}
