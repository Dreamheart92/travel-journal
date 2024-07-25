import style from './index.module.css';

export default function DefaultLayout({ children }) {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
}
