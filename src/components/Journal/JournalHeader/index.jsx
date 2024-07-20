import { formatDate } from '../../../utility/utility';
import style from './index.module.css';

export default function JournalHeader(
  {
    title,
    location,
    author,
    date,
    id,
  },
) {
  return (
    <header>
      <h1>{title}</h1>
      <h4>{location}</h4>
      <p>
        By:
        {author}
      </p>
      <div className={style.wrapper}>
        <p>
          Date:
          {formatDate(date)}
        </p>
      </div>
    </header>
  );
}
