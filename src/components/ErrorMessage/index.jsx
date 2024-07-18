import PropTypes from 'prop-types';

import style from './index.module.css';

export default function ErrorMessage({ message }) {
  return (
    <p className={style['error-message']}>{message}</p>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
