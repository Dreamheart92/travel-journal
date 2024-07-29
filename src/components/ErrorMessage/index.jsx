import style from './index.module.css';

export default function ErrorMessage({ large = false, isRefreshError = false, message }) {
  const errorClass = `${style['error-message']} ${large ? style.large : style.small}`;

  const handleRefresh = () => {
    window.location.reload();
  };

  if (isRefreshError) {
    return (
      <div className={style['error-container']}>
        <p className={errorClass}>{message}</p>
        <p className={errorClass}>Please </p>

        <p
          onClick={handleRefresh}
          className={`${errorClass} ${style.refresh}`}
        >
          refresh
        </p>

        <p className={errorClass}>or try again later.</p>
      </div>
    );
  }

  return (
    <p className={errorClass}>
      {message}
    </p>
  );
}
