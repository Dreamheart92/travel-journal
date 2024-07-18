import ErrorMessage from '../ErrorMessage/index.jsx';

import style from './index.module.css';

export default function Form({ error, children, ...props }) {
  return (
    <form {...props} className={style.form}>
      {error
        && <ErrorMessage message={error.message} />}
      {children}
    </form>
  );
}
