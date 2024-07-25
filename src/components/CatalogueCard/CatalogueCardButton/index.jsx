import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import style from './index.module.css';

export default function CatalogueCardButton({ caption }) {
  return (
    <button
      className={style.button}
      type="button"
    >
      <span className={style.visible}>
        {caption}
      </span>
      <FontAwesomeIcon className={style['arrow-icon']} icon={faArrowRight} />
      <span className={style.hidden}>{caption}</span>
    </button>
  );
}
