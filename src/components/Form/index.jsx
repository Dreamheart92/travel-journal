import PropTypes from 'prop-types';

import ErrorMessage from '../ErrorMessage/index';

import style from './index.module.css';

export default function Form({
  error,
  children,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={style.form}
    >
      {error
        && <ErrorMessage message={error.message} />}
      {children}
    </form>
  );
}

Form.propTypes = {
  error: PropTypes.oneOf([
    PropTypes.shape({ error: PropTypes.bool, message: PropTypes.string }),
    PropTypes.oneOf([null]),
  ]),
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
