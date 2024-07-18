import style from './index.module.css';

export default function Form({ error, children, ...props }) {
  return (
    <form {...props} className={style.form}>
      {error
        && <p style={{ textAlign: 'center' }} className="error-message">{error.message}</p>}
      {children}
    </form>
  );
}
