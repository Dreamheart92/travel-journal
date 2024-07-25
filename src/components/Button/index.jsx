import style from './index.module.css';

export default function Button(
  {
    variant = 'primary',
    caption,
    isLoading,
    onClick,
    submitButton = false,
  },
) {
  return (
    <button
      onClick={onClick}
      type={submitButton ? 'submit' : 'button'}
      className={`${style.button} ${style[variant]} ${isLoading ? style.loading : null}`}
    >
      {caption}
      {isLoading && <div className={style.loader} />}
    </button>
  );
}
