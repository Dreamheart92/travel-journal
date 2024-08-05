import { convertToRelativeTime } from '../../../utils/dateUtils';
import { splitByNewLine } from '../../../utils/stringUtils';

import style from './index.module.css';

export default function Content(
  {
    author,
    createdAt,
    content,
    id,
  },
) {
  return (
    <div className={style.content}>
      <h4 className={style.author}>{author}</h4>
      <p className={style['comment-date']}>{convertToRelativeTime(createdAt)}</p>

      {splitByNewLine(content).map((chunk, index) => (
        <p className={style.comment} key={index}>{chunk}</p>
      ))}
    </div>
  );
}
