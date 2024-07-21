import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/index';
import style from './index.module.css';

export default function Form(
  {
    error,
    children,
    onSubmit,
    isSubmitting,
  },
) {
  return (
    <form
      onSubmit={onSubmit}
      className={style.form}
    >

      <div className={style['error-container']}>
        {error && !isSubmitting
          && <ErrorMessage message={error.message} />}
      </div>

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
  isSubmitting: PropTypes.bool,
  children: PropTypes.node,
};
