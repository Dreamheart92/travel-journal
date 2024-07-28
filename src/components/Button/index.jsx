import style from './index.module.css';

export default function Button(
  {
    variant = 'primary',
    caption,
    isLoading,
    onClick,
    submitButton = false,
    disabled = false,
  },
) {
  return (
    <button
      onClick={onClick}
      type={submitButton ? 'submit' : 'button'}
      disabled={disabled}
      className={`${style.button} ${style[variant]} ${isLoading ? style.loading : null}`}
    >
      {caption}
      {isLoading && <div className={style.loader} />}
    </button>
  );
}
