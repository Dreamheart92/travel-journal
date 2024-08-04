import { convertToRelativeTime } from '../../../utils/dateUtils';
import { splitByNewLine } from '../../../utils/stringUtils';

import style from './index.module.css';

export default function CommentCardContent(
  {
    author,
    createdAt,
    content,
    id,
  },
) {
  return (
    <div className={style.content}>
      <h5>{author}</h5>
      <p>{convertToRelativeTime(createdAt)}</p>

      {splitByNewLine(content).map((chunk, index) => (
        <p key={index}>{chunk}</p>
      ))}
    </div>
  );
}
