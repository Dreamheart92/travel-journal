import { normalizeName } from '../../../../utils/stringUtils';
import style from './index.module.css';

export default function DestinationLabel({ destination }) {
  return (
    <p className={style.label}>{normalizeName(destination)}</p>
  );
}
