import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons/faComments';

import style from './index.module.css';

export default function CommentsSectionHeader({ user }) {
  const caption = user ? 'Leave a comment' : 'Login to leave a comment';

  return (
    <div className={style['leave-comment']}>
      <FontAwesomeIcon icon={faComments} />
      <h5>{caption}</h5>
    </div>
  );
}

CommentsSectionHeader.propTypes = {
  user: PropTypes.bool,
};
