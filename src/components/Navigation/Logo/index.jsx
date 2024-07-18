import { Link } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';

import style from './index.module.css';

export default function Logo() {
  return (
    <div className={style.logo}>
      <Link to={PATHS.HOME}>
        <h1>TRAVEL JOURNAL</h1>
      </Link>
    </div>
  );
}
