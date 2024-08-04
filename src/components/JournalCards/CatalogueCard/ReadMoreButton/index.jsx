import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import style from './index.module.css';
import { PATHS } from '../../../../constants/paths';

export default function ReadMoreButton({ journalId }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`${PATHS.DETAILS}/${journalId}`);
  };

  return (
    <button
      className={style.button}
      type="button"
      onClick={handleRedirect}
    >
      <span className={style.visible}>
        READ MORE
      </span>
      <FontAwesomeIcon className={style['arrow-icon']} icon={faArrowRight} />
      <span className={style.hidden}>READ MORE</span>
    </button>
  );
}
