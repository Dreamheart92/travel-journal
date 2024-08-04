import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import style from './index.module.css';

export default function ReadMoreButton() {
  return (
    <button
      className={style.button}
      type="button"
    >
      <span className={style.visible}>
        READ MORE
      </span>
      <FontAwesomeIcon className={style['arrow-icon']} icon={faArrowRight} />
      <span className={style.hidden}>READ MORE</span>
    </button>
  );
}
