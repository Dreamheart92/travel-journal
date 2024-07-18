import PropTypes from 'prop-types';

import style from './index.module.css';

export default function Button(
  {
    variant = 'primary',
    caption,
    isLoading,
    onClick,
    isSubmitButton = false,
  },
) {
  return (
    <button
      onClick={onClick}
      type={isSubmitButton ? 'submit' : 'button'}
      className={`${style.button} ${style[variant]} ${isLoading ? style.loading : null}`}
    >
      {caption}
      {isLoading && <div className={style.loader} />}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  caption: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  isSubmitButton: PropTypes.bool,
};
